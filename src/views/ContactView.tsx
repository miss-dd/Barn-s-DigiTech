import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { showToast } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Stock Inquiry');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Please provide your name and contact phone number');
      return;
    }

    const text = encodeURIComponent(
      `Hello Barn's DigiTech! 🇬🇭\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Subject:* ${subject}\n` +
      `*Message:* ${message || 'I have a sales inquiry regarding your electronics inventory.'}`
    );

    window.open(`https://wa.me/233502423799?text=${text}`, '_blank');
    showToast('Redirecting to WhatsApp sales concierge...', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header Banner */}
      <div className="bg-[#14213D] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full inline-block">
            Customer Support & Inquiries
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Contact Barn's DigiTech Ghana
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Need urgent device advice, stock confirmation, or delivery assistance in Accra? Reach our support team via telephone, WhatsApp, or visit our central showroom.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* WhatsApp Direct Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/80 rounded-3xl p-6 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[26px]">chat</span>
              </div>
              <div>
                <h3 className="font-extrabold text-base text-gray-900">WhatsApp Sales Desk</h3>
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Now • Instant Response
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              Chat directly with our showroom sales representatives for live product photos, battery health checks, and Mobile Money payment instructions.
            </p>

            <a
              href="https://wa.me/233502423799"
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Open WhatsApp (+233 50 242 3799)</span>
            </a>
          </div>

          {/* Phone Call Card */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Telephone Lines</h4>
                <p className="text-xs text-gray-500">Monday - Saturday: 8:30 AM - 7:00 PM</p>
              </div>
            </div>
            <div className="space-y-1.5 text-xs pt-1">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Primary Line:</span>
                <a href="tel:+233502423799" className="font-bold text-[#0066FF] hover:underline">
                  +233 (0) 50 242 3799
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Secondary Line:</span>
                <a href="tel:+233249901234" className="font-bold text-gray-800 hover:underline">
                  +233 (0) 24 990 1234
                </a>
              </div>
            </div>
          </div>

          {/* Showroom Location */}
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-900">Showroom Address</h4>
                <p className="text-xs text-gray-500">Accra Central Flagship</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Kwame Nkrumah Avenue, Opposite Rawlings Park (near Makola Gate 2), Accra Central, Ghana.
            </p>
            <div className="text-xs font-bold text-[#0066FF] bg-blue-50 px-2.5 py-1.5 rounded-lg inline-block">
              GPS Digital Address: GA-182-4521
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs space-y-5">
          <div className="pb-3 border-b border-gray-100">
            <h3 className="font-extrabold text-base text-[#14213D]">Send an Instant Inquiry</h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Fill in your details below to start a verified WhatsApp conversation with our Ghanaian sales team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kwame Boakye"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#0066FF]"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Ghana Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="050 XXX XXXX"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#0066FF]"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Subject</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#0066FF]"
              >
                <option value="Phone Stock & Pricing Inquiry">Phone Stock & Pricing Inquiry</option>
                <option value="Same-Day Greater Accra Delivery">Same-Day Greater Accra Delivery</option>
                <option value="Device Warranty Claim / Repair">Device Warranty Claim / Repair</option>
                <option value="Corporate / Wholesale Order">Corporate / Wholesale Order</option>
                <option value="Showroom Test-Bench Appointment">Showroom Test-Bench Appointment</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-1">Your Message or Device Specs Needed</label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention the phone model, storage capacity, or specific question..."
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#0066FF]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#14213D] hover:bg-[#1f315a] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp (+233 50 242 3799)</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
