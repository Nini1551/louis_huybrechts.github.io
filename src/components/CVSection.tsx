
import React from 'react';
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const CVSection = () => {
  const formations = [
    {
      titre: "Master en Informatique",
      etablissement: "Université de Paris",
      periode: "2023 - 2025",
      description: "Spécialisation en développement web et intelligence artificielle"
    },
    {
      titre: "Licence Informatique",
      etablissement: "Université de Lyon",
      periode: "2020 - 2023",
      description: "Formation généraliste en informatique avec mention Bien"
    }
  ];

  const experiences = [
    {
      poste: "Développeur Frontend (Stage)",
      entreprise: "TechCorp",
      periode: "Été 2023",
      description: "Développement d'interfaces utilisateur en React et TypeScript"
    },
    {
      poste: "Assistant de recherche",
      entreprise: "Laboratoire Universitaire",
      periode: "2022 - 2023",
      description: "Recherche sur les algorithmes d'apprentissage automatique"
    }
  ];

  const competences = [
    { nom: "JavaScript/TypeScript", niveau: 90 },
    { nom: "React", niveau: 85 },
    { nom: "Python", niveau: 80 },
    { nom: "Node.js", niveau: 75 },
    { nom: "Bases de données", niveau: 70 },
    { nom: "Git/GitHub", niveau: 85 }
  ];

  return (
    <section id="cv" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mon Parcours</h2>
          <p className="text-xl text-gray-600">Formation, expériences et compétences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formation */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Formation</h3>
            </div>
            
            {formations.map((formation, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{formation.titre}</h4>
                <p className="text-blue-600 font-medium mb-2">{formation.etablissement}</p>
                <p className="text-gray-600 text-sm mb-3">{formation.periode}</p>
                <p className="text-gray-700">{formation.description}</p>
              </div>
            ))}
          </div>

          {/* Expériences */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3 mb-6">
              <Briefcase className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Expériences</h3>
            </div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{exp.poste}</h4>
                <p className="text-blue-600 font-medium mb-2">{exp.entreprise}</p>
                <p className="text-gray-600 text-sm mb-3">{exp.periode}</p>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compétences */}
        <div className="mt-16">
          <div className="flex items-center space-x-3 mb-8">
            <Code className="text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Compétences</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competences.map((competence, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-900">{competence.nom}</span>
                  <span className="text-gray-600">{competence.niveau}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${competence.niveau}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
