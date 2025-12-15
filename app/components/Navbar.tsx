'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap } from 'lucide-react'; // Placeholder logo icon
import ContactModal from './ContactModal';

interface NavbarProps {
    mode?: 'default' | 'simple';
    showNavLinks?: boolean;
}

export default function Navbar({ mode = 'default', showNavLinks = true }: NavbarProps) {
    const [isContactOpen, setIsContactOpen] = useState(false);

    if (mode === 'simple') {
        return (
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0E25]/80 border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="text-sm font-medium">Back to Home</span>
                    </Link>

                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                            <Zap size={16} className="text-white fill-white" />
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                            Luminosa
                        </span>
                    </Link>
                </div>
            </nav>
        );
    }

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0B0E25]/80 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                        <Zap size={16} className="text-white fill-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                        Luminosa
                    </span>
                </Link>

                {/* Desktop Links */}
                {showNavLinks && (
                    <div className="hidden md:flex items-center gap-8">
                        {[
                            { name: 'Motivation', href: '/#motivation' },
                            { name: 'Innovation', href: '/#technology' },
                            { name: 'Impact', href: '/#impact' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}

                {/* CTA Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsContactOpen(true)}
                    className="bg-[#4F46E5] hover:bg-[#4338ca] text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                >
                    Contact Us
                </motion.button>
            </div>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </nav>
    );
}
