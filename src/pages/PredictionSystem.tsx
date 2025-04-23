import React, { useEffect, useState } from 'react';
import Card from '../components/ui/Card';

interface AtRiskIndividual {
  'Full Name': string;
  RiskProbability: number;
}

const BACKEND_URL = 'https://engr295b-1.onrender.com';

const PredictionSystem = () => {
  const [people, setPeople] = useState<AtRiskIndividual[]>([]);
  const [loading, setLoading] = useState(true);
  const [demographicsUrl, setDemographicsUrl] = useState('');
  const [lollipopUrl, setLollipopUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAtRiskIndividuals = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/at-risk-individuals`);
        if (!res.ok) throw new Error('Failed to fetch at-risk individuals');
        const data = await res.json();
        setPeople(data);
      } catch (err: any) {
        setError('Error fetching individuals.');
      } finally {
        setLoading(false);
      }
    };

    fetchAtRiskIndividuals();
  }, []);

  useEffect(() => {
    setDemographicsUrl(`${BACKEND_URL}/api/at-risk-demographics-plot`);
    setLollipopUrl(`${BACKEND_URL}/api/at-risk-lollipop`);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Prediction System
          </h1>
          <p className="text-gray-600 mt-2">
            Monitor and identify individuals at risk of homelessness
          </p>
        </div>
      </div>
      <Card className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">At-Risk Individuals</h2>
        </div>
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
                    Risk Probability
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">{person['Full Name']}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {person.RiskProbability.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Card>
      <Card className="!p-0 mb-8">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">At-Risk Demographics</h2>
        </div>
        <div className="h-[280px] bg-gray-50 flex items-center justify-center">
          <img
            src={demographicsUrl}
            alt="At-Risk Demographics"
            className="max-h-64"
            style={{ maxWidth: '100%', objectFit: 'contain' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '';
              (e.target as HTMLImageElement).alt = 'Failed to load plot';
            }}
          />
        </div>
      </Card>
      <Card className="!p-0">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">Geographic Distribution</h2>
        </div>
        <div className="h-[280px] bg-gray-50 flex items-center justify-center">
          <img
            src={lollipopUrl}
            alt="Geographic Distribution"
            className="max-h-64"
            style={{ maxWidth: '100%', objectFit: 'contain' }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '';
              (e.target as HTMLImageElement).alt = 'Failed to load chart';
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default PredictionSystem;
