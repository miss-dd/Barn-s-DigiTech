import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS, HARDWARE_CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, RotateCcw, ChevronRight, Zap } from 'lucide-react';

interface CatalogViewProps {
  initialCategory?: string;
  isDealsOnly?: boolean;
}

export const CatalogView: React.FC<CatalogViewProps> = ({ initialCategory = 'all', isDealsOnly = false }) => {
  const { navigateTo, searchQuery, setSearchQuery } = useApp();

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (isDealsOnly && !p.originalPrice) return false;
      if (activeCategory !== 'all' && p.category !== activeCategory) return false;
      if (selectedBrand !== 'all' && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) return false;
      if (inStockOnly && !p.inStock) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesBrand = p.brand.toLowerCase().includes(q);
        const matchesSpecs = p.specs.some(s => s.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesSpecs) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [activeCategory, selectedBrand, sortBy, inStockOnly, searchQuery, isDealsOnly]);

  const brands = ['all', 'Apple', 'Samsung', 'Google', 'Dell', 'HP', 'Lenovo', 'Anker', 'Sony'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-gray-500 space-x-2">
        <button onClick={() => navigateTo('home')} className="hover:text-blue-600">Home</button>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-900 font-semibold">
          {isDealsOnly ? 'Weekly Flash Deals' : 'Official Hardware Catalog'}
        </span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#14213D]">
            {isDealsOnly ? 'Weekly Flash Deals 🔥' : 'Complete Hardware Catalog'}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {isDealsOnly
              ? 'Hand-picked discounts on flagship phones, MacBooks, and high-power chargers.'
              : 'Browse genuine consumer electronics with verified localized warranties.'}
          </p>
        </div>

        {/* Search inside catalog */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search catalog..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Category Pills Bar */}
      {!isDealsOnly && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-[#14213D] text-white shadow-xs'
                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
            }`}
          >
            All Hardware ({PRODUCTS.length})
          </button>
          {HARDWARE_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#1677FF] text-white shadow-xs'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      )}

      {/* Filter & Sort Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-wrap items-center justify-between gap-4">
        {/* Brand buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs font-bold text-gray-500 mr-2">Brand:</span>
          {brands.slice(0, 7).map(b => (
            <button
              key={b}
              onClick={() => setSelectedBrand(b)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold capitalize ${
                selectedBrand === b
                  ? 'bg-[#14213D] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {b === 'all' ? 'All' : b}
            </button>
          ))}
        </div>

        {/* Sort & In-stock toggle */}
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-1.5 text-xs font-medium text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="accent-[#1677FF]"
            />
            <span>In Stock Only</span>
          </label>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-gray-50 border border-gray-200 text-xs font-semibold rounded-xl px-3 py-1.5 outline-none focus:border-[#1677FF]"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-12 text-center border border-gray-100">
          <p className="text-gray-500 text-sm font-medium">No items found matching your filters.</p>
          <button
            onClick={() => {
              setActiveCategory('all');
              setSelectedBrand('all');
              setSearchQuery('');
            }}
            className="mt-3 px-4 py-2 bg-[#1677FF] text-white text-xs font-bold rounded-xl"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
