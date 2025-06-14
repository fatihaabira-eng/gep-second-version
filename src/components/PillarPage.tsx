import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Download, Target, BookOpen, Users, Building, TrendingUp, Info, MessageSquare, Sparkles, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Assuming Shadcn UI
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI
import { School } from 'lucide-react';
import pillar1_image from '../imgs/pillar1.png';
import pillar2_image from '../imgs/pillar2.png';
import pillar3_image from '../imgs/pillar3.png';
import pillar4_image from '../imgs/pillar4.png';
// Helper to map pillar IDs to icons
const pillarIcons: Record<string, React.ElementType> = {
  'green-schools': School, // You'd need to import School from lucide-react or use a similar one
  'green-curriculum': BookOpen,
  'teacher-capacity': Users,
  'green-communities': Building,
};

// Define a more structured type for pillar data
interface PillarContentSection {
  title: string;
  content?: string;
  link?: string;
  linkText?: string;
  description?: string;
  icon?: React.ElementType;
}

interface Pillar {
  id: string;
  title: string;
  subtitle?: string;
  vision?: string;
  target: string;
  progress?: {
    current: number;
    total: number;
    percentage: number;
    note?: string;
  };
  definition?: PillarContentSection;
  guidance?: PillarContentSection; // For quality standard or curriculum guidance
  workingGroup: {
    name: string;
    update?: string;
  };
  impactStories?: { // Placeholder for future expansion
    title: string;
    url: string;
  }[];
  color: string; // Primary accent color for this pillar
  icon: React.ElementType; 
  image: string;// Icon for the pillar itself
  sections?: PillarContentSection[]; // For additional flexible content
}


// GEP Brand Colors (approximated from logo and existing code)
const gepBrandColors = {
  green: '#16A34A',
  lightBlue: '#18B2E8',
  darkTeal: '#0f7378', // For text, primary actions
  headerTeal: '#3a6a6e', // For header gradient
  headerGreen: '#6cb154', // For header gradient
};

