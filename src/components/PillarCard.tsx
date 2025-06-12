
import React from 'react';
import { FaSchool, FaBook, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

type PillarCardProps = {
  id: number;
  title: string;
  current: number;
  total: number;
  percentage: number;
  description: string; 
  icon: React.JSX.Element;
  color: string;
  learnMoreUrl: string;
  pillarRoute: string;
};

const PillarCard = ({ title, current, total, percentage, description, icon, color, learnMoreUrl, pillarRoute }: PillarCardProps) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 border-t-4 w-full flex flex-col"
         style={{ borderTopColor: color }}>
            <div className="flex items-center gap-2 mb-3 h-12">
                <div className="text-xl">{icon}</div>
                <h2 className="text-sm md:text-base font-bold">{title}</h2>
            </div>
            <p className="text-gray-600 text-xs md:text-sm mb-4 h-12 line-clamp-2">
                {description}
            </p>
            
            {/* Progress Bar */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-600">Progress</span>
                    <span className="text-xs font-semibold" style={{ color }}>{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                        className="h-3 rounded-full transition-all duration-500" 
                        style={{ 
                            backgroundColor: color, 
                            width: `${percentage}%` 
                        }}
                    ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                    {current.toLocaleString()} of {total.toLocaleString()}
                </p>
            </div>

            <div className="flex flex-col gap-2 mt-auto">
                <a 
                    href={`/pillar/${pillarRoute}`}
                    className="text-xs text-center py-2 px-2 rounded transition-colors mt-2"
                    style={{ 
                        backgroundColor: color, 
                        color: 'white'
                    }}
                >
                    Learn More
                </a>
            </div>
        </div>
    );
};

export default PillarCard;
