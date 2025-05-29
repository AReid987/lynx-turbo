---
runme:
  id: 01JKJKJ0VT53WQAT94SD3AGGVE
  version: v3
---

---

## runme:
id: 01JKJKJ0VSQRKPBR1BCBX4HEGK
version: v3

# Lynx Docs

## Introduction

## Monorepo App Architecture

We use a combination of Python, React (Next.js), TypeScript, Drizzle (ORM), PostgreSQL, Radix, TailwindCSS throughout this Turborepo powered monorepo.

### Apps:

- lynx-agent: A Next.js web app.

### Packages:

- ui: A React Shared component library.
- typescript-sconfig: Shared tsconfig configurations used throughout the monorepo.
- eslint-config: eslint configurations (includes eslint-config-next, eslint-config-prettier other configs used throughout the monorepo). -->

<!-- TODO -->

<!-- utils: A React Shared utility library.

## Contributing

First, run the development server:

```bash {"id":"01JKJHYDTCKD8H997ZW2JADJ90"}
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edits will automatically reload the page.
You will see any output or errors in the console.

**Project structure:**

- `app/`: Contains the main application code.
- `public/`: Contains static assets like images and fonts.
- `styles/`: Contains global CSS styles.
- `components/`: Contains reusable React components.
- `pages/`: Contains the pages of the application.

**Home page:**

- `app/page.tsx`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

### Deployment

Both the Lynx WebUI and the Lynx Documentation are deployed on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).


---
runme:
  id: 01JKJKJ0VT53WQAT94SD3AGGVE
  version: v3
---

# Lynx WebUI

This is a [Next.js](https://nextjs.org/) WebUI for Lynx, the AI Agent.

## Features

- This feature list doubles as a Roadmap for the project.
- Items are checked as they become implemented.

### Lynx Agent

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

## Getting Started

First, run the development server:

```bash {"id":"01JKJHEHZV2VDK1G5A2XV5PT8E"}
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edits will automatically reload the page.
You will see any output or errors in the console.

Project structure:

- `app/`: Contains the main application code.
- `public/`: Contains static assets like images and fonts.
- `styles/`: Contains global CSS styles.
- `components/`: Contains reusable React components.
- `pages/`: Contains the pages of the application.
- Home page: `app/page.tsx`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
