 "use client";

 import { motion, AnimatePresence } from "framer-motion";
 import { useEffect, useState } from "react";

 export function Preloader() {
   const [isLoaded, setIsLoaded] = useState(false);

   useEffect(() => {
     const timer = setTimeout(() => setIsLoaded(true), 1600);
     return () => clearTimeout(timer);
   }, []);

   return (
     <AnimatePresence>
       {!isLoaded && (
         <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
           className="fixed inset-0 z-40 flex items-center justify-center bg-black"
         >
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
             className="flex flex-col items-center gap-4"
           >
             <span className="text-xs tracking-[0.4em] text-neutral-500">
               POWERHOUSE CLOTHING
             </span>
             <span className="text-3xl font-semibold tracking-[0.35em] text-white">
               LOADING
             </span>
             <motion.div
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{
                 duration: 1.2,
                 ease: [0.33, 1, 0.68, 1],
               }}
               className="mt-4 h-px w-40 origin-left bg-neutral-700"
             />
           </motion.div>
         </motion.div>
       )}
     </AnimatePresence>
   );
 }

