import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function FoxModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/3DFox.glb");

  // Apply SecureFox green color scheme to the loaded model
  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((m, i) => console.log(`Mesh: ${child.name} | Material[${i}]:`, m.name, m));
      const name = child.name.toLowerCase();

      // Eye holes / dark recessed areas
      if (
        name.includes("eye") ||
        name.includes("pupil") ||
        name.includes("iris") ||
        name.includes("dark")
      ) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#050d07",
          roughness: 0.95,
        });
        return;
      }

      // Inner ear or face panel — darker green
      if (
        name.includes("inner") ||
        name.includes("face") ||
        name.includes("mask") ||
        name.includes("panel")
      ) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#166534",
          emissive: "#091a0e",
          emissiveIntensity: 0.25,
          roughness: 0.55,
          metalness: 0.05,
        });
        return;
      }

      // Silver / shoulder / accent pieces
      if (
        name.includes("silver") ||
        name.includes("bolt") ||
        name.includes("shoulder") ||
        name.includes("accent") ||
        name.includes("white")
      ) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#b4c0ba",
          emissive: "#1a201a",
          emissiveIntensity: 0.15,
          roughness: 0.2,
          metalness: 0.85,
        });
        return;
      }

      // Default — main green body
      child.material = new THREE.MeshStandardMaterial({
        color: "#22c55e",
        emissive: "#0c2812",
        emissiveIntensity: 0.45,
        roughness: 0.3,
        metalness: 0.15,
      });
    });
  }, [scene]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.4;
    groupRef.current.position.y = Math.sin(t * 0.65) * 0.08;
  });

  return <primitive ref={groupRef} object={scene} />;
}

interface Fox3DProps {
  className?: string;
}

const Fox3D = ({ className = "" }: Fox3DProps) => (
  <div
    className={className}
    style={{
      position: "absolute",
      right: "-5%",
      top: "50%",
      transform: "translateY(-50%)",
      height: "85vh",
      width: "45vw",
      pointerEvents: "none",
      zIndex: 0,
    }}
  >
    <Canvas
      camera={{ position: [0, 0, 5], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 5, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-2, 1, 3]} intensity={0.8} color="#4ade80" />
      <pointLight position={[0, -2, 3]} intensity={0.4} color="#22c55e" />
      <pointLight position={[0, 0, -4]} intensity={0.6} color="#15803d" />

      <FoxModel />
    </Canvas>
  </div>
);

useGLTF.preload("/3DFox.glb");

export default Fox3D;
