// ===== KIFAH — Main JavaScript =====

// ===== TRANSLATIONS =====
const i18n = {
  en: {
    // Nav
    search: "Search", cart: "Cart", account: "Account", wishlist: "Wishlist",
    menu: "Menu", dark: "Dark", light: "Light", lang: "বাং",
    // Sidebar
    welcome: "Welcome to KIFAH", login_to_account: "Login to your account",
    my_account: "My Account", my_orders: "My Orders", wishlist_nav: "Wishlist",
    shop_all: "Shop All", panjabi: "Panjabi", tshirt: "T-Shirts",
    tupi: "Tupi / Topi", attar: "Attar & Perfume", home: "Home",
    settings: "Settings", logout: "Logout",
    // Hero
    hero_tag: "New Collection 2025",
    hero_title_1: "Elegance in Every",
    hero_title_2: "Stitch & Scent",
    hero_sub: "Discover premium Panjabi, T-shirts, Tupi and exquisite Attar crafted for the modern gentleman.",
    shop_now: "Shop Now", explore: "Explore Collection",
    // Marquee
    free_delivery: "Free Delivery Above ৳999",
    authentic: "100% Authentic",
    easy_returns: "7-Day Returns",
    secure: "Secure Checkout",
    cash_on_delivery: "Cash on Delivery",
    // Categories
    categories_tag: "Browse by Category",
    categories_title: "Find Your Style",
    categories_desc: "Explore our curated collections designed for every occasion.",
    panjabi_desc: "Traditional & Modern", tshirt_desc: "Premium Casual",
    tupi_desc: "Handcrafted Headwear", attar_desc: "Luxury Fragrances",
    items: "items",
    // Featured
    featured_tag: "Handpicked For You",
    featured_title: "Featured Collection",
    featured_desc: "Explore our most-loved pieces this season.",
    all: "All", filter_panjabi: "Panjabi", filter_tshirt: "T-Shirt",
    filter_tupi: "Tupi", filter_attar: "Attar",
    new_badge: "New", sale_badge: "Sale", bestseller: "Best Seller",
    add_to_cart: "Add to Cart",
    // Attar
    attar_tag: "Signature Fragrances",
    attar_title_1: "The Art of",
    attar_title_2: "Pure Attar",
    attar_desc: "Our attars are sourced from the finest rose gardens and oud forests. Each bottle holds a story of centuries-old craftsmanship.",
    shop_attar: "Shop Attar",
    // Promo
    promo_tag: "Limited Offer",
    promo_title_1: "Get",
    promo_title_2: "20% Off",
    promo_title_3: "on First Order",
    promo_desc: "Use code KIFAH20 at checkout. Valid on all orders above ৳599.",
    promo_code_label: "Use code:",
    shop_collection: "Shop Collection",
    learn_more: "Learn More",
    // Product Detail
    size: "Size", color: "Color", quantity: "Quantity",
    add_to_cart_btn: "Add to Cart", add_to_wishlist: "Add to Wishlist",
    free_ship: "Free Shipping", easy_return: "Easy Returns",
    authentic_product: "Authentic", secure_payment: "Secure Payment",
    in_stock: "In Stock", out_of_stock: "Out of Stock",
    // Cart
    your_cart: "Your Cart", cart_empty: "Your cart is empty",
    cart_empty_sub: "Add something beautiful to your cart.",
    subtotal: "Subtotal", shipping: "Shipping", free: "Free",
    total: "Total", checkout: "Proceed to Checkout",
    continue_shopping: "Continue Shopping",
    remove: "Remove",
    // Auth
    sign_in: "Sign In", create_account: "Create Account",
    welcome_back: "Welcome back",
    auth_sub: "Sign in to access your account",
    phone: "Phone Number", email: "Email Address",
    password: "Password", full_name: "Full Name",
    confirm_pass: "Confirm Password",
    or: "or",
    continue_google: "Continue with Google",
    continue_phone: "Continue with Phone",
    forgot_pass: "Forgot password?",
    no_account: "Don't have an account?",
    have_account: "Already have an account?",
    sign_up: "Sign Up",
    // Orders
    orders_title: "My Orders", order_id: "Order",
    order_date: "Placed on", view_details: "View Details",
    track_order: "Track Order", no_orders: "No orders yet",
    no_orders_sub: "Your order history will appear here.",
    // Tracking steps
    step_ordered: "Ordered", step_confirmed: "Confirmed",
    step_packed: "Packed", step_shipped: "Shipped",
    step_delivered: "Delivered",
    // Profile
    profile_title: "My Profile", edit_profile: "Edit Profile",
    personal_info: "Personal Information",
    addresses: "Addresses", notifications: "Notifications",
    security: "Security",
    save_changes: "Save Changes",
    // Checkout
    checkout_title: "Checkout",
    delivery_info: "Delivery Information",
    payment_method: "Payment Method",
    bkash: "bKash", nagad: "Nagad",
    card: "Credit / Debit Card",
    cash: "Cash on Delivery",
    place_order: "Place Order",
    order_summary: "Order Summary",
    // Wishlist
    wishlist_title: "Wishlist", wishlist_empty: "Your wishlist is empty",
    wishlist_empty_sub: "Save items you love for later.",
    // Footer
    company: "Company", about_us: "About Us", careers: "Careers",
    press: "Press", contact: "Contact",
    customer_care: "Customer Care", faq: "FAQ",
    shipping_policy: "Shipping Policy", returns: "Returns",
    track: "Track Order",
    connect: "Connect",
    footer_desc: "Bangladesh's premier destination for traditional and modern fashion for the discerning gentleman.",
    rights: "© 2025 KIFAH. All rights reserved.",
    privacy: "Privacy Policy", terms: "Terms of Service",
    // Toast
    added_cart: "Added to cart!",
    removed_cart: "Removed from cart",
    added_wishlist: "Added to wishlist!",
    removed_wishlist: "Removed from wishlist",
    login_required: "Please login to continue",
    order_placed: "Order placed successfully! 🎉",
    coupon_applied: "Coupon applied! 20% off",
    invalid_coupon: "Invalid coupon code",
    profile_saved: "Profile saved!",
    logged_out: "You have been logged out",
    // Products
    taka: "৳",
  },
  bn: {
    search: "খোঁজুন", cart: "কার্ট", account: "অ্যাকাউন্ট", wishlist: "পছন্দের তালিকা",
    menu: "মেনু", dark: "ডার্ক", light: "লাইট", lang: "EN",
    welcome: "KIFAH-এ স্বাগতম", login_to_account: "আপনার অ্যাকাউন্টে লগ ইন করুন",
    my_account: "আমার অ্যাকাউন্ট", my_orders: "আমার অর্ডার", wishlist_nav: "পছন্দের তালিকা",
    shop_all: "সব পণ্য", panjabi: "পাঞ্জাবি", tshirt: "টি-শার্ট",
    tupi: "টুপি", attar: "আতর ও পারফিউম", home: "হোম",
    settings: "সেটিংস", logout: "লগ আউট",
    hero_tag: "নতুন কালেকশন ২০২৫",
    hero_title_1: "প্রতিটি সেলাইতে",
    hero_title_2: "পরিশীলতার ছোঁয়া",
    hero_sub: "আধুনিক জেন্টেলম্যানের জন্য প্রিমিয়াম পাঞ্জাবি, টি-শার্ট, টুপি এবং উৎকৃষ্ট আতর আবিষ্কার করুন।",
    shop_now: "এখনই কিনুন", explore: "কালেকশন দেখুন",
    free_delivery: "৳৯৯৯-এর উপরে ফ্রি ডেলিভারি",
    authentic: "১০০% আসল",
    easy_returns: "৭ দিনের রিটার্ন",
    secure: "নিরাপদ চেকআউট",
    cash_on_delivery: "ক্যাশ অন ডেলিভারি",
    categories_tag: "বিভাগ অনুযায়ী",
    categories_title: "আপনার স্টাইল খুঁজুন",
    categories_desc: "প্রতিটি উপলক্ষের জন্য আমাদের বাছাই করা কালেকশন অন্বেষণ করুন।",
    panjabi_desc: "ঐতিহ্যবাহী ও আধুনিক", tshirt_desc: "প্রিমিয়াম ক্যাজুয়াল",
    tupi_desc: "হস্তনির্মিত শিরোবস্ত্র", attar_desc: "বিলাসবহুল সুগন্ধি",
    items: "টি পণ্য",
    featured_tag: "আপনার জন্য বাছাই করা",
    featured_title: "ফিচার্ড কালেকশন",
    featured_desc: "এই মৌসুমের সবচেয়ে জনপ্রিয় পিস আবিষ্কার করুন।",
    all: "সব", filter_panjabi: "পাঞ্জাবি", filter_tshirt: "টি-শার্ট",
    filter_tupi: "টুপি", filter_attar: "আতর",
    new_badge: "নতুন", sale_badge: "সেল", bestseller: "বেস্টসেলার",
    add_to_cart: "কার্টে যোগ করুন",
    attar_tag: "সিগনেচার সুগন্ধি",
    attar_title_1: "বিশুদ্ধ আতরের",
    attar_title_2: "শিল্পকলা",
    attar_desc: "আমাদের আতর সেরা গোলাপ বাগান ও উদ বন থেকে সংগ্রহ করা। প্রতিটি বোতলে রয়েছে শতাব্দী পুরনো শিল্পকলার গল্প।",
    shop_attar: "আতর কিনুন",
    promo_tag: "সীমিত অফার",
    promo_title_1: "পান",
    promo_title_2: "২০% ছাড়",
    promo_title_3: "প্রথম অর্ডারে",
    promo_desc: "চেকআউটে KIFAH20 কোড ব্যবহার করুন। ৳৫৯৯-এর উপরে সকল অর্ডারে প্রযোজ্য।",
    promo_code_label: "কোড ব্যবহার করুন:",
    shop_collection: "কালেকশন দেখুন",
    learn_more: "আরও জানুন",
    size: "সাইজ", color: "রঙ", quantity: "পরিমাণ",
    add_to_cart_btn: "কার্টে যোগ করুন", add_to_wishlist: "উইশলিস্টে যোগ করুন",
    free_ship: "ফ্রি শিপিং", easy_return: "সহজ রিটার্ন",
    authentic_product: "আসল পণ্য", secure_payment: "নিরাপদ পেমেন্ট",
    in_stock: "স্টকে আছে", out_of_stock: "স্টকে নেই",
    your_cart: "আপনার কার্ট", cart_empty: "আপনার কার্ট খালি",
    cart_empty_sub: "আপনার কার্টে সুন্দর কিছু যোগ করুন।",
    subtotal: "সাবটোটাল", shipping: "শিপিং", free: "ফ্রি",
    total: "মোট", checkout: "চেকআউট করুন",
    continue_shopping: "কেনাকাটা চালিয়ে যান",
    remove: "মুছুন",
    sign_in: "সাইন ইন", create_account: "অ্যাকাউন্ট তৈরি করুন",
    welcome_back: "পুনরায় স্বাগতম",
    auth_sub: "আপনার অ্যাকাউন্ট অ্যাক্সেস করতে সাইন ইন করুন",
    phone: "ফোন নম্বর", email: "ইমেইল ঠিকানা",
    password: "পাসওয়ার্ড", full_name: "পূর্ণ নাম",
    confirm_pass: "পাসওয়ার্ড নিশ্চিত করুন",
    or: "অথবা",
    continue_google: "গুগল দিয়ে চালিয়ে যান",
    continue_phone: "ফোন দিয়ে চালিয়ে যান",
    forgot_pass: "পাসওয়ার্ড ভুলে গেছেন?",
    no_account: "অ্যাকাউন্ট নেই?",
    have_account: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
    sign_up: "নিবন্ধন করুন",
    orders_title: "আমার অর্ডার", order_id: "অর্ডার",
    order_date: "করা হয়েছে", view_details: "বিস্তারিত দেখুন",
    track_order: "ট্র্যাক করুন", no_orders: "এখনো কোনো অর্ডার নেই",
    no_orders_sub: "আপনার অর্ডার ইতিহাস এখানে দেখাবে।",
    step_ordered: "অর্ডার", step_confirmed: "নিশ্চিত",
    step_packed: "প্যাক", step_shipped: "শিপ", step_delivered: "ডেলিভারি",
    profile_title: "আমার প্রোফাইল", edit_profile: "প্রোফাইল সম্পাদনা",
    personal_info: "ব্যক্তিগত তথ্য",
    addresses: "ঠিকানাসমূহ", notifications: "বিজ্ঞপ্তি",
    security: "নিরাপত্তা",
    save_changes: "পরিবর্তন সংরক্ষণ করুন",
    checkout_title: "চেকআউট",
    delivery_info: "ডেলিভারির তথ্য",
    payment_method: "পেমেন্ট পদ্ধতি",
    bkash: "বিকাশ", nagad: "নগদ",
    card: "ক্রেডিট / ডেবিট কার্ড",
    cash: "ক্যাশ অন ডেলিভারি",
    place_order: "অর্ডার দিন",
    order_summary: "অর্ডার সারসংক্ষেপ",
    wishlist_title: "পছন্দের তালিকা", wishlist_empty: "আপনার পছন্দের তালিকা খালি",
    wishlist_empty_sub: "পরে কেনার জন্য পছন্দের আইটেম সংরক্ষণ করুন।",
    company: "কোম্পানি", about_us: "আমাদের সম্পর্কে", careers: "ক্যারিয়ার",
    press: "প্রেস", contact: "যোগাযোগ",
    customer_care: "গ্রাহক সেবা", faq: "প্রশ্নোত্তর",
    shipping_policy: "শিপিং নীতি", returns: "রিটার্ন",
    track: "অর্ডার ট্র্যাক করুন",
    connect: "সংযোগ",
    footer_desc: "বাংলাদেশের সেরা ঐতিহ্যবাহী ও আধুনিক ফ্যাশন গন্তব্য।",
    rights: "© ২০২৫ KIFAH। সর্বস্বত্ব সংরক্ষিত।",
    privacy: "গোপনীয়তা নীতি", terms: "সেবার শর্তাবলী",
    added_cart: "কার্টে যোগ হয়েছে!",
    removed_cart: "কার্ট থেকে সরানো হয়েছে",
    added_wishlist: "পছন্দের তালিকায় যোগ হয়েছে!",
    removed_wishlist: "পছন্দের তালিকা থেকে সরানো হয়েছে",
    login_required: "চালিয়ে যেতে লগ ইন করুন",
    order_placed: "অর্ডার সফলভাবে দেওয়া হয়েছে! 🎉",
    coupon_applied: "কুপন প্রয়োগ হয়েছে! ২০% ছাড়",
    invalid_coupon: "অবৈধ কুপন কোড",
    profile_saved: "প্রোফাইল সংরক্ষিত হয়েছে!",
    logged_out: "আপনি লগ আউট হয়েছেন",
    taka: "৳",
  }
};

