import React from "react";

export default function About() {
  const team = [
    { name: "Dr. John Doe", role: "AI Researcher" },
    { name: "Jane Smith", role: "Frontend Developer" },
    { name: "Alex Johnson", role: "Backend Developer" },
  ];

  return (
    <div className="about-container">
      <h2>About MedIQ</h2>
      <p>MedIQ uses AI to enhance diagnostics and consultations, making healthcare smarter and faster.</p>

      <h3 style={{ marginTop: "20px", color: "#143e8f" }}>Our Team</h3>
      <div className="team">
        {team.map((member, idx) => (
          <div className="team-card" key={idx}>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
