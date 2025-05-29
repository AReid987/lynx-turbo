from fastapi import FastAPI, WebSocket
from uuid import uuid4
from session_manager import SessionManager

app = FastAPI()
session_manager = SessionManager()

@app.websocket("/chat")
async def chat_endpoint(websocket: WebSocket):
    await websocket.accept()

    # Generate a unique session ID
    session_id = uuid4()

    # Check / Create Session 
    if session_manager.is_new_session(session_id):
        session_manager.create_session(session_id)
        await websocket.send_text("Agent: Let's get these leads")
        session_manager.update_session(session_id)
    else:
        await websocket.send_text("Agent: Welcome back!")

    # Chat Loop
    while True:
        user_message = await websocket.receive_text()
        # TODO : Add Processing Logic
        response = f"Agent: {user_message}"
        await websocket.send_text(response)