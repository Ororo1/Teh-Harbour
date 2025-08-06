import React from 'react';
import { Utensils, Wine, Music, Wifi, Bell } from 'lucide-react';

const AmenitiesSection = ({ data }) => {
  const getIcon = (iconName) => {
    const iconMap = {
      'utensils': <Utensils size={32} />,
      'wine': <Wine size={32} />,
      'music': <Music size={32} />,
      'wifi': <Wifi size={32} />,
      'bell': <Bell size={32} />
    };
    return iconMap[iconName] || <Utensils size={32} />;
  };

  return (
    <section id="amenities" className="py-20 primary-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold playfair-heading text-white mb-6">
            {data?.heading}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto lato-body">
            Discover world-class facilities designed for your ultimate comfort and enjoyment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {data?.items?.map((amenity, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center hover-lift hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-white mb-4 flex justify-center group-hover:text-yellow-300 transition-colors duration-300">
                {getIcon(amenity.icon)}
              </div>
              <h3 className="text-white montserrat-subheading font-semibold text-lg leading-tight">
                {amenity.label}
              </h3>
            </div>
          ))}
        </div>

        {/* Additional Amenities Row */}
        <div className="mt-12 text-center fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white montserrat-subheading mb-2">100%</div>
              <div className="text-white/80 lato-body">Guest Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white montserrat-subheading mb-2">24/7</div>
              <div className="text-white/80 lato-body">Room Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white montserrat-subheading mb-2">50+</div>
              <div className="text-white/80 lato-body">Premium Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white montserrat-subheading mb-2">5★</div>
              <div className="text-white/80 lato-body">Luxury Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;