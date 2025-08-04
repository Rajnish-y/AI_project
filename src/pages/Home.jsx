import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    { title: "AI Consultation", desc: "Chat with our AI to get instant medical insights.", link: "/ai-consultation" },
    { title: "3D Anatomy", desc: "Visualize human anatomy interactively in 3D.", link: "/3d-anatomy" },
    { title: "Medical Image Analysis", desc: "AI-powered analysis of medical scans.", link: "/medical-image-analysis" },
  ];

  return (
    <div>
      <div className="hero">
        <h1>Welcome to MedIQ</h1>
        <p>Revolutionizing healthcare with AI-driven solutions.</p>
        <Link to="/ai-consultation">
          <button>Start AI Consultation</button>
        </Link>
      </div>

      <div className="cards">
        {features.map((f, idx) => (
          <div className="card" key={idx}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
            <Link to={f.link}>
              <button style={{ marginTop: "10px", background: "#143e8f", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px" }}>
                Explore
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
