 "use client";

 import { motion } from "framer-motion";

const text =
  "POWERHOUSE CLOTHING is where funky meets fresh. We're all about baggy jeans that move with you, oversized tees that make a statement, and accessories that complete the vibe. From watches that catch the light to perfumes that turn heads, we're building a brand for the youth who live boldly, dress loudly, and never follow — they set the trend.";

 const words = text.split(" ");

 export function Manifesto() {
   return (
     <section
       id="manifesto"
       className="bg-black px-6 py-28 text-white md:py-36"
     >
       <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row">
         <div className="flex-1">
           <motion.h2
             initial={{ opacity: 0, y: 24 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
             className="text-xs uppercase tracking-[0.5em] text-neutral-500"
           >
             Manifesto
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 24 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-2xl font-bold uppercase tracking-[0.25em] text-white"
          >
            Funky. Fresh. For the youth.
          </motion.p>
         </div>
         <div className="flex-1 text-sm leading-relaxed text-neutral-300">
           <motion.p
             className="max-w-xl text-[0.9rem] leading-relaxed text-neutral-300/90"
           >
             {words.map((word, index) => (
               <motion.span
                 key={`${word}-${index}`}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.8 }}
                 transition={{
                   duration: 0.6,
                   delay: index * 0.02,
                   ease: [0.33, 1, 0.68, 1],
                 }}
                 className="inline-block"
               >
                 {word}&nbsp;
               </motion.span>
             ))}
           </motion.p>
         </div>
       </div>
     </section>
   );
 }

