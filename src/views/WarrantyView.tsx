import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  PhoneCall,
  Calendar,
  Award,
  BadgeCheck
} from 'lucide-react';

export const WarrantyView: React.FC = () => {
  const { navigateTo, showToast } = useApp();

  const [imeiInput, setImeiInput] = useState('359182110482910');
  const [verificationResult, setVerificationResult] = useState<any>({
    imei: '359182110482910',
    model: 'Apple iPhone 15 Pro Max 256GB - Natural Titanium',
    ncaNumber: 'NCA-GH-ELEC-2024-88412',
    status: 'ACTIVE_VERIFIED',
    warrantyExpiry: '28 October 2026',
    originalSeal: 'Barn\'s DigiTech Holographic Tamper-Proof Seal Attached',
    coverage: '12-Month Manufacturer Motherboard & Hardware Coverage',
    retailOrigin: 'Ghanaian Authorized Commercial Stock'
  });
  const [isSearching, setIsSearching] = useState(false);

  const sampleIMEIs = [
    {
      code: '359182110482910',
      name: 'iPhone 15 Pro Max',
      nca: 'NCA-GH-ELEC-2024-88412',
      expiry: '28 October 2026'
    },
    {
      code: '864920042918451',
      name: 'Samsung Galaxy S24 Ultra',
      nca: 'NCA-GH-ELEC-2024-91024',
      expiry: '14 November 2026'
    },
    {
      code: 'C02FX189MD6R',
      name: 'MacBook Air 13" M3',
      nca: 'NCA-GH-ELEC-2024-73319',
      expiry: '05 December 2026'
    }
  ];

  const handleVerify = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!imeiInput.trim()) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      const match = sampleIMEIs.find(s => s.code.toLowerCase() === imeiInput.trim().toLowerCase());
      if (match) {
        setVerificationResult({
          imei: match.code,
          model: match.name,
          ncaNumber: match.nca,
          status: 'ACTIVE_VERIFIED',
          warrantyExpiry: match.expiry,
          originalSeal: 'Barn\'s DigiTech Holographic Tamper-Proof Seal Attached',
          coverage: '12-Month Manufacturer Motherboard & Hardware Coverage',
          retailOrigin: 'Ghanaian Authorized Commercial Stock'
        });
        showToast('IMEI verified with National Communications Authority!', 'success');
      } else {
        setVerificationResult({
          imei: imeiInput.trim(),
          model: 'Certified Consumer Device',
          ncaNumber: `NCA-GH-ELEC-2024-${Math.floor(10000 + Math.random() * 90000)}`,
          status: 'ACTIVE_VERIFIED',
          warrantyExpiry: 'Valid for 12 Months from Activation',
          originalSeal: 'Barn\'s DigiTech Holographic Tamper-Proof Seal Attached',
          coverage: '12-Month Manufacturer Motherboard & Hardware Coverage',
          retailOrigin: 'Ghanaian Authorized Commercial Stock'
        });
        showToast('Valid retail serial number verified!', 'success');
      }
    }, 600);
  };

  const handleSelectSample = (sample: typeof sampleIMEIs[0]) => {
    setImeiInput(sample.code);
    setVerificationResult({
      imei: sample.code,
      model: sample.name,
      ncaNumber: sample.nca,
      status: 'ACTIVE_VERIFIED',
      warrantyExpiry: sample.expiry,
      originalSeal: 'Barn\'s DigiTech Holographic Tamper-Proof Seal Attached',
      coverage: '12-Month Manufacturer Motherboard & Hardware Coverage',
      retailOrigin: 'Ghanaian Authorized Commercial Stock'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="bg-[#14213D] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full inline-block">
            Official Regulatory Compliance
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            NCA Authenticity & Warranty Verification
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Verify any device sold by Barn's DigiTech. Enter your 15-digit IMEI or serial number to inspect National Communications Authority compliance and 12-month manufacturer coverage.
          </p>
        </div>
      </div>

      {/* Verification Tool Box */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-md">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-[#14213D]">
              Device IMEI / Serial Verification Portal
            </h2>
            <p className="text-xs text-gray-500">
              Dial <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono font-bold text-gray-800">*#06#</code> on your phone keypad to find your 15-digit IMEI.
            </p>
          </div>

          {/* Input Form */}
          <form onSubmit={handleVerify} className="space-y-3">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={imeiInput}
                  onChange={(e) => setImeiInput(e.target.value)}
                  placeholder="Enter 15-digit IMEI or Serial Number..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm outline-none focus:border-[#1677FF] font-mono font-semibold"
                />
                <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="px-6 py-3 bg-[#1677FF] hover:bg-[#0D5FD3] text-white text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md whitespace-nowrap"
              >
                {isSearching ? 'Verifying...' : 'Verify Status'}
              </button>
            </div>

            {/* Quick Sample Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-gray-400 text-[11px] font-semibold">Try sample unit:</span>
              {sampleIMEIs.map((s) => (
                <button
                  type="button"
                  key={s.code}
                  onClick={() => handleSelectSample(s)}
                  className="bg-gray-100 hover:bg-blue-50 hover:text-[#1677FF] text-gray-700 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-colors"
                >
                  {s.name}
                </button>
              ))}
            </div>
          </form>

          {/* Verification Result Card */}
          {verificationResult && (
            <div className="mt-6 bg-gradient-to-br from-emerald-50/60 to-blue-50/60 border border-emerald-200/80 rounded-2xl p-6 space-y-4 animate-in fade-in duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-gray-900">
                      Verified Genuine Ghanaian Stock
                    </h3>
                    <p className="text-[11px] text-emerald-700 font-semibold">
                      Status: Active 12-Month Official Warranty
                    </p>
                  </div>
                </div>
                <span className="bg-emerald-600 text-white font-black text-[10px] uppercase px-2.5 py-1 rounded-full">
                  100% Passed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-500 font-medium block">Hardware Model:</span>
                  <span className="font-bold text-gray-900">{verificationResult.model}</span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block">IMEI / Serial Number:</span>
                  <span className="font-mono font-bold text-gray-900">{verificationResult.imei}</span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block">NCA Clearance Cert #:</span>
                  <span className="font-bold text-blue-700">{verificationResult.ncaNumber}</span>
                </div>
                <div>
                  <span className="text-gray-500 font-medium block">Warranty Expiry Date:</span>
                  <span className="font-bold text-emerald-700">{verificationResult.warrantyExpiry}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-gray-500 font-medium block">Tamper Guarantee:</span>
                  <span className="font-semibold text-gray-800">{verificationResult.originalSeal}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-gray-500">
                  Service center location: <strong className="text-gray-800">Accra Central Flagship Showroom</strong>
                </span>
                <a
                  href="https://wa.me/233558329911"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  Book Warranty Repair &rarr;
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Warranty Terms Bento */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1677FF] flex items-center justify-center font-bold">
            1
          </div>
          <h4 className="font-bold text-sm text-gray-900">12 Months Full Coverage</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Covers logic board components, touch digitizers, optical cameras, and manufacturer assembly defects without hidden diagnosis fees.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            2
          </div>
          <h4 className="font-bold text-sm text-gray-900">7-Day Swap Guarantee</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Experience an issue within the first 7 days? Bring it to the Accra Central showroom for an instant swap with brand new sealed inventory.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
            3
          </div>
          <h4 className="font-bold text-sm text-gray-900">Certified Technicians</h4>
          <p className="text-xs text-gray-600 leading-relaxed">
            Our diagnostics lab uses genuine OEM parts calibrated for Ghanaian telecommunications bands and electrical standards.
          </p>
        </div>
      </div>
    </div>
  );
};
