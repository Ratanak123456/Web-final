'use client';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-40 px-6 bg-[var(--bg-primary)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-6xl md:text-8xl font-black text-[var(--text-primary)] mb-12">
          The World Needs More<br />
          <span className="text-[var(--accent)]">
            Stories Like Yours
          </span>
        </h2>
        <p className="text-2xl md:text-3xl text-[var(--text-secondary)] mb-16 max-w-4xl mx-auto">
          Whether you write daily or just have one story to share — your words can touch someone's heart.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/read"
            className="px-16 py-8 bg-[var(--accent)] text-white text-2xl font-bold rounded-full shadow-2xl hover:bg-[var(--accent-hover)] transition-colors"
          >
            Start Reading
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/write"
            className="px-16 py-8 bg-[var(--bg-primary)] text-[var(--accent)] border-4 border-[var(--accent)] text-2xl font-bold rounded-full hover:bg-[var(--bg-secondary)] transition-colors"
          >
            Start Writing Today
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}