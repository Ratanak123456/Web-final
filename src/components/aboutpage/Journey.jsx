'use client';
import { motion } from 'framer-motion';

const milestones = [
  { year: "2023", title: "The Spark", desc: "3 friends decide: education should be free. First 12 courses launched in a weekend." },
  { year: "2024 Q1", title: "First 1,000 Learners", desc: "Word spreads on Reddit & TikTok. Teachers from 47 countries join voluntarily." },
  { year: "2024 Q3", title: "Live Classes Begin", desc: "Weekly study groups and mentorship sessions go live. Community explodes." },
  { year: "2025", title: "75,000+ Strong", desc: "Now the fastest-growing free education community on Earth." },
  { year: "Future", title: "1 Million Lives Changed", desc: "Our next goal: reach every country, every language, every curious mind." },
];

export default function Journey() {
  return (
    <section className="py-40 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-center mb-20 text-gray-900"
        >
          Our Journey So Far
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 to-teal-400 h-full hidden md:block" />

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
                  className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100"
                >
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                    {m.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">{m.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{m.desc}</p>
                </motion.div>
              </div>

              {/* Dot on timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}