// ===== STATE =====
const state = {
  lang: localStorage.getItem('kifah_lang') || 'en',
  theme: localStorage.getItem('kifah_theme') || 'light',
  user: JSON.parse(localStorage.getItem('kifah_user') || 'null'),
  cart: JSON.parse(localStorage.getItem('kifah_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('kifah_wishlist') || '[]'),
  orders: JSON.parse(localStorage.getItem('kifah_orders') || 'null') || generateSampleOrders(),
  currentPage: 'home',
  currentProduct: null,
  selectedSize: null,
  selectedColor: null,
  selectedQty: 1,
  filterCategory: 'all',
  searchQuery: '',
  sortBy: 'default',
  selectedPayment: 'bkash',
  couponApplied: false,
};

function t(key) { return i18n[state.lang][key] || i18n.en[key] || key; }

function saveState() {
  localStorage.setItem('kifah_cart', JSON.stringify(state.cart));
  localStorage.setItem('kifah_wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('kifah_orders', JSON.stringify(state.orders));
  if (state.user) localStorage.setItem('kifah_user', JSON.stringify(state.user));
  else localStorage.removeItem('kifah_user');
}

function generateSampleOrders() {
  return [
    {
      id: 'KF2025001', date: '2025-01-15', status: 'delivered',
      step: 5,
      items: [
        { productId: 1, qty: 2 }, { productId: 7, qty: 1 }
      ],
      total: 2197,
    },
    {
      id: 'KF2025002', date: '2025-02-20', status: 'shipped',
      step: 4,
      items: [{ productId: 3, qty: 1 }],
      total: 999,
    },
    {
      id: 'KF2025003', date: '2025-03-05', status: 'processing',
      step: 2,
      items: [{ productId: 5, qty: 1 }, { productId: 9, qty: 2 }],
      total: 1797,
    },
  ];
}

// ===== PRODUCTS DATA =====
const products = [
  { id: 1, name: "Royal Silk Panjabi", nameBn: "রয়্যাল সিল্ক পাঞ্জাবি", category: "panjabi", price: 899, originalPrice: 1199, badge: "sale", emoji: "🧥", colors: ["#FFFFFF","#F5E6C8","#2C3E50","#8B4513"], sizes: ["S","M","L","XL","XXL"], rating: 4.8, reviews: 124, desc: "Crafted from premium silk fabric with intricate embroidery details. Perfect for Eid and special occasions.", descBn: "সূক্ষ্ম এমব্রয়ডারি বিশিষ্ট প্রিমিয়াম সিল্ক কাপড়ে তৈরি। ঈদ ও বিশেষ অনুষ্ঠানের জন্য উপযুক্ত।" },
  { id: 2, name: "Classic White Panjabi", nameBn: "ক্লাসিক হোয়াইট পাঞ্জাবি", category: "panjabi", price: 699, originalPrice: null, badge: "new", emoji: "👕", colors: ["#FFFFFF","#F0F0E8"], sizes: ["S","M","L","XL"], rating: 4.6, reviews: 89, desc: "Timeless white panjabi with fine lace work at the collar. A staple for every wardrobe.", descBn: "কলারে সূক্ষ্ম লেসের কাজ সহ চিরন্তন সাদা পাঞ্জাবি।" },
  { id: 3, name: "Heritage Karchupi Panjabi", nameBn: "হেরিটেজ কারচুপি পাঞ্জাবি", category: "panjabi", price: 1199, originalPrice: 1599, badge: "bestseller", emoji: "🎽", colors: ["#C8A96E","#8B6B42","#2C2318"], sizes: ["M","L","XL","XXL"], rating: 4.9, reviews: 216, desc: "Hand-embroidered karchupi work on premium cotton blend. A masterpiece of Bengali craftsmanship.", descBn: "প্রিমিয়াম কটন ব্লেন্ডে হাতে কারচুপির কাজ। বাংলার কারুশিল্পের এক মাস্টারপিস।" },
  { id: 4, name: "Slim Fit Graphic Tee", nameBn: "স্লিম ফিট গ্রাফিক টি", category: "tshirt", price: 349, originalPrice: null, badge: "new", emoji: "👔", colors: ["#1A1714","#2C3E50","#5A3728","#FFFFFF"], sizes: ["S","M","L","XL"], rating: 4.5, reviews: 67, desc: "Premium combed cotton graphic tee. Slim fit with a modern silhouette that drapes perfectly.", descBn: "প্রিমিয়াম কম্বড কটন গ্রাফিক টি। স্লিম ফিট, আধুনিক সিলুয়েট।" },
  { id: 5, name: "Essential Polo Shirt", nameBn: "এসেনশিয়াল পোলো শার্ট", category: "tshirt", price: 549, originalPrice: 699, badge: "sale", emoji: "👗", colors: ["#2C3E50","#FFFFFF","#8B4513","#355E3B"], sizes: ["S","M","L","XL","XXL"], rating: 4.7, reviews: 143, desc: "Classic polo shirt in premium pique fabric. Versatile enough for both casual and semi-formal wear.", descBn: "প্রিমিয়াম পিক কাপড়ে ক্লাসিক পোলো শার্ট।" },
  { id: 6, name: "Heritage Print Tee", nameBn: "হেরিটেজ প্রিন্ট টি", category: "tshirt", price: 399, originalPrice: null, badge: null, emoji: "🧡", colors: ["#C8A96E","#8B4513","#FFFFFF"], sizes: ["S","M","L","XL"], rating: 4.4, reviews: 52, desc: "Inspired by Bangladeshi heritage motifs. Premium cotton with a soft feel and rich print.", descBn: "বাংলাদেশের ঐতিহ্যবাহী মোটিফ থেকে অনুপ্রাণিত প্রিমিয়াম কটন টি।" },
  { id: 7, name: "Classic Topi / Tupi", nameBn: "ক্লাসিক টুপি", category: "tupi", price: 299, originalPrice: null, badge: "new", emoji: "🧢", colors: ["#FFFFFF","#F5E6C8","#2C2318"], sizes: ["S","M","L"], rating: 4.8, reviews: 98, desc: "Handwoven cotton tupi with delicate embroidery. Lightweight and breathable for daily use.", descBn: "সূক্ষ্ম এমব্রয়ডারি সহ হাতে বোনা কটন টুপি।" },
  { id: 8, name: "Kufi Cap — Gold Thread", nameBn: "কুফি ক্যাপ — গোল্ড থ্রেড", category: "tupi", price: 449, originalPrice: 599, badge: "sale", emoji: "⛑️", colors: ["#FFFFFF","#C8A96E","#2C2318"], sizes: ["S","M","L","XL"], rating: 4.9, reviews: 77, desc: "Elegant kufi cap with gold thread embroidery. Handcrafted by master artisans.", descBn: "গোল্ড থ্রেড এমব্রয়ডারি সহ মার্জিত কুফি ক্যাপ। মাস্টার কারিগরদের হাতে তৈরি।" },
  { id: 9, name: "Oud Al Shams Attar", nameBn: "উদ আল শামস আতর", category: "attar", price: 599, originalPrice: 799, badge: "bestseller", emoji: "🧴", colors: ["#C8A96E","#8B6B42"], sizes: ["3ml","6ml","12ml"], rating: 4.9, reviews: 312, desc: "A majestic blend of aged oud, saffron and rose. Crafted in the tradition of Arabian perfumery.", descBn: "পুরনো উদ, জাফরান ও গোলাপের রাজকীয় মিশ্রণ। আরবি সুগন্ধি ঐতিহ্যে তৈরি।" },
  { id: 10, name: "Rooh Al Ward Rose Attar", nameBn: "রূহ আল ওয়ার্ড গোলাপ আতর", category: "attar", price: 499, originalPrice: null, badge: "new", emoji: "🌹", colors: ["#E8A0A0","#C87080"], sizes: ["3ml","6ml","12ml"], rating: 4.8, reviews: 189, desc: "Distilled from thousands of Bulgarian rose petals. Pure, natural, and intensely floral.", descBn: "হাজার হাজার বুলগেরিয়ান গোলাপ পাপড়ি থেকে পাতিত। বিশুদ্ধ, প্রাকৃতিক এবং তীব্র ফুলের সুবাস।" },
  { id: 11, name: "Amber Musk Attar", nameBn: "অ্যাম্বার মাস্ক আতর", category: "attar", price: 699, originalPrice: 899, badge: "sale", emoji: "🫙", colors: ["#C8A96E","#6B4A20"], sizes: ["3ml","6ml","12ml"], rating: 4.7, reviews: 143, desc: "Warm amber fused with white musk. Long-lasting, sensuous and deeply comforting.", descBn: "সাদা মাস্কের সাথে উষ্ণ অ্যাম্বারের মিশ্রণ। দীর্ঘস্থায়ী এবং আরামদায়ক।" },
  { id: 12, name: "Jannat Al Firdaus", nameBn: "জান্নাতুল ফিরদাউস", category: "attar", price: 799, originalPrice: null, badge: "bestseller", emoji: "✨", colors: ["#C8A96E","#4A3728"], sizes: ["3ml","6ml","12ml"], rating: 5.0, reviews: 428, desc: "The legendary fragrance of paradise. A complex blend of jasmine, oud, sandalwood and amber.", descBn: "জান্নাতের কিংবদন্তি সুগন্ধি। জেসমিন, উদ, চন্দন ও অ্যাম্বারের জটিল মিশ্রণ।" },
];

function getProductName(p) { return state.lang === 'bn' ? p.nameBn : p.name; }
function getProductDesc(p) { return state.lang === 'bn' ? p.descBn : p.desc; }

// ===== DOM HELPERS =====
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function showToast(message, type = 'info') {
  const container = $('#toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  applyLang();
  updateCartBadge();

  setTimeout(() => {
    const loading = $('#loading-screen');
    if (loading) { loading.classList.add('fade-out'); setTimeout(() => loading.style.display = 'none', 600); }
  }, 1800);

  setupNavbar();
  setupSidebar();
  setupAuth();
  setupCart();
  renderHomePage();

  window.addEventListener('scroll', handleScroll);
});

// ===== THEME =====
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('kifah_theme', state.theme);
  const btn = $('.theme-toggle');
  if (btn) btn.textContent = state.theme === 'dark' ? (state.lang === 'bn' ? 'লাইট' : 'Light') : (state.lang === 'bn' ? 'ডার্ক' : 'Dark');
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme();
}

// ===== LANGUAGE =====
function applyLang() {
  localStorage.setItem('kifah_lang', state.lang);
  document.documentElement.lang = state.lang;
  const btn = $('.lang-toggle');
  if (btn) btn.textContent = t('lang');
  const themeBtn = $('.theme-toggle');
  if (themeBtn) themeBtn.textContent = state.theme === 'dark' ? t('light') : t('dark');
}

function toggleLang() {
  state.lang = state.lang === 'en' ? 'bn' : 'en';
  applyLang();
  navigateTo(state.currentPage, state.currentProduct);
}

// ===== SCROLL =====
function handleScroll() {
  const navbar = $('#navbar');
  if (!navbar) return;
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}

// ===== OVERLAY =====
function showOverlay(cb) {
  const overlay = $('#overlay-backdrop');
  overlay.classList.add('active');
  overlay.onclick = cb || hideOverlay;
}
function hideOverlay() {
  const overlay = $('#overlay-backdrop');
  overlay.classList.remove('active');
  overlay.onclick = null;
}

// ===== NAVBAR =====
function setupNavbar() {
  // theme & lang buttons (dynamic, re-set on re-render)
}

// ===== SIDEBAR =====
function setupSidebar() {
  const toggle = $('.menu-toggle');
  const sidebar = $('#sidebar');
  const close = $('#sidebar-close');
  if (!toggle || !sidebar) return;

  toggle.onclick = () => {
    sidebar.classList.toggle('open');
    toggle.classList.toggle('active');
    if (sidebar.classList.contains('open')) showOverlay(() => closeSidebar());
    else { hideOverlay(); toggle.classList.remove('active'); }
  };

  if (close) close.onclick = () => closeSidebar();
}

function closeSidebar() {
  const sidebar = $('#sidebar');
  const toggle = $('.menu-toggle');
  sidebar.classList.remove('open');
  toggle.classList.remove('active');
  hideOverlay();
}

// ===== AUTH MODAL =====
function setupAuth() {
  const modal = $('#auth-modal');
  if (!modal) return;
  const closeBtn = modal.querySelector('.auth-close');
  if (closeBtn) closeBtn.onclick = closeAuth;
}

function openAuth() {
  const modal = $('#auth-modal');
  modal.classList.add('open');
  showOverlay(() => closeAuth());
}

function closeAuth() {
  const modal = $('#auth-modal');
  modal.classList.remove('open');
  hideOverlay();
}

function switchAuthTab(tab) {
  $$('.auth-tab').forEach(t => t.classList.remove('active'));
  const tabBtn = $(`.auth-tab[data-tab="${tab}"]`);
  if (tabBtn) tabBtn.classList.add('active');
  const loginForm = $('#login-form');
  const registerForm = $('#register-form');
  if (tab === 'login') { loginForm.style.display = ''; registerForm.style.display = 'none'; }
  else { loginForm.style.display = 'none'; registerForm.style.display = ''; }
}

function handleLogin(e) {
  e?.preventDefault();
  const emailInput = $('#login-email');
  const passInput = $('#login-password');
  if (!emailInput?.value || !passInput?.value) {
    showToast('Please fill all fields', 'error'); return;
  }
  state.user = { name: emailInput.value.split('@')[0].replace(/\b\w/g, c => c.toUpperCase()), email: emailInput.value, avatar: emailInput.value[0].toUpperCase() };
  saveState();
  closeAuth();
  navigateTo(state.currentPage);
  showToast(state.lang === 'bn' ? `স্বাগতম, ${state.user.name}!` : `Welcome back, ${state.user.name}!`, 'success');
}

function handleRegister(e) {
  e?.preventDefault();
  const nameInput = $('#reg-name');
  const emailInput = $('#reg-email');
  const passInput = $('#reg-password');
  if (!nameInput?.value || !emailInput?.value || !passInput?.value) {
    showToast('Please fill all fields', 'error'); return;
  }
  state.user = { name: nameInput.value, email: emailInput.value, avatar: nameInput.value[0].toUpperCase() };
  saveState();
  closeAuth();
  navigateTo(state.currentPage);
  showToast(state.lang === 'bn' ? `স্বাগতম, ${state.user.name}!` : `Welcome, ${state.user.name}!`, 'success');
}

function handleGoogleLogin() {
  state.user = { name: 'Google User', email: 'user@gmail.com', avatar: 'G' };
  saveState();
  closeAuth();
  navigateTo(state.currentPage);
  showToast('Signed in with Google!', 'success');
}

function handlePhoneLogin() {
  const phoneInput = $('#login-phone');
  if (!phoneInput?.value) { showToast('Please enter phone number', 'error'); return; }
  state.user = { name: 'KIFAH User', phone: phoneInput.value, avatar: 'K' };
  saveState();
  closeAuth();
  navigateTo(state.currentPage);
  showToast('Phone login successful!', 'success');
}

function handleLogout() {
  state.user = null;
  saveState();
  closeSidebar();
  navigateTo('home');
  showToast(t('logged_out'));
}

// ===== CART =====
function setupCart() {}

function openCart() {
  const drawer = $('#cart-drawer');
  drawer.classList.add('open');
  showOverlay(() => closeCart());
  renderCartDrawer();
}

function closeCart() {
  const drawer = $('#cart-drawer');
  drawer.classList.remove('open');
  hideOverlay();
}

function addToCart(productId, qty = 1, size = null, color = null) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const sz = size || product.sizes[0];
  const cl = color || product.colors[0];
  const key = `${productId}-${sz}-${cl}`;
  const existing = state.cart.find(i => i.key === key);
  if (existing) existing.qty += qty;
  else state.cart.push({ key, productId, qty, size: sz, color: cl });
  saveState();
  updateCartBadge();
  showToast(t('added_cart'), 'success');
}

function removeFromCart(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  saveState();
  updateCartBadge();
  renderCartDrawer();
  showToast(t('removed_cart'));
}

function updateCartQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  if (item.qty === 0) removeFromCart(key);
  else { saveState(); renderCartDrawer(); }
  updateCartBadge();
}

