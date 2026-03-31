'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  onPracticeClick: () => void;
  onCoursesClick: () => void;
}

const nodes = [
  { id: 'arrays',  label: 'Arrays',          start: true  },
  { id: 'hashmap', label: 'Hash Maps',       start: true  },
  { id: 'twoptr',  label: 'Two Pointers',    start: true  },
  { id: 'stack',   label: 'Stack',           start: false },
  { id: 'binary',  label: 'Binary Search',   start: false },
  { id: 'trees',   label: 'Binary Trees',    start: false },
  { id: 'graphs',  label: 'Graphs',          start: false },
  { id: 'dp',      label: 'Dynamic Prog.',   start: false },
];

const edges: [string, string][] = [
  ['arrays', 'hashmap'], ['arrays', 'twoptr'],
  ['hashmap', 'stack'],  ['hashmap', 'trees'],
  ['twoptr', 'binary'],  ['twoptr', 'trees'],
  ['stack', 'trees'],    ['binary', 'trees'],
  ['trees', 'graphs'],   ['trees', 'dp'],
];

const nodePositions: Record<string, { x: number; y: number }> = {
  'arrays': { x: 50, y: 10 },
  'hashmap': { x: 22, y: 28 },
  'twoptr': { x: 78, y: 28 },
  'stack': { x: 15, y: 52 },
  'binary': { x: 85, y: 52 },
  'trees': { x: 50, y: 66 },
  'graphs': { x: 76, y: 84 },
  'dp': { x: 24, y: 84 },
};

function edgePath(x1: number, y1: number, x2: number, y2: number): string {
  const cy = (y1 + y2) / 2;
  return `M ${x1} ${y1} C ${x1} ${cy} ${x2} ${cy} ${x2} ${y2}`;
}

const stats = [
  { value: '1M+',    label: 'Engineers prepared' },
  { value: '1,000+', label: 'Problems & videos'  },
  { value: '10+',    label: 'Structured courses' },
];

