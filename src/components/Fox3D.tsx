import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Stylised geometric fox head vertices
const foxVertices: [number, number, number][] = [
  // Nose tip
  [0, 0, 2.2],
  // Snout
  [-0.4, -0.15, 1.6],
  [0.4, -0.15, 1.6],
  [-0.3, 0.2, 1.6],
  [0.3, 0.2, 1.6],
  // Upper jaw bridge
  [-0.5, 0.1, 1.0],
  [0.5, 0.1, 1.0],
  // Cheeks
  [-1.0, -0.3, 0.6],
  [1.0, -0.3, 0.6],
  // Brow ridge
  [-0.7, 0.5, 0.8],
  [0.7, 0.5, 0.8],
  // Eye sockets (left)
  [-0.6, 0.3, 0.9],
  [-0.85, 0.25, 0.7],
  // Eye sockets (right)
  [0.6, 0.3, 0.9],
  [0.85, 0.25, 0.7],
  // Forehead
  [-0.5, 0.8, 0.4],
  [0, 0.9, 0.5],
  [0.5, 0.8, 0.4],
  // Crown
  [-0.4, 1.0, 0.0],
  [0, 1.1, 0.1],
  [0.4, 1.0, 0.0],
  // Left ear
  [-0.7, 0.9, 0.2],
  [-1.0, 1.8, -0.1],
  [-0.9, 1.7, 0.1],
  [-0.5, 1.2, 0.0],
  // Right ear
  [0.7, 0.9, 0.2],
  [1.0, 1.8, -0.1],
  [0.9, 1.7, 0.1],
  [0.5, 1.2, 0.0],
  // Jaw
  [-0.6, -0.5, 0.5],
  [0, -0.6, 0.8],
  [0.6, -0.5, 0.5],
  // Chin
  [-0.3, -0.5, 1.2],
  [0.3, -0.5, 1.2],
  [0, -0.45, 1.4],
  // Back of head
  [-0.6, 0.3, -0.3],
  [0, 0.5, -0.4],
  [0.6, 0.3, -0.3],
  [-0.5, -0.2, -0.2],
  [0.5, -0.2, -0.2],
  // Inner ear left
  [-0.8, 1.4, 0.0],
  [-0.75, 1.2, 0.05],
  // Inner ear right
  [0.8, 1.4, 0.0],
  [0.75, 1.2, 0.05],
  // Extra forehead detail
  [-0.3, 0.7, 0.6],
  [0.3, 0.7, 0.6],
  // Nose bridge
  [0, 0.15, 1.8],
  // Side skull
  [-0.9, 0.1, 0.1],
  [0.9, 0.1, 0.1],
  // Lower cheek
  [-0.8, -0.4, 0.2],
  [0.8, -0.4, 0.2],
];

// Edges connecting the vertices
const foxEdges: [number, number][] = [
  // Nose to snout
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 46],
  [1, 2], [1, 3], [2, 4], [3, 4],
  [46, 3], [46, 4],
  // Snout to upper jaw
  [1, 5], [3, 5], [2, 6], [4, 6],
  [5, 6],
  // Jaw to cheeks
  [5, 7], [6, 8], [7, 8],
  [5, 9], [6, 10],
  // Eye sockets
  [5, 11], [9, 11], [11, 12], [12, 7], [9, 12],
  [6, 13], [10, 13], [13, 14], [14, 8], [10, 14],
  // Brow
  [9, 10], [9, 15], [10, 17],
  [15, 16], [16, 17],
  [11, 44], [13, 45],
  [44, 15], [44, 16], [45, 17], [45, 16],
  // Crown
  [15, 18], [16, 19], [17, 20],
  [18, 19], [19, 20],
  // Left ear
  [15, 21], [18, 21], [21, 22], [21, 23], [22, 23],
  [23, 24], [18, 24], [24, 21],
  [40, 22], [40, 23], [41, 21], [41, 24],
  // Right ear
  [17, 25], [20, 25], [25, 26], [25, 27], [26, 27],
  [27, 28], [20, 28], [28, 25],
  [42, 26], [42, 27], [43, 25], [43, 28],
  // Jaw bottom
  [7, 29], [29, 30], [30, 31], [31, 8],
  [1, 32], [2, 33], [32, 33], [32, 34], [33, 34],
  [34, 30], [32, 29], [33, 31],
  [29, 38], [31, 39],
  // Chin to nose
  [34, 0], [32, 1], [33, 2],
  // Back of head
  [18, 35], [19, 36], [20, 37],
  [35, 36], [36, 37],
  [35, 38], [37, 39], [38, 39],
  // Side skull
  [7, 47], [12, 47], [47, 35], [47, 38],
  [8, 48], [14, 48], [48, 37], [48, 39],
  // Lower cheek
  [29, 49], [49, 47], [49, 38],
  [31, 50], [50, 48], [50, 39],
];

