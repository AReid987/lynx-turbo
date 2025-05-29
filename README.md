# Lynx Docs

![Alt](https://repobeats.axiom.co/api/embed/506e195f6bce8cf33b59ac5913f3450229646bfd.svg "Repobeats analytics image")

---

[![CodSpeed Badge](https://img.shields.io/endpoint?url=https://codspeed.io/badge.json)](https://codspeed.io/AReid987/lynx)

## Introduction

## Monorepo App Architecture

### Technology

| Build System | Icon | Package Managers | Icon |
| --- | --- | --- | --- |
| Turborepo  | <img src="icons/turborepo.svg" width="32" height="32" alt="turborepo"> | uv | <img src="icons/uv.svg" width="32" height="32" alt="uv"> |
| Hatchling | <img src="icons/hatchling.png" height="32"> | pnpm | <img src="icons/pnpm.svg" width="32" height="32" alt="pnpm"> |
| ---------------- | -------- | ---------------- | -------- |
| **UI**      | **Icon** | **Backend**     | **Icon** |
| Motion      | <img src="icons/motion-dev.svg" width="32" height="32" alt="motion"> |Python      | <img src="icons/python.svg" width="32" height="32" alt="python">    |
| Shadcn UI   | <img src="icons/shadcn-ui.svg" width="32" height="32" alt="shadcn"> | FastAPI     | <img src="icons/fast-api.svg" width="32" height="32" alt="fastapi"> |
Radix       | <img src="icons/radix.svg" width="32" height="32" alt="radix">    |
| TailwindCSS | <img src="icons/tailwindcss.svg" width="32" height="32" alt="tailwind"> |
| ---------------- | -------- | ---------------- | -------- |
| **Containerization** | **Icon** | **Database** | **Icon** |
| Docker       | <img src="icons/docker.svg" width="32" height="32" alt="docker"> | Drizzle     | <img src="icons/drizzle.svg" width="32" height="32" alt="drizzle">  |
| Docker Compose | <img src="icons/docker-compose.svg" width="32" height="32" alt="docker-compose"> | PostgreSQL  | <img src="icons/postgresql.svg" width="32" height="32" alt="postgresql"> |
| | | Neon        | <img src="icons/neon.svg" width="32" height="32" alt="neon"> |
| | | Cassandra   | <img src="icons/cassandra.svg" width="32" height="32" alt="cassandra"> |
| ---------------- | -------- | ---------------- | -------- |
| **Network** | **Icon** | **DevOps** | **Icon** |
| Tailscale      | <img src="icons/tailscale.svg" width="32" height="32" alt="tailscale"> |
| ---------------- | -------- | ---------------- | -------- |
| **Apps** | **Icon** | **Packages** | **Icon** |
| **lynx-agent**: A Next.js Interface for **data-lynx** | <img src="icons/next-js.svg" width="32" height="32" alt="nextjs"> | **ui**: React shared component library | <img src="icons/shadcn-ui.svg" width="32" height="32" alt="shadcn"> |
| **docs**: A Next.js / Nextra web App for project documentation | <img src="icons/nextra.svg" width="32" height="32" alt="nextra"> | **typescript-config**: Shared tsconfig configurations used throughout the monorepo  | |
| **data-lynx**: A modular Multi Agent System | <img src="icons/langflow.svg" width="32" height="32" alt="nextjs"> | **eslint-config**: eslint configurations (includes eslint-config-next, eslint-config-prettier other configs used throughout the monorepo) | <img src="icons/eslint.svg" width="32" height="32"> |

---

<!-- TODO -->

## Contributing

#### Option 1:

Change into the web directory:

```bash
cd apps/lynx-agent
```

run the development server:

```bash {"id":"01JKJHYDTCKD8H997ZW2JADJ90"}
pnpm dev
```

#### Option 2:

From anywhere in the repo

```bash
pnpm dev --filter=@lynx/lynx-agent
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edits will automatically reload the page.
You will see any output or errors in the console.

**Project structure:**

**Turborepo**

![folder-icon](./icons/folder.svg) . <br />
|-- ![folder-icon](./icons/folder.svg) apps <br />
|    |-- ![folder-icon](./icons/folder.svg) docs <br />
|    |-- ![folder-icon](./icons/folder.svg) kwg <br />
|    |-- ![folder-icon](./icons/folder.svg) lynx-agent <br />
|    |-- ![folder-icon](./icons/folder.svg) data-lynx <br />
|    |-- ![folder-icon](./icons/folder.svg) icons <br />
|-- ![folder-icon](./icons/npm.svg) node_modules <br />
|-- ![folder-icon](./icons/npm.svg) package.json <br />
|-- ![folder-icon](./icons/folder.svg) packages <br />
|   |-- ![folder-icon](./icons/folder.svg) eslint-config <br />
|   |-- ![folder-icon](./icons/folder.svg) typescript-config <br />
|   |-- ![folder-icon](./icons/folder.svg) ui <br />
|-- ![folder-icon](./icons/yaml.svg) pnpm-lock.yaml <br />
|-- ![folder-icon](./icons/yaml.svg) pnpm-workspace.yaml <br />
|-- ![folder-icon](./icons/folder.svg) project_documenation <br />
|   |-- ![folder-icon](./icons/folder.svg) biz-dev <br />
|   |-- ![folder-icon](./icons/folder.svg) design-system <br />
|   |-- ![folder-icon](./icons/folder.svg) development <br />
|   |-- ![folder-icon](./icons/folder.svg) project-management <br />
|   |-- ![folder-icon](./icons/folder.svg) prompts <br />
|   |-- ![folder-icon](./icons/folder.svg) system-design <br />
|-- ![folder-icon](./icons/readme.svg) README.md <br />
|-- ![folder-icon](./icons/folder.svg) reference-architecture <br />
|   |-- ![folder-icon](./icons/folder.svg) astra-db <br />
|   |-- ![folder-icon](./icons/folder.svg) c4-system-context <br />
|   |-- ![folder-icon](./icons/folder.svg) d2 <br />

**lynx-agent**

- `app/`: Contains the main application code.
- `public/`: Contains static assets like images and fonts.
- `app/globals.css`: Contains global CSS styles.

<!-- - `components/`: Contains reusable React components. -->

**Home page:**

- `app/page.tsx`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load custom fonts. 
- Fonts sourced from Google Fonts & [Fontshare.com](https://www.fontshare.com/)

**Resources**
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deployment

Both lynx-agent and the Lynx Documentation are deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

## runme:

id: 01JKJKJ0VT53WQAT94SD3AGGVE
version: v3

# lynx-agent

This is a [Next.js](https://nextjs.org/) WebUI for Lynx, the AI Agent.

## Features

- This feature list doubles as a Roadmap for the project.
- Items are checked as they become implemented.

### UI

- [ ] **User Authentication:** Secure user login and registration.
- [ ] **Dashboard:** Overview of AI Agent activities and performance.
- [ ] **Task Management:** Create, manage, and track tasks.
- [ ] **Real-time Updates:** Live updates on task progress and AI Agent status.
- [ ] **Settings:** Customize your experience and preferences.

### Lynx CRM

- [ ] **ICP Generation**: Generate and manage ICP (Intelligent Customer Profiles).
- [ ] **Lead Management:** Create, view, and manage leads.
- [ ] **Contact Management:** Store and manage contact information.
- [ ] **Sales Pipeline:** Track sales opportunities and progress.
- [ ] **Reporting:** Generate reports on sales performance and other metrics.
- [ ] **Analytics:** Gain insights into customer behavior and trends.
- [ ] **Integration:** Seamless integration with other tools and services.
- [ ] **Settings:** Customize your CRM experience and preferences.

## Deployed on Vercel
