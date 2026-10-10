import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, hideToast } = useApp();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-500 shrink-0" />
  };

  const bgStyles = {
    success: 'bg-white border-emerald-100 text-gray-800 shadow-xl',
    error: 'bg-white border-rose-100 text-gray-800 shadow-xl',
    info: 'bg-white border-blue-100 text-gray-800 shadow-xl'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div
        className={`flex items-center gap-3 p-4 rounded-2xl border ${bgStyles[toast.type]} shadow-2xl`}
      >
        {icons[toast.type]}
        <div className="flex-1 text-xs sm:text-sm font-semibold">{toast.message}</div>
        <button
          onClick={hideToast}
          className="text-gray-400 hover:text-gray-600 p-1 rounded-lg"
          aria-label="Dismiss toast"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
