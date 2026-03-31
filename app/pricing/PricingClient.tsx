'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Video Courses',
    badge: '200+ Videos',
    desc: 'Hours of in-depth content on data structures, algorithms, and system design. Every concept visualised with animations and live coding.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
      </svg>
    ),
  },
  {
    title: 'Practice Problems',
    badge: '300+ Problems',
    desc: 'Solve curated problems in-browser with a built-in editor. Instant test feedback, progress tracking, NeetCode 150 and beyond.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
      </svg>
    ),
  },
  {
    title: 'Written Guides',
    badge: 'Detailed Articles',
    desc: 'Comprehensive articles with diagrams, code snippets, and step-by-step breakdowns. Perfect for review or when you prefer reading.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
      </svg>
    ),
  },
  {
    title: 'Code Solutions',
    badge: '8 Languages',
    desc: 'Every problem solved in Python, Java, C++, JavaScript, C#, Go, Swift, and Kotlin. Clean, well-commented implementations to learn from.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"/>
      </svg>
    ),
  },
  {
    title: 'NeetBot Assistant',
    badge: 'NeetBot',
    desc: 'Chat with NeetBot while solving problems. Ask questions, get feedback, and generate visual step-by-step walkthroughs of your approach.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/>
      </svg>
    ),
  },
  {
    title: 'AI Hints & Debug',
    badge: 'AI Powered',
    desc: 'Stuck? Get hints that guide without spoiling. Debug with analysis that explains what went wrong, plus a side-by-side diff with the fix.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/>
      </svg>
    ),
  },
  {
    title: 'Company Tagged Problems',
    badge: '100+ Companies',
    desc: 'Know exactly which companies ask which questions. Filter by target company to focus your prep on the questions that matter most.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Sync',
    badge: 'Cross-Device',
    desc: 'Your code saves automatically to the cloud. Switch devices and pick up exactly where you left off. Never lose progress again.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"/>
      </svg>
    ),
  },
];

