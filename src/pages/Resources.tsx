
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText, Video, BookOpen, Users } from "lucide-react";

const ResourceItem = ({ 
  title, 
  type, 
  description, 
  link 
}: { 
  title: string; 
  type: string; 
  description: string; 
  link: string;
}) => {
  
  const getTypeIcon = () => {
    switch (type.toLowerCase()) {
      case 'document':
        return <FileText size={18} className="text-blue-500" />;
      case 'video':
        return <Video size={18} className="text-red-500" />;
      case 'guide':
        return <BookOpen size={18} className="text-yellow-600" />;
      case 'tool':
        return <Users size={18} className="text-purple-500" />;
      default:
        return <FileText size={18} />;
    }
  };
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-bold">{title}</CardTitle>
          <div className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded">
            {getTypeIcon()} <span className="ml-1">{type}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-2 flex-grow">
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs flex items-center gap-1 text-[#6cb154] hover:underline"
        >
          Access Resource <ExternalLink size={12} />
        </a>
      </CardFooter>
    </Card>
  );
};

const Resources = () => {
  // Mock data for resources
  const resources = [
    {
      id: 1,
      title: "UNESCO Climate Education Framework",
      type: "Document",
      description: "Official framework for integrating climate education into national curricula.",
      link: "https://www.unesco.org/en/education/sustainable-development/resources"
    },
    {
      id: 2,
      title: "SDG 4.7 Implementation Guide",
      type: "Guide",
      description: "Practical guide for implementing sustainability education across the curriculum.",
      link: "https://www.unesco.org/en/education/sustainable-development/resources"
    },
    {
      id: 3,
      title: "Green Schools Certification Process",
      type: "Guide",
      description: "Step-by-step guide to certifying your school as environmentally sustainable.",
      link: "https://www.unesco.org/en/education/sustainable-development/resources"
    },
    {
      id: 4,
      title: "Teacher Training Toolkit",
      type: "Tool",
      description: "Resources for training teachers in climate education methodologies.",
      link: "https://www.unesco.org/en/education/sustainable-development/resources"
    },
    {
      id: 5,
      title: "Climate Education in Action",
      type: "Video",
      description: "Video series showcasing successful climate education initiatives around the world.",
      link: "https://www.unesco.org/en/education/sustainable-development/resources"
    },
    {
      id: 6,
      title: "Measuring Education for Sustainable Development",
      type: "Document",
      description: "Frameworks and metrics for assessing the impact of sustainability education.",
      link: "https://www.unesco.org/en/education/sustainable-development/resources"
    },
    {
      id: 7,
      title: "Community Engagement Strategies",
      type: "Tool",
      description: "Tools for engaging local communities in sustainable education initiatives.",
      link: "https://www.unesco.org/en/education/sustainable-development/resources"
    },
    {
      id: 8,
      title: "Climate Literacy Standards",
      type: "Document",
      description: "International standards for climate literacy across age groups.",
      link: "https://www.unesco.org/en/education/sustainable-development/resources"
    },
  ];

  const categories = [
    "All Resources", "Documents", "Guides", "Tools", "Videos", "Research"
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#0f7378] mb-2">Resources</h1>
        <p className="text-gray-600 max-w-3xl">
          Access tools, guides, research papers, and educational materials to support sustainability 
          education in your region. These resources are designed to help teachers, policymakers,
          and school administrators implement green education practices.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm rounded-full transition ${
                index === 0 
                  ? "bg-[#6cb154] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Search bar */}
      <div className="relative mb-8 max-w-md">
        <input
          type="text"
          placeholder="Search resources..."
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Resources grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource) => (
          <ResourceItem
            key={resource.id}
            title={resource.title}
            type={resource.type}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          to="#"
          className="inline-flex items-center px-4 py-2 border border-[#6cb154] text-[#6cb154] rounded-md hover:bg-[#6cb154] hover:text-white transition-colors"
        >
          Load More Resources
        </Link>
      </div>
    </div>
  );
};

export default Resources;
