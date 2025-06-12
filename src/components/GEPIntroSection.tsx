
import React from 'react';

const GEPIntroSection = () => {
  return (
    <div className="max-w-6xl mx-auto mt-8 mb-10 bg-gep-card rounded-2xl shadow-xl p-8 border-l-4  transform hover:shadow-2xl transition-all duration-300">
      <div className="flex items-start gap-4">
        {/* <div className="bg-gep-green-100 p-3 rounded-xl">
          <div className="w-6 h-6 bg-gep-green-500 rounded-full"></div>
        </div> */}
        <div className="flex-1">
          <h2 className="font-poppins text-2xl md:text-3xl font-bold mb-4 text-gep-blue-500">
            Greening Education Partnership
          </h2>
          <p className="font-inter text-gray-700 mb-4 text-base md:text-lg leading-relaxed">
            The Greening Education Partnership (GEP) is UNESCO's global initiative to transform education systems to address 
            climate change and environmental challenges. It empowers learners with knowledge, skills, values, and attitudes 
            needed for building a more sustainable future through coordinated action across education systems. 
          </p>
          <p className="font-inter text-gray-700 mb-8 text-base md:text-lg leading-relaxed">
            GEP focuses on four key action pillars: greening schools, integrating sustainability in curriculum, 
            building capacity of educators, and mobilizing communities for environmental action.
          </p>
          
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a 
              href="https://www.unesco.org/en/sustainable-development/education/greening-future" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gep-gradient hover:shadow-lg text-white px-8 py-3 rounded-xl transition-all duration-300 text-center font-medium transform hover:scale-105 font-inter"
            >
              Learn More
            </a>
            <a 
              href="https://www.unesco.org/en/sustainable-development/education/greening-future/members" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-2 border-gep-green-500 text-gep-green-600 hover:bg-gep-green-500 hover:text-white px-8 py-3 rounded-xl transition-all duration-300 text-center font-medium transform hover:scale-105 font-inter"
            >
              Join GEP
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GEPIntroSection;