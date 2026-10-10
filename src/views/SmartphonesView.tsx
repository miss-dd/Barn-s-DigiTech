import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Filter,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Check,
  RotateCcw,
  Sparkles,
  MapPin,
  Search
} from 'lucide-react';

export const SmartphonesView: React.FC = () => {
  const { navigateTo } = useApp();

  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedStorage, setSelectedStorage] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(true);
  const [maxPrice, setMaxPrice] = useState<number>(22000);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [searchLocal, setSearchLocal] = useState<string>('');

  // All smartphones
  const allPhones = useMemo(() => {
    return PRODUCTS.filter(p => p.category === 'smartphones');
  }, []);

  // Filtered smartphones
  const filteredPhones = useMemo(() => {
    return allPhones.filter(phone => {
      if (selectedBrand !== 'all' && phone.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      if (inStockOnly && !phone.inStock) {
        return false;
      }
      if (phone.price > maxPrice) {
        return false;
      }
      if (selectedStorage !== 'all') {
        const hasStorage = phone.specs.some(s => s.toLowerCase().includes(selectedStorage.toLowerCase()));
        if (!hasStorage) return false;
      }
      if (searchLocal.trim()) {
        const q = searchLocal.toLowerCase();
        const matchesName = phone.name.toLowerCase().includes(q);
        const matchesSpecs = phone.specs.some(s => s.toLowerCase().includes(q));
        if (!matchesName && !matchesSpecs) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [allPhones, selectedBrand, inStockOnly, maxPrice, selectedStorage, searchLocal, sortBy]);

  const brands = ['all', 'Apple', 'Samsung', 'Google', 'Xiaomi'];
  const storagePills = ['all', '128GB', '256GB', '512GB', '1TB'];

  const resetFilters = () => {
    setSelectedBrand('all');
    setSelectedStorage('all');
    setInStockOnly(false);
    setMaxPrice(22000);
    setSearchLocal('');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-gray-500 space-x-2">
        <button onClick={() => navigateTo('home')} className="hover:text-blue-600">Home</button>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-900 font-semibold">Flagship Smartphones</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-[#14213D] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full text-xs font-semibold text-amber-300">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>NCA Approved • 100% Factory Unlocked</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Flagship Smartphones
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Ghana's premier selection of Apple iPhones, Samsung Galaxy S series, and Google Pixel handsets. All models include valid 12-month localized warranty coverage and same-day delivery across Accra.
          </p>
        </div>

        {/* Hub quick status */}
        <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-gray-300">
          <span className="flex items-center gap-1 text-emerald-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            84 Units Ready at Accra Central Hub
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            Pickup in 30 mins at Rawlings Park Showroom
          </span>
        </div>
      </div>

      {/* Main Grid & Filters Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2 font-bold text-sm text-[#14213D]">
                <SlidersHorizontal className="w-4 h-4 text-[#1677FF]" />
                <span>Filters</span>
              </div>
              <button
                onClick={resetFilters}
                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1 font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Quick search in list */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Search Models</label>
              <div className="relative">
                <input
                  type="text"
                  value={searchLocal}
                  onChange={(e) => setSearchLocal(e.target.value)}
                  placeholder="e.g. Pro Max, S24..."
                  className="w-full pl-8 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
                />
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" />
              </div>
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2.5 uppercase tracking-wider text-[11px]">
                Brand Manufacturer
              </label>
              <div className="flex flex-wrap gap-1.5">
                {brands.map(b => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                      selectedBrand === b
                        ? 'bg-[#14213D] text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {b === 'all' ? 'All Brands' : b}
                  </button>
                ))}
              </div>
            </div>

            {/* Storage capacity */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2.5 uppercase tracking-wider text-[11px]">
                Internal Storage
              </label>
              <div className="flex flex-wrap gap-1.5">
                {storagePills.map(s => (
                  <button
                    key={s}
                    onClick={() => setSelectedStorage(s)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedStorage === s
                        ? 'bg-[#1677FF] text-white shadow-xs'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {s === 'all' ? 'Any' : s}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-2">
                <span>Max Budget</span>
                <span className="text-[#1677FF] font-extrabold">GH₵ {maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="4000"
                max="22000"
                step="500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#1677FF] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>GH₵ 4,000</span>
                <span>GH₵ 22,000</span>
              </div>
            </div>

            {/* In Stock toggle */}
            <div className="pt-2">
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="w-4 h-4 rounded text-[#1677FF] accent-[#1677FF]"
                />
                <span className="text-xs font-medium text-gray-800">
                  Ready for Immediate Accra Pickup
                </span>
              </label>
            </div>
          </div>

          {/* Quick Help Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-4 space-y-2">
            <h4 className="text-xs font-bold text-emerald-900">Need Device Guidance?</h4>
            <p className="text-[11px] text-emerald-700 leading-relaxed">
              Not sure whether to choose the iPhone 15 Pro Max or Galaxy S24 Ultra? Chat with our Accra showroom technician on WhatsApp.
            </p>
            <a
              href="https://wa.me/233558329911"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-1"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>Ask a Specialist &rarr;</span>
            </a>
          </div>
        </aside>

        {/* Products Grid Content */}
        <main className="lg:col-span-3 space-y-6">
          {/* Top Controls Row */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              Showing <span className="font-bold text-gray-900">{filteredPhones.length}</span> smartphones available
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-50 border border-gray-200 text-xs font-semibold rounded-xl px-3 py-2 outline-none focus:border-[#1677FF]"
              >
                <option value="featured">Featured / Top Sellers</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Smartphones Grid */}
          {filteredPhones.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPhones.map(phone => (
                <ProductCard key={phone.id} product={phone} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 space-y-3">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-base">No smartphones match your criteria</h3>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Try widening your price range or clearing the storage filter to view available handsets.
              </p>
              <button
                onClick={resetFilters}
                className="px-4 py-2 bg-[#1677FF] text-white text-xs font-bold rounded-xl"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
