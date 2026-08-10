// Load environment variables
require('dotenv').config();

const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const token = process.env.DISCORD_BOT_TOKEN;
const clientId = process.env.DISCORD_CLIENT_ID;

// Register a slash command
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Registering slash commands...');
    await rest.put(Routes.applicationCommands(clientId), { body: commands });
    console.log('Slash commands registered.');
  } catch (error) {
    console.error('Error registering commands:', error);
  }
})();

// Bot ready event
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Slash command interaction
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

// Login
client.login(token);