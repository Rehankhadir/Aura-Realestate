import React from 'react';
import { TESTIMONIALS } from '../data/properties';
import { Star, Quote, Shield } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen text-stone-700 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 pt-2">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Client Feedback</span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5 mb-2">
            Words From Our Global Elite
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-medium">
            Read verified real-world commentary from satisfied property buyers, real estate investors, and high-worth residents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white border border-stone-200/80 rounded-lg p-6 relative shadow-sm hover:border-amber-600/30 transition-all duration-300">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-amber-600/5 pointer-events-none" />

              <div className="flex items-center space-x-0.5 text-amber-600 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-600" />
                ))}
              </div>

              <p className="text-stone-800 text-sm sm:text-base leading-relaxed italic font-serif mb-5 text-stone-800/90 font-medium">
                "{t.text}"
              </p>

              <div className="flex items-center space-x-3 border-t border-stone-100 pt-4">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-stone-200 shadow-inner" />
                <div>
                  <h4 className="text-stone-900 font-bold text-sm">{t.name}</h4>
                  <p className="text-[10px] text-stone-400 font-semibold uppercase tracking-wider">
                    {t.role}, <span className="text-amber-600 font-bold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brand guarantee banner */}
        <div className="bg-white border border-stone-200 rounded-lg p-6 max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4 shadow-sm">
          <Shield className="w-8 h-8 text-amber-600 flex-shrink-0" />
          <div className="text-left">
            <h3 className="font-serif text-base font-bold text-stone-900">100% Verified Reviews</h3>
            <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">
              Our collection maintains strict transaction verification to guarantee authenticity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
