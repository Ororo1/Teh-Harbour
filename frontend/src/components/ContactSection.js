import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Booking Request Sent!",
      description: "We'll contact you within 24 hours to confirm your reservation.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '1',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold playfair-heading text-gray-900 mb-6">
            {data?.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto lato-body">
            Ready to experience luxury? Get in touch with us to make your reservation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold playfair-heading text-gray-900 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <MapPin className="text-yellow-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold montserrat-subheading text-gray-900 mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600 lato-body">{data?.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold montserrat-subheading text-gray-900 mb-1">
                      Phone
                    </h4>
                    <a
                      href={`tel:${data?.phone}`}
                      className="text-blue-600 hover:text-blue-800 lato-body transition-colors"
                    >
                      {data?.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold montserrat-subheading text-gray-900 mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${data?.email}`}
                      className="text-green-600 hover:text-green-800 lato-body transition-colors"
                    >
                      {data?.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="text-purple-700" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold montserrat-subheading text-gray-900 mb-1">
                      Reception Hours
                    </h4>
                    <p className="text-gray-600 lato-body">24/7 Available</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={data?.cta?.action}
                  className="cta-button inline-block text-center w-full"
                >
                  {data?.cta?.text}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src={data?.mapEmbedUrl}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Booking Form */}
          <div className="fade-in">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold playfair-heading text-gray-900 mb-8">
                Make a Reservation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold montserrat-subheading text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent lato-body"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold montserrat-subheading text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent lato-body"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold montserrat-subheading text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent lato-body"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold montserrat-subheading text-gray-700 mb-2">
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent lato-body"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold montserrat-subheading text-gray-700 mb-2">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent lato-body"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold montserrat-subheading text-gray-700 mb-2">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent lato-body"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold montserrat-subheading text-gray-700 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent lato-body"
                    placeholder="Any special requests or preferences..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 rounded-lg montserrat-subheading font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Booking Request</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;