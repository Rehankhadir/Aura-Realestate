import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      setFormSent(true);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-stone-50 min-h-screen text-stone-700 font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 pt-2">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">Contact Us</span>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mt-0.5 mb-2">
            Private Concierge Lines
          </h1>
          <p className="text-stone-400 text-xs sm:text-sm font-medium">
            Contact AURA global management to arrange appointments or clarify property listings securely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Info cards */}
          <div className="space-y-4">
            <div className="bg-white border border-stone-200/80 rounded-lg p-5 flex items-start space-x-3 shadow-sm">
              <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base font-bold text-stone-900 mb-0.5">Corporate HQ</h4>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  One World Trade Center, Suite 82<br />
                  New York, NY 10007
                </p>
              </div>
            </div>

            <div className="bg-white border border-stone-200/80 rounded-lg p-5 flex items-start space-x-3 shadow-sm">
              <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base font-bold text-stone-900 mb-0.5">Direct Call Line</h4>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  +1 (555) 000-AURA<br />
                  +1 (555) 011-BOND
                </p>
              </div>
            </div>

            <div className="bg-white border border-stone-200/80 rounded-lg p-5 flex items-start space-x-3 shadow-sm">
              <Mail className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base font-bold text-stone-900 mb-0.5">Support Email</h4>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  concierge@aura.luxury<br />
                  deals@aura.luxury
                </p>
              </div>
            </div>

            <div className="bg-white border border-stone-200/80 rounded-lg p-5 flex items-start space-x-3 shadow-sm">
              <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base font-bold text-stone-900 mb-0.5">Availability</h4>
                <p className="text-xs text-stone-500 font-medium leading-relaxed">
                  Mon - Sat: 9am - 8pm EST<br />
                  Emergency VIP requests: 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 relative overflow-hidden shadow-sm">
            {formSent ? (
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">Message Transmitted</h3>
                <p className="text-stone-500 text-xs sm:text-sm font-medium">
                  Thank you, {name}. A dedicated client advisor is pulling market indices for you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-4">Request Access or Information</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alexander Vance"
                      className="w-full bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-stone-800 rounded px-3 py-2.5 text-xs font-medium outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@domain.com"
                      className="w-full bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-stone-800 rounded px-3 py-2.5 text-xs font-medium outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1.5">Contact Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-stone-800 rounded px-3 py-2.5 text-xs font-medium outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1.5">Property Interest</label>
                    <select className="w-full bg-stone-50 border border-stone-200 focus:border-amber-500 text-stone-700 rounded px-3 py-2.5 text-xs font-bold outline-none transition-all">
                      <option>General Investigation</option>
                      <option>The Obsidian Waterfront Villa</option>
                      <option>Lumina Sky Penthouse</option>
                      <option>The Azure Estate</option>
                      <option>Other Off-Market Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1.5">Bespoke Requirements</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Provide details regarding asset allocation goals, expected price spectrum, or timeline..."
                    className="w-full bg-stone-50 border border-stone-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 text-stone-800 rounded px-3 py-2.5 text-xs font-medium outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-stone-900 hover:bg-amber-600 text-white hover:text-stone-900 px-6 py-2.5 rounded font-bold uppercase text-xs tracking-widest flex items-center justify-center space-x-1.5 transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Dynamic map visual mockup */}
        <div className="bg-white border border-stone-200 rounded-lg overflow-hidden h-64 relative flex items-center justify-center shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
            alt="Office location mockup"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
          />
          <div className="relative z-10 text-center p-4">
            <MapPin className="w-10 h-10 text-amber-600 mx-auto mb-1 animate-bounce" />
            <h4 className="font-serif text-lg font-bold text-stone-900 mb-0.5">Global Gateway active</h4>
            <p className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Restricted secure mapping client active.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
