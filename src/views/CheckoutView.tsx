import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { OrderDetails } from '../types';
import {
  ShieldCheck,
  Truck,
  MapPin,
  Lock,
  ArrowRight,
  ChevronLeft,
  Building2,
  Phone,
  CheckCircle2,
  Smartphone
} from 'lucide-react';

export const CheckoutView: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    deliveryFee,
    appliedVoucher,
    voucherDiscount,
    cartTotal,
    placeOrder,
    navigateTo
  } = useApp();

  const [customerName, setCustomerName] = useState('Doreen Appiah');
  const [phoneNumber, setPhoneNumber] = useState('055 832 9911');
  const [email, setEmail] = useState('domprehdoreenappiah@gmail.com');
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
  const [digitalAddress, setDigitalAddress] = useState('GA-182-4521');
  const [streetAddress, setStreetAddress] = useState('Block 4, Airport Residential Area');
  const [region, setRegion] = useState('Greater Accra');
  const [city, setCity] = useState('Accra');
  const [pickupHub, setPickupHub] = useState('Accra Central Flagship (Rawlings Park)');
  const [paymentMethod, setPaymentMethod] = useState<'momo_mtn' | 'momo_telecel' | 'card' | 'cod'>('momo_mtn');
  const [momoNumber, setMomoNumber] = useState('055 832 9911');
  const [orderNotes, setOrderNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculatedDeliveryFee = deliveryMethod === 'pickup' ? 0 : deliveryFee;
  const finalTotal = Math.max(0, cartSubtotal + calculatedDeliveryFee - voucherDiscount);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phoneNumber) {
      alert('Please enter your name and contact phone number');
      return;
    }

    setIsSubmitting(true);

    const orderId = `BD-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: OrderDetails = {
      orderId,
      customerName,
      phoneNumber,
      email,
      deliveryMethod,
      digitalAddress: deliveryMethod === 'delivery' ? digitalAddress : undefined,
      address: deliveryMethod === 'delivery' ? streetAddress : undefined,
      region,
      city,
      pickupHub: deliveryMethod === 'pickup' ? pickupHub : undefined,
      paymentMethod,
      items: [...cart],
      subtotal: cartSubtotal,
      deliveryFee: calculatedDeliveryFee,
      discount: voucherDiscount,
      total: finalTotal,
      notes: orderNotes,
      createdAt: new Date().toLocaleString('en-GB')
    };

    setTimeout(() => {
      setIsSubmitting(false);
      placeOrder(newOrder);
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Back button & Title */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateTo('cart')}
            className="p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#14213D]">
              Secure Checkout
            </h1>
            <p className="text-xs text-gray-500">
              Verified Ghanaian retail order with localized NCA invoice
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full font-bold">
          <Lock className="w-3.5 h-3.5" />
          <span>256-Bit Encrypted Order</span>
        </div>
      </div>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Details */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {/* Step 1: Customer Contact */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
              <span className="w-6 h-6 rounded-full bg-[#14213D] text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-sm sm:text-base text-gray-900">
                Customer Information & Contact
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Ghana Phone Number (For Dispatch) *</label>
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="055 XXX XXXX"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-gray-700 mb-1">Email Address (For Warranty Receipt)</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
                />
              </div>
            </div>
          </div>

          {/* Step 2: Delivery vs Showroom Pickup */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
              <span className="w-6 h-6 rounded-full bg-[#14213D] text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-sm sm:text-base text-gray-900">
                Fulfillment & Dispatch Mode
              </h3>
            </div>

            {/* Selector Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                onClick={() => setDeliveryMethod('delivery')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  deliveryMethod === 'delivery'
                    ? 'border-[#1677FF] bg-blue-50/50 ring-2 ring-blue-100'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Truck className="w-5 h-5 text-[#1677FF]" />
                    <span className="font-bold text-xs sm:text-sm text-gray-900">Door Delivery</span>
                  </div>
                  <span className="text-xs font-bold text-gray-900">
                    {deliveryFee === 0 ? 'FREE' : `GH₵ ${deliveryFee}`}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 leading-snug">
                  Direct dispatch to your home or office in Greater Accra or via regional courier.
                </p>
              </div>

              <div
                onClick={() => setDeliveryMethod('pickup')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  deliveryMethod === 'pickup'
                    ? 'border-[#1677FF] bg-blue-50/50 ring-2 ring-blue-100'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-600" />
                    <span className="font-bold text-xs sm:text-sm text-gray-900">Showroom Pickup</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 uppercase">FREE</span>
                </div>
                <p className="text-[11px] text-gray-500 leading-snug">
                  Collect in person at Accra Central (Rawlings Park) with live test bench inspection.
                </p>
              </div>
            </div>

            {/* Address fields if Door Delivery */}
            {deliveryMethod === 'delivery' ? (
              <div className="space-y-3 pt-2 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Region *</label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
                    >
                      <option value="Greater Accra">Greater Accra Region</option>
                      <option value="Ashanti">Ashanti Region (Kumasi)</option>
                      <option value="Western">Western Region (Takoradi)</option>
                      <option value="Central">Central Region (Cape Coast)</option>
                      <option value="Eastern">Eastern Region (Koforidua)</option>
                      <option value="Northern">Northern Region (Tamale)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-gray-700 mb-1">Ghana Digital Address (GPS) *</label>
                    <input
                      type="text"
                      value={digitalAddress}
                      onChange={(e) => setDigitalAddress(e.target.value)}
                      placeholder="e.g. GA-182-4521"
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Street Address / Landmark *</label>
                  <input
                    type="text"
                    required
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                    placeholder="e.g. Near Stanbic Bank, Airport Residential Area"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
                  />
                </div>
              </div>
            ) : (
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl text-xs text-amber-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>Selected Pickup Location:</span>
                </div>
                <select
                  value={pickupHub}
                  onChange={(e) => setPickupHub(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-amber-300 rounded-xl outline-none font-semibold text-gray-800"
                >
                  <option value="Accra Central Flagship (Rawlings Park)">
                    Accra Central Flagship (Kwame Nkrumah Ave, Opp. Rawlings Park)
                  </option>
                  <option value="Kumasi Adum Hub (Post Office Rd)">
                    Kumasi Adum Hub (Post Office Road)
                  </option>
                  <option value="Takoradi Hub (Market Circle)">
                    Takoradi Hub (Market Circle)
                  </option>
                </select>
                <p className="text-[11px] text-amber-800">
                  Ready within 30 minutes. An SMS code will be sent to your phone for verification upon collection.
                </p>
              </div>
            )}
          </div>

          {/* Step 3: Payment Method */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
              <span className="w-6 h-6 rounded-full bg-[#14213D] text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-sm sm:text-base text-gray-900">
                Payment Option
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* MTN MoMo */}
              <label
                className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                  paymentMethod === 'momo_mtn'
                    ? 'border-amber-400 bg-amber-50/60 ring-2 ring-amber-100'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'momo_mtn'}
                  onChange={() => setPaymentMethod('momo_mtn')}
                  className="mt-0.5 accent-amber-500"
                />
                <div>
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span>MTN Mobile Money</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Instant prompt sent to your MTN handset. Zero service charge.
                  </p>
                </div>
              </label>

              {/* Telecel Cash */}
              <label
                className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                  paymentMethod === 'momo_telecel'
                    ? 'border-red-400 bg-red-50/60 ring-2 ring-red-100'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'momo_telecel'}
                  onChange={() => setPaymentMethod('momo_telecel')}
                  className="mt-0.5 accent-red-500"
                />
                <div>
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span>Telecel Cash</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Instant prompt for Telecel wallet users.
                  </p>
                </div>
              </label>

              {/* Card */}
              <label
                className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                  paymentMethod === 'card'
                    ? 'border-blue-400 bg-blue-50/60 ring-2 ring-blue-100'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="mt-0.5 accent-blue-500"
                />
                <div>
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <span>Debit / Credit Card</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Visa, Mastercard & Gh-Link local cards.
                  </p>
                </div>
              </label>

              {/* Pay on Pickup / Cash on Delivery */}
              <label
                className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all ${
                  paymentMethod === 'cod'
                    ? 'border-emerald-400 bg-emerald-50/60 ring-2 ring-emerald-100'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="mt-0.5 accent-emerald-500"
                />
                <div>
                  <div className="font-bold text-gray-900 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span>Pay on Pickup / Delivery</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Cash or MoMo upon physical inspection at showroom or courier.
                  </p>
                </div>
              </label>
            </div>

            {/* Mobile money phone field */}
            {(paymentMethod === 'momo_mtn' || paymentMethod === 'momo_telecel') && (
              <div className="pt-2 text-xs">
                <label className="block font-semibold text-gray-700 mb-1">
                  Mobile Money Wallet Number (For Prompt)
                </label>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    value={momoNumber}
                    onChange={(e) => setMomoNumber(e.target.value)}
                    placeholder="055 XXX XXXX"
                    className="flex-1 px-3.5 py-2 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#1677FF]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Order Review & Submit */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6 sticky top-28">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg space-y-4">
            <h3 className="font-extrabold text-sm sm:text-base text-[#14213D] pb-3 border-b border-gray-100">
              Review Items ({cart.length})
            </h3>

            {/* List preview */}
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.cartItemId} className="flex items-center gap-3 text-xs">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-10 h-10 object-contain rounded-lg bg-gray-50 p-1 border border-gray-100 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 truncate">{item.product.name}</p>
                    <p className="text-[11px] text-gray-500">
                      Qty: {item.quantity} {item.selectedStorage ? `• ${item.selectedStorage}` : ''}
                    </p>
                  </div>
                  <div className="font-bold text-gray-900 text-right">
                    GH₵ {(item.unitPrice * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>

            {/* Total calculation */}
            <div className="pt-3 border-t border-gray-100 space-y-2 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">GH₵ {cartSubtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Dispatch / Fulfillment</span>
                <span className="font-bold text-gray-900">
                  {calculatedDeliveryFee === 0 ? 'FREE' : `GH₵ ${calculatedDeliveryFee}`}
                </span>
              </div>
              {appliedVoucher && (
                <div className="flex justify-between text-emerald-600 font-bold">
                  <span>Voucher ({appliedVoucher})</span>
                  <span>-GH₵ {voucherDiscount}</span>
                </div>
              )}
              <div className="pt-2 border-t border-gray-100 flex justify-between items-baseline">
                <span className="text-sm font-bold text-gray-800">Total Payable</span>
                <span className="text-2xl font-black text-[#14213D]">
                  GH₵ {finalTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#14213D] hover:bg-[#1f315a] disabled:bg-gray-400 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <span>Generating Order Reference...</span>
              ) : (
                <>
                  <span>Place Order & Generate Invoice</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="text-center text-[11px] text-gray-400 pt-1">
              By confirming, you agree to our 12-month localized warranty terms and NCA purchase agreement.
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
