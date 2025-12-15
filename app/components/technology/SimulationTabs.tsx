'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../Section';
import { BarChart2, CheckCircle } from 'lucide-react';

const tabs = [
    { id: 'comsol', label: 'COMSOL Multiphysics' },
    { id: 'tracepro', label: 'TracePro Optical' },
    { id: 'solidworks', label: 'SolidWorks CAD' },
];

const content = {
    comsol: {
        title: 'Thermal Distribution Analysis',
        description: 'Finite Element Analysis (FEA) performed in COMSOL demonstrates that the active cooling system effectively dissipates heat from the LED arrays. The mannequin surface temperature remains stable at 36.5°C over a 4-hour simulation period, well within the safe zone for neonatal patients.',
        points: [
            'Validated against convective heat transfer models.',
            'Hot spots identified and mitigated in revision B.'
        ],
        visual: (
            <div className="w-full h-full bg-gradient-to-br from-orange-900 to-red-900 relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                {/* Abstract Heatmap */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_#fafafa_0%,_#fbbf24_30%,_#ef4444_60%,_#7f1d1d_100%)] blur-[60px] opacity-80" />
                <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-[10px] text-white font-mono">Fig 2.1: Thermal Map</div>
            </div>
        )
    },
    tracepro: {
        title: 'Optical Irradiance Simulation',
        description: 'Full four-source ray-tracing simulations performed in TracePro confirm that the configuration achieves comprehensive 360-degree coverage. The system delivers a uniform irradiance of 30 µW/cm²/nm across the entire neonatal body surface, effectively eliminating the shadow zones common in single-source devices.',
        points: [
            'Validated >0.7 uniformity ratio across curved surfaces.',
            'Confirmed zero shadow zones on lateral aspects.'
        ],
        visual: (
            <div className="w-full h-full bg-black relative rounded-2xl overflow-hidden">
                {/* Abstract Irradiance Map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-green-500/20 blur-[80px] rounded-full" />
                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-green-400 blur-[40px] rounded-full opacity-60 mix-blend-screen" />
                <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-green-500 blur-[50px] rounded-full opacity-60 mix-blend-screen" />

                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />

                <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-[10px] text-white font-mono">Fig 2.2: Irradiance Surface Plot</div>
            </div>
        )
    },
    solidworks: {
        title: 'Mechanical Modeling & Assembly',
        description: 'Comprehensive 3D mechanical simulations in SolidWorks were instrumental in defining the final structural architecture. We utilized the CAD environment to validate the precise integration of the four-source array, cooling channels, and adjustable mounting mechanisms, ensuring robustness and ease of assembly.',
        points: [
            'Confirmed interference-free fit for 150+ components.',
            'Validated structural integrity of moving gantry parts.'
        ],
        visual: (
            <div className="w-full h-full bg-[#1e293b] relative rounded-2xl overflow-hidden flex items-center justify-center">
                {/* CAD Wireframe aesthetic */}
                <div className="w-64 h-40 border-2 border-blue-400/30 bg-blue-500/5 relative transform -skew-x-12">
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-px bg-blue-400/10"></div>
                    {/* Inner mechanics */}
                    <div className="absolute top-2 left-2 right-2 bottom-2 border border-blue-300/20 rounded-sm"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-blue-400/50"></div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 rounded text-[10px] text-white font-mono">Fig 2.3: Assembly CAD Model</div>
            </div>
        )
    }
};

const stats = [
    { label: 'Avg Irradiance', value: '30', unit: 'µW/cm²/nm' },
    { label: 'Surface Temp', value: '< 37', unit: '°C' },
    { label: 'Uniformity Ratio', value: '0.72', unit: '' },
    { label: 'Peak Wavelength', value: '460', unit: 'nm' },
];

export default function SimulationTabs() {
    const [activeTab, setActiveTab] = useState<'comsol' | 'tracepro' | 'solidworks'>('comsol');

    return (
        <Section>
            <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <BarChart2 size={16} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Simulation & Validation</h2>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-[#0f1226] p-6 rounded-xl border border-white/5">
                        <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-white">{stat.value}</span>
                            <span className="text-xs text-gray-400">{stat.unit}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabs Container */}
            <div className="bg-[#0f1226] rounded-3xl border border-white/5 overflow-hidden">
                {/* Tab Headers */}
                <div className="flex flex-wrap border-b border-white/5 bg-[#0a0d1f]">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-6 py-4 text-sm font-medium transition-colors relative ${activeTab === tab.id ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="p-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                        >
                            {/* Text Content */}
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">{content[activeTab].title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {content[activeTab].description}
                                </p>
                                <div className="space-y-3">
                                    {content[activeTab].points.map((point, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <CheckCircle size={16} className="text-blue-500" />
                                            <span className="text-sm text-gray-300">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Visual Content */}
                            <div className="h-64 rounded-2xl overflow-hidden border border-white/5">
                                {content[activeTab].visual}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
}
