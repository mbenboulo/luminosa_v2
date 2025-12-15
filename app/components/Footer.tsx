'use client';

import Section from './Section';
import { Github, Twitter, Linkedin, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#050816] border-t border-white/5 pt-16 pb-8">
            <Section className="!py-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <Zap size={16} className="text-white fill-white" />
                            </div>
                            <span className="text-xl font-bold text-white">
                                Luminosa
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-6">
                            A medical engineering initiative dedicated to eradicating neonatal jaundice complications through innovative technology.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider">Supported by</h4>
                        <div className="bg-white p-4 rounded-xl inline-block">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/british-council.jpg"
                                alt="British Council"
                                className="h-12 w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        © 2025 Luminosa Project. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Terms of Use</Link>
                    </div>
                </div>
            </Section>
        </footer>
    );
}
