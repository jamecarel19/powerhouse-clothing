"use client";

import { motion } from "framer-motion";

export function Waitlist() {
  return (
    <section
      id="visit"
      className="bg-black px-6 py-24 text-white md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs uppercase tracking-[0.5em] text-neutral-500"
        >
          Visit Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-[0.9rem] uppercase tracking-[0.32em] text-neutral-300"
        >
          Open Daily • 9AM - 10PM
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://maps.app.goo.gl/B5rKjtCyZRNT2UDo9?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/20"
            >
              <span className="text-[0.75rem] uppercase tracking-[0.25em] text-white">
                Get Directions
              </span>
            </a>
            <a
              href="https://www.instagram.com/powerhouseclothing__?igsh=d2Y3dDE1bXB1cjE3"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full border border-white/20 bg-neutral-900/40 px-8 py-4 backdrop-blur-md transition-all hover:border-white/40 hover:bg-neutral-800/60"
            >
              <span className="text-[0.75rem] uppercase tracking-[0.25em] text-white group-hover:text-white">
                Follow on Instagram
              </span>
            </a>
          </div>

          <p className="max-w-md text-[0.65rem] leading-relaxed text-neutral-500">
            Check our latest fits, stories, and exclusive store-only drops on our feed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