function updateCartBadge() {
  const total = state.cart.reduce((sum, i) => sum + i.qty, 0);
  $$('.cart-badge').forEach(b => { b.textContent = total; b.style.display = total > 0 ? '' : 'none'; });
}

function getCartTotal() {
  return state.cart.reduce((sum, item) => {
    const p = products.find(x => x.id === item.productId);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function renderCartDrawer() {
  const body = $('#cart-body');
  if (!body) return;
  if (state.cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><h3>${t('cart_empty')}</h3><p>${t('cart_empty_sub')}</p></div>`;
    return;
  }
  body.innerHTML = state.cart.map(item => {
    const p = products.find(x => x.id === item.productId);
    if (!p) return '';
    return `<div class="cart-item">
      <div class="cart-item-img">${p.emoji}</div>
      <div>
        <div class="cart-item-name">${getProductName(p)}</div>
        <div class="cart-item-meta">${item.size} • <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${item.color};border:1px solid rgba(0,0,0,0.1);vertical-align:middle"></span></div>
        <div class="cart-item-qty">
          <button class="cart-qty-btn" onclick="updateCartQty('${item.key}',-1)">−</button>
          <span class="cart-qty-num">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQty('${item.key}',1)">+</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
        <div class="cart-item-price">${t('taka')}${(p.price * item.qty).toLocaleString()}</div>
        <button class="cart-item-remove" onclick="removeFromCart('${item.key}')">🗑</button>
      </div>
    </div>`;
  }).join('');

  const subtotal = getCartTotal();
  const footer = $('#cart-footer');
  if (footer) {
    footer.querySelector('.cart-subtotal-amount').textContent = `${t('taka')}${subtotal.toLocaleString()}`;
    footer.querySelector('.cart-total-amount').textContent = `${t('taka')}${subtotal.toLocaleString()}`;
  }
}

// ===== WISHLIST =====
function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  if (idx === -1) { state.wishlist.push(productId); showToast(t('added_wishlist'), 'success'); }
  else { state.wishlist.splice(idx, 1); showToast(t('removed_wishlist')); }
  saveState();
  $$(`[data-wishlist="${productId}"]`).forEach(btn => {
    btn.classList.toggle('active', state.wishlist.includes(productId));
  });
}

// ===== NAVIGATION =====
function navigateTo(page, productId = null) {
  state.currentPage = page;
  state.currentProduct = productId;
  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  $$('.page').forEach(p => p.classList.remove('active'));
  const pageEl = $(`#${page}-page`) || (page === 'home' ? $('#home-page') : null);
  
  if (page === 'home') {
    renderHomePage();
  } else if (page === 'shop') {
    renderShopPage();
  } else if (page === 'product' && productId) {
    renderProductDetail(productId);
  } else if (page === 'orders') {
    if (!state.user) { openAuth(); return; }
    renderOrdersPage();
  } else if (page === 'profile') {
    if (!state.user) { openAuth(); return; }
    renderProfilePage();
  } else if (page === 'checkout') {
    renderCheckoutPage();
  } else if (page === 'wishlist') {
    renderWishlistPage();
  }
}

// ===== HOME PAGE =====
function renderHomePage() {
  const main = $('main');
  main.innerHTML = homePageHTML();
  setupDynamicHandlers();
  updateCartBadge();
}

function homePageHTML() {
  const featuredProducts = products.filter(p => state.filterCategory === 'all' || p.category === state.filterCategory);
  return `
  <div id="home-page" class="page active">
    <!-- HERO -->
    <section id="hero">
      <div class="hero-bg"></div>
      <div class="hero-pattern"></div>
      <div class="hero-content container">
        <div class="hero-text">
          <div class="hero-tag">${t('hero_tag')}</div>
          <h1 class="hero-title">${t('hero_title_1')} <em>${t('hero_title_2')}</em></h1>
          <p class="hero-subtitle">${t('hero_sub')}</p>
          <div class="hero-actions">
            <button class="btn-primary" onclick="navigateTo('shop')">${t('shop_now')}</button>
            <button class="btn-secondary" onclick="document.getElementById('featured').scrollIntoView({behavior:'smooth'})">${t('explore')}</button>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-image-grid">
            <div class="hero-img-card" style="background:linear-gradient(145deg,rgba(200,169,110,0.12),rgba(140,100,60,0.08))">
              <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:8rem">🧥</div>
              <div class="hero-img-label">${t('filter_panjabi')}</div>
            </div>
            <div class="hero-img-card" style="background:linear-gradient(145deg,rgba(100,130,180,0.12),rgba(60,90,140,0.08))">
              <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:6rem">👔</div>
              <div class="hero-img-label">${t('filter_tshirt')}</div>
            </div>
            <div class="hero-img-card" style="background:linear-gradient(145deg,rgba(200,169,110,0.12),rgba(140,100,60,0.08))">
              <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:6rem">🧴</div>
              <div class="hero-img-label">${t('filter_attar')}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-scroll"><span>scroll</span>↓</div>
    </section>

    <!-- MARQUEE -->
    <div class="marquee-band">
      <div class="marquee-track">
        ${Array(6).fill(`
          <div class="marquee-item">${t('free_delivery')}</div>
          <div class="marquee-item">${t('authentic')}</div>
          <div class="marquee-item">${t('easy_returns')}</div>
          <div class="marquee-item">${t('secure')}</div>
          <div class="marquee-item">${t('cash_on_delivery')}</div>
        `).join('')}
      </div>
    </div>

    <!-- CATEGORIES -->
    <section id="categories">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${t('categories_tag')}</div>
          <h2 class="section-title">${t('categories_title')}</h2>
          <div class="section-divider"></div>
          <p class="section-desc">${t('categories_desc')}</p>
        </div>
        <div class="categories-grid">
          ${[
            { cat: 'panjabi', emoji: '🧥', bg: 'cat-panjabi', name: t('panjabi'), desc: t('panjabi_desc'), count: products.filter(p=>p.category==='panjabi').length },
            { cat: 'tshirt', emoji: '👔', bg: 'cat-tshirt', name: t('tshirt'), desc: t('tshirt_desc'), count: products.filter(p=>p.category==='tshirt').length },
            { cat: 'tupi', emoji: '🧢', bg: 'cat-tupi', name: t('tupi'), desc: t('tupi_desc'), count: products.filter(p=>p.category==='tupi').length },
            { cat: 'attar', emoji: '🧴', bg: 'cat-attar', name: t('attar'), desc: t('attar_desc'), count: products.filter(p=>p.category==='attar').length },
          ].map(c => `
            <div class="category-card" onclick="navigateTo('shop');setTimeout(()=>filterProducts('${c.cat}'),100)">
              <div class="category-card-bg ${c.bg}"></div>
              <div class="category-emoji">${c.emoji}</div>
              <div class="category-info">
                <div class="category-name">${c.name}</div>
                <div class="category-count">${c.count} ${t('items')}</div>
              </div>
              <div class="category-arrow">→</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FEATURED -->
    <section id="featured">
      <div class="container">
        <div class="section-header">
          <div class="section-tag">${t('featured_tag')}</div>
          <h2 class="section-title">${t('featured_title')}</h2>
          <div class="section-divider"></div>
          <p class="section-desc">${t('featured_desc')}</p>
        </div>
        <div class="products-filter">
          <span class="filter-label">Filter:</span>
          ${[
            { key: 'all', label: t('all') },
            { key: 'panjabi', label: t('filter_panjabi') },
            { key: 'tshirt', label: t('filter_tshirt') },
            { key: 'tupi', label: t('filter_tupi') },
            { key: 'attar', label: t('filter_attar') },
          ].map(f => `<button class="filter-btn ${state.filterCategory === f.key ? 'active' : ''}" onclick="filterProducts('${f.key}')">${f.label}</button>`).join('')}
        </div>
        <div class="products-grid">
          ${featuredProducts.slice(0,8).map(p => productCardHTML(p)).join('')}
        </div>
      </div>
    </section>

    <!-- PROMO BANNER -->
    <section id="promo-banner">
      <div class="container">
        <div class="promo-inner">
          <div class="promo-tag">${t('promo_tag')}</div>
          <h2 class="promo-title">${t('promo_title_1')} <em>${t('promo_title_2')}</em> ${t('promo_title_3')}</h2>
          <p class="promo-desc">${t('promo_desc')}</p>
          <div class="promo-code">
            <span class="promo-code-label">${t('promo_code_label')}</span>
            <span class="promo-code-value">KIFAH20</span>
          </div>
          <div class="promo-actions">
            <button class="btn-promo" onclick="navigateTo('shop')">${t('shop_collection')}</button>
            <button class="btn-promo-outline" onclick="navigateTo('shop')">${t('learn_more')}</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ATTAR SPOTLIGHT -->
    <section id="attar-section">
      <div class="container">
        <div class="attar-grid">
          <div class="attar-visual">
            <div class="attar-ring"></div>
            <div class="attar-ring"></div>
            <div class="attar-visual-inner">🧴</div>
          </div>
          <div class="attar-info">
            <div class="attar-tag">${t('attar_tag')}</div>
            <h2 class="attar-title">${t('attar_title_1')} <em>${t('attar_title_2')}</em></h2>
            <p class="attar-desc">${t('attar_desc')}</p>
            <div class="attar-scents">
              ${['Oud 🌿','Rose 🌹','Musk 🤍','Amber 🟡','Jasmine 🌸','Sandalwood 🪵'].map(s => `<span class="scent-pill">${s}</span>`).join('')}
            </div>
            <div class="attar-price-box">
              <div>
                <div class="attar-price">${t('taka')}499</div>
                <div class="attar-price-sub">Starting from</div>
              </div>
              <button class="btn-attar-cta" onclick="navigateTo('shop');setTimeout(()=>filterProducts('attar'),100)">${t('shop_attar')}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  `;
}

function productCardHTML(p) {
  const isWished = state.wishlist.includes(p.id);
  const badgeMap = { new: t('new_badge'), sale: t('sale_badge'), bestseller: t('bestseller') };
  return `
  <div class="product-card" onclick="navigateTo('product',${p.id})">
    <div class="product-card-img">
      <div class="product-card-emoji">${p.emoji}</div>
      ${p.badge ? `<div class="product-badge ${p.badge}">${badgeMap[p.badge]}</div>` : ''}
      <button class="product-wishlist ${isWished ? 'active' : ''}" data-wishlist="${p.id}" onclick="event.stopPropagation();toggleWishlist(${p.id})">${isWished ? '❤️' : '🤍'}</button>
      <div class="product-card-quick">
        <button class="btn-quick-add" onclick="event.stopPropagation();addToCart(${p.id})">${t('add_to_cart')}</button>
      </div>
    </div>
    <div class="product-card-body">
      <div class="product-category-tag">${t('filter_' + p.category) || p.category}</div>
      <div class="product-name">${getProductName(p)}</div>
      <div class="product-rating">
        <span class="stars">${'★'.repeat(Math.floor(p.rating))}${p.rating % 1 >= 0.5 ? '☆' : ''}</span>
        <span class="rating-count">(${p.reviews})</span>
      </div>
      <div class="product-price-row">
        <div>
          <span class="product-price">${t('taka')}${p.price.toLocaleString()}</span>
          ${p.originalPrice ? `<span class="product-price-original">${t('taka')}${p.originalPrice.toLocaleString()}</span>` : ''}
        </div>
        <button class="btn-add-card" onclick="event.stopPropagation();addToCart(${p.id})">+</button>
      </div>
    </div>
  </div>`;
}

function filterProducts(category) {
  state.filterCategory = category;
  renderHomePage();
  const section = document.getElementById('featured');
  if (section) setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
}

// ===== SHOP PAGE =====
function renderShopPage() {
  const main = $('main');
  main.innerHTML = shopPageHTML();
  setupDynamicHandlers();
  updateCartBadge();
}

function shopPageHTML() {
  let filtered = [...products];
  if (state.filterCategory !== 'all') filtered = filtered.filter(p => p.category === state.filterCategory);
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.nameBn.includes(q));
  }
  if (state.sortBy === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if (state.sortBy === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  else if (state.sortBy === 'rating') filtered.sort((a,b) => b.rating - a.rating);

  return `
  <div id="shop-page" class="page active">
    <section>
      <div class="container">
        <div class="shop-header">
          <div class="shop-header-inner">
            <h1 class="shop-title">${state.filterCategory === 'all' ? (state.lang==='bn'?'সব পণ্য':'All Products') : t('filter_'+state.filterCategory)}</h1>
            <div class="shop-controls">
              <input type="text" class="shop-search" placeholder="${t('search')}..." value="${state.searchQuery}" oninput="state.searchQuery=this.value;renderShopPage()">
              <select class="shop-sort" onchange="state.sortBy=this.value;renderShopPage()">
                <option value="default" ${state.sortBy==='default'?'selected':''}>${state.lang==='bn'?'ডিফল্ট':'Default'}</option>
                <option value="price-asc" ${state.sortBy==='price-asc'?'selected':''}>${state.lang==='bn'?'কম দাম':'Price: Low'}</option>
                <option value="price-desc" ${state.sortBy==='price-desc'?'selected':''}>${state.lang==='bn'?'বেশি দাম':'Price: High'}</option>
                <option value="rating" ${state.sortBy==='rating'?'selected':''}>${state.lang==='bn'?'রেটিং':'Rating'}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="shop-filter-chips">
          ${[
            { key: 'all', label: t('all') },
            { key: 'panjabi', label: t('panjabi') },
            { key: 'tshirt', label: t('tshirt') },
            { key: 'tupi', label: t('tupi') },
            { key: 'attar', label: t('attar') },
          ].map(f => `<button class="filter-btn ${state.filterCategory===f.key?'active':''}" onclick="state.filterCategory='${f.key}';renderShopPage()">${f.label}</button>`).join('')}
        </div>
        ${filtered.length === 0 ? `<div class="empty-state"><div class="empty-state-icon">🔍</div><h2>${state.lang==='bn'?'কোনো পণ্য পাওয়া যায়নি':'No products found'}</h2></div>` : `<div class="products-grid">${filtered.map(p => productCardHTML(p)).join('')}</div>`}
      </div>
    </section>
  </div>`;
}

// ===== PRODUCT DETAIL =====
function renderProductDetail(productId) {
  const main = $('main');
  const p = products.find(x => x.id === productId);
  if (!p) { navigateTo('shop'); return; }
  state.selectedSize = p.sizes[0];
  state.selectedColor = p.colors[0];
  state.selectedQty = 1;
  main.innerHTML = productDetailHTML(p);
  setupDynamicHandlers();
  updateCartBadge();
}

function productDetailHTML(p) {
  const isWished = state.wishlist.includes(p.id);
  const relatedProducts = products.filter(x => x.category === p.category && x.id !== p.id).slice(0, 4);
  return `
  <div id="product-detail" class="page active">
    <div class="container" style="padding-top:32px">
      <div style="margin-bottom:24px">
        <button onclick="history.back()" style="font-family:var(--font-ui);font-size:0.8rem;color:var(--text-muted);display:flex;align-items:center;gap:6px;transition:var(--transition)" onmouseover="this.style.color='var(--gold)'" onmouseout="this.style.color='var(--text-muted)'">← ${state.lang==='bn'?'ফিরে যান':'Back'}</button>
      </div>
      <div class="product-detail-grid">
        <div class="product-detail-gallery">
          <div class="product-detail-main-img">${p.emoji}</div>
          <div class="product-detail-thumbs">
            ${Array(4).fill(p.emoji).map((e,i) => `<div class="product-detail-thumb ${i===0?'active':''}" onclick="this.closest('.product-detail-thumbs').querySelectorAll('.product-detail-thumb').forEach(t=>t.classList.remove('active'));this.classList.add('active')">${e}</div>`).join('')}
          </div>
        </div>
        <div class="product-detail-info">
          <div class="product-detail-brand">KIFAH • ${t('filter_'+p.category)}</div>
          <h1 class="product-detail-name">${getProductName(p)}</h1>
          <div class="product-detail-rating">
            <span class="stars">${'★'.repeat(Math.floor(p.rating))}${p.rating%1>=0.5?'☆':''}</span>
            <span style="font-family:var(--font-ui);font-size:0.85rem;color:var(--text-muted)">${p.rating} (${p.reviews} ${state.lang==='bn'?'রিভিউ':'reviews'})</span>
          </div>
          <div class="product-detail-price">
            ${t('taka')}${p.price.toLocaleString()}
            ${p.originalPrice ? `<span class="product-detail-price-original">${t('taka')}${p.originalPrice.toLocaleString()}</span>` : ''}
            ${p.originalPrice ? `<span style="font-size:0.9rem;color:#5A9A6A;font-family:var(--font-ui);font-weight:600">${Math.round((1-p.price/p.originalPrice)*100)}% ${state.lang==='bn'?'ছাড়':'OFF'}</span>` : ''}
          </div>
          <p class="product-detail-desc">${getProductDesc(p)}</p>

          <div>
            <div class="detail-label">${t('size')}</div>
            <div class="size-selector" id="size-selector">
              ${p.sizes.map(s => `<button class="size-btn ${s===state.selectedSize?'active':''}" onclick="state.selectedSize='${s}';document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')">${s}</button>`).join('')}
            </div>
          </div>

          <div>
            <div class="detail-label">${t('color')}</div>
            <div class="color-selector">
              ${p.colors.map(c => `<div class="color-btn ${c===state.selectedColor?'active':''}" style="background:${c};box-shadow:inset 0 0 0 1px rgba(0,0,0,0.1)" onclick="state.selectedColor='${c}';document.querySelectorAll('.color-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active')" title="${c}"></div>`).join('')}
            </div>
          </div>

          <div>
            <div class="detail-label">${t('quantity')}</div>
            <div class="qty-selector">
              <button class="qty-btn" onclick="state.selectedQty=Math.max(1,state.selectedQty-1);document.getElementById('qty-display').textContent=state.selectedQty">−</button>
              <div class="qty-display" id="qty-display">1</div>
              <button class="qty-btn" onclick="state.selectedQty++;document.getElementById('qty-display').textContent=state.selectedQty">+</button>
            </div>
          </div>

          <div class="detail-actions">
            <button class="btn-add-to-cart" onclick="addToCart(${p.id},state.selectedQty,state.selectedSize,state.selectedColor);openCart()">${t('add_to_cart_btn')}</button>
            <button class="btn-wishlist-lg ${isWished?'active':''}" data-wishlist="${p.id}" onclick="toggleWishlist(${p.id})">${isWished?'❤️':'🤍'}</button>
          </div>

          <div class="product-detail-features">
            <div class="feature-item"><span class="feature-icon">🚚</span>${t('free_ship')}</div>
            <div class="feature-item"><span class="feature-icon">↩️</span>${t('easy_return')}</div>
            <div class="feature-item"><span class="feature-icon">✅</span>${t('authentic_product')}</div>
            <div class="feature-item"><span class="feature-icon">🔒</span>${t('secure_payment')}</div>
          </div>
        </div>
      </div>

      ${relatedProducts.length > 0 ? `
      <div style="margin-top:80px">
        <div class="section-header" style="text-align:left">
          <h2 class="section-title" style="font-size:1.6rem">${state.lang==='bn'?'একই ধরনের পণ্য':'Related Products'}</h2>
        </div>
        <div class="products-grid">
          ${relatedProducts.map(rp => productCardHTML(rp)).join('')}
        </div>
      </div>` : ''}
    </div>
  </div>`;
}

// ===== ORDERS PAGE =====
function renderOrdersPage() {
  const main = $('main');
  main.innerHTML = `
  <div id="orders-page" class="page active">
    <div class="container">
      <div class="orders-header">
        <div class="section-tag" style="margin-bottom:8px">${t('my_account')}</div>
        <h1 style="font-family:var(--font-display);font-size:2rem;font-weight:400;color:var(--text-primary)">${t('orders_title')}</h1>
      </div>
      ${state.orders.length === 0 ? `
        <div class="empty-state">
          <div class="empty-state-icon">📦</div>
          <h2>${t('no_orders')}</h2>
          <p>${t('no_orders_sub')}</p>
          <button class="btn-primary" onclick="navigateTo('shop')" style="margin-top:8px">${t('shop_now')}</button>
        </div>
      ` : state.orders.map(order => orderCardHTML(order)).join('')}
    </div>
  </div>`;
  setupDynamicHandlers();
}

function orderCardHTML(order) {
  const statusLabels = { processing: 'Processing', shipped: 'Shipped', delivered: 'Delivered', pending: 'Pending' };
  const statusLabelsBn = { processing: 'প্রক্রিয়াধীন', shipped: 'শিপ হয়েছে', delivered: 'ডেলিভারি হয়েছে', pending: 'মুলতুবি' };
  const steps = [t('step_ordered'),t('step_confirmed'),t('step_packed'),t('step_shipped'),t('step_delivered')];
  const stepProgress = [(order.step/4)*100, 0];
  const progressWidth = Math.min(100, ((order.step-1)/4)*100);

  return `
  <div class="order-card">
    <div class="order-card-header">
      <div>
        <div class="order-id">${t('order_id')} #${order.id}</div>
        <div class="order-date">${t('order_date')} ${new Date(order.date).toLocaleDateString(state.lang==='bn'?'bn-BD':'en-GB',{day:'numeric',month:'long',year:'numeric'})}</div>
      </div>
      <div class="order-status status-${order.status}">${state.lang==='bn'?statusLabelsBn[order.status]:statusLabels[order.status]}</div>
    </div>
    <div class="order-card-body">
      <div class="order-items-preview">
        ${order.items.map(item => {
          const p = products.find(x=>x.id===item.productId);
          return p ? `<div class="order-item-thumb" title="${getProductName(p)}">${p.emoji}</div>` : '';
        }).join('')}
        ${order.items.length > 4 ? `<div class="order-item-thumb" style="font-size:0.8rem;color:var(--text-muted)">+${order.items.length-4}</div>` : ''}
      </div>
      <div class="order-total-row">
        <span class="order-total-label">${state.lang==='bn'?'মোট':'Total'}: <strong class="order-total-amount">${t('taka')}${order.total.toLocaleString()}</strong></span>
        <button class="btn-secondary" style="padding:8px 16px;font-size:0.75rem" onclick="alert('${state.lang==='bn'?`অর্ডার #${order.id} ট্র্যাকিং লাইভ!`:`Order #${order.id} is being tracked!`}')">${t('track_order')}</button>
      </div>
      <div class="order-tracking-bar">
        <div class="tracking-steps">
          <div class="tracking-progress" style="width:${progressWidth}%"></div>
          ${steps.map((step, i) => `
            <div class="tracking-step">
              <div class="tracking-dot ${i+1 < order.step ? 'done' : i+1 === order.step ? 'current' : ''}">
                ${i+1 < order.step ? '✓' : i+1 === order.step ? '●' : i+1}
              </div>
              <div class="tracking-label ${i+1 <= order.step ? (i+1===order.step?'current':'done') : ''}">${step}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

// ===== PROFILE PAGE =====
function renderProfilePage() {
  const u = state.user || {};
  const main = $('main');
  main.innerHTML = `
  <div id="profile-page" class="page active">
    <div class="container">
      <div class="profile-grid">
        <div class="profile-sidebar">
          <div class="profile-card">
            <div class="profile-avatar-lg">${u.avatar || u.name?.[0] || 'K'}</div>
            <div class="profile-name">${u.name || 'User'}</div>
            <div class="profile-email">${u.email || u.phone || ''}</div>
          </div>
          <div class="profile-nav">
            <div class="profile-nav-item active" onclick="showProfileSection('personal')">👤 ${t('personal_info')}</div>
            <div class="profile-nav-item" onclick="navigateTo('orders')">📦 ${t('my_orders')}</div>
            <div class="profile-nav-item" onclick="navigateTo('wishlist')">❤️ ${t('wishlist_nav')}</div>
            <div class="profile-nav-item" onclick="showProfileSection('address')">📍 ${t('addresses')}</div>
            <div class="profile-nav-item" onclick="showProfileSection('security')">🔒 ${t('security')}</div>
            <div class="profile-nav-item" onclick="handleLogout()" style="color:#C05A5A">🚪 ${t('logout')}</div>
          </div>
        </div>
        <div class="profile-content" id="profile-content">
          <div class="profile-section-title">${t('personal_info')}</div>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">${state.lang==='bn'?'নাম':'Full Name'}</label>
              <input type="text" class="form-input" value="${u.name || ''}" id="profile-name">
            </div>
            <div class="form-group">
              <label class="form-label">${t('email')}</label>
              <input type="email" class="form-input" value="${u.email || ''}" id="profile-email">
            </div>
            <div class="form-group">
              <label class="form-label">${t('phone')}</label>
              <input type="tel" class="form-input" value="${u.phone || ''}" placeholder="+880 1X XX XXX XXX" id="profile-phone">
            </div>
            <div class="form-group">
              <label class="form-label">${state.lang==='bn'?'জন্ম তারিখ':'Date of Birth'}</label>
              <input type="date" class="form-input" id="profile-dob">
            </div>
            <div class="form-group full">
              <label class="form-label">${state.lang==='bn'?'ঠিকানা':'Address'}</label>
              <input type="text" class="form-input" placeholder="${state.lang==='bn'?'আপনার ঠিকানা লিখুন':'Enter your address'}" id="profile-address">
            </div>
          </div>
          <button class="btn-save" onclick="saveProfile()">${t('save_changes')}</button>
        </div>
      </div>
    </div>
  </div>`;
  setupDynamicHandlers();
}

function showProfileSection(section) {
  document.querySelectorAll('.profile-nav-item').forEach(i => i.classList.remove('active'));
  event.target.classList.add('active');
  const content = document.getElementById('profile-content');
  if (section === 'address') {
    content.innerHTML = `<div class="profile-section-title">${t('addresses')}</div><div class="empty-state" style="padding:40px 0"><div class="empty-state-icon">📍</div><h2 style="font-size:1.1rem">${state.lang==='bn'?'কোনো ঠিকানা নেই':'No addresses saved'}</h2><button class="btn-primary" style="margin-top:8px">${state.lang==='bn'?'ঠিকানা যোগ করুন':'Add Address'}</button></div>`;
  } else if (section === 'security') {
    content.innerHTML = `<div class="profile-section-title">${t('security')}</div><div class="form-grid"><div class="form-group"><label class="form-label">${state.lang==='bn'?'বর্তমান পাসওয়ার্ড':'Current Password'}</label><input type="password" class="form-input"></div><div class="form-group"><label class="form-label">${state.lang==='bn'?'নতুন পাসওয়ার্ড':'New Password'}</label><input type="password" class="form-input"></div><div class="form-group full"><label class="form-label">${t('confirm_pass')}</label><input type="password" class="form-input"></div></div><button class="btn-save">${state.lang==='bn'?'পাসওয়ার্ড পরিবর্তন করুন':'Change Password'}</button>`;
  }
}

function saveProfile() {
  const name = document.getElementById('profile-name')?.value;
  const email = document.getElementById('profile-email')?.value;
  if (name) state.user.name = name;
  if (email) state.user.email = email;
  saveState();
  showToast(t('profile_saved'), 'success');
}

// ===== CHECKOUT PAGE =====
function renderCheckoutPage() {
  if (state.cart.length === 0) { navigateTo('shop'); return; }
  const subtotal = getCartTotal();
  const discount = state.couponApplied ? Math.round(subtotal * 0.2) : 0;
  const total = subtotal - discount;
  const main = $('main');
  main.innerHTML = `
  <div id="checkout-page" class="page active">
    <div class="container">
      <div style="margin-bottom:32px">
        <h1 style="font-family:var(--font-display);font-size:2rem;font-weight:400;color:var(--text-primary)">${t('checkout_title')}</h1>
      </div>
      <div class="checkout-grid">
        <div>
          <div class="checkout-section">
            <div class="checkout-section-title"><span class="checkout-step-num">1</span>${t('delivery_info')}</div>
            <div class="form-grid">
              <div class="form-group">
                <label class="form-label">${state.lang==='bn'?'নাম':'Full Name'}</label>
                <input type="text" class="form-input" value="${state.user?.name||''}">
              </div>
              <div class="form-group">
                <label class="form-label">${t('phone')}</label>
                <input type="tel" class="form-input" value="${state.user?.phone||''}" placeholder="+880 1X XX XXX XXX">
              </div>
              <div class="form-group full">
                <label class="form-label">${state.lang==='bn'?'ঠিকানা':'Delivery Address'}</label>
                <input type="text" class="form-input" placeholder="${state.lang==='bn'?'বাড়ি/ফ্ল্যাট নম্বর, রাস্তা, এলাকা':'House/Flat, Road, Area'}">
              </div>
              <div class="form-group">
                <label class="form-label">${state.lang==='bn'?'শহর':'City'}</label>
                <select class="form-input shop-sort">
                  ${['Dhaka','Chittagong','Sylhet','Rajshahi','Khulna','Barisal','Rangpur','Mymensingh'].map(c=>`<option>${c}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">${state.lang==='bn'?'পোস্টাল কোড':'Postal Code'}</label>
                <input type="text" class="form-input" placeholder="1200">
              </div>
            </div>
          </div>

          <div class="checkout-section">
            <div class="checkout-section-title"><span class="checkout-step-num">2</span>${t('payment_method')}</div>
            <div class="payment-methods">
              ${[
                { key: 'bkash', icon: '📱', name: t('bkash'), desc: state.lang==='bn'?'বিকাশ মোবাইল পেমেন্ট':'bKash Mobile Banking' },
                { key: 'nagad', icon: '💰', name: t('nagad'), desc: state.lang==='bn'?'নগদ মোবাইল পেমেন্ট':'Nagad Mobile Banking' },
                { key: 'card', icon: '💳', name: t('card'), desc: state.lang==='bn'?'ভিসা/মাস্টারকার্ড':'Visa / Mastercard / Amex' },
                { key: 'cash', icon: '💵', name: t('cash'), desc: state.lang==='bn'?'ডেলিভারির সময় পেমেন্ট':'Pay when you receive' },
              ].map(m => `
                <div class="payment-method ${state.selectedPayment===m.key?'selected':''}" onclick="state.selectedPayment='${m.key}';renderCheckoutPage()">
                  <div class="payment-radio"></div>
                  <div class="payment-method-info">
                    <div class="payment-method-name">${m.name}</div>
                    <div class="payment-method-desc">${m.desc}</div>
                  </div>
                  <div class="payment-icon">${m.icon}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div>
          <div class="order-summary-card">
            <div class="order-summary-header">${t('order_summary')}</div>
            <div class="order-summary-items">
              ${state.cart.map(item => {
                const p = products.find(x=>x.id===item.productId);
                if (!p) return '';
                return `<div class="order-summary-item">
                  <div class="order-summary-img">${p.emoji}</div>
                  <div class="order-summary-info">
                    <div class="order-summary-name">${getProductName(p)}</div>
                    <div class="order-summary-meta">${item.size} × ${item.qty}</div>
                  </div>
                  <div class="order-summary-price">${t('taka')}${(p.price*item.qty).toLocaleString()}</div>
                </div>`;
              }).join('')}
            </div>
            <div class="order-summary-totals">
              <div class="coupon-row">
                <input type="text" class="coupon-input" placeholder="${state.lang==='bn'?'কুপন কোড':'Coupon code'}" id="coupon-input" value="${state.couponApplied?'KIFAH20':''}">
                <button class="btn-apply-coupon" onclick="applyCoupon()">${state.lang==='bn'?'প্রয়োগ করুন':'Apply'}</button>
              </div>
              <div class="summary-row"><span>${t('subtotal')}</span><span>${t('taka')}${subtotal.toLocaleString()}</span></div>
              ${discount > 0 ? `<div class="summary-row" style="color:#5A9A6A"><span>${state.lang==='bn'?'ডিসকাউন্ট':'Discount (20%)'}</span><span>-${t('taka')}${discount.toLocaleString()}</span></div>` : ''}
              <div class="summary-row"><span>${t('shipping')}</span><span style="color:#5A9A6A">${t('free')}</span></div>
              <div class="summary-row total"><span>${t('total')}</span><span>${t('taka')}${total.toLocaleString()}</span></div>
            </div>
            <button class="btn-place-order" onclick="placeOrder()">${t('place_order')} →</button>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  setupDynamicHandlers();
}

function applyCoupon() {
  const code = document.getElementById('coupon-input')?.value?.trim().toUpperCase();
  if (code === 'KIFAH20') {
    state.couponApplied = true;
    showToast(t('coupon_applied'), 'success');
    renderCheckoutPage();
  } else {
    showToast(t('invalid_coupon'), 'error');
  }
}

function placeOrder() {
  const subtotal = getCartTotal();
  const discount = state.couponApplied ? Math.round(subtotal * 0.2) : 0;
  const total = subtotal - discount;
  const orderId = 'KF' + Date.now().toString().slice(-7);
  const newOrder = {
    id: orderId, date: new Date().toISOString().split('T')[0],
    status: 'processing', step: 2,
    items: state.cart.map(i => ({ productId: i.productId, qty: i.qty })),
    total,
  };
  state.orders.unshift(newOrder);
  state.cart = [];
  state.couponApplied = false;
  saveState();
  updateCartBadge();
  showToast(t('order_placed'), 'success');
  navigateTo('orders');
}

// ===== WISHLIST PAGE =====
function renderWishlistPage() {
  const main = $('main');
  const items = products.filter(p => state.wishlist.includes(p.id));
  main.innerHTML = `
  <div id="wishlist-page" class="page active">
    <div class="container">
      <div style="padding:32px 0 48px">
        <h1 style="font-family:var(--font-display);font-size:2rem;font-weight:400;color:var(--text-primary)">${t('wishlist_title')}</h1>
      </div>
      ${items.length === 0 ? `
        <div class="empty-state">
          <div class="empty-state-icon">❤️</div>
          <h2>${t('wishlist_empty')}</h2>
          <p>${t('wishlist_empty_sub')}</p>
          <button class="btn-primary" onclick="navigateTo('shop')" style="margin-top:8px">${t('shop_now')}</button>
        </div>
      ` : `<div class="products-grid">${items.map(p => productCardHTML(p)).join('')}</div>`}
    </div>
  </div>`;
  setupDynamicHandlers();
}

// ===== SETUP DYNAMIC HANDLERS (called after every re-render) =====
function setupDynamicHandlers() {
  // Theme toggle
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = state.theme === 'dark' ? t('light') : t('dark');
    btn.onclick = toggleTheme;
  });
  // Lang toggle
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = t('lang');
    btn.onclick = toggleLang;
  });
  // Auth tabs
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.onclick = () => switchAuthTab(tab.dataset.tab);
  });
  // Sidebar nav items
  document.querySelectorAll('.sidebar-nav-item[data-page]').forEach(item => {
    item.onclick = () => navigateTo(item.dataset.page);
  });
  // Cart trigger
  document.querySelectorAll('.cart-trigger').forEach(btn => {
    btn.onclick = openCart;
  });
  // Auth trigger
  document.querySelectorAll('.auth-trigger').forEach(btn => {
    btn.onclick = state.user ? () => navigateTo('profile') : openAuth;
  });
  // Login form
  const loginForm = document.getElementById('login-form');
  if (loginForm) loginForm.onsubmit = handleLogin;
  const regForm = document.getElementById('register-form');
  if (regForm) regForm.onsubmit = handleRegister;
  // Update sidebar user info
  renderSidebarUser();
  updateCartBadge();
  renderCartDrawer();
}

function renderSidebarUser() {
  const userSection = document.getElementById('sidebar-user-section');
  if (!userSection) return;
  if (state.user) {
    userSection.innerHTML = `
      <div class="sidebar-user-logged">
        <div class="sidebar-avatar">${state.user.avatar || state.user.name?.[0] || 'K'}</div>
        <div>
          <div class="sidebar-user-name">${state.user.name}</div>
          <div class="sidebar-user-email">${state.user.email || state.user.phone || ''}</div>
        </div>
      </div>`;
  } else {
    userSection.innerHTML = `
      <div class="sidebar-login-prompt">
        <p>${t('login_to_account')}</p>
        <button class="btn-sidebar-login auth-trigger" onclick="openAuth()">${t('sign_in')}</button>
      </div>`;
  }
}

// ===== EXPOSE TO WINDOW =====
window.navigateTo = navigateTo;
window.filterProducts = filterProducts;
window.toggleTheme = toggleTheme;
window.toggleLang = toggleLang;
window.openCart = openCart;
window.closeCart = closeCart;
window.openAuth = openAuth;
window.closeAuth = closeAuth;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.handleGoogleLogin = handleGoogleLogin;
window.handlePhoneLogin = handlePhoneLogin;
window.handleLogout = handleLogout;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQty = updateCartQty;
window.toggleWishlist = toggleWishlist;
window.switchAuthTab = switchAuthTab;
window.placeOrder = placeOrder;
window.applyCoupon = applyCoupon;
window.saveProfile = saveProfile;
window.showProfileSection = showProfileSection;
window.state = state;
