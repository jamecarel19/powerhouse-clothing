"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Static imports for automatic sizing and blur placeholders
import image1 from "@/app/images/image-1.png";
import image2 from "@/app/images/image-2.jpg";
import image3 from "@/app/images/image-3.jpg";
import image4 from "@/app/images/image-4.png";
import image5 from "@/app/images/image5.png";
import image6 from "@/app/images/image-6.png";

const imageItems = [
  {
    id: 1,
    span: "md:row-span-2",
    category: "Baggy Jeans",
    image: image1,
  },
  {
    id: 2,
    span: "",
    category: "Oversized Tees",
    image: image2,
  },
  {
    id: 3,
    span: "",
    category: "Trendy Shirts",
    image: image3,
  },
  {
    id: 4,
    span: "md:row-span-2",
    category: "Accessories",
    image: image4,
  },
  {
    id: 5,
    span: "",
    category: "Watches",
    image: image5,
  },
  {
    id: 6,
    span: "",
    category: "Perfumes",
    image: image6,
  },
];

function LookbookItem({ item, index }: { item: typeof imageItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.9,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden border border-white/10 bg-neutral-900/40 ${item.span}`}
    >
      {/* Image with intrinsic sizing */}
      <motion.div
        className="relative w-full overflow-hidden"
      >
        <Image
          src={item.image}
          alt={item.category}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 2}
          className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Color overlay that responds to scroll */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none"
        />
      </motion.div>

      {/* Hover zoom effect overlay */}
      <motion.div
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 pointer-events-none origin-center bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_60%)] mix-blend-overlay opacity-0 transition-opacity duration-700 group-hover:opacity-100"
      />

      {/* Animated border glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 pointer-events-none border-2 border-white/20 transition-opacity duration-500"
      />

      {/* Category label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4"
      >
        <div className="flex items-center justify-between">
          <motion.span
            initial={{ x: -10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white drop-shadow-lg"
          >
            {item.category}
          </motion.span>
          <motion.span
            initial={{ x: 10, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-[0.55rem] uppercase tracking-[0.3em] text-white/80"
          >
            View
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Lookbook() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Overall section parallax
  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      id="lookbook"
      className="relative bg-black px-6 py-24 text-white md:py-32"
    >
      <motion.div style={{ y: sectionY }} className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs uppercase tracking-[0.5em] text-neutral-500"
            >
              Lookbook
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-[0.8rem] uppercase tracking-[0.32em] text-neutral-300"
            >
              Jeans • Shirts • Tees • Accessories • Watches • Perfumes
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hidden text-[0.7rem] tracking-[0.3em] text-neutral-500 md:block"
          >
            Scroll to experience the motion.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[180px]">
          {imageItems.map((item, index) => (
            <LookbookItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
