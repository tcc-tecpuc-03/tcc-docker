import React from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  icon?: IconType;
  title?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, children }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center justify-between mb-4 font-titillium">
        {title && <h3 className="text-lg">{title}</h3>}
        {Icon && <Icon size={24} />}
      </div>
      {children}
    </div>
  );
};

export default Card;
