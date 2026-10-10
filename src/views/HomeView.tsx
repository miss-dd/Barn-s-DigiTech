import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, HARDWARE_CATEGORIES, AUTHORIZED_BRANDS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  ShieldCheck,
  Truck,
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2,
  ChevronRight,
  Flame,
  Award,
  Zap,
  Building2,
  BadgeCheck,
  Star
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { navigateTo } = useApp();

  // Flash deals countdown timer (12h 45m 18s countdown)
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 44, seconds: 39 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [activeTab, setActiveTab] = useState<'all' | 'smartphones' | 'laptops' | 'accessories'>('all');

  const flashDeals = PRODUCTS.filter(p => p.originalPrice !== undefined).slice(0, 4);

  const filteredFeatured = PRODUCTS.filter(p => {
    if (activeTab === 'all') return p.isFeatured;
    return p.category === activeTab;
  }).slice(0, 8);

  const heroPhone = PRODUCTS.find(p => p.id === 'iphone-15-pro-max') || PRODUCTS[0];

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#14213D] via-[#1a2b50] to-[#0D5FD3] text-white">
        {/* Subtle patterned background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300 border border-white/15">
                <BadgeCheck className="w-4 h-4 text-amber-300" />
                <span>100% Genuine Electronics • Official NCA Certified Stock</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Premium Tech, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-amber-200 to-white">
                  Real Ghanaian Warranties.
                </span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Ghana's trusted destination for flagship iPhones, Galaxy S24, M3 MacBooks, and high-speed Anker charging ecosystems. Shop with verified IMEI authenticity and same-day Greater Accra dispatch.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => navigateTo('smartphones')}
                  className="px-6 py-3.5 bg-[#1677FF] hover:bg-[#0D5FD3] text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:scale-102"
                >
                  <span>Shop Flagship Smartphones</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/233558329911"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition-all hover:scale-102"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Instant Order</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs">
                <div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300">12 Mo.</div>
                  <div className="text-gray-300 text-[11px] font-medium">Manufacturer Warranty</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-blue-300">Same-Day</div>
                  <div className="text-gray-300 text-[11px] font-medium">Accra & Tema Dispatch</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-300">100%</div>
                  <div className="text-gray-300 text-[11px] font-medium">NCA Approved Stock</div>
                </div>
              </div>
            </div>

            {/* Right Hero Product Card / Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl relative">
                <div className="absolute top-4 right-4 bg-amber-400 text-[#14213D] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Spotlight Deal
                </div>

                <div className="aspect-square bg-gradient-to-tr from-white/10 to-transparent rounded-2xl flex items-center justify-center p-6 mb-4">
                  <img
                    src={heroPhone.image}
                    alt={heroPhone.name}
                    className="max-h-full max-w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                    Featured Flagship
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    {heroPhone.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-300 mt-1">
                    <span>A17 Pro Titanium</span>
                    <span>•</span>
                    <span>256GB Dual SIM</span>
                    <span>•</span>
                    <span className="text-emerald-300 font-semibold">Ready in Accra</span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-gray-300">Showroom Price</div>
                      <div className="text-2xl font-black text-white">
                        GH₵ {heroPhone.price.toLocaleString()}
                      </div>
                    </div>
                    <button
                      onClick={() => navigateTo('product-detail', heroPhone)}
                      className="px-4 py-2.5 bg-white text-[#14213D] hover:bg-gray-100 font-bold text-xs rounded-xl shadow transition-colors flex items-center gap-1.5"
                    >
                      <span>View Specs</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorized Brand Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs">
          <div className="text-center text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
            Authorized Genuine Retail & Official Distribution Partners
          </div>
          <div className="flex flex-wrap items-center justify-around gap-6 sm:gap-10">
            {AUTHORIZED_BRANDS.map(brand => (
              <span
                key={brand}
                className="font-extrabold text-base sm:text-xl text-gray-400 hover:text-[#14213D] transition-colors cursor-pointer"
                onClick={() => navigateTo('catalog')}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Flash Deals Section with Countdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-blue-500/10 border border-rose-200/60 rounded-3xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 uppercase tracking-wider">
                <Flame className="w-4 h-4 fill-rose-500 text-rose-500" />
                <span>Limited Stock Promotional Deals</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14213D]">
                Weekly Flash Deals
              </h2>
              <p className="text-xs text-gray-600">
                Exclusive discounts with guaranteed same-day collection at our Accra showroom.
              </p>
            </div>

            {/* Countdown Clock */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-600 mr-1 flex items-center gap-1">
                <Clock className="w-4 h-4 text-rose-500" />
                Ends In:
              </span>
              <div className="flex items-center gap-1 font-mono font-bold text-white text-sm">
                <div className="bg-[#14213D] px-2.5 py-1.5 rounded-lg shadow-xs min-w-[2.2rem] text-center">
                  {String(timeLeft.hours).padStart(2, '0')}
                  <span className="block text-[9px] font-sans font-normal text-gray-300">HRS</span>
                </div>
                <span className="text-[#14213D] font-black">:</span>
                <div className="bg-[#14213D] px-2.5 py-1.5 rounded-lg shadow-xs min-w-[2.2rem] text-center">
                  {String(timeLeft.minutes).padStart(2, '0')}
                  <span className="block text-[9px] font-sans font-normal text-gray-300">MIN</span>
                </div>
                <span className="text-[#14213D] font-black">:</span>
                <div className="bg-[#14213D] px-2.5 py-1.5 rounded-lg shadow-xs min-w-[2.2rem] text-center">
                  {String(timeLeft.seconds).padStart(2, '0')}
                  <span className="block text-[9px] font-sans font-normal text-gray-300">SEC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flash Deals Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashDeals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigateTo('deals')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#1677FF] hover:text-[#0D5FD3] bg-white px-5 py-2.5 rounded-xl border border-blue-200 shadow-xs hover:shadow transition-all"
            >
              <span>View All 14 Weekly Flash Deals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Hardware Category Badges Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D]">
              Explore by Category
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Original hardware backed by manufacturer warranties
            </p>
          </div>
          <button
            onClick={() => navigateTo('catalog')}
            className="text-xs font-bold text-[#1677FF] hover:underline flex items-center gap-1"
          >
            <span>All Categories</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
          {HARDWARE_CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => {
                if (category.id === 'smartphones') navigateTo('smartphones');
                else if (category.id === 'laptops') navigateTo('laptops');
                else navigateTo('catalog');
              }}
              className="bg-white hover:bg-blue-50/70 p-4 rounded-2xl border border-gray-100 hover:border-blue-200 shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between group"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-[#1677FF] text-[#14213D] group-hover:text-white flex items-center justify-center transition-colors mb-3">
                <span className="material-symbols-outlined text-[22px]">{category.icon}</span>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#1677FF] transition-colors leading-tight">
                  {category.name}
                </h4>
                <p className="text-[11px] text-gray-400 mt-1">{category.count}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Bestsellers with Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D]">
              Ghanaian Bestsellers
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Verified in stock at Accra Central & Kumasi hubs
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-[#14213D] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Top Sellers
            </button>
            <button
              onClick={() => setActiveTab('smartphones')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'smartphones'
                  ? 'bg-white text-[#14213D] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Phones
            </button>
            <button
              onClick={() => setActiveTab('laptops')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'laptops'
                  ? 'bg-white text-[#14213D] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Laptops
            </button>
            <button
              onClick={() => setActiveTab('accessories')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                activeTab === 'accessories'
                  ? 'bg-white text-[#14213D] shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Accessories
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFeatured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Authenticity Bento & Showroom Confidence Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#14213D] text-white rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <span className="inline-block text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
              Verified Retail Guarantee
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Buy with 100% Peace of Mind in Ghana
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
              We eliminate the fear of counterfeit and refurbished electronics. Every smartphone, laptop, and charger is cleared and validated through strict regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <ShieldCheck className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-base text-white">NCA Authorized & IMEI Verification</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                National Communications Authority cleared devices with full access to our instant online IMEI and Serial warranty check tool.
              </p>
              <button
                onClick={() => navigateTo('warranty')}
                className="mt-4 text-xs font-bold text-blue-300 hover:text-white flex items-center gap-1"
              >
                <span>Verify IMEI Tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <Building2 className="w-8 h-8 text-amber-400 mb-3" />
              <h3 className="font-bold text-base text-white">Accra Central Test Bench</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Visit our physical showroom opposite Rawlings Park. Test screen responsiveness, cameras, and battery diagnostics before unboxing.
              </p>
              <button
                onClick={() => navigateTo('showrooms')}
                className="mt-4 text-xs font-bold text-amber-300 hover:text-white flex items-center gap-1"
              >
                <span>Showroom Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
              <Zap className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="font-bold text-base text-white">MTN MoMo & Telecel Cash</h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Pay directly with local mobile money wallets or pay on showroom collection. No hidden credit card foreign exchange fees.
              </p>
              <button
                onClick={() => navigateTo('cart')}
                className="mt-4 text-xs font-bold text-emerald-300 hover:text-white flex items-center gap-1"
              >
                <span>Cart & Mobile Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ghanaian Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#14213D]">
            What Tech Buyers in Ghana Say
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Over 2,400+ verified customer deliveries completed across Greater Accra, Ashanti, and Western regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-gray-700 leading-relaxed italic">
              "Ordered my iPhone 15 Pro Max 256GB at 11 AM via their WhatsApp line. Courier delivered to my office in Ridge by 1:30 PM with receipt and verified Apple 1-year coverage."
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-900">Kojo Mensah</h4>
                <p className="text-[11px] text-gray-500">Ridge, Accra</p>
              </div>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded">
                Verified Buyer
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-gray-700 leading-relaxed italic">
              "Walked into the Accra Central showroom opposite Rawlings Park to buy the M3 MacBook Air. Staff unboxed and tested everything right in front of me. Unbeatable transparency!"
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-900">Naa Ashorkor</h4>
                <p className="text-[11px] text-gray-500">Cantonments, Accra</p>
              </div>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded">
                Store Pickup
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
            <div className="flex items-center gap-1 text-amber-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-gray-700 leading-relaxed italic">
              "Sent to Kumasi via VIP bus dispatch within 24 hours. The packaging had bubble wrap and tamper seals. Galaxy S24 Ultra was brand new and factory sealed."
            </p>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-gray-900">Dr. Emmanuel Boakye</h4>
                <p className="text-[11px] text-gray-500">Adum, Kumasi</p>
              </div>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded">
                Nationwide Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Restock Notification Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[#14213D]">
              Never Miss a Flagship Restock or Flash Discount
            </h3>
            <p className="text-xs text-gray-600 max-w-lg">
              Get notified immediately when new shipments of Apple, Samsung, and Anker inventory arrive at the Accra hub.
            </p>
          </div>
          <div className="w-full md:w-auto flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter phone or email..."
              className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-xs outline-none focus:border-[#1677FF] w-full sm:w-64"
            />
            <button
              onClick={() => alert("Thank you! You have been subscribed for Barn's DigiTech stock updates.")}
              className="px-5 py-2.5 bg-[#14213D] hover:bg-[#1f315a] text-white font-bold text-xs rounded-xl whitespace-nowrap transition-colors"
            >
              Get Alerts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
