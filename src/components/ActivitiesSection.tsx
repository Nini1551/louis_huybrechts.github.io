
import React, { useState } from 'react';
import { Calendar, Clock, FileText, Camera, Eye } from 'lucide-react';
import ProofModal from './ProofModal';

interface Activity {
  id: string;
  nom: string;
  description: string;
  heures: number;
  periode: string;
  type: string;
  preuves: Array<{
    id: string;
    type: 'photo' | 'pdf';
    name: string;
    url: string;
  }>;
}

const ActivitiesSection = () => {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activites: Activity[] = [
    {
      id: '2',
      nom: 'Secrétaire de l\'Association des Etudiants de l\'EPHEC',
      description: 'Gestion des activités et des communications de l\'association étudiante',
      heures: 10,
      periode: 'Sept 2024 - Mars 2025',
      type: 'Soft Skills',
      preuves: [
        { id: '1', type: 'photo', name: 'adee.png', url: 'https://i.ibb.co/Mxj4XFFt/adee.png' }
      ]
    },
    {
      id: '3',
      nom: 'Cyber Security Challenge 2023',
      description: '130e place en équipe avec les "Jalapen0s".',
      heures: 10,
      periode: 'Mars 2023',
      type: 'CTF',
      preuves: [
        { id: '2', type: 'photo', name: 'csc2023.png', url: 'https://i.ibb.co/MkV0b8vY/csc2023.png' },
        { id: '11', type: 'photo', name: 'csc2023-team.jpg', url: 'https://i.ibb.co/k66VTMNY/csc2023-team.jpg' }
      ]
    },
    {
      id: '4',
      nom: 'Cyber Security Challenge 2024',
      description: '77e place en equipe avec les "Bits Busters"',
      heures: 10,
      periode: 'Mars 2024',
      type: 'CTF',
      preuves: [
        { id: '3', type: 'photo', name: 'csc2024.png', url: 'https://i.ibb.co/s8M5Mww/csc2024.png' }
      ]
    },
    {
      id: '5',
      nom: 'Cyber Security Challenge 2025 avec les "Team RXPlose"',
      description: '180e place en equipe',
      heures: 10,
      periode: 'Mars 2025',
      type: 'CTF',
      preuves: [
        { id: '4', type: 'photo', name: 'csc2025.png', url: 'https://i.ibb.co/XrL5HJpf/csc2025.png' }
      ]
    },
    {
      id: '6',
      nom: 'Hackaton EPHEC 2022',
      description: '3e place au 2nd hackaton organisé par l\'EPHEC concernant le développement durable',
      heures: 10,
      periode: 'Oct 2022',
      type: 'Hackaton',
      preuves: []
    },
    {
      id: '7',
      nom: 'Hackaton EPHEC 2024',
      description: 'Prix du jury au 4e hackaton organisé par l\'EPHEC concernant la réutilisation d\'appareils défecteuux',
      heures: 10,
      periode: 'Oct 2024',
      type: 'Hackaton',
      preuves: [
        { id: '10', type: 'photo', name: 'hackaton_2024.jpg', url: 'https://i.ibb.co/TBzYyLR9/hackaton2024.jpg' }
      ]
    },
    {
      id: '8',
      nom: 'CTF EPHEC 2024',
      description: 'Equipe Holle_Werld au CTF organisé par l\'EPHEC',
      heures: 1,
      periode: 'Mars 2024',
      type: 'CTF',
      preuves: [
        { id: '7', type: 'photo', name: 'ctf_ephec.png', url: 'https://i.ibb.co/BV66XJ3V/ctf-ephec.png' }
      ]
    },
    {
      id: '9',
      nom: 'Soirée Fix IT 205',
      description: 'Participation à la soirée Fix IT 205, un événement de réseautage pour les étudiants en informatique',
      heures: 4,
      periode: 'Mars 2025',
      type: 'Hardware',
      preuves: []
    },
    {
      id: '10',
      nom: 'Computer Crime Unit de la Police Judiciaire de Charleroi',
      description: 'Participation à la conférence de la Computer Crime Unit de la Police Judiciaire de Charleroi, axée sur la cybersécurité et les enquêtes numériques',
      heures: 2,
      periode: 'Oct 2024',
      type: 'Séminaire',
      preuves: [
        { id: '5', type: 'photo', name: 'crime_unit.png', url: 'https://i.ibb.co/6RfZ3Prb/COmputer-Crime-Unit.png' }
      ]
    },
    {
      id: '11',
      nom: 'Conférence Axentys',
      description: 'Participation à la conférence Axentys, axée sur la présentation de l\'entreprise et d\'un stage',
      heures: 1,
      periode: 'Oct 2024',
      type: 'Séminaire',
      preuves: [
        { id: '6', type: 'photo', name: 'axentys.png', url: 'https://i.ibb.co/twm5Nsw6/axentys.png' }
      ]
    },
    {
      id: '12',
      nom: 'Activités Open Lab : y a quoi dans un PC ?',
      description: 'Participation à l\'activité Open Lab "Y a quoi dans un PC ?", une session interactive pour découvrir les composants d\'un ordinateur',
      heures: 1,
      periode: 'Avril 2023',
      type: 'Hardware',
      preuves: [
        { id: '8', type: 'photo', name: 'in_pcc.png', url: 'https://i.ibb.co/prfPR9xS/in-pc.png' }
      ]
    },
    {
      id: '13',
      nom: 'Linux Install Party du Kot-Linux',
      description: 'Installation d\'un dual-boot Linux sur un ordinateur portable lors de la Linux Install Party organisée par le Kot-Linux',
      heures: 2,
      periode: 'Fev 2023',
      type: 'Hardware',
      preuves: [
        { id: '9', type: 'photo', name: 'linux_party.jpg', url: 'https://i.ibb.co/0jxMhSp4/linux-party-2022.jpg' }
      ]
    }
  ];

  const totalHeures = activites.reduce((sum, activite) => sum + activite.heures, 0);

  const openProofModal = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const closeProofModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  const getTypeColor = (type: string) => {
    const colors = {
      'Bénévolat': 'bg-green-100 text-green-800',
      'Responsabilité': 'bg-blue-100 text-blue-800',
      'Formation': 'bg-purple-100 text-purple-800',
      'Club': 'bg-yellow-100 text-yellow-800',
      'Humanitaire': 'bg-red-100 text-red-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="activites" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Activités Extra-scolaires</h2>
          <p className="text-xl text-gray-600 mb-8">
            Un aperçu de mes engagements et expériences personnelles
          </p>
          
          <div className="bg-white rounded-lg p-6 inline-block shadow-lg">
            <div className="flex items-center space-x-4">
              <Clock className="text-blue-600" size={32} />
              <div>
                <p className="text-sm text-gray-600">Total d'heures investies</p>
                <p className="text-3xl font-bold text-blue-600">{totalHeures}h</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Activité</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Période</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Heures</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Preuves</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {activites.map((activite) => (
                  <tr key={activite.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">{activite.nom}</h4>
                        <p className="text-sm text-gray-600">{activite.description}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(activite.type)}`}>
                        {activite.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {activite.periode}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <Clock size={16} className="text-blue-600" />
                        <span className="font-semibold text-blue-600">{activite.heures}h</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        {activite.preuves.some(p => p.type === 'photo') && (
                          <Camera size={16} className="text-green-600" />
                        )}
                        {activite.preuves.some(p => p.type === 'pdf') && (
                          <FileText size={16} className="text-red-600" />
                        )}
                        <span className="text-sm text-gray-600">
                          {activite.preuves.length} élément{activite.preuves.length > 1 ? 's' : ''}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => openProofModal(activite)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 text-sm"
                      >
                        <Eye size={16} />
                        <span>Voir preuves</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Statistiques */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Calendar className="mx-auto text-blue-600 mb-2" size={32} />
            <p className="text-2xl font-bold text-gray-900">{activites.length}</p>
            <p className="text-sm text-gray-600">Activités réalisées</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Clock className="mx-auto text-green-600 mb-2" size={32} />
            <p className="text-2xl font-bold text-gray-900">{totalHeures}h</p>
            <p className="text-sm text-gray-600">Heures investies</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <Camera className="mx-auto text-purple-600 mb-2" size={32} />
            <p className="text-2xl font-bold text-gray-900">
              {activites.reduce((sum, a) => sum + a.preuves.filter(p => p.type === 'photo').length, 0)}
            </p>
            <p className="text-sm text-gray-600">Photos</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <FileText className="mx-auto text-red-600 mb-2" size={32} />
            <p className="text-2xl font-bold text-gray-900">
              {activites.reduce((sum, a) => sum + a.preuves.filter(p => p.type === 'pdf').length, 0)}
            </p>
            <p className="text-sm text-gray-600">Documents</p>
          </div>
        </div>
      </div>

      <ProofModal
        isOpen={isModalOpen}
        onClose={closeProofModal}
        proofs={selectedActivity?.preuves || []}
        activityTitle={selectedActivity?.nom || ''}
      />
    </section>
  );
};

export default ActivitiesSection;
