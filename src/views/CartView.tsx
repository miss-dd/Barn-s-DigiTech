import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Tag,
  CheckCircle,
  HelpCircle,
  X
} from 'lucide-react';

export const CartView: React.FC = () => {
  const {
    cart,
    cartCount,
    cartSubtotal,
    deliveryFee,
    appliedVoucher,
    voucherDiscount,
    cartTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyVoucherCode,
    removeVoucher,
    navigateTo
  } = useApp();

  const [promoInput, setPromoInput] = useState('');

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    applyVoucherCode(promoInput);
    setPromoInput('');
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let itemsList = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.product.name}${
            item.selectedStorage ? ` (${item.selectedStorage}` : ''
          }${item.selectedColor ? `, ${item.selectedColor})` : ')'} x ${
            item.quantity
          } = GH₵ ${(item.unitPrice * item.quantity).toLocaleString()}`
      )
      .join('\n');

    const message = encodeURIComponent(
      `Hello Barn's DigiTech! 🇬🇭\n` +
      `I want to place an order from your website:\n\n` +
      `*ORDER SUMMARY:*\n${itemsList}\n\n` +
      `*Subtotal:* GH₵ ${cartSubtotal.toLocaleString()}\n` +
      `*Delivery:* ${deliveryFee === 0 ? 'FREE' : `GH₵ ${deliveryFee}`}\n` +
      `${appliedVoucher ? `*Voucher Discount:* -GH₵ ${voucherDiscount}\n` : ''}` +
      `*TOTAL:* GH₵ ${cartTotal.toLocaleString()}\n\n` +
      `Please confirm stock availability and send payment / dispatch instructions for Accra.`
    );

    window.open(`https://wa.me/233558329911?text=${message}`, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 bg-blue-50 text-[#1677FF] rounded-3xl flex items-center justify-center mx-auto shadow-xs">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-[#14213D]">Your Shopping Cart is Empty</h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto mt-2 leading-relaxed">
            Discover Ghana's most sought-after electronics, flagships, and accessories backed by genuine localized warranties.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => navigateTo('smartphones')}
            className="px-6 py-3 bg-[#1677FF] hover:bg-[#0D5FD3] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
          >
            Browse Smartphones
          </button>
          <button
            onClick={() => navigateTo('catalog')}
            className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold rounded-xl transition-colors"
          >
            View All Hardware
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Page Title & Clear Cart */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#14213D]">
            Shopping Cart ({cartCount} {cartCount === 1 ? 'Item' : 'Items'})
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Free shipping on orders over GH₵ 5,000 or same-day pickup at our Accra Central Showroom.
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs font-medium text-rose-600 hover:text-rose-800 flex items-center gap-1"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Clear Cart</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cart Items List */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-4">
          {cart.map((item) => (
            <div
              key={item.cartItemId}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-xs flex flex-col sm:flex-row items-center gap-5 transition-all hover:border-blue-100"
            >
              {/* Product Thumbnail */}
              <div
                onClick={() => navigateTo('product-detail', item.product)}
                className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-xl p-2 shrink-0 flex items-center justify-center cursor-pointer border border-gray-100"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Item Info */}
              <div className="flex-1 min-w-0 text-center sm:text-left space-y-1.5 w-full">
                <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  {item.product.brand}
                </div>
                <h3
                  onClick={() => navigateTo('product-detail', item.product)}
                  className="font-bold text-sm sm:text-base text-gray-900 hover:text-[#1677FF] cursor-pointer line-clamp-2"
                >
                  {item.product.name}
                </h3>

                {/* Selected Storage & Color Tags */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1">
                  {item.selectedStorage && (
                    <span className="bg-gray-100 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                      Storage: {item.selectedStorage}
                    </span>
                  )}
                  {item.selectedColor && (
                    <span className="bg-gray-100 text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                      Color: {item.selectedColor}
                    </span>
                  )}
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                    12-Mo NCA Warranty
                  </span>
                </div>

                <div className="text-xs text-gray-500 pt-1">
                  Unit Price: <span className="font-bold text-gray-800">GH₵ {item.unitPrice.toLocaleString()}</span>
                </div>
              </div>

              {/* Quantity Controls & Line Total */}
              <div className="flex sm:flex-col items-center justify-between sm:items-end gap-3 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                {/* Total */}
                <div className="text-base sm:text-lg font-black text-[#14213D]">
                  GH₵ {(item.unitPrice * item.quantity).toLocaleString()}
                </div>

                {/* Counter */}
                <div className="flex items-center gap-1 border border-gray-200 rounded-xl bg-gray-50 p-1">
                  <button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                    className="w-7 h-7 rounded-lg bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-gray-100 shadow-xs"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-gray-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                    className="w-7 h-7 rounded-lg bg-white text-gray-700 font-bold flex items-center justify-center hover:bg-gray-100 shadow-xs"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => removeFromCart(item.cartItemId)}
                  className="p-1.5 text-gray-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50"
                  title="Remove from cart"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Guarantee banner */}
          <div className="bg-blue-50/60 rounded-2xl p-4 border border-blue-100 flex items-center gap-3 text-xs text-blue-900">
            <ShieldCheck className="w-6 h-6 text-[#1677FF] shrink-0" />
            <div>
              <span className="font-bold">Official Ghanaian Retail Warranty: </span>
              Every item in your cart is eligible for our 7-day swap policy and 12-month manufacturer coverage across Ghana.
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6 sticky top-28">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg space-y-5">
            <h3 className="text-base font-extrabold text-[#14213D] pb-3 border-b border-gray-100">
              Order Summary
            </h3>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between text-gray-600">
                <span>Items Subtotal</span>
                <span className="font-bold text-gray-900">GH₵ {cartSubtotal.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between text-gray-600">
                <span className="flex items-center gap-1">
                  <span>Accra Express Courier</span>
                  <span className="text-[10px] text-gray-400">(or Free Showroom Pickup)</span>
                </span>
                <span className="font-bold text-gray-900">
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-600 font-bold uppercase text-[11px]">Free</span>
                  ) : (
                    `GH₵ ${deliveryFee}`
                  )}
                </span>
              </div>

              {appliedVoucher && (
                <div className="flex items-center justify-between text-emerald-600 bg-emerald-50/70 p-2 rounded-xl">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Tag className="w-3.5 h-3.5" />
                    <span>Promo ({appliedVoucher})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-black">-GH₵ {voucherDiscount}</span>
                    <button
                      onClick={removeVoucher}
                      className="text-gray-400 hover:text-gray-600 p-0.5"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-gray-100 flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-gray-500 font-medium">Estimated Total</div>
                  <div className="text-[10px] text-gray-400">Includes all local taxes</div>
                </div>
                <div className="text-2xl font-black text-[#14213D]">
                  GH₵ {cartTotal.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyVoucher} className="pt-2">
              <label className="block text-[11px] font-bold text-gray-700 mb-1.5">
                Have a Promo Voucher? (Try <span className="text-[#1677FF] cursor-pointer" onClick={() => setPromoInput('GHANA2026')}>GHANA2026</span>)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 uppercase text-xs px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Apply
                </button>
              </div>
            </form>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-101"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Instant WhatsApp Checkout</span>
              </button>

              <button
                onClick={() => navigateTo('checkout')}
                className="w-full py-3.5 px-4 bg-[#14213D] hover:bg-[#1f315a] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-101"
              >
                <span>Proceed to Online Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Accepted Ghana Payment Badges */}
            <div className="pt-3 border-t border-gray-100 text-center">
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                Verified Payment Options
              </p>
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px] text-gray-600 font-semibold">
                <span className="bg-amber-100/70 text-amber-800 px-2 py-1 rounded">MTN MoMo</span>
                <span className="bg-red-100/70 text-red-800 px-2 py-1 rounded">Telecel Cash</span>
                <span className="bg-blue-100/70 text-blue-800 px-2 py-1 rounded">Visa / Master</span>
                <span className="bg-emerald-100/70 text-emerald-800 px-2 py-1 rounded">Pay at Showroom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
