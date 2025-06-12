import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles } from 'lucide-react'; // Icon for impact/best practices

interface BestPracticesCardProps {
  id?: string; // For in-page navigation
  impactStoriesText: string | null;
}

const BestPracticesCard: React.FC<BestPracticesCardProps> = ({ id, impactStoriesText }) => {
  const hasContent = impactStoriesText && impactStoriesText !== "[Please FILL IN YOUR ANSWER]";

  return (
    <Card id={id} className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl overflow-hidden">
      <CardHeader className="bg-gray-50 border-b border-gray-200 p-6">
         <div className="flex items-center space-x-3">
            <Sparkles className="text-[#6cb154]" size={30} strokeWidth={2}/>
            <CardTitle className="text-[#3a6a6e] text-2xl font-semibold">Impact Stories & Best Practices</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {hasContent ? (
          <div className="bg-amber-50 p-4 rounded-lg text-sm text-gray-700 whitespace-pre-line border border-amber-200 shadow-sm"
               style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
            {impactStoriesText}
          </div>
        ) : (
          <p className="italic text-gray-500 text-center py-4">
            No specific impact stories or best practices have been provided for this country yet. [cite: 9]
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default BestPracticesCard;