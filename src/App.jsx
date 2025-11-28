import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Home, Instagram, Facebook } from 'lucide-react';
import img5415 from "./assets/IMG_5415.JPG";
import img5416 from "./assets/IMG_5416.JPG";
import img5417 from "./assets/IMG_5417.JPG";

const products = [
  {
    id: 1,
    name: "Cozy Cotton Tees",
    price: "2000 DA",
    description: "Soft, breathable cotton t-shirts in vibrant colors. Perfect for everyday play and comfort. Made from 100% organic cotton, these tees are gentle on sensitive skin and durable enough to withstand all your child's adventures. Available in multiple colors and fun patterns.",
    images: [img5415, img5416, img5417],
    emoji: img5415
  },
  {
    id: 2,
    name: "Princess Dresses",
    price: "$34.99",
    description: "Twirl-worthy dresses that make every day magical. Beautiful designs with comfortable fit for all-day wear. Features include adjustable straps, soft lining, and easy-care fabric. Perfect for parties, special occasions, or everyday princess moments.",
    images: ["👗", "✨", "👑"],
    emoji: "👗"
  },
  {
    id: 3,
    name: "Adventure Pants",
    price: "$24.99",
    description: "Durable and flexible pants for active kids. Reinforced knees and elastic waistband for maximum comfort during play. Made with stretchy, breathable fabric that moves with your child. Perfect for climbing, running, and exploring.",
    images: ["👖", "🏃", "⛰️"],
    emoji: "👖"
  },
  {
    id: 4,
    name: "Cozy Hoodies",
    price: "$29.99",
    description: "Ultra-soft hoodies perfect for chilly days. Fun designs and warm fleece lining keep your little ones snug and stylish. Features include kangaroo pocket, adjustable hood, and ribbed cuffs. Machine washable and pre-shrunk.",
    images: ["🧥", "🌟", "❄️"],
    emoji: "🧥"
  },
  {
    id: 5,
    name: "Summer Shorts",
    price: "$16.99",
    description: "Lightweight and breathable shorts for hot summer days. Quick-dry fabric perfect for beach and pool adventures. Elastic waistband with drawstring, multiple pockets, and UPF 50+ sun protection. Available in bright, cheerful colors.",
    images: ["🩳", "☀️", "🏖️"],
    emoji: "🩳"
  },
  {
    id: 6,
    name: "Smart Outfits",
    price: "$44.99",
    description: "Elegant sets for special occasions. Your little one will look adorable at parties, weddings, and family gatherings. Complete outfit includes coordinated top and bottom. Comfortable enough for all-day wear while looking picture-perfect.",
    images: ["👔", "🎩", "🎉"],
    emoji: "👔"
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
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-400 to-orange-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={navigateToHome} className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
              <img src={img5415} alt="Logo" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-lg" />
            </button>
            <div className="flex items-center gap-6">
              <button onClick={navigateToHome} className="text-white hover:opacity-80 transition-opacity hidden sm:block">
                Products
              </button>
              <button onClick={navigateToHome} className="text-white hover:opacity-80 transition-opacity">
                <Home size={24} />
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
        <p className="text-lg">© 2025 Albaraka Kids Fashion. Made with ❤️ for your little ones.</p>
      </footer>
    </div>
  );
}

function HomePage({ navigateToProduct }) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-50 to-orange-50 py-16 px-6 text-center">
        <h1 className="text-5xl font-bold text-pink-500 mb-4">Adorable Fashion for Little Ones</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Premium quality kids clothing that's comfortable, stylish, and made with love ✨</p>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => navigateToProduct(product)}>
              <div className="h-64 relative">
  <img 
    src={product.images[0]} 
    alt={product.name}
    className="w-full h-full object-cover"
  />
  <div className="absolute top-4 right-4 text-3xl animate-pulse">✨</div>
