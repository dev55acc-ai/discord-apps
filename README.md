# Discord Apps Bot

## Setup
1. Create a Discord Developer Application at https://discord.com/developers/applications
2. Under "Bot", add a bot and copy the token.
3. Create `.env` in this directory:
   ```
   DISCORD_TOKEN=your_bot_token_here
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the bot:
   ```bash
   node bot.js
   ```

## Test Server
- Create a test server in Discord.
- Generate an invite link for the bot (OAuth2 URL Generator in the Developer Portal).
- Invite the bot to the server.
- Verify the bot responds to `/ping`.