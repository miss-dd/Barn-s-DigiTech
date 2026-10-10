import { Product } from './data/products';

export interface CartItem {
  cartItemId: string;
  product: Product;
  selectedStorage?: string;
  selectedColor?: string;
  quantity: number;
  unitPrice: number;
}

export type ViewType =
  | 'home'
  | 'smartphones'
  | 'laptops'
  | 'catalog'
  | 'deals'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'order-success'
  | 'showrooms'
  | 'warranty'
  | 'faq';

export interface OrderDetails {
  orderId: string;
  customerName: string;
  phoneNumber: string;
  email: string;
  deliveryMethod: 'delivery' | 'pickup';
  address?: string;
  digitalAddress?: string;
  region: string;
  city: string;
  pickupHub?: string;
  paymentMethod: 'momo_mtn' | 'momo_telecel' | 'card' | 'cod';
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  notes?: string;
  createdAt: string;
}
