import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    { 
      title: "AI Consultation", 
      desc: "Get instant medical insights through our advanced AI chat system.",
      link: "/ai-consultation",
      icon: "🧠",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    { 
      title: "3D Anatomy", 
      desc: "Explore interactive 3D models of human anatomy with detailed information.",
      link: "/3d-anatomy",
      icon: "🫀",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    { 
      title: "Medical Image Analysis", 
      desc: "AI-powered analysis of X-rays, MRIs, and other medical scans.",
      link: "/medical-image-analysis",
      icon: "🔬",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
  ];

  const stats = [
    { number: "50K+", label: "Consultations" },
    { number: "95%", label: "Accuracy" },
    { number: "24/7", label: "Availability" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div className="hero" variants={itemVariants}>
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to MedIQ
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Revolutionizing healthcare with AI-driven solutions for better diagnostics and patient care.
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Link to="/ai-consultation" className="hero-button">
            Start AI Consultation →
          </Link>
        </motion.div>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="stats-section"
        variants={itemVariants}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "30px",
          margin: "60px 0",
          padding: "40px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          backdropFilter: "blur(20px)"
        }}
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="stat-item"
            whileHover={{ scale: 1.05 }}
            style={{
              textAlign: "center",
              padding: "20px"
            }}
          >
            <motion.h3
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(135deg, #16f2b3, #143e8f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "10px"
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + idx * 0.1, duration: 0.5 }}
            >
              {stat.number}
            </motion.h3>
            <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "1.1rem" }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Features Section */}
      <motion.div className="cards" variants={itemVariants}>
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            style={{
              background: `linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)`,
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* Card Icon */}
            <motion.div
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
              }}
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {feature.icon}
            </motion.div>
            
            <h3>{feature.title}</h3>
            <p style={{ marginBottom: "30px" }}>{feature.desc}</p>
            
            <Link to={feature.link} className="card-button">
              Explore Now
            </Link>

            {/* Hover Effect Background */}
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: feature.gradient,
                opacity: 0.05,
                zIndex: 0
              }}
              whileHover={{ left: "0%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={itemVariants}
        style={{
          textAlign: "center",
          margin: "80px 0 40px",
          padding: "50px 30px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "20px",
          backdropFilter: "blur(20px)"
        }}
      >
        <h2 style={{
          fontSize: "2rem",
          color: "rgba(20, 114, 202, 0.8)",
          marginBottom: "20px",
          fontWeight: "600"
        }}>
          Ready to Experience the Future of Healthcare?
        </h2>
        <p style={{
          fontSize: "1.2rem",
          color: "rgba(20, 114, 202, 0.8)",
          marginBottom: "30px",
          maxWidth: "600px",
          margin: "0 auto 30px"
        }}>
          Join thousands of users who trust MedIQ for their healthcare needs.
        </p>
        <Link to="/ai-consultation" className="hero-button">
          Get Started Today
        </Link>
      </motion.div>
    </motion.div>
  );
}