import React, { useEffect } from "react";
import gsap from "gsap";

export default function LoaderECG() {
  useEffect(() => {
    gsap.fromTo(".ecg-line", { strokeDasharray: "0, 300" }, { strokeDasharray: "300, 0", repeat: -1, duration: 2, ease: "linear" });
  }, []);

  return (
    <div className="ecg-container">
      <svg width="200" height="60" viewBox="0 0 200 50">
        <path className="ecg-line" d="M0 25 L20 25 L30 10 L40 40 L60 25 L80 25 L90 5 L100 40 L120 25 L140 25 L150 15 L160 35 L180 25 L200 25"
          stroke="lime" strokeWidth="2" fill="none" />
      </svg>
      <p style={{ color: "#00ff88", fontSize: "12px", textAlign: "center" }}>ECG Monitoring...</p>
    </div>
  );
}
