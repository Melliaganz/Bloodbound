import React from 'react';
import { useTranslation } from 'react-i18next';

const Team: React.FC = () => {
  const { t } = useTranslation();

  // On récupère le tableau des membres (on cast car i18next retourne parfois 'any')
  const members = t('team.members', { returnObjects: true }) as Array<{name: string, role: string, bio: string}>;

  return (
    <section id="team" className="py-24 bg-background-dark relative overflow-hidden">
      {/* Effet de brume en arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(142,26,26,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-6xl text-white uppercase tracking-tighter mb-4">
            {t('team.title')}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="font-display text-primary uppercase tracking-[0.3em] text-sm font-bold">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="group relative bg-card-dark border border-border-metal p-8 transition-all duration-500 hover:border-primary/50"
            >
              {/* Accent décoratif dans le coin */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-primary transition-all duration-500"></div>
              
              <div className="mb-6 relative">
                <div className="size-20 bg-border-metal flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
                  <span className="material-symbols-outlined text-4xl text-white/20 group-hover:text-primary">
                    skull
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl text-white uppercase mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="font-display text-primary text-[10px] uppercase font-black tracking-[0.2em] mb-4">
                {member.role}
              </p>
              <p className="text-slate-400 font-display text-sm leading-relaxed italic border-l border-white/10 pl-4 group-hover:border-primary/30 transition-all">
                "{member.bio}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
