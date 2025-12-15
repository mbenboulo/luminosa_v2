'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3 } from "lucide-react";

const TraceProCarousel = () => {
    const [index, setIndex] = useState(0);
    const images = ['/irradiance-1-wide.png', '/irradiance-2-wide.png'];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const toggle = () => setIndex((prev) => (prev + 1) % images.length);

    return (
        <div
            className="w-full h-full relative cursor-pointer group"
            onClick={toggle}
        >
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={images[index]}
                        alt="Irradiance Simulation"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white font-mono flex items-center gap-2 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                Fig 2.2: Irradiance Distribution
            </div>
        </div>
    );
};

export default function SimulationTabs() {
    const [activeTab, setActiveTab] = useState('comsol');

    const stats = [
        { label: "Avg Irradiance", value: "30", unit: "μW/cm²/nm" },
        { label: "Surface Temp", value: "< 37", unit: "°C" },
        { label: "Uniformity Ratio", value: "0.72", unit: "" },
        { label: "Peak Wavelength", value: "460", unit: "nm" },
    ];

    const tabs = [
        { id: 'comsol', label: 'COMSOL Multiphysics' },
        { id: 'tracepro', label: 'TracePro Optical' },
        { id: 'solidworks', label: 'SolidWorks CAD' },
    ];

    const tabContent = {
        comsol: {
            title: "Thermal Distribution Analysis",
            description: "Finite Element Analysis (FEA) performed in COMSOL demonstrates that the active cooling system effectively dissipates heat from the LED arrays. The mannequin surface temperature remains stable at 36.5°C over a 4-hour simulation period, well within the safe zone for neonatal patients.",
            points: [
                "Validated against convective heat transfer models.",
                "Hotspots identified and mitigated in revision B."
            ],
            visualLabel: "Fig 2.1: Thermal Map",
            gradient: "from-orange-500/20 to-red-500/5",
            borderColor: "border-orange-500/30"
        },
        tracepro: {
            title: "Optical Irradiance Simulation",
            description: "Full four-source ray-tracing simulations performed in TracePro confirm that the configuration achieves comprehensive 360-degree coverage. The system delivers a uniform irradiance of 30 μW/cm²/nm across the entire neonatal body surface, effectively eliminating the shadow zones common in single-source devices.",
            points: [
                "Validated >0.7 uniformity ratio across curved surfaces.",
                "Confirmed zero shadow zones on lateral aspects."
            ],
            visualLabel: "Fig 2.2: Irradiance Surface Plot",
            gradient: "from-green-500/20 to-emerald-500/5",
            borderColor: "border-green-500/30"
        },
        solidworks: {
            title: "Mechanical Modeling & Assembly",
            description: "Comprehensive 3D mechanical simulations in SolidWorks were instrumental in defining the final structural architecture. We utilized the CAD environment to validate the precise integration of the four-source array, cooling channels, and adjustable mounting mechanisms, ensuring robustness and ease of assembly.",
            points: [
                "Confirmed interference-free fit for 150+ components.",
                "Validated structural integrity of moving gantry parts."
            ],
            visualLabel: "Fig 2.3: Assembly CAD Model",
            gradient: "from-blue-500/20 to-cyan-500/5",
            borderColor: "border-blue-500/30"
        }
    };

    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex items-center gap-3 mb-12">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <BarChart3 className="text-white w-4 h-4" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Simulation & Validation</h2>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-[#111425] border border-white/5 p-6 rounded-xl">
                            <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                                <span className="text-xs text-gray-500">{stat.unit}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tabs Container */}
                <div className="bg-[#111425] border border-white/5 rounded-3xl p-2 md:p-8">

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap gap-1 mb-8 border-b border-white/5 pb-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-3 text-sm font-medium transition-colors relative ${activeTab === tab.id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-[-5px] left-0 right-0 h-0.5 bg-blue-500"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Area */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        >
                            {/* Text Content */}
                            <div className="py-4">
                                <h3 className="text-xl font-bold text-white mb-6">
                                    {tabContent[activeTab as keyof typeof tabContent].title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {tabContent[activeTab as keyof typeof tabContent].description}
                                </p>
                                <ul className="space-y-3">
                                    {tabContent[activeTab as keyof typeof tabContent].points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                            <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            </div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual Content Placeholder */}
                            <div className={`relative aspect-video rounded-xl bg-gradient-to-br ${tabContent[activeTab as keyof typeof tabContent].gradient} border ${tabContent[activeTab as keyof typeof tabContent].borderColor} overflow-hidden group`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Abstract Visualization based on tab type */}
                                    {activeTab === 'comsol' && (
                                        <div className="w-full h-full opacity-60 mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]">
                                            {/* Mock thermal map gradient */}
                                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 via-red-500 to-blue-900 opacity-50 blur-3xl" />
                                        </div>
                                    )}
                                    {activeTab === 'tracepro' && (
                                        <div className="w-full h-full relative">
                                            <TraceProCarousel />
                                        </div>
                                    )}
                                    {activeTab === 'solidworks' && (
                                        <div className="w-full h-full opacity-40">
                                            {/* Mock CAD wireframe look */}
                                            <div className="w-full h-full bg-[linear-gradient(45deg,rgba(59,130,246,0.1)_25%,transparent_25%,transparent_50%,rgba(59,130,246,0.1)_50%,rgba(59,130,246,0.1)_75%,transparent_75%,transparent)] bg-[length:20px_20px]" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-32 h-32 border-2 border-blue-500/30 rotate-12" />
                                                <div className="w-32 h-32 border-2 border-blue-500/30 -rotate-12 absolute" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {activeTab !== 'tracepro' && (
                                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-white border border-white/10">
                                        {tabContent[activeTab as keyof typeof tabContent].visualLabel}
                                    </div>
                                )}
                            </div>

                        </motion.div>
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
}
