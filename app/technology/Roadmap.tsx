'use client';

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Loader2, ArrowRight } from "lucide-react";

export default function Roadmap() {
    const phases = [
        {
            title: "Concept Definition & Clinical Requirements",
            status: "completed",
            description: "Established the fundamental requirements for effective neonatal phototherapy.",
            points: [
                "Identification of neonatal jaundice risks",
                "Phototherapy wavelength and irradiance requirements",
                "Motivation for 360-degree illumination"
            ]
        },
        {
            title: "Optical & Thermal Simulation",
            status: "completed",
            description: "Validated design feasibility through rigorous computational modeling.",
            points: [
                "SolidWorks mechanical modeling",
                "COMSOL and TracePro optical analysis",
                "Achieved ≥40 µW/cm²/nm irradiance and >80% uniformity",
                "Thermal safety validation (<40 °C surfaces)"
            ]
        },
        {
            title: "Electronics & System Architecture",
            status: "in-progress",
            description: "Developing the hardware control systems and safety logic.",
            points: [
                "LED driving and power control",
                "Microcontroller-based system control",
                "Temperature sensing and safety logic"
            ]
        },
        {
            title: "Physical Prototyping & Iteration",
            status: "next",
            description: "Building the first full-scale functional prototype for bench testing.",
            points: [
                "Assembly of four-direction illumination prototype",
                "Measured validation against simulations",
                "Mechanical and optical refinement"
            ]
        },
        {
            title: "Clinical Feedback & Usability Evaluation",
            status: "planned",
            description: "Engaging with healthcare professionals to refine the user experience.",
            points: [
                "Hospital visits and clinician input",
                "Workflow, safety, and usability feedback",
                "Design adjustments based on real-world use"
            ]
        },
        {
            title: "Safety Testing & Pre-Regulatory Preparation",
            status: "future",
            description: "Ensuring compliance with medical device standards.",
            points: [
                "Electrical, thermal, and optical safety verification",
                "Risk analysis and technical documentation",
                "Alignment with IEC 60601 principles"
            ]
        },
        {
            title: "Cost Optimization & Deployment Planning",
            status: "future",
            description: "Preparing for scalable manufacturing and real-world impact.",
            points: [
                "Manufacturing cost reduction",
                "Scalability for low-resource healthcare settings",
                "Partnerships and deployment strategy"
            ]
        }
    ];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed': return <CheckCircle2 className="text-green-500" size={20} />;
            case 'in-progress': return <Loader2 className="text-blue-500 animate-spin" size={20} />;
            case 'next': return <ArrowRight className="text-blue-400" size={20} />;
            default: return <Circle className="text-gray-600" size={20} />;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'bg-green-500/10 border-green-500/30 text-green-400';
            case 'in-progress': return 'bg-blue-500/10 border-blue-500/30 text-blue-400';
            case 'next': return 'bg-blue-400/5 border-blue-400/20 text-blue-300';
            default: return 'bg-white/5 border-white/10 text-gray-500';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'completed': return 'Completed';
            case 'in-progress': return 'In Progress';
            case 'next': return 'Up Next';
            case 'planned': return 'Planned';
            case 'future': return 'Future';
            default: return '';
        }
    };

    return (
        <section className="py-20 relative bg-[#0B0E25]">
            <div className="container mx-auto px-6 md:px-12">
                <h2 className="text-3xl font-bold text-white mb-16 text-center">Development Roadmap</h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-green-500 via-blue-500 to-gray-800 transform md:-translate-x-1/2" />

                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Center Node */}
                            <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#0B0E25] border-2 border-white/10 flex items-center justify-center z-10 transform -translate-x-1/2">
                                {getStatusIcon(phase.status)}
                            </div>

                            {/* Content Side */}
                            <div className="ml-12 md:ml-0 md:w-1/2 pt-1 md:px-12">
                                <div className={`p-6 rounded-2xl border backdrop-blur-sm ${getStatusColor(phase.status)}`}>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-bold text-white leading-tight pr-4">
                                            {phase.title}
                                        </h3>
                                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-black/20 shrink-0">
                                            {getStatusLabel(phase.status)}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-4 font-medium">
                                        {phase.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {phase.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2 text-xs text-gray-400/80">
                                                <span className="w-1 h-1 rounded-full bg-current mt-1.5 shrink-0" />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Empty Side for Layout Balance */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
