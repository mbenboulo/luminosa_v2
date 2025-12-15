'use client';

import Section from './Section';
import { Github, Twitter, Linkedin, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#050816] border-t border-white/5 pt-16 pb-8">
            <Section className="!py-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand & Description */}
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <Zap size={16} className="text-white fill-white" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Luminosa
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            A medical engineering initiative dedicated to eradicating neonatal jaundice complications through innovative technology.
                        </p>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block md:col-span-3"></div>

                    {/* Quick Links */}
                    <div className="md:col-span-4">
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/#motivation" className="text-sm text-gray-400 hover:text-white transition-colors">Motivation</Link>
                            </li>
                            <li>
                                <Link href="/#technology" className="text-sm text-gray-400 hover:text-white transition-colors">Innovation</Link>
                            </li>
                            <li>
                                <Link href="/#impact" className="text-sm text-gray-400 hover:text-white transition-colors">Impact</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-500">
                            © 2025 Luminosa Project. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Use</Link>
                        </div>
                    </div>
                </div>
            </Section>
        </footer>
    );
}
