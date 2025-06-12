
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Globe } from 'lucide-react';

interface Country {
  id: string;
  name: string;
  flag: string;
  region: string;
}

const countries: Country[] = [
  {
    id: 'uae',
    name: 'United Arab Emirates',
    flag: 'https://flagcdn.com/w320/ae.png',
    region: 'Middle East and North Africa'
  },
  {
    id: 'morocco',
    name: 'Morocco',
    flag: 'https://flagcdn.com/w320/ma.png',
    region: 'Middle East and North Africa'
  },
  {
    id: 'egypt',
    name: 'Egypt',
    flag: 'https://flagcdn.com/w320/eg.png',
    region: 'Middle East and North Africa'
  },
  {
    id: 'jordan',
    name: 'Jordan',
    flag: 'https://flagcdn.com/w320/jo.png',
    region: 'Middle East and North Africa'
  },
  {
    id: 'saudi',
    name: 'Saudi Arabia',
    flag: 'https://flagcdn.com/w320/sa.png',
    region: 'Middle East and North Africa'
  },
  {
    id: 'qatar',
    name: 'Qatar',
    flag: 'https://flagcdn.com/w320/qa.png',
    region: 'Middle East and North Africa'
  },
  {
    id: 'bahrain',
    name: 'Bahrain',
    flag: 'https://flagcdn.com/w320/bh.png',
    region: 'Middle East and North Africa'
  },
  {
    id: 'kuwait',
    name: 'Kuwait',
    flag: 'https://flagcdn.com/w320/kw.png',
    region: 'Middle East and North Africa'
  }
];

const regions = [...new Set(countries.map(country => country.region))];

function CountryList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const navigate = useNavigate();

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
    (!selectedRegion || country.region === selectedRegion)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-[#3a6a6e] to-[#6cb154] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
            <Globe className="text-white h-8 w-8" />
          </div>
          <h1 className="text-5xl font-bold mb-4 tracking-tight">GEP Country Profiles</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore climate-smart education initiatives and track progress across different countries
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </header>

      {/* Controls Section */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pl-10 text-lg border rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            {/* Region Filter */}
            <div className="w-full md:w-72">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="text-gray-400" size={20} />
                </div>
                <select
                  className="w-full p-4 pl-10 text-lg border rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none cursor-pointer"
                  value={selectedRegion || ''}
                  onChange={(e) => setSelectedRegion(e.target.value || null)}
                >
                  <option value="">All Regions</option>
                  {regions.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Filter className="text-gray-400" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="container mx-auto px-4 py-4">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {filteredCountries.length} {filteredCountries.length === 1 ? 'Country' : 'Countries'} Found
          </h2>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {filteredCountries.map((country) => (
            <div
              key={country.id}
              onClick={() => navigate(`/country/${country.id}`)}
              className="group bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative">
                <div 
                  className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" 
                  style={{ 
                    backgroundImage: `url(${country.flag})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }} 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {country.region}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-600 transition-colors duration-300">{country.name}</h3>
                <p className="text-gray-600 text-sm">
                  View detailed sustainability and climate education profile
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCountries.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Countries Found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CountryList;
