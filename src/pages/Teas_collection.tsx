import { Link } from "react-router-dom";
import { ShoppingCart, ChevronRight, Check, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import teaBasketLogo from "@/assets/main_logo/TeaBasket_Logo-removebg-preview.png";
import tea1 from "@/assets/tea1.png";
import tea2 from "@/assets/tea2.png";
import tea3 from "@/assets/tea3.png";
import tea4 from "@/assets/tea4.png";
import { useState } from "react";

const TeasCollection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <img src={teaBasketLogo} alt="TeaBasket Logo" className="w-10 h-10 object-contain" />
                <span className="text-lg"><span className="font-light">Tea</span><span className="font-semibold">Basket</span></span>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-gray-600 transition-colors">All teas</a>
                <a href="#" className="hover:text-gray-600 transition-colors">Producers</a>
                <a href="#" className="hover:text-gray-600 transition-colors">About</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2 hover:text-gray-600 transition-colors">
                <span>Cart</span>
                <ShoppingCart className="w-5 h-5" />
              </a>
              <Link to="/">
                <Button variant="outline" className="rounded-md">
                  ← Volcanmind
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <img src={teaBasketLogo} alt="TeaBasket Logo" className="w-10 h-10 object-contain" />
              <span className="text-lg"><span className="font-light">Tea</span><span className="font-semibold">Basket</span></span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#">
                <ShoppingCart className="w-5 h-5" />
              </a>
              <Link to="/">
                <Button variant="outline" className="rounded-md text-xs px-3 py-2">
                  ← VM
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-100 transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6">
            <button onClick={() => setIsMenuOpen(false)} className="mb-8">
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col space-y-6">
              <a href="#" className="text-gray-800 hover:text-blue-600 text-lg">All teas</a>
              <a href="#" className="text-gray-800 hover:text-blue-600 text-lg">Producers</a>
              <a href="#" className="text-gray-800 hover:text-blue-600 text-lg">About</a>
            </nav>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/50 z-40" />
        )}
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/teabasket" className="hover:text-gray-900">Teas</Link>
          <ChevronRight className="w-4 h-4" />
          <span>Black Tea</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900">Nilgiri Orthodox Black Tea</span>
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Product Image */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <img src={tea1} alt="Nilgiri Orthodox Black Tea" className="w-full h-auto object-contain" />
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <p className="text-sm text-gray-600">Balanced. Clean. Everyday.</p>
            <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Literata, serif' }}>Nilgiri Orthodox Black Tea</h1>
            <p className="text-gray-700 leading-relaxed">
              A bright and smooth black tea from the Nilgiri hills, perfect for your daily routine. This orthodox tea offers a clean, lightly malty flavor that works beautifully on its own or with milk.
            </p>

            {/* Pricing */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-green-600 font-semibold">-60% ₹399</span>
              <span className="text-gray-500 line-through">MRP ₹499</span>
            </div>

            {/* Quick Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Quick Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Origin</p>
                  <p className="font-medium">Nilgiri, Tamil Nadu</p>
                </div>
                <div>
                  <p className="text-gray-600">Type</p>
                  <p className="font-medium">Black tea (Orthodox)</p>
                </div>
                <div>
                  <p className="text-gray-600">Best for</p>
                  <p className="font-medium">Morning and afternoon</p>
                </div>
                <div>
                  <p className="text-gray-600">Taste profile</p>
                  <p className="font-medium">Bright, smooth, lightly malty</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-600">Batch size</p>
                  <p className="font-medium">Small-batch production</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Quantity:</label>
                <select className="border rounded-md px-4 py-2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" className="flex-1 rounded-md border-2" style={{ borderColor: '#5E7C5A', color: '#5E7C5A' }}>
                  Add to Cart
                </Button>
                <Button className="flex-1 rounded-md text-white" style={{ backgroundColor: '#1F3D2B' }}>
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About This Tea + Why You'll Like It Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - About This Tea */}
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Literata, serif' }}>About This Tea</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>This Nilgiri Orthodox Black Tea is made for consistency and balance.</p>
                <p>Grown at high elevation and carefully processed, it produces a clean cup with natural brightness and a smooth body. It's a tea you can return to every day whether you drink it plain or with milk.</p>
                <p>There's nothing to overthink here.<br />Just a reliable, well-made black tea.</p>
              </div>
            </div>

            {/* Right Column - Why You'll Like It */}
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: 'Literata, serif' }}>Why You'll Like It</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#B87333' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Smooth and easy to drink</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#B87333' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">No harshness or sharp aftertaste</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#B87333' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Works well as an everyday tea</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#B87333' }}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700">Consistent across cups</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It's Made Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Literata, serif' }}>How It's made</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl">
            Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
          </p>
        </div>
      </section>

      {/* Brew It Your Way Section */}
      <section className="py-20" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Literata, serif' }}>Brew It Your Way</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hot Brew Card */}
            <div className="bg-gray-100 rounded-xl p-8 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-4" style={{ color: '#B87333' }}>Hot Brew</h3>
              <div className="space-y-2 text-gray-600">
                <p>1 tsp tea</p>
                <p>200 ml water</p>
                <p>Steep for 3–4 minutes</p>
              </div>
            </div>

            {/* Iced Brew Card */}
            <div className="bg-gray-100 rounded-xl p-8 shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-4" style={{ color: '#B87333' }}>Iced Brew</h3>
              <div className="space-y-2 text-gray-600">
                <p>Brew hot, then cool over ice</p>
                <p>Adjust strength to taste</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-10">
            No strict rules—brew it the way you enjoy it.
          </p>
        </div>
      </section>

      {/* About the Producer Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Literata, serif' }}>About the Producer</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              This tea is made by a small producer in the Nilgiri region who focuses on careful cultivation and consistent processing rather than high-volume output.
            </p>
            <p>
              The producer takes full responsibility for the quality of the tea—from leaf to final batch.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:underline mt-6">
            View All Teas from this producer
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Everyday Premium Promise Section */}
      <section className="py-20" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4" style={{ fontFamily: 'Literata, serif' }}>Everyday Premium Promise</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            This tea is priced for regular use not for special occasions. It's meant to be part of your daily routine, not saved for later.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#6B4E2E' }}>
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-800 font-medium">Small-batch sourcing</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#6B4E2E' }}>
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-800 font-medium">Transparent origin</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#6B4E2E' }}>
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-800 font-medium">Carefully packed and shipped fresh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-14" style={{ fontFamily: 'Literata, serif' }}>Looking for more everyday teas?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Product Card 1 - Herbal Infusions */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={tea2} alt="Evening Calm" className="w-full aspect-square object-cover rounded-lg" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mt-2">Herbal</p>
                <h3 className="font-semibold text-lg text-gray-900">Evening Calm</h3>
                <p className="text-gray-600 text-sm mt-2">Soothing herbal blend for relaxation</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium text-gray-900">₹ 180</span>
                  <button className="border rounded-md px-4 py-2 text-sm transition" style={{ borderColor: '#1F3D2B', color: '#1F3D2B' }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 - Green Teas */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={tea1} alt="Spring Mist" className="w-full aspect-square object-cover rounded-lg" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mt-2">Green</p>
                <h3 className="font-semibold text-lg text-gray-900">Spring Mist</h3>
                <p className="text-gray-600 text-sm mt-2">Light and refreshing green tea</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium text-gray-900">₹ 250</span>
                  <button className="border rounded-md px-4 py-2 text-sm transition" style={{ borderColor: '#1F3D2B', color: '#1F3D2B' }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 - Herbal Infusions */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={tea4} alt="Evening Calm" className="w-full aspect-square object-cover rounded-lg" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mt-2">Herbal</p>
                <h3 className="font-semibold text-lg text-gray-900">Evening Calm</h3>
                <p className="text-gray-600 text-sm mt-2">Soothing herbal blend for relaxation</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium text-gray-900">₹ 180</span>
                  <button className="border rounded-md px-4 py-2 text-sm transition" style={{ borderColor: '#1F3D2B', color: '#1F3D2B' }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 4 - Everyday Blends */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src={tea3} alt="Daily Blend" className="w-full aspect-square object-cover rounded-lg" />
              <div className="p-4">
                <p className="text-sm text-gray-500 mt-2">Blend</p>
                <h3 className="font-semibold text-lg text-gray-900">Daily Blend</h3>
                <p className="text-gray-600 text-sm mt-2">Balanced everyday tea with consistent flavor</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-medium text-gray-900">₹ 220</span>
                  <button className="border rounded-md px-4 py-2 text-sm transition" style={{ borderColor: '#1F3D2B', color: '#1F3D2B' }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="border rounded-md px-6 py-3 hover:bg-gray-100 transition">
              View All Teas →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h3 className="text-white font-semibold text-lg mb-4">TeaBasket</h3>
            <p className="max-w-md leading-relaxed mb-3">
              Tea Basket is a curated tea marketplace built to support small producers and everyday tea drinkers.
            </p>
            <p className="text-sm" style={{ color: '#B87333' }}>
              Built and operated by Volcanmind.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-12 text-sm">
            <a href="#" className="hover:text-white transition-colors">All Teas</a>
            <a href="#" className="hover:text-white transition-colors">Producers</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Help</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <p>© 2026 TeaBasket. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white transition-colors" aria-label="X/Twitter">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeasCollection;
