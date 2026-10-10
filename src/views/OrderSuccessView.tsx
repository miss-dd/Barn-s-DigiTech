import React from 'react';
import { useApp } from '../context/AppContext';
import {
  CheckCircle,
  Download,
  Share2,
  Printer,
  ArrowRight,
  ShieldCheck,
  Building2,
  Truck,
  Phone,
  Copy
} from 'lucide-react';

export const OrderSuccessView: React.FC = () => {
  const { completedOrder, navigateTo, showToast } = useApp();

  const order = completedOrder || {
    orderId: 'BD-724910',
    customerName: 'Doreen Appiah',
    phoneNumber: '050 242 3799',
    email: 'domprehdoreenappiah@gmail.com',
    deliveryMethod: 'delivery' as const,
    digitalAddress: 'GA-182-4521',
    address: 'Block 4, Airport Residential Area',
    region: 'Greater Accra',
    city: 'Accra',
    paymentMethod: 'momo_mtn' as const,
    items: [],
    subtotal: 15200,
    deliveryFee: 0,
    discount: 150,
    total: 15050,
    createdAt: new Date().toLocaleString('en-GB')
  };

  const handleCopyOrderId = () => {
    navigator.clipboard.writeText(order.orderId);
    showToast(`Order reference ${order.orderId} copied!`, 'info');
  };

  const handleWhatsAppConfirm = () => {
    const text = encodeURIComponent(
      `Hello Barn's DigiTech! 🇬🇭\n` +
      `I just completed an online order on your website:\n\n` +
      `*Order ID:* ${order.orderId}\n` +
      `*Customer:* ${order.customerName}\n` +
      `*Phone:* ${order.phoneNumber}\n` +
      `*Total:* GH₵ ${order.total.toLocaleString()}\n` +
      `*Fulfillment:* ${order.deliveryMethod === 'pickup' ? `Pickup (${order.pickupHub})` : `Door Delivery (${order.address})`}\n\n` +
      `Kindly confirm dispatch status. Thank you!`
    );
    window.open(`https://wa.me/233502423799?text=${text}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
      {/* Top Success Badge Banner */}
      <div className="bg-white rounded-3xl p-8 border border-emerald-100 shadow-xl text-center space-y-4">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50/50">
          <CheckCircle className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-3 py-1 rounded-full">
            Order Verified & Confirmed
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#14213D] mt-3">
            Thank You, {order.customerName}!
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto mt-1 leading-relaxed">
            Your electronics order has been logged into our inventory system and assigned to the Accra Central dispatch team.
          </p>
        </div>

        {/* Order Reference Box */}
        <div className="bg-gray-50 max-w-sm mx-auto p-3.5 rounded-2xl border border-gray-200 flex items-center justify-between">
          <div className="text-left">
            <div className="text-[10px] uppercase font-bold text-gray-400">Official Order Reference</div>
            <div className="text-base font-black text-[#14213D] tracking-wider">{order.orderId}</div>
          </div>
          <button
            onClick={handleCopyOrderId}
            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-white rounded-xl transition-colors flex items-center gap-1 text-xs font-semibold"
          >
            <Copy className="w-4 h-4" />
            <span>Copy</span>
          </button>
        </div>

        {/* One-Click WhatsApp confirmation button */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleWhatsAppConfirm}
            className="px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Confirm Order on WhatsApp</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>Print Invoice</span>
          </button>
        </div>
      </div>

      {/* Itemized Order Details & Invoice Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2">
          <div>
            <h3 className="font-extrabold text-base text-[#14213D]">
              Barn's DigiTech Official Retail Receipt
            </h3>
            <p className="text-xs text-gray-400">Date: {order.createdAt}</p>
          </div>
          <div className="text-xs text-gray-500 sm:text-right">
            <span className="font-bold text-gray-800">Status: </span>
            <span className="text-emerald-600 font-bold">Processing for Dispatch</span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
          <div className="space-y-1.5 p-4 bg-gray-50 rounded-2xl">
            <h4 className="font-bold text-gray-900 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Customer & Contact Details</span>
            </h4>
            <p className="text-gray-600"><span className="font-semibold text-gray-800">Name:</span> {order.customerName}</p>
            <p className="text-gray-600"><span className="font-semibold text-gray-800">Phone:</span> {order.phoneNumber}</p>
            {order.email && <p className="text-gray-600"><span className="font-semibold text-gray-800">Email:</span> {order.email}</p>}
          </div>

          <div className="space-y-1.5 p-4 bg-gray-50 rounded-2xl">
            <h4 className="font-bold text-gray-900 flex items-center gap-1.5">
              {order.deliveryMethod === 'pickup' ? (
                <Building2 className="w-3.5 h-3.5 text-amber-600" />
              ) : (
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
              )}
              <span>Fulfillment Information</span>
            </h4>
            {order.deliveryMethod === 'pickup' ? (
              <>
                <p className="text-emerald-700 font-semibold">Self Collection at Showroom</p>
                <p className="text-gray-600">{order.pickupHub || 'Accra Central Showroom'}</p>
                <p className="text-gray-500 text-[11px]">Ready within 30 minutes with test bench access.</p>
              </>
            ) : (
              <>
                <p className="text-blue-700 font-semibold">Express Door Delivery</p>
                <p className="text-gray-600">{order.address}, {order.city}</p>
                {order.digitalAddress && (
                  <p className="text-gray-600">Ghana Post GPS: {order.digitalAddress}</p>
                )}
              </>
            )}
          </div>
        </div>

        {/* Item list */}
        {order.items && order.items.length > 0 && (
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Ordered Items</h4>
            <div className="space-y-2 border border-gray-100 rounded-2xl p-4">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-9 h-9 object-contain rounded bg-gray-50 p-0.5"
                    />
                    <div>
                      <p className="font-bold text-gray-900">{item.product.name}</p>
                      <p className="text-[11px] text-gray-500">
                        Qty: {item.quantity} {item.selectedStorage ? `• ${item.selectedStorage}` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="font-bold text-gray-900">
                    GH₵ {(item.unitPrice * item.quantity).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Totals */}
        <div className="pt-2 border-t border-gray-100 space-y-2 text-xs max-w-xs ml-auto">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-bold text-gray-900">GH₵ {order.subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Dispatch / Delivery</span>
            <span className="font-bold text-gray-900">
              {order.deliveryFee === 0 ? 'FREE' : `GH₵ ${order.deliveryFee}`}
            </span>
          </div>
          {order.discount > 0 && (
            <div className="flex justify-between text-emerald-600 font-bold">
              <span>Voucher Discount</span>
              <span>-GH₵ {order.discount}</span>
            </div>
          )}
          <div className="pt-2 border-t border-gray-100 flex justify-between text-sm font-black text-[#14213D]">
            <span>Total</span>
            <span className="text-xl">GH₵ {order.total.toLocaleString()}</span>
          </div>
        </div>

        {/* Return to home button */}
        <div className="pt-4 text-center">
          <button
            onClick={() => navigateTo('home')}
            className="px-6 py-3 bg-[#14213D] hover:bg-[#1f315a] text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-2"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
