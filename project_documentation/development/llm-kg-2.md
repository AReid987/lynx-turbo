### Objectives
- Set up and configure the Pydantic AI documentation crawler and RAG agent.
- Crawl documentation websites and store content in a vector database.
- Provide intelligent answers to user questions using retrieved documentation chunks.
- Use Streamlit for an interactive web interface to query the documentation.
- Handle errors robustly for network failures, API rate limits, and database issues.

### Instructions

1. **Clone the Repository**
   - Open your terminal and run:
     ```bash
     git clone https://github.com/coleam00/ottomator-agents.git
     cd ottomator-agents/crawl4AI-agent
     ```

2. **Install Dependencies**
   - Create and activate a Python virtual environment:
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows: venv\Scripts\activate
     ```
   - Install the required packages:
     ```bash
     pip install -r requirements.txt
     ```

3. **Set Up Environment Variables**
   - Rename `.env.example` to `.env`.
   - Edit `.env` with your API keys and preferences:
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key
     SUPABASE_URL=your_supabase_url
     SUPABASE_SERVICE_KEY=your_supabase_service_key
     LLM_MODEL=gpt-4o-mini  # or your preferred OpenAI model
     ```

4. **Database Setup**
   - Execute the SQL commands in `site_pages.sql`:
     ```sql
     CREATE TABLE site_pages (
         id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
         url TEXT,
         chunk_number INTEGER,
         title TEXT,
         summary TEXT,
         content TEXT,
         metadata JSONB,
         embedding VECTOR(1536)
     );
     ```
   - In Supabase, go to the "SQL Editor" tab, paste the SQL commands, and click "Run".

5. **Crawl Documentation**
   - Run the crawler script:
     ```bash
     python crawl_pydantic_ai_docs.py
     ```
   - This script will:
     1. Fetch URLs from the documentation sitemap.
     2. Crawl each page and split into chunks.
     3. Generate embeddings and store them in Supabase.

6. **Streamlit Web Interface**
   - Start the Streamlit web interface:
     ```bash
     streamlit run streamlit_ui.py
     ```
   - The interface will be available at `http://localhost:8501`.

7. **Chunking Configuration**
   - Configure chunking parameters in `crawl_pydantic_ai_docs.py`:
     ```python
     chunk_size = 5000  # Characters per chunk
     ```
   - The chunker preserves code blocks, paragraph boundaries, and sentence boundaries.

8. **Error Handling**
   - The system includes robust error handling for:
     - Network failures during crawling.
     - API rate limits.
     - Database connection issues.
     - Embedding generation errors.
     - Invalid URLs or content.
