import React from 'react';
import { LOCATIONS } from '../data/properties';
import { MapPin, Globe, Compass } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen text-stone-700 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 pt-2">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Global Coverage</span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5 mb-2">
            Elite Property Hotspots
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-medium">
            Invest in regions delivering high asset resilience, tax efficiency, and stunning geographic visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {LOCATIONS.map((loc, idx) => (
            <div key={idx} className="bg-white border border-stone-200/80 rounded-lg overflow-hidden flex flex-col sm:flex-row group hover:border-amber-600/30 transition-all duration-300 shadow-sm">
              <div className="w-full sm:w-2/5 relative h-48 sm:h-auto">
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
                <div className="absolute inset-0 bg-stone-900/10" />
                <span className="absolute top-3 left-3 bg-stone-900/90 border border-white/20 text-white text-[9px] font-bold px-2.5 py-1 rounded tracking-wider uppercase">
                  {loc.tag}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mb-1 flex items-center space-x-1.5">
                    <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{loc.name}</span>
                  </h3>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                    Known for robust transactional liquidity, architectural advancements, and reliable rental yield benchmarks.
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-3.5 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-stone-400">
                  <span className="text-amber-600">{loc.properties} Listings</span>
                  <span className="flex items-center text-stone-500 hover:text-amber-600 transition-colors cursor-pointer">
                    <Globe className="w-3.5 h-3.5 mr-1 text-amber-600" /> Coordinates
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Stats */}
        <div className="bg-white border border-stone-200 rounded-lg p-6 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <Compass className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div className="text-left">
              <span className="font-serif text-base font-bold text-stone-900">Relocation Services</span>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-0.5">Visas & Permits</p>
            </div>
          </div>
          <div className="h-[1px] sm:h-10 w-full sm:w-[1px] bg-stone-200" />
          <div className="flex items-center space-x-3">
            <Compass className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div className="text-left">
              <span className="font-serif text-base font-bold text-stone-900">Private Inventory</span>
              <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-0.5">Off-Market Access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
