"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Menu } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className="fixed inset-x-0 top-0 z-30 border-b border-white/5 bg-black/50 backdrop-blur-xl"
    >
      <div className="mx-auto flex min-h-[72px] max-w-6xl items-center justify-between px-4 py-3 md:min-h-[88px] md:px-6 md:py-4">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative h-12 w-auto md:h-16">
            <Image
              src="/powerhouse-logo.jpg?v=2"
              alt="POWERHOUSE CLOTHING"
              width={280}
              height={64}
              className="h-12 w-auto object-contain md:h-16"
              priority
              unoptimized
            />
          </div>
          <div className="hidden text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500 md:block md:text-[0.65rem]">
            Clothing Co.
          </div>
        </div>
        <div className="flex items-center gap-4 text-[0.7rem] tracking-[0.3em] text-neutral-300 md:gap-6">
          <button
            onClick={() => document.getElementById('lookbook')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase"
          >
            Lookbook
          </button>
          <button
            onClick={() => document.getElementById('manifesto')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase"
          >
            Manifesto
          </button>
          <button
            onClick={() => document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:inline-flex items-center gap-2 text-xs uppercase"
          >
            Visit Us
          </button>
          <div className="flex items-center gap-2 md:gap-3">
            <a href="https://www.instagram.com/powerhouseclothing__?igsh=d2Y3dDE1bXB1cjE3" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram className="h-4 w-4 md:h-5 md:w-5" />
            </a>
            <Facebook className="h-4 w-4 md:h-5 md:w-5" />
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

