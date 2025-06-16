import React from 'react';

const GEPIntroSection = () => {
  return (
    <div className="w-full mx-auto mt-1 mb-4 bg-gep-card rounded-2xl shadow-lg p-4 border-l-4 transform hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <h2 className="font-poppins text-xl md:text-2xl font-bold mb-2 text-gep-blue-500 text-center">
            Greening Education Partnership
          </h2>
          <p className="font-inter text-gray-700 mb-2 text-sm md:text-base leading-relaxed">
            The Greening Education Partnership (GEP) is UNESCO's global initiative to transform education systems to address 
            climate change and environmental challenges. It empowers learners with knowledge, skills, values, and attitudes 
            needed for building a more sustainable future through coordinated action across education systems. 
          </p>
          <p className="font-inter text-gray-700 text-sm md:text-base leading-relaxed">
            GEP focuses on four key action pillars: greening schools, integrating sustainability in curriculum, 
            building capacity of educators, and mobilizing communities for environmental action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GEPIntroSection;
