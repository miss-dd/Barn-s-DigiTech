import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink, ShieldCheck } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const directPhone = '233502423799';
  const defaultText = encodeURIComponent(
    "Hello Barn's DigiTech! I'm browsing your online store and have questions about phone availability and delivery in Accra."
  );

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 animate-in slide-in-from-bottom-3 fade-in duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 leading-tight">DigiTech Tech Concierge</h4>
                <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online Now • Accra Hub
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
            Need urgent delivery, stock confirmation, or payment assistance via MTN Mobile Money? Chat with our team now.
          </p>

          <div className="mt-3 bg-gray-50 p-2.5 rounded-xl text-[11px] text-gray-600 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Official Barn's DigiTech WhatsApp Business (+233 50 242 3799)</span>
          </div>

          <a
            href={`https://wa.me/${directPhone}?text=${defaultText}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 w-full py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span>Start WhatsApp Chat</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-xs"
        aria-label="Open WhatsApp Chat Support"
      >
        <span className="material-symbols-outlined text-[22px]">chat</span>
        <span className="hidden sm:inline">WhatsApp Sales</span>
      </button>
    </div>
  );
};
