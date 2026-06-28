'use client';

import { motion } from 'motion/react';
import { ArrowRight, MapPin, Clock, Phone, Star, GlassWater, Sparkles, Cherry, Heart, Flame } from 'lucide-react';
import Image from 'next/image';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-20"
    >
      {/* Wave Dividers SVG definitions */}
      <svg className="hidden">
        <defs>
          <path id="wave" d="M0,50 C150,150 350,-50 500,50 L500,00 L0,0 Z" />
        </defs>
      </svg>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-12 md:pt-8 md:pb-16 px-4 sm:px-6 lg:px-8 bg-transparent min-h-screen flex items-center">
        {/* Floating Bubble Background Elements - Removed as requested */}


        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start items-center relative z-10">
          <div className="space-y-6 z-20 flex flex-col items-center">
            <div className="relative flex items-center justify-center gap-2 md:gap-4">
              {/* Fun floating star sticker */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-vintage-red drop-shadow-md hidden sm:block"
              >
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 fill-vintage-red" />
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-5 py-2 md:px-8 md:py-3 rounded-full bg-vintage-red text-white font-black uppercase tracking-wider text-sm md:text-lg shadow-xl border-4 border-charcoal transform -rotate-2"
              >
                <a href="https://www.campuscafe.ca/dirty-soda/" target="_blank" rel="noopener noreferrer" className="hover:underline">NJ&apos;s First Dirty Soda Shop</a>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="text-vintage-red drop-shadow-md hidden sm:block"
              >
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 fill-vintage-red" />
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring", bounce: 0.4 }}
              className="relative px-2"
            >

              <h1 className="text-center text-5xl md:text-7xl lg:text-8xl font-display font-black text-charcoal leading-[0.9] md:leading-[0.95] tracking-tight uppercase">
                The New Home of <a href="https://www.campuscafe.ca/dirty-soda/" target="_blank" rel="noopener noreferrer" className="text-vintage-red thicker-outline hover:underline">Dirty Soda.</a>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center mx-auto text-base md:text-xl text-charcoal/80 max-w-lg font-medium leading-relaxed bg-card/60 p-4 md:p-5 rounded-3xl backdrop-blur-sm border-2 border-white/80 mx-2"
            >
              Classic soda fountain nostalgia meets handcrafted <a href="https://www.campuscafe.ca/dirty-soda/" target="_blank" rel="noopener noreferrer" className="underline hover:text-vintage-red">dirty sodas</a>, premium ingredients, and flavors you won&apos;t find anywhere else.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <button 
                onClick={() => onNavigate('menu')}
                className="px-8 py-4 bg-charcoal text-white rounded-full font-extrabold text-lg hover:bg-vintage-red transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2 active:scale-95 flex items-center gap-3 border-4 border-charcoal hover:border-vintage-red uppercase tracking-wider group"
              >
                Explore Drinks <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <a 
                href="https://maps.app.goo.gl/JyftyuQwtcdgcWSv6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-card text-charcoal rounded-full font-extrabold text-lg hover:bg-yellow-400 hover:text-charcoal transition-all shadow-xl hover:shadow-2xl hover:-translate-y-2 active:scale-95 flex items-center gap-3 border-4 border-charcoal uppercase tracking-wider group"
              >
                Find Us <MapPin className="w-6 h-6 group-hover:animate-bounce" />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring', bounce: 0.5 }}
            className="relative z-10 md:pt-24"
          >
            {/* Oversized Hero Image container */}
            <div className="relative aspect-[4/3] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-vintage-red rounded-full blur-3xl opacity-30 animate-pulse" />
              
              {/* Fun floating stickers around the drink */}
              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 -left-10 z-20 bg-warm-cream rounded-full p-4 border-4 border-charcoal shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] transform -rotate-12"
              >
                <span className="font-display font-black text-vintage-red text-xl whitespace-nowrap">YUM!</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 -right-8 z-20 bg-mint-green rounded-full p-3 border-4 border-charcoal shadow-[6px_6px_0px_0px_rgba(34,34,34,1)] transform rotate-12"
              >
                <Cherry className="w-10 h-10 text-charcoal" />
              </motion.div>
              
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-[12px_12px_0px_0px_rgba(34,34,34,1)] border-8 border-charcoal bg-warm-cream z-10">
                <Image 
                  src="https://laedbhyfxdkxsztxsjkd.supabase.co/storage/v1/object/public/Website%20Images/Drink%20Spot/Beverages.jpg" 
                  alt="Refreshing Dirty Soda" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retro Soda Fountain Vibes */}
      <section className="py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-transparent relative overflow-hidden">
        {/* Decorative background shapes removed */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
           <div className="order-2 lg:order-1 relative">
              <div className="relative aspect-[4/3] w-full max-w-lg mx-auto">
                 <motion.div 
                    animate={{ y: [0, -10, 0], rotate: [-12, -18, -12] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-10 -left-4 z-30 bg-vintage-red text-white font-black p-4 rounded-full border-4 border-charcoal shadow-[-6px_6px_0px_0px_rgba(34,34,34,1)]"
                 >
                    So refreshing!
                 </motion.div>
                 <div className="absolute inset-0 bg-card rounded-[3rem] shadow-[16px_16px_0px_0px_rgba(34,34,34,1)] border-8 border-charcoal overflow-hidden">
                    <Image src="https://laedbhyfxdkxsztxsjkd.supabase.co/storage/v1/object/public/Website%20Images/Drink%20Spot/Beverage%203.png" alt="Soda Shop Fun" fill className="object-cover" referrerPolicy="no-referrer" />
                 </div>
                 
                 {/* Retro badges */}
                 {/* Est. 2024 removed */}
                 <motion.div 
                    animate={{ y: [0, 10, 0], rotate: [12, 18, 12] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute -top-8 -right-8 z-30 bg-mint-green text-charcoal font-black p-6 rounded-full border-4 border-charcoal shadow-[6px_6px_0px_0px_rgba(34,34,34,1)]"
                 >
                    <span className="text-3xl">🏖️🚗</span>
                 </motion.div>
              </div>
           </div>
           
           <div className="order-1 lg:order-2 space-y-5">
             <motion.h2 
                animate={{ rotate: [0, -1, 1, 0], scale: [1, 1.01, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="text-4xl md:text-7xl font-display font-black text-charcoal uppercase leading-[0.9] md:leading-[0.95] tracking-tight"
             >
               Every<br/>
               <span onClick={() => onNavigate('menu')} className="text-vintage-red sticker-border inline-block hover:scale-105 transition-transform cursor-pointer">Sip&apos;s</span><br/>
               A Trip
             </motion.h2>
             <p className="text-base md:text-lg text-charcoal/80 font-medium leading-relaxed bg-card/60 p-4 md:p-6 rounded-3xl border-2 border-white/80">
               Handcrafted <a href="https://www.campuscafe.ca/dirty-soda/" target="_blank" rel="noopener noreferrer" className="underline hover:text-vintage-red">dirty sodas</a> and refreshing creations made to brighten your day at the Jersey Shore.
             </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-card p-6 md:p-8 rounded-3xl shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] border-4 border-charcoal transform hover:-translate-y-2 transition-transform">
                  <h4 className="font-display font-black text-charcoal text-xl md:text-2xl mb-2 md:mb-3 uppercase tracking-wide">Discover Your Next Favorite</h4>
                  <p className="text-charcoal/80 text-sm md:text-base font-semibold leading-relaxed">One sip is all it takes.</p>
                </div>
                <div className="bg-card p-6 md:p-8 rounded-3xl shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] border-4 border-charcoal transform hover:-translate-y-2 transition-transform">
                  <h4 className="font-display font-black text-charcoal text-xl md:text-2xl mb-2 md:mb-3 uppercase tracking-wide">Crafted Your Way</h4>
                  <p className="text-charcoal/80 text-sm md:text-base font-semibold leading-relaxed">Freshly made, uniquely yours.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Storefront Section */}
      <section className="py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-transparent relative flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="bg-card p-2 rounded-[1rem] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] border-4 border-charcoal">
            <a href="https://maps.app.goo.gl/JyftyuQwtcdgcWSv6" target="_blank" rel="noopener noreferrer" className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full rounded-lg overflow-hidden group block cursor-pointer">
              <Image 
                src="https://laedbhyfxdkxsztxsjkd.supabase.co/storage/v1/object/public/Website%20Images/Drink%20Spot/Storefront.png?v=2"
                alt="Drink Spot Storefront"
                fill
                className="object-cover object-center scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-charcoal/5 mix-blend-multiply pointer-events-none" />
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
