import React, { useState } from 'react';
import { Search, MapPin, Building, DollarSign, ArrowRight, Shield, Award, Users, Key } from 'lucide-react';
import { PROPERTIES, LOCATIONS } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';

interface HomeProps {
  setCurrentPage: (page: string) => void;
  setSelectedPropertyId: (id: string | null) => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  compareList: string[];
  toggleCompare: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({
  setCurrentPage,
  setSelectedPropertyId,
  wishlist,
  toggleWishlist,
  compareList,
  toggleCompare
}) => {
  // Search state
  const [searchCity, setSearchCity] = useState('');
  const [searchType, setSearchType] = useState('All');
  const [searchPrice, setSearchPrice] = useState('All');

  const featuredProperties = PROPERTIES.filter((p) => p.featured);

  const handleSearch = () => {
    setCurrentPage('properties');
  };

  return (
    <div className="relative bg-stone-50">
      {/* Hero Section (Cinematic Dark Overlay remains for atmospheric depth) */}
      <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Villa"
            className="w-full h-full object-cover scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/10" />
          <div className="absolute inset-0 bg-stone-950/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center">
          <span className="text-[10px] sm:text-xs tracking-[0.3em] font-bold text-amber-400 uppercase mb-3">
            Refining The Art of Premium Living
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-4">
            Exclusive Residences <br />
            <span className="text-amber-400 italic">Curated for Success</span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-200 max-w-xl mb-10 font-medium">
            Aura Estates matches elite clientele with the world’s most coveted off-market, modern architectural marvels.
          </p>

          {/* Search Bar Panel (Semi-transparent dark over image, keeping search clean) */}
          <div className="w-full max-w-3xl bg-white/95 backdrop-blur-md border border-white/20 rounded-lg p-3.5 shadow-xl flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center bg-stone-50 border border-stone-200/60 rounded px-3 py-2">
              <MapPin className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
              <input
                type="text"
                placeholder="Enter city (e.g., Miami, New York)"
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full bg-transparent text-stone-800 text-xs font-medium focus:outline-none placeholder-stone-400"
              />
            </div>

            <div className="flex-1 flex items-center bg-stone-50 border border-stone-200/60 rounded px-3 py-2">
              <Building className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="w-full bg-transparent text-stone-700 text-xs font-semibold focus:outline-none"
              >
                <option value="All">All Property Types</option>
                <option value="Villa">Villas</option>
                <option value="Penthouse">Penthouses</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div className="flex-1 flex items-center bg-stone-50 border border-stone-200/60 rounded px-3 py-2">
              <DollarSign className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
              <select
                value={searchPrice}
                onChange={(e) => setSearchPrice(e.target.value)}
                className="w-full bg-transparent text-stone-700 text-xs font-semibold focus:outline-none"
              >
                <option value="All">Any Budget</option>
                <option value="under5">Under $5M</option>
                <option value="5to10">$5M - $10M</option>
                <option value="over10">Over $10M</option>
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="bg-stone-900 hover:bg-amber-600 text-white hover:text-stone-900 px-6 py-2.5 rounded flex items-center justify-center font-bold text-xs uppercase tracking-widest transition-all duration-300 flex-shrink-0 shadow-sm"
            >
              <Search className="w-4 h-4 mr-1.5" /> Find
            </button>
          </div>
        </div>
      </div>

      {/* Trust Stats Section (Now Light Themed) */}
      <div className="bg-white border-y border-stone-200/60 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-0.5">$42B+</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Lifetime Sales</p>
            </div>
            <div>
              <p className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-0.5">12+</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Global Hubs</p>
            </div>
            <div>
              <p className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-0.5">98%</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Client Retention</p>
            </div>
            <div>
              <p className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-0.5">24/7</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Concierge Suite</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Showcase (Now Light Themed) */}
      <div className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Elite Portfolio</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5">Featured Residences</h2>
            </div>
            <button
              onClick={() => setCurrentPage('properties')}
              className="mt-2 sm:mt-0 flex items-center space-x-1 text-xs text-stone-600 hover:text-amber-600 font-bold uppercase tracking-widest transition-all"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onSelect={(id) => {
                  setSelectedPropertyId(id);
                  setCurrentPage('property-detail');
                }}
                isWishlisted={wishlist.includes(prop.id)}
                toggleWishlist={toggleWishlist}
                isCompared={compareList.includes(prop.id)}
                toggleCompare={toggleCompare}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us (Now Light Themed with soft stone background) */}
      <div className="py-16 bg-white border-y border-stone-200/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Unrivaled Excellence</span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5 mb-5">
              Bespoke Advisory for International Property
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              Navigating the acquisition of trophy assets demands specialized advisory. AURA brings over 15 years of discreet excellence, securing off-market properties for discerning clients worldwide.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex items-start space-x-2.5">
                <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-stone-900 font-bold text-sm">Absolute Discretion</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5 font-medium">Guarding privacy throughout transaction cycles.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-stone-900 font-bold text-sm">Vetted Portfolios</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5 font-medium">Inspected for material compliance and design integrity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-stone-900 font-bold text-sm">Dedicated Advisors</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5 font-medium">Individual guidance from local domain authorities.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5">
                <Key className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-stone-900 font-bold text-sm">Lifecycle Support</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5 font-medium">Post-sale interior, management & rental logistics.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Luxury Interior"
              className="rounded border border-stone-200/80 shadow-md"
            />
            <div className="absolute -bottom-4 -left-4 bg-white border border-stone-200 p-4 rounded shadow-md hidden sm:block max-w-[180px]">
              <span className="font-serif text-2xl font-bold text-amber-600">15+</span>
              <p className="text-[9px] text-stone-500 mt-0.5 uppercase font-bold tracking-wider">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Locations Grid (Light themed) */}
      <div className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Global Reach</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5">Elite Investment Hotspots</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              onClick={() => setCurrentPage('locations')}
              className="relative rounded overflow-hidden h-56 group cursor-pointer border border-stone-200 shadow-sm"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent flex flex-col justify-end p-4" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">{loc.tag}</span>
                <h3 className="font-serif text-xl font-bold text-white">{loc.name}</h3>
                <p className="text-[10px] text-stone-200 mt-0.5 font-medium">{loc.properties} Listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section (Refined dark grounding block) */}
      <div className="py-16 bg-stone-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.05),transparent_60%)]" />
        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
            Ready to Discover Your Next <br />Trophy Property?
          </h2>
          <p className="text-stone-300 text-xs max-w-md mx-auto mb-8 font-medium">
            Consult privately with our portfolio experts today. Bespoke insights delivered straight to your secure device.
          </p>
          <div className="flex flex-row justify-center gap-3">
            <button
              onClick={() => setCurrentPage('contact')}
              className="bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold uppercase tracking-widest text-xs px-5 py-2.5 rounded transition-all duration-300 shadow-sm"
            >
              Consultation
            </button>
            <button
              onClick={() => setCurrentPage('properties')}
              className="border border-stone-600 hover:border-amber-500 text-stone-200 font-bold uppercase tracking-widest text-xs px-5 py-2.5 rounded transition-all duration-300"
            >
              Inventory
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
