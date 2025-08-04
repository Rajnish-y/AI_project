import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ChatUI({ onSymptomSubmit }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // ✅ Handle sending a message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { user: userMessage, ai: "Analyzing..." }]);
    setInput("");

    try {
      // ✅ Call mock AI API (MSW intercepts this)
      const res = await fetch("/api/symptom", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptom: userMessage }),
      });

      const data = await res.json();
      const organDetected = data.organ || "Unknown";

      // ✅ Update chat with AI response
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].ai = `Possible issue with: ${organDetected}`;
        return updated;
      });

      // ✅ Trigger organ highlight
      onSymptomSubmit?.(userMessage);

    } catch (err) {
      console.error("AI error:", err);
    }
  };

  return (
    <motion.div
      className="chat-box fade-in"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3>🧠 AI Medical Chat</h3>
      <div style={{ maxHeight: "200px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.1)", padding: "5px", borderRadius: "8px", marginBottom: "5px" }}>
            <p><strong>You:</strong> {m.user}</p>
            <p><strong>AI:</strong> {m.ai}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "5px" }}>
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI about symptoms..."
        />
        <button className="chat-button" onClick={sendMessage}>Send</button>
      </div>
    </motion.div>
  );
}
