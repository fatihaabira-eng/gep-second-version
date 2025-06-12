
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

type StoryCardProps = {
  id: number;
  title: string;
  excerpt: string;
  country: string;
  date: string;
  imageUrl?: string;
  url: string;
};

const StoryCard = ({ title, excerpt, country, date, imageUrl, url }: StoryCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      {imageUrl && (
        <div className="h-32 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-bold line-clamp-2">{title}</CardTitle>
        </div>
        <CardDescription className="flex gap-2 items-center text-xs">
          <span className="font-medium">{country}</span>
          <span className="text-gray-400">•</span>
          <span>{date}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs flex items-center gap-1 text-[#0f7378] hover:underline"
        >
          Read Full Story <ExternalLink size={12} />
        </a>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;
