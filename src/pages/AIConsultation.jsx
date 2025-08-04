import React, { useState } from "react";

export default function AIConsultation() {
  const [messages, setMessages] = useState([
    { sender: "AI", text: "Hello! Describe your symptoms for an instant consultation." },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "You", text: input }, { sender: "AI", text: "Mock AI: Further analysis needed for " + input }]);
    setInput("");
  };

  return (
    <div className="chat-box">
      <h2>AI Medical Chat</h2>
      <div className="chat-messages">
        {messages.map((m, i) => (
          <p key={i}><strong>{m.sender}:</strong> {m.text}</p>
        ))}
      </div>
      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your symptoms..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
