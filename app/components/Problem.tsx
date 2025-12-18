'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { DollarSign, Plug, Truck } from 'lucide-react';

const problems = [
    {
        icon: DollarSign,
        title: 'Prohibitive Cost',
        description: 'Hospital-grade units cost thousands of dollars, making them unaffordable for rural clinics.',
    },
    {
        icon: Plug,
        title: 'Power Dependency',
        description: 'Reliance on stable high-voltage electrical grids makes deployment difficult in developing areas.',
    },
    {
        icon: Truck,
        title: 'Limited Portability',
        description: 'Bulky, heavy designs prevent easy transport to remote health centers.',
    }
];

export default function Problem() {
    return (
        <Section className="py-20">
            <div className="bg-[#4338ca] rounded-3xl p-8 md:p-16 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Current Solutions Fall Short</h2>
                        <p className="text-blue-100/80">Traditional phototherapy units are often ill-suited for the environments that need them most.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {problems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.15 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <item.icon size={32} className="text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-blue-100/70 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
