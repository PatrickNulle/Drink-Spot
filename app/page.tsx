'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, GlassWater, Share2, CupSoda, MapPin, Palette, Clock } from 'lucide-react';
import Image from 'next/image';
import HomeView from '@/components/HomeView';
import MenuView from '@/components/MenuView';
import SocialsView from '@/components/SocialsView';

const TABS = [
  { id: 'home', label: 'Home', icon: Sparkles, color: 'bg-mint-green', textColor: 'text-charcoal' },
  { id: 'menu', label: 'Drinks', icon: GlassWater, color: 'bg-yellow-400', textColor: 'text-charcoal' },
  { id: 'socials', label: 'Socials', icon: Share2, color: 'bg-vintage-red', textColor: 'text-white' },
];

const THEMES = [
  { id: 'vanilla', color: '#F3DAAC', name: 'Vanilla' },
  { id: 'mint', color: '#92CBB8', name: 'Mint' },
  { id: 'blue-razz', color: '#2563EB', name: 'Blue Razz' },
  { id: 'cherry', color: '#D7342C', name: 'Cherry' },
  { id: 'cola', color: '#3D2314', name: 'Cola' },
  { id: 'fanta', color: '#EA580C', name: 'Fanta' },
  { id: 'peach', color: '#FDBA74', name: 'Peach' },
  { id: 'pineapple', color: '#FACC15', name: 'Pineapple' },
];

