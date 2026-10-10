import React from 'react';
import { useApp } from '../context/AppContext';
import { Logo } from '../components/Logo';
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  Truck,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  ArrowRight
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      {/* Hero Banner */}
      <div className="bg-[#14213D] rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="flex justify-center mb-2">
            <Logo variant="stacked" theme="dark" size="lg" />
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Ghana's Trusted Destination for <br />
            <span className="text-[#0066FF]">Genuine Retail Electronics</span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Founded with a commitment to authenticity and transparency, Barn's DigiTech delivers factory-sealed smartphones, computing hardware, and accessories backed by localized warranties and National Communications Authority clearance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigateTo('smartphones')}
              className="px-6 py-3 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all"
            >
              Explore Device Catalog
            </button>
            <a
              href="https://wa.me/233502423799"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Sales Desk (+233 50 242 3799)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#14213D]">100% Zero-Counterfeit Policy</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Every Apple, Samsung, Google, Dell, and Anker unit imported through our supply chain is verified for Ghanaian telecommunication bands and factory-sealed authenticity.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#14213D]">12-Month Localized Warranty</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            We don't just sell electronics; we stand by them. Our in-house diagnostics and certified technicians handle repairs and warranty claims directly at our Accra showroom.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-[#14213D]">In-Person Test Bench</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Visit our physical store opposite Rawlings Park in Accra Central to inspect screens, camera sensors, and battery health before making payment.
          </p>
        </div>
      </div>

      {/* Showroom & Contact Bar */}
      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200/70 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h4 className="font-bold text-base text-[#14213D]">Looking for Corporate or Wholesale Procurement?</h4>
          <p className="text-xs text-gray-600">
            We supply educational institutions, IT firms, and retail organizations across Greater Accra and nationwide.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateTo('contact')}
            className="px-5 py-2.5 bg-[#14213D] hover:bg-[#1f315a] text-white text-xs font-bold rounded-xl"
          >
            Contact Business Desk
          </button>
          <a
            href="https://wa.me/233502423799"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-xl flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp Rep</span>
          </a>
        </div>
      </div>
    </div>
  );
};
