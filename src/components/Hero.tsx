import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-hero-pattern">
          <div className="absolute inset-0 bg-background-dark/10 misty-overlay"></div>
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-background-dark/10 to-background-dark"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
        <span className="inline-block mb-6 px-4 py-1 border border-primary/40 text-primary text-[10px] font-bold uppercase tracking-[0.4em] rounded-full bg-primary/5">
          {t('hero.tagline')}
        </span>
        
        <h1 className="font-display text-5xl md:text-8xl font-black uppercase leading-none mb-8 tracking-tighter text-white">
          {t('hero.titleSurvive')}<br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-white to-primary/60">
            {t('hero.titleEternal')}
          </span>
        </h1>

        <p className="font-serif text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed italic">
          {t('hero.desc')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary/80 text-white font-bold uppercase tracking-[0.2em] text-xs px-10 py-5 rounded-sm transition-all flex items-center gap-2 group cursor-pointer">
            {t('hero.firstButton')}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          
          <button className="border border-white/10 hover:border-white/30 bg-white/5 text-white font-bold uppercase tracking-[0.2em] text-xs px-10 py-5 rounded-sm transition-all cursor-pointer">
            {t('hero.secondButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
