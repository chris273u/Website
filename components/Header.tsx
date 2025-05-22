import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#/kategorier', label: 'KATEGORIER', id: 'kategorier' },
  { href: '#/portfolio', label: 'PORTFOLIO', id: 'portfolio' },
  { href: '#/udtalelser', label: 'UDTALELSER', id: 'udtalelser' },
  { href: '#/kontakt', label: 'KONTAKT', id: 'kontakt' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Let the browser handle navigation via hash change
    // If on a different page and clicking a section link, it will go to homepage and then scroll
    // (assuming App.tsx handles rendering HomePageContent for such hashes)
    setIsMenuOpen(false); 
    // For smoother scrolling on the same page, ensure the hash is correctly formed for App.tsx routing logic
    // For example, if already on '/', clicking '#/portfolio' should just work.
    // If on '#/kategori/something', clicking '#/portfolio' will change hash, App.tsx re-renders HomePageContent, browser scrolls.
  };


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black shadow-xl' : 'bg-transparent'}`}
      aria-label="Hovednavigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <a 
          href="#/" 
          onClick={(e) => handleLinkClick(e, '#/')}
          className="text-3xl font-bold text-white font-display-serif hover:text-amber-400 transition-colors"
          aria-label="Visuel Fortælling Hjem"
        >
          VF
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Primær navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-neutral-200 hover:text-amber-400 transition-colors font-display-sans tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Luk menu" : "Åbn menu"}
            aria-expanded={isMenuOpen}
            className="text-neutral-200 hover:text-amber-400 focus:outline-none p-2"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 absolute top-full left-0 right-0 shadow-lg">
          <nav className="flex flex-col items-center space-y-5 py-5" aria-label="Mobil navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg text-neutral-100 hover:text-amber-400 transition-colors font-display-sans"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;