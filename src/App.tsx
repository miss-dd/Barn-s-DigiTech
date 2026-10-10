/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Toast } from './components/Toast';
import { HomeView } from './views/HomeView';
import { SmartphonesView } from './views/SmartphonesView';
import { CatalogView } from './views/CatalogView';
import { ProductDetailView } from './views/ProductDetailView';
import { CartView } from './views/CartView';
import { CheckoutView } from './views/CheckoutView';
import { OrderSuccessView } from './views/OrderSuccessView';
import { ShowroomsView } from './views/ShowroomsView';
import { WarrantyView } from './views/WarrantyView';
import { FaqView } from './views/FaqView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { TrackOrderView } from './views/TrackOrderView';

const MainContent: React.FC = () => {
  const { currentView } = useApp();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'smartphones':
        return <SmartphonesView />;
      case 'laptops':
        return <CatalogView initialCategory="laptops" />;
      case 'catalog':
        return <CatalogView initialCategory="all" />;
      case 'deals':
        return <CatalogView isDealsOnly={true} />;
      case 'product-detail':
        return <ProductDetailView />;
      case 'cart':
        return <CartView />;
      case 'checkout':
        return <CheckoutView />;
      case 'order-success':
        return <OrderSuccessView />;
      case 'showrooms':
        return <ShowroomsView />;
      case 'warranty':
        return <WarrantyView />;
      case 'faq':
        return <FaqView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'track':
        return <TrackOrderView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#14213D] selection:bg-[#1677FF] selection:text-white font-sans antialiased">
      <Header />
      <main className="flex-1">
        {renderCurrentView()}
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
