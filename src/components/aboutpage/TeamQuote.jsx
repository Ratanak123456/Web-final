'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const quotes = [
  { text: "I taught my first class with 3 students. Last week? 847 people from 41 countries. This community changed my life.", author: "Maria, Physics Teacher from Brazil" },
  { text: "I learned English here for free. Now I’m studying medicine. This place gave me a future I never thought possible.", author: "Ahmed, Medical Student from Syria" },
  { text: "I’m 72 and just published my first online course on gardening. Age is just a number here. Thank you for believing in me.", author: "Margaret, Retired Gardener from UK" },
  { text: "I was lonely after moving countries. This community became my family. I now teach coding every Saturday — for free.", author: "Raj, Software Engineer from India" },
];

export default function TeamQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-40 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-black mb-20 text-gray-900"
        >
          Real Stories From Real People
        </motion.h2>

        <div className="relative h-80 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-8"
            >
              <p className="text-3xl md:text-4xl font-light text-gray-800 italic leading-relaxed mb-10">
                "{quotes[index].text}"
              </p>
              <p className="text-2xl font-bold text-blue-600">— {quotes[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${i === index ? "bg-blue-600 w-10" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}