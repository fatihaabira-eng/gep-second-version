import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Download, BookOpen, Users, Building, TrendingUp, Info, MessageSquare, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Assuming Shadcn UI
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI
import { School } from 'lucide-react';
import pillar1_image from '../imgs/pillar1.png';
import pillar2_image from '../imgs/pillar2.png';
import pillar3_image from '../imgs/pillar3.png';
import pillar4_image from '../imgs/pillar4.png';
import four_dimensions from '../imgs/four_dimensions.png'; // Added import for the attached image
import key_principles from '../imgs/key_principles.png'; // Import for pillar 2 key principles image
import learning_outcomes from '../imgs/learning_outcomes.png'; // Import for pillar 2 learning outcomes image
import green_school_cover from '../imgs/green_school_standard_cover.png'; // Import for the cover image
import backgroundImage from '../imgs/Background-silvertree.png'; // Import the background image
import cover_page_pillar2 from '../imgs/cover_page_pillar2.png'; // Import for pillar 2 cover page image
import { QuickLinksSection } from './QuickLinks';
import { ImpactStories } from './ImpactStories';

// Helper to map pillar IDs to icons
const pillarIcons: Record<string, React.ElementType> = {
  'green-schools': School,
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
  description?: string[];
  icon?: React.ElementType;
}

interface Pillar {
  id: string;
  title: string;
  subtitle?: string;
  vision?: string;
  target: string;
  countriesAchieved?: number; // Added field for number of countries achieved
  progress?: {
    current: number;
    total: number;
    percentage: number;
    note?: string;
  };
  definition?: PillarContentSection;
  guidance?: PillarContentSection;
  workingGroup: {
    name: string;
    update?: string;
  };
  impactStories?: { title: string; url: string }[];
  color: string;
  icon: React.ElementType;
  image: string;
  sections?: PillarContentSection[];
}

// GEP Brand Colors
const gepBrandColors = {
  green: '#16A34A',
  lightBlue: '#18B2E8',
  darkTeal: '#0f7378',
  headerTeal: '#3a6a6e',
  headerGreen: '#6cb154',
};

