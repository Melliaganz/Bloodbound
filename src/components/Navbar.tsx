import React from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.resolvedLanguage || i18n.language;
    const newLang = currentLang.startsWith("fr") ? "en" : "fr";
    i18n.changeLanguage(newLang);
  };

  const currentLangDisplay = (i18n.resolvedLanguage || i18n.language)
    .split("-")[0]
    .toUpperCase();

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="size-8 flex items-center justify-center bg-amber-950 rounded-sm rotate-45 group-hover:bg-accent-blood transition-colors duration-500">
            <img
              src="/img/logo_team.png"
              alt="Logo"
              className="size-10 -rotate-45"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
          <h2 className="font-display font-black tracking-[0.15em] text-xl uppercase group-hover:text-primary transition-colors text-white italic">
            {t("name")}
          </h2>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { key: "world", label: t("nav.world") },
            { key: "champions", label: t("nav.characters") },
            { key: "archives", label: t("nav.lore") },
          ].map((item) => (
            <a
              key={item.key}
              className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors"
              href={`#${item.key}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button
            onClick={toggleLanguage}
            className="group flex items-center gap-2 font-display text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-sm hover:border-white/30 cursor-pointer"
          >
            <span
              className={`${currentLangDisplay === "FR" ? "text-primary" : "text-slate-500"}`}
            >
              FR
            </span>
            <span className="text-white/20">|</span>
            <span
              className={`${currentLangDisplay === "EN" ? "text-primary" : "text-slate-500"}`}
            >
              EN
            </span>
          </button>

          <button className="bg-accent-blood hover:bg-red-800 text-white font-display text-[10px] font-black uppercase tracking-[0.3em] px-6 py-2 rounded-sm transition-all duration-300 cursor-pointer">
            {t("nav.join")}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
