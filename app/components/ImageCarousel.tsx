'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const TRANSITION_DURATION = 5000; // 5 seconds

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
            setProgress(0);
        }, TRANSITION_DURATION);

        return () => clearInterval(timer);
    }, [images.length]);

    // Progress bar animation
    useEffect(() => {
        setProgress(0);
        const startTime = Date.now();

        const progressTimer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = (elapsed / TRANSITION_DURATION) * 100;

            if (newProgress >= 100) {
                setProgress(100);
                clearInterval(progressTimer);
            } else {
                setProgress(newProgress);
            }
        }, 50);

        return () => clearInterval(progressTimer);
    }, [currentIndex]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="flex flex-col h-full">
            {/* Image Display Area */}
            <div className="relative flex-1 min-h-[400px] rounded-2xl border border-blue-500/20 overflow-hidden bg-transparent">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[currentIndex]}
                            alt={`System Architecture ${currentIndex + 1}`}
                            fill
                            className="object-contain p-4"
                            priority={currentIndex === 0}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Image Counter Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white font-mono z-10">
                    {currentIndex + 1} / {images.length}
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
                {/* Previous Button */}
                <button
                    onClick={goToPrevious}
                    className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-500/50 transition-all group"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </button>

                {/* Progress Bar */}
                <div className="flex-1 max-w-xs h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.05, ease: "linear" }}
                    />
                </div>

                {/* Next Button */}
                <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-600/30 hover:border-blue-500/50 transition-all group"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                </button>
            </div>
        </div>
    );
}
