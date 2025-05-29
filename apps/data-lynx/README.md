# Lynx Core

## Datastax

LangChain workflow has been modified to include an initial prompt trigger when a new user session is detected:

### Implementation Process

#### Step 1: Design Workflow Logic

1. **Session State Tracking**: 
   DataStax Astra DB stores session data (e.g., session_id, is_new_session).

2. **Conditional Logic**: 
    - Check if the session is new. 
    - If yes, inject a predefined prompt (e.g., "Hello! How can I assist you today?").

#### Step 2: Implement Session Management

Using Astra DB to track user sessions:

1. Create a Sessions Table:

```sql
CREATE TABLE IF NOT EXISTS lynx_keyspace.sessions (
    session_id UUID PRIMARY KEY,
    is_new_session BOOLEAN,
    created_at TIMESTAMP
);
```

2. Initialize Session on User Connection:
   
- When a user connects, check if session_id exists in Astra DB. 
- If not, insert a new session with is_new_session = True.

Step 3: Modify the LangChain Flow

1. Custom chain with conditional logic on Langflow
  
```python
def check_session(session_id: str) -> bool:
    # Query Astra DB to see if session is new
    return is_new_session
```

2. Inject Initial Prompt:

- if `is_new_session == True`, inject `initial_prompt`
- trigger predefined prompt rather than waiting for input

Langflow nodes:
- `Session Check Node` -> `Conditional Branch Node`
  - if `True`: -> `Initial Prompt Node`
  - if `False`: -> `User Input Processing Node`

### Step 4: Frontend/Backend Integration

- **Backend**: 
  - FastAPI for websocket connections
  - On new connections:
    - Generate session_id
    - Store in Astra DB: `is_new_session = True`
    - Immediately send the initial prompt to the frontend client
- **Frontend**:
  - Display the Agent's initial prompt when the UI loads.

## Promptfoo

To get started, set your AI_GATEWAY_API_KEY environment variable, or other required keys for the providers you selected.

Next, edit promptfooconfig.yaml.

Then run:

```sh
promptfoo eval
```

Afterwards, you can view the results by running `promptfoo view`
