import React from 'react';
interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}
const Card = ({
  title,
  children,
  className = ''
}: CardProps) => {
  return <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && <div className="border-b px-6 py-3">
          <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        </div>}
      <div className="p-6">{children}</div>
    </div>;
};
export default Card;