'use client';

import Section from '../Section';
import { Plus, Settings, User, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: Plus,
        title: 'Hospital Feedback',
        description: 'Gathering usability data from NICU clinicians.',
        bg: 'bg-[#1e1e2d]'
    },
    {
        icon: Settings,
        title: 'PCB Refinement',
        description: 'Optimizing driver circuits for efficiency.',
        bg: 'bg-[#1e1e2d]'
    },
    {
        icon: User,
        title: 'Material Selection',
        description: 'Finalizing biocompatible, easy-clean plastics.',
        bg: 'bg-[#1e1e2d]'
    },
    {
        icon: CheckCircle,
        title: 'Full Validation',
        description: 'ISO 13485 compliance testing.',
        bg: 'bg-[#1e1e2d]'
    }
];

export default function Roadmap() {
    return (
        <Section>
            <div className="bg-[#111326] rounded-3xl p-8 border border-white/5">
                <h2 className="text-xl font-bold text-white mb-8">Roadmap & Next Steps</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <div key={i} className={`${step.bg} p-6 rounded-2xl border border-white/5 hover:bg-[#232336] transition-colors group`}>
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                                <step.icon size={20} className="text-gray-300 group-hover:text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-xs text-gray-500 group-hover:text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
