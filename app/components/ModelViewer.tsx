'use client';

import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

const BLUE_PALETTE = [
    '#1e3a8a', // blue-900
    '#1e40af', // blue-800
    '#1d4ed8', // blue-700
    '#2563eb', // blue-600
    '#3b82f6', // blue-500
    '#60a5fa', // blue-400
];

function Model(props: any) {
    const { scene } = useGLTF('/photo-3d-model.glb');

    useEffect(() => {
        scene.traverse((child: any) => {
            if (child.isMesh) {
                // Deterministic color selection based on UUID
                const hash = child.uuid.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
                const colorIndex = hash % BLUE_PALETTE.length;

                child.material = new THREE.MeshStandardMaterial({
                    color: BLUE_PALETTE[colorIndex],
                    roughness: 0.4,
                    metalness: 0.6,
                });
            }
        });
    }, [scene]);

    return <primitive object={scene} {...props} />;
}

function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div className="text-blue-500 text-xs font-mono animate-pulse whitespace-nowrap">
                Loading 3D Model... {progress.toFixed(0)}%
            </div>
        </Html>
    );
}

function Annotation({ position, label }: { position: [number, number, number], label: string }) {
    return (
        <Html position={position} center distanceFactor={15} zIndexRange={[100, 0]}>
            <div className="flex flex-col items-center pointer-events-none select-none group">
                {/* Label */}
                <div className="bg-[#0B0E25]/90 text-blue-200 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-blue-500/30 backdrop-blur-md shadow-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:opacity-100">
                    {label}
                </div>
                {/* Dot */}
                <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white/20 shadow-[0_0_15px_rgba(59,130,246,1)] animate-pulse" />
            </div>
        </Html>
    );
}

export default function ModelViewer() {
    return (
        <div className="w-full h-full min-h-[400px] relative bg-transparent">
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 20, zoom: 0.5 }}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={<Loader />}>
                    <Stage environment="city" intensity={0.6}>
                        <Model scale={0.01} />

                        {/* Annotations - Positions estimated based on model scale */}
                        <Annotation position={[0, 180, 0]} label="Overhead Lamp" />
                        <Annotation position={[0, 20, 0]} label="Base Light Source" />
                        <Annotation position={[-80, 100, 40]} label="Side Light Source" />
                        <Annotation position={[80, 100, 40]} label="Side Light Source" />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate enableZoom={false} />
            </Canvas>
        </div>
    );
}

useGLTF.preload('/photo-3d-model.glb');
