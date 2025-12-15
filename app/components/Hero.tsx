'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from './Section';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A1E3B] via-[#0B0E25] to-[#0B0E25]">

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

            <Section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase">
                        Medical Grade Engineering
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                        Illuminating the <br />
                        <span className="text-[#818cf8]">Future of Neonatal Care</span>
                    </h1>

                    <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                        Advanced, accessible phototherapy designed to treat neonatal jaundice safely and effectively. Powered by microcontroller precision and high-intensity blue LEDs to bridge the gap in global healthcare.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="/technology">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-[#4F46E5] text-white px-8 py-3 rounded-full font-medium shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                            >
                                Explore Technology <ArrowRight size={18} />
                            </motion.button>
                        </Link>

                        <Link href="#impact">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 rounded-full font-medium border border-white/10 text-white hover:bg-white/5 transition-colors"
                            >
                                Learn about Impact
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Hero Visual / Placeholder for Device Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#1E2342] to-[#0f1121] border border-white/5 p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />

                        {/* Abstract Light Representation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 blur-[80px] opacity-60 animate-pulse" />

                        <div className="absolute bottom-8 left-8 right-8 p-4 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-widest">Target Irradiance</p>
                                <p className="text-xl font-bold text-white">50 µW/cm²/nm</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                                <Zap size={20} className="text-blue-400" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </Section>
        </div>
    );
}
