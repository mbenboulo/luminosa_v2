'use client';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Motivation from './components/Motivation';
import Problem from './components/Problem';
import Technology from './components/Technology';
import Impact from './components/Impact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0E25] overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded">
        Skip to main content
      </a>
      <Navbar />
      <div id="main-content" className="flex flex-col">
        <Hero />
        <Motivation />
        <Problem />
        <Technology />
        <Impact />
      </div>
      <Footer />
    </main>
  );
}

