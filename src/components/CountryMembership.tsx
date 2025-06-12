import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, XCircle, Building2 } from 'lucide-react'; // Added Building2 icon

interface GepMembershipCardProps {
  id?: string; // For in-page navigation
  isMember: boolean;
  organizations: string[];
}

const GepMembershipCard: React.FC<GepMembershipCardProps> = ({ id, isMember, organizations }) => {
  return (
    <Card id={id} className="mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl overflow-hidden">
      <CardHeader className="bg-gray-50 border-b border-gray-200 p-6">
        <div className="flex items-center space-x-3">
            <Building2 className="text-[#6cb154]" size={30} strokeWidth={2}/>
            <CardTitle className="text-[#3a6a6e] text-2xl font-semibold">GEP Membership</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-5 flex items-center space-x-3">
          <h4 className="font-semibold text-gray-700 text-md">GEP Member Status:</h4>
          {isMember ? (
            <span className="inline-flex items-center text-lg font-bold px-4 py-1.5 rounded-full bg-green-100 text-green-800 shadow-sm">
              <CheckCircle size={22} className="mr-2" /> YES
            </span>
          ) : (
            <span className="inline-flex items-center text-lg font-bold px-4 py-1.5 rounded-full bg-red-100 text-red-800 shadow-sm">
              <XCircle size={22} className="mr-2" /> NO
            </span>
          )}
        </div>

        {organizations && organizations.length > 0 && (
          <div>
            <h4 className="font-semibold mb-2 text-gray-700 text-md">GEP Member Organizations in this Country:</h4>
            <Select>
              <SelectTrigger className="w-full md:w-2/3 lg:w-1/2 bg-white border-gray-300 hover:border-gray-400 focus:ring-[#6cb154] focus:border-[#6cb154]">
                <SelectValue placeholder={`View organizations (${organizations.length})`} />
              </SelectTrigger>
              <SelectContent>
                {organizations.map((org, index) => (
                  <SelectItem key={index} value={org}>
                    {org}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
         {organizations && organizations.length === 0 && isMember && (
            <p className="text-sm text-gray-600 italic">List of GEP Member Organizations for this country will be provided by the GEP Secretariat.</p>
        )}
         {!isMember && (
             <p className="text-sm text-gray-600 italic">This country is not currently a GEP member.</p>
         )}
      </CardContent>
    </Card>
  );
};

export default GepMembershipCard;