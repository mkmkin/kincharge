<a href="https://chat.vercel.ai/">
  <h1 align="center">An Open Source AI Assistant</h1>
</a>

<p align="center">
    KinCharge AI Assistant is a free, open-source AI System that helps you supercharge and maximize your efficiency, satisfaction, and wellness.
    It is developed and operated using the following technologies and systems, which are mostly open source: NextJS, TailwindCSS, ShadCNUI, RadixUI, Vercel AI SDK, Mistrall, LocalAI, FireCrawl, n8n, OpenHab, HomeAssistant, NodeJS, Supabase, PostgreSQL, Vercel Cloud, Git, Github, Docker, Docker Hub, Linux, Ubuntu, LibreBoot, Cloud Servers, Local Servers, and more. Most of these open source technologies and systems are being customized and improved for more capabilities, more functionalities, and better adoption and integration.
</p>

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run KinCharge AI System. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various AI and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm dev
```

Your KinCharge AI Assistant instance should now be running on [localhost:3000](http://localhost:3000).
