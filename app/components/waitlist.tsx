 "use client";

 import { motion } from "framer-motion";

 export function Waitlist() {
   return (
     <section
       id="waitlist"
       className="bg-black px-6 py-24 text-white md:py-28"
     >
       <div className="mx-auto max-w-3xl">
         <motion.h2
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.6 }}
           transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
           className="text-xs uppercase tracking-[0.5em] text-neutral-500"
         >
           Waitlist
         </motion.h2>
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.6 }}
           transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-[0.9rem] uppercase tracking-[0.32em] text-neutral-300"
        >
          Get early access to the drop. First dibs on fresh fits.
        </motion.p>

         <motion.form
           initial={{ opacity: 0, y: 24 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.4 }}
           transition={{ duration: 1, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
           className="mt-8 flex flex-col gap-3 border border-white/10 bg-neutral-900/60 p-4 backdrop-blur-xl sm:flex-row sm:items-center"
           onSubmit={(e) => e.preventDefault()}
         >
           <input
             type="email"
             required
             placeholder="Your email for early access"
             className="flex-1 bg-transparent text-xs uppercase tracking-[0.28em] text-neutral-200 placeholder:text-neutral-500 focus:outline-none"
           />
           <button
             type="submit"
             className="mt-2 whitespace-nowrap rounded-full border border-white/30 bg-white text-[0.7rem] uppercase tracking-[0.3em] text-black transition hover:bg-neutral-200 sm:mt-0 sm:px-6 sm:py-3"
           >
             Join waitlist
           </button>
         </motion.form>

        <p className="mt-3 text-[0.65rem] leading-relaxed text-neutral-500">
          No spam, just the good stuff. Drop alerts, exclusive previews, and early access codes.
        </p>
       </div>
     </section>
   );
 }

