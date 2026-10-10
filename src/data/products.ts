export interface Product {
  id: string;
  name: string;
  category: 'smartphones' | 'laptops' | 'tablets' | 'accessories' | 'audio-wearables' | 'deals';
  brand: 'Apple' | 'Samsung' | 'Google' | 'Xiaomi' | 'Dell' | 'Lenovo' | 'HP' | 'Anker' | 'Sony';
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  badge?: string;
  inStock: boolean;
  stockCount?: number;
  location: string;
  rating: number;
  reviewsCount: number;
  specs: string[];
  image: string;
  description: string;
  storageOptions?: { storage: string; price: number; originalPrice?: number }[];
  colorOptions?: { name: string; hex: string }[];
  isFeatured?: boolean;
}

export const PRODUCTS: Product[] = [
  // 1. iPhone 15 Pro Max
  {
    id: 'iphone-15-pro-max',
    name: 'Apple iPhone 15 Pro Max 256GB - Titanium',
    category: 'smartphones',
    brand: 'Apple',
    price: 15200,
    originalPrice: 16500,
    discountBadge: 'Save GH₵ 1,300',
    badge: 'Top Seller',
    inStock: true,
    stockCount: 5,
    location: 'Accra Central Hub',
    rating: 4.9,
    reviewsCount: 48,
    specs: ['256GB', 'A17 Pro', 'Natural Titanium', '5G Dual SIM', '48MP Cam'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9ffR5-hG8gPqxrlVtSoFkSPH30RJme-jiehGhicVRQ70MjixBO8NCslTOuBKZwzAKHYEOCwSv2RC2D1MWc0rb_lIlJMStJEGy9lSirfVMgpwJBhLWOTtl6iu6qSH3Thom0vawpy1f0GbbHCjDwuR6l961qmO9iK5uQU1v7kuNLxHau5x0t7jEIJmu-Axgh-htaRZi5w19Cntq2Rjkhran5j7nbGCo2jlA44Y4xbC7d8CU7_-bMAFH_Q',
    description: "Apple's flagship with Grade 5 aerospace titanium, A17 Pro 3nm chip, customizable Action button, and 5x optical telephoto camera. Factory sealed Ghanaian stock with 12-month Apple Care and NCA clearance.",
    storageOptions: [
      { storage: '256 GB', price: 15200, originalPrice: 16500 },
      { storage: '512 GB', price: 17900, originalPrice: 19200 },
      { storage: '1 TB', price: 20400, originalPrice: 21900 }
    ],
    colorOptions: [
      { name: 'Natural Titanium', hex: '#9E9B93' },
      { name: 'Blue Titanium', hex: '#3B4454' },
      { name: 'White Titanium', hex: '#E5E5EA' },
      { name: 'Black Titanium', hex: '#2C2C2E' }
    ],
    isFeatured: true
  },
  // 2. Samsung Galaxy S24 Ultra
  {
    id: 'samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra 512GB Titanium Black',
    category: 'smartphones',
    brand: 'Samsung',
    price: 19100,
    originalPrice: 20000,
    discountBadge: 'Save GH₵ 900',
    badge: 'Official GH',
    inStock: true,
    stockCount: 7,
    location: 'Accra & Kumasi',
    rating: 4.9,
    reviewsCount: 39,
    specs: ['512GB', '12GB RAM', 'Snapdragon 8 Gen 3', 'Galaxy AI', 'S-Pen'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0Cs3vQuhRaNUf6fQo25qMipWA5jd6_09NaS8HzouPPQLPD8VLW8iB_IlKjM2MwjfrM2m1aewNsIV-4BrgZtbJX-Y36mWa4-I84uXeB3V3mTfELGwYomwqUGy23pqP_mXzpR6FhtukvKliOiki7q2hY8z5CNULCoJDbufMhwpxNb_r-38JvHNpN8QoynMz0Y_dnxWSJRWCPgpOoXE8XbFHkbD8aXw28zZFiPFD5Fvt5XOjBxQWqj3Jlw',
    description: 'Galaxy AI is here. Epic titanium exterior, flat 6.8" 120Hz display with anti-reflective Corning Gorilla Armor, and 200MP quad telephoto camera system with embedded S Pen.',
    storageOptions: [
      { storage: '256 GB', price: 14800, originalPrice: 15900 },
      { storage: '512 GB', price: 19100, originalPrice: 20000 },
      { storage: '1 TB', price: 21500, originalPrice: 22800 }
    ],
    colorOptions: [
      { name: 'Titanium Black', hex: '#2B2B2B' },
      { name: 'Titanium Gray', hex: '#777571' },
      { name: 'Titanium Violet', hex: '#585268' },
      { name: 'Titanium Yellow', hex: '#ECE5D0' }
    ],
    isFeatured: true
  },
  // 3. Google Pixel 8 Pro
  {
    id: 'google-pixel-8-pro',
    name: 'Google Pixel 8 Pro 128GB Bay Blue',
    category: 'smartphones',
    brand: 'Google',
    price: 9800,
    originalPrice: 10800,
    discountBadge: 'Save GH₵ 1,000',
    badge: 'Pure Android',
    inStock: true,
    stockCount: 4,
    location: 'Accra Hub',
    rating: 4.8,
    reviewsCount: 22,
    specs: ['128GB', 'Google Tensor G3', '12GB RAM', 'Pro Cam', '7 Yrs OS'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjBdUJvdc7i1sAxiA_gfEx9psA3w7TJwvXCY7-YzwaZd6mjlrw09fwUhB2SLMw_kMS0ZtHk8dORSj0SxoMRT0OChKuvbPjkrXyj6j2NlcKOVBOBar0_zYAzW53Pmbp2l-EiQDTkxwNk8Gm-Vg7U7Uk0PG0-Kyu_w3bUL4TL5mtfskPADrNUnYUvi4FPCliaAARN8__ATTAeK4j5RWU28L3rgkaFTIdbgi3S9UziNfGLwimVOaNMdCsRA',
    description: 'The all-pro phone engineered by Google. Super Actua display, Google Tensor G3 silicon, fully upgraded pro camera with Best Take and Audio Magic Eraser.',
    storageOptions: [
      { storage: '128 GB', price: 9800, originalPrice: 10800 },
      { storage: '256 GB', price: 11200, originalPrice: 12400 }
    ],
    colorOptions: [
      { name: 'Bay Blue', hex: '#9BB8D3' },
      { name: 'Obsidian', hex: '#313233' },
      { name: 'Porcelain', hex: '#EBE7DF' }
    ],
    isFeatured: true
  },
  // 4. Xiaomi 14 Pro
  {
    id: 'xiaomi-14-pro',
    name: 'Xiaomi 14 Pro 256GB Snapdragon 8 Gen 3',
    category: 'smartphones',
    brand: 'Xiaomi',
    price: 8500,
    originalPrice: 9200,
    discountBadge: 'Save GH₵ 700',
    badge: 'Leica Optic',
    inStock: true,
    stockCount: 6,
    location: 'Accra Central Hub',
    rating: 4.8,
    reviewsCount: 17,
    specs: ['256GB', 'Snapdragon 8 Gen 3', '12GB RAM', 'Leica Summilux', '120W Charge'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvG1O9gt8Bp-0HlZgFlWkxWfiPtcTN2SQ8nzjbuX2MNgXaSrfxFi8k_5LYAIlJXywxGHIhwYhnPsz9HMtjKPrbt0R3S3aDFbSDoXtnxiN15CovhDlz3Wb4WO_952-xyFGLfD-THPEljyPfq2RbnM7-4dq_Q1xPTGDNl5FO6j1sqZIUU2eL2VzYd_zdeu5GEEW4glDaC39xtOgeiYUncxWigqA__npf_ag9S21pzFYD-Z_-P-C8SJi2sg',
    description: 'Next-generation Leica Summilux optical lens with variable aperture, Xiaomi HyperOS, Snapdragon 8 Gen 3 processor and lightning fast 120W HyperCharge.',
    isFeatured: true
  },
  // 5. Samsung Galaxy A55 5G
  {
    id: 'samsung-galaxy-a55',
    name: 'Samsung Galaxy A55 5G 128GB Awesome Navy',
    category: 'smartphones',
    brand: 'Samsung',
    price: 4200,
    originalPrice: 4750,
    discountBadge: 'Save GH₵ 550',
    badge: 'Value Pick',
    inStock: true,
    stockCount: 14,
    location: 'Nationwide',
    rating: 4.7,
    reviewsCount: 31,
    specs: ['128GB', '8GB RAM', '5000 mAh', 'Metal Frame', 'Gorilla Glass Victus+'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWHl87WbZVTxQo2OFXRU-WZrdk8_Z3Jw66uw3-q8594ZwIlxzsvFMPv6YbyRVUEsJY1FFUoA9ZNckLC7tt4sGdNdD8167l53FbkvIaChn-TKNksmCy-8igO8PTGOOXiDy4V6TnCr8l2Hw4C04Io1tZy1HPERpK3ZVJqqTGKs0jazERHuiTxw8S2puYV7x_OqcAIAYl_-3fRDKv5yVqKkg0vNlih0zADyxo8M6K0uEpNSLNp99UTAY0aA',
    description: 'Meet the Galaxy A55 5G. Premium metal flat frame, enhanced nightography camera sensor, and up to 2-day battery life with IP67 water and dust resistance.',
    isFeatured: true
  },
  // 6. Apple MacBook Pro 14" Space Black M3
  {
    id: 'macbook-pro-14-m3',
    name: 'Apple MacBook Pro 14" M3 Chip Space Black',
    category: 'laptops',
    brand: 'Apple',
    price: 24500,
    originalPrice: 28000,
    discountBadge: '-14% Promo',
    badge: 'Official Apple',
    inStock: true,
    stockCount: 3,
    location: 'Ring Road Hub',
    rating: 5.0,
    reviewsCount: 24,
    specs: ['M3 Chip', '16GB Unified', '512GB SSD', 'Liquid Retina XDR', '22hr Battery'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvX7fzBtvHTqLwgEfL29iUA4qfbCTV-RVveSw_D9i5oZSgXI21cy3mz_d1frV13mWDdasI7GbM38vEt6QgowLgQQpVhbA7HmW9I1Lo8uA4cm5FRI6AMh0mpXGQ4cStUa5n6beW_Ix-w_u_3KjbH6xS3rWNZTBxRrbszlLacinDYGJuhB8-pwS6V7gHZTw3xuZvh8gGuxuikgaHtwl_ScMTQEDWmVK-6g4urEhBVlxwAWFBq-5cOuBKKQ',
    description: 'The world’s best pro laptop display. Liquid Retina XDR with Extreme Dynamic Range, hardware-accelerated ray tracing, up to 22 hours of battery life.',
    isFeatured: true
  },
  // 7. Dell XPS 15 9530
  {
    id: 'dell-xps-15',
    name: 'Dell XPS 15 9530 OLED Touch Platinum Silver',
    category: 'laptops',
    brand: 'Dell',
    price: 22000,
    originalPrice: 24500,
    discountBadge: '-10%',
    badge: 'Creator Top',
    inStock: true,
    stockCount: 2,
    location: 'Accra Central Hub',
    rating: 4.8,
    reviewsCount: 14,
    specs: ['Core i7 13th Gen', '32GB RAM', '1TB NVMe', '3.5K OLED Touch', 'RTX 4060'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUYXlLosx5OerpljitK2aWkIXIJtn7Mq2ygt4oHBOstJR_v-Mi_M_jECHY6QO0tgdqX8EzHT2fDjDz9bs17GIm_MU15bfPnld2rEfzAXRNIADgo0A0Pd90EYZvkj_AnR98o-8Q_dYwArwBABaAkIOk1kF6ki20ZSUlEscyf5c3XIdQr_WpacIGYPAJTu27lWxoS7wZ3ghgjOqAISFq87AqV3r437nJzMfWv7hi3fBdZ65kteRrIEgrkA',
    description: 'Stunning 3.5K OLED touch screen with 100% DCI-P3 color gamut, CNC machined aluminum chassis, carbon fiber palm rest, and NVIDIA GeForce RTX 40-series power.',
    isFeatured: true
  },
  // 8. Lenovo ThinkPad X1 Carbon Gen 11
  {
    id: 'lenovo-thinkpad-x1',
    name: 'Lenovo ThinkPad X1 Carbon Gen 11 Deep Black',
    category: 'laptops',
    brand: 'Lenovo',
    price: 18900,
    originalPrice: 21000,
    discountBadge: 'Save GH₵ 2,100',
    badge: 'Business Top',
    inStock: true,
    stockCount: 5,
    location: 'Accra & Kumasi',
    rating: 4.9,
    reviewsCount: 19,
    specs: ['Core i7 1365U', '16GB LPDDR5', '512GB SSD', '1.12kg Ultralight', 'MIL-SPEC 810H'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoSS8pBtEW0W94iUsOG7ircB76SdMr3eGSWFmZK1IlI3pTuaNRL_DqqaaW6af86coG3WDXq7xNXTLxC6q4q6-KHq4ei_QDUMwdX3uGmOyeYHNeBai8B01ZJ9VFnsBqdjuPwfUWnaBOgq1miaNYZ1v4OWY79MgLyl5TMH1AiyJmIZqzT7vwTWtHiMSIFFuWSWy44P_hFfCcq9x_Mq2DgXElRkBRhJMqlQ1qDNeph8UZs_KvSeqKlSOaEQ',
    description: 'The gold standard of corporate ultrabooks. Built with carbon fiber and magnesium alloy, legendary ThinkPad keyboard, and Intel vPro security.',
    isFeatured: true
  },
  // 9. Anker 737 GaNPrime Power Bank
  {
    id: 'anker-737-powerbank',
    name: 'Anker 737 Power Bank 24K (PowerCore 24K) 140W',
    category: 'accessories',
    brand: 'Anker',
    price: 1650,
    originalPrice: 1850,
    discountBadge: 'Save GH₵ 200',
    badge: 'Best Seller',
    inStock: true,
    stockCount: 18,
    location: 'Warehouse Ready',
    rating: 4.9,
    reviewsCount: 56,
    specs: ['140W GaN', '24,000mAh', 'Smart OLED Display', 'PowerIQ 4.0', 'MacBook Fast Charge'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUHzF0LYGOUvqgiGvgIK1lQCk4YWnU2PJ4y9WdDovFUCzH5_3VEFz1QyOtF35gx1ZcHPRJHfyGkTzXpQxF7ZUJy9bLqpLOySrC0hOWD-a8rLJ2ZLK2eohln3ywLUK9oxIrspKM6pClmpamVAxfgc9hA5zf3ePuWsPSHKtUKEcmSpSEMzp2GPphYOAxTlmZUFEZ0kYIR1x7JWJ0f0e95-VHfaT0ldvLKTAy40eFcas4d_H18TMPChWnnw',
    description: 'Equipped with the latest Power Delivery 3.1 and bi-directional technology to quickly recharge the portable charger or get a 140W ultra-powerful charge.',
    isFeatured: true
  },
  // 10. Apple AirPods Pro (2nd Gen) USB-C
  {
    id: 'apple-airpods-pro-2',
    name: 'Apple AirPods Pro (2nd Gen) USB-C MagSafe',
    category: 'audio-wearables',
    brand: 'Apple',
    price: 3250,
    originalPrice: 3800,
    discountBadge: 'Save GH₵ 550',
    badge: 'Audio Flagship',
    inStock: true,
    stockCount: 12,
    location: 'Accra Hub',
    rating: 5.0,
    reviewsCount: 78,
    specs: ['H2 Chip', 'Active Noise Cancelling', 'Adaptive Audio', 'USB-C MagSafe', 'IP54'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDw6PzbiQ8eYQIc7hs_s0KhEvs1fV7Fv1CX0PO6QihD6U2AFQJzJdc4zNXDOY_3Xh555eC-JILO1HKn_Fgo8hzSGQ0hJE5_Ndgn55uI0TOpBhEgfm7vQywT5Ib88fXqp27lyP2csuMpiCxjvHBJY-hL8dXB559FFd66cPFnDUYOfi4eFNu9P4JnXKmKbYXc1odikvnwLioevwMyfd4TGnmT09aGdQJNNT5Q8NsmN3zuWEL7lB7stY1S8w',
    description: 'Up to 2x more Active Noise Cancellation than the previous generation. Transparency mode lets you comfortably hear and interact with the world around you.',
    isFeatured: true
  },
  // 11. Sony WH-1000XM5 Over-Ear Headphones
  {
    id: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Over-Ear',
    category: 'audio-wearables',
    brand: 'Sony',
    price: 4800,
    originalPrice: 5200,
    discountBadge: 'Save GH₵ 400',
    badge: 'Audiophile Choice',
    inStock: true,
    stockCount: 2,
    location: 'Accra Hub',
    rating: 4.9,
    reviewsCount: 42,
    specs: ['Auto NC Optimizer', 'LDAC Hi-Res Audio', '30Hr Battery', 'Dual Processors', 'Silver/Black'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDab7WxCwIW-1WFGABl9gGlcjYyzLq2hekN3CjyDnHn1OK5OjotJ1Wi_cpaeav1-U_G-X44mniL82lZE0Lh3fp3WhQCIe9nQ-3NdUKsLhRjRgmHN_L9eI0zmTj5TMy_FnLBSHy6GxKQHpcqzas-JL4BuXSBMmWvS2qWtJzCqkyZmkEPKt82tVRlDZKOL0VFdfuhXx_8lm4f3zqEJlD2v-5lKfVJrETOsgBCMYaSuwb2uFq7uhF51bXSHw',
    description: 'Two processors control 8 microphones for unprecedented noise cancellation. With Auto NC Optimizer, noise canceling is automatically optimized based on your wearing conditions.',
    isFeatured: true
  },
  // 12. Samsung 45W Super Fast Adapter
  {
    id: 'samsung-45w-adapter',
    name: 'Samsung 45W Super Fast Adapter 2.0 with Cable',
    category: 'accessories',
    brand: 'Samsung',
    price: 550,
    originalPrice: 650,
    badge: 'Essential Power',
    inStock: true,
    stockCount: 25,
    location: 'All Hubs',
    rating: 4.8,
    reviewsCount: 35,
    specs: ['45W Super Fast Charge 2.0', '5A Braided Type-C Cable', 'PD 3.0 PPS', 'Compact UK Plug'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-SNdSiocnhKLwBcTH4OC-l2cAWF9WhW5Xef3bZyOukcPvlTfKTpguix5y2Nwbt9haENssBtUwicSMq2vBuhRrZkMTAgX3v5CfTTFvoD68o6FwiYMVsulOgZOqvDsk7ORlrM0qCVswgNXrfv_yZMkYaeAxPhBiz0Ojx5MWEuYiYr0W-poGYOdenm9i6ut4YFufC6LerzKHfRU00pkX7HRelT-JzDNHhT2X9bmYJ2UoQPrSge_LoQxbnA',
    description: 'Charge Galaxy S24 Ultra, S23 Ultra, and tablets at maximum speed. Includes heavy-duty 5A USB-C to USB-C cable designed for everyday dependability.',
    isFeatured: true
  },
  // 13. Apple iPhone 15 Blue
  {
    id: 'apple-iphone-15',
    name: 'Apple iPhone 15 128GB Blue',
    category: 'smartphones',
    brand: 'Apple',
    price: 10850,
    originalPrice: 11900,
    discountBadge: 'Save GH₵ 1,050',
    badge: 'Hot Pick',
    inStock: true,
    stockCount: 8,
    location: 'Accra Store',
    rating: 4.8,
    reviewsCount: 29,
    specs: ['128GB', 'A16 Bionic', 'Dynamic Island', '48MP Main Camera', 'USB-C'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLAgEYA9b7_rfOAPk1csN8gYD0sCA8xlWuS-yoHIR9xq_VpVaIgTGM067cZCgaHD-tISDJlDh0DeVXtZESbWHPwRC-w17PAGIRFo8LcNJIom1KWyZin7sOPR6yYXZI80OcZ2cJ8bAPXxwG5m0Dd4jglNKifJIjtejLO6X3Ljw_dL4Rgp7HuyRbVTOTvOIEVeKgZZkKxWTyHLKdmHzkFDM1Ty9FCJQzjly915jO1CTtRmdOCe0UOEWoHQ',
    description: 'Dynamic Island bubbles up alerts and Live Activities. Durable color-infused glass and aluminum design with 48MP main camera.',
    isFeatured: false
  },
  // 14. Samsung Galaxy Z Fold 5
  {
    id: 'samsung-z-fold-5',
    name: 'Samsung Galaxy Z Fold 5 256GB Phantom Black',
    category: 'smartphones',
    brand: 'Samsung',
    price: 18500,
    originalPrice: 20500,
    discountBadge: 'Save GH₵ 2,000',
    badge: 'Foldable Pro',
    inStock: true,
    stockCount: 3,
    location: 'Accra Hub',
    rating: 4.9,
    reviewsCount: 16,
    specs: ['256GB', '7.6" Inner AMOLED', '12GB RAM', 'Flex Hinge', 'Snapdragon 8 Gen 2'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpc3f4Y7QEq4DawPIluz3_zku7Bsa399364-_nvzUFUPSXSQKiDJNmV90O0_5UylqWCG9gQvbu8LFY5Nzzzy_gtaqw35Ieyxt6flv-X3abRkig_PjKVrz1Rs2W0hyrYktffVMIgwUeculkK1Hvm47MOvNXsGABPBP7w52Z1SBvoU-cTv3b6wKKtWzidyWuhXfuPOwFzpsXoJK5StWafuEs11wSKOdhlRQpuLOtLOBZkfAU2stQG1yuqA',
    description: 'Unfold an immersive 7.6-inch screen. Slimmer, lighter and more portable than ever with robust Armor Aluminum frame and zero-gap Flex Hinge.',
    isFeatured: false
  },
  // 15. Google Pixel 8a
  {
    id: 'google-pixel-8a',
    name: 'Google Pixel 8a 128GB Obsidian',
    category: 'smartphones',
    brand: 'Google',
    price: 5600,
    originalPrice: 6200,
    discountBadge: 'Save GH₵ 600',
    badge: 'New Arrival',
    inStock: true,
    stockCount: 9,
    location: 'Accra Hub',
    rating: 4.7,
    reviewsCount: 18,
    specs: ['128GB', 'Tensor G3', '7 Yrs OS Updates', 'Actua Display', 'Best Take'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfCj4-t1SZzKpRqT5uKevIz4-S92Xjulen687aQv2dK1E9TzBxVC59BCneI9ywguw6tmKMbY3DgyFG4-Y31RlKXAnYZFZgsI1o6yuknWX9Hb7iB6rqLo0gQWJGrb0S4AcRInIXWcDeiD3VyilQqdpFH_kbIJ31JGwyTsZGwoY-UwcRpc417dcSc9B_-QBC3llZ2_jGtZ8mDCIGsH1a3GvZOe_22oMyb1a2S3GCOQfJQUEhzlonC9hccw',
    description: 'The AI-powered smartphone built to last with Google Tensor G3, extraordinary camera quality, and 7 years of OS security updates.',
    isFeatured: false
  },
  // 16. Apple iPad Air 11" M2
  {
    id: 'apple-ipad-air-m2',
    name: 'Apple iPad Air 11" M2 128GB Wi-Fi',
    category: 'tablets',
    brand: 'Apple',
    price: 8750,
    originalPrice: 9900,
    discountBadge: 'Save GH₵ 1,150',
    badge: 'M2 Silicon',
    inStock: true,
    stockCount: 6,
    location: 'Accra Hub',
    rating: 4.9,
    reviewsCount: 22,
    specs: ['M2 Chip', 'Liquid Retina', 'Apple Pencil Pro Ready', 'Landscape 12MP Cam', 'Wi-Fi 6E'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-mycm1c0unc_RQDvEL4wf0GPoXRQx5sDKNUQ_b7lzRdZ3YRQprvqM-5mf9WRbjazS978NzSfXXKJdMR50Zn4KaoRLctKmUpsXqmx4vcvcZZblpNx2hOdpHQmDoHQECaLmACq0ME12OWntoKNWX-UYoxpFmOLj3zrFhbG0MH1W04K_um5zt6pbGPq5CpuVaNq-_U8jxkpdfSrS-liQ6e2-iI14Es5VpM7x7VgxTIk51qKizJWFFCc6Fw',
    description: 'iPad Air is powered by the fast Apple M2 chip. It features a stunning Liquid Retina display, landscape front camera with Center Stage, and superfast Wi-Fi 6E.',
    isFeatured: true
  },
  // 17. Dell XPS 13 Core Ultra 7
  {
    id: 'dell-xps-13-ultra-7',
    name: 'Dell XPS 13 9340 Core Ultra 7 1TB SSD',
    category: 'laptops',
    brand: 'Dell',
    price: 19400,
    originalPrice: 21500,
    discountBadge: 'Save GH₵ 2,100',
    badge: 'Intel EVO',
    inStock: true,
    stockCount: 4,
    location: 'Accra Hub',
    rating: 4.8,
    reviewsCount: 15,
    specs: ['32GB LPDDR5x', '1TB NVMe', 'Intel Core Ultra 7', 'OLED InfinityEdge', '1.19kg'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4WgSYZRydHy0aqsS8rmZfdmtb8LE7SQPApyGwghmea2HIxlA88zPJkUBjFeyyHrBKDQyjyl9up3IrRcJYZOKWGSx3t8jVSe-uewdCujASmdhWvABBw5BgyMyuL99SMJykvN7RU4Bk4pbq2mQNSKuH7ZFmzjKiypX7t4n-1S6SAHGv52pZCdsW0q9mrlKKEVqWRW8GreaVFxcOVSD-oJt61ScD0XzB9sYUNFaJTCpHNklui7Qmr13NXA',
    description: 'Iconic minimalist design crafted from machined CNC aluminum with seamless glass touch bar, invisible haptic touchpad, and brilliant OLED screen.',
    isFeatured: true
  },
  // 18. TORRAS Magnetic Shockproof Case (iPhone 15 Pro Max)
  {
    id: 'torras-case-15pm',
    name: 'TORRAS Magnetic Shockproof Case for iPhone 15 Pro Max',
    category: 'accessories',
    brand: 'Anker',
    price: 380,
    originalPrice: 450,
    badge: 'MagSafe',
    inStock: true,
    stockCount: 30,
    location: 'Ring Road Shop',
    rating: 4.9,
    reviewsCount: 64,
    specs: ['MagSafe Compatible', 'Mil-Grade Drop Tested', 'Matte Translucent Back', 'Built-in Kickstand'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDilp_o-1p6_dPaxjFk8sKvKffW-xl2XyNRMBNAYrQHL2IX7V_kt-s3HHOQQdO_Vqdw_lONBzfBxUnzDvKcD0xA6-Z-ixJQspuP_g6JaCnsdneJ3xSBUIaTvGnIbz-RHGEbWRvxJYs-RM7YwxEqmg6naKfXyzRbQTnJE33Z2T8stm9_K0g3h7TPVT4NXO8lEjRBgU5kZSIgwjjOcC9FwTnG-sXB_EKNFnzYj6HkDl1LBd3drRLmpa8qMw',
    description: 'Magnetic phone case featuring military-grade drop test certification, embedded 360-degree foldable kickstand ring, and silky soft-touch finish.',
    isFeatured: false
  },
  // 19. Apple 20W USB-C Power Adapter
  {
    id: 'apple-20w-adapter',
    name: 'Apple 20W USB-C Power Adapter (UK 3-Pin)',
    category: 'accessories',
    brand: 'Apple',
    price: 420,
    originalPrice: 480,
    badge: '100% Genuine',
    inStock: true,
    stockCount: 40,
    location: 'Warehouse Ready',
    rating: 5.0,
    reviewsCount: 88,
    specs: ['20W Output', 'UK 3-Pin Prong', '50% Charge in 30 Mins', 'Safe Thermal Protection'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA36gVlxHFYaGtX9uLK2V72iIHluoMmLj9hsbusA2eIxc5Y_70YEOdIEZ20jIgMKDqrnNAXgTMUxv1118JLxDEDNmfkB4Aeo5aCPE8Ftl8dM7lnb2IIXj9HotMrY30xmIsN36vgZDw3C08aN2A7BdfI8FK6wHJ3nx_v77spDTnH7PlbRA8wdLnFr2ABSb1MnGVFe7RWBS3fxaIRnF1ab1CgfvjreH1s_yKRwryvusNlCJhFDm3cpU8YiQ',
    description: 'Genuine Apple UK triangular prong 20W wall charger. Delivers quick charging at home, in the office, or on the go across Ghana sockets.',
    isFeatured: false
  },
  // 20. Spigen EZ Fit Tempered Glass (iPhone 15 Pro)
  {
    id: 'spigen-ez-fit-glass',
    name: 'Spigen EZ Fit Tempered Glass for iPhone 15 Pro (2-Pack)',
    category: 'accessories',
    brand: 'Apple',
    price: 220,
    badge: '2-Pack Value',
    inStock: true,
    stockCount: 50,
    location: 'All Accra Hubs',
    rating: 4.8,
    reviewsCount: 44,
    specs: ['9H Hardness', 'Auto-Align Tray Included', 'Oleophobic Coating', 'Case Friendly'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfrQipoIdsOyOHKpOOzUYB06B_Gy8asCpukAy3JnrPbnMrcaE218I3KKk_KH0h5pqGzICFYglLXgQ3HXLJHJ57TbYmIM8gIvqDVbkjUhizU_DdTzKoIA5X5fr7xjzdju-X94pJeTJplyHi-0BBWvCT3HHAj285pr9QnyWjFTF5ybzjDAy2Pp3jHPddJVJC9boVaUQXgWf43OSlyi6LVqr0NtemMWGcBEB8A7lUH0ErpSR23G8pxjKNbg',
    description: 'Premium tempered glass with innovative auto-alignment installation tray for effortless application with zero bubbles. Free showroom fitting available.',
    isFeatured: false
  }
];

export const HARDWARE_CATEGORIES = [
  { id: 'smartphones', name: 'Smartphones', count: '84 Models', icon: 'phone_iphone' },
  { id: 'laptops', name: 'Laptops', count: '42 Models', icon: 'laptop_mac' },
  { id: 'tablets', name: 'Tablets', count: '19 Models', icon: 'tablet' },
  { id: 'smartwatches', name: 'Smartwatches', count: '28 Models', icon: 'watch' },
  { id: 'audio-wearables', name: 'Audio', count: '36 Items', icon: 'headphones' },
  { id: 'chargers-power', name: 'Chargers & Power', count: '50 Items', icon: 'battery_charging_full' },
  { id: 'accessories', name: 'Accessories', count: '95 Items', icon: 'cable' }
];

export const AUTHORIZED_BRANDS = [
  'Apple',
  'Samsung',
  'Google',
  'HP',
  'Dell',
  'Lenovo',
  'Xiaomi',
  'Anker'
];
