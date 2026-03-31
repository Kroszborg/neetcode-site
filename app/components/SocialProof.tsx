'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'I signed my offer with Google as a software engineer (L4) and you have a fair share of contribution in it.',
    name: 'Amog Chandrashekar',
    company: 'Google',
    role: 'SWE L4',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    companyColor: 'text-blue-400',
    companyBg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    quote: 'I recently got an offer for Microsoft, and I will be starting next year! Thank you so much for your videos!',
    name: 'Rodrigo Ramirez',
    company: 'Microsoft',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    companyColor: 'text-sky-400',
    companyBg: 'bg-sky-500/10 border-sky-500/20',
  },
  {
    quote: 'Got an offer from Amazon today. Thanks a lot for your videos. It really helped me during the preparation.',
    name: 'Aiswarya Sukumar',
    company: 'Amazon',
    role: 'Software Engineer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    companyColor: 'text-orange-400',
    companyBg: 'bg-orange-500/10 border-orange-500/20',
  },
];

const companies = ['Google', 'Meta', 'Amazon', 'Microsoft', 'Netflix', 'OpenAI', 'Anthropic'];

export default function SocialProof() {
  return (
    <section className="py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-px bg-violet-500" />
            <span className="font-sans text-[10px] text-violet-400 tracking-[0.25em] uppercase">
              SUCCESS STORIES
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight">
            1M+ engineers prepared.
            <br />
            <span className="text-white/50">Getting hired daily.</span>
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.07] hover:border-white/15 transition-colors flex flex-col gap-5"
            >
              {/* Quote */}
              <p className="font-sans text-[14px] text-white/80 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="font-sans text-sm font-medium text-white truncate">{t.name}</p>
                  <p className="font-sans text-xs text-zinc-500 mt-0.5">{t.role}</p>
                </div>
                {/* Company badge */}
                <span className={`ml-auto font-sans text-[10px] font-medium ${t.companyColor} ${t.companyBg} border px-2 py-0.5 rounded-full shrink-0`}>
                  {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company logos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-sans text-[10px] text-white/25 uppercase tracking-[0.25em] text-center mb-6">
            Engineers hired at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {companies.map((co, i) => (
              <motion.span
                key={co}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="font-sans text-base font-semibold text-white/25 hover:text-white/50 transition-colors cursor-default tracking-tight"
              >
                {co}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
