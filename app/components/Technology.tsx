'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { Zap, Grid, Thermometer, Cpu } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: 'High-Intensity Blue LEDs',
        description: '3W LEDs calibrated to the optimal 450-470nm spectrum for maximum bilirubin breakdown efficiency.',
        color: 'bg-blue-500'
    },
    {
        icon: Grid,
        title: '4-Sided Illumination',
        description: 'Uniform light distribution ensures total body coverage, reducing treatment duration significantly.',
        color: 'bg-purple-500'
    },
    {
        icon: Thermometer,
        title: 'Active Thermal Monitoring',
        description: 'Integrated sensors and microcontroller logic prevent overheating, ensuring infant safety at all times.',
        color: 'bg-indigo-500'
    }
];

export default function Technology() {
    return (
        <Section id="technology" className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-3 py-1 mb-6 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-wider uppercase">
                        Our Innovation
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Precision Engineering <br />
                        for Safer Care
                    </h2>
                    <p className="text-gray-400 mb-12">
                        The Luminosa device utilizes a novel arrangement of components to maximize therapeutic efficacy while minimizing power consumption and heat generation.
                    </p>

                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="flex gap-4"
                            >
                                <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center shrink-0 mt-1`}>
                                    <feature.icon size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Detail Card - "Microcontroller Logic" visual */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-[4/5] rounded-3xl bg-[#080a18] border border-white/5 relative overflow-hidden flex flex-col justify-end p-8 group">
                        {/* PCB Trace Effects */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>

                        {/* Center Chip Visual */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-32 h-32 bg-black border border-blue-500/30 rounded-lg flex items-center justify-center relative shadow-[0_0_50px_rgba(59,130,246,0.2)]">
                                <Cpu size={48} className="text-blue-500" />
                                <div className="absolute inset-0 border border-blue-500/20 rounded-lg scale-125"></div>
                                <div className="absolute inset-0 border border-blue-500/10 rounded-lg scale-150"></div>
                            </div>
                        </div>

                        {/* Floating Info Interface */}
                        <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-blue-500/30 p-4 rounded-xl w-48">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-xs font-bold text-white uppercase">System Active</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>Temp</span>
                                    <span className="text-blue-400">36.5°C</span>
                                </div>
                                <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[70%]"></div>
                                </div>
                                <div className="flex justify-between text-xs text-gray-400">
                                    <span>Intensity</span>
                                    <span className="text-blue-400">98%</span>
                                </div>
                                <div className="w-full bg-gray-800 h-1 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[98%]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2">Microcontroller Logic</h3>
                            <p className="text-sm text-gray-400">Intelligent control loop adjusts LED intensity based on ambient temperature and battery levels.</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </Section>
    );
}
