'use client';

import Section from '../Section';
import { History, Lightbulb } from 'lucide-react';

export default function DesignEvolution() {
    return (
        <Section>
            <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <History size={16} className="text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Design Evolution</h2>
            </div>

            <div className="space-y-6">
                {/* Phase 1 */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="hidden md:flex flex-col items-center gap-2 mt-2">
                        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                        <div className="w-px h-full bg-gray-600/30 min-h-[100px]"></div>
                    </div>

                    <div className="flex-1 bg-[#0f1226]/50 p-6 rounded-2xl border border-white/5 flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1">
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1 block">Phase 1</span>
                            <h3 className="text-lg font-bold text-white mb-2">Initial Overhead Model</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                The original prototype utilized a single overhead light source. Testing revealed significant shadowing on the lateral aspects of the patient, reducing therapeutic efficacy by 40%.
                            </p>
                        </div>
                        <div className="w-full md:w-64 h-32 bg-gradient-to-b from-gray-800 to-black rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
                            {/* Placeholder for Lamp */}
                            <div className="w-12 h-16 bg-gray-400 rounded-t-full rounded-b-lg opacity-20"></div>
                        </div>
                    </div>
                </div>

                {/* Current Phase */}
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="hidden md:flex flex-col items-center gap-2 mt-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                    </div>

                    <div className="flex-1 bg-[#0f1226] p-6 rounded-2xl border border-blue-500/30 flex flex-col md:flex-row gap-6 items-center shadow-[0_0_30px_rgba(30,58,138,0.2)]">
                        <div className="flex-1">
                            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1 block">Current Phase</span>
                            <h3 className="text-lg font-bold text-white mb-2">360-Degree Illumination</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Incorporating four synchronized LED panels surrounding the patient bed. This iteration achieves a 0.72 uniformity ratio and eliminates shadowing, ensuring consistent bilirubin breakdown regardless of patient positioning.
                            </p>
                        </div>
                        <div className="w-full md:w-64 h-32 bg-[#050816] rounded-xl overflow-hidden relative border border-white/5">
                            <div className="absolute inset-x-0 bottom-0 top-1/2 flex justify-between px-4 items-end">
                                <div className="w-8 h-12 bg-cyan-500/20 border-t border-cyan-400/50"></div>
                                <div className="w-8 h-12 bg-cyan-500/20 border-t border-cyan-400/50"></div>
                                <div className="w-8 h-12 bg-cyan-500/20 border-t border-cyan-400/50"></div>
                                <div className="w-8 h-12 bg-cyan-500/20 border-t border-cyan-400/50"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