function PillarPage() {
  const { pillarId } = useParams<{ pillarId: string }>();
  const navigate = useNavigate();

  // Enhanced Pillar Data
  const pillarDataStore: Record<string, Pillar> = {
    'green-schools': {
      id: 'green-schools',
      title: 'Pillar 1 : Greening schools',
      subtitle: 'Fostering sustainable learning environments.',
      vision:
        'From early childhood through adult education, work to ensure that all schools achieve green school accreditation, including teacher training and higher education institutions.',
      target: 'By 2030 50% of schools in every country greened',
      countriesAchieved: 7, // Updated based on 2025 research indicating seven countries with >50% schools in eco-schools programs
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
        title: 'Green school quality standard: greening every learning environment',
        link: 'https://unesdoc.unesco.org/ark:/48223/pf0000390028',
        linkText: 'Download Green School Quality Standard',
        description: [
        'Aims to harmonize accreditation criteria for schools committed to sustainability.',
        'Designed for accreditation organizers like civil society networks and governments.',
        'Recognizes schools for their climate education efforts.',
        'Requires schemes to incorporate at least one-third of suggested activities across four key dimensions.'],
        icon: ExternalLink,
      },
      workingGroup: {
        name: 'GEP Working Group 1',
        update: '',
      },
      impactStories: [],
      color: "#6FAC44",
      icon: School,
      image: pillar1_image,
    },
    'green-curriculum': {
      id: 'green-curriculum',
      title: 'Pillar 2 : Greening Every Curriculum',
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
        title: 'What is the greening curriculum guidance?',
        link: 'https://unesdoc.unesco.org/ark:/48223/pf0000390022',
        linkText: 'View Greening Curriculum Guidance',
        description: [
          'Learn more about the Greening Curriculum Guidance: This document responds to youth calls for holistic climate education. It defines how sustainability can be embedded into curricula, specifying learning outcomes per age group and across all education levels.',
          'The Guidance sets 4 key principles of greening education: Action-oriented, Justice-promoting, Quality content, and Comprehensive and relevant.',
        ],
        icon: ExternalLink,
      },
      workingGroup: {
        name: 'GEP Working Group 2',
        update: '',
      },
      impactStories: [],
      color: "#5DAF8B",
      icon: BookOpen,
      image: pillar2_image,
    },
    'teacher-capacity': {
      id: 'teacher-capacity',
      title: 'Pillar 3 : Greening Teacher Training & Education System Capacities',
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
          ['The Teacher Capacity Policy Tool for Climate Change and Education is being developed and aims to be launched at COP30'],
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
      impactStories: [],
      color: "#085658",
      icon: Users,
      image: pillar3_image,
    },
    'green-communities': {
      id: 'green-communities',
      title: 'Pillar 4 : Greening Communities',
      subtitle: 'Fostering lifelong learning for sustainable communities.',
      vision: '',
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
         [ 'Learn more about the Greening Curriculum Guidance: This document responds to youth calls for holistic climate education. It defines how sustainability can be embedded into curricula, specifying learning outcomes per age group and across all education levels. It is guided by four principles: action-oriented, justice-promoting, quality content, and relevance.'],
        icon: ExternalLink,
      },
      workingGroup: {
        name: 'GEP Working Group 4',
        update: '',
      },
      impactStories: [],
      color: "#56813A",
      icon: Building,
      image: pillar4_image,
    },
  };

  const pillar = pillarId ? pillarDataStore[pillarId] : undefined;

  // Check if the pillar is under development (Pillar 3 or 4)
  if (pillarId === 'teacher-capacity' || pillarId === 'green-communities') {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Card className="w-full max-w-md text-center shadow-2xl rounded-xl bg-white/90 backdrop-blur-sm transition-all duration-300 hover:shadow-3xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-red-600">
              {pillarId === 'teacher-capacity' ? 'Pillar 3' : 'Pillar 4'} Under Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              The {pillarId === 'teacher-capacity' ? 'Pillar 3' : 'Pillar 4'} page is currently under development, as targets are still being defined by the members of the Greening Education Partnership.
            </p>
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

  if (!pillar) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center shadow-2xl rounded-xl transition-all duration-300 hover:shadow-3xl">
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

  const progressBarWidth = pillar.progress ? `${pillar.progress.percentage}%` : '0%';
  const PillarIcon = pillar.icon || Info;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-12">
      {/* Header Section */}
      <header
        className="py-6 md:py-8 text-white shadow-lg rounded-b-3xl mb-12"
        style={{ background: `linear-gradient(135deg, ${pillar.color} 0%, ${gepBrandColors.darkTeal} 100%)` }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/")}
            className="mb-6 inline-flex items-center bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all duration-300 group px-5 py-2 rounded-full text-sm font-medium shadow-md"
          >
            <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </button>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 p-2 rounded-full flex items-center justify-center">
              <img
                src={pillar.image}
                alt={`${pillar.title} icon`}
                className="w-16 h-16 object-contain opacity-90 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg">{pillar.title}</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto space-y-12 px-4">
        {/* Our Ambition - Full Width */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 mb-8">
          <h3 className="text-3xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
            Our Ambition
          </h3>
          {pillar.vision && (
            <div className="mb-6">
              <p className="font-semibold text-lg text-gray-800 mb-2">Vision:</p>
              <p className="text-gray-700 leading-relaxed text-base">{pillar.vision.split('. ').map((sentence, index) => (
                <span key={index}>{sentence}. <br /></span>
              ))}</p>
              
              {pillar.id === 'green-curriculum' && (
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="font-semibold text-lg text-gray-800 mb-3">The Guidance sets 4 key principles of greening education:</p>
                    <img 
                      src={key_principles} 
                      alt="Key Principles of Greening Education" 
                      className="w-80 mx-auto mb-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" 
                    />
                    <ul className="grid grid-cols-2 gap-3 text-gray-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: pillar.color }} />
                        Action-oriented
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: pillar.color }} />
                        Justice-promoting
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: pillar.color }} />
                        Quality content
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: pillar.color }} />
                        Comprehensive and relevant
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-lg text-gray-800 mb-3">Learning outcomes around the four key principles:</p>
                    <img 
                      src={learning_outcomes} 
                      alt="Learning Outcomes for Quality Climate Change Education" 
                      className="w-full max-w-2xl mx-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                </div>
              )}
            </div>
          )}
          <div>
            <p className="font-semibold text-lg text-gray-800 mb-2">Number of Countries Achieved:</p>
            <p className="font-bold text-4xl" style={{ color: pillar.color }}>{pillar.countriesAchieved}</p>
          </div>
        </div>

        {/* First Row: Target Progress and Definition - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Target Progress - Left */}
          {pillar.progress && (
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
                <TrendingUp
                  size={28}
                  className="mr-3 opacity-80 flex-shrink-0"
                  style={{
                    color: pillar.color,
                    width: '28px',
                    height: '28px',
                  }}
                />
                Target: {pillar.target}
              </h3>
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <div
                    className="text-7xl font-extrabold mb-2"
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
                      width: progressBarWidth,
                    }}
                  ></div>
                </div>
                <p className="text-base text-gray-700 text-center">
                  <strong className="text-2xl" style={{ color: pillar.color }}>{pillar.progress.current.toLocaleString()}</strong> of {pillar.progress.total.toLocaleString()}
                </p>
                {pillar.progress.note && (
                  <p className="text-xs text-gray-500 italic text-center bg-gray-100 p-3 rounded-md mt-4">{pillar.progress.note}</p>
                )}
              </div>
            </div>
          )}

          {/* Definition - Right */}
          {pillar.definition && (
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
                <Info size={28} className="mr-3 opacity-80" style={{ color: pillar.color }} />
                {pillar.definition.title}
              </h3>
              <div className="flex-1 space-y-4">
                <p className="text-gray-700 leading-relaxed text-base font-semibold">{pillar.definition.content}</p>
                
              </div>
            </div>
          )}
        </div>

        {/* Second Row: Working Group and Green School Quality Standard - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Working Group - Left */}
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
              <MessageSquare size={28} className="mr-3 opacity-80" style={{ color: gepBrandColors.darkTeal }} />
              {pillar.workingGroup.name}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {pillar.workingGroup.update || "Updates and resources from this working group will be shared here."}
            </p>
          </div>

          {/* Green School Quality Standard - Right */}
          {pillar.guidance && (
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
              <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
                {pillar.guidance.icon && <pillar.guidance.icon size={28} className="mr-3 opacity-80" style={{ color: pillar.color }} />}
                {pillar.guidance.title}
              </h3>
              <div className="flex-1 flex flex-col space-y-4">
                {pillar.id === 'green-schools' && (
                  <img 
                    src={green_school_cover} 
                    alt="Green School Quality Standard Cover" 
                    className="w-48 mx-auto mb-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105" 
                  />
                )}
                {pillar.id === 'green-curriculum' && (
                  <img 
                    src={cover_page_pillar2} 
                    alt="Four Dimensions of the Green School Quality Standard" 
                    className="w-3/5 mx-auto mt-4 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" 
                  />
                )}
                {pillar.guidance.description && (
                  <ul className="space-y-2 mb-6 list-inside">
                {pillar.guidance.description.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <CheckCircle className="h-5 w-5 mr-3 mt-1 flex-shrink-0" style={{ color: pillar.color }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
                )}
                {pillar.id === 'green-schools' && (
                  <img 
                    src={four_dimensions} 
                    alt="Four Dimensions of the Green School Quality Standard" 
                    className="w-3/5 mx-auto mt-4 p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105" 
                  />
                )}
                
                {pillar.guidance.link && pillar.guidance.linkText && (
                  <div className="mt-auto pt-4">
                    <a
                      href={pillar.guidance.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#18B2E8] text-white px-6 py-2 rounded-full text-base font-semibold hover:bg-[#5a9f45] transition-colors duration-200 shadow-md transform hover:scale-105"
                    >
                      {pillar.guidance.icon === Download ? <Download size={18} className="mr-2" /> : <ExternalLink size={18} className="mr-2" />}
                      {pillar.guidance.linkText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
      <ImpactStories />
      <QuickLinksSection />
    </div>
  );
}

export default PillarPage;