import React from 'react';
interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  icon?: React.ReactNode;
}
const StatCard = ({
  title,
  value,
  change,
  isPositive,
  icon
}: StatCardProps) => {
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
          {change && <div className="flex items-center mt-2">
              <span className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {change}
              </span>
            </div>}
        </div>
        {icon && <div className="bg-blue-50 p-3 rounded-full">{icon}</div>}
      </div>
    </div>;
};
export default StatCard;