import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center h-16 px-6">
        <Link to="/" className="flex items-center gap-2 text-lg text-foreground">
          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
            Logo
          </div>
          <span>Volcan<span className="font-bold">Mind</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground ml-12">
          <div className="relative group">
            <button
              onClick={() => scrollTo("products")}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Products <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="relative group">
            <button
              onClick={() => scrollTo("services")}
              className="flex items-center gap-1 hover:text-primary transition-colors"
            >
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
          <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollTo("experience")} className="hover:text-primary transition-colors">
            Experience
          </button>
        </nav>

        <div className="hidden md:block ml-auto">
          <Button onClick={() => scrollTo("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-5">
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden ml-auto" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-4 space-y-3">
          <button onClick={() => scrollTo("products")} className="block w-full text-left text-sm font-medium hover:text-primary">Products</button>
          <button onClick={() => scrollTo("services")} className="block w-full text-left text-sm font-medium hover:text-primary">Services</button>
          <button onClick={() => scrollTo("about")} className="block w-full text-left text-sm font-medium hover:text-primary">About</button>
          <button onClick={() => scrollTo("experience")} className="block w-full text-left text-sm font-medium hover:text-primary">Experience</button>
          <Button onClick={() => scrollTo("contact")} className="w-full bg-primary text-primary-foreground">Contact Us</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
