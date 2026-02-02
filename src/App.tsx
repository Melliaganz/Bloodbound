import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CharacterCard from "./components/CharacterCard";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Team from "./components/Team";
import { CHARACTERS_IMAGES } from "./constants/characters";
import type { Character } from "./types/game";

const App: React.FC = () => {
  const { t } = useTranslation();

  const charactersTexts = t("characters.items", {
    returnObjects: true,
  }) as Omit<Character, 'img'>[];

  return (
    <div className="bg-background-dark min-h-screen selection:bg-accent-blood selection:text-white">
      <Navbar />
      <Hero />

      <main className="relative z-10 px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h4 className="text-primary text-xs font-black uppercase tracking-[0.5em] mb-4">
            {t("app.chronicles")}
          </h4>
          <h2 className=" text-4xl md:text-5xl font-black text-white uppercase">
            {t("app.worldTitle")}
          </h2>
          <div className="w-12 h-1 bg-accent-blood mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(charactersTexts) &&
            charactersTexts.map((textData, i) => (
              <CharacterCard 
                key={i} 
                title={textData.title}
                role={textData.role}
                desc={textData.desc}
                img={CHARACTERS_IMAGES[i]} 
              />
            ))}
        </div>
        
        <Team />
        <Features />
      </main>

      <Footer />
    </div>
  );
};

export default App;
