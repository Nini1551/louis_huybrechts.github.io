
import React from 'react';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';

const FutureSection = () => {
  const perspectives = [
    {
      icon: <Target className="text-blue-600" size={32} />,
      titre: "Objectifs Professionnels",
      description: "Me spécialiser dans le développement web full-stack et acquérir une expertise en cybersécurité pour contribuer à des projets innovants dans le domaine technologique."
    },
    {
      icon: <Lightbulb className="text-blue-600" size={32} />,
      titre: "Projets d'Étude",
      description: "Approfondir mes connaissances en intelligence artificielle et machine learning, tout en développant des compétences en gestion de projet et leadership d'équipe."
    },
    {
      icon: <Rocket className="text-blue-600" size={32} />,
      titre: "Ambitions à Long Terme",
      description: "Créer ma propre startup technologique axée sur des solutions durables et socialement responsables, en combinant innovation technique et impact positif."
    },
    {
      icon: <Users className="text-blue-600" size={32} />,
      titre: "Engagement Associatif",
      description: "Continuer à m'investir dans des associations étudiantes et des projets humanitaires, en utilisant mes compétences techniques pour soutenir des causes importantes."
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
              "Je souhaite devenir un professionnel polyvalent et engagé, capable de concilier excellence technique 
              et responsabilité sociale. Mon objectif est de contribuer à un monde plus connecté et durable à travers 
              l'innovation technologique, tout en gardant un esprit collaboratif et une approche humaine dans tous 
              mes projets."
            </p>
            <div className="mt-6 flex justify-center">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                Passionné • Déterminé • Innovant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureSection;