const testimonials = [
  {
    company: 'Meta',
    role: 'Machine Learning Engineer',
    quote: 'Passed a FAANG interview loop at Meta for an MLE position. After failing at Google 10 years ago, DeepMind 4 years ago, and Meta a year ago, I was determined to stick the landing this time.',
    initials: 'MV',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    grad: 'from-blue-600 to-indigo-500',
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  {
    company: 'Amazon',
    role: 'SDE II',
    quote: 'All the medium/hard exercises from the interviews were in the company tagged list, so it definitely helped a lot.',
    initials: 'TR',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    grad: 'from-orange-600 to-amber-500',
    badge: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  },
  {
    company: 'Google',
    role: 'Machine Learning Engineer',
    quote: "Cracked my final round at Google today! I used to be so scared of DSA. But now I'm more confident in my DSA skills than in my ML skills!",
    initials: 'PK',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    grad: 'from-green-600 to-emerald-500',
    badge: 'text-green-400 bg-green-500/10 border-green-500/20',
  },
  {
    company: 'Amazon & Meta',
    role: 'Software Engineer',
    quote: 'With ~1 month of NeetCode prep I was able to land two offers at Amazon and Meta! Worth every penny. Definitely recommending to my friends.',
    initials: 'AS',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    grad: 'from-violet-600 to-purple-500',
    badge: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
  },
  {
    company: 'PayPal',
    role: 'Senior Software Engineer',
    quote: 'Laid off on June 20th. Started the roadmap the very next day. Studied for 15 days straight. Received my offer on July 18th!',
    initials: 'DM',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face',
    grad: 'from-sky-600 to-cyan-500',
    badge: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
  },
  {
    company: 'Amazon',
    role: 'SDE-1',
    quote: 'I got a matrix BFS question that I had just gone over from the NeetCode course. I felt like LeBron dunking.',
    initials: 'JC',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
    grad: 'from-orange-500 to-yellow-500',
    badge: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function PricingClient() {
  return (
    <main className="flex-1 pt-28 pb-20">

      {/* ── Header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="max-w-2xl mx-auto px-6 text-center mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-1.5 h-px bg-violet-500" />
          <span className="font-sans text-[10px] text-violet-400 tracking-[0.25em] uppercase">
            PLANS
          </span>
          <div className="w-1.5 h-px bg-violet-500" />
        </div>
        <h1 className="font-serif text-5xl md:text-6xl font-normal text-white leading-tight mb-4">
          Choose your plan
        </h1>
        <p className="font-sans text-sm text-zinc-500">
          One payment. Everything included. No hidden fees.
        </p>
      </motion.div>

      {/* ── Pricing cards ── */}
      <div className="max-w-3xl mx-auto px-6 grid md:grid-cols-2 gap-5 mb-20">

        {/* One-Year */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="relative p-7 rounded-2xl bg-zinc-900/50 border border-white/5 flex flex-col"
        >
          <p className="font-sans text-xs text-zinc-500 uppercase tracking-widest mb-5">One-Year Access</p>
          <div className="flex items-end gap-2 mb-1">
            <span className="font-sans text-5xl font-semibold text-white leading-none">$119</span>
            <span className="font-sans text-sm text-zinc-500 mb-1 line-through">$199</span>
          </div>
          <p className="font-sans text-xs text-zinc-500 mb-6">Auto-renew off by default</p>

          <ul className="space-y-2.5 mb-8 flex-1">
            {['Full access for 12 months', 'Includes future content', 'Private Discord community'].map(f => (
              <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-zinc-300">
                <svg className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="/checkout?plan=annual"
            className="font-sans w-full py-3.5 rounded-xl border border-white/20 text-center text-sm font-medium text-white hover:bg-white/5 hover:border-white/35 transition-all duration-100"
          >
            Get Annual Access
          </a>
        </motion.div>

        {/* Lifetime — featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="relative p-7 rounded-2xl border border-violet-500/40 bg-violet-600/5 flex flex-col shadow-[0_0_40px_rgba(124,58,237,0.12)]"
        >
          {/* Best value badge */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans text-[10px] font-semibold text-white bg-violet-600 px-3 py-1 rounded-full uppercase tracking-wider">
            BEST VALUE
          </span>

          <p className="font-sans text-xs text-violet-400 uppercase tracking-widest mb-5">LIFETIME ACCESS</p>
          <div className="flex items-end gap-2 mb-1">
            <span className="font-sans text-5xl font-semibold text-white leading-none">$297</span>
            <span className="font-sans text-sm text-zinc-500 mb-1 line-through">$599</span>
          </div>
          <p className="font-sans text-xs text-zinc-500 mb-6">One-time payment · Never pay again</p>

          <ul className="space-y-2.5 mb-8 flex-1">
            {['Everything, forever', 'All future content included', 'Private Discord community'].map(f => (
              <li key={f} className="flex items-start gap-2.5 font-sans text-sm text-zinc-200">
                <svg className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="/checkout?plan=lifetime"
            className="font-sans w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-center text-sm font-medium text-white transition-colors duration-100"
          >
            Get Lifetime Access
          </a>
        </motion.div>
      </div>

      {/* ── Features grid ── */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-violet-500" />
            <span className="font-sans text-[10px] text-violet-400 tracking-[0.25em] uppercase">
              WHAT'S INCLUDED
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight">
            Everything you need
            <br />
            <span className="text-white/40">to succeed.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.07] hover:border-violet-500/20 transition-colors duration-100 group"
            >
              <div className="w-9 h-9 rounded-lg bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:bg-violet-600/25 transition-colors duration-100">
                {f.icon}
              </div>
              <h3 className="font-sans text-sm font-semibold text-white mb-1">{f.title}</h3>
              <span className="font-sans text-[10px] text-violet-400/80 bg-violet-500/8 border border-violet-500/15 px-2 py-0.5 rounded-full mb-3 inline-block">
                {f.badge}
              </span>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="max-w-5xl mx-auto px-6 border-t border-white/10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-px bg-violet-500" />
            <span className="font-sans text-[10px] text-violet-400 tracking-[0.25em] uppercase">Success Stories</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal text-white leading-tight">
            People who made it.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={`${t.company}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-white/[0.07] hover:border-white/15 transition-colors duration-100 flex flex-col gap-4"
            >
              <p className="font-sans text-[13px] text-white/65 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.role}
                  className="w-9 h-9 rounded-full object-cover shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-sans text-xs text-white/40">{t.role}</p>
                </div>
                <span className={`font-sans text-[10px] font-medium ${t.badge} border px-2 py-0.5 rounded-full shrink-0`}>
                  {t.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reassurance */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="font-sans text-sm text-zinc-500">
            Questions? Email us at{' '}
            <a href="mailto:support@neetcode.io" className="text-zinc-300 hover:text-white transition-colors">
              support@neetcode.io
            </a>
          </p>
        </motion.div>
      </section>

    </main>
  );
}
