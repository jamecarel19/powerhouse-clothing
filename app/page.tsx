 "use client";

 import { LenisProvider } from "./components/lenis-provider";
 import { Preloader } from "./components/preloader";
 import { Navbar } from "./components/navbar";
 import { Hero } from "./components/hero";
 import { Manifesto } from "./components/manifesto";
 import { Lookbook } from "./components/lookbook";
 import { Waitlist } from "./components/waitlist";
 import { Footer } from "./components/footer";

 export default function Home() {
   return (
     <LenisProvider>
       <div className="min-h-screen bg-black text-white">
         <Preloader />
         <Navbar />
         <main className="relative">
           <Hero />
           <Manifesto />
           <Lookbook />
           <Waitlist />
         </main>
         <Footer />
       </div>
     </LenisProvider>
   );
 }
