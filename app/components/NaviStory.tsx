'use client';

import { motion } from 'framer-motion';

const companies = ['Google', 'Amazon', 'Capital One'];

export default function NaviStory() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Left: story ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-px bg-violet-500" />
              <span className="font-sans text-[10px] text-violet-400 tracking-[0.25em] uppercase">
                THE CREATOR
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl md:text-5xl font-normal leading-[1.08] tracking-tight text-white mb-8">
              Built while<br />
              unemployed.
              <br />
              <span className="text-white/50">Now helping</span>
              <br />
              <span className="text-white/50">millions get hired.</span>
            </h2>

            {/* Story paragraphs */}
            <div className="space-y-4 mb-10">
              {[
                'I created NeetCode in 2020 when I was unemployed and couldn\'t find a job.',
                'While I was struggling myself, it was still rewarding for me to make videos.',
                'I received so many messages from others who got jobs after studying with my videos. It felt so gratifying and kept me motivated.',
                'About a year later I managed to get a job at Google.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="font-sans text-[15px] text-zinc-500 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.a
              href="/about"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-sans text-sm font-medium transition-colors hover:bg-zinc-100"
            >
              Watch Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* ── Right: profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pt-4"
          >
            {/* Profile row */}
            <div className="flex items-start gap-5 mb-10 pb-10 border-b border-white/10">
              <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-[0_0_20px_rgba(124,58,237,0.3)]">
                <img
                  src="/navi.png"
                  alt="Navi - Creator of NeetCode"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-sans font-semibold text-white text-base">Navi</p>
                <p className="font-sans text-sm text-zinc-400 mt-0.5">Creator of NeetCode</p>
                <p className="font-sans text-sm text-zinc-500 mt-0.5">
                  Former Software Engineer @ Google
                </p>
              </div>
            </div>

            {/* Previously at */}
            <div className="mb-10">
              <p className="font-sans text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-4">
                Previously at
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {companies.map((co) => (
                  <span
                    key={co}
                    className="font-sans text-sm text-zinc-500 px-3.5 py-1.5 rounded-lg border border-white/8 bg-white/[0.03]"
                  >
                    {co}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1M+',  label: 'YouTube subscribers' },
                { value: '2020', label: 'Founded NeetCode'    },
                { value: '500+', label: 'Video explanations'  },
                { value: '10+',  label: 'Courses created'     },
              ].map((s) => (
                <div
                  key={s.value}
                  className="p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-violet-500/20 transition-colors"
                >
                  <div className="font-sans text-2xl font-semibold text-white">{s.value}</div>
                  <div className="font-sans text-xs text-zinc-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
