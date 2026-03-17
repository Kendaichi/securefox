import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function FoxModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/3DFox.glb");


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
    className={`absolute top-1/2 -translate-y-1/2 pointer-events-none
      right-0 w-full opacity-20
      md:w-[50vw] md:opacity-100
      ${className}`}
    style={{ height: "100vh", zIndex: 0, animation: "foxFadeIn 1.2s ease forwards" }}
  >
    <Canvas
      camera={{ position: [0, 0, 6], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      {/* Lighting — high intensities required for physically-based units */}
      <ambientLight intensity={3} />
      <directionalLight position={[3, 5, 5]} intensity={8} color="#ffffff" />
      <directionalLight position={[-3, 2, 3]} intensity={4} color="#ffffff" />
      <pointLight position={[0, 0, -4]} intensity={30} color="#15803d" />

      <style>{`@keyframes foxFadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
      <Suspense fallback={null}>
        <FoxModel />
      </Suspense>
    </Canvas>
  </div>
);

useGLTF.preload("/3DFox.glb");

export default Fox3D;
