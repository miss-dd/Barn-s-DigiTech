import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { PRODUCTS } from '../data/products';
import { Logo } from './Logo';
import {
  Search,
  ShoppingCart,
  Heart,
  ShieldCheck,
  MapPin,
  Menu,
  X,
  Phone,
  Clock,
  Sparkles,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentView,
    navigateTo,
    cartCount,
    cartSubtotal,
    wishlist,
    searchQuery,
    setSearchQuery
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Filtered live search results
  const searchResults = searchQuery.trim() === ''
    ? []
    : PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.specs.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectProduct = (product: any) => {
    navigateTo('product-detail', product);
    setIsSearchFocused(false);
    setSearchQuery('');
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'All Products', view: 'catalog' },
    { label: 'Smartphones', view: 'smartphones' },
    { label: 'Laptops', view: 'laptops' },
    { label: 'Flash Deals 🔥', view: 'deals' },
    { label: 'Warranty & NCA Check', view: 'warranty' },
    { label: 'Showroom & Hubs', view: 'showrooms' },
    { label: 'Track Order', view: 'track' },
    { label: 'Contact & Support', view: 'contact' },
    { label: 'FAQ', view: 'faq' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
      {/* Top Announcement Bar */}
      <div className="bg-[#14213D] text-white text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-3 text-gray-200">
            <span className="inline-flex items-center font-medium bg-white/10 px-2 py-0.5 rounded text-[11px] text-amber-300">
              🇬🇭 100% Genuine Ghana Stock
            </span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="hidden sm:inline flex items-center gap-1 text-gray-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Same-day delivery across Greater Accra • 24-48h Nationwide
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs font-medium text-gray-300">
            <a
              href="tel:+233502423799"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+233 (0) 50 242 3799</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="https://wa.me/233502423799"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 text-emerald-300 transition-colors"
            >
              <span className="material-symbols-outlined text-[15px]">chat</span>
              <span>WhatsApp Us</span>
            </a>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => navigateTo('showrooms')}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Accra Central Showroom</span>
            </button>
            <span className="hidden lg:inline text-gray-600">|</span>
            <button
              onClick={() => navigateTo('warranty')}
              className="hidden lg:flex items-center gap-1 hover:text-white transition-colors text-amber-300"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>NCA Warranty Checker</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Exact Brand Logo & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <button
              onClick={() => navigateTo('home')}
              className="text-left group flex items-center focus:outline-none transition-transform hover:scale-101"
              aria-label="Barn's DigiTech Home"
            >
              <Logo size="md" />
            </button>
          </div>

          {/* Search Bar with Live Results */}
          <div ref={searchContainerRef} className="flex-1 max-w-xl mx-2 hidden sm:block relative">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsSearchFocused(true);
                }}
                onFocus={() => setIsSearchFocused(true)}
                placeholder="Search iPhones, MacBooks, Galaxy S24, Anker powerbanks..."
                className="w-full pl-10 pr-24 py-2.5 bg-gray-50 hover:bg-white focus:bg-white text-sm rounded-xl border border-gray-200 focus:border-[#1677FF] focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-400 font-normal"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-12 text-gray-400 hover:text-gray-600 text-xs px-1"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => {
                  if (searchQuery.trim()) {
                    navigateTo('catalog');
                    setIsSearchFocused(false);
                  }
                }}
                className="absolute right-1.5 px-3 py-1.5 bg-[#1677FF] hover:bg-[#0D5FD3] text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1"
              >
                Search
              </button>
            </div>

            {/* Instant Search Dropdown */}
            {isSearchFocused && searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {searchResults.length > 0 ? (
                  <div className="p-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 px-3 py-1.5">
                      Matching Products ({searchResults.length})
                    </div>
                    {searchResults.map((product) => (
                      <button
                        key={product.id}
                        onClick={() => handleSelectProduct(product)}
                        className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-blue-50/70 transition-colors text-left group"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-12 h-12 object-contain rounded-md bg-gray-50 p-1 border border-gray-100"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate group-hover:text-[#1677FF]">
                            {product.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs font-bold text-[#14213D]">
                              GH₵ {product.price.toLocaleString()}
                            </span>
                            {product.originalPrice && (
                              <span className="text-[11px] text-gray-400 line-through">
                                GH₵ {product.originalPrice.toLocaleString()}
                              </span>
                            )}
                            <span className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.2 rounded">
                              In Stock
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#1677FF] group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1.5 px-3 py-1 flex justify-between items-center text-xs">
                      <span className="text-gray-500">Press enter to see all results</span>
                      <button
                        onClick={() => {
                          navigateTo('catalog');
                          setIsSearchFocused(false);
                        }}
                        className="text-[#1677FF] font-semibold hover:underline"
                      >
                        View full catalog &rarr;
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center text-gray-500 text-sm">
                    <p className="font-medium">No direct matches for "{searchQuery}"</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Check spelling or browse our phone & laptop collections
                    </p>
                    <button
                      onClick={() => {
                        navigateTo('smartphones');
                        setIsSearchFocused(false);
                      }}
                      className="mt-3 text-xs font-semibold text-[#1677FF] hover:underline"
                    >
                      Browse All Smartphones &rarr;
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Actions (Wishlist, Showrooms, Cart) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Showroom quick button on desktop */}
            <button
              onClick={() => navigateTo('showrooms')}
              className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:text-[#1677FF] hover:bg-gray-50 border border-gray-200 transition-colors"
              title="Showroom & Store Pickup"
            >
              <MapPin className="w-4 h-4 text-rose-500" />
              <div className="text-left">
                <span className="block text-[10px] uppercase text-gray-400 font-bold leading-none">Showroom</span>
                <span>Accra Central</span>
              </div>
            </button>

            {/* Wishlist */}
            <button
              onClick={() => navigateTo('catalog')}
              className="relative p-2.5 rounded-xl text-gray-700 hover:text-rose-500 hover:bg-rose-50/60 transition-colors"
              title={`Wishlist (${wishlist.length} saved)`}
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => navigateTo('cart')}
              className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#14213D] hover:bg-[#1f315a] text-white rounded-xl shadow-sm transition-all group"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:block text-left leading-tight">
                <div className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">Cart</div>
                <div className="text-xs font-bold text-white">
                  GH₵ {cartSubtotal.toLocaleString()}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="mt-3 sm:hidden">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search iPhones, Laptops, Accessories..."
              className="w-full pl-9 pr-16 py-2 bg-gray-50 text-xs rounded-xl border border-gray-200 outline-none focus:border-[#1677FF]"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
            {searchQuery && (
              <button
                onClick={() => {
                  navigateTo('catalog');
                }}
                className="absolute right-2 top-1.5 px-2 py-0.5 bg-[#1677FF] text-white text-[11px] font-bold rounded"
              >
                Find
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Primary Category Links Bar */}
      <nav className="bg-gray-50/80 border-t border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1 overflow-x-auto py-1.5 scrollbar-none text-xs font-medium text-gray-700">
              {navLinks.map((link) => {
                const isActive = currentView === link.view;
                return (
                  <button
                    key={link.label}
                    onClick={() => navigateTo(link.view as any)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-[#1677FF] text-white font-semibold shadow-xs'
                        : 'hover:text-[#1677FF] hover:bg-white text-gray-700'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="hidden xl:flex items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Accra Showroom Open Now (8:30 AM - 7:00 PM)
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  navigateTo(link.view as any);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  currentView === link.view
                    ? 'bg-blue-50 text-[#1677FF] font-semibold'
                    : 'text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-gray-100 space-y-3">
            <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100 flex items-start gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-900">National Communications Authority Certified</p>
                <p className="text-[11px] text-gray-600 mt-0.5">
                  100% Genuine electronics with manufacturer & localized warranties.
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="https://wa.me/233502423799"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                WhatsApp (+233 50 242 3799)
              </a>
              <button
                onClick={() => {
                  navigateTo('showrooms');
                  setIsMobileMenuOpen(false);
                }}
                className="flex-1 py-2.5 bg-gray-100 text-gray-800 text-xs font-bold rounded-xl text-center"
              >
                Visit Showroom
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
