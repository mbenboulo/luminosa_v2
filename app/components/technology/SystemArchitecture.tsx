'use client';

import { motion } from 'framer-motion';
import Section from '../Section';
import { Sun, Wind, Sliders, Shield } from 'lucide-react';
import { Asterisk } from 'lucide-react';

const specs = [
    {
        icon: Sun,
        title: '360° Coverage',
        description: 'Maximizes skin surface exposure area.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10'
    },
    {
        icon: Wind,
        title: 'Active Cooling',
        description: 'Maintains skin temp < 37°C safely.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-400/10'
    },
    {
        icon: Sliders,
        title: 'Irradiance Control',
        description: 'Adjustable up to 50 µW/cm²/nm.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10'
    },
    {
        icon: Shield,
        title: 'Safety Interlocks',
        description: 'Auto shut-off for thermal events.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10'
    }
];

export default function SystemArchitecture() {
    return (
        <Section>
            <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Asterisk size={16} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">System Architecture Overview</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Isometric View Placeholder */}
                <div className="lg:col-span-2 bg-[#0a0d1f] rounded-3xl border border-white/5 p-8 relative min-h-[400px] flex items-center justify-center overflow-hidden group">
                    <div className="absolute top-4 left-4 z-10">
                        <span className="bg-blue-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded-sm">Schematic</span>
                    </div>

                    <div className="relative w-64 h-64 bg-blue-900/10 rounded-xl border border-blue-500/30 rotate-12 group-hover:rotate-0 transition-transform duration-700 ease-in-out">
                        <div className="absolute inset-2 border border-blue-400/20 rounded-lg"></div>
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center">
                            <div className="w-40 h-32 bg-gradient-to-t from-blue-900 via-blue-800 to-transparent opacity-50"></div>
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-4">
                        <p className="text-white text-sm font-bold">4-Source Isometric View</p>
                    </div>
                </div>

                {/* Feature List */}
                <div className="flex flex-col justify-between gap-4">
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        Our novel four-source configuration ensures uniform irradiance while maintaining strict thermal safety limits. The system integrates real-time feedback loops for precise control, eliminating the "blind spots" found in traditional overhead projectors.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                        {specs.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#151932] p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors flex items-center gap-4"
                            >
                                <div className={`w-10 h-10 rounded-full ${spec.bg} flex items-center justify-center shrink-0`}>
                                    <spec.icon size={20} className={spec.color} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white">{spec.title}</h3>
                                    <p className="text-xs text-gray-500">{spec.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
