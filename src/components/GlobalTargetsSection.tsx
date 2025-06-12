
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const GlobalTargetsSection = () => {
  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="border-l-4 border-[#0f7378] p-6">
        <h2 className="text-lg md:text-xl font-bold mb-4 text-[#0f7378]">Global Targets</h2>
        <p className="text-sm text-gray-600 mb-6">Progress towards our 2030 vision for greening education worldwide</p>

        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-800 font-medium">
                Schools with green accreditation
              </p>
              <div className="flex items-center text-sm">
                <span className="font-bold text-[#0f7378]">1.5%</span>
                <span className="text-gray-500 ml-1">of 50% target</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-[#6cb154] to-[#0f7378] h-4 rounded-full transition-all duration-500 relative" style={{ width: '1.5%' }}>
                <div className="absolute inset-0 bg-white/20 bg-opacity-20 backdrop-blur-lg"></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-right">80,573 of 5,500,000 schools</p>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-800 font-medium">
                Countries including climate education in curricula
              </p>
              <div className="flex items-center text-sm">
                <span className="font-bold text-[#0f7378]">37%</span>
                <span className="text-gray-500 ml-1">of 90% target</span>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden">
              <div className="bg-gradient-to-r from-[#6cb154] to-[#0f7378] h-4 rounded-full transition-all duration-500 relative" style={{ width: '37%' }}>
                <div className="absolute inset-0 bg-white/20 bg-opacity-20 backdrop-blur-lg"></div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-right">72 of 195 countries</p>
          </div>
          
          <div className="pt-2 flex justify-center">
            <Button variant="outline" className="border-[#0f7378] text-[#0f7378] hover:bg-[#0f7378]/10">
              <TrendingUp className="mr-2 h-4 w-4" />
              View detailed metrics
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTargetsSection;
