
import React from 'react';
import { X, Download, Eye } from 'lucide-react';

interface Proof {
  id: string;
  type: 'photo' | 'pdf';
  name: string;
  url: string;
}

interface ProofModalProps {
  isOpen: boolean;
  onClose: () => void;
  proofs: Proof[];
  activityTitle: string;
}

const ProofModal = ({ isOpen, onClose, proofs, activityTitle }: ProofModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">
            Preuves - {activityTitle}
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {proofs.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Aucune preuve disponible</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proofs.map((proof) => (
                <div key={proof.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    {proof.type === 'photo' ? (
                      <img 
                        src={proof.url} 
                        alt={proof.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-red-500 mb-2">📄</div>
                        <p className="text-sm text-gray-600">Document PDF</p>
                      </div>
                    )}
                  </div>
                  
                  <p className="font-medium text-gray-900 mb-3 truncate">{proof.name}</p>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1">
                      <Eye size={16} />
                      <span>Voir</span>
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-50 transition-colors flex items-center justify-center space-x-1">
                      <Download size={16} />
                      <span>Télécharger</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProofModal;
