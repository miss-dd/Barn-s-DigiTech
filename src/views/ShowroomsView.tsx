import React from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Navigation,
  Building2,
  ArrowRight
} from 'lucide-react';

export const ShowroomsView: React.FC = () => {
  const { navigateTo } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header Banner */}
      <div className="bg-[#14213D] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full inline-block">
            Physical Showrooms & Regional Dispatch Hubs
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Visit Our Showroom in Accra Central
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Experience devices hands-on before purchase. Our Accra Central flagship store features dedicated unboxing test benches, certified technicians, and instant in-person pickup.
          </p>
        </div>
      </div>

      {/* Flagship Showroom Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="bg-blue-50 text-[#1677FF] font-black text-xs px-2.5 py-1 rounded-lg uppercase">
                Primary Flagship Showroom
              </span>
              <span className="bg-emerald-50 text-emerald-700 font-bold text-xs px-2.5 py-1 rounded-lg flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Open Today until 7:00 PM
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14213D]">
              Accra Central Showroom & Test Bench
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Physical Address:</div>
                  <p className="text-gray-600">
                    Barn's DigiTech, Kwame Nkrumah Avenue, Opposite Rawlings Park / Makola Area, Accra Central, Ghana
                  </p>
                  <p className="text-blue-600 font-bold mt-0.5 text-xs">
                    Ghana Post Digital Address: GA-182-4521
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Operating Hours:</div>
                  <p className="text-gray-600">Monday – Saturday: 8:30 AM – 7:00 PM</p>
                  <p className="text-gray-600">Sunday: 1:00 PM – 6:00 PM (Express pickups only)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gray-900">Direct Telephone & WhatsApp:</div>
                  <p className="text-gray-600 font-medium">
                    +233 (0) 55 832 9911 / +233 (0) 24 990 1234
                  </p>
                </div>
              </div>
            </div>

            {/* Test Bench Benefits */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 space-y-2">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                What You Can Do At Our Showroom:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Test screen & cameras live</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Free screen protector fitting</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verify IMEI on official portals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Trade-in inspection on the spot</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=Rawlings+Park+Accra+Central+Ghana"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-[#14213D] hover:bg-[#1f315a] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href="https://wa.me/233558329911"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Chat with Showroom Rep</span>
              </a>
            </div>
          </div>

          {/* Interactive Visual Map Card */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-blue-900 to-[#14213D] rounded-3xl p-6 text-white text-center relative overflow-hidden shadow-xl min-h-[340px] flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-amber-300">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-lg">Accra Central Hub</h3>
              <p className="text-xs text-blue-200">Opposite Rawlings Park & Makola Gate 2</p>
            </div>

            <div className="my-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-xs text-left space-y-2">
              <div className="flex items-center justify-between font-bold">
                <span>Parking Available:</span>
                <span className="text-emerald-300">Yes (Rawlings Park Yard)</span>
              </div>
              <div className="flex items-center justify-between font-bold">
                <span>Public Transit:</span>
                <span className="text-blue-200">Rawlings Park Trotro Station</span>
              </div>
              <div className="flex items-center justify-between font-bold">
                <span>Average Collection Time:</span>
                <span className="text-amber-300">Under 10 minutes</span>
              </div>
            </div>

            <button
              onClick={() => navigateTo('smartphones')}
              className="w-full py-3 bg-white text-[#14213D] font-extrabold text-xs rounded-xl hover:bg-gray-100 transition-colors"
            >
              Reserve an Item for Pickup
            </button>
          </div>
        </div>
      </div>

      {/* Regional Courier & Dispatch Network */}
      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-[#14213D]">
          Regional Pickup Hubs & Dispatch Offices
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
            <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              Ashanti Region
            </span>
            <h4 className="font-extrabold text-base text-gray-900">Kumasi Adum Hub</h4>
            <p className="text-xs text-gray-600">
              Post Office Road, Adum Central Commercial District, Kumasi.
            </p>
            <div className="text-xs text-gray-500 pt-2 border-t border-gray-100 space-y-1">
              <div>• Next-day dispatch via VIP bus parcel</div>
              <div>• Collection hours: 9:00 AM – 5:30 PM</div>
              <div className="font-bold text-gray-800">• Contact: +233 (0) 55 832 9912</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
            <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              Western Region
            </span>
            <h4 className="font-extrabold text-base text-gray-900">Takoradi Hub</h4>
            <p className="text-xs text-gray-600">
              Market Circle Commercial Wing, Takoradi.
            </p>
            <div className="text-xs text-gray-500 pt-2 border-t border-gray-100 space-y-1">
              <div>• Next-day secure courier dispatch</div>
              <div>• Collection hours: 9:00 AM – 5:00 PM</div>
              <div className="font-bold text-gray-800">• Contact: +233 (0) 55 832 9913</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-3">
            <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              Nationwide Courier
            </span>
            <h4 className="font-extrabold text-base text-gray-900">FedEx & EMS Ghana</h4>
            <p className="text-xs text-gray-600">
              Tamale, Sunyani, Ho, Cape Coast & Bolgatanga.
            </p>
            <div className="text-xs text-gray-500 pt-2 border-t border-gray-100 space-y-1">
              <div>• Trackable tracking number issued via SMS</div>
              <div>• Delivery timeline: 24 to 48 hours</div>
              <div className="font-bold text-gray-800">• Standard fee: GH₵ 60 - GH₵ 80</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
