import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            KESHAVSOFT
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`hover:text-accent transition-colors ${isActive('/') ? 'text-accent font-medium' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-accent transition-colors ${isActive('/about') ? 'text-accent font-medium' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-accent transition-colors ${isActive('/contact') ? 'text-accent font-medium' : ''}`}
            >
              Contact
            </Link>
          </div>

          <Button 
            variant="outline" 
            className="hidden md:block border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Get Started
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;