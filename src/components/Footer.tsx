import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from './Logo';
import {
  ShieldCheck,
  Truck,
  RotateCcw,
  Headphones,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <footer className="bg-[#14213D] text-gray-300 pt-16 pb-12 border-t border-gray-800">
      {/* Top Value Propositions Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 border-b border-gray-800/80">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-blue-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">100% Genuine & NCA Cleared</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Every smartphone and computer has valid Ghanaian NCA authorization and 12-month manufacturer backing.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-emerald-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Same-Day Express Dispatch</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Direct courier delivery within 2 to 4 hours across Accra & Tema. 24-48 hours via VIP/EMS nationwide.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-amber-400">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Showroom Pickup</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Collect in person with test-bench verification at our Accra Central store opposite Rawlings Park.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-purple-400">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">WhatsApp Sales & Support</h4>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Speak directly with certified technicians for trade-in valuation, specs advice, and dispatch updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer" onClick={() => navigateTo('home')}>
              <Logo theme="dark" size="md" />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Barn's DigiTech is Ghana's verified electronics retail provider. We distribute genuine Apple, Samsung, Google, Dell, and Anker devices with real localized warranties and zero counterfeit tolerance.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Kwame Nkrumah Avenue, Opposite Rawlings Park, Accra Central, Ghana</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+233502423799" className="hover:text-white font-medium">
                  +233 (0) 50 242 3799 / +233 (0) 24 990 1234
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-emerald-400 text-[18px]">chat</span>
                <a
                  href="https://wa.me/233502423799"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white font-semibold text-emerald-400"
                >
                  WhatsApp: +233 50 242 3799
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>sales@barnsdigitech.com.gh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                <span>Monday - Saturday: 8:30 AM - 7:00 PM | Sunday: 1:00 PM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Catalog Categories */}
          <div>
            <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wider text-xs">Categories</h5>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => navigateTo('smartphones')}
                  className="hover:text-white transition-colors"
                >
                  Flagship Smartphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('laptops')}
                  className="hover:text-white transition-colors"
                >
                  MacBooks & Windows Laptops
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('catalog')}
                  className="hover:text-white transition-colors"
                >
                  iPads & Android Tablets
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('catalog')}
                  className="hover:text-white transition-colors"
                >
                  High-Speed Anker Chargers
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('catalog')}
                  className="hover:text-white transition-colors"
                >
                  Wearables & Smartwatches
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('deals')}
                  className="hover:text-amber-400 text-amber-300 font-medium transition-colors"
                >
                  Weekly Flash Deals 🔥
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wider text-xs">Customer Care</h5>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => navigateTo('track')}
                  className="hover:text-white text-blue-300 font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Track Your Order</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('warranty')}
                  className="hover:text-white transition-colors"
                >
                  Verify Device Warranty & IMEI
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('faq')}
                  className="hover:text-white transition-colors"
                >
                  Delivery Rates & Timelines
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-white transition-colors"
                >
                  About Barn's DigiTech
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('showrooms')}
                  className="hover:text-white transition-colors"
                >
                  Showroom Test-Bench Testing
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/233502423799"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-semibold"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  WhatsApp Concierge (+233 50 242 3799)
                </a>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & Payment Methods */}
          <div>
            <h5 className="text-white font-bold text-sm mb-4 uppercase tracking-wider text-xs">Pickup Hubs</h5>
            <ul className="space-y-2 text-xs text-gray-400 mb-6">
              <li className="font-medium text-gray-300">
                • Accra Central: Kwame Nkrumah Ave
              </li>
              <li>• Kumasi Hub: Adum Post Office Rd</li>
              <li>• Takoradi: Market Circle Hub</li>
              <li>• Tamale: Hospital Road Courier Point</li>
            </ul>

            <h5 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Accepted Payments</h5>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-gray-300">
              <span className="bg-white/10 px-2 py-1 rounded font-semibold text-amber-300">MTN MoMo</span>
              <span className="bg-white/10 px-2 py-1 rounded font-semibold text-red-300">Telecel Cash</span>
              <span className="bg-white/10 px-2 py-1 rounded font-semibold text-blue-300">Visa / Master</span>
              <span className="bg-white/10 px-2 py-1 rounded font-semibold text-emerald-300">Pay on Pickup</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div>
          © {new Date().getFullYear()} Barn's DigiTech Ghana Ltd. All rights reserved. Registered under the Registrar General's Dept & NCA Ghana.
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={() => navigateTo('warranty')} className="hover:text-gray-300">Privacy Policy</button>
          <span>•</span>
          <button onClick={() => navigateTo('faq')} className="hover:text-gray-300">Terms of Warranty</button>
          <span>•</span>
          <button onClick={() => navigateTo('showrooms')} className="hover:text-gray-300">Showroom Locations</button>
        </div>
      </div>
    </footer>
  );
};
