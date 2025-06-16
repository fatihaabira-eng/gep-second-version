
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative mt-2 mb-4 bg-gep-hero text-white rounded-2xl overflow-hidden shadow-2xl ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gep-green-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gep-orange-400/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative max-w-l mx-auto py-12 px-6 md:py-16 md:px-8">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="font-poppins text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Greening Education in Action
          </h1>
          <p className="font-inter text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Tracking global progress on transforming education systems to address climate change 
            and support sustainable development through the Greening Education Partnership.
          </p>
        </div>
        
        {/* <div className="flex flex-wrap justify-center gap-6 animate-slide-up">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl px-8 py-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20 shadow-lg">
            <p className="text-3xl md:text-4xl font-bold font-poppins animate-count-up">193+</p>
            <p className="text-sm md:text-base font-inter mt-2 opacity-90">Countries</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl px-8 py-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20 shadow-lg">
            <p className="text-3xl md:text-4xl font-bold font-poppins animate-count-up" style={{ animationDelay: '0.2s' }}>5.5M+</p>
            <p className="text-sm md:text-base font-inter mt-2 opacity-90">Schools</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-2xl px-8 py-6 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20 shadow-lg">
            <p className="text-3xl md:text-4xl font-bold font-poppins animate-count-up" style={{ animationDelay: '0.4s' }}>84M+</p>
            <p className="text-sm md:text-base font-inter mt-2 opacity-90">Teachers</p>
          </div>
        </div> */}
      </div>
      
      {/* Decorative SVG - simplified */}
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M44.5,-76.3C59.2,-69.7,73.8,-60.5,81.3,-47.1C88.9,-33.7,89.4,-16.8,88.1,-0.8C86.8,15.3,83.5,30.6,75.6,43.1C67.7,55.7,55,65.5,41.4,72.4C27.7,79.3,13.9,83.2,-0.4,83.9C-14.7,84.6,-29.3,82.1,-41.6,74.9C-54,67.8,-63.9,56,-71.5,42.6C-79.1,29.2,-84.3,14.6,-85.4,-0.6C-86.5,-15.8,-83.4,-31.7,-75.5,-44.9C-67.6,-58.1,-54.9,-68.7,-40.8,-75.4C-26.8,-82.1,-13.4,-84.9,0.8,-86.3C15,-87.7,29.9,-82.8,44.5,-76.3Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;