'use client';

import { motion } from "framer-motion";
import { Sun, Wind, Sliders, ShieldCheck, Asterisk } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

export default function SystemArchitecture() {
    const carouselImages = [
        '/luminosa.png',
        '/luminosa-tracepro-overhead.png',
        '/luminosa-tracepro-all4.png',
        '/simulation-baby-tracepro.png',
        '/luminosa-baby-tracepro2.png'
    ];

    return (
        <section className="py-24 md:py-32 relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex items-center gap-3 mb-16">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Asterisk className="text-white w-5 h-5" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        System Architecture Overview
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-stretch">
                    {/* Left: Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative min-h-[400px] w-full flex flex-col"
                    >
                        <ImageCarousel images={carouselImages} />
                    </motion.div>

                    {/* Right: Content */}
                    <div className="flex flex-col justify-center">
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-base md:text-lg mb-12 leading-relaxed"
                        >
                            Our novel four-source configuration ensures uniform irradiance while
                            maintaining strict thermal safety limits. The system integrates real-time
                            feedback loops for precise control, eliminating the "blind spots" found in
                            traditional overhead projectors.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                                    <item.icon className="text-blue-500 mb-4 w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

