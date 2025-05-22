
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-neutral-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center text-neutral-400 text-sm">
        <p className="font-display-sans mb-2">
          &copy; {new Date().getFullYear()} Visuel Fortælling. Alle rettigheder forbeholdes.
        </p>
        <p className="font-display-sans">
          <a href="mailto:kontakt@visuelfortaelling.dk" className="hover:text-amber-400 transition-colors">
            kontakt@visuelfortaelling.dk
          </a>
          <span className="mx-2">|</span>
          <span>København, Danmark</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
