import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import styles from './ThreeBackground.module.css';

// ============ EFEK 1: PARTICLE GRID ============
function ParticleGrid() {
  const ref = useRef<THREE.Points>(null);
  const count = 1500;

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferAttribute
        attach="attributes-position"
        args={[positions, 3]}
        count={count}
        array={positions}
        itemSize={3}
      />
      <pointsMaterial
        size={0.025}
        color="#ffffff"
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        transparent
        opacity={0.5}
      />
    </points>
  );
}

// ============ EFEK 2: CYBER GRID FLOOR ============
function CyberFloor() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      // Animasi bergerak ke bawah memberi efek infinite scroll
      gridRef.current.position.y = -(state.clock.elapsedTime * 0.3) % 2;
    }
  });

  return (
    <group ref={gridRef} position={[0, -8, -2]} rotation={[-Math.PI / 2.5, 0, 0]}>
      {/* Grid utama */}
      <mesh>
        <planeGeometry args={[40, 40, 60, 60]} />
        <meshBasicMaterial
          color="#222222"
          wireframe
          transparent
          opacity={0.06}
          depthWrite={false}
        />
      </mesh>

      {/* Grid lebih besar - lebih transparan */}
      <mesh position={[0, -0.01, 0]}>
        <planeGeometry args={[60, 60, 30, 30]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.02}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// ============ EFEK 3: SCAN LINE HORIZONTAL ============
function ScanLines() {
  const ref = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });

  return (
    <mesh position={[0, 0, -4]}>
      <planeGeometry args={[30, 20]} />
      <shaderMaterial
        ref={ref}
        transparent
        depthWrite={false}
        uniforms={{
          uTime: { value: 0 },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          uniform float uTime;
          void main() {
            // Scan line bergerak
            float scanLine = sin((vUv.y * 200.0) + uTime * 0.5) * 0.5 + 0.5;
            float alpha = scanLine * 0.015;

            // Fade di pinggir
            float edgeFade = smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
            alpha *= edgeFade;

            gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);
          }
        `}
      />
    </mesh>
  );
}

// ============ MAIN COMPONENT ============
export default function ThreeBackground() {
  return (
    <div className={styles.container}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 70 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <ParticleGrid />
        <CyberFloor />
        <ScanLines />
      </Canvas>
    </div>
  );
}
