import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AIConsultation from "./pages/AIConsultation";
import MedicalImageAnalysis from "./pages/MedicalImageAnalysis";
import AnatomyVisualization from "./pages/AnatomyVisualization";
import About from "./pages/About";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-consultation" element={<AIConsultation />} />
          <Route path="/medical-image-analysis" element={<MedicalImageAnalysis />} />
          <Route path="/3d-anatomy" element={<AnatomyVisualization />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
