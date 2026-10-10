import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  HelpCircle,
  ChevronDown,
  Truck,
  ShieldCheck,
  CreditCard,
  Building2,
  ArrowRight,
  PhoneCall,
  Search
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'delivery' | 'warranty' | 'payments' | 'showroom';
}

const FAQ_DATA: FaqItem[] = [
  {
    category: 'delivery',
    question: 'How fast is delivery within Greater Accra (East Legon, Osu, Spintex, Airport)?',
    answer: 'Same-day express courier delivery takes between 2 to 4 hours for orders confirmed before 3:00 PM. Our dedicated dispatch riders cover all areas including East Legon, Cantonments, Airport Residential, Osu, Dansoman, Madina, and Tema.'
  },
  {
    category: 'delivery',
    question: 'Do you deliver outside Accra to Kumasi, Takoradi, Sunyani, and Tamale?',
    answer: 'Yes! We dispatch nationwide via VIP Express bus parcels and certified EMS / FedEx Ghana couriers. Regional deliveries typically arrive within 24 to 48 hours with SMS tracking.'
  },
  {
    category: 'delivery',
    question: 'What are the delivery fees across Ghana?',
    answer: 'Delivery is completely FREE for all orders over GH₵ 5,000. Standard Greater Accra delivery is GH₵ 35 to GH₵ 45, and regional parcels to Kumasi, Takoradi, and Tamale range from GH₵ 60 to GH₵ 80.'
  },
  {
    category: 'warranty',
    question: 'Are all devices brand new and cleared by the National Communications Authority (NCA)?',
    answer: 'Absolutely. Every smartphone and laptop sold by Barn\'s DigiTech is 100% brand new, factory sealed, and approved by the National Communications Authority (NCA). We provide an official receipt with localized IMEI certification.'
  },
  {
    category: 'warranty',
    question: 'What does the 12-Month Official Warranty cover?',
    answer: 'Our warranty covers internal motherboard hardware, camera modules, sensors, charging ports, and manufacturer defects. It includes a 7-day instant replacement swap policy for any out-of-box fault.'
  },
  {
    category: 'warranty',
    question: 'Can I verify the IMEI on Apple or Samsung official websites before unboxing?',
    answer: 'Yes! You are welcome to verify the serial number on the manufacturer portal (checkcoverage.apple.com or samsung.com) and through our online IMEI portal before or during unboxing.'
  },
  {
    category: 'payments',
    question: 'What payment methods do you accept?',
    answer: 'We accept MTN Mobile Money (MoMo), Telecel Cash, Visa, Mastercard, and GhIPSS Instant Pay. You can also pay with cash or Mobile Money upon in-person pickup at our Accra Central showroom.'
  },
  {
    category: 'payments',
    question: 'Is there any extra surcharge for paying with MTN Mobile Money?',
    answer: 'No! There is 0% processing surcharge for Mobile Money payments. You pay the exact GH₵ amount stated on your order invoice.'
  },
  {
    category: 'showroom',
    question: 'Where is your physical showroom located in Accra?',
    answer: 'Our flagship showroom is located on Kwame Nkrumah Avenue, directly opposite Rawlings Park (near Makola), Accra Central. Our digital address is GA-182-4521.'
  },
  {
    category: 'showroom',
    question: 'Can I inspect and test the device before taking it home?',
    answer: 'Yes! We have a dedicated customer test bench equipped with high-speed Wi-Fi, diagnostic tools, and free showroom screen protector installation.'
  }
];

export const FaqView: React.FC = () => {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'delivery' | 'warranty' | 'payments' | 'showroom'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQ_DATA.filter(faq => {
    if (activeTab !== 'all' && faq.category !== activeTab) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Header */}
      <div className="bg-[#14213D] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full inline-block">
            Customer Support & Policies
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions & Delivery Policies
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Everything you need to know about purchasing authentic electronics in Ghana, localized warranty coverage, delivery times, and payment methods.
          </p>
        </div>
      </div>

      {/* Bento Highlights Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3">
          <Truck className="w-6 h-6 text-[#1677FF] shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-gray-900">Same-Day Accra Dispatch</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">2-4 hrs across Greater Accra</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-gray-900">12 Months Warranty</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">National Communications Auth cleared</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3">
          <CreditCard className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-gray-900">MTN MoMo & Telecel</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">Zero extra surcharge fee</p>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3">
          <Building2 className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-xs sm:text-sm text-gray-900">Accra Showroom Pickup</h4>
            <p className="text-[11px] text-gray-500 mt-0.5">Opp. Rawlings Park / Makola</p>
          </div>
        </div>
      </div>

      {/* Search & Tabs */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-1 scrollbar-none text-xs font-semibold">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-xl transition-colors ${
                activeTab === 'all'
                  ? 'bg-[#14213D] text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setActiveTab('delivery')}
              className={`px-3.5 py-2 rounded-xl transition-colors ${
                activeTab === 'delivery'
                  ? 'bg-[#14213D] text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              Delivery & Dispatch
            </button>
            <button
              onClick={() => setActiveTab('warranty')}
              className={`px-3.5 py-2 rounded-xl transition-colors ${
                activeTab === 'warranty'
                  ? 'bg-[#14213D] text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              NCA & Warranty
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`px-3.5 py-2 rounded-xl transition-colors ${
                activeTab === 'payments'
                  ? 'bg-[#14213D] text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              Mobile Money & Payment
            </button>
            <button
              onClick={() => setActiveTab('showroom')}
              className={`px-3.5 py-2 rounded-xl transition-colors ${
                activeTab === 'showroom'
                  ? 'bg-[#14213D] text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              Showroom & Testing
            </button>
          </div>

          {/* Search FAQ */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search policies..."
              className="w-full pl-8 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-bold text-xs sm:text-sm text-[#14213D]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#1677FF]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Still Have Questions Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#14213D]">
            Have a question about a specific device or trade-in?
          </h3>
          <p className="text-xs text-gray-600 mt-1 max-w-lg">
            Our technical support team is online on WhatsApp to answer questions regarding specs, serial validation, and dispatch time.
          </p>
        </div>
        <a
          href="https://wa.me/233558329911"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2 whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
