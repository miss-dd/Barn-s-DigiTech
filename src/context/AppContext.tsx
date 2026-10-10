import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { CartItem, ViewType, OrderDetails } from '../types';

interface AppContextType {
  currentView: ViewType;
  selectedProduct: Product | null;
  searchQuery: string;
  cart: CartItem[];
  wishlist: string[];
  appliedVoucher: string | null;
  voucherDiscount: number;
  completedOrder: OrderDetails | null;
  toast: { message: string; type: 'success' | 'info' | 'error' } | null;
  
  // Navigation
  navigateTo: (view: ViewType, product?: Product | null) => void;
  setSearchQuery: (query: string) => void;
  
  // Cart operations
  addToCart: (product: Product, storage?: string, color?: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  deliveryFee: number;
  cartTotal: number;
  
  // Wishlist operations
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  
  // Voucher
  applyVoucherCode: (code: string) => { success: boolean; message: string };
  removeVoucher: () => void;
  
  // Order
  placeOrder: (order: OrderDetails) => void;
  
  // Toast
  showToast: (message: string, type?: 'success' | 'info' | 'error') => void;
  hideToast: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Initial demo cart items to reflect rich e-commerce state matching the uploaded designs
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('barns_cart');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    // Default starter cart items matching design screen 10: iPhone 15 Pro Max & Anker Power Bank
    const p1 = PRODUCTS.find(p => p.id === 'iphone-15-pro-max') || PRODUCTS[0];
    const p2 = PRODUCTS.find(p => p.id === 'anker-737-powerbank') || PRODUCTS[5];
    return [
      {
        cartItemId: `${p1.id}-256gb-natural`,
        product: p1,
        selectedStorage: '256 GB',
        selectedColor: 'Natural Titanium',
        quantity: 1,
        unitPrice: 15200
      },
      {
        cartItemId: `${p2.id}-standard`,
        product: p2,
        quantity: 1,
        unitPrice: p2.price
      }
    ];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('barns_wishlist');
    return saved ? JSON.parse(saved) : ['samsung-s24-ultra', 'airpods-pro-2'];
  });

  const [appliedVoucher, setAppliedVoucher] = useState<string | null>('GHANA2026');
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  useEffect(() => {
    localStorage.setItem('barns_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('barns_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Scroll to top on navigation
  const navigateTo = (view: ViewType, product: Product | null = null) => {
    setCurrentView(view);
    if (product) {
      setSelectedProduct(product);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(prev => (prev?.message === message ? null : prev));
    }, 3800);
  };

  const hideToast = () => setToast(null);

  const addToCart = (product: Product, storage?: string, color?: string, quantity = 1) => {
    let price = product.price;
    if (storage && product.storageOptions) {
      const match = product.storageOptions.find(s => s.storage === storage);
      if (match) price = match.price;
    }

    const cartItemId = `${product.id}-${storage || 'default'}-${color || 'default'}`;

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            product,
            selectedStorage: storage,
            selectedColor: color,
            quantity,
            unitPrice: price
          }
        ];
      }
    });

    showToast(`Added ${product.name} to your cart!`, 'success');
  };

  const removeFromCart = (cartItemId: string) => {
    const item = cart.find(i => i.cartItemId === cartItemId);
    setCart(prev => prev.filter(i => i.cartItemId !== cartItemId));
    if (item) {
      showToast(`Removed ${item.product.name} from cart`, 'info');
    }
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart(prev =>
      prev.map(item => (item.cartItemId === cartItemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    const product = PRODUCTS.find(p => p.id === productId);
    const prodName = product ? product.name : 'Item';
    if (wishlist.includes(productId)) {
      setWishlist(prev => prev.filter(id => id !== productId));
      showToast(`Removed from wishlist`, 'info');
    } else {
      setWishlist(prev => [...prev, productId]);
      showToast(`Saved ${prodName} to wishlist!`, 'success');
    }
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const applyVoucherCode = (code: string) => {
    const cleaned = code.trim().toUpperCase();
    if (cleaned === 'GHANA2026' || cleaned === 'ACCRA10') {
      setAppliedVoucher(cleaned);
      showToast(`Voucher ${cleaned} applied! GH₵ 150 discount added.`, 'success');
      return { success: true, message: 'Promo voucher successfully applied!' };
    }
    if (cleaned === 'FREESHIP') {
      setAppliedVoucher('FREESHIP');
      showToast('Free Express Delivery applied!', 'success');
      return { success: true, message: 'Free Shipping voucher active!' };
    }
    showToast('Invalid voucher code. Try GHANA2026 or ACCRA10', 'error');
    return { success: false, message: 'Voucher not recognized.' };
  };

  const removeVoucher = () => {
    setAppliedVoucher(null);
    showToast('Promo code removed', 'info');
  };

  const placeOrder = (order: OrderDetails) => {
    setCompletedOrder(order);
    clearCart();
    setCurrentView('order-success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Order #${order.orderId} placed successfully!`, 'success');
  };

  // Calculations
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  
  // Delivery rule: Free for orders over GH₵ 5,000 or FREESHIP voucher, else GH₵ 45 for standard Accra dispatch
  const deliveryFee = appliedVoucher === 'FREESHIP' || cartSubtotal >= 5000 || cartSubtotal === 0 ? 0 : 45;
  
  // Voucher discount
  let voucherDiscount = 0;
  if (appliedVoucher === 'GHANA2026' || appliedVoucher === 'ACCRA10') {
    voucherDiscount = Math.min(150, cartSubtotal > 500 ? 150 : 50);
  }

  const cartTotal = Math.max(0, cartSubtotal + deliveryFee - voucherDiscount);

  return (
    <AppContext.Provider
      value={{
        currentView,
        selectedProduct,
        searchQuery,
        cart,
        wishlist,
        appliedVoucher,
        voucherDiscount,
        completedOrder,
        toast,
        navigateTo,
        setSearchQuery,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
        deliveryFee,
        cartTotal,
        toggleWishlist,
        isWishlisted,
        applyVoucherCode,
        removeVoucher,
        placeOrder,
        showToast,
        hideToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
