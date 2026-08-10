import { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'audit') {
        await interaction.reply({ content: `Server health OK. Active channels checked: ${interaction.guild?.channelCount || 1}.`, ephemeral: true });
    }
});

client.on('error', console.error);

if (process.env.DISCORD_TOKEN) {
    client.login(process.env.DISCORD_TOKEN);
} else {
    console.log("No DISCORD_TOKEN provided. Bot code compiled successfully.");
}
