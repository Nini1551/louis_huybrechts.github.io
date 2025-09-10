
import React from 'react';
import { MapPin, Mail, Phone, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="accueil" className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bonjour, je suis
                <span className="block text-blue-600">HUYBRECHTS Louis</span>
              </h1>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={20} className="text-blue-600" />
                <span>5030 Gembloux, Belgique</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail size={20} className="text-blue-600" />
                <span>loui.huybrechts@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={20} className="text-blue-600" />
                <span>+32 483 59 87 95</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center overflow-hidden">
                {/* Remplace le lien ci-dessous par celui de ton image */}
                <img
                  src="../../public/photoCV.jpeg"
                  alt="Portrait de HUYBRECHTS Louis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
