"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(event.clientX / innerWidth);
      mouseY.set(event.clientY / innerHeight);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center bg-black px-6 pt-28 text-white"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 md:flex-row md:items-end">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ rotateX, rotateY }}
          className="relative flex-1"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-10 w-auto">
              <Image
                src="/powerhouse-logo.jpg?v=2"
                alt="POWERHOUSE CLOTHING"
                width={180}
                height={40}
                className="h-10 w-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="text-[0.62rem] uppercase tracking-[0.32em] text-neutral-400">
              Shop Open Daily 9AM - 10PM
            </div>
          </div>

          <div className="pointer-events-none select-none text-[clamp(3.5rem,10vw,6.8rem)] font-bold leading-[0.85] tracking-[0.42em] text-white/95">
            <div className="block text-[0.65rem] tracking-[0.35em] text-neutral-400">
              POWERHOUSE CLOTHING
            </div>
            <div className="mt-6 space-y-3">
              <span className="block text-neutral-500">DROP</span>
              <span className="block">THE</span>
              <span className="block text-white">VIBE</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -right-6 bottom-6 hidden h-44 w-40 border border-white/10 bg-neutral-900/60 p-5 md:block"
          >
            <div className="text-[0.55rem] uppercase tracking-[0.3em] text-neutral-400">
              New Collection
            </div>
            <div className="mt-4 text-xs leading-relaxed text-neutral-300/90">
              Baggy fits, oversized vibes, and fresh accessories.
              For the youth who live loud and dress bolder.
            </div>
            <div className="mt-6 h-px w-full bg-gradient-to-r from-white/20 via-white/60 to-white/0" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-1 flex-col items-start gap-6 md:items-end"
        >
          <p className="max-w-sm text-[0.8rem] uppercase tracking-[0.28em] text-neutral-300">
            FUNKY BAGGY FITS. TRENDY JEANS & TEES. FRESH ACCESSORIES. WATCHES & PERFUMES.
            FOR THE YOUTH WHO SET THE TREND.
          </p>
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-neutral-600" />
            <span className="text-[0.7rem] tracking-[0.35em] text-neutral-400">
              AVAILABLE NOW
            </span>
          </div>
          <a
            href="https://maps.app.goo.gl/B5rKjtCyZRNT2UDo9?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-full border-2 border-white/30 bg-white/10 px-10 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/15 hover:scale-105"
          >
            Visit Shop
          </a>
        </motion.div>
      </div>
    </section>
  );
}

