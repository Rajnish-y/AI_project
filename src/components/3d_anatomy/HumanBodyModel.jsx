import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// ✅ Load human.glb model
function Model(props) {
  const { scene } = useGLTF("/models/human.glb");
  return <primitive object={scene} scale={1.2} position={[0, -1.2, 0]} {...props} />;
}

export default function HumanBodyModel({ onOrganClick }) {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 3], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />
      <Model onClick={() => onOrganClick("Heart")} />
      <OrbitControls enablePan={true} enableZoom={true} />
    </Canvas>
  );
}
