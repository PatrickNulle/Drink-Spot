'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Star, Flame, Sparkles, Heart, GlassWater } from 'lucide-react';

const CATEGORIES = ['All', 'Dr Pepper', 'Coke / Root Beer', 'Root Beer / Fanta'];

const DRINKS = [
  // Dr Pepper
  { id: '1', name: 'Verona Velvet', base: 'Dr Pepper', ingredients: 'Vanilla, Raspberry, Cream', price: '$4.50', badge: 'Best Seller', category: 'Dr Pepper', badgeIcon: Star, color: 'bg-vintage-red/20' },
  { id: '2', name: 'Kingston Cream', base: 'Dr Pepper', ingredients: 'Coconut, Vanilla Cream', price: '$4.50', badge: 'Fan Fave', category: 'Dr Pepper', badgeIcon: Heart, color: 'bg-mint-green/30' },
  { id: '3', name: 'Madison Avenue', base: 'Dr Pepper', ingredients: 'Cherry, Vanilla', price: '$4.00', category: 'Dr Pepper', color: 'bg-charcoal/10' },
  { id: '4', name: 'Sedona Crest', base: 'Dr Pepper', ingredients: 'Peach, Vanilla Cream', price: '$4.50', category: 'Dr Pepper', color: 'bg-soft-teal/20' },
  { id: '5', name: 'Munich Midnight', base: 'Dr Pepper', ingredients: 'Blackberry, Coconut', price: '$4.50', category: 'Dr Pepper', color: 'bg-charcoal/20' },
  { id: '6', name: 'Savannah Sol', base: 'Dr Pepper', ingredients: 'Peach, Strawberry', price: '$4.00', category: 'Dr Pepper', color: 'bg-vintage-red/10' },
  
  // Coke / Root Beer
  { id: '7', name: 'Banff Bonfire', base: 'Coke', ingredients: 'Toasted Marshmallow, Chocolate', price: '$4.75', badge: 'New', category: 'Coke / Root Beer', badgeIcon: Sparkles, color: 'bg-charcoal/20' },
  { id: '8', name: 'Vienna Jubilee', base: 'Coke', ingredients: 'Cherry, Vanilla Cream', price: '$4.50', category: 'Coke / Root Beer', color: 'bg-vintage-red/20' },
  { id: '9', name: 'Cairo Coco Cherry', base: 'Coke', ingredients: 'Coconut, Cherry', price: '$4.00', badge: 'Fire', category: 'Coke / Root Beer', badgeIcon: Flame, color: 'bg-vintage-red/30' },
  { id: '10', name: 'Ball Blush', base: 'Coke', ingredients: 'Strawberry, Vanilla', price: '$4.25', category: 'Coke / Root Beer', color: 'bg-mint-green/20' },
  { id: '11', name: 'Punta Cana Cola', base: 'Coke', ingredients: 'Pineapple, Coconut Cream', price: '$4.75', category: 'Coke / Root Beer', color: 'bg-soft-teal/20' },
  { id: '12', name: 'Prague Noir', base: 'Coke', ingredients: 'Blackberry, Vanilla', price: '$4.25', category: 'Coke / Root Beer', color: 'bg-charcoal/30' },

  // Root Beer / Fanta
  { id: '16', name: 'Santorini Crush', base: 'Fanta', ingredients: 'Peach, Coconut Cream', price: '$4.50', badge: 'Limited', category: 'Root Beer / Fanta', badgeIcon: Sparkles, color: 'bg-mint-green/30' },
  { id: '17', name: 'Pebbles in Provo', base: 'Fanta', ingredients: 'Strawberry, Vanilla Cream', price: '$4.50', category: 'Root Beer / Fanta', color: 'bg-vintage-red/20' },
  { id: '13', name: 'The Birmingham', base: 'Root Beer', ingredients: 'Vanilla, Butterscotch', price: '$4.50', badge: 'Best Seller', category: 'Root Beer / Fanta', badgeIcon: Star, color: 'bg-charcoal/20' },
  { id: '18', name: 'Savannah Split', base: 'Fanta', ingredients: 'Peach, Vanilla', price: '$4.00', category: 'Root Beer / Fanta', color: 'bg-soft-teal/20' },
  { id: '14', name: 'Copenhagen Cream', base: 'Root Beer', ingredients: 'Vanilla Cream, Caramel', price: '$4.75', category: 'Root Beer / Fanta', color: 'bg-mint-green/10' },
  { id: '15', name: 'Quebec Fireside', base: 'Root Beer', ingredients: 'Toasted Marshmallow', price: '$4.25', category: 'Root Beer / Fanta', color: 'bg-charcoal/10' },
];

