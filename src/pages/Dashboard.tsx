import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2Icon, ShieldIcon, AlertCircleIcon } from 'lucide-react';
import Card from '../components/ui/Card';
import StatCard from '../components/ui/StatCard';
const Dashboard = () => {
  return <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Santa Clara County Homeless Prediction & Prevention System
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard title="At-Risk Individuals" value="1,247" change="Updated today" isPositive={false} icon={<AlertCircleIcon size={24} className="text-orange-600" />} />
        <StatCard title="High Risk Cases" value="328" change="Requires immediate attention" isPositive={false} icon={<AlertCircleIcon size={24} className="text-red-600" />} />
      {/*  <StatCard title="Prevention Success Rate" value="68%" change="This quarter" isPositive={true} icon={<ShieldIcon size={24} className="text-purple-600" />} /> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <Card>
          <h2 className="text-xl font-semibold mb-4">
            Santa Clara County Districts
          </h2>
          <div className="relative">
            <img src="/santaClara-map.png" alt="Santa Clara County Map" className="w-full h-auto rounded-lg" />
            <div className="mt-4 text-sm text-gray-500">
              <p>Regions monitored for homelessness risk factors:</p>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                <li>• San Jose</li>
                <li>• Palo Alto</li>
                <li>• Santa Clara</li>
                <li>• Mountain View</li>
                <li>• Sunnyvale</li>
                <li>• Cupertino</li>
                <li>• Morgan Hill</li>
                <li>• Gilroy</li>
                <li>• Campbell</li>
                <li>• Los Altos</li>
                <li>• Los Altos Hills</li>
                <li>• Los Gatos</li>
                <li>• Milpitas</li>
                <li>• Monte Sereno</li>
                <li>• Saratoga</li>
              </ul>
            </div>
          </div>
        </Card>
        <Card title="System Overview">
          <div className="grid grid-cols-1 gap-4">
            <Link to="/prediction" className="flex items-center p-4 border rounded-lg hover:bg-blue-50 transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <BarChart2Icon size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Prediction System</h3>
                <p className="text-gray-600">
                  Analyze census and economic data to predict homelessness risk
                </p>
              </div>
            </Link>
            <Link to="/prevention" className="flex items-center p-4 border rounded-lg hover:bg-blue-50 transition-colors">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ShieldIcon size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Prevention System</h3>
                <p className="text-gray-600">
                  Implement early interventions for at-risk individuals
                </p>
              </div>
            </Link>
          </div>
        </Card>
        <Card title="Recent Updates">
          <div className="space-y-4">
            <div className="border-b pb-3">
              <p className="font-medium">New Census Data Available</p>
              <p className="text-gray-600 text-sm">
                Latest economic indicators and census data have been uploaded.
              </p>
              <p className="text-gray-500 text-xs mt-1">Today</p>
            </div>
            <div className="border-b pb-3">
              <p className="font-medium">Risk Assessment Model Updated</p>
              <p className="text-gray-600 text-sm">
                The prediction model has been updated with new economic factors.
              </p>
              <p className="text-gray-500 text-xs mt-1">Yesterday</p>
            </div>
            <div>
              <p className="font-medium">System Integration Complete</p>
              <p className="text-gray-600 text-sm">
                Connected to county economic database for real-time updates.
              </p>
              <p className="text-gray-500 text-xs mt-1">April 14, 2023</p>
            </div>
          </div>
        </Card>

      </div>
    </div>;
};
export default Dashboard;