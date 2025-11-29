'use client';
import { motion } from 'framer-motion';

const milestones = [
  { year: "2023", title: "The First Post", desc: "3 writers decide: stories should connect people. First 12 articles published in a weekend." },
  { year: "2024 Q1", title: "First 1,000 Readers", desc: "Word spreads through authentic sharing. Writers from 47 countries join voluntarily." },
  { year: "2024 Q3", title: "Writing Circles Begin", desc: "Weekly writing groups and feedback sessions launch. Community engagement explodes." },
  { year: "2025", title: "75,000+ Strong", desc: "Now the fastest-growing authentic writing community on the web." },
  { year: "Future", title: "1 Million Stories Shared", desc: "Our next goal: amplify every voice, every perspective, every untold story." },
];

export default function Journey() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-center mb-20 text-[var(--text-primary)]"
        >
          Our Story So Far
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[var(--accent)] to-[var(--accent)]/70 h-full hidden md:block" />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: i * 0.3 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-center mb-20 md:mb-32 ${
                i % 2 === 0 ? "md:justify-end" : "md:justify-start"
              }`}
            >
              <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-[var(--bg-secondary)] p-8 rounded-3xl shadow-2xl border border-[var(--border)]"
                >
                  <div className="text-3xl font-black text-[var(--accent)]">
                    {m.year}
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] mt-2 mb-4">{m.title}</h3>
                  <p className="text-lg text-[var(--text-secondary)] leading-relaxed">{m.desc}</p>
                </motion.div>
              </div>

              {/* Dot on timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[var(--bg-primary)] border-4 border-[var(--accent)] rounded-full shadow-lg z-10 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}