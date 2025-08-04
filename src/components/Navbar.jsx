import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">MedIQ</h1>
      <div className="nav-links">
        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
        <Link className={location.pathname === "/ai-consultation" ? "active" : ""} to="/ai-consultation">AI Consultation</Link>
        <Link className={location.pathname === "/medical-image-analysis" ? "active" : ""} to="/medical-image-analysis">Medical Image Analysis</Link>
        <Link className={location.pathname === "/3d-anatomy" ? "active" : ""} to="/3d-anatomy">3D Anatomy</Link>
        <Link className={location.pathname === "/about" ? "active" : ""} to="/about">About Us</Link>
      </div>
    </nav>
  );
}
