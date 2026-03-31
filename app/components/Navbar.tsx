'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const navLinks = [
    { label: 'Problems', href: '#problems' },
    { label: 'Courses',  href: '#courses'  },
    { label: 'Roadmap',  href: '#roadmap'  },
    { label: 'Pricing',  href: '/pricing'  },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="nc-nav fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/75 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-3">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group shrink-0">
          <span className="font-sans text-[17px] font-semibold tracking-tight text-white">NeetCode</span>
        </a>

        {/* Center nav — desktop */}
        <div className="hidden md:flex items-center gap-5 text-sm text-zinc-400 font-sans">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-100 py-1 px-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">

          {/* Sign in */}
          <a
            href="/signin"
            className="hidden sm:inline-flex font-sans text-sm text-zinc-400 hover:text-white transition-colors duration-100 px-2 py-2"
          >
            Sign in
          </a>

          {/* Start Free CTA */}
          <a
            href="/signup"
            className="font-sans px-4 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors duration-100 text-sm font-medium text-white"
          >
            Start Free
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-zinc-400 hover:text-white hover:bg-white/8 transition-all duration-100"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/96 backdrop-blur-md border-t border-white/[0.07]"
          >
            <div className="px-5 py-3 flex flex-col">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobile}
                  className="font-sans text-[15px] text-zinc-300 hover:text-white py-3 border-b border-white/[0.05] last:border-0 transition-colors duration-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-3 pb-1">
                <a href="/signin" className="font-sans text-sm text-zinc-400 hover:text-white transition-colors py-2">
                  Sign in
                </a>
                <a href="/signup" className="font-sans ml-auto px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors text-sm font-medium">
                  Start Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
