import { Link } from "react-router-dom";
import { ShoppingCart, Leaf, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import teaPackImage from "@/assets/tea_pack.png";
import webTeaImage from "@/assets/webTea.png";
import heroBackImage from "@/assets/Hero_back.png";
import tea1 from "@/assets/tea1.png";
import tea2 from "@/assets/tea2.png";
import tea3 from "@/assets/tea3.png";
import tea4 from "@/assets/tea4.png";
import smallBatchImage from "@/assets/page2/small-batch.png";
import quicklyImage from "@/assets/page2/quickly.png";
import noIntimidationImage from "@/assets/page2/No_intimidation.png";

const TeaBasket = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Navbar */}
        <nav className="relative z-50 sticky top-0 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-4">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between">
              {/* Left: Logo and Nav Links */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-xs text-white">
                    Logo
                  </div>
                  <span className="text-white text-lg"><span className="font-light">Tea</span><span className="font-semibold">Basket</span></span>
                </div>
                
                {/* Nav Links */}
                <div className="flex items-center gap-6 text-white">
                  <a href="#" className="hover:text-gray-300 transition-colors">All teas</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">Producers</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">About</a>
                </div>
              </div>
              
              {/* Right: Cart and Button */}
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
                  <span>Cart</span>
                  <ShoppingCart className="w-5 h-5" />
                </a>
                <Link to="/">
                  <Button className="bg-white/90 text-gray-900 hover:bg-white rounded-md px-5 border-2 border-white">
                    ← Volcanmind
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-xs text-white">
                    Logo
                  </div>
                  <span className="text-white text-lg"><span className="font-light">Tea</span><span className="font-semibold">Basket</span></span>
                </div>
                <Link to="/">
                  <Button className="bg-white/90 text-gray-900 hover:bg-white rounded-md px-3 py-2 text-sm border-2 border-white">
                    ← Volcanmind
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-4">
                  <a href="#" className="hover:text-gray-300 transition-colors">All teas</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">Producers</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">About</a>
                </div>
                <a href="#" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
                  <span>Cart</span>
                  <ShoppingCart className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
          <div className="text-center text-white max-w-4xl">
            <p className="text-sm font-medium mb-6 tracking-wide">Teabasket</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Literata, serif' }}>
              Better tea,<br />made accessible.
            </h1>
            <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-3xl mx-auto">
              Small-batch teas from dedicated producers, curated for everyday drinking.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="text-white hover:opacity-90 rounded-md px-8 py-6 text-lg" style={{ backgroundColor: '#1F3D2B' }}>
                Shop teas →
              </Button>
              <Button variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-md px-8 py-6 text-lg transition-all">
                Explore Our Teas
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Tea Basket Section */}
      <section className="py-24" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm tracking-wide" style={{ color: '#5E7C5A' }}>Why Tea Basket</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Literata, serif', color: '#1F3D2B' }}>
            Good tea doesn't need to be complicated.
          </h2>
          <p className="text-lg mt-6 max-w-2xl mx-auto" style={{ color: '#9A9A95' }}>
            Tea Basket brings together small producers who focus on quality and consistency so you can enjoy better tea every day, without needing to be an expert.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden" style={{ backgroundColor: '#6B4E2E' }}>
                <img src={smallBatchImage} alt="Small batch" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F3D2B' }}>Small-batch teas from trusted producers</h3>
              <p className="text-sm" style={{ color: '#9A9A95' }}>
                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden" style={{ backgroundColor: '#6B4E2E' }}>
                <img src={noIntimidationImage} alt="No intimidation" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F3D2B' }}>No intimidation, no unnecessary ceremony</h3>
              <p className="text-sm" style={{ color: '#9A9A95' }}>
                An all-in-one customer service platform that helps you balance everything your customers need to be happy.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden" style={{ backgroundColor: '#6B4E2E' }}>
                <img src={quicklyImage} alt="Quality" className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F3D2B' }}>Quality you can rely on, cup after cup</h3>
              <p className="text-sm" style={{ color: '#9A9A95' }}>
                Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by What Suits You Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <p className="text-sm tracking-wide" style={{ color: '#5E7C5A' }}>
                Find tea the way you actually drink it.
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Literata, serif', color: '#1F3D2B' }}>
                Shop by What Suits You
              </h2>

              <div className="space-y-8 mt-10">
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: '#1F3D2B' }}>Black Teas</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: '#9A9A95' }}>
                    Bold, balanced teas with depth and warmth. Ideal for mornings and daily routines, enjoyed plain or with milk.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: '#1F3D2B' }}>Green Teas</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: '#9A9A95' }}>
                    Fresh, light, and clean-tasting. Perfect when you want something gentle, refreshing, and easy on the palate.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: '#1F3D2B' }}>Herbal Infusions</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: '#9A9A95' }}>
                    Naturally caffeine-free blends made from herbs, flowers, and spices. Comforting, calming, and suited for any time of day.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg" style={{ color: '#1F3D2B' }}>Everyday Blends</h3>
                  <p className="mt-2 leading-relaxed" style={{ color: '#9A9A95' }}>
                    Thoughtfully combined teas designed for consistency and ease. Reliable flavors you can come back to, cup after cup.
                  </p>
                </div>
              </div>

              <button className="mt-8 px-5 py-3 rounded-md border transition-colors text-white" style={{ backgroundColor: '#5E7C5A', borderColor: '#5E7C5A' }}>
                View All Teas →
              </button>
            </div>

            {/* Right Column */}
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img src={teaPackImage} alt="Tea collection" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Teas Section */}
      <section className="py-24" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm tracking-wide" style={{ color: '#5E7C5A' }}>Featured Teas</p>
          <h2 className="text-center text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Literata, serif', color: '#1F3D2B' }}>
            Carefully selected teas,<br />available in limited quantities.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <img src={tea1} alt="Morning Gold" className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-sm" style={{ color: '#6B7280' }}>Black</p>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Morning Gold</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  A robust black tea with malty notes, perfect for starting your day.
                </p>
                <p className="text-lg font-bold text-gray-900 mt-4">₹ 200</p>
                <button className="mt-4 px-4 py-2 rounded-md border-2 flex items-center gap-2 transition-all" style={{ borderColor: '#5E7C5A', color: '#5E7C5A' }}>
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <img src={tea2} alt="Spring Mist" className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-sm" style={{ color: '#6B7280' }}>Green</p>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Spring Mist</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Light and refreshing green tea with delicate floral notes.
                </p>
                <p className="text-lg font-bold text-gray-900 mt-4">₹ 250</p>
                <button className="mt-4 px-4 py-2 rounded-md border-2 flex items-center gap-2 transition-all" style={{ borderColor: '#5E7C5A', color: '#5E7C5A' }}>
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <img src={tea3} alt="Evening Calm" className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-sm" style={{ color: '#6B7280' }}>Herbal</p>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Evening Calm</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Soothing herbal blend with chamomile and lavender for relaxation.
                </p>
                <p className="text-lg font-bold text-gray-900 mt-4">₹ 180</p>
                <button className="mt-4 px-4 py-2 rounded-md border-2 flex items-center gap-2 transition-all" style={{ borderColor: '#5E7C5A', color: '#5E7C5A' }}>
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <img src={tea4} alt="Daily Blend" className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-sm" style={{ color: '#6B7280' }}>Blend</p>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Daily Blend</h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Balanced everyday tea with consistent flavor, cup after cup.
                </p>
                <p className="text-lg font-bold text-gray-900 mt-4">₹ 220</p>
                <button className="mt-4 px-4 py-2 rounded-md border-2 flex items-center gap-2 transition-all" style={{ borderColor: '#5E7C5A', color: '#5E7C5A' }}>
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-6 py-3 rounded-md border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors">
              View All Teas →
            </button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24" style={{ backgroundColor: '#f7f7f7' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm tracking-wide" style={{ color: '#6B4E2E' }}>Who are we</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-4" style={{ fontFamily: 'Literata, serif', color: '#1F3D2B' }}>
            Made by People Who Care About Tea
          </h2>
          <p className="text-lg mt-6 leading-relaxed" style={{ color: '#9A9A95' }}>
            Behind every tea is a producer who understands their land, climate, and craft.<br />We work with producers who take responsibility for the quality of their tea so you get honesty, transparency, and consistency.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-20">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'Literata, serif', color: '#1F3D2B' }}>
            How It Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="flex gap-4 text-left">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6B4E2E' }}>
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <p className="text-lg font-semibold" style={{ color: '#1F3D2B' }}>
                Producers focus on growing and making great tea
              </p>
            </div>

            <div className="flex gap-4 text-left">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6B4E2E' }}>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <p className="text-lg font-semibold" style={{ color: '#1F3D2B' }}>
                We curate and test each tea for quality and consistency
              </p>
            </div>

            <div className="flex gap-4 text-left">
              <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6B4E2E' }}>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <p className="text-lg font-semibold" style={{ color: '#1F3D2B' }}>
                You enjoy better tea without needing to be an expert
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero + CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#f6f6f6' }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Pill Badge */}
          <div className="inline-block px-4 py-2 rounded-full border mb-6" style={{ backgroundColor: '#FAF7F2', borderColor: '#9A9A95' }}>
            <span className="text-sm" style={{ color: '#6B4E2E' }}>Tea Basket is built for daily use.</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Literata, serif', color: '#1F3D2B' }}>
            Everyday Premium, by Design
          </h2>

          {/* Subheading */}
          <p className="text-lg mb-12" style={{ color: '#9A9A95' }}>
            Good tea should fit naturally into your routine.
          </p>

          {/* Product Image */}
          <div className="mb-8">
            <img src={webTeaImage} alt="Tea Basket Collection" className="mx-auto max-w-2xl w-full rounded-lg shadow-lg" />
          </div>

          {/* Feature Text */}
          <p className="text-sm mb-8" style={{ color: '#6B4E2E' }}>
            Prices that feel fair  •  Quality that stays consistent  •  Teas you'll come back to, not just try once
          </p>

          {/* Button */}
          <button className="px-6 py-3 rounded-md border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors">
            View All Teas →
          </button>
        </div>

        {/* Bottom CTA Block */}
        <div className="max-w-6xl mx-auto px-6 mt-20">
          <div className="rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between gap-6" style={{ backgroundColor: '#6B4E2E' }}>
            <div className="text-white text-left">
              <h3 className="text-3xl font-bold mb-2">Explore our collection and find your everyday tea.</h3>
              <p className="text-lg opacity-90">Good tea should fit naturally into your routine.</p>
            </div>
            <button className="px-6 py-3 rounded-md bg-white text-gray-900 hover:bg-gray-100 transition-colors whitespace-nowrap">
              View All Teas →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0b1220' }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Top Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">TeaBasket</h3>
            <p className="text-gray-400 max-w-md leading-relaxed mb-3">
              Tea Basket is a curated tea marketplace built to support small producers and everyday tea drinkers.
            </p>
            <p className="text-sm" style={{ color: '#B87333' }}>
              Built and operated by Volcanmind.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-6 mb-12">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">All Teas</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Producers</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Help</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2026 TeaBasket. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="X/Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeaBasket;
