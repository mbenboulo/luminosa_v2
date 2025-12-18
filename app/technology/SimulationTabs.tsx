'use client';

import { motion } from "framer-motion";
import { BarChart3, Zap, Box } from "lucide-react";

export default function SimulationTabs() {
    const stats = [
        { label: "Avg Irradiance", value: "30", unit: "μW/cm²/nm" },
        { label: "Surface Temp", value: "< 37", unit: "°C" },
        { label: "Uniformity Ratio", value: "0.72", unit: "" },
        { label: "Peak Wavelength", value: "460", unit: "nm" },
    ];

    const simulations = [
        {
            id: 'tracepro',
            icon: Zap,
            title: "Optical Irradiance Simulation",
            subtitle: "TracePro Optical",
            description: "Full four-source ray-tracing simulations performed in TracePro confirm that the configuration achieves comprehensive 360-degree coverage. The system delivers a uniform irradiance of 30 μW/cm²/nm across the entire neonatal body surface, effectively eliminating the shadow zones common in single-source devices.",
            points: [
                "Validated >0.7 uniformity ratio across curved surfaces.",
                "Confirmed zero shadow zones on lateral aspects."
            ],
            gradient: "from-green-500/20 to-emerald-500/5",
            borderColor: "border-green-500/30",
            iconBg: "bg-green-500/20",
            iconColor: "text-green-400"
        },
        {
            id: 'solidworks',
            icon: Box,
            title: "Mechanical Modeling & Assembly",
            subtitle: "SolidWorks CAD",
            description: "Comprehensive 3D mechanical simulations in SolidWorks were instrumental in defining the final structural architecture. We utilized the CAD environment to validate the precise integration of the four-source array, cooling channels, and adjustable mounting mechanisms, ensuring robustness and ease of assembly.",
            points: [
                "Confirmed interference-free fit for 150+ components.",
                "Validated structural integrity of moving gantry parts."
            ],
            gradient: "from-blue-500/20 to-cyan-500/5",
            borderColor: "border-blue-500/30",
            iconBg: "bg-blue-500/20",
            iconColor: "text-blue-400"
        }
    ];

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
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#111425] border border-white/5 p-6 rounded-xl"
                        >
                            <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-bold text-white">{stat.value}</span>
                                <span className="text-xs text-gray-500">{stat.unit}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Side-by-Side Simulation Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {simulations.map((sim, index) => (
                        <motion.div
                            key={sim.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`bg-[#111425] border ${sim.borderColor} rounded-2xl p-6 md:p-8 hover:border-opacity-60 transition-all group`}
                        >
                            {/* Header with Icon */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-10 h-10 rounded-lg ${sim.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    <sim.icon className={`w-5 h-5 ${sim.iconColor}`} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                                        {sim.subtitle}
                                    </div>
                                    <h3 className="text-lg font-bold text-white">
                                        {sim.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {sim.description}
                            </p>

                            {/* Key Points */}
                            <ul className="space-y-3">
                                {sim.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                                        <div className={`w-4 h-4 rounded-full ${sim.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                                            <div className={`w-1.5 h-1.5 rounded-full ${sim.iconColor.replace('text-', 'bg-')}`} />
                                        </div>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            {/* Gradient Background Accent */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${sim.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -z-10`} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
