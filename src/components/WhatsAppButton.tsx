import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleChat = () => {
    // Standard international WhatsApp link format
    window.open('https://wa.me/15550002872?text=Hello,%20I%20am%20interested%20in%20viewing%20exclusive%20properties.', '_blank');
  };

  return (
    <button
      onClick={handleChat}
      className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-stone-100 p-4 rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] flex items-center justify-center transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
      title="Chat with Concierge"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-16 bg-stone-900 border border-stone-800 text-stone-100 text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
        Concierge Chat
      </span>
    </button>
  );
};
