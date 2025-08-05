import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AIConsultation.css";
export default function AIConsultation() {
  const [messages, setMessages] = useState([
    { 
      sender: "AI", 
      text: "Hello! I'm your AI medical assistant. Please describe your symptoms and I'll provide initial insights. Remember, this is not a substitute for professional medical advice.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userInput) => {
    const responses = {
      "headache": "Based on your symptoms, this could be related to stress, dehydration, or tension. Consider rest, hydration, and if symptoms persist, consult a healthcare provider.",
      "fever": "A fever indicates your body is fighting an infection. Monitor your temperature, stay hydrated, and seek medical attention if it exceeds 103°F (39.4°C).",
      "cough": "A persistent cough could indicate various conditions. If accompanied by other symptoms or lasts more than a week, please consult a healthcare professional.",
      "chest pain": "Chest pain should be taken seriously. If you're experiencing severe or persistent chest pain, please seek immediate medical attention.",
      "fatigue": "Fatigue can have many causes including stress, poor sleep, or underlying conditions. Consider your sleep patterns and recent stress levels."
    };

    const lowerInput = userInput.toLowerCase();
    for (const [symptom, response] of Object.entries(responses)) {
      if (lowerInput.includes(symptom)) {
        return response;
      }
    }
    
    return "I understand your concern. While I can provide general information, I recommend consulting with a healthcare professional for proper diagnosis and treatment. Is there anything specific about your symptoms you'd like to discuss?";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "You",
      text: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const aiResponse = {
        sender: "AI",
        text: generateAIResponse(userMessage.text),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "I have a headache",
    "I'm feeling feverish",
    "I have chest pain",
    "I'm experiencing fatigue"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="chat-container"
    >
      <motion.div 
        className="chat-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="ai-avatar">🤖</div>
        <div>
          <h2>AI Medical Assistant</h2>
          <p>Online • Instant Response</p>
        </div>
      </motion.div>

      <div className="chat-box">
        <div className="chat-messages">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className={`message ${message.sender.toLowerCase()}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="message-content">
                  <div className="message-header">
                    <span className="sender">{message.sender}</span>
                    <span className="timestamp">{message.timestamp}</span>
                  </div>
                  <p>{message.text}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              className="message ai typing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p>AI is thinking...</p>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Questions */}
        <motion.div 
          className="quick-questions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p>Quick questions:</p>
          <div className="question-buttons">
            {quickQuestions.map((question, idx) => (
              <button
                key={idx}
                className="quick-btn"
                onClick={() => setInput(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="chat-input">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Describe your symptoms..."
            rows="2"
            disabled={isTyping}
          />
          <motion.button 
            className="chat-button"
            onClick={sendMessage}
            disabled={!input.trim() || isTyping}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}