import React from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = ({ data }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(31, 59, 77, 0.7), rgba(255, 215, 0, 0.7)), url(${data?.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-center text-white px-4 max-w-4xl mx-auto fade-in">
        <h1 className="text-5xl md:text-7xl font-bold playfair-heading mb-6 leading-tight">
          {data?.heading}
        </h1>
        <p className="text-xl md:text-2xl montserrat-subheading mb-12 leading-relaxed">
          {data?.subheading}
        </p>
        <button
          onClick={() => scrollToSection(data?.cta?.action)}
          className="cta-button text-lg px-10 py-4 hover-lift"
        >
          {data?.cta?.text}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default HeroSection;