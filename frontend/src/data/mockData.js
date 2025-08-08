// frontend/src/data/mockData.js

// Images (adjust names to match files in src/assets)
import heroImg from "../assets/hero.jpg";
import aboutImg from "../assets/event2.jpg";
import roomEconomyImg from "../assets/room1.jpg";
import roomDeluxeImg from "../assets/room4.jpg";
import roomDeluxePlusImg from "../assets/room2.jpg";

import g1 from "../assets/meal2.jpg";
import g2 from "../assets/event1.jpg";
import g3 from "../assets/meal3.jpg";
import g4 from "../assets/meal1.jpg";
import g5 from "../assets/event2.jpg";
import g6 from "../assets/meal5.jpg";

export const mockHotelData = {
  hotel: {
    name: "Teh Harbour Hotel & Lounge",
    tagline: "Luxury & Comfort in the Heart of Owerri",
    address: "Plot 137, Teh Harbour Avenue, Owerri, Imo State",
    phone: "+2349052050200",
    email: "contact@tehharbourhotel.com",
  },

  hero: {
    backgroundImage: heroImg,
    heading: "Teh Harbour Hotel & Lounge",
    subheading: "Luxury & Comfort in the Heart of Owerri",
    cta: { text: "Book Now", action: "contact" },
  },

  about: {
    heading: "About Us",
    body:
      "Nestled on Teh Harbour Avenue, Teh Harbour Hotel & Lounge offers boutique suites, a terrace lounge, a restaurant, and a nightclub—designed for first-class comfort in a sleek, modern setting.",
    image: aboutImg,
    alt: "Hotel exterior",
  },

  rooms: {
    heading: "Our Rooms & Rates",
    cards: [
      {
        title: "Economy",
        price: "₦35,000/night",
        features: ["Queen bed", "Free WiFi", "En-suite bathroom"],
        image: roomEconomyImg,
      },
      {
        title: "Deluxe",
        price: "₦90,000/night",
        features: ["King bed", "City view", "Mini-bar"],
        image: roomDeluxeImg,
      },
      {
        title: "Deluxe Plus",
        price: "₦150,000+/night",
        features: ["Suite", "Lounge area", "Complimentary breakfast"],
        image: roomDeluxePlusImg,
      },
    ],
  },

  amenities: {
    heading: "Amenities",
    items: [
      { icon: "utensils", label: "Restaurant & Kabana Dining" },
      { icon: "wine", label: "Terrace Lounge & Bar" },
      { icon: "music", label: "Nightclub & Events" },
      { icon: "wifi", label: "Complimentary WiFi" },
      { icon: "bell", label: "24/7 Reception" },
    ],
  },

  gallery: {
    heading: "Gallery",
    images: [g1, g2, g3, g4, g5, g6],
  },

  contact: {
    heading: "Get in Touch",
    address: "Plot 137, Teh Harbour Avenue, Owerri, Imo State",
    phone: "+2349052050200",
    email: "contact@tehharbourhotel.com",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.354219132149!2d7.032176171609259!3d5.516670806239884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104259005dba6d1d%3A0x7a43bd539366a1be!2sTeh%20harbour%20hotel!5e0!3m2!1sen!2suk!4v1754509721972!5m2!1sen!2suk",
    cta: { text: "Call to Book", action: "tel:+2349052050200" },
  },
};
