
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type PartnerCardProps = {
  id: number;
  name: string;
  description: string;
  region: string;
  logo?: string;
  url: string;
};

const PartnerCard = ({ name, description, region, url }: PartnerCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-bold">{name}</CardTitle>
          <div className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
            {region}
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs flex items-center gap-1 text-[#0f7378] hover:underline"
        >
          Learn More <ExternalLink size={12} />
        </a>
      </CardFooter>
    </Card>
  );
};

export default PartnerCard;
