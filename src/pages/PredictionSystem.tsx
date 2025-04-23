import React, { useState } from 'react';
import { UploadIcon, FilterIcon, ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import Card from '../components/ui/Card';
interface Person {
  id: string;
  name: string;
  riskFactor: string;
}
const PredictionSystem = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [people] = useState<Person[]>([{
    id: '1',
    name: 'Linda Thomas',
    riskFactor: 'High'
  }, {
    id: '2',
    name: 'Ethan Martinez',
    riskFactor: 'Medium'
  }, {
    id: '3',
    name: 'Brian Barnes',
    riskFactor: 'High'
  }, {
    id: '4',
    name: 'Sarah Johnson',
    riskFactor: 'High'
  }, {
    id: '5',
    name: 'Michael Chen',
    riskFactor: 'Medium'
  }, {
    id: '6',
    name: 'Emily Wilson',
    riskFactor: 'Low'
  }]);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('File uploaded:', event.target.files?.[0]);
  };
  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  return <div className="container mx-auto px-4 py-8">
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
          <div className="flex space-x-4">
            <button onClick={toggleSort} className="flex items-center px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50">
              Sort by Risk Factor
              {sortOrder === 'asc' ? <ArrowUpIcon size={16} className="ml-2" /> : <ArrowDownIcon size={16} className="ml-2" />}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Risk Factor
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {people.map(person => <tr key={person.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${person.riskFactor === 'High' ? 'bg-red-100 text-red-800' : person.riskFactor === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {person.riskFactor}
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </Card>
      <Card className="lg:col-span-2 !p-0">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Risk Prediction Model
            </h2>
          </div>
          <div className="h-[320px] bg-gray-50 flex items-center justify-center">
            <p className="text-gray-500">
              Prediction model visualization would appear here
            </p>
          </div>
          <div className="px-6 py-4 flex justify-between text-sm text-gray-500 border-t">
            <span>Updated: June 1, 2023</span>
            <span>Data source: County Housing Department</span>
          </div>
        </Card>
        <Card className="!p-0">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900">
              At-Risk Demographics
            </h2>
          </div>
          <div className="h-[280px] bg-gray-50 flex items-center justify-center">
            <p className="text-gray-500">
              Demographics chart would appear here
            </p>
          </div>
        </Card>
        <Card className="!p-0">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Geographic Distribution
            </h2>
          </div>
          <div className="h-[280px] bg-gray-50 flex items-center justify-center">
            <p className="text-gray-500">
              Geographic heatmap would appear here
            </p>
          </div>
        </Card>

     {/* <Card>
        <h2 className="text-xl font-semibold mb-4">Upload Data</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
          <div className="flex flex-col items-center justify-center">
            <UploadIcon size={48} className="text-gray-400 mb-4" />
            <p className="text-gray-600 mb-2">Upload census or economic data</p>
            <p className="text-gray-400 text-sm mb-4">
              CSV, Excel, or JSON files
            </p>
            <label className="cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span>Upload File</span>
              <input type="file" className="hidden" accept=".csv,.xlsx,.json" onChange={handleFileUpload} />
            </label>
          </div>
        </div>
      </Card> */}
    </div>;
};
export default PredictionSystem;