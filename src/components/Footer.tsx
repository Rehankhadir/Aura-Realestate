import React from 'react';
import { Shield, Mail, Phone, MapPin, Globe, MessageCircle, Send, ArrowUp } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-stone-200 text-stone-600 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div>
            <div
              className="flex items-center space-x-2 cursor-pointer group mb-4"
              onClick={() => { setCurrentPage('home'); scrollToTop(); }}
            >
              <Shield className="w-7 h-7 text-amber-600" />
              <span className="font-serif text-xl font-bold tracking-widest text-stone-900 group-hover:text-amber-600 transition-colors">
                AURA
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-6 text-stone-500">
              Curating the world's most exceptional real estate portfolios. High-end lifestyles, unparalleled design, and smart international investments.
            </p>
            <div className="flex space-x-3">
              <a href="#" aria-label="Website" className="p-2 border border-stone-200 rounded-full text-stone-400 hover:text-amber-600 hover:border-amber-500 transition-all"><Globe className="w-4 h-4" /></a>
              <a href="#" aria-label="WhatsApp" className="p-2 border border-stone-200 rounded-full text-stone-400 hover:text-amber-600 hover:border-amber-500 transition-all"><MessageCircle className="w-4 h-4" /></a>
              <a href="#" aria-label="Telegram" className="p-2 border border-stone-200 rounded-full text-stone-400 hover:text-amber-600 hover:border-amber-500 transition-all"><Send className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-4 tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'Properties', 'About', 'Services', 'Hotspots', 'Insights'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.toLowerCase() === 'hotspots' ? 'locations' : item.toLowerCase() === 'insights' ? 'blog' : item.toLowerCase());
                      scrollToTop();
                    }}
                    className="hover:text-amber-600 font-medium transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Categories */}
          <div>
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-4 tracking-wider">Property Types</h4>
            <ul className="space-y-2 text-xs">
              {['Ultra-Luxury Villas', 'Sky Penthouses', 'Exclusive Plots', 'Commercial Spaces', 'Premium Rentals'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => { setCurrentPage('properties'); scrollToTop(); }}
                    className="hover:text-amber-600 font-medium transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-sm font-bold text-stone-900 mb-4 tracking-wider">Connect</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span className="text-stone-500 font-medium">One World Trade Center, Suite 82<br />New York, NY 10007</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amber-600" />
                <span className="text-stone-500 font-medium">+1 (555) 000-AURA</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-600" />
                <span className="text-stone-500 font-medium">concierge@aura.luxury</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-200 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 font-medium">
          <p>&copy; {new Date().getFullYear()} AURA Global Estates. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-stone-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-700 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-stone-700 transition-colors">Sitemap</a>
          </div>
          <button
            onClick={scrollToTop}
            className="absolute right-6 -top-5 bg-stone-900 hover:bg-amber-600 text-white hover:text-stone-900 p-2.5 rounded shadow-md transition-all"
            title="Scroll To Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
