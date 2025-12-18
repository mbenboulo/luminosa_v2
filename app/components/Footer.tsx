'use client';

import Section from './Section';
import { Github, Twitter, Linkedin, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#050816] border-t border-white/5 pt-16 pb-8">
            <Section className="!py-0">
                {/* Main Footer Content - Three Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand & Description */}
                    <div>
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

                    {/* Quick Links - Two Columns */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
                            <Link href="/#technology" className="text-sm text-gray-400 hover:text-white transition-colors">Innovation</Link>
                            <Link href="/#motivation" className="text-sm text-gray-400 hover:text-white transition-colors">Motivation</Link>
                            <Link href="/#impact" className="text-sm text-gray-400 hover:text-white transition-colors">Impact</Link>
                        </div>
                    </div>

                    {/* Supported By */}
                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Supported By</h4>
                        <div className="flex flex-col gap-6">
                            <Link
                                href="https://knust.edu.gh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-60 hover:opacity-100 transition-opacity w-fit"
                            >
                                <Image
                                    src="/knust.svg"
                                    alt="KNUST"
                                    width={120}
                                    height={60}
                                    className="h-10 w-auto"
                                />
                            </Link>
                            <Link
                                href="https://dipperlab.knust.edu.gh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="opacity-60 hover:opacity-100 transition-opacity w-fit"
                            >
                                <Image
                                    src="/dipper.svg"
                                    alt="DIPPER Lab"
                                    width={120}
                                    height={60}
                                    className="h-10 w-auto"
                                />
                            </Link>
                        </div>
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