const CONNECTION_DISTANCE = 1.4;

function FoxMesh() {
  const groupRef = useRef<THREE.Group>(null);

  const { pointsGeometry, linesGeometry, connectionGeometry } = useMemo(() => {
    // Points
    const pointPositions = new Float32Array(foxVertices.length * 3);
    foxVertices.forEach((v, i) => {
      pointPositions[i * 3] = v[0];
      pointPositions[i * 3 + 1] = v[1];
      pointPositions[i * 3 + 2] = v[2];
    });
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));

    // Defined edges
    const linePositions: number[] = [];
    foxEdges.forEach(([a, b]) => {
      linePositions.push(...foxVertices[a], ...foxVertices[b]);
    });

    // Auto-connect nearby vertices
    for (let i = 0; i < foxVertices.length; i++) {
      for (let j = i + 1; j < foxVertices.length; j++) {
        const dx = foxVertices[i][0] - foxVertices[j][0];
        const dy = foxVertices[i][1] - foxVertices[j][1];
        const dz = foxVertices[i][2] - foxVertices[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DISTANCE) {
          // Check not already in edges
          const exists = foxEdges.some(
            ([a, b]) => (a === i && b === j) || (a === j && b === i)
          );
          if (!exists) {
            linePositions.push(...foxVertices[i], ...foxVertices[j]);
          }
        }
      }
    }

    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    // Faint proximity connections (longer range, very subtle)
    const connPositions: number[] = [];
    for (let i = 0; i < foxVertices.length; i++) {
      for (let j = i + 1; j < foxVertices.length; j++) {
        const dx = foxVertices[i][0] - foxVertices[j][0];
        const dy = foxVertices[i][1] - foxVertices[j][1];
        const dz = foxVertices[i][2] - foxVertices[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist >= CONNECTION_DISTANCE && dist < 2.2) {
          connPositions.push(...foxVertices[i], ...foxVertices[j]);
        }
      }
    }
    const cGeo = new THREE.BufferGeometry();
    cGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(connPositions, 3)
    );

    return { pointsGeometry: pGeo, linesGeometry: lGeo, connectionGeometry: cGeo };
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.15) * 0.3 + 0.2;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} scale={1.35}>
      {/* Dots */}
      <points geometry={pointsGeometry}>
        <pointsMaterial
          color="#12f308"
          size={0.08}
          transparent
          opacity={0.9}
          sizeAttenuation
        />
      </points>
      {/* Primary edges */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#12f308" transparent opacity={0.35} />
      </lineSegments>
      {/* Faint connections */}
      <lineSegments geometry={connectionGeometry}>
        <lineBasicMaterial color="#12f308" transparent opacity={0.08} />
      </lineSegments>
    </group>
  );
}

interface Fox3DProps {
  className?: string;
}

const Fox3D = ({ className = '' }: Fox3DProps) => {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        right: '-5%',
        top: '50%',
        transform: 'translateY(-50%)',
        height: '85vh',
        width: '45vw',
        opacity: 0.5,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0.5, 5.5], fov: 35 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: 'transparent' }}
      >
        <FoxMesh />
      </Canvas>
    </div>
  );
};

export default Fox3D;
