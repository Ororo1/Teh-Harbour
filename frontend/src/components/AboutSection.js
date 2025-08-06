import React from 'react';

const AboutSection = ({ data }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="fade-in">
            <h2 className="text-4xl md:text-5xl font-bold playfair-heading text-gray-900 mb-6">
              {data?.heading}
            </h2>
            <p className="text-lg text-gray-700 lato-body leading-relaxed mb-8">
              {data?.body}
            </p>
            <div className="grid grid-cols-2 gap-8 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
                <h3 className="text-3xl font-bold text-gray-900 montserrat-subheading mb-2">50+</h3>
                <p className="text-gray-600 lato-body">Luxury Rooms</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm hover-lift">
                <h3 className="text-3xl font-bold text-gray-900 montserrat-subheading mb-2">24/7</h3>
                <p className="text-gray-600 lato-body">Concierge Service</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-lift">
              <img
                src={data?.image}
                alt={data?.alt}
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;