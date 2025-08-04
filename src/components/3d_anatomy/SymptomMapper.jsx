import React, { useEffect } from "react";

export default function SymptomMapper({ symptom, onOrganDetected }) {
  useEffect(() => {
    console.log(`Mapping symptom: ${symptom}`);
    if (symptom.toLowerCase().includes("heart")) onOrganDetected("Heart");
    if (symptom.toLowerCase().includes("lung")) onOrganDetected("Lung");
  }, [symptom]);

  return null;
}
