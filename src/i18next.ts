import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";

const resources = {
  en: {
    translation: {
      name: "Bloodbound",
      app: {
        chronicles: "The Curse",
        worldTitle: "A Father's Descent",
      },
      hero: {
        tagline: "A blood pact signed in despair",
        titleSurvive: "Save the son,",
        titleEternal: "Kill the curse",
        desc: "To break the vampire's magic, a father must hunt the creature responsible. In this misty forest, blood is the only currency left for your humanity.",
        firstButton: "Enter the Woods",
        secondButton: "View the Pact",
      },
      characters: {
        items: [
          {
            title: "The Cursed Father",
            role: "The Bound",
            desc: "His soul is tethered to blood magic. Every strike saves his son's life, but costs him his own humanity.",
            img: "/src/assets/img/chara retake.png",
          },
          {
            title: "The Necromancer",
            role: "A powerful magician",
            desc: "Victim of a vampire attack. His veins now flow with a magic that only his father's sacrifice can contain.",
            img: "/src/assets/img/image.png",
          },
          {
            title: "The Blood Stalker",
            role: "The Antagonist",
            desc: "An ancient creature of the mist. It doesn't just want blood; it wants the cycle of suffering to never end.",
            img: "/src/assets/img/ennemie-cac.png",
          },
        ],
      },
      features: {
        title: "The Hunt Begins",
        desc: "Will you find the creature before the blood magic consumes what's left of your soul?",
        button: "Break the Curse",
      },
      nav: {
        world: "Journey",
        characters: "Kinship",
        lore: "Archives",
        join: "Suffer with us",
      },
      team: {
        title: "The Hellhounds Pack",
        subtitle: "The architects of your nightmare",
        members: [
          {
            name: "Lucas",
            role: "Alpha / Lead Dev",
            bio: "Signed the first pact. Master of blood magic and code.",
          },
          {
            name: "Member 2",
            role: "Stalker / Game Design",
            bio: "Weaves the threads of the curse to ensure no one escapes the woods.",
          },
          {
            name: "Member 3",
            role: "Artisan / Visuals",
            bio: "Gives shape to the shadows and color to the visceral remains.",
          },
        ],
      },
    },
  },
  fr: {
    translation: {
      name: "Bloodbound",
      app: {
        chronicles: "La Malédiction",
        worldTitle: "La Descente d'un Père",
      },
      hero: {
        tagline: "Un pacte de sang signé dans le désespoir",
        titleSurvive: "Sauver le fils,",
        titleEternal: "Tuer le mal",
        desc: "Pour briser la magie vampirique, un père doit traquer la créature responsable. Dans cette forêt de brume, le sang est la seule monnaie d'échange pour votre humanité.",
        firstButton: "Entrer dans les Bois",
        secondButton: "Voir le Pacte",
      },
      characters: {
        items: [
          {
            title: "Le Père Maudit",
            role: "Le Lié",
            desc: "Son âme est enchaînée à la magie du sang. Chaque coup porté sauve la vie de son fils, mais lui coûte son humanité.",
            img: "/src/assets/img/chara retake.png",
          },
          {
            title: "Le Nécromancien",
            role: "L'Innocent",
            desc: "Victime d'une attaque de vampire. Ses veines coulent désormais d'une magie que seul le sacrifice de son père peut contenir.",
            img: "/src/assets/img/image.png",
          },
          {
            title: "Le Traqueur de Sang",
            role: "L'Antagoniste",
            desc: "Une créature millénaire de la brume. Elle ne veut pas seulement du sang ; elle veut que le cycle de souffrance soit éternel.",
            img: "/src/assets/img/ennemie-cac.png",
          },
        ],
      },
      features: {
        title: "La Chasse commence",
        desc: "Trouverez-vous la créature avant que la magie du sang ne consume ce qu'il reste de votre âme ?",
        button: "Briser le Sort",
      },
      nav: {
        world: "Voyage",
        characters: "Lignées",
        lore: "Archives",
        join: "Souffrir avec nous",
      },
      team: {
        title: "La Meute Hellhounds",
        subtitle: "Les architectes de votre cauchemar",
        members: [
          {
            name: "Lucas",
            role: "Alpha / Lead Dev",
            bio: "A signé le premier pacte. Maître de la magie du sang et du code.",
          },
          {
            name: "Membre 2",
            role: "Traqueur / Game Design",
            bio: "Tisse les fils de la malédiction pour que nul n'échappe aux bois.",
          },
          {
            name: "Membre 3",
            role: "Artisan / Visuels",
            bio: "Donne forme aux ombres et de la couleur aux restes viscéraux.",
          },
        ],
      },
    },
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
