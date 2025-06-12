
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-[#6cb154] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute top-3 left-3 w-10 h-10 border-4 border-[#0f7378] border-t-transparent rounded-full animate-spin animate-delay-150"></div>
      </div>
      <p className="ml-4 text-gray-700 font-medium">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
