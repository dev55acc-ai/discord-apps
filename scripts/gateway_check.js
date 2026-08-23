const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv')?.config?.();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
  const guilds = client.guilds.cache.map(g => ({ id: g.id, name: g.name, memberCount: g.memberCount }));
  console.log(JSON.stringify({
    step: 'gateway_ready',
    bot_tag: client.user.tag,
    bot_id: client.user.id,
    connected_guilds: guilds,
    on_test_guild: guilds.some(g => g.id === process.env.TEST_GUILD_ID),
  }, null, 1));
  client.destroy().then(() => process.exit(0));
});

client.on('error', e => { console.error('gateway_error:', e.message); process.exit(1); });

const token = process.env.DISCORD_BOT_TOKEN;
if (!token) { console.error('no token'); process.exit(1); }
client.login(token);
setTimeout(() => { console.error('timeout waiting for ready'); process.exit(2); }, 25000);
