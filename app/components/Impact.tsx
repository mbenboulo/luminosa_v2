'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { Clock, Shield, Zap, Globe } from 'lucide-react';

const impacts = [
    {
        icon: Clock,
        title: 'Reduced Duration',
        description: 'Higher irradiance means shorter hospital stays for infants and mothers.',
        color: 'text-green-400',
        bg: 'bg-green-400/10'
    },
    {
        icon: Shield,
        title: 'Neuro-Protection',
        description: 'Early intervention significantly lowers the risk of permanent brain damage.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10'
    },
    {
        icon: Zap,
        title: 'Energy Efficiency',
        description: 'Low power requirements allow for operation via solar or battery backup.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10'
    },
    {
        icon: Globe,
        title: 'Global Access',
        description: 'Designed for reproducibility and low-cost manufacturing.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-400/10'
    }
];

export default function Impact() {
    return (
        <Section id="impact" className="py-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projected Impact</h2>
                <p className="text-gray-400">
                    By combining efficiency with accessibility, Luminosa aims to drastically improve outcomes for newborns in underserved regions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {impacts.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#0f1226] p-8 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-[#141830] transition-all group"
                    >
                        <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <item.icon size={24} className={item.color} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-xs text-gray-400 leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
