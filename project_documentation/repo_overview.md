# Lynx Repository Overview

## Repository Overview

The Lynx repository is structured as a monorepo, designed for building AI-powered applications, specifically a Multi Agent System named "Lynx". It leverages a modern technology stack to ensure efficiency and scalability.

## Key Components

- **Frontends:**
    - **lynx-agent (Next.js App):** A primary user interface built with Next.js, intended for specific user roles interacting with the Lynx AI Agent.
    - **Lynx-frontend (Frontend App):** An additional frontend application, also designed to interface with \`data-lynx\`, but catering to different user roles than \`lynx-agent\`. The technology stack for this frontend is not explicitly detailed but is assumed to be web-based.
- **Backend:**
    - **data-lynx (Python/FastAPI Backend):** The core of the Lynx system, a "modular Multi Agent System" developed using Python and FastAPI. It is responsible for managing AI agents, handling user sessions, and providing the necessary APIs for the frontend applications to interact with the system.
- **Other Applications:**
    - **kwg (App - Role to be determined):** An application named \`kwg\`, whose specific purpose within the Lynx ecosystem is currently unclear.
    - **docs (Nextra App):** A documentation website for the Lynx project, built using Nextra, a Next.js-based framework optimized for documentation.
- **Packages (Shared Libraries):**
    - **ui (React Component Library):** A library of reusable React components, designed to ensure a consistent user interface across different frontend applications within the Lynx monorepo.
    - **eslint-config & typescript-config:** Configuration packages for ESLint and TypeScript, respectively. These packages promote code quality and consistency across the monorepo by enforcing standardized linting and TypeScript compilation settings.

## Technology Stack Highlights

- **Build System:** Turborepo - for efficient monorepo management.
- **Package Managers:** pnpm & uv - for managing project dependencies.
- **UI Framework:** Next.js, Motion, Shadcn UI, Radix, TailwindCSS - for building modern and responsive user interfaces.
- **Backend Framework:** FastAPI (Python) - for developing a robust and scalable backend system.
- **Database:** DataStax Astra DB, PostgreSQL, Neon, Cassandra - a combination of databases likely used for different purposes, with Astra DB specifically mentioned for session management.

## System Architecture Diagram

```mermaid
graph LR
    subgraph Frontends
        A[lynx-agent (Next.js)]
        B[Lynx-frontend]
    end
    C[data-lynx (FastAPI Backend)]
    D[kwg (App - TBD)]
    E[docs (Nextra)]
    F[ui (React Library)]
    G[eslint-config]
    H[typescript-config]

    A --> C
    B --> C
    C --> AstraDB[Astra DB]
    C --> PostgreSQL
    C --> Neon
    C --> Cassandra

    subgraph Packages
        F
        G
        H
    end

    style Frontends fill:#f9f,stroke:#333,stroke-width:2px
    style Packages fill:#ccf,stroke:#333,stroke-width:2px
    style C fill:#cff,stroke:#333,stroke-width:2px
    style D fill:#cfc,stroke:#333,stroke-width:2px
    style E fill:#fcf,stroke:#333,stroke-width:2px
```