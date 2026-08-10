const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require('discord.js');
const fs = require('fs');
require('dotenv').config();

const DATA_FILE = './links.json';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Load data
function loadLinks() {
    if (!fs.existsSync(DATA_FILE)) return {};
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

// Save data
function saveLinks(links) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(links, null, 2));
}

const commands = [
    new SlashCommandBuilder()
        .setName('map')
        .setDescription('Resource shortcuts')
        .addSubcommand(subcommand =>
            subcommand.setName('add')
                .setDescription('Add a resource link')
                .addUserOption(opt => opt.setName('url').setDescription('The URL to map').setRequired(true)) // Note: Simplified for prototype, using string
                .addStringOption(opt => opt.setName('key').setDescription('The shortcut key').setRequired(true))
                .addStringOption(opt => opt.setName('url_val').setDescription('The URL').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand.setName('get')
                .setDescription('Get a resource link')
                .addStringOption(opt => opt.setName('key').setDescription('The shortcut key').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand.setName('list')
                .setDescription('List all shortcuts')
        )
        .addSubcommand(subcommand =>
            subcommand.setName('remove')
                .setDescription('Remove a resource link')
                .addStringOption(opt => opt.setName('key').setDescription('The shortcut key').setRequired(true))
        ),
].map(command => command.toJSON());

client.once('ready', async () => {
    console.log(`Logged in as ${client.user.tag}`);
    
    const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
    try {
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands },
        );
        console.log('Slash commands registered.');
    } catch (error) {
        console.error(error);
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'map') {
        const subcommand = interaction.options.getSubcommand();
        const links = loadLinks();

        if (subcommand === 'add') {
            if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
                return interaction.reply({ content: 'Insufficient permissions.', ephemeral: true });
            }
            const key = interaction.options.getString('key');
            const url = interaction.options.getString('url_val');
            links[key] = url;
            saveLinks(links);
            return interaction.reply({ content: `Mapped ${key} to ${url}.` });
        }

        if (subcommand === 'get') {
            const key = interaction.options.getString('key');
            const url = links[key];
            if (!url) return interaction.reply({ content: 'Not found.', ephemeral: true });
            return interaction.reply({ content: `Resource [${key}]: ${url}` });
        }

        if (subcommand === 'list') {
            const keys = Object.keys(links);
            if (keys.length === 0) return interaction.reply({ content: 'No links mapped.', ephemeral: true });
            const list = keys.map(k => `\`${k}\`: ${links[k]}`).join('\n');
            return interaction.reply({ content: `Available resources:\n${list}` });
        }

        if (subcommand === 'remove') {
            if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
                return interaction.reply({ content: 'Insufficient permissions.', ephemeral: true });
            }
            const key = interaction.options.getString('key');
            if (!links[key]) return interaction.reply({ content: 'Not found.', ephemeral: true });
            delete links[key];
            saveLinks(links);
            return interaction.reply({ content: `Removed ${key}.` });
        }
    }
});

client.login(process.env.DISCORD_TOKEN);
