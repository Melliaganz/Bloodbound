import React from "react";
declare const __APP_YEAR__: string;

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6 text-center border-t border-white/5">
      <p className="text-slate-600 text-[14px] uppercase tracking-[0.4em]">
        ©{__APP_YEAR__}{" "}
        <a href="https://github.com/Melliaganz" target="_blank" rel="noopener" title="Melliaganz GitHub Profile" className="text-primary hover:underline">
          Lengrand Lucas
        </a>{" "}
        & Hellhounds. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
