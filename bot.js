const { Client, GatewayIntentBits } = require('discord.js');
const { dispatch } = require('./src/handlers');

// Faber — runs against the test guild. Publishing stays gated; this does not.

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// discord.js v14 fires 'ready', v15 renames it 'clientReady'. Handle both.
let announced = false;
function onReady() {
  if (announced) return;
  announced = true;
  console.log(
    JSON.stringify({
      step: 'bot_ready',
      tag: client.user.tag,
      id: client.user.id,
      guilds: client.guilds.cache.map((g) => ({ id: g.id, name: g.name })),
      ts: new Date().toISOString(),
    })
  );
}
client.once('clientReady', onReady);
client.once('ready', onReady);

client.on('interactionCreate', (interaction) => {
  dispatch(interaction).catch((e) =>
    console.error(JSON.stringify({ step: 'dispatch_error', message: e && e.message }))
  );
});

client.on('error', (e) =>
  console.error(JSON.stringify({ step: 'client_error', message: e.message }))
);

const token = process.env.DISCORD_BOT_TOKEN;
if (!token) {
  console.error('no DISCORD_BOT_TOKEN in env');
  process.exit(1);
}
client.login(token);
