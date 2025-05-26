
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CVSection from '../components/CVSection';
import ActivitiesSection from '../components/ActivitiesSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CVSection />
      <ActivitiesSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Contactez-moi</h3>
          <p className="text-gray-400 mb-6">
            N'hésitez pas à me contacter pour toute opportunité ou question
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:loui.huybrechts@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              Email
            </a>
            <a href="tel:+32483598795" className="text-blue-400 hover:text-blue-300 transition-colors">
              Téléphone
            </a>
            <a href="https://www.linkedin.com/in/louis-huybrechts-a6839633b/" className="text-blue-400 hover:text-blue-300 transition-colors">
              LinkedIn
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500">© 2022-2025 Mon Portfolio. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
