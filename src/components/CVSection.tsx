
import React from 'react';
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const CVSection = () => {
  const formations = [
    {
      titre: "Bachelier professionnalisant en Technologies de l'Informatique",
      etablissement: "EPHEC",
      periode: "2022 - 2025 [En Cours]",
      description: ""
    },
    {
      titre: "Certificat d'Enseignement Secondaire Supérieur",
      etablissement: "Athénée Royal Paul Delvaux implantation Lauzelle",
      periode: "2012 - 2018",
      description: ""
    }
  ];

  const experiences = [
    {
      poste: "Secrétaire de l'Association des Etudiants de l'EPHEC",
      entreprise: "ADEE",
      periode: "2024 - 2025",
      description: "Administration et gestion des activités étudiantes"
    },
    {
      poste: "Accueil d'enfants en école primaire et maternelle",
      entreprise: "Ecole Communale de Beauvechain implantation de Tourinnes-la-Grosse",
      periode: "2021 - 2022",
      description: ""
    },
    {
      poste: "Président de la Commission OXFAM de l'Athénée Royal Paul Delvaux implantation Lauzelle",
      entreprise: "Athénée Royal Paul Delvaux implantation Lauzelle",
      periode: "2012 - 2018",
      description: "Gestion de projets humanitaires et sensibilisation aux enjeux sociaux"
    }
  ];

  const langagesEtOutils = [
    "JavaScript/TypeScript",
    "React",
    "Angular", 
    "Python",
    "Node.js",
    "SQL",
    "Git/GitHub",
    "HTML/CSS",
    "MongoDB",
    "Express.js"
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

        {/* Langages et Outils */}
        <div className="mt-16">
          <div className="flex items-center space-x-3 mb-8">
            <Code className="text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Langages et Outils</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {langagesEtOutils.map((item, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                <span className="font-medium text-gray-900">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
