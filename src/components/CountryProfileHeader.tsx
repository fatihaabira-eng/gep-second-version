import React from 'react';

interface CountryProfileHeaderProps {
  countryName: string;
  flagEmoji?: string;
  lastUpdated?: string;
}

const CountryProfileHeader: React.FC<CountryProfileHeaderProps> = ({ countryName, flagEmoji, lastUpdated }) => {
  return (
    <header className="bg-gradient-to-r from-[#3a6a6e] to-[#6cb154] text-white py-8 md:py-12 mb-8 shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center space-x-4">
          {flagEmoji && <span className="text-5xl md:text-6xl">{flagEmoji}</span>}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{countryName}</h1>
            {lastUpdated && (
              <p className="text-sm text-gray-200 mt-1">Last Updated: {lastUpdated}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default CountryProfileHeader;