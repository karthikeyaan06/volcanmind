import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const TeaNavbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 text-white">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
        <span className="text-lg font-semibold">TeaBasket</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex gap-8 text-sm">
        <a href="#">All teas</a>
        <a href="#">Producers</a>
        <a href="#">About</a>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <ShoppingCart size={18} />
          <span>Cart</span>
        </div>

        <Link
          to="/"
          className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
        >
          ← Volcanmind
        </Link>
      </div>
    </nav>
  );
};

export default TeaNavbar;