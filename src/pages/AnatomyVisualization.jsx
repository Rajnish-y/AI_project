import React, { useState } from "react";
import HumanBodyModel from "../components/3d_anatomy/HumanBodyModel";

export default function AnatomyVisualization() {
  const [organ, setOrgan] = useState("Heart");

  return (
    <div style={{ position: "relative" }}>
      <div className="model-container">
        <HumanBodyModel onOrganClick={(o) => setOrgan(o)} />
      </div>
      <div className="organ-info">
        <h3>{organ}</h3>
        <p>Mock details about {organ}. This section will display detailed AI-generated organ information.</p>
      </div>
    </div>
  );
}
