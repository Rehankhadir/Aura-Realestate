import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Shield, Layers } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  wishlistCount: number;
  compareCount: number;
  openCompare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  wishlistCount,
  compareCount,
  openCompare
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'properties', label: 'Properties' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'locations', label: 'Hotspots' },
    { id: 'blog', label: 'Insights' },
    { id: 'contact', label: 'Contact' }
  ];

  const isHeroPage = currentPage === 'home';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/60 py-3 shadow-sm'
          : isHeroPage
          ? 'bg-transparent py-5'
          : 'bg-white/50 backdrop-blur-sm border-b border-stone-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => setCurrentPage('home')}
        >
          <Shield className={`w-7 h-7 transition-transform group-hover:rotate-12 duration-300 ${
            scrolled || !isHeroPage ? 'text-amber-600' : 'text-amber-500'
          }`} />
          <span className={`font-serif text-xl font-bold tracking-widest transition-colors ${
            scrolled || !isHeroPage ? 'text-stone-900 group-hover:text-amber-600' : 'text-white group-hover:text-amber-400'
          }`}>
            AURA
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`relative text-xs uppercase tracking-widest font-semibold transition-colors hover:text-amber-600 ${
                currentPage === item.id
                  ? 'text-amber-600'
                  : scrolled || !isHeroPage
                  ? 'text-stone-600 hover:text-stone-900'
                  : 'text-stone-200 hover:text-white'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-[-4px] left-0 w-full h-[1.5px] bg-amber-600" />
              )}
            </button>
          ))}
        </div>

        {/* Action icons */}
        <div className="hidden md:flex items-center space-x-5">
          <button
            onClick={() => setCurrentPage('properties')}
            className={`relative p-1.5 transition-colors ${
              scrolled || !isHeroPage ? 'text-stone-600 hover:text-amber-600' : 'text-stone-300 hover:text-white'
            }`}
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
                {wishlistCount}
              </span>
            )}
          </button>
          <button
            onClick={openCompare}
            className={`relative p-1.5 transition-colors ${
              scrolled || !isHeroPage ? 'text-stone-600 hover:text-amber-600' : 'text-stone-300 hover:text-white'
            }`}
            title="Compare Properties"
          >
            <Layers className="w-5 h-5" />
            {compareCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
                {compareCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setCurrentPage('contact')}
            className={`px-5 py-2 rounded text-xs uppercase font-bold tracking-widest transition-all duration-300 ${
              scrolled || !isHeroPage
                ? 'bg-stone-900 hover:bg-amber-600 text-white hover:text-stone-950 shadow-sm'
                : 'bg-white/10 hover:bg-white border border-white/30 hover:border-white text-white hover:text-stone-900'
            }`}
          >
            Inquire
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setCurrentPage('properties')}
            className={`relative p-1.5 ${scrolled || !isHeroPage ? 'text-stone-600' : 'text-stone-200'}`}
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">
                {wishlistCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1.5 focus:outline-none ${scrolled || !isHeroPage ? 'text-stone-700' : 'text-white'}`}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-4 pb-6 shadow-xl flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left text-xs uppercase tracking-widest font-semibold py-2.5 px-2 rounded-md ${
                currentPage === item.id ? 'text-amber-600 bg-stone-50' : 'text-stone-600 hover:bg-stone-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-stone-100 flex flex-col space-y-3">
            <button
              onClick={() => { openCompare(); setIsOpen(false); }}
              className="flex items-center space-x-2 text-stone-600 py-2 text-xs font-semibold uppercase tracking-widest px-2"
            >
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Compare ({compareCount})</span>
            </button>
            <button
              onClick={() => {
                setCurrentPage('contact');
                setIsOpen(false);
              }}
              className="w-full text-center bg-stone-900 hover:bg-amber-600 text-white hover:text-stone-950 py-3 rounded text-xs uppercase font-bold tracking-widest transition-all duration-300"
            >
              Inquire Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
