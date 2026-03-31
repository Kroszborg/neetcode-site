'use client';

import { motion } from 'framer-motion';

const topicIcons: Record<string, React.ReactNode> = {
  'Arrays': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  'Strings': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  ),
  'Hash Table': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
      <path strokeLinecap="round" d="M12 4v16M4 12h16" />
    </svg>
  ),
  'Two Pointers': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12H4m16 0h-4M8 12l-3 3m3-3l-3-3m12 3l3 3m-3-3l3-3" />
    </svg>
  ),
  'Binary Search': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="m20 20-3.5-3.5" />
    </svg>
  ),
  'Linked List': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M9 6h6M6 9v6M18 9v6M9 18h6" />
    </svg>
  ),
  'Trees': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="12" r="2.5" />
      <circle cx="6" cy="19" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M12 7.5V10M9.5 11 7.5 13M14.5 11l2 2M6 14.5v2M18 14.5v2" />
    </svg>
  ),
  'Tries': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="4" r="2" />
      <circle cx="5" cy="10" r="2" />
      <circle cx="12" cy="10" r="2" />
      <circle cx="19" cy="10" r="2" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="16" cy="18" r="2" />
      <path d="M12 6v2M10 10H7M14 10h3M8.5 12.5 9.5 16M15.5 12.5l-1 3.5" />
    </svg>
  ),
  'Heap': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M3 18h18M7 6l5 4 5-4" />
    </svg>
  ),
  'Backtracking': (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4" />
      <path strokeLinecap="round" d="M7 8V4M17 8V4" />
    </svg>
  ),
};

const topics = ['Arrays', 'Strings', 'Hash Table', 'Two Pointers', 'Binary Search', 'Linked List', 'Trees', 'Tries', 'Heap', 'Backtracking'];

export default function PracticeView() {
  return (
    <motion.div
      id="problems"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-4xl mx-auto px-6 py-16"
    >
      {/* Progress Card */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-white">NeetCode 150</h3>
            <p className="text-sm text-zinc-500">Track your progress through the essential problems</p>
          </div>
          <div className="text-right">
            <span className="text-3xl font-semibold text-violet-400">67</span>
            <span className="text-zinc-500">/150</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative h-2 rounded-full bg-zinc-800 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-600 to-violet-400 rounded-full"
            style={{ width: '44.6%' }}
          />
        </div>

        {/* Continue button */}
        <button className="mt-6 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 transition-all font-semibold text-sm inline-flex items-center gap-2 text-white hover:scale-[1.02] active:scale-[0.98]">
          Continue Where You Left Off
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Topic Chips */}
      <div>
        <h4 className="text-sm font-medium text-zinc-500 mb-4">Browse Topics</h4>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, i) => (
            <motion.button
              key={topic}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-violet-500/40 transition-all text-sm flex items-center gap-2.5 text-zinc-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="text-violet-400">{topicIcons[topic]}</span>
              <span className="font-medium">{topic}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quick stats */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
      >
        <div>
          <div className="text-2xl font-semibold text-white">45</div>
          <div className="text-xs text-zinc-500 mt-1">Easy solved</div>
        </div>
        <div>
          <div className="text-2xl font-semibold text-white">18</div>
          <div className="text-xs text-zinc-500 mt-1">Medium solved</div>
        </div>
        <div>
          <div className="text-2xl font-semibold text-white">4</div>
          <div className="text-xs text-zinc-500 mt-1">Hard solved</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
