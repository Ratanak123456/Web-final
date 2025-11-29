'use client';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-40 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-6xl md:text-8xl font-black text-gray-900 mb-12">
          The World Needs More<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500">
            People Like You
          </span>
        </h2>
        <p className="text-2xl md:text-3xl text-gray-700 mb-16 max-w-4xl mx-auto">
          Whether you have 1 hour or 100 — your knowledge can change someone’s life.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/join"
            className="px-16 py-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-2xl font-bold rounded-full shadow-2xl"
          >
            Join as a Learner
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/teach"
            className="px-16 py-8 bg-white text-blue-600 border-4 border-blue-600 text-2xl font-bold rounded-full"
          >
            Start Teaching Today
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}