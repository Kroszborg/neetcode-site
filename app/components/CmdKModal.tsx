'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CmdKModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchItems = [
  { category: 'Problems', items: ['Two Sum', 'Valid Parentheses', 'Merge Intervals', 'Binary Search'] },
  { category: 'Courses', items: ['DSA Fundamentals', 'System Design', 'Graph Algorithms', 'Python for DSA'] },
  { category: 'Topics', items: ['Arrays', 'Trees', 'Dynamic Programming', 'Graphs'] },
];

export default function CmdKModal({ isOpen, onClose }: CmdKModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-50"
          >
            <div className="mx-4 rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-4 px-4 py-3 border-b border-white/10">
                <svg className="w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search problems, courses, topics..."
                  className="flex-1 bg-transparent text-white placeholder-zinc-500 outline-none text-sm"
                  autoFocus
                />
                <kbd className="hidden sm:inline-block px-2 py-1 rounded bg-zinc-800 text-zinc-500 text-xs">ESC</kbd>
              </div>

              {/* Results */}
              <div className="max-h-80 overflow-y-auto p-2">
                {searchItems.map((group, gi) => (
                  <div key={group.category} className="mb-4">
                    <h4 className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                      {group.category}
                    </h4>
                    {group.items.map((item, i) => (
                      <button
                        key={item}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-left"
                      >
                        <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16h8M8 12h8m-8 4h8M3 8a1 1 0 011-1h14a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" />
                        </svg>
                        <span className="text-sm text-zinc-300">{item}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-4 py-3 bg-zinc-950/50 border-t border-white/10 flex items-center justify-between text-xs text-zinc-500">
                <span>NeetCode Search</span>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800">↑↓</kbd>
                    navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 rounded bg-zinc-800">↵</kbd>
                    select
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