export default function HeroSection({ onPracticeClick, onCoursesClick }: HeroSectionProps) {
  return (
    <section className="relative w-full bg-zinc-950 overflow-hidden">
      {/* Japanese art background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/japaneasy_20-_2001.jpg)',
        }}
      />

      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-black/85 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Ambient violet glow */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-violet-600/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      <style>{`
        .hero-text-primary {
          color: #fff !important;
        }
        .hero-text-secondary {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        .hero-text-muted {
          color: rgba(255, 255, 255, 0.4) !important;
        }
        .hero-accent {
          color: #7c3aed !important;
        }
        .hero-border {
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        .hero-glass {
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        .hero-node {
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
          color: rgba(255, 255, 255, 0.5) !important;
        }
        .hero-divider {
          background-color: rgba(255, 255, 255, 0.15) !important;
        }
        .h-px.bg-violet-500 {
          background-color: #7c3aed !important;
        }
      `}</style>

      {/* Flex column: fills viewport, positions bottom label correctly */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: '100vh' }}>

        {/* Navbar offset */}
        <div className="h-16 shrink-0" />

        {/* Main content — fills remaining height, centers vertically */}
        <div className="flex-1 flex items-center py-12 sm:py-16">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* ── Left: copy ── */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-8 sm:mb-9"
              >
                <div className="w-1.5 h-px bg-violet-500 shrink-0" />
                <span className="font-sans text-[10px] text-violet-400 hero-accent tracking-[0.25em] uppercase">
                  THE INTERVIEW PREP SYSTEM
                </span>
              </motion.div>

              {/* H1 */}
              <h1 className="font-serif text-[44px] sm:text-5xl md:text-6xl lg:text-[64px] font-normal leading-[1.06] tracking-tight text-white hero-text-primary mb-5">
                Crack<br />
                Interviews.
                <br />
                <span className="text-white/50 hero-text-secondary">With a Proven</span>
                <br />
                <span className="text-white/50 hero-text-secondary">System.</span>
              </h1>

              {/* Subtext */}
              <p className="font-sans text-sm text-white/60 hero-text-muted mb-8 sm:mb-9 tracking-wide">
                Practice. Learn. Get hired.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.975 }}
                  onClick={onPracticeClick}
                  className="font-sans bg-white text-black px-6 py-3 rounded-xl text-base font-semibold transition-colors hover:bg-zinc-100"
                >
                  Start Practicing →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.025 }}
                  whileTap={{ scale: 0.975 }}
                  onClick={onCoursesClick}
                  className="font-sans border border-white/20 hero-border text-white/80 hero-text-primary px-6 py-3 rounded-xl text-base font-semibold transition-all hover:border-black/35 hover:text-black hover:bg-black/5"
                >
                  Explore Courses
                </motion.button>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 sm:mt-12 flex items-stretch"
              >
                {stats.map((s, i) => (
                  <div key={s.value} className="flex items-center">
                    {i > 0 && <div className="w-px self-stretch bg-white/15 hero-divider mx-5 sm:mx-7" />}
                    <div>
                      <div className="font-sans text-2xl sm:text-[28px] font-semibold text-white hero-text-primary leading-none">
                        {s.value}
                      </div>
                      <div className="font-sans text-[10px] sm:text-[11px] text-white/40 hero-text-muted mt-1 tracking-wide">
                        {s.label}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: DSA Roadmap card ── */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block relative h-[490px]"
            >
              {/* Glass panel */}
              <div className="hero-glass absolute inset-0 rounded-2xl backdrop-blur-md bg-white/[0.06] border border-white/15 overflow-hidden" />

              {/* Card header */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-4 border-b border-white/15 hero-border">
                <div>
                  <p className="font-sans text-[10px] text-white/35 hero-text-muted uppercase tracking-[0.2em]">
                    DSA Roadmap
                  </p>
                  <p className="font-sans text-sm font-medium text-white hero-text-primary mt-0.5">
                    8 topics
                  </p>
                </div>
                <span className="font-sans text-[10px] font-medium text-violet-300 hero-accent bg-violet-500/15 border border-violet-500/25 px-2.5 py-1 rounded-full">
                  NeetCode 150
                </span>
              </div>

              {/* Graph */}
              <div className="absolute inset-x-0 top-[60px] bottom-[52px]">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="eg-start" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%"   stopColor="rgba(139,92,246,0.8)" />
                      <stop offset="100%" stopColor="rgba(139,92,246,0.2)" />
                    </linearGradient>
                    <linearGradient id="eg-dim" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%"   stopColor="rgba(255,255,255,0.2)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                    </linearGradient>
                  </defs>

                  {edges.map(([fromId, toId], i) => {
                    const from = nodes.find(n => n.id === fromId)!;
                    const to   = nodes.find(n => n.id === toId)!;
                    const fromPos = nodePositions[from.id];
                    const toPos = nodePositions[to.id];
                    const d    = edgePath(fromPos.x, fromPos.y, toPos.x, toPos.y);
                    return (
                      <motion.path
                        key={`${fromId}-${toId}`}
                        d={d}
                        fill="none"
                        stroke={from.start ? 'url(#eg-start)' : 'url(#eg-dim)'}
                        strokeWidth={from.start ? '1.6' : '1.2'}
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          pathLength: { duration: 0.9, delay: 0.75 + i * 0.06, ease: [0.4, 0, 0.2, 1] },
                          opacity:    { duration: 0.15, delay: 0.75 + i * 0.06 },
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Nodes */}
                {nodes.map((node, i) => {
                  const pos = nodePositions[node.id];
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5 + i * 0.08,
                      }}
                      className="absolute group"
                      style={{
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    >
                      <div
                        className={[
                          'px-3 py-1.5 rounded-full font-sans text-[11px] font-medium whitespace-nowrap cursor-pointer select-none transition-all duration-100 group-hover:scale-110',
                          node.start
                            ? 'bg-violet-600/90 text-white border border-violet-400/60 shadow-[0_0_15px_rgba(124,58,237,0.5)]'
                            : 'bg-zinc-900/70 backdrop-blur-sm text-white/50 border border-white/15 hero-node',
                        ].join(' ')}
                      >
                        {node.label}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3.5 border-t border-white/15 hero-border flex items-center justify-between">
                <span className="font-sans text-[10px] text-white/30 hero-text-muted">
                  Recommended order
                </span>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  onClick={onPracticeClick}
                  className="font-sans text-[11px] font-medium text-violet-300 hero-accent hover:text-violet-500 transition-colors duration-100"
                >
                  Start free →
                </motion.button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom bar — always at visual bottom of viewport */}
        <div className="shrink-0 px-6 sm:px-8 pb-5 flex items-center justify-end">
          <span
            className="hidden xl:block font-sans text-[9px] uppercase tracking-[0.5em] text-white/20 hero-text-muted"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            NEETCODE
          </span>
        </div>

      </div>
    </section>
  );
}
