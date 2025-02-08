# System Architecture Notes

#3 High-Level Architecture (C4)

### Description of Components:

1. **Data Storage and Processing:**
   - **DataStax AstraDB:** For distributed database management using Apache Cassandra.
   - **Astra Unstructured Data Loader:** To manage and load unstructured data into AstraDB.
   - **Astra Streaming:** For real-time data streaming, enhanced with **Luna** for advanced capabilities.

2. **Business Logic:**
   - **Turborepo + pnpm:** Monorepo setup for managing multiple projects with shared dependencies.
   - **FastAPI + uv:** Python-based backend framework for building APIs, managed with the `uv` package manager.

3. **Frontend Applications:**
   - **Next.js App (Frontend):** Handles user authentication (AuthN), authorization (AuthZ), and includes a CRM for managing leads.
   - **Next.js App (Documentation & Collaboration):** Provides documentation and collaboration tools for sales reps.

4. **Observability:**
   - **Observability Dashboard:** For monitoring the health, performance, and activities within the system.

5. **Docker and Orchestration:**
   - **Docker Containers:** Each standalone application or service runs in its own Docker container.
   - **Docker Compose:** Orchestrates the Docker containers to ensure seamless deployment and management.

6. **Browser Control:**
   - **browseUse + Web UI:** Automates browser interactions and provides a web interface for managing these interactions.

7. **AI Gateway**...

---

- scalable
- maintainable
- efficient architecture

+---------------------------------------------------------------------------------------------+
|                                           Lynx                                              |
|---------------------------------------------------------------------------------------------|
|                                                                                             |
| +--------------------+  +------------------------+  +-------------------------+             |
| |  DataStax AstraDB  |  | Astra Unstructured     |  |   Astra Streaming       |             |
| | +----------------+ |  | Data Loader           |  | +---------------------+ |             |
| | | Apache         | |  +------------------------+  | |      Luna           | |             |
| | | Cassandra      | |                              | +---------------------+ |             |
| | +----------------+ |                              +-------------------------+             |
| +--------------------+                              +-------------------------+             |
|                                                                                             |
| +-----------------------------------------------------------------------------------------+ |
| |                              Business Logic (Turborepo + pnpm)                          | |
| |                      +-------------------------------------------+                      | |
| |                      |                FastAPI + uv               |                      | |
| |                      +-------------------------------------------+                      | |
| +-----------------------------------------------------------------------------------------+ |
|                                                                                             |
| +-----------------------+  +---------------------+  +------------------------------------+  |
| |   Next.js App         |  | Next.js App         |  |            Observability           |  |
| | +-------------------+ |  | +-----------------+ |  | +-------------------------------+ |  |
| | | Frontend (AuthZ,  | |  | | Documentation    | |  | | Dashboard                    | |  |
| | | AuthN, CRM)       | |  | | & Collaboration  | |  | |                               | |  |
| | +-------------------+ |  | +-----------------+ |  | +-------------------------------+ |  |
| +-----------------------+  +---------------------+  +------------------------------------+  |
|                                                                                             |
| +------------------------+                                                                  |
| |      Docker Compose    |                                                                  |
| | +--------------------+ |                                                                  |
| | | Docker Containers  | |                                                                  |
| | +--------------------+ |                                                                  |
| +------------------------+                                                                  |
|                                                                                             |
| +------------------------+                                                                  |
| |   Browser Control      |                                                                  |
| | +--------------------+ |                                                                  |
| | | browseUse + Web UI | |                                                                  |
| +------------------------+                                                                  |
|                                                                                             |
+---------------------------------------------------------------------------------------------+

## ✅ Data Decision Records

### ✅ Data Decision Record 1

#### PostgreSQL

#### LightRAG

#### Redis

### 🤔 Data In Question

#### DataStax

#### CouchDB vs CouchBase

#### ✅ Data Decision Record 2

#### PoC

- Begin with PoC
- Use Datastax
- Use BrowserUse
- Docker
- Internal Docks for Collaboration