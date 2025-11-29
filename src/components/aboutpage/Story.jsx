'use client';
import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 text-xl md:text-2xl leading-relaxed text-gray-700"
        >
          <p>
            It started with a simple idea: <strong className="text-blue-600">what if the best education in the world was completely free?</strong>
          </p>
          <p>
            In 2023, a small group of teachers and lifelong learners got tired of paywalls, expensive courses, and gate-kept knowledge. 
            They asked: “Why can’t we just help each other — for free?”
          </p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-12">
            Two years later, we’re now home to over 75,000 learners and 5,200 volunteer educators from 189 countries.
          </p>
        </motion.div>
      </div>
    </section>
  );
}