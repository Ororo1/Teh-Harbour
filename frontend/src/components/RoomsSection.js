import React from 'react';
import { Bed, Wifi, Coffee, Tv } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const RoomsSection = ({ data }) => {
  const getFeatureIcon = (feature) => {
    const lowerFeature = feature.toLowerCase();
    if (lowerFeature.includes('bed')) return <Bed size={20} />;
    if (lowerFeature.includes('wifi')) return <Wifi size={20} />;
    if (lowerFeature.includes('breakfast') || lowerFeature.includes('bar')) return <Coffee size={20} />;
    return <Tv size={20} />;
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold playfair-heading text-gray-900 mb-6">
            {data?.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto lato-body">
            Choose from our carefully designed accommodations, each offering unique comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.cards?.map((room, index) => (
            <Card key={index} className="group hover-lift bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={`${room.title} Room`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900 montserrat-subheading">
                    {room.price}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold playfair-heading text-gray-900 mb-4">
                  {room.title}
                </h3>
                
                <div className="space-y-3">
                  {room.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 text-gray-700">
                      <span className="text-yellow-600">
                        {getFeatureIcon(feature)}
                      </span>
                      <span className="lato-body">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg montserrat-subheading font-medium hover:bg-gray-800 transition-colors duration-300">
                  Book This Room
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;