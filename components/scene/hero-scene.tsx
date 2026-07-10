"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function CoreOrb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.18;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.26;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.12;
  });

  return (
    <Float speed={1.2} rotationIntensity={1.1} floatIntensity={1.3}>
      <Sphere ref={meshRef} args={[1.35, 128, 128]} scale={1.35}>
        <MeshDistortMaterial
          color="#ff8a3d"
          emissive="#5f96ff"
          emissiveIntensity={1.25}
          metalness={0.12}
          roughness={0.18}
          distort={0.42}
          speed={2.3}
        />
      </Sphere>
    </Float>
  );
}

function OrbitRing({
  scale,
  color,
  speed,
}: {
  scale: number;
  color: string;
  speed: number;
}) {
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ringRef.current) {
      return;
    }

    ringRef.current.rotation.x = 1.2;
    ringRef.current.rotation.y = state.clock.elapsedTime * speed;
    ringRef.current.rotation.z = state.clock.elapsedTime * (speed * 0.6);
  });

  return (
    <mesh ref={ringRef} scale={scale}>
      <torusGeometry args={[2.2, 0.03, 24, 240]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.65} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <div className="h-[420px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(95,150,255,0.16),transparent_44%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] md:h-[560px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 42 }}>
        <color attach="background" args={["#09111f"]} />
        <fog attach="fog" args={["#09111f", 8, 16]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 2, 4]} intensity={1.8} color="#f3dbc0" />
        <pointLight position={[-3, -2, 2]} intensity={18} color="#5f96ff" />
        <Stars radius={80} depth={20} count={2500} factor={4} saturation={0} fade speed={0.7} />
        <CoreOrb />
        <OrbitRing scale={1} color="#f7f1e8" speed={0.45} />
        <OrbitRing scale={0.8} color="#5f96ff" speed={-0.6} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.9} />
      </Canvas>
    </div>
  );
}
