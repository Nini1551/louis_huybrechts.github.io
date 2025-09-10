
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
              <p className="text-xl text-gray-600 leading-relaxed">
                Étudiant passionné en technologies de l'informatique avec de nombreuses expériences extra-scolaires enrichissantes
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={20} className="text-blue-600" />
                <span>1348 Ottignies-Louvain-la-Neuve, Belgique</span>
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
                  src="https://scontent.fbru2-1.fna.fbcdn.net/v/t39.30808-6/294673146_824591818508047_5062163756966266510_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=qAW2JiGaCjkQ7kNvwHKssVi&_nc_oc=Adnaa4KKJjw1_Zs5Yt8cSTu2d0X9wWc2xYK91rXJmykL8mCxT4hnrUho73pp5k7LJVDq4a4nKkgTdZ35Rg5mfYI0&_nc_zt=23&_nc_ht=scontent.fbru2-1.fna&_nc_gid=-bvJVmj62BxChGz_TPfCYg&oh=00_AfJy93RBRzayzebGAhMsg2pQIAJNhGyPGrpCsQCP0_gHzg&oe=683A024B"
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
