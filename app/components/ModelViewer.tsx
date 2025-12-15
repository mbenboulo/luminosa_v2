'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, OrbitControls, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

function Model(props: any) {
    const { scene } = useGLTF('/photo-3d-model.glb');
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
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45, zoom: 0.5 }}>
                <Suspense fallback={<Loader />}>
                    <Stage environment="city" intensity={0.6} adjustCamera={1.2}>
                        <Model />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate enableZoom={false} />
            </Canvas>
        </div>
    );
}

useGLTF.preload('/photo-3d-model.glb');
