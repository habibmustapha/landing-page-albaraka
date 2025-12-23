import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Home, Instagram, Facebook } from 'lucide-react';
import img5415 from "./assets/IMG_5415.JPG";
import img5416 from "./assets/IMG_5416.JPG";
import img5417 from "./assets/IMG_5417.JPG";
import logo from "./assets/logo.png";

const products = [
  {
    id: 1,
    name: "قمصان قطنية مريحة",
    price: "2000 دج",
    description: "قمصان قطنية ناعمة وقابلة للتنفس بألوان زاهية. مثالية للاستخدام اليومي والراحة. مصنوعة من القطن العضوي 100%، هذه القمصان لطيفة على البشرة الحساسة ومتينة بما يكفي لتحمل جميع مغامرات طفلك. متوفرة بألوان وأنماط متعددة وممتعة.",
    images: [img5415, img5416, img5417],
    emoji: "👕",
    sizeType: "age"
  },
  {
    id: 2,
    name: "فساتين الأميرات",
    price: "3500 دج",
    description: "فساتين رائعة تجعل كل يوم سحرياً. تصاميم جميلة مع راحة مناسبة للارتداء طوال اليوم. تتضمن أحزمة قابلة للتعديل، بطانة ناعمة، وقماش سهل العناية. مثالية للحفلات والمناسبات الخاصة أو لحظات الأميرة اليومية.",
    images: ["👗", "✨", "👑"],
    emoji: "👗",
    sizeType: "age"
  },
  {
    id: 3,
    name: "بناطيل المغامرات",
    price: "2500 دج",
    description: "بناطيل متينة ومرنة للأطفال النشطين. ركب معززة وحزام مرن لأقصى راحة أثناء اللعب. مصنوعة من قماش مرن وقابل للتنفس يتحرك مع طفلك. مثالية للتسلق والجري والاستكشاف.",
    images: ["👖", "🏃", "⛰️"],
    emoji: "👖",
    sizeType: "age"
  },
  {
    id: 4,
    name: "سترات دافئة",
    price: "3000 دج",
    description: "سترات فائقة النعومة مثالية للأيام الباردة. تصاميم ممتعة وبطانة صوفية دافئة تحافظ على دفء أطفالك وأناقتهم. تتضمن جيب كنغر وغطاء رأس قابل للتعديل وأساور محاكة. قابلة للغسيل في الغسالة ومعالجة مسبقاً من الانكماش.",
    images: ["🧥", "🌟", "❄️"],
    emoji: "🧥",
    sizeType: "age"
  },
  {
    id: 5,
    name: "شورتات صيفية",
    price: "1700 دج",
    description: "شورتات خفيفة وقابلة للتنفس لأيام الصيف الحارة. قماش سريع الجفاف مثالي لمغامرات الشاطئ والمسبح. حزام مرن مع رباط، جيوب متعددة، وحماية من الشمس UPF 50+. متوفرة بألوان مبهجة ومشرقة.",
    images: ["🩳", "☀️", "🏖️"],
    emoji: "🩳",
    sizeType: "age"
  },
  {
    id: 6,
    name: "طقم أنيق",
    price: "4500 دج",
    description: "طقم أنيق للمناسبات الخاصة. سيبدو طفلك الصغير رائعاً في الحفلات وحفلات الزفاف والتجمعات العائلية. يتضمن الطقم الكامل قطعة علوية وسفلية منسقة. مريح بما يكفي للارتداء طوال اليوم مع مظهر مثالي للصور.",
    images: ["👔", "🎩", "🎉"],
    emoji: "👔",
    sizeType: "age"
  },
  {
    id: 7,
    name: "أحذية رياضية",
    price: "3200 دج",
    description: "أحذية رياضية مريحة ومتينة للأطفال النشطين. تصميم عصري مع نعل مرن وداعم. مثالية للجري واللعب والأنشطة اليومية. متوفرة بألوان زاهية ومبهجة.",
    images: ["👟", "⚽", "🏃‍♂️"],
    emoji: "👟",
    sizeType: "shoe"
  },
  {
    id: 8,
    name: "صنادل صيفية",
    price: "2200 دج",
    description: "صنادل خفيفة ومريحة لأيام الصيف. تصميم عملي مع أحزمة قابلة للتعديل وحماية للأصابع. مثالية للشاطئ والحدائق والنزهات العائلية.",
    images: [img5415, "🌊", "☀️"],
    emoji: "🩴",
    sizeType: "shoe"
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigateToProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-linear-to-r from-pink-400 to-orange-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={navigateToHome} className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
              <span className="text-2xl font-bold">البركة للأطفال</span>
            </button>
            <div className="flex items-center gap-6">
              <button onClick={navigateToHome} className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
              <img src={logo} alt="El Baraka Logo" className="h-12 w-12 " />
            </button>
            </div>
          </div>
        </div>
      </nav>

      {currentPage === 'home' ? (
        <HomePage navigateToProduct={navigateToProduct} />
      ) : (
        <ProductPage product={selectedProduct} navigateToHome={navigateToHome} />
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-8 mt-0">
        <p className="text-lg">© 2025 البركة لأزياء الأطفال. صنع بكل ❤️ لأطفالكم الصغار.</p>
      </footer>
    </div>
  );
}

function HomePage({ navigateToProduct }) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-linear-to-r from-pink-50 to-orange-50 py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-pink-500 mb-4">أزياء رائعة للصغار</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">ملابس أطفال عالية الجودة مريحة وأنيقة وصنعت بكل حب ✨</p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">مجموعاتنا المميزة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => navigateToProduct(product)}>
              <div className="h-64 bg-linear-to-br from-pink-200 to-orange-200 flex items-center justify-center text-9xl relative">
                {product.emoji}
                <div className="absolute top-4 left-4 text-3xl animate-pulse">✨</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-pink-500">{product.price}</span>
                  <button className="bg-linear-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
                    عرض التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-linear-to-r from-purple-600 to-indigo-600 py-16 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">تابعونا على وسائل التواصل الاجتماعي! 🌟</h2>
        <p className="text-xl mb-10 opacity-90">انضموا إلى مجتمعنا للحصول على الإلهام اليومي ونصائح التنسيق والعروض الحصرية</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://www.instagram.com/elbaraka__tiaret" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-linear-to-r from-pink-500 to-orange-500 bg-opacity-20 backdrop-blur-lg px-8 py-4 rounded-full hover:bg-opacity-30 transition-all hover:-translate-y-1">
            <Instagram size={28} />
            <span className="font-semibold text-lg">إنستغرام</span>
          </a>
          <a href="https://www.facebook.com/share/1CwhC7nAEK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-blue-700 bg-opacity-20 backdrop-blur-lg px-8 py-4 rounded-full hover:bg-opacity-30 transition-all hover:-translate-y-1">
            <Facebook size={28} />
            <span className="font-semibold text-lg">فيسبوك</span>
          </a>
          <a href="https://www.tiktok.com/@elbaraka__14?_r=1&_t=ZS-91mECEAGAMs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black bg-opacity-20 backdrop-blur-lg px-8 py-4 rounded-full hover:bg-opacity-30 transition-all hover:-translate-y-1">
            <span className="text-2xl">🎵</span>
            <span className="font-semibold text-lg">تيك توك</span>
          </a>
        </div>
      </div>
    </>
  );
}

