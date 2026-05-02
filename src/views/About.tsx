import React from 'react';
import { Award, ShieldCheck, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const timeline = [
    { year: '2011', title: 'Agency Inception', desc: 'Aura launched with just three associates handling high-profile Miami deals.' },
    { year: '2015', title: 'Global Expansion', desc: 'Inaugurated dedicated hubs in London and Dubai matching cross-border assets.' },
    { year: '2020', title: 'Aura Capital Rollout', desc: 'Merged advisory services with real estate asset allocations.' },
    { year: '2026', title: 'Full Smart-Tech Suite', desc: 'Securing leading 3D tech visualization capabilities for pre-builds.' }
  ];

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen text-stone-700 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 pt-2">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Who We Are</span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5 mb-2">
            Curating Masterpieces, Serving the Exceptional
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto font-medium">
            We operate beyond standard real estate constraints. At AURA, we identify spaces that elevate your everyday lifestyle, providing financial assurance and bespoke comfort.
          </p>
        </div>

        {/* Hero split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Luxury architecture"
              className="rounded border border-stone-200 shadow-sm"
            />
          </div>
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900 flex items-center space-x-1.5">
              <Compass className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span>Vision & Mission</span>
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm leading-relaxed font-medium">
              Our core objective is transparency. We aim to secure global architectural achievements for a prestigious circle of clients, streamlining asset acquisition securely and confidently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 border-t border-stone-100">
              <div className="flex items-start space-x-2">
                <ShieldCheck className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-stone-900 font-bold text-xs">Strict Security</h4>
                  <p className="text-[10px] text-stone-400 mt-0.5 font-medium">Maximum protection for sensitive documentation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Award className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-stone-900 font-bold text-xs">Elite Advisors</h4>
                  <p className="text-[10px] text-stone-400 mt-0.5 font-medium">Seasoned agents averaging 10+ years in luxury.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Our Journey</span>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-stone-900 mt-0.5">Growth Through Trust</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative z-10 bg-white border border-stone-200 rounded-lg p-5 hover:border-amber-600/30 transition-all shadow-sm">
                <span className="font-serif text-2xl font-bold text-amber-600 mb-1 block">{item.year}</span>
                <h4 className="text-stone-900 font-bold text-sm mb-0.5">{item.title}</h4>
                <p className="text-[11px] text-stone-400 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team profiles preview */}
        <div className="text-center mb-8">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">The Collective</span>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-stone-900 mt-0.5">Meet Our Specialists</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { name: 'Sarah Jenkins', role: 'Global Elite Partner', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
            { name: 'Marcus Sterling', role: 'Director of Sales', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
            { name: 'Elise Dupont', role: 'Luxury Advisor', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80' }
          ].map((member, idx) => (
            <div key={idx} className="bg-white border border-stone-200 rounded-lg overflow-hidden group hover:border-amber-600/30 transition-all duration-300 shadow-sm">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" />
              </div>
              <div className="p-4 text-center border-t border-stone-100">
                <h4 className="font-serif text-base font-bold text-stone-900">{member.name}</h4>
                <p className="text-[9px] text-amber-600 font-bold uppercase tracking-widest mt-0.5">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
