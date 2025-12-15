'use client';

import { motion } from "framer-motion";
import { Sun, Wind, Sliders, ShieldCheck, Asterisk } from 'lucide-react';

export default function SystemArchitecture() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Asterisk className="text-white w-4 h-4" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                        System Architecture Overview
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                    {/* Left: Isometric View Image Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative min-h-[400px] w-full bg-[#050714] border border-white/5 rounded-3xl overflow-hidden flex flex-col"
                    >
                        {/* Visual placeholder for the isometric blue box */}
                        <div className="flex-1 flex items-center justify-center relative">
                            <div className="w-64 h-64 border-4 border-blue-500/20 bg-blue-500/5 shadow-[0_0_100px_rgba(59,130,246,0.1)] relative">
                                <div className="absolute inset-4 border border-blue-400/30" />
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                            </div>
                            {/* "Schematic" Badge */}
                            <div className="absolute bottom-16 left-8 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                                Schematic
                            </div>
                            <div className="absolute bottom-8 left-8 text-white font-bold text-sm">
                                4-Source Isometric View
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="flex flex-col justify-center">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-400 mb-12 leading-relaxed"
                        >
                            Our novel four-source configuration ensures uniform irradiance while
                            maintaining strict thermal safety limits. The system integrates real-time
                            feedback loops for precise control, eliminating the "blind spots" found in
                            traditional overhead projectors.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Sun,
                                    title: "360° Coverage",
                                    desc: "Maximizes skin surface exposure area.",
                                    bg: "bg-[#111425]"
                                },
                                {
                                    icon: Wind,
                                    title: "Active Cooling",
                                    desc: "Maintains skin temp < 37°C safely.",
                                    bg: "bg-[#111425]"
                                },
                                {
                                    icon: Sliders,
                                    title: "Irradiance Control",
                                    desc: "Adjustable up to 50 μW/cm²/nm.",
                                    bg: "bg-[#111425]"
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Safety Interlocks",
                                    desc: "Auto shut-off for thermal events.",
                                    bg: "bg-[#111425]"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`${item.bg} p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors group`}
                                >
                                    <item.icon className="text-blue-500 mb-4 w-5 h-5 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
