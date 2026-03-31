'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Ready to start?
          </h2>
          <p className="text-lg text-zinc-400 mb-12">
            Choose your path to success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/problems"
              className="group px-8 py-4 rounded-xl bg-violet-600 hover:bg-violet-500 transition-all font-semibold text-base text-white hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              Start solving problems
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="/courses"
              className="px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all font-semibold text-base text-white hover:scale-[1.02]"
            >
              Learn with courses
            </a>
          </div>

          <p className="mt-8 text-sm text-zinc-500">
            Free to start. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
