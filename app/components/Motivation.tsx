'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { User, AlertTriangle, Ban } from 'lucide-react';

const stats = [
    {
        icon: User,
        value: '60%',
        label: 'Newborns Affected',
        description: 'Of all newborns globally develop clinical jaundice within the first week of life.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10'
    },
    {
        icon: AlertTriangle,
        value: '10%',
        label: 'Severe Cases',
        description: 'Risk developing severe hyperbilirubinemia, leading to kernicterus if untreated.',
        color: 'text-red-400',
        bg: 'bg-red-400/10'
    },
    {
        icon: Ban,
        value: 'High',
        label: 'Accessibility Gap',
        description: 'Lack of functional devices in low-resource settings prevents timely treatment.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10'
    }
];

export default function Motivation() {
    return (
        <Section id="motivation" className="bg-[#0B0E25]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div>
                    <h4 className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-2">The Motivation</h4>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Addressing a Critical Global Need</h2>
                </div>
                <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                    Neonatal jaundice is a common condition, yet effective treatment remains inaccessible in many parts of the world due to cost and complexity.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#1E2342] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-10 h-10 rounded-full ${stat.bg} flex items-center justify-center`}>
                                <stat.icon size={20} className={stat.color} />
                            </div>
                            <span className="text-4xl font-bold text-white">{stat.value}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{stat.label}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {stat.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
