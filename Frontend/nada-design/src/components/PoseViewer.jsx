import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const PoseViewer = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); // Load the .glb model dynamically

  return (
    <Canvas style={{ height: "400px", width: "100%" }}>
      {/* Add ambient and directional lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />

      {/* Render the model */}
      <primitive object={scene} scale={1.5} />

      {/* Enable rotation/zoom/panning */}
      <OrbitControls />
    </Canvas>
  );
};

// Preload the model for optimization
useGLTF.preload("/assets/model.glb");

export default PoseViewer;
