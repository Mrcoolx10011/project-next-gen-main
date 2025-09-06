'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function Hero3D() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#8352FD"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
    </Canvas>
  );
}
