'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ModeSwitch from './components/ModeSwitch';
import PracticeView from './components/PracticeView';
import CoursesView from './components/CoursesView';
import SocialProof from './components/SocialProof';
import NaviStory from './components/NaviStory';
import FinalCTA from './components/FinalCTA';

type Mode = 'practice' | 'learn';

export default function Home() {
  const [mode, setMode] = useState<Mode>('practice');

  const handleModeChange = useCallback((newMode: Mode) => setMode(newMode), []);

  const scrollToPractice = useCallback(() => {
    document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const scrollToCourses = useCallback(() => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar />

      <main className="flex-1">
        <HeroSection
          onPracticeClick={scrollToPractice}
          onCoursesClick={scrollToCourses}
        />

        <ModeSwitch mode={mode} onModeChange={handleModeChange} />

        <AnimatePresence mode="wait">
          {mode === 'practice' ? (
            <PracticeView key="practice" />
          ) : (
            <CoursesView key="courses" />
          )}
        </AnimatePresence>

        <SocialProof />
        <NaviStory />
        <FinalCTA />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-zinc-500">© 2026 NeetCode. All rights reserved.</p>
          <div className="flex items-center gap-6 font-sans text-xs text-zinc-500">
            <a href="/privacy" className="hover:text-white transition-colors duration-100">Privacy</a>
            <a href="/terms"   className="hover:text-white transition-colors duration-100">Terms</a>
            <a href="mailto:support@neetcode.io" className="hover:text-white transition-colors duration-100">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
