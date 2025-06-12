
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const SubmitDataSection = () => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <Card className="border-t-4 border-[#0f7378] bg-gradient-to-br from-white to-green-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg md:text-xl font-bold text-[#0f7378]">Submit Your Data</CardTitle>
          <CardDescription>Help us track global progress by submitting your country's data</CardDescription>
        </CardHeader>
        <CardContent className="pb-4">
          <p className="text-sm text-gray-600 mb-4">
            Your contribution helps build a comprehensive global picture of green education initiatives. 
            All submissions are reviewed by our team before being added to the platform.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Button className="bg-[#0f7378] hover:bg-[#3a6a6e] transition-colors text-white flex items-center gap-2 px-6 py-5">
            <Upload size={18} />
            <span>Submit Data</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SubmitDataSection;
