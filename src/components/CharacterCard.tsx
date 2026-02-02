import React from "react";
import { useTranslation } from "react-i18next";
import type { Character } from "../types/game";

const CharacterCard: React.FC<Character> = ({ title, role, desc, img }) => {
  const { t } = useTranslation();

  return (
    <div className="group relative bg-card-dark border border-white/5 rounded-sm overflow-hidden p-1 hover:border-accent-blood transition-all duration-500">
      <div className="aspect-3/4 overflow-hidden relative">
        <img
          src={img}
          alt={title ? t(title) : ""}
          className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
        <div className="absolute inset-0 bg-linear-to-t from-card-dark via-transparent to-transparent"></div>
      </div>
      <div className="p-8 relative -mt-20">
        <span className="text-accent-blood text-[10px] font-black tracking-widest uppercase">
          {role ? t(role) : ""}
        </span>
        <h3 className="font-display text-2xl font-bold text-white mt-2">
          {title ? t(title) : ""}
        </h3>
        <p className="font-serif text-slate-400 text-sm mt-4 leading-relaxed font-light">
          {desc ? t(desc) : ""}
        </p>
        <button className="mt-6 text-primary text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
          View Dossier{" "}
          <span className="material-symbols-outlined text-sm">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
