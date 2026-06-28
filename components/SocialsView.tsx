'use client';

import { motion } from 'motion/react';
import { Instagram, Facebook, Link2, Sparkles, Heart } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    id: 'instagram',
    url: 'https://instagram.com/drinkspotnj',
    icon: Instagram,
    color: 'bg-rose-100',
    borderColor: 'border-charcoal',
    shadowColor: 'rgba(215,52,44,1)', // Vintage Red
    logoBg: 'bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600',
    logoColor: 'text-white',
  },
  {
    id: 'facebook',
    url: 'https://facebook.com/drinkspotnj',
    icon: Facebook,
    color: 'bg-blue-100',
    borderColor: 'border-charcoal',
    shadowColor: 'rgba(37,99,235,1)', // Blue Razz
    logoBg: 'bg-[#1877f2]',
    logoColor: 'text-white',
  },
  {
    id: 'linktree',
    url: 'https://linktr.ee/drinkspotnj',
    icon: Link2,
    color: 'bg-emerald-100',
    borderColor: 'border-charcoal',
    shadowColor: 'rgba(146,203,184,1)', // Mint Green
    logoBg: 'bg-[#25C84F]',
    logoColor: 'text-white',
  }
];

export default function SocialsView() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring' as const, bounce: 0.2, duration: 0.6 } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-4 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-[70vh] relative"
    >
      {/* Page Header */}
      <div className="text-center mb-8 md:mb-12 relative px-2">
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [-8, 8, -8] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 lg:left-4 -top-4 lg:-top-6"
        >
          <Sparkles className="w-8 h-8 lg:w-14 lg:h-14 text-vintage-red fill-vintage-red/15" />
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl md:text-6xl font-display font-black text-charcoal mb-4 uppercase tracking-tight sticker-shadow"
        >
          Socials
        </motion.h1>
        
        <motion.p 
          variants={itemVariants} 
          className="text-base md:text-xl font-bold text-charcoal max-w-xl mx-auto bg-warm-cream inline-block px-5 py-2 md:px-6 md:py-2 rounded-[2rem] border-4 border-charcoal transform -rotate-1 shadow-sm"
        >
          Don&apos;t Miss a Sip
          <span className="block text-xs md:text-base font-medium mt-1 text-charcoal/80 leading-relaxed px-1">
            Stay updated on new creations, limited-time flavors, and what&apos;s pouring next!
          </span>
        </motion.p>
      </div>

      {/* Social Links Cards */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6">
        {SOCIAL_LINKS.map((social) => (
          <motion.a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className={`group flex items-center justify-center relative rounded-[1.5rem] lg:rounded-[2.5rem] ${social.color} border-4 ${social.borderColor} p-3 lg:p-6 cursor-pointer min-h-[100px] lg:min-h-[200px]`}
            style={{
              boxShadow: `4px 4px 0px 0px ${social.shadowColor}`,
            }}
            whileHover={{
              boxShadow: `8px 8px 0px 0px ${social.shadowColor}`,
            }}
          >
            {/* Large Centered Logo */}
            <div className={`w-12 h-12 lg:w-24 lg:h-24 ${social.logoBg} ${social.logoColor} border-2 lg:border-4 border-charcoal rounded-xl lg:rounded-3xl flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]`}>
              <social.icon className="w-6 h-6 lg:w-12 lg:h-12 stroke-[2.5]" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* Decorative Interactive Block */}
      <motion.div 
        variants={itemVariants}
        className="bg-card rounded-[2rem] md:rounded-[2.5rem] border-4 border-charcoal p-6 md:p-10 text-center max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(34,34,34,1)] md:shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] relative overflow-hidden mt-32 md:mt-12"
      >
        <div className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-8 w-12 h-12 lg:w-24 lg:h-24 bg-yellow-100 rounded-full border-4 border-charcoal flex items-center justify-center transform rotate-12">
          <Heart className="w-4 h-4 lg:w-8 lg:h-8 text-vintage-red fill-vintage-red" />
        </div>
        <h4 className="font-display font-black text-charcoal text-xl md:text-2xl uppercase tracking-tight mb-3">
          Tag Us in Your Photos!
        </h4>
        <p className="text-charcoal/80 font-medium text-sm md:text-base max-w-md mx-auto mb-6 leading-relaxed">
          Whether you&apos;re enjoying our signature recipes or crafting your own endless custom mix, snap a pic and use <span className="font-bold text-vintage-red">#DrinkSpotNJ</span> to get featured on our feeds!
        </p>
        <div className="inline-flex gap-2 bg-mint-green text-charcoal font-black text-xs uppercase tracking-wider px-4 py-2 rounded-full border-2 border-charcoal transform hover:scale-105 transition-transform cursor-pointer select-none">
          ✨ <a href="https://www.campuscafe.ca/dirty-soda/" target="_blank" rel="noopener noreferrer" className="hover:underline">NJ&apos;s FIRST DIRTY SODA SHOP</a> ✨
        </div>
      </motion.div>
    </motion.div>
  );
}
