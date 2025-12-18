'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

function Model(props: any) {
    const { scene } = useGLTF('/luminosa-3d.glb');
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

export default function ModelViewer() {
    return (
        <div className="w-full h-full min-h-[400px] relative bg-transparent">
            <Canvas
                dpr={[1, 2]}
                shadows
                camera={{
                    fov: 45,
                    position: [3, 2.5, 3],
                    zoom: 1.9
                }}
            >
                <Suspense fallback={<Loader />}>
                    <Stage environment="city" intensity={0.6} adjustCamera={false}>
                        <Model />
                    </Stage>
                </Suspense>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 3}
                    target={[0, 0, 0]}
                />
            </Canvas>
        </div>
    );
}

useGLTF.preload('/luminosa-3d.glb');
