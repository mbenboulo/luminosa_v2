'use client';

import { motion } from "framer-motion";
import { History, Lightbulb, RefreshCw } from "lucide-react";

export default function DesignEvolution() {
    return (
        <section className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center gap-3 mb-12">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <History className="text-white w-4 h-4" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Design Evolution</h2>
                </div>

                <div className="space-y-8 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[19px] top-10 bottom-10 w-0.5 bg-white/10 z-0" />

                    {/* Phase 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6"
                    >
                        <div className="flex flex-col items-center pt-2">
                            <div className="w-10 h-10 rounded-full bg-[#111425] border border-white/10 flex items-center justify-center shadow-lg">
                                <div className="w-3 h-3 rounded-full bg-gray-500" />
                            </div>
                        </div>

                        <div className="bg-[#111425] border border-white/5 rounded-2xl p-1 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
                                <div className="p-6 md:p-8 flex flex-col justify-center">
                                    <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">Phase 1</div>
                                    <h3 className="text-xl font-bold text-white mb-3">Initial Overhead Model</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        The original prototype utilized a single overhead light source. Testing revealed significant
                                        shadowing on the lateral aspects of the patient, reducing therapeutic efficacy by 40%.
                                    </p>
                                </div>
                                <div className="relative min-h-[200px] bg-black/50 border-l border-white/5 flex items-center justify-center">
                                    {/* Simple Lamp Visualization */}
                                    <div className="relative w-32 h-32">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-16 bg-gray-600" />
                                        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-24 h-16 bg-gray-400 rounded-t-full opacity-50 blur-[1px]" />
                                        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-white/20 to-transparent blur-xl clip-path-polygon-[50%_0,0_100%,100%_100%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Current Phase */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6"
                    >
                        <div className="flex flex-col items-center pt-2">
                            <div className="w-10 h-10 rounded-full bg-[#111425] border border-blue-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                            </div>
                        </div>

                        <div className="bg-[#111425] border border-blue-500/20 rounded-2xl p-1 overflow-hidden relative">
                            <div className="absolute inset-0 bg-blue-500/5 pointer-events-none" />
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 relative z-10">
                                <div className="p-6 md:p-8 flex flex-col justify-center">
                                    <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wider">Current Phase</div>
                                    <h3 className="text-xl font-bold text-white mb-3">360-Degree Illumination</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Incorporating four synchronized LED panels surrounding the patient bed. This iteration achieves
                                        a 0.72 uniformity ratio and eliminates shadowing, ensuring consistent bilirubin breakdown
                                        regardless of patient positioning.
                                    </p>
                                </div>
                                <div className="relative min-h-[200px] bg-black/50 border-l border-white/5 flex items-center justify-center">
                                    {/* 4-Panel Visualization */}
                                    <div className="flex items-end gap-2 h-32 pb-4">
                                        <div className="w-4 h-24 bg-blue-500/40 rounded-t shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                                        <div className="w-4 h-24 bg-blue-500/40 rounded-t shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                                        <div className="w-16 h-8 bg-gray-800 rounded mb-4 flex items-center justify-center border border-white/5">
                                            <div className="w-10 h-2 bg-blue-200/20 rounded-full" />
                                        </div>
                                        <div className="w-4 h-24 bg-blue-500/40 rounded-t shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                                        <div className="w-4 h-24 bg-blue-500/40 rounded-t shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
