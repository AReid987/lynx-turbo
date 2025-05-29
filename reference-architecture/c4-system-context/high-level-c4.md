```mermaid
flowchart TD
    subgraph Frontend["Frontend Applications"]
        web_ui["WebUI (Next.js)"]
        docs["Docs (Next.js)"]
    end

    subgraph Core["Core Services"]
        lynx_core["Lynx Core (LangFlow)"]
        drizzle_orm["Drizzle ORM"]
        data_connector["AstraDB Connection"]
    end

    subgraph AI["AI Components"]
        ai_gateway["AI Gateway (FastAPI)"]
        unified_api["Unified AI API"]
        model_router["Model Router"]
    end

    subgraph Knowledge["Knowledge Agent"]
        supabase_conn["Supabase Connection"]
        scraper["Parallelized Scraper"]
        doc_processor["Document Processor"]
        embeddings["Embeddings Model"]
        vector_retriever["Vector Retriever"]
    end

    subgraph Data["Data Infrastructure"]
        astradb["DataStax AstraDB"]
        unstructured_loader["Astra Unstructured Data Loader"]
        astra_streaming["Astra Streaming"]
        luna["Luna Streaming"]
    end

    subgraph External["External Systems"]
        vercel["Vercel"]
        supabase["Supabase"]
        webpages["Webpages"]
    end

    subgraph Observability["Observability"]
        dashboard["Observability Dashboard"]
    end

    subgraph Deployment["Deployment"]
        docker["Docker Containers"]
        compose["Docker Compose"]
    end

    web_ui --> lynx_core
    web_ui --> ai_gateway
    docs --> vercel
    lynx_core --> drizzle_orm
    drizzle_orm --> data_connector
    data_connector --> astradb
    ai_gateway --> unified_api
    unified_api --> model_router
    scraper --> webpages
    scraper --> doc_processor
    doc_processor --> embeddings
    embeddings --> supabase_conn
    vector_retriever --> supabase_conn
    supabase_conn --> supabase
    dashboard -.-> web_ui
    dashboard -.-> lynx_core
    dashboard -.-> ai_gateway
    docker --> compose
    ```