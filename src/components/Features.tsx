import { t } from "i18next";
import React from "react";

const Features: React.FC = () => {
  return (
    <section className="mt-40 text-center bg-card-dark border border-white/5 p-12 md:p-20 relative rounded-sm overflow-hidden">
      <div className="relative z-10">
        <h2 className="font-display text-4xl font-black text-white mb-6 uppercase tracking-tighter">
          {t("features.title")}
        </h2>
        <p className="font-serif text-slate-400 mb-10 text-lg font-light max-w-xl mx-auto">
          {t("features.desc")}
        </p>
        <button className="bg-accent-blood hover:bg-red-800 text-white font-black uppercase tracking-[0.3em] text-sm px-12 py-5 rounded-sm transition-all duration-300">
          {t("features.button")}
        </button>
      </div>
    </section>
  );
};

export default Features;
