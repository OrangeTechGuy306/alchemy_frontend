import React from "react";
import * as FaIcons from "react-icons/fa";

interface CardProps {
  icon: string; // icon name, e.g., "FaRocket"
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => {
  const IconComponent = (FaIcons as any)[icon];

  return (
    <div className="flex flex-col items-center justify-center rounded-xl shadow-md p-6 w-40 h-40 cursor-pointer transition-all duration-300 bg-white text-gray-700">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 text-xl">
        {IconComponent ? <IconComponent size={28} /> : "?"}
      </div>
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
};

export default Card;

