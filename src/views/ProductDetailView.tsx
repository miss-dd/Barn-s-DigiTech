import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Heart,
  ShoppingCart,
  Star,
  CheckCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
  MapPin,
  ChevronRight,
  Info,
  Check,
  Clock,
  Sparkles,
  Share2,
  PackageCheck
} from 'lucide-react';

export const ProductDetailView: React.FC = () => {
  const {
    selectedProduct,
    navigateTo,
    addToCart,
    toggleWishlist,
    isWishlisted,
    showToast
  } = useApp();

  const product = selectedProduct || PRODUCTS[0];

  // Storage selection
  const [selectedStorage, setSelectedStorage] = useState<string>(
    product.storageOptions?.[0]?.storage || product.specs[0] || 'Standard'
  );

  // Color selection
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colorOptions?.[0]?.name || 'Standard Edition'
  );

  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'warranty' | 'delivery' | 'reviews'>('specs');

  // Compute active price depending on storage option
  const currentPrice = React.useMemo(() => {
    if (product.storageOptions) {
      const match = product.storageOptions.find(s => s.storage === selectedStorage);
      if (match) return match.price;
    }
    return product.price;
  }, [product, selectedStorage]);

  const currentOriginalPrice = React.useMemo(() => {
    if (product.storageOptions) {
      const match = product.storageOptions.find(s => s.storage === selectedStorage);
      if (match && match.originalPrice) return match.originalPrice;
    }
    return product.originalPrice;
  }, [product, selectedStorage]);

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, selectedStorage, selectedColor, quantity);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(
      `Hello Barn's DigiTech! I want to purchase:\n` +
      `Product: ${product.name}\n` +
      `Storage: ${selectedStorage}\n` +
      `Color: ${selectedColor}\n` +
      `Qty: ${quantity}\n` +
      `Price: GH₵ ${(currentPrice * quantity).toLocaleString()}\n\n` +
      `Can I pick this up today at Accra Central or arrange express delivery?`
    );
    window.open(`https://wa.me/233558329911?text=${text}`, '_blank');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    showToast('Product link copied to clipboard!', 'info');
  };

  // Related products from same category or brand
  const relatedProducts = PRODUCTS.filter(
    p => p.id !== product.id && (p.category === product.category || p.brand === product.brand)
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Breadcrumb */}
      <nav className="flex items-center text-xs text-gray-500 space-x-2">
        <button onClick={() => navigateTo('home')} className="hover:text-blue-600">Home</button>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <button
          onClick={() => {
            if (product.category === 'smartphones') navigateTo('smartphones');
            else navigateTo('catalog');
          }}
          className="hover:text-blue-600 capitalize"
        >
          {product.category}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-gray-900 font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Showcase Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Image Gallery & Verification Stamps */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-square bg-gradient-to-b from-gray-50/80 to-white rounded-2xl p-8 border border-gray-100 relative flex items-center justify-center overflow-hidden group">
              {product.discountBadge && (
                <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {product.discountBadge}
                </span>
              )}
              {product.badge && (
                <span className="absolute top-4 right-4 bg-[#14213D] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {product.badge}
                </span>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Verification Guarantee Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-[#1677FF] mx-auto mb-1" />
                <div className="text-[11px] font-bold text-gray-900">100% Original</div>
                <div className="text-[10px] text-gray-500">NCA Authorized</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
                <Truck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-gray-900">Same-Day Dispatch</div>
                <div className="text-[10px] text-gray-500">Greater Accra</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-xl text-center border border-gray-100">
                <MapPin className="w-5 h-5 text-amber-600 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-gray-900">Showroom Ready</div>
                <div className="text-[10px] text-gray-500">Accra Central Hub</div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Specs Selectors & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              {/* Brand & Stock */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1677FF] bg-blue-50 px-2.5 py-1 rounded-md">
                  {product.brand} Official
                </span>
                <button
                  onClick={handleShare}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                  title="Share product"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#14213D] leading-tight">
                {product.name}
              </h1>

              {/* Reviews & NCA Badge */}
              <div className="flex items-center gap-3 mt-3 text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-gray-300">•</span>
                <span className="text-gray-600 underline font-medium">
                  {product.reviewsCount} Ghanaian Customer Reviews
                </span>
                <span className="text-gray-300">•</span>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[11px]">
                  Verified IMEI Warranty
                </span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="p-4 bg-gray-50/80 rounded-2xl border border-gray-100 flex items-baseline justify-between">
              <div>
                <div className="text-xs text-gray-500 font-medium">Retail Showroom Price</div>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-3xl font-black text-[#14213D]">
                    GH₵ {currentPrice.toLocaleString()}
                  </span>
                  {currentOriginalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      GH₵ {currentOriginalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-bold bg-emerald-100/80 px-2.5 py-1 rounded-lg">
                  <CheckCircle className="w-3.5 h-3.5" />
                  In Stock ({product.stockCount || 5} units)
                </span>
                <div className="text-[11px] text-gray-500 mt-1">Pickup or Courier ready</div>
              </div>
            </div>

            {/* Color Option Selector */}
            {product.colorOptions && product.colorOptions.length > 0 && (
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-gray-800 mb-2">
                  <span>Select Color: <span className="text-gray-600 font-semibold">{selectedColor}</span></span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colorOptions.map(color => {
                    const isSelected = selectedColor === color.name;
                    return (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`flex items-center gap-2 p-1.5 rounded-xl border transition-all ${
                          isSelected
                            ? 'border-[#1677FF] bg-blue-50/60 ring-2 ring-blue-100'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                        title={color.name}
                      >
                        <span
                          className="w-5 h-5 rounded-full border border-gray-300 shadow-xs"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-xs font-medium text-gray-700 pr-1">{color.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Storage Option Selector */}
            {product.storageOptions && product.storageOptions.length > 0 && (
              <div>
                <div className="text-xs font-bold text-gray-800 mb-2">
                  Storage Capacity
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {product.storageOptions.map(opt => {
                    const isSelected = selectedStorage === opt.storage;
                    return (
                      <button
                        key={opt.storage}
                        onClick={() => setSelectedStorage(opt.storage)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-[#1677FF] bg-blue-50/50 ring-2 ring-blue-100'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="text-xs font-bold text-gray-900">{opt.storage}</div>
                        <div className="text-[11px] text-[#1677FF] font-extrabold mt-0.5">
                          GH₵ {opt.price.toLocaleString()}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity and Actions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xs"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-sm font-bold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-gray-100 transition-colors shadow-xs"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-3 border rounded-xl transition-colors ${
                    wishlisted
                      ? 'border-rose-200 bg-rose-50 text-rose-500'
                      : 'border-gray-200 hover:bg-gray-50 text-gray-400'
                  }`}
                  title="Save to Wishlist"
                >
                  <Heart className={`w-5 h-5 ${wishlisted ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3.5 px-4 bg-[#14213D] hover:bg-[#1f315a] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
                >
                  <ShoppingCart className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Add to Shopping Cart</span>
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Instant WhatsApp Order</span>
                </button>
              </div>
            </div>

            {/* Dispatch & Hub Collection Details */}
            <div className="border border-gray-100 bg-gray-50/60 rounded-2xl p-4 space-y-2.5 text-xs text-gray-700">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#1677FF] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900">Accra Same-Day Delivery: </span>
                  Orders placed before 3:00 PM are delivered within 2-4 hours to East Legon, Cantonments, Osu, Spintex, Airport & environs.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900">Showroom Pickup in 30 Mins: </span>
                  Collect and inspect on our test bench at Kwame Nkrumah Ave, Opposite Rawlings Park, Accra Central.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Info Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-2 border-b border-gray-200 pb-3 overflow-x-auto scrollbar-none">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === 'specs'
                  ? 'bg-[#14213D] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Full Specifications
            </button>
            <button
              onClick={() => setActiveTab('warranty')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === 'warranty'
                  ? 'bg-[#14213D] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              12-Mo Warranty & NCA Policy
            </button>
            <button
              onClick={() => setActiveTab('delivery')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === 'delivery'
                  ? 'bg-[#14213D] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Nationwide Delivery Hubs
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'bg-[#14213D] text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Customer Reviews ({product.reviewsCount})
            </button>
          </div>

          <div className="pt-6">
            {activeTab === 'specs' && (
              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-xs text-gray-800">
                      <div className="w-2 h-2 rounded-full bg-[#1677FF]" />
                      <span className="font-semibold">{spec}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-xs text-gray-800">
                    <div className="w-2 h-2 rounded-full bg-[#1677FF]" />
                    <span className="font-semibold">Network: Factory Unlocked (MTN, Telecel, AT Ghana 4G/5G)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl text-xs text-gray-800">
                    <div className="w-2 h-2 rounded-full bg-[#1677FF]" />
                    <span className="font-semibold">In the Box: Device, USB-C Cable, Warranty Card, NCA Leaflet</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'warranty' && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700">
                <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#1677FF] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-gray-900">National Communications Authority (NCA) Compliance</h4>
                    <p className="text-xs text-gray-600 mt-1">
                      This unit is imported and cleared strictly under Ghanaian telecommunications standards. You can verify its serial number on the manufacturer portal and Barn's DigiTech warranty ledger.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
                  <div className="border border-gray-100 p-4 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-1">12 Months Manufacturer Warranty</h5>
                    <p className="text-gray-600 leading-relaxed">
                      Covers internal motherboards, camera modules, sensors, and manufacturer defects. Showroom warranty repairs handled by certified technicians.
                    </p>
                  </div>
                  <div className="border border-gray-100 p-4 rounded-xl">
                    <h5 className="font-bold text-gray-900 mb-1">7-Day Swap Guarantee</h5>
                    <p className="text-gray-600 leading-relaxed">
                      If your sealed unit experiences any out-of-box defect within 7 calendar days, bring it to our Accra showroom for an immediate replacement.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'delivery' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1">Greater Accra Express</h4>
                  <p className="text-gray-600 mb-2">Same-day motorbike or vehicle courier</p>
                  <p className="font-bold text-[#14213D]">GH₵ 35 - GH₵ 50 • 2 to 4 hours</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1">Kumasi & Takoradi Dispatch</h4>
                  <p className="text-gray-600 mb-2">FedEx / VIP Express hub parcel</p>
                  <p className="font-bold text-[#14213D]">GH₵ 60 • Next-Day Morning</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-1">Accra Showroom Pickup</h4>
                  <p className="text-gray-600 mb-2">Opposite Rawlings Park, Makola</p>
                  <p className="font-bold text-emerald-600">FREE • Ready in 30 mins</p>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="text-3xl font-black text-[#14213D]">{product.rating}</div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Based on {product.reviewsCount} customer ratings in Ghana
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-4 border border-gray-100 rounded-xl text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900">Kwesi A. (Airport Residential)</span>
                      <span className="text-gray-400">3 days ago</span>
                    </div>
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 pt-1">
                      Original device, battery health 100%, and verified with Apple's coverage checker immediately upon unboxing at their showroom.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related Products Carousel */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-[#14213D]">
              Frequently Bought Together & Similar Tech
            </h3>
            <button
              onClick={() => navigateTo('catalog')}
              className="text-xs font-bold text-[#1677FF] hover:underline"
            >
              Browse More &rarr;
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
