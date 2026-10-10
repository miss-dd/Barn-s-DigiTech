import React from 'react';
import { Product } from '../data/products';
import { useApp } from '../context/AppContext';
import { Heart, ShoppingCart, Star, CheckCircle, Shield, Zap } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { navigateTo, addToCart, toggleWishlist, isWishlisted } = useApp();
  const wishlisted = isWishlisted(product.id);

  const handleCardClick = () => {
    navigateTo('product-detail', product);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const defaultStorage = product.storageOptions?.[0]?.storage;
    const defaultColor = product.colorOptions?.[0]?.name;
    addToCart(product, defaultStorage, defaultColor, 1);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleWhatsAppQuickOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello Barn's DigiTech! I want to order: ${product.name} (GH₵ ${product.price.toLocaleString()}). Is this item available for delivery or pickup at Accra Central today?`
    );
    window.open(`https://wa.me/233502423799?text=${message}`, '_blank');
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Top Image area */}
      <div className="relative pt-[85%] bg-gradient-to-b from-gray-50/80 to-white overflow-hidden p-4">
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
          {product.discountBadge && (
            <span className="bg-rose-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
              {product.discountBadge}
            </span>
          )}
          {product.badge && (
            <span className="bg-[#14213D] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 text-amber-400" />
              {product.badge}
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleToggleWishlist}
          aria-label="Save to wishlist"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-gray-400 hover:text-rose-500 shadow-sm flex items-center justify-center transition-all hover:scale-110"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted ? 'fill-rose-500 text-rose-500' : ''
            }`}
          />
        </button>

        {/* Product image with smooth hover scale */}
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-108"
          />
        </div>
      </div>

      {/* Body details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Rating row */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
            <span className="font-bold uppercase tracking-wider text-blue-600 text-[11px]">
              {product.brand}
            </span>
            <div className="flex items-center gap-1 text-amber-500 font-medium text-[11px]">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-gray-400">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base line-clamp-2 group-hover:text-[#1677FF] transition-colors leading-snug min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* Specs tags pills */}
          <div className="flex flex-wrap gap-1 mt-2.5 mb-3">
            {product.specs.slice(0, 3).map((spec, idx) => (
              <span
                key={idx}
                className="inline-block bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded-md"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Location & Stock indicator */}
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate">In Stock • {product.location}</span>
          </div>
        </div>

        {/* Pricing & Call to Actions */}
        <div className="pt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-lg sm:text-xl font-extrabold text-[#14213D]">
              GH₵ {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                GH₵ {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddToCart}
              className="w-full py-2 px-2.5 bg-blue-50 hover:bg-blue-100 text-[#1677FF] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 group/btn"
            >
              <ShoppingCart className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={handleWhatsAppQuickOrder}
              className="w-full py-2 px-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-[15px]">chat</span>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
