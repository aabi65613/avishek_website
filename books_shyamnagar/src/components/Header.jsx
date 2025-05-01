
"use client"; // Make this a client component to use hooks

import Link from 'next/link';
import { useCart } from '@/context/CartContext'; // Import useCart
import { useState } from 'react'; // For mobile menu state
import { ShoppingCart, Search, Menu, X } from 'lucide-react'; // Import icons

const Header = () => {
  const { totalItems } = useCart(); // Get total items from cart context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Books.shyamnagar
        </Link>

        {/* Desktop Navigation & Search */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-8 text-sm"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
          {/* Navigation Links */}
          <Link href="/#categories" className="text-gray-600 hover:text-blue-600 transition duration-200">Categories</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-200">Contact</Link>
          {/* Cart Link with Item Count */}
          <Link href="/cart" className="relative text-gray-600 hover:text-blue-600 transition duration-200">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button & Cart */}
        <div className="md:hidden flex items-center space-x-4">
           {/* Cart Link for Mobile */}
           <Link href="/cart" className="relative text-gray-600 hover:text-blue-600 transition duration-200">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          {/* Mobile Menu Toggle Button */}
          <button onClick={toggleMobileMenu} className="text-gray-600 focus:outline-none">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3">
          {/* Mobile Search Bar */}
          <div className="relative mb-3">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-8 text-sm"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
          {/* Mobile Navigation Links */}
          <Link href="/#categories" className="block py-2 text-gray-600 hover:text-blue-600" onClick={toggleMobileMenu}>Categories</Link>
          <Link href="/contact" className="block py-2 text-gray-600 hover:text-blue-600" onClick={toggleMobileMenu}>Contact</Link>
          {/* Cart link is already visible in the top bar for mobile */}
        </div>
      )}
    </header>
  );
};

export default Header;

