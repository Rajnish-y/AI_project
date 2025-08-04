import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OrganInfoPanel({ organName, onClose }) {
  const [organInfo, setOrganInfo] = useState(null);

  // ✅ Fetch organ info when an organ is selected
  useEffect(() => {
    if (!organName) return;

    fetch(`/api/organ/${organName}`)
      .then((res) => res.json())
      .then((data) => setOrganInfo(data))
      .catch(() => setOrganInfo({ name: organName, desc: "No data available", img: "" }));
  }, [organName]);

  return (
    <motion.div
      className="organ-panel fade-in"
      initial={{ opacity: 0, x: 150 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 150 }}
      transition={{ duration: 0.3 }}
    >
      {/* ✅ Close Button */}
      <button className="close-btn" onClick={onClose}>✖</button>

      {/* ✅ Organ Image */}
      {organInfo?.img && <img src={organInfo.img} alt={organInfo.name} />}

      {/* ✅ Organ Name */}
      <h2>{organInfo?.name || "Unknown Organ"}</h2>

      {/* ✅ Organ Description */}
      <p>{organInfo?.desc || "No description available."}</p>
    </motion.div>
  );
}