export default function DrinkSpotApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeTheme, setActiveTheme] = useState('cola');
  const [showThemes, setShowThemes] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Apply theme class to body
    document.body.className = `theme-${activeTheme}`;
  }, [activeTheme]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setShowThemes(false);
      }
    }

    if (showThemes) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showThemes]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen bg-warm-cream bg-mint-checkerboard-bold flex flex-col relative overflow-hidden transition-colors duration-500`}>
      <div className="grain-overlay" />
      
      {/* Header Section */}
      <header className="relative z-50 bg-transparent">
        {/* Navigation */}
        <nav className="bg-transparent py-1">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-1 xl:gap-0 min-h-[3.5rem] pt-2 pb-2 xl:py-0">
              <div className="flex items-center justify-center xl:justify-start gap-4 w-full xl:w-auto px-1 sm:px-2 xl:px-0">
                <div className="flex items-center justify-center xl:justify-start cursor-pointer group w-full max-w-[320px] sm:max-w-[400px] xl:max-w-none xl:w-[240px] 2xl:w-[320px]" onClick={() => handleTabChange('home')}>
                  <Image 
                    src="https://laedbhyfxdkxsztxsjkd.supabase.co/storage/v1/object/public/Website%20Images/Drink%20Spot/Combined%20Header%20Logo.png" 
                    alt="Drink Spot Logo" 
                    width={800} 
                    height={300} 
                    className="w-full h-auto mt-4 xl:mt-0 object-contain transition-transform duration-300 group-hover:scale-105 origin-center xl:origin-left xl:-ml-2 2xl:-ml-4"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="hidden xl:flex flex-col gap-1 font-black text-xs uppercase tracking-widest text-charcoal border-l-2 border-charcoal pl-4">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 stroke-[3]" />
                    <span>Wed.- Fri. 12p-9p</span>
                  </div>
                  <div>Sat. 11a-9p</div>
                  <div>Sun. 11a-7p</div>
                </div>
              </div>
            
              <div className="flex items-center justify-between md:justify-center w-full xl:w-auto gap-2 md:gap-4 px-1 sm:px-2 xl:px-0 mt-0 xl:mt-0">
                <div className="hidden md:flex space-x-2 xl:space-x-3">
                  {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => handleTabChange(tab.id)}
                        className={`group relative px-4 xl:px-5 py-2.5 rounded-full text-xs xl:text-sm font-extrabold transition-all border-2 border-charcoal uppercase tracking-wider flex items-center gap-1.5 xl:gap-2 ${tab.color} ${tab.textColor} ${
                          isActive 
                            ? 'shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] -translate-y-1 scale-105' 
                            : 'opacity-80 hover:opacity-100 hover:-translate-y-0.5 shadow-sm'
                        }`}
                      >
                        <tab.icon className={`w-4 h-4 transition-transform duration-300 group-hover:rotate-12 ${isActive ? 'rotate-12' : ''}`} />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
                
                {/* Mobile Nav Toggle */}
                <div className="md:hidden flex flex-1 justify-between gap-1.5 sm:gap-3">
                   {TABS.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => handleTabChange(tab.id)}
                          className={`group flex-1 relative py-2.5 rounded-2xl transition-all border-2 border-charcoal flex flex-col items-center justify-center gap-1 ${tab.color} ${tab.textColor} ${
                            isActive 
                              ? 'shadow-[3px_3px_0px_0px_rgba(34,34,34,1)] -translate-y-1 scale-105' 
                              : 'opacity-90 hover:opacity-100 shadow-sm'
                          }`}
                        >
                          <tab.icon className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-12 ${isActive ? 'rotate-12' : ''}`} />
                          <span className="text-[11px] font-black uppercase tracking-wider leading-none">{tab.label}</span>
                        </button>
                      );
                   })}
                </div>

              {/* Theme Toggle Button */}
              <div className="relative shrink-0" ref={themeRef}>
                <button
                  onClick={() => setShowThemes(!showThemes)}
                  className="px-3 py-2 xl:px-4 xl:py-2.5 rounded-full font-extrabold text-xs xl:text-sm bg-soft-teal text-warm-cream border-2 border-charcoal shadow-[2px_2px_0px_0px_rgba(34,34,34,1)] hover:shadow-none hover:translate-y-0.5 hover:translate-x-0.5 transition-all flex items-center gap-1.5 xl:gap-2 group tracking-wider uppercase"
                >
                  <Palette className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">Themes</span>
                </button>
                <AnimatePresence>
                  {showThemes && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      className="absolute right-0 top-full mt-3 bg-card p-3 rounded-[2rem] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)] border-4 border-charcoal flex flex-col gap-3 z-50"
                    >
                      {THEMES.map((theme) => (
                        <button
                          key={theme.id}
                          onClick={() => { setActiveTheme(theme.id); setShowThemes(false); }}
                          className="w-10 h-10 rounded-full border-4 border-charcoal transform hover:scale-110 transition-transform shadow-sm relative group"
                          style={{ backgroundColor: theme.color }}
                          title={theme.name}
                        >
                          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-charcoal text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                            {theme.name}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

      {/* Main Content Area */}
      <main className="flex-grow w-full relative">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomeView key="home" onNavigate={handleTabChange} />}
          {activeTab === 'menu' && <MenuView key="menu" />}
          {activeTab === 'socials' && <SocialsView key="socials" />}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-transparent text-charcoal py-8 border-t-8 border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="flex justify-center items-center mb-4">
            <div className="relative w-80 h-32 sm:w-96 sm:h-40">
              <Image 
                src="https://laedbhyfxdkxsztxsjkd.supabase.co/storage/v1/object/public/Website%20Images/Drink%20Spot/Clear%20Logo%20Black%20Outline.png" 
                alt="Drink Spot Logo" 
                fill 
                className="object-contain" 
                style={{ filter: 'drop-shadow(3px 0px 0px #222) drop-shadow(-3px 0px 0px #222) drop-shadow(0px 3px 0px #222) drop-shadow(0px -3px 0px #222)' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <p className="text-charcoal font-bold text-lg mb-5 max-w-lg mx-auto text-center uppercase tracking-wide leading-relaxed"><a href="https://www.campuscafe.ca/dirty-soda/" target="_blank" rel="noopener noreferrer" className="hover:underline">New Jersey&apos;s First Dirty Soda Shop</a>. Come get a taste of nostalgic fun with a modern twist.</p>
          <div className="flex justify-center space-x-8 text-sm font-extrabold uppercase tracking-widest mb-2 text-center">
             <button onClick={() => handleTabChange('home')} className="hover:text-vintage-red transition-colors">Home</button>
             <button onClick={() => handleTabChange('menu')} className="hover:text-vintage-red transition-colors">Drinks</button>
             <button onClick={() => handleTabChange('socials')} className="hover:text-vintage-red transition-colors">Socials</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
