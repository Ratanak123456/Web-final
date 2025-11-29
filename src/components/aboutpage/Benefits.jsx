'use client';
import { motion } from 'framer-motion';

const benefits = [
  { title: "Learn Anything, Anywhere", desc: "From quantum physics to watercolor painting — all courses are 100% free forever." },
  { title: "Teach What You Love", desc: "No credentials required. If you’re passionate and knowledgeable, you can teach." },
  { title: "Real Human Connection", desc: "Live sessions, study groups, mentorship — not just videos." },
  { title: "Certificates That Matter", desc: "Earn shareable certificates recognized by top universities and companies." },
  { title: "Zero Ads, Zero Tracking", desc: "We’re funded by donations only. Your privacy is sacred." },
  { title: "Lifetime Access", desc: "Once you join, you’re family. Access everything forever — no subscriptions." },
];

export default function Benefits() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-black text-center mb-20 text-gray-900"
        >
          Why People Love Being Here
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="text-5xl mb-6">{["Lightbulb", "Chalkboard Teacher", "Globe", "Graduation Cap", "Lock", "Infinity"][i]}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{b.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}