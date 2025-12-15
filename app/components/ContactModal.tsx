'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [mounted, setMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        profession: 'Clinician',
        comments: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setFormData({ name: '', email: '', profession: 'Clinician', comments: '' });
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
                        aria-hidden="true"
                    />

                    {/* Scrollable Container */}
                    <div className="fixed inset-0 z-[10000] overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            {/* Modal Panel */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="w-full max-w-md bg-[#111425] border border-white/10 rounded-2xl p-6 shadow-2xl relative"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <h2 className="text-2xl font-bold text-white mb-2">Get in Touch</h2>
                                <p className="text-sm text-gray-400 mb-6">
                                    Interested in Luminosa? We'd love to hear from you.
                                </p>

                                {status === 'success' ? (
                                    <div className="flex flex-col items-center justify-center py-8">
                                        <CheckCircle2 size={48} className="text-green-500 mb-4" />
                                        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                                        <p className="text-gray-400 text-sm mt-2">We'll get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-medium text-gray-400 mb-1">Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                                                placeholder="Your Name"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm"
                                                placeholder="name@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-400 mb-1">Profession</label>
                                            <select
                                                value={formData.profession}
                                                onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                                                className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm [&>option]:bg-[#111425]"
                                            >
                                                <option value="Clinician">Clinician</option>
                                                <option value="Engineer">Engineer</option>
                                                <option value="Investor">Investor</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-400 mb-1">Message</label>
                                            <textarea
                                                required
                                                rows={4}
                                                value={formData.comments}
                                                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                                                className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                                                placeholder="How can we help?"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {status === 'submitting' ? (
                                                <>
                                                    <Loader2 size={16} className="animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send size={16} />
                                                </>
                                            )}
                                        </button>

                                        {status === 'error' && (
                                            <p className="text-red-400 text-xs text-center">
                                                Something went wrong. Please try again.
                                            </p>
                                        )}
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
