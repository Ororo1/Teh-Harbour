import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import RoomsSection from '../components/RoomsSection';
import AmenitiesSection from '../components/AmenitiesSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { mockHotelData } from '../data/mockData';

const HomePage = () => {
  const [hotelData, setHotelData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    const loadHotelData = () => {
      setTimeout(() => {
        setHotelData(mockHotelData);
        setLoading(false);
      }, 500);
    };

    loadHotelData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center primary-gradient">
        <div className="text-center">
          <div className="loading w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-white text-xl montserrat-subheading">Loading luxury experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header hotelData={hotelData} />
      <main>
        <HeroSection data={hotelData.hero} />
        <AboutSection data={hotelData.about} />
        <RoomsSection data={hotelData.rooms} />
        <AmenitiesSection data={hotelData.amenities} />
        <GallerySection data={hotelData.gallery} />
        <ContactSection data={hotelData.contact} />
      </main>
      <Footer hotelData={hotelData} />
    </div>
  );
};

export default HomePage;