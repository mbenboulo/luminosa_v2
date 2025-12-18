'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SystemArchitecture from './SystemArchitecture';
import SimulationTabs from './SimulationTabs';
import DesignEvolution from './DesignEvolution';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TechnologyPage() {
    return (
        <main className="min-h-screen bg-[#0B0E25] overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200 font-sans">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded">
                Skip to main content
            </a>
            <Navbar showNavLinks={false} />

            {/* Header Section */}
            <header className="pt-32 pb-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/5 blur-[100px] rounded-full translate-y-[-50%]" aria-hidden="true" />

                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
                        aria-label="Back to home page"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors" aria-hidden="true">
                            <ArrowLeft size={16} />
                        </div>
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-wider uppercase" aria-label="Page category">
                            Engineering Specs
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                            Engineering the Future of <br />
                            <span className="text-[#818cf8]">Neonatal Care</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
                            A deep dive into the 360-degree 4-source phototherapy system, validated for
                            safety and optimized for effective bilirubin breakdown.
                        </p>
                    </motion.div>
                </div>
            </header>

            <div id="main-content">
                <SystemArchitecture />
                <SimulationTabs />
                <DesignEvolution />
            </div>
            <Footer />
        </main>
    );
}