export default function MenuView() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDrinks = DRINKS.filter(drink => {
    const matchesCategory = activeCategory === 'All' || drink.category === activeCategory;
    const matchesSearch = drink.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          drink.ingredients.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring' as const, bounce: 0.4, duration: 0.8 } 
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="py-2 px-2 lg:px-4 max-w-6xl mx-auto min-h-screen relative"
    >
      <div className="text-center py-10 md:py-24 mb-6 md:mb-12 relative z-10 px-2">
        <motion.h1 variants={itemVariants} className="text-4xl md:text-7xl lg:text-8xl font-display font-black text-charcoal mb-4 md:mb-6 uppercase tracking-tighter leading-[0.9] sticker-shadow">
          Your Next<br/>Obsession
        </motion.h1>
        <motion.p variants={itemVariants} className="text-xs md:text-lg font-bold text-charcoal max-w-md mx-auto bg-card inline-block px-4 py-1.5 md:px-6 md:py-2 rounded-full border-2 md:border-4 border-charcoal shadow-[3px_3px_0px_0px_rgba(34,34,34,1)] md:shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] transform -rotate-1">
          Customize anything, or pick our faves.
        </motion.p>
      </div>

      {/* Filters & Search */}
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-3 md:gap-4 justify-between items-center mb-8 md:mb-12 bg-card p-2 rounded-2xl md:rounded-[2.5rem] border-2 md:border-4 border-charcoal shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] md:shadow-[6px_6px_0px_0px_rgba(34,34,34,1)] relative z-10">
        <div className="flex flex-wrap gap-1.5 md:gap-2 justify-center lg:justify-start w-full lg:w-auto">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full font-extrabold text-xs md:text-sm uppercase tracking-wide transition-all border-2 md:border-4 ${
                activeCategory === category 
                  ? 'bg-vintage-red text-white border-charcoal shadow-[3px_3px_0px_0px_rgba(34,34,34,1)] translate-y-0.5' 
                  : 'bg-warm-cream text-charcoal border-transparent hover:border-charcoal hover:shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative w-full lg:w-64">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-charcoal" />
          </div>
          <input
            type="text"
            placeholder="Find your flavor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-2 bg-warm-cream border-2 md:border-4 border-charcoal rounded-full focus:outline-none focus:ring-2 focus:ring-mint-green transition-shadow font-semibold text-xs md:text-sm text-charcoal placeholder-charcoal/50 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]"
          />
        </div>
      </motion.div>

      {/* Drink Grid - Collectible Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
        <AnimatePresence mode="popLayout">
          {filteredDrinks.map((drink, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8, y: 30, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 30, rotate: 3 }}
              transition={{ duration: 0.4, type: 'spring', bounce: 0.4, delay: i * 0.03 }}
              key={drink.id}
              className="bg-card rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-6 shadow-[6px_6px_0px_0px_rgba(34,34,34,1)] md:shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] border-4 border-charcoal group cursor-pointer hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(34,34,34,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(34,34,34,1)] transition-all duration-300 relative flex flex-col"
            >
              {/* Icon & Price Header */}
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${drink.color || 'bg-warm-cream'} border-2 border-charcoal flex items-center justify-center text-charcoal shadow-[3px_3px_0px_0px_rgba(34,34,34,1)] md:shadow-[4px_4px_0px_0px_rgba(34,34,34,1)]`}>
                  <GlassWater className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
                </div>
                <span className="font-extrabold text-xs md:text-base text-vintage-red bg-warm-cream px-2 py-0.5 md:px-3 md:py-1 rounded-lg md:rounded-xl border-2 border-charcoal transform rotate-2 whitespace-nowrap">{drink.price}</span>
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-xl md:text-3xl font-display font-black text-charcoal uppercase leading-none tracking-tight">{drink.name}</h3>
                  <p className="text-charcoal/60 font-semibold text-[10px] md:text-sm tracking-wide leading-relaxed uppercase">{drink.ingredients}</p>
                </div>
                
                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t-2 border-dashed border-charcoal/20 flex items-center justify-between">
                  <span className="bg-mint-green text-charcoal px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-xs font-black border-2 border-charcoal shadow-[2px_2px_0px_0px_rgba(34,34,34,1)] md:shadow-[3px_3px_0px_0px_rgba(34,34,34,1)] uppercase">
                    {drink.base}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {filteredDrinks.length === 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center py-24 bg-card rounded-[3rem] border-4 border-charcoal shadow-[8px_8px_0px_0px_rgba(34,34,34,1)] mt-10"
        >
          <div className="inline-flex w-24 h-24 bg-warm-cream rounded-full items-center justify-center text-charcoal/40 mb-6 border-4 border-charcoal transform -rotate-6">
            <Search className="w-12 h-12" />
          </div>
          <h3 className="text-4xl font-display font-black text-charcoal mb-4 uppercase">Bummer!</h3>
          <p className="text-xl font-bold text-charcoal/70">We couldn&apos;t find a drink with that flavor.</p>
        </motion.div>
      )}
    </motion.div>
  );
}
