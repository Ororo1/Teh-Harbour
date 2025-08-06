import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = ({ hotelData }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Hotel Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold playfair-heading mb-4">
              {hotelData?.hotel?.name}
            </h3>
            <p className="text-gray-300 lato-body mb-6 leading-relaxed">
              {hotelData?.hotel?.tagline}. Experience unparalleled luxury and comfort in the heart of Owerri with our boutique suites, terrace lounge, restaurant, and nightclub.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold montserrat-subheading mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-yellow-500 transition-colors lato-body"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('rooms')}
                  className="text-gray-300 hover:text-yellow-500 transition-colors lato-body"
                >
                  Rooms & Rates
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('amenities')}
                  className="text-gray-300 hover:text-yellow-500 transition-colors lato-body"
                >
                  Amenities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-300 hover:text-yellow-500 transition-colors lato-body"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-yellow-500 transition-colors lato-body"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold montserrat-subheading mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 lato-body text-sm">
                  {hotelData?.hotel?.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-yellow-500 flex-shrink-0" />
                <a 
                  href={`tel:${hotelData?.hotel?.phone}`}
                  className="text-gray-300 hover:text-yellow-500 transition-colors lato-body"
                >
                  {hotelData?.hotel?.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-yellow-500 flex-shrink-0" />
                <a 
                  href={`mailto:${hotelData?.hotel?.email}`}
                  className="text-gray-300 hover:text-yellow-500 transition-colors lato-body"
                >
                  {hotelData?.hotel?.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 lato-body text-sm mb-4 md:mb-0">
              © 2025 {hotelData?.hotel?.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors lato-body text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors lato-body text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors lato-body text-sm">
                Booking Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;