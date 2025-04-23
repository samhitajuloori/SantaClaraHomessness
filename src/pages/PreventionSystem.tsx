import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import Card from '../components/ui/Card';

interface Person {
  caseOfficer: string;
  id: string;
  name: string;
  riskFactor: string;
  city: string;
  serviceType: string;
  service: string;
  status: string;
  lastUpdated: string;
}

const PreventionSystem = () => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const people: Person[] = [
    {
      id: '1',
      name: 'Linda Thomas',
      riskFactor: 'High',
      city: 'San Jose',
      serviceType: 'Housing',
      service: 'Emergency Rental Assistance',
      status: 'Active',
      lastUpdated: '2023-04-15',
      caseOfficer: 'Mark lincon'
    },
    {
      id: '2',
      name: 'Ethan Martinez',
      riskFactor: 'Medium',
      city: 'Santa Clara',
      serviceType: 'Employment',
      service: 'Job Training Program',
      status: 'Pending',
      lastUpdated: '2023-04-14',
      caseOfficer: 'Mark lincon'
    },
    {
      id: '3',
      name: 'Sarah Johnson',
      riskFactor: 'High',
      city: 'Mountain View',
      serviceType: 'Financial',
      service: 'Debt Counseling',
      status: 'Active',
      lastUpdated: '2023-04-15',
      caseOfficer: 'Sheila Bennet'
    }
  ];

  const serviceDirectory: {
    [city: string]: {
      [type: string]: string[];
    };
  } = {
    "San Jose": {
      Housing: [
        "San Jose Emergency Housing Center",
        "Santa Clara Family Housing Program",
        "Mountain View Shelter Network"
      ],
      Employment: [
        "San Jose Job Connect",
        "Campbell Career Center",
        "Cupertino Employment Hub"
      ],
      Financial: [
        "San Jose Debt Relief Center",
        "Milpitas Budget Counseling",
        "Palo Alto Credit Services"
      ]
    },
    "Santa Clara": {
      Housing: [
        "Santa Clara Family Housing Program",
        "Sunnyvale Supportive Housing",
        "Milpitas Emergency Shelter"
      ],
      Employment: [
        "Santa Clara WorkSource",
        "Sunnyvale Job Ready",
        "Mountain View Skill Builder"
      ],
      Financial: [
        "Santa Clara Financial Wellness",
        "San Jose Credit Advisors",
        "Cupertino Money Matters"
      ]
    },
    "Mountain View": {
      Housing: [
        "Mountain View Shelter Network",
        "Palo Alto Housing Aid",
        "San Jose Emergency Housing Center"
      ],
      Employment: [
        "Mountain View Career Hub",
        "Palo Alto Jobs Now",
        "Sunnyvale Employment Center"
      ],
      Financial: [
        "Mountain View Budget Counseling",
        "Palo Alto Debt Help",
        "Santa Clara Financial Wellness"
      ]
    }
  };

  const getServiceOptions = (person: Person) => {
    const cityServices = serviceDirectory[person.city]?.[person.serviceType] || [];
    const assigned = cityServices[0] || person.service;
    const additional = cityServices.slice(1);
    return { assigned, additional };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <h2 className="text-xl font-semibold mb-6">Case Management</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assigned Service</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Updated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Case Officer</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {people.map(person => (
                <tr
                  key={person.id}
                  className="cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSelectedPerson(person);
                    setIsModalOpen(true);
                  }}
                >
                  <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${person.riskFactor === 'High' ? 'bg-red-100 text-red-800' : person.riskFactor === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {person.riskFactor}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{person.city}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{person.serviceType}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{getServiceOptions(person).assigned}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${person.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {person.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.lastUpdated}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.caseOfficer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {isModalOpen && selectedPerson && (
        <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md transform transition-all">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full mr-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 16h-1v-4h-1m1-4h.01M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
                </svg>
              </div>
              <Dialog.Title className="text-lg font-bold text-gray-800">
                {selectedPerson?.name}
              </Dialog.Title>
            </div>
            <p className="text-sm text-gray-600 mb-1"><strong>Case Officer:</strong> {selectedPerson?.caseOfficer}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Other Recommended Services:</strong></p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {getServiceOptions(selectedPerson!).additional.map((service, idx) => (
                <li key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                  {service}
                </li>
              ))}
            </ul>
            <div className="text-right">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
      
      
      )}
    </div>
  );
};

export default PreventionSystem;
