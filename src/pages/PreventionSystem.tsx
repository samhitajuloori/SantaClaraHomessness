import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';

interface CaseEntry {
  "Person Name": string;
  "Shelter Service": string;
  "Medical Service": string | null;
  "Food Service": string | null;
}

const BACKEND_URL = 'https://engr295b-1.onrender.com';

const PreventionSystem = () => {
  const [caseData, setCaseData] = useState<CaseEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCaseManagement = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/case-management`);
        if (!response.ok) throw new Error('Failed to fetch case management data');
        const data = await response.json();
        console.log("Fetched Case Management Data:", data);
        setCaseData(data);
      } catch (err: any) {
        setError('Error fetching case management data');
      } finally {
        setLoading(false);
      }
    };

    fetchCaseManagement();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Case Management
          </h1>
          <p className="text-gray-600 mt-2">
            Monitor and manage services for individuals at risk of homelessness
          </p>
        </div>
      </div>
      <Card className="mb-8">
        <div className="overflow-x-auto">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Shelter Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Medical Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Food Service
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {caseData.map((entry, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{entry["Person Name"]}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{entry["Shelter Service"]}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{entry["Medical Service"] ?? "N/A"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{entry["Food Service"] ?? "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>
    </div>
  );
};

export default PreventionSystem;
