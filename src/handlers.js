'use strict';

// Slash-command handlers. Voice: terse. No mascot. Never "AI-powered".

const MAP_LINKS = []; // [label, url] pairs a server admin fills in.

function ping(interaction) {
  const ws = interaction.client && interaction.client.ws && interaction.client.ws.ping;
  const content = Number.isFinite(ws) && ws >= 0 ? `pong (${Math.round(ws)}ms)` : 'pong';
  return interaction.reply({ content, ephemeral: true });
}

function map(interaction) {
  const lines = MAP_LINKS.map(([label, url]) => `- ${label}: ${url}`).join('\n');
  const content = lines ? `map:\n${lines}` : 'No links set yet.';
  return interaction.reply({ content, ephemeral: true });
}

async function audit(interaction) {
  const guild = interaction.guild;
  if (!guild) {
    return interaction.reply({ content: 'audit: server only.', ephemeral: true });
  }
  if (typeof guild.channels.fetch === 'function') {
    await guild.channels.fetch().catch(() => {});
  }
  const channels = guild.channels && guild.channels.cache ? guild.channels.cache.size : 0;
  const members = guild.memberCount != null ? guild.memberCount : 'unknown';
  return interaction.reply({
    content: `audit ok. channels: ${channels}. members: ${members}.`,
    ephemeral: true,
  });
}

const HANDLERS = { ping, map, audit };

async function dispatch(interaction) {
  if (!interaction.isChatInputCommand()) return false;
  const handler = HANDLERS[interaction.commandName];
  if (!handler) return false;
  try {
    await handler(interaction);
    return true;
  } catch {
    if (!interaction.replied && !interaction.deferred) {
      await interaction
        .reply({ content: 'failed. run it again.', ephemeral: true })
        .catch(() => {});
    }
    return false;
  }
}

module.exports = { HANDLERS, dispatch };
