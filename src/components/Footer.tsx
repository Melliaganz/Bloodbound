import React from "react";
declare const __APP_YEAR__: string;
declare const __DEVELOPPER__: string;
declare const __GITHUB__: string;
declare const __HELLHOUNDS__: string;

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6 text-center border-t border-white/5">
      <p className="font-display text-slate-600 text-[14px] uppercase tracking-[0.4em] w-full">
        ©{__APP_YEAR__}{" "}
        <a
          href={__GITHUB__}
          target="_blank"
          rel="noopener"
          title="Melliaganz GitHub Profile"
          className="text-primary hover:underline"
        >
          {__DEVELOPPER__}
        </a>
        {" & "}
        <span className="text-primary hover:underline">{__HELLHOUNDS__}</span>.
      </p>
      <p className="font-display text-slate-600 text-[14px] uppercase tracking-[0.4em] w-full">
        Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
