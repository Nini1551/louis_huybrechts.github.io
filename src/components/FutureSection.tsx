
import React from 'react';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';

const FutureSection = () => {
  const perspectives = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      titre: "Objectifs Professionnels",
      description: "Jesouhaite principalement me faire des expériences professionnelles. Je souhaite apprendre et pouvoir toucher un peu à tout. J'ai besoin d'une pause dans mes études et pouvoir accomplir des ambitions professionnelles propres."
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      titre: "Engagement Associatif",
      description: "Je souhaite m'engager dans des projets associatifs à petite échelle comme des projets de bénévolat ou des initiatives locales. Je crois que chaque petite action compte et peut avoir un impact positif sur la communauté entre autres dans le domaine de l'informatique."
    }
  ];

  return (
    <section id="perspectives" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Perspectives d'Avenir</h2>
          <p className="text-xl text-gray-600">Vision et objectifs pour les années à venir</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {perspectives.map((perspective, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                  {perspective.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {perspective.titre}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {perspective.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ma Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Je souhaite simplement avancer dans la vie, apprendre de nouvelles choses et m'améliorer chaque jour. Je crois que chaque expérience, qu'elle soit petite ou grande, contribue à notre croissance personnelle et professionnelle. Mon objectif est de rester curieux, ouvert d'esprit et prêt à relever de nouveaux défis."
            </p>
            <div className="mt-6 flex justify-center">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                Passionné • Déterminé • Sociable
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