</div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-pink-500">{product.price}</span>
                  <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Follow Us on Social Media! 🌟</h2>
        <p className="text-xl mb-10 opacity-90">Join our community for daily inspiration, styling tips, and exclusive deals</p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a href="https://www.instagram.com/elbaraka__tiaret" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-orange-500 bg-opacity-20 backdrop-blur-lg px-8 py-4 rounded-full hover:bg-opacity-30 transition-all hover:-translate-y-1">
            <Instagram size={28} />
            <span className="font-semibold text-lg">Instagram</span>
          </a>
          <a href="https://www.facebook.com/share/1CwhC7nAEK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-blue-700 bg-opacity-20 backdrop-blur-lg px-8 py-4 rounded-full hover:bg-opacity-30 transition-all hover:-translate-y-1">
            <Facebook size={28} />
            <span className="font-semibold text-lg">Facebook</span>
          </a>
          <a href="https://www.tiktok.com/@elbaraka__14?_r=1&_t=ZS-91mECEAGAMs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-black bg-opacity-20 backdrop-blur-lg px-8 py-4 rounded-full hover:bg-opacity-30 transition-all hover:-translate-y-1">
            <span className="text-2xl">🎵</span>
            <span className="font-semibold text-lg">TikTok</span>
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
      timestamp: new Date().toLocaleString()
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
        text: '✓ Order submitted successfully! We\'ll contact you within 24 hours. Thank you! 🎉'
      });

      // Reset form
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
        text: '✗ Oops! Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Back Button */}
      <button onClick={navigateToHome} className="flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-8 font-semibold text-lg">
        <ChevronLeft size={24} />
        Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Image Slider */}
        <div>
          <div className="bg-gradient-to-br from-pink-200 to-orange-200 rounded-3xl shadow-xl overflow-hidden">
            <div className="relative h-96 flex items-center justify-center text-9xl">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />

              
              {product.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all">
                    <ChevronLeft size={28} className="text-pink-500" />
                  </button>
                  <button onClick={nextImage} className="absolute right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all">
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
            <label className="block text-lg font-semibold text-gray-700 mb-3">Quantity</label>
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
          <h2 className="text-3xl font-bold text-center mb-3">Complete Your Order 🛍️</h2>
          <p className="text-center text-gray-600 mb-8">Fill out the details below and we'll get back to you within 24 hours!</p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Parent/Guardian Name *</label>
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
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
              <label className="block text-sm font-semibold text-gray-700 mb-2">Size *</label>
              <select 
                name="size" 
                value={formData.size} 
                onChange={handleInputChange} 
                required 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors"
              >
                <option value="">Choose size...</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Shipping Address *</label>
              <textarea 
                name="address" 
                value={formData.address} 
                onChange={handleInputChange} 
                required 
                rows="3" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors resize-none" 
                placeholder="Enter your full delivery address..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
              <textarea 
                name="notes" 
                value={formData.notes} 
                onChange={handleInputChange} 
                rows="3" 
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors resize-none" 
                placeholder="Any color preferences, gift wrapping, or special instructions..."
              />
            </div>

            <button 
              onClick={handleSubmit} 
              disabled={isSubmitting} 
              className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-1"
            >
              {isSubmitting ? 'Submitting Order... ⏳' : 'Submit Order 🎉'}
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

/* 
GOOGLE APPS SCRIPT SETUP:

1. Create a new Google Sheet for orders

2. Go to Extensions > Apps Script

3. Delete any code and paste this:

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // If first row is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 
        'Product',
        'Price',
        'Quantity',
        'Parent Name', 
        'Email', 
        'Phone', 
        'Size', 
        'Shipping Address', 
        'Special Requests'
      ]);
    }
    
    // Add the order data
    sheet.appendRow([
      data.timestamp,
      data.product,
      data.price,
      data.quantity,
      data.parentName,
      data.email,
      data.phone,
      data.size,
      data.address,
      data.notes
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({status: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

4. Click "Deploy" > "New deployment"
5. Select type: "Web app"
6. Set:
   - Execute as: Me
   - Who has access: Anyone
7. Click "Deploy" and authorize
8. Copy the Web app URL
9. Replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' in the code with your URL

Done! Orders will now save to your Google Sheet automatically.
*/