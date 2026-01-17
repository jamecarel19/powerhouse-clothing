"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <div className="text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">
            POWERHOUSE CLOTHING
          </div>
          <div className="mt-1 text-[0.6rem] uppercase tracking-[0.32em] text-neutral-400">
            Open Daily: 9AM - 10PM
          </div>
          <div className="text-[0.6rem] uppercase tracking-[0.32em] text-neutral-500">
            © {new Date().getFullYear()} All Rights Reserved.
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 text-[0.7rem] uppercase tracking-[0.3em] text-neutral-400"
        >
          <a href="https://www.instagram.com/powerhouseclothing__?igsh=d2Y3dDE1bXB1cjE3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-neutral-100">
            <Instagram className="h-4 w-4" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <button className="flex items-center gap-2 hover:text-neutral-100">
            <Facebook className="h-4 w-4" />
            <span className="hidden sm:inline">Facebook</span>
          </button>
          <button className="flex items-center gap-2 hover:text-neutral-100">
            <Youtube className="h-4 w-4" />
            <span className="hidden sm:inline">YouTube</span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
}

