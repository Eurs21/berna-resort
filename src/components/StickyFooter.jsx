import React from 'react';
import { Phone } from 'lucide-react';

const StickyFooterCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 p-3 flex gap-3 shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      {/* Primary: Direct Phone Call */}
      <a 
        href="tel:+639234426802" 
        className="flex-1 bg-white border-2 border-[#0077B6] text-[#0077B6] py-3 rounded-lg flex items-center justify-center gap-2 font-bold active:scale-95 transition-transform"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>

      {/* Secondary: Lead Form / Inquire */}
      <button 
        className="flex-1 bg-[#0077B6] text-white py-3 rounded-lg flex items-center justify-center gap-2 font-bold shadow-lg active:scale-95 transition-transform"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Inquire Now
      </button>
    </div>
  );
};
export default StickyFooterCTA;