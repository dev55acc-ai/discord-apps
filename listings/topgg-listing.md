# Top.gg Listing Submission Package

## Dashboard Submission Requirements
- **Bot ID**: Discord Application ID
- **Short Description**: (Max 120 characters)
- **Long Description**: (Supports Markdown)
- **Tags**: Select up to 5 relevant tags.
- **Support Server**: Link to a Discord server for help.
- **Website/GitHub**: Links to source code or landing page.
- **Invite Link**: Standard Discord OAuth2 invite URL.

## Integration Steps
1. **List Project**: Submit through the Top.gg dashboard.
2. **Obtain Token**: Get API token from project's "Integrations & API" settings.
3. **Post Stats**: Use Top.gg API or `@top-gg/sdk` to periodically post server count.
4. **Track Votes**: Configure webhook endpoint for `vote.create` events.

## API Integration Notes
- **Authentication**: Include `Authorization: <YOUR_TOKEN>` header.
- **Rate Limits**: Respect 429 status codes.
- **Stats Endpoint**: POST `/api/bots/:id/stats` (body: `{ "server_count": number }`).
