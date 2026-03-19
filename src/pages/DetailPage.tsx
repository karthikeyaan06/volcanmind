import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search, X, Facebook, Linkedin, Twitter } from "lucide-react";
import teaBasketLogo from "@/assets/main_logo/TeaBasket_Logo-removebg-preview.png";
import tea1 from "@/assets/tea1.png";
import tea2 from "@/assets/tea2.png";
import tea3 from "@/assets/tea3.png";
import tea4 from "@/assets/tea4.png";

const allProducts = [
  { id: 1, image: tea1, name: "Morning Gold", category: "Black Tea", estate: "Nilgiri Highland Estate", price: 200 },
  { id: 2, image: tea2, name: "Spring Mist", category: "Green Tea", estate: "Mountain Spring Estate", price: 250 },
  { id: 3, image: tea3, name: "Evening Calm", category: "White Tea", estate: "Darjeeling Valley Estate", price: 180 },
  { id: 4, image: tea4, name: "Daily Blend", category: "CTC Tea", estate: "Assam Plains Estate", price: 220 },
  { id: 5, image: tea1, name: "Jade Mountain", category: "Green Tea", estate: "Mountain Spring Estate", price: 540 },
  { id: 6, image: tea2, name: "Golden Tips", category: "Orthodox Tea", estate: "Nilgiri Highland Estate", price: 380 },
  { id: 7, image: tea3, name: "Silver Needle", category: "White Tea", estate: "Darjeeling Valley Estate", price: 460 },
  { id: 8, image: tea4, name: "Breakfast Blend", category: "Black Tea", estate: "Assam Plains Estate", price: 190 },
  { id: 9, image: tea1, name: "Moonlight White", category: "White Tea", estate: "Nilgiri Highland Estate", price: 520 },
];

const typeFilters = ["Black Tea", "Green Tea", "White Tea", "Orthodox Tea", "CTC Tea"];
const bestForFilters = ["Morning", "Evening", "Night"];
const caffeineFilters = ["Low", "Medium", "High"];

const ProductCard = ({ product }: { product: typeof allProducts[0] }) => {
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 overflow-hidden relative">
      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="absolute top-3 right-3 z-10 p-1.5 bg-white rounded-full shadow"
      >
        <Heart className={`w-4 h-4 ${wishlisted ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
      </button>

      <div className="bg-gray-50 p-6 flex items-center justify-center h-48">
        <img src={product.image} alt={product.name} className="h-full object-contain" />
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-400 mb-1">{product.category}</p>
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{product.estate}</p>
        <p className="text-base font-bold text-gray-900 mt-3">₹{product.price}</p>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">−</button>
            <span className="px-3 py-1 text-sm font-medium border-x">{qty}</span>
            <button onClick={() => setQty(q => q + 1)} className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">+</button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors" style={{ backgroundColor: "#1F3D2B" }}>
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

const DetailPage = () => {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedBestFor, setSelectedBestFor] = useState<string[]>([]);
  const [selectedCaffeine, setSelectedCaffeine] = useState<string[]>([]);

  const toggleFilter = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter(v => v !== value) : [...list, value]);
  };

  const filtered = allProducts.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase());
    const matchType = selectedTypes.length === 0 || selectedTypes.includes(p.category);
    return matchSearch && matchType;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/teabasket" className="flex items-center gap-2">
              <img src={teaBasketLogo} alt="TeaBasket" className="w-8 h-8 object-contain" />
              <span className="text-lg"><span className="font-light">Tea</span><span className="font-semibold">Basket</span></span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">All Teas</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Producers</a>
              <a href="#" className="hover:text-gray-900 transition-colors">About</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Sign in
            </button>
          </div>
        </div>
      </header>

      {/* Page Title Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-400 mb-1">All Teas</p>
            <h1 className="text-2xl font-bold text-gray-900">All Teas</h1>
            <p className="text-sm text-gray-500 mt-1">Browse our curated collection of teas from trusted producers.</p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search teas..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 w-64"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8 flex-1 w-full">

        {/* Sidebar Filters */}
        <aside className="hidden md:block w-56 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
            <h2 className="font-semibold text-gray-900 mb-5">Filter by</h2>

            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Type</p>
              <div className="space-y-2">
                {typeFilters.map(f => (
                  <label key={f} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(f)}
                      onChange={() => toggleFilter(f, selectedTypes, setSelectedTypes)}
                      className="rounded border-gray-300 accent-green-800"
                    />
                    <span className="text-sm text-gray-600">{f}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Best for</p>
              <div className="space-y-2">
                {bestForFilters.map(f => (
                  <label key={f} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedBestFor.includes(f)}
                      onChange={() => toggleFilter(f, selectedBestFor, setSelectedBestFor)}
                      className="rounded border-gray-300 accent-green-800"
                    />
                    <span className="text-sm text-gray-600">{f}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Caffeine Level</p>
              <div className="space-y-2">
                {caffeineFilters.map(f => (
                  <label key={f} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCaffeine.includes(f)}
                      onChange={() => toggleFilter(f, selectedCaffeine, setSelectedCaffeine)}
                      className="rounded border-gray-300 accent-green-800"
                    />
                    <span className="text-sm text-gray-600">{f}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-4">{filtered.length} teas found</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 text-gray-400">No teas match your search.</div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0b1220" }} className="text-gray-400 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-10 justify-between">
            <div className="max-w-xs">
              <h3 className="text-white text-lg mb-2"><span className="font-extralight">Tea</span><span className="font-bold">Basket</span></h3>
              <p className="text-sm leading-relaxed mb-2">TeaBasket is a curated tea marketplace built to support small producers and everyday tea drinkers.</p>
              <p className="text-sm" style={{ color: "#B87333" }}>Built and operated by Volcanmind</p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a href="#" className="hover:text-white transition-colors">All Teas</a>
              <a href="#" className="hover:text-white transition-colors">Producers</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Help</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <Link to="/" className="hover:text-white transition-colors">Go to Volcanmind</Link>
            </nav>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>© 2026 TeaBasket. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DetailPage;
