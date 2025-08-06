import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = ({ hotelData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', section: 'hero' },
    { label: 'About', section: 'about' },
    { label: 'Rooms', section: 'rooms' },
    { label: 'Amenities', section: 'amenities' },
    { label: 'Gallery', section: 'gallery' },
    { label: 'Contact', section: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold playfair-heading transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {hotelData?.hotel?.name || 'Teh Harbour Hotel'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`montserrat-subheading font-medium hover:text-yellow-500 transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${hotelData?.hotel?.phone}`}
              className={`flex items-center space-x-2 hover:text-yellow-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Phone size={16} />
              <span className="text-sm montserrat-subheading">
                {hotelData?.hotel?.phone}
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="block px-3 py-2 text-gray-700 hover:text-yellow-600 montserrat-subheading font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2 border-t border-gray-200 mt-2">
                <a
                  href={`tel:${hotelData?.hotel?.phone}`}
                  className="flex items-center space-x-2 text-gray-700 hover:text-yellow-600"
                >
                  <Phone size={16} />
                  <span className="text-sm">{hotelData?.hotel?.phone}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;