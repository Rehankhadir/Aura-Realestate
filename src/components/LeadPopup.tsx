import React, { useState, useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

export const LeadPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Show popup after 15 seconds
    const timer = setTimeout(() => {
      const shownBefore = localStorage.getItem('aura_popup_shown');
      if (!shownBefore) {
        setIsOpen(true);
        localStorage.setItem('aura_popup_shown', 'true');
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setIsOpen(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-stone-900/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      
      <div className="relative bg-white border border-stone-200 rounded-lg max-w-md w-full p-6 md:p-8 shadow-2xl overflow-hidden">
        {/* Decorative soft glow */}
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.03),transparent_40%)] pointer-events-none" />

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <ShieldCheck className="w-10 h-10 text-amber-600 mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-stone-900 mb-1">Access Granted</h3>
            <p className="text-xs text-stone-500">Our advisory team will contact you shortly.</p>
          </div>
        ) : (
          <div>
            <span className="text-[10px] tracking-widest font-bold uppercase text-amber-600">Private Access</span>
            <h3 className="font-serif text-xl font-bold text-stone-900 mt-0.5 mb-2">Download Global Portfolio</h3>
            <p className="text-xs text-stone-500 leading-relaxed mb-5">
              Unlock our offline collection of unlisted properties, off-market architectural structures, and exclusive market insights.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-stone-800 rounded px-3 py-2.5 text-xs transition-all outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-stone-900 hover:bg-amber-600 text-white hover:text-stone-900 py-3 rounded uppercase font-bold text-xs tracking-widest transition-all duration-300 shadow-sm"
              >
                Get Private Portfolio
              </button>
            </form>

            <p className="text-[9px] text-stone-400 text-center mt-4 flex items-center justify-center font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-amber-600 flex-shrink-0" />
              100% Secure & Confidential
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
