'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SystemArchitecture from './SystemArchitecture';
import SimulationTabs from './SimulationTabs';
import DesignEvolution from './DesignEvolution';
import Roadmap from './Roadmap';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TechnologyPage() {
    return (
        <main className="min-h-screen bg-[#0B0E25] overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200 font-sans">
            <Navbar />

            {/* Header Section */}
            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full translate-y-[-50%]" />

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                            <ArrowLeft size={16} />
                        </div>
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase">
                            Engineering Specs
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            Engineering the Future of <br />
                            <span className="text-blue-400">Neonatal Care</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                            A deep dive into the 360-degree 4-source phototherapy system, validated for
                            safety and optimized for effective bilirubin breakdown.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SystemArchitecture />
            <SimulationTabs />
            <DesignEvolution />
            <Roadmap />
            <Footer />
        </main>
    );
}
