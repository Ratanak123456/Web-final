'use client';
import { motion } from 'framer-motion';

const values = [
  { emoji: "Curiosity", title: "Endless Curiosity", desc: "We celebrate questions more than answers. Wondering is the beginning of wisdom." },
  { emoji: "Generosity", title: "Radical Generosity", desc: "The best teachers give freely — because knowledge multiplies when shared." },
  { emoji: "Inclusivity", title: "Everyone Belongs", desc: "From 8-year-olds in Kenya to 70-year-olds in Japan — this is home for all." },
  { emoji: "Joy", title: "Joyful Learning", desc: "Education isn’t a chore. It’s play. It’s discovery. It’s magic." },
  { emoji: "Integrity", title: "No Compromise", desc: "Never ads. Never paywalls. Never selling your data. Ever." },
  { emoji: "Community", title: "We Over Me", desc: "This isn’t a platform. It’s a family. We grow together." },
];

export default function Values() {
  return (
    <section className="py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-black text-center mb-20 text-gray-900"
        >
          Our Unshakable Values
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              <div className="text-8xl mb-6">{v.emoji}</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{v.title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed px-4">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}