function ProductPage({ product, navigateToHome }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    size: '',
    address: '',
    notes: ''
  });
  const [message, setMessage] = useState({ show: false, type: '', text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ show: false, type: '', text: '' });

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxVU0fP41kaSZOUKMb50jfHD9ZyWI3mM35S4fWTQ2rCMDH8fyMHcVQNpXEHX0I52to/exec';

    const orderData = {
      ...formData,
      product: product.name,
      price: product.price,
      quantity: quantity,
      timestamp: new Date().toLocaleString('ar-DZ')
    };

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      });

      setMessage({
        show: true,
        type: 'success',
        text: '✓ تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة. شكراً لك! 🎉'
      });

      setFormData({
        parentName: '',
        email: '',
        phone: '',
        size: '',
        address: '',
        notes: ''
      });
      setQuantity(1);

    } catch (error) {
      setMessage({
        show: true,
        type: 'error',
        text: '✗ عذراً! حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Button */}
      <button onClick={navigateToHome} className="flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-8 font-semibold text-lg">
        <ChevronRight size={24} />
        العودة إلى المنتجات
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Slider */}
        <div>
          <div className="bg-linear-to-br from-pink-200 to-orange-200 rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-96 flex items-center justify-center text-9xl">
              {product.images[currentImageIndex]}
              
              {product.images.length > 1 && (
                <>
                  <button onClick={nextImage} className="absolute left-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all">
                    <ChevronLeft size={28} className="text-pink-500" />
                  </button>
                  <button onClick={prevImage} className="absolute right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all">
                    <ChevronRight size={28} className="text-pink-500" />
                  </button>
                </>
              )}
            </div>
            
            {/* Image Indicators */}
            {product.images.length > 1 && (
              <div className="flex justify-center gap-2 py-4 bg-white bg-opacity-50">
                {product.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-pink-500 w-8' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-5xl font-bold text-pink-500 mb-6">{product.price}</p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">{product.description}</p>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-3">الكمية</label>
            <div className="flex items-center gap-4">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl transition-colors">
                -
              </button>
              <span className="text-3xl font-bold text-gray-800 w-16 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-lg font-bold text-xl transition-colors">
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Form */}
      <div className="mt-16 max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-3">أكمل طلبك 🛍️</h2>
          <p className="text-center text-gray-600 mb-8">املأ التفاصيل أدناه وسنتواصل معك خلال 24 ساعة!</p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">اسم ولي الأمر *</label>
              <input 
                type="text" 
                name="parentName" 
                value={formData.parentName} 
                onChange={handleInputChange} 
                required 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">البريد الإلكتروني *</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                required 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الهاتف *</label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors" 
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">المقاس *</label>
              <select 
                name="size" 
                value={formData.size} 
                onChange={handleInputChange} 
                required 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
              >
                <option value="">اختر المقاس...</option>
                {product.sizeType === 'shoe' ? (
                  <>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                  </>
                ) : (
                  <>
                    <option value="سنتان">سنتان</option>
                    <option value="3 سنوات">3 سنوات</option>
                    <option value="4 سنوات">4 سنوات</option>
                    <option value="5 سنوات">5 سنوات</option>
                    <option value="6 سنوات">6 سنوات</option>
                    <option value="7 سنوات">7 سنوات</option>
                    <option value="8 سنوات">8 سنوات</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">عنوان التوصيل *</label>
              <textarea 
                name="address" 
                value={formData.address} 
                onChange={handleInputChange} 
                required 
                rows="3" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors resize-none" 
                placeholder="أدخل عنوان التوصيل الكامل..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">طلبات خاصة</label>
              <textarea 
                name="notes" 
                value={formData.notes} 
                onChange={handleInputChange} 
                rows="3" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors resize-none" 
                placeholder="أي تفضيلات للألوان، تغليف هدايا، أو تعليمات خاصة..."
              />
            </div>

            <button 
              onClick={handleSubmit}
              disabled={isSubmitting} 
              className="w-full bg-linear-to-r from-pink-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1"
            >
              {isSubmitting ? 'جاري إرسال الطلب... ⏳' : 'إرسال الطلب 🎉'}
            </button>
          </div>

          {message.show && (
            <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${message.type === 'success' ? 'bg-green-100 text-green-800 border-2 border-green-300' : 'bg-red-100 text-red-800 border-2 border-red-300'}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;