function PillarPage() {
  const { pillarId } = useParams<{ pillarId: string }>();
  const navigate = useNavigate();

  // Enhanced Pillar Data with more structure and GEP colors
const pillarDataStore: Record<string, Pillar> = {
  'green-schools': {
    id: 'green-schools',
    title: 'Greening Schools',
    subtitle: 'Fostering sustainable learning environments.',
    vision:
      'From early childhood through adult education, work to ensure that all schools achieve green school accreditation, including teacher training and higher education institutions.',
    target: 'By 2030 50% of schools in every country greened',
    progress: {
      current: 80573,
      total: 5500000,
      percentage: Math.round((80573 / 5500000) * 100 * 10) / 10,
    },
    definition: {
      title: 'What does a Green School mean?',
      content:
        'What is a Green School?\nA "green school" is defined as a learning institution that takes a whole-of-institution approach to Education for Sustainable Development (ESD), in particular by addressing climate change through its teaching, facilities and operations, school governance and community partnerships. Green schools aim to promote knowledge and skills for the social, economic, cultural, and environmental aspects of sustainable development.',
      icon: Info,
    },
    guidance: {
      title: 'Green School Quality Standard',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000390028',
      linkText: 'Download Green School Quality Standard',
      description:
        "Learn more about the Green School Quality Standard: The standard aims to harmonize accreditation criteria for schools committed to sustainability through a whole institution approach to ESD. It is designed for accreditation scheme organizers—such as civil society networks, international associations, and governments—and offers recognition for schools' climate education efforts. Accreditation schemes must incorporate at least one-third of suggested activities in governance, facilities, teaching, and community engagement.",
      icon: ExternalLink,
    },
    workingGroup: {
      name: 'GEP Working Group 1',
      update: '', // Placeholder for update text
    },
    impactStories: [], // Leave space for external links
    color: "#6FAC44",
    icon: School,
    image: pillar1_image, // Added image path
  },

  'green-curriculum': {
    id: 'green-curriculum',
    title: 'Greening Every Curriculum',
    subtitle: 'Integrating climate education across all learning levels.',
    vision:
      'Embrace a life-long learning approach that integrates climate education into school curricula, technical and vocational training, workplace skills development, teaching materials, pedagogy, and assessment.',
    target: 'By 2030 90% of countries green their national curriculum',
    progress: {
      current: 72,
      total: 195,
      percentage: Math.round((72 / 195) * 100),
    },
    definition: {
      title: 'What is Greening the Curriculum?',
      content:
        'Greening the curriculum involves integrating climate mitigation and adaptation across all education levels and teacher training. It emphasizes the connection between environment, economy, and society, promoting knowledge, emotional engagement, and action for sustainability.',
      icon: Info,
    },
    guidance: {
      title: 'Greening Curriculum Guidance',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000390022',
      linkText: 'View Greening Curriculum Guidance',
      description:
        'Learn more about the Greening Curriculum Guidance: This document responds to youth calls for holistic climate education. It defines how sustainability can be embedded into curricula, specifying learning outcomes per age group and across all education levels. It is guided by four principles: action-oriented, justice-promoting, quality content, and relevance.',
      icon: ExternalLink,
    },
    workingGroup: {
      name: 'GEP Working Group 2',
      update: '', // Placeholder for update text
    },
    impactStories: [], // Leave space for external links
    color: "#5DAF8B",
    icon: BookOpen,
    image: pillar2_image, // Added image path
  },

  'teacher-capacity': {
    id: 'teacher-capacity',
    title: 'Greening Teacher Training & Education System Capacities',
    subtitle: 'Empowering educators and strengthening systems for climate action.',
    vision:
      'Support all GEP member states in establishing professional teaching standards that include climate change by 2030.',
    target:
      'By 2030 50% of the countries have education in their Nationally Determined Contributions (NDCs) to UNFCCC',
    progress: {
      current: 95,
      total: 195,
      percentage: Math.round((95 / 195) * 100),
      note: '(Analysis based on NDC Tracker - Earth Day)',
    },
    guidance: {
      title: 'Teacher Policy Toolkit',
      description:
        'The Teacher Capacity Policy Tool for Climate Change and Education is being developed and aims to be launched at COP30',
      icon: ExternalLink,
    },
    definition: {
      title: 'What is Greening the Curriculum?',
      content:
        'Greening the curriculum involves integrating climate mitigation and adaptation across all education levels and teacher training. It emphasizes the connection between environment, economy, and society, promoting knowledge, emotional engagement, and action for sustainability.',
      icon: Info,
    },
    workingGroup: {
      name: 'GEP Working Group 3',
      update:
        'The working group is now developing a Teacher Capacity Policy Tool for Climate Change and Education. The pillar aims to have 50% of the countries have education in their Nationally Determined Contributions (NDCs) to UNFCCC by 2030.',
    },
    impactStories: [], // Leave space for links
    color: "#085658",
    icon: Users,
    image: pillar3_image
  },

  'green-communities': {
    id: 'green-communities',
    title: 'Greening Communities',
    subtitle: 'Fostering lifelong learning for sustainable communities.',
    vision: '', // Placeholder
    target:
      'By 2030 20% of cities and communities in each country have at least one climate change lifelong learning programme',
    progress: {
      current: 1500,
      total: 10000,
      percentage: Math.round((1500 / 10000) * 100),
    },
    definition: {
      title: 'What is Greening the Curriculum?',
      content:
        'Greening the curriculum involves integrating climate mitigation and adaptation across all education levels and teacher training. It emphasizes the connection between environment, economy, and society, promoting knowledge, emotional engagement, and action for sustainability.',
      icon: Info,
    },
    guidance: {
      title: 'Greening Curriculum Guidance',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000390022',
      linkText: 'View Greening Curriculum Guidance',
      description:
        'Learn more about the Greening Curriculum Guidance: This document responds to youth calls for holistic climate education. It defines how sustainability can be embedded into curricula, specifying learning outcomes per age group and across all education levels. It is guided by four principles: action-oriented, justice-promoting, quality content, and relevance.',
      icon: ExternalLink,
    },
    workingGroup: {
      name: 'GEP Working Group 4',
      update: '', // Placeholder for updates
    },
    impactStories: [], // Leave space for links
    color: "#56813A",
    icon: Building,
    image: pillar4_image
  },
};

  const pillar = pillarId ? pillarDataStore[pillarId] : undefined;
  const progressBarWidth = `${pillar.progress.percentage}%`;
  if (!pillar) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center shadow-2xl rounded-xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-red-600">Pillar Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">The pillar you are looking for does not exist or could not be loaded.</p>
            <Button 
              onClick={() => navigate('/')} // Assuming '/' is your dashboard or home page
              style={{ backgroundColor: gepBrandColors.darkTeal }}
              className="text-white hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="mr-2 h-5 w-5" /> 
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const PillarIcon = pillar.icon || Info;

  return (
///////////////////////////////////////////////////////////////////
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-12">
  {/* Header Section */}
  <header
  className="py-12 md:py-16 text-white shadow-lg rounded-b-3xl mb-12"
  style={{ background: `linear-gradient(135deg, ${pillar.color} 0%, ${gepBrandColors.darkTeal} 100%)` }}
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <button
      onClick={() => navigate(-1)}
      className="mb-8 inline-flex items-center bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group px-5 py-2.5 rounded-full text-base font-medium shadow-md"
    >
      <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
      Back
    </button>
    <div className="flex items-center space-x-6">
      <div className="w-24 h-24 p-3 rounded-full flex items-center justify-center" style={{ backgroundColor: `${pillar.color}80` }}>
        <img 
          src={pillar.image} 
          alt={`${pillar.title} icon`}
          className="w-20 h-20 object-contain opacity-90"
        />
      </div>
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">{pillar.title}</h1>
        {pillar.subtitle && <p className="text-xl md:text-2xl text-white/90 mt-2">{pillar.subtitle}</p>}
      </div>
    </div>
  </div>
</header>

  {/* Main Content Area */}
  <main className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Our Ambition - Full Width */}
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 mb-8">
      <h3 className="text-3xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
        <Target size={32} className="mr-4 opacity-80" style={{ color: pillar.color }}/>
        Our Ambition
      </h3>
      {pillar.vision && (
        <div className="mb-6">
          <p className="font-semibold text-lg text-gray-800 mb-2">Vision:</p>
          <p className="text-gray-700 leading-relaxed text-base">{pillar.vision}</p>
        </div>
      )}
      <div>
        <p className="font-semibold text-lg text-gray-800 mb-2">Global Target:</p>
        <p className="font-bold text-xl" style={{ color: pillar.color }}>{pillar.target}</p>
      </div>
    </div>

    {/* Progress, Definition, Guidance - Single Row */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 lg:grid-rows-1">
  {/* Progress Bar - Left */}
  {pillar.progress && (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col">
      
<h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
  <TrendingUp 
    size={28} 
    className="mr-3 opacity-80 flex-shrink-0" 
    style={{ 
      color: pillar.color,
      width: '28px',
      height: '28px'
    }} 
  />
  Target: By 2030 50% of schools in every country greened
</h3>
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-6">
          <div
            className="text-6xl font-bold mb-2"
            style={{ color: pillar.color }}
          >
            {pillar.progress.percentage}%
          </div>
          <p className="text-sm text-gray-600">Target Achieved</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner mb-4">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              backgroundColor: pillar.color,
              width: progressBarWidth
            }}
          ></div>
        </div>
        <p className="text-base text-gray-700 text-center">
          <strong style={{ color: pillar.color }}>{pillar.progress.current.toLocaleString()}</strong> of {pillar.progress.total.toLocaleString()} {pillar.totalUnit}
        </p>
        {pillar.progress.note && (
          <p className="text-xs text-gray-500 italic text-center bg-gray-100 p-3 rounded-md mt-4">{pillar.progress.note}</p>
        )}
      </div>
    </div>
  )}

  {/* Definition - Middle */}
  {pillar.definition && (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col">
      <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
        <Info size={28} className="mr-3 opacity-80" style={{ color: pillar.color }} />
        {pillar.definition.title}
      </h3>
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed text-base mb-4 whitespace-pre-line">{pillar.definition.content}</p>
      </div>
    </div>
  )}

  {/* Guidance - Right */}
  {pillar.guidance && (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col">
      <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
        {pillar.guidance.icon && <pillar.guidance.icon size={28} className="mr-3 opacity-80" style={{ color: pillar.color }} />}
        {pillar.guidance.title}
      </h3>
      <div className="flex-1 flex flex-col">
        {pillar.guidance.description && <p className="text-gray-700 leading-relaxed text-base mb-4 flex-1">{pillar.guidance.description}</p>}
        {pillar.guidance.link && pillar.guidance.linkText && (
          <div className="mt-auto">
            <a href={pillar.guidance.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#18B2E8] text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-[#5a9f45] transition-colors duration-200 shadow-md transform hover:scale-105">
              {pillar.guidance.icon === Download ? <Download size={18} className="mr-2" /> : <ExternalLink size={18} className="mr-2" />}
              {pillar.guidance.linkText}
            </a>
          </div>
        )}
      </div>
    </div>
  )}
</div>

    {/* Working Group and Impact Stories - Full Width */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Working Group */}
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
        <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
          <MessageSquare size={28} className="mr-3 opacity-80" style={{ color: gepBrandColors.darkTeal }} />
          {pillar.workingGroup.name}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed">
          {pillar.workingGroup.update || "Updates and resources from this working group will be shared here."}
        </p>
      </div>

      {/* Impact Stories */}
      <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
        <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
          <Sparkles size={28} className="mr-3 opacity-80" style={{ color: pillar.color }} />
          Partner Spotlights (Impact Stories)
        </h3>
        <div className="space-y-4 mb-6">
          {pillar.impactStories && pillar.impactStories.length > 0 ? (
            pillar.impactStories.map((story, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-[#18B2E8] hover:underline font-medium text-base flex items-center">
                  {story.title} <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-sm italic text-center py-4">No impact stories yet. Check back soon!</p>
          )}
        </div>
      </div>
    </div>
  </main>
</div>)
}

export default PillarPage;