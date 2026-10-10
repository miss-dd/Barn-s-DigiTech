import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Package,
  Search,
  CheckCircle2,
  Clock,
  Truck,
  MapPin,
  Building2,
  Phone,
  ArrowRight
} from 'lucide-react';

export const TrackOrderView: React.FC = () => {
  const { showToast } = useApp();

  const [orderId, setOrderId] = useState('BD-724910');
  const [phoneNumber, setPhoneNumber] = useState('050 242 3799');
  const [orderStatus, setOrderStatus] = useState<any>({
    id: 'BD-724910',
    item: 'Apple iPhone 15 Pro Max 256GB - Titanium',
    customer: 'Doreen Appiah',
    deliveryMode: 'Express Courier Dispatch',
    destination: 'Airport Residential Area, Accra',
    estimatedTime: 'Today between 1:30 PM – 3:00 PM',
    currentStage: 3, // 1: Confirmed, 2: Inspected, 3: Dispatched, 4: Delivered
    stages: [
      { title: 'Order Confirmed', time: '10:15 AM', desc: 'Order logged and inventory reserved at Accra Central hub.' },
      { title: 'IMEI & Quality Check', time: '10:45 AM', desc: 'Motherboard and seal verified with 12-month warranty card.' },
      { title: 'Dispatched with Courier', time: '11:20 AM', desc: 'Rider en route across Greater Accra corridor.' },
      { title: 'Delivered / Showroom Collection', time: 'Pending', desc: 'Handover and test bench inspection with customer.' }
    ]
  });

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(`Loaded tracking updates for #${orderId}`, 'success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="bg-[#14213D] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden">
        <div className="max-w-xl space-y-2">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full inline-block">
            Real-Time Logistics
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Track Your Order Status
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Enter your Barn's DigiTech order reference to follow live dispatch updates and courier delivery times across Ghana.
          </p>
        </div>
      </div>

      {/* Tracking Search Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-6">
        <form onSubmit={handleTrack} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          <div className="sm:col-span-6">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Order Reference Number
            </label>
            <input
              type="text"
              required
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="e.g. BD-724910"
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono font-bold outline-none focus:border-[#0066FF]"
            />
          </div>

          <div className="sm:col-span-4">
            <label className="block text-xs font-semibold text-gray-700 mb-1">
              Ghana Contact Phone
            </label>
            <input
              type="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="050 XXX XXXX"
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs outline-none focus:border-[#0066FF]"
            />
          </div>

          <div className="sm:col-span-2 flex items-end">
            <button
              type="submit"
              className="w-full py-2.5 bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
            >
              Track Order
            </button>
          </div>
        </form>

        {/* Live Status Card */}
        {orderStatus && (
          <div className="pt-4 border-t border-gray-100 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-blue-50/60 p-4 rounded-2xl border border-blue-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066FF] bg-white px-2 py-0.5 rounded shadow-xs">
                  In Transit
                </span>
                <h3 className="text-base font-extrabold text-[#14213D] mt-1">{orderStatus.item}</h3>
                <p className="text-xs text-gray-600">
                  Destination: <span className="font-semibold text-gray-900">{orderStatus.destination}</span>
                </p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-[11px] text-gray-500">Estimated Delivery:</div>
                <div className="text-sm font-black text-emerald-700">{orderStatus.estimatedTime}</div>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Fulfillment Progress
              </h4>
              <div className="space-y-6 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-blue-100">
                {orderStatus.stages.map((stage: any, index: number) => {
                  const isDone = index + 1 <= orderStatus.currentStage;
                  const isCurrent = index + 1 === orderStatus.currentStage;

                  return (
                    <div key={stage.title} className="flex items-start gap-4 relative">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold z-10 transition-colors ${
                          isDone
                            ? 'bg-[#0066FF] text-white ring-4 ring-blue-50'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {isDone ? '✓' : index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-2">
                          <h5
                            className={`text-xs sm:text-sm font-bold ${
                              isCurrent ? 'text-[#0066FF]' : isDone ? 'text-gray-900' : 'text-gray-400'
                            }`}
                          >
                            {stage.title}
                          </h5>
                          <span className="text-[11px] text-gray-400 font-medium">{stage.time}</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{stage.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Courier Help Box */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-gray-600">
                Need to change your delivery address or time?
              </span>
              <a
                href="https://wa.me/233502423799"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#0066FF] hover:underline flex items-center gap-1"
              >
                <span>Notify Dispatch on WhatsApp (+233 50 242 3799)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
