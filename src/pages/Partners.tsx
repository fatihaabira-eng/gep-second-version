
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Globe, MapPin } from "lucide-react";

const PartnerCard = ({ name, description, region, url, logo }: { 
  name: string; 
  description: string; 
  region: string; 
  url: string;
  logo?: string;
}) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-bold">{name}</CardTitle>
          <div className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded flex items-center">
            <MapPin size={12} className="mr-1" /> {region}
          </div>
        </div>
      </CardHeader>
      <CardContent className="py-3 flex-grow">
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <a 
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs flex items-center gap-1 text-[#0f7378] hover:underline"
        >
          Visit Partner Website <ExternalLink size={12} />
        </a>
      </CardFooter>
    </Card>
  );
};

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Global Education Coalition",
      description: "A network of 175+ organizations working to protect the right to education during and after COVID-19.",
      region: "Global",
      url: "https://www.unesco.org/en/education/digital/coalition"
    },
    {
      id: 2,
      name: "European Commission",
      description: "Collaborating on green education policies across European member states.",
      region: "Europe",
      url: "https://education.ec.europa.eu/focus-topics/green-education"
    },
    {
      id: 3,
      name: "African Union",
      description: "Working to integrate climate education into curriculum across African nations.",
      region: "Africa",
      url: "https://au.int/en/education"
    },
    {
      id: 4,
      name: "ASEAN",
      description: "Regional cooperation on sustainable education in Southeast Asian countries.",
      region: "Asia",
      url: "https://asean.org/our-community/asean-socio-cultural-community/education-youth-and-sports/"
    },
    {
      id: 5,
      name: "UNESCO Institute for Lifelong Learning",
      description: "Promoting education and lifelong learning policies, with a focus on adult education and literacy.",
      region: "Global",
      url: "https://uil.unesco.org/"
    },
    {
      id: 6,
      name: "UNICEF",
      description: "Working to ensure every child has access to quality education, including on sustainability topics.",
      region: "Global",
      url: "https://www.unicef.org/education"
    },
    {
      id: 7,
      name: "Education International",
      description: "Global federation of teachers' unions promoting quality education and teachers' rights.",
      region: "Global",
      url: "https://www.ei-ie.org/"
    },
    {
      id: 8,
      name: "World Bank Education",
      description: "Supporting countries to achieve Sustainable Development Goal 4 by building more equitable education systems.",
      region: "Global",
      url: "https://www.worldbank.org/en/topic/education"
    },
    {
      id: 9,
      name: "Commonwealth of Learning",
      description: "Helping developing nations improve access to quality education and training.",
      region: "Commonwealth",
      url: "https://www.col.org/"
    },
    {
      id: 10,
      name: "Global Partnership for Education",
      description: "Partnership dedicated to ensuring that every child receives a quality basic education.",
      region: "Global",
      url: "https://www.globalpartnership.org/"
    },
    {
      id: 11,
      name: "UNEP",
      description: "United Nations Environment Programme working on environmental sustainability education.",
      region: "Global",
      url: "https://www.unep.org/"
    },
    {
      id: 12,
      name: "International Association of Universities",
      description: "Global higher education network promoting sustainable development in universities.",
      region: "Global",
      url: "https://www.iau-aiu.net/"
    }
  ];

  const regions = ["All Regions", "Global", "Africa", "Asia", "Europe", "Americas", "Pacific", "Commonwealth"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#0f7378] mb-2">Partner Organizations</h1>
        <p className="text-gray-600 max-w-3xl">
          The Greening Education Partnership collaborates with organizations worldwide to transform 
          education systems to address climate change and support sustainable development. 
          Explore our network of partners making a difference globally.
        </p>
      </div>

      {/* Filter by region */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Filter by Region</h2>
        <div className="flex flex-wrap gap-2">
          {regions.map((region, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm rounded-full transition ${
                index === 0 
                  ? "bg-[#0f7378] text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Partners grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {partners.map(partner => (
          <PartnerCard key={partner.id} {...partner} />
        ))}
      </div>

      <div className="mt-10 bg-[#f8f9fa] rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-[#0f7378] mb-2">Become a Partner</h2>
        <p className="text-gray-600 mb-4">
          Join our global network of organizations committed to transforming education for 
          sustainable development. Together, we can create a greener future through education.
        </p>
        <Button className="bg-[#6cb154] hover:bg-[#5B9446]">
          Apply to Join GEP
        </Button>
      </div>
    </div>
  );
};

export default Partners;
