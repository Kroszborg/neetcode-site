'use client';

const courseCategories = [
  {
    title: 'Data Structures & Algorithms',
    description: 'Master the fundamentals',
    courses: [
      { name: 'DSA Fundamentals', level: 'Beginner', lessons: 48, featured: true },
      { name: 'Graph Algorithms', level: 'Advanced', lessons: 32, featured: false },
    ],
  },
  {
    title: 'System Design',
    description: 'Scale your knowledge',
    courses: [
      { name: 'System Design Basics', level: 'Intermediate', lessons: 24, featured: true },
      { name: 'Advanced System Design', level: 'Advanced', lessons: 40, featured: false },
    ],
  },
  {
    title: 'Python',
    description: 'Code efficiently',
    courses: [
      { name: 'Python for DSA', level: 'Beginner', lessons: 20, featured: true },
    ],
  },
  {
    title: 'Full Stack',
    description: 'Build complete applications',
    courses: [
      { name: 'Full Stack Development', level: 'Intermediate', lessons: 64, featured: true },
    ],
  },
];

export default function CoursesView() {
  return (
    <motion.div
      id="courses"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {courseCategories.map((category, ci) => (
          <div
            key={category.title}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-violet-500/30 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-1">{category.title}</h3>
            <p className="text-sm text-zinc-500 mb-4">{category.description}</p>

            <div className="space-y-3">
              {category.courses.map((course, i) => (
                <div
                  key={course.name}
                  className={`group p-4 rounded-xl bg-black/50 border transition-all cursor-pointer hover:scale-[1.02] ${
                    course.featured
                      ? 'border-violet-500/30 bg-violet-900/10'
                      : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-zinc-200 group-hover:text-violet-400 transition-colors">
                        {course.name}
                      </h4>
                      <div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
                        <span>{course.level}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>
                    {course.featured && (
                      <span className="px-2 py-1 rounded-md bg-violet-600/20 text-violet-400 text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <a
          href="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all font-medium text-sm text-zinc-200 hover:scale-[1.02]"
        >
          View All Courses
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
