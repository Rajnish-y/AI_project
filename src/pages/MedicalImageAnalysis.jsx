import React, { useState } from "react";
import "./medicalImage.css";
export default function MedicalImageAnalysis() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setResult("Mock AI Result: No abnormalities detected.");
  };

  return (
    <div className="upload-section">
      <h2>AI Medical Image Analysis</h2>
      <p>Upload a medical scan (X-ray, MRI) to simulate AI diagnosis.</p>
      <input type="file" onChange={handleUpload} />
      {file && <p>Uploaded: {file.name}</p>}
      {result && <p style={{ color: "#00c389", fontWeight: "bold" }}>{result}</p>}
    </div>
  );
}
