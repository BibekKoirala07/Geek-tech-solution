import { Link } from "react-router-dom";
import { ShoppingCart, X, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = ({ numberOfProduct }: { numberOfProduct: number }) => {
  const cartItemsCount = numberOfProduct;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight">GTS</h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Cart
            </Link>
          </nav>

          <Link
            to="/cart"
            className="relative flex items-center justify-center p-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-medium text-black">
                {cartItemsCount}
              </span>
            )}
          </Link>

          <button
            className="md:hidden rounded-md p-2 hover:bg-gray-800 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/cart"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Cart
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
