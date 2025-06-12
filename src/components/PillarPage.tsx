import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Download, Target, BookOpen, Users, Building, TrendingUp, Info, MessageSquare, Sparkles, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"; // Assuming Shadcn UI
import { Button } from '@/components/ui/button'; // Assuming Shadcn UI
import { School } from 'lucide-react';
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
  icon: React.ElementType; // Icon for the pillar itself
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
  
  const [generatedExplanation, setGeneratedExplanation] = useState('');
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);

  const getGeminiExplanation = async () => {
    setIsLoadingExplanation(true);
    setGeneratedExplanation(''); // Clear previous explanation

    const prompt = `Explain the concept of '${pillar.title}' in the context of the Greening Education Partnership, providing practical insights and examples. The vision for this pillar is '${pillar.vision}'. The current definition is: '${pillar.definition}'.`;

    let chatHistory = [];
    chatHistory.push({ role: "user", parts: [{ text: prompt }] });
    const payload = { contents: chatHistory };
    const apiKey = "AIzaSyAAIBQrYJmoaR92dBPwquqcluMBwORrR6A"; // If you want to use models other than gemini-2.0-flash or imagen-3.0-generate-002, provide an API key here. Otherwise, leave this as-is.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setGeneratedExplanation(text);
      } else {
        setGeneratedExplanation('Could not generate explanation. Please try again.');
        console.error('Unexpected API response structure:', result);
      }
    } catch (error) {
      setGeneratedExplanation('Error generating explanation. Please check your network connection.');
      console.error('Error calling Gemini API:', error);
    } finally {
      setIsLoadingExplanation(false);
    }
  };

  // Enhanced Pillar Data with more structure and GEP colors
  const pillarDataStore: Record<string, Pillar> = {
    'green-schools': {
      id: 'green-schools',
      title: 'Greening Schools',
      subtitle: 'Fostering sustainable learning environments.',
      vision: 'From early childhood through adult education, work to ensure that all schools achieve green school accreditation, including teacher training and higher education institutions.',
      target: 'By 2030 50% of schools in every country greened',
      progress: {
        current: 80573,
        total: 5500000,
        percentage: Math.round((80573 / 5500000) * 100 * 10) / 10,
      },
      definition: {
        title: 'What is a Green School?',
        content: 'A green school is defined as a learning institution that adopts a whole-of-institution approach to Education for Sustainable Development (ESD), especially focusing on climate change through its teaching, operations, governance, and community involvement.',
        icon: Info,
      },
      guidance: {
        title: 'Green School Quality Standard',
        link: 'https://unesdoc.unesco.org/ark:/48223/pf0000390028',
        linkText: 'Download Green School Quality Standard',
        description: 'The standard aims to harmonize accreditation criteria for schools committed to sustainability through a whole institution approach to ESD. It is designed for accreditation scheme organizers—such as civil society networks, international associations, and governments—and offers recognition for schools\' climate education efforts. Accreditation schemes must incorporate at least one-third of suggested activities in governance, facilities, teaching, and community engagement.',
        icon: Download,
      },
      workingGroup: {
        name: 'GEP Working Group 1',
        update: 'This working group focuses on developing resources and frameworks to support countries in achieving their green school targets, including sharing best practices and facilitating partnerships.',
      },
      impactStories: [
            { title: 'Eco-Schools Lesson Plans', url: 'https://www.ecoschools.global/lesson-plans-for-teachers' },
            { title: 'Climate Change Education Research', url: 'https://www.mecce.ca/research' }
          ],
      color: gepBrandColors.green, // GEP Green
      icon: School, // Assuming School icon is imported
    },
    'green-curriculum': {
      id: 'green-curriculum',
      title: 'Greening Every Curriculum',
      subtitle: 'Integrating climate education across all learning levels.',
      vision: 'Embrace a life-long learning approach that integrates climate education into school curricula, technical and vocational training, workplace skills development, teaching materials, pedagogy, and assessment.',
      target: 'By 2030 90% of countries green their national curriculum',
      progress: {
        current: 72, // Example
        total: 195, // Example
        percentage: Math.round((72 / 195) * 100), // Example
      },
      definition: {
        title: 'What is Greening the Curriculum?',
        content: 'Greening the curriculum involves integrating climate mitigation and adaptation across all education levels and teacher training. It emphasizes the connection between environment, economy, and society, promoting knowledge, emotional engagement, and action for sustainability.',
        icon: Info,
      },
      guidance: {
        title: 'Greening Curriculum Guidance',
        link: 'https://unesdoc.unesco.org/ark:/48223/pf0000390022',
        linkText: 'View Greening Curriculum Guidance',
        description: 'This document responds to youth calls for holistic climate education. It defines how sustainability can be embedded into curricula, specifying learning outcomes per age group and across all education levels. It is guided by four principles: action-oriented, justice-promoting, quality content, and relevance.',
        icon: ExternalLink,
      },
      workingGroup: {
        name: 'GEP Working Group 2',
        update: 'This group is actively creating tools and guides for policymakers and educators to effectively integrate climate and sustainability topics into national and local curricula.',
      },
      impactStories: [
            { title: 'Eco-Schools Lesson Plans', url: 'https://www.ecoschools.global/lesson-plans-for-teachers' },
            { title: 'Climate Change Education Research', url: 'https://www.mecce.ca/research' }
          ],
      color: gepBrandColors.lightBlue, // GEP Light Blue
      icon: BookOpen,
    },
    'teacher-capacity': {
      id: 'teacher-capacity',
      title: 'Greening Teacher Training & Education System Capacities',
      subtitle: 'Empowering educators and strengthening systems for climate action.',
      vision: 'Support all GEP member states in establishing professional teaching standards that include climate change by 2030.',
      target: 'By 2030 50% of the countries have education in their Nationally Determined Contributions (NDCs) to UNFCCC',
      progress: {
        current: 95, // Example data
        total: 195, // Example data
        percentage: Math.round((95 / 195) * 100), // Example
        note: '(Analysis based on NDC Tracker - Earth Day)',
      },
      definition: {
        title: 'What is Greening the Curriculum?',
        content: 'Greening the curriculum involves integrating climate mitigation and adaptation across all education levels and teacher training. It emphasizes the connection between environment, economy, and society, promoting knowledge, emotional engagement, and action for sustainability.',
        icon: Info,
      },
      workingGroup: {
        name: 'GEP Working Group 3',
        update: 'The working group is now developing a Teacher Capacity Policy Tool for Climate Change and Education. The pillar aims to have 50% of the countries have education in their Nationally Determined Contributions (NDCs) to UNFCCC by 2030.',
      },
      impactStories: [
            { title: 'Teacher Training in Egypt', url: 'http://www.wesc-eg.com/teacher-training.html' }
          ],
      color: '#7cbfa0', // Purple
      icon: Users,
    },
    'green-communities': {
      id: 'green-communities',
      title: 'Greening Communities',
      subtitle: 'Fostering lifelong learning for sustainable communities.',
      vision: 'Promote climate education and action within communities through lifelong learning opportunities, empowering citizens of all ages to contribute to a sustainable future.', // Added a vision
      target: 'By 2030 20% of cities and communities in each country have at least one climate change lifelong learning programme',
      guidance: {
        title: 'Greening Curriculum Guidance',
        link: 'https://unesdoc.unesco.org/ark:/48223/pf0000390022',
        linkText: 'View Greening Curriculum Guidance',
        description: 'This document responds to youth calls for holistic climate education. It defines how sustainability can be embedded into curricula, specifying learning outcomes per age group and across all education levels. It is guided by four principles: action-oriented, justice-promoting, quality content, and relevance.',
        icon: ExternalLink,
      },
      definition: {
        title: 'What is Greening the Curriculum?',
        content: 'Greening the curriculum involves integrating climate mitigation and adaptation across all education levels and teacher training. It emphasizes the connection between environment, economy, and society, promoting knowledge, emotional engagement, and action for sustainability.',
        icon: Info,
      },
      progress: {
        current: 1500, // Example
        total: 10000, // Example
        percentage: Math.round((1500 / 10000) * 100), // Example
      },
      workingGroup: {
        name: 'GEP Working Group 4',
        update: 'This working group is focused on identifying and promoting effective models for community-based climate education and lifelong learning initiatives worldwide.',
      },
      impactStories: [
            { title: 'Cairo Climate Talks', url: 'https://cairoclimatetalks.net/event/keeping-the-momentum-up-how-do-we-activate-young-people-to-save-the-planet/' }
          ],
      color: '#278185', // Orange
      icon: Building,
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
    // <div className="min-h-screen bg-gradient-to-br from-gray-100 to-slate-200">
    //   {/* Header Section */}
    //   <header 
    //     className="py-12 md:py-16 text-white shadow-lg"
    //     style={{ background: `linear-gradient(135deg, ${pillar.color} 0%, ${gepBrandColors.darkTeal} 100%)` }}
    //   >
    //     <div className="container mx-auto px-4 md:px-6">
    //       <Button
    //         variant="outline"
    //         onClick={() => navigate(-1)}
    //         className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all group"
    //       >
    //         <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
    //         Back
    //       </Button>
    //       <div className="flex items-center space-x-4 md:space-x-6">
    //         <PillarIcon size={60} className="text-white opacity-80" strokeWidth={1.5}/>
    //         <div>
    //           <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{pillar.title}</h1>
    //           {pillar.subtitle && <p className="text-lg md:text-xl text-white/90 mt-1">{pillar.subtitle}</p>}
    //         </div>
    //       </div>
    //     </div>
    //   </header>

    //   {/* Main Content Area */}
    //   <main className="container mx-auto px-4 md:px-6 py-8 md:py-12">
    //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    //       {/* Left Column / Main Content */}
    //       <div className="lg:col-span-2 space-y-8">
    //         {/* Vision and Target Card */}
    //         <Card className="shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    //           <CardHeader className="bg-slate-50 border-b">
    //             <CardTitle className="text-2xl flex items-center" style={{ color: gepBrandColors.darkTeal }}>
    //               <Target size={28} className="mr-3 opacity-70" style={{ color: pillar.color }}/>
    //               Our Ambition
    //             </CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6 space-y-5">
    //             {pillar.vision && (
    //               <div>
    //                 <h3 className="font-semibold text-lg text-gray-800 mb-1">Vision:</h3>
    //                 <p className="text-gray-700 leading-relaxed">{pillar.vision}</p>
    //               </div>
    //             )}
    //             <div>
    //               <h3 className="font-semibold text-lg text-gray-800 mb-1">Global Target:</h3>
    //               <p className="text-gray-700 font-medium text-md" style={{color: pillar.color}}>{pillar.target}</p>
    //             </div>
    //           </CardContent>
    //         </Card>

    //         {/* Definition Card */}
    //         {pillar.definition && (
    //           <Card className="shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    //             <CardHeader className="bg-slate-50 border-b">
    //               <CardTitle className="text-2xl flex items-center" style={{ color: gepBrandColors.darkTeal }}>
    //                 <pillar.definition.icon size={28} className="mr-3 opacity-70" style={{ color: pillar.color }} />
    //                 {pillar.definition.title}
    //               </CardTitle>
    //             </CardHeader>
    //             <CardContent className="p-6">
    //               <p className="text-gray-700 leading-relaxed">{pillar.definition.content}</p>
    //             </CardContent>
    //           </Card>
    //         )}

    //         {/* Guidance/Standard Card */}
    //         {pillar.guidance && (
    //           <Card className="shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    //             <CardHeader className="bg-slate-50 border-b">
    //               <CardTitle className="text-2xl flex items-center" style={{ color: gepBrandColors.darkTeal }}>
    //                  <pillar.guidance.icon size={28} className="mr-3 opacity-70" style={{ color: pillar.color }} />
    //                 {pillar.guidance.title}
    //               </CardTitle>
    //             </CardHeader>
    //             <CardContent className="p-6 space-y-4">
    //               {pillar.guidance.description && <p className="text-gray-700 leading-relaxed text-sm mb-4">{pillar.guidance.description}</p>}
    //               {pillar.guidance.link && pillar.guidance.linkText && (
    //                 <Button asChild size="lg" style={{ backgroundColor: pillar.color }} className="text-white hover:opacity-90 transition-opacity w-full sm:w-auto">
    //                   <a href={pillar.guidance.link} target="_blank" rel="noopener noreferrer">
    //                     {pillar.guidance.icon === Download ? <Download size={18} className="mr-2" /> : <ExternalLink size={18} className="mr-2" />}
    //                     {pillar.guidance.linkText}
    //                   </a>
    //                 </Button>
    //               )}
    //             </CardContent>
    //           </Card>
    //         )}
    //          {/* Additional Sections if any */}
    //         {pillar.sections?.map((section, index) => (
    //           <Card key={index} className="shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    //             <CardHeader className="bg-slate-50 border-b">
    //               <CardTitle className="text-2xl flex items-center" style={{ color: gepBrandColors.darkTeal }}>
    //                 {section.icon && <section.icon size={28} className="mr-3 opacity-70" style={{ color: pillar.color }} />}
    //                 {section.title}
    //               </CardTitle>
    //             </CardHeader>
    //             <CardContent className="p-6 space-y-4">
    //               {section.content && <p className="text-gray-700 leading-relaxed">{section.content}</p>}
    //               {section.description && <p className="text-gray-700 leading-relaxed text-sm mb-4">{section.description}</p>}
    //               {section.link && section.linkText && (
    //                  <Button asChild style={{ backgroundColor: pillar.color }} className="text-white hover:opacity-90 transition-opacity">
    //                    <a href={section.link} target="_blank" rel="noopener noreferrer">
    //                      <ExternalLink size={18} className="mr-2" />
    //                      {section.linkText}
    //                    </a>
    //                  </Button>
    //               )}
    //             </CardContent>
    //           </Card>
    //         ))}


    //       </div>

    //       {/* Right Column / Sidebar */}
    //       <aside className="lg:col-span-1 space-y-8">
    //         {/* Progress Tracker Card */}
    //         {pillar.progress && (
    //           <Card className="shadow-xl rounded-xl overflow-hidden sticky top-8">
    //             <CardHeader className="border-b" style={{ backgroundColor: `${pillar.color}1A`}}> {/* Light tint of pillar color */}
    //               <CardTitle className="text-xl flex items-center" style={{ color: pillar.color }}>
    //                 <TrendingUp size={24} className="mr-2.5" />
    //                 Global Progress Tracker
    //               </CardTitle>
    //             </CardHeader>
    //             <CardContent className="p-6 space-y-4">
    //               <div className="text-center">
    //                 <div 
    //                     className="text-5xl font-bold" 
    //                     style={{ color: pillar.color }}
    //                 >
    //                     {pillar.progress.percentage}%
    //                 </div>
    //                 <p className="text-sm text-gray-600 mt-1">Target Achieved</p>
    //               </div>
    //               <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden shadow-inner">
    //                 <div 
    //                   className="h-5 rounded-full transition-all duration-1000 ease-out" 
    //                   style={{ 
    //                     backgroundColor: pillar.color, 
    //                     width: `${pillar.progress.percentage}%` 
    //                   }}
    //                 ></div>
    //               </div>
    //               <p className="text-sm text-gray-700 text-center">
    //                 <strong style={{color: pillar.color}}>{pillar.progress.current.toLocaleString()}</strong> of {pillar.progress.total.toLocaleString()} (Units/Countries)
    //               </p>
    //               {pillar.progress.note && (
    //                 <p className="text-xs text-gray-500 italic text-center bg-gray-100 p-2 rounded-md">{pillar.progress.note}</p>
    //               )}
    //             </CardContent>
    //           </Card>
    //         )}

    //         {/* Working Group Update Card */}
    //         <Card className="shadow-xl rounded-xl overflow-hidden">
    //           <CardHeader className="border-b" style={{ backgroundColor: `${gepBrandColors.darkTeal}1A`}}>
    //             <CardTitle className="text-xl flex items-center" style={{ color: gepBrandColors.darkTeal }}>
    //               <MessageSquare size={24} className="mr-2.5" />
    //               {pillar.workingGroup.name} Update
    //             </CardTitle>
    //           </CardHeader>
    //           <CardContent className="p-6">
    //             <p className="text-gray-700 text-sm leading-relaxed">
    //               {pillar.workingGroup.update || "Updates and resources from this working group will be shared here."}
    //             </p>
    //           </CardContent>
    //         </Card>

    //         {/* Impact Stories Placeholder Card */}
    //         {pillar.impactStories && (
    //             <Card className="shadow-xl rounded-xl overflow-hidden">
    //                 <CardHeader className="border-b" style={{ backgroundColor: `${pillar.color}1A`}}>
    //                     <CardTitle className="text-xl flex items-center" style={{color: pillar.color}}>
    //                         <Sparkles size={24} className="mr-2.5"/>
    //                         {pillar.impactStories.title}
    //                     </CardTitle>
    //                 </CardHeader>
    //                 <CardContent className="p-6 text-center">
    //                     <p className="text-gray-600 text-sm italic mb-4">{pillar.impactStories.placeholderText}</p>
    //                     <Button variant="outline" disabled style={{borderColor: pillar.color, color: pillar.color}}>
    //                         Explore Stories (Coming Soon) <ChevronRight size={16} className="ml-1"/>
    //                     </Button>
    //                 </CardContent>
    //             </Card>
    //         )}
    //       </aside>
    //     </div>
    //   </main>
    // </div>

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
            <PillarIcon size={72} className="text-white opacity-90 p-2 rounded-full" strokeWidth={1.5} style={{ backgroundColor: `${pillar.color}80` }}/>
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">{pillar.title}</h1>
              {pillar.subtitle && <p className="text-xl md:text-2xl text-white/90 mt-2">{pillar.subtitle}</p>}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column / Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Vision and Target Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
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

            {/* Definition Section with Gemini Deep Dive */}
            {pillar.definition && (
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-3xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
                  <Info size={32} className="mr-4 opacity-80" style={{ color: pillar.color }} />
                  {pillar.definition.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">{pillar.definition.content}</p>
                <button
                  onClick={getGeminiExplanation}
                  className="mt-8 bg-[#5a9f45] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#004b45] transition-colors duration-200 shadow-md flex items-center justify-center animate-pulse-fade"
                  disabled={isLoadingExplanation}
                >
                  {isLoadingExplanation ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating Insight...
                    </>
                  ) : (
                    '✨ Deep Dive: Explain Further'
                  )}
                </button>

                {generatedExplanation && (
                  <div className="mt-8 p-6 bg-[#7cbfa0] bg-opacity-20 rounded-lg border border-[#7cbfa0] shadow-inner animate-fade-in-up">
                    <h3 className="text-xl font-bold text-[#004b45] mb-4">Generated Explanation:</h3>
                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{generatedExplanation}</p>
                  </div>
                )}
              </div>
            )}

            {/* Guidance/Standard Card */}
            {pillar.guidance && (
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-3xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
                  {pillar.guidance.icon && <pillar.guidance.icon size={32} className="mr-4 opacity-80" style={{ color: pillar.color }} />}
                  {pillar.guidance.title}
                </h3>
                {pillar.guidance.description && <p className="text-gray-700 leading-relaxed text-base mb-6">{pillar.guidance.description}</p>}
                {pillar.guidance.link && pillar.guidance.linkText && (
                  <a href={pillar.guidance.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#18B2E8] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#5a9f45] transition-colors duration-200 shadow-md transform hover:scale-105"> {/* Changed hover color */}
                    {pillar.guidance.icon === Download ? <Download size={20} className="mr-3" /> : <ExternalLink size={20} className="mr-3" />}
                    {pillar.guidance.linkText}
                  </a>
                )}
              </div>
            )}

          </div>

          {/* Right Column / Sidebar */}
          <aside className="lg:col-span-1 space-y-10">
            {/* Progress Tracker Card */}
            {pillar.progress && (
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 top-24">
                <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
                  <TrendingUp size={28} className="mr-3 opacity-80" style={{ color: pillar.color }} />
                  Global Progress Tracker
                </h3>
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
            )}

            {/* Working Group Update Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
                <MessageSquare size={28} className="mr-3 opacity-80" style={{ color: gepBrandColors.darkTeal }} />
                {pillar.workingGroup.name} Update
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {pillar.workingGroup.update || "Updates and resources from this working group will be shared here."}
              </p>
            </div>

            {/* Impact Stories Placeholder Card */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold flex items-center mb-6" style={{ color: gepBrandColors.darkTeal }}>
                <Sparkles size={28} className="mr-3 opacity-80" style={{ color: pillar.color }} />
                Impact Stories
              </h3>
              <div className="space-y-4 mb-6">
                {pillar.impactStories && pillar.impactStories.length > 0 ? (
                  pillar.impactStories.map((story, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                      <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-[#18B2E8] hover:underline font-medium text-base flex items-center"> {/* Changed link color */}
                        {story.title} <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600 text-sm italic text-center py-4">No specific impact stories yet. Check back soon!</p>
                )}
              </div>
              <div className="bg-gray-100 p-5 rounded-lg border border-gray-200 text-gray-700 text-sm italic">
                <h4 className="font-semibold text-base mb-2">Country Specific Input Area:</h4>
                <p>Countries will report on their activities and best practices for this pillar. This section will include partner data and direct country inputs, along with external sites and reports.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    // <div className="bg-white p-8 rounded-lg shadow-xl animate-fade-in-up">
    //    {/* Header Section */}
    //   <header 
    //     className="py-12 md:py-16 text-white shadow-lg"
    //     style={{ background: `linear-gradient(135deg, ${pillar.color} 0%, ${gepBrandColors.darkTeal} 100%)` }}
    //   >
    //     <div className="container mx-auto px-4 md:px-6">
    //       <Button
    //         variant="outline"
    //         onClick={() => navigate(-1)}
    //         className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm transition-all group"
    //       >
    //         <ArrowLeft size={20} className="mr-2 transition-transform group-hover:-translate-x-1" />
    //         Back
    //       </Button>
    //       <div className="flex items-center space-x-4 md:space-x-6">
    //         <PillarIcon size={60} className="text-white opacity-80" strokeWidth={1.5}/>
    //         <div>
    //           <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{pillar.title}</h1>
    //           {pillar.subtitle && <p className="text-lg md:text-xl text-white/90 mt-1">{pillar.subtitle}</p>}
    //         </div>
    //       </div>
    //     </div>
    //   </header>
    //   {/* Progress Tracker */}
    //   <section className="mb-10 bg-green-50 p-6 rounded-lg border border-green-200 shadow-inner">
    //     <h2 className="text-2xl font-bold text-green-700 mb-4">Global Progress</h2>
    //     <div className="w-full bg-gray-200 rounded-full h-4 mb-3 overflow-hidden">
    //       <div
    //         className="bg-green-600 h-4 rounded-full transition-all duration-700 ease-out"
    //         style={{ width: progressBarWidth }}
    //       ></div>
    //     </div>
    //     <p className="text-gray-700 text-lg font-medium">
    //       <span className="text-green-800 font-semibold">{pillar.progress.current.toLocaleString()}</span> {pillar.title} / {pillar.progress.current.toLocaleString()} {pillar.totalUnit}
    //     </p>
    //     <p className="text-gray-600 text-md mt-2">
    //       Target: {pillar.target}
    //       {pillar.id === 'pillar3' && <span className="italic text-sm ml-2">(Analysis by NDC Tracker - Earth Day)</span>}
    //     </p>
    //   </section>

    //   {/* Definition */}
    //   <section className="mb-10 bg-white p-6 rounded-lg shadow-md border border-gray-200">
    //     <h2 className="text-2xl font-bold text-gray-900 mb-4">What does it mean?</h2>
    //     <p className="text-gray-800 leading-relaxed">{pillar.definition.content}</p>
    //     <button
    //       onClick={getGeminiExplanation}
    //       className="mt-6 bg-[#5a9f45] text-white px-6 py-2 rounded-full text-md font-medium hover:bg-[#004b45] transition-colors duration-200 shadow-md flex items-center justify-center"
    //       disabled={isLoadingExplanation}
    //     >
    //       {isLoadingExplanation ? (
    //         <>
    //           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    //             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    //             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    //           </svg>
    //           Generating...
    //         </>
    //       ) : (
    //         '✨ Deep Dive: Explain Further'
    //       )}
    //     </button>

    //     {generatedExplanation && (
    //       <div className="mt-8 p-6 bg-green-50 rounded-lg border border-indigo-200 shadow-inner">
    //         <h3 className="text-xl font-bold text-indigo-800 mb-3">Generated Explanation:</h3>
    //         <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{generatedExplanation}</p>
    //       </div>
    //     )}
    //   </section>

    //   {/* Guidance and Working Group Update */}
    //   <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
    //     <div className="p-6 rounded-lg shadow-md border border-blue-200">
    //       <h3 className="text-2xl font-bold text-[#278185] mb-4">{pillar.guidance.title}</h3>
    //       <p className="text-gray-800 mb-4 leading-relaxed">{pillar.guidance.description}</p>
    //       {pillar.guidance.link && (
    //         <a href={pillar.guidance.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-md font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md">
    //           Learn More & Download
    //         </a>
    //       )}
    //     </div>
    //     <div className=" p-6 rounded-lg shadow-md border border-purple-200">
    //       <h3 className="text-2xl font-bold text-[#278185] mb-4">GEP Working Group Update</h3>
    //       <p className="text-gray-800 leading-relaxed">{pillar.workingGroup.update}</p>
    //     </div>
    //   </section>

    //   {/* Impact Stories */}
    //   <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    //     <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Impact Stories & Best Practices</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {pillar.impactStories && pillar.impactStories.length > 0 ? (
    //         pillar.impactStories.map((story, index) => (
    //           <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    //             <h3 className="text-xl font-semibold text-green-700 mb-2">{story.title}</h3>
    //             <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
    //               External Link: {story.url}
    //             </a>
    //           </div>
    //         ))
    //       ) : (
    //         <p className="text-gray-600 col-span-2 text-center">No specific impact stories available for this pillar yet. Check back soon!</p>
    //       )}
    //     </div>
    //     <div className="mt-8 p-4 bg-gray-100 rounded-md text-gray-700 border border-gray-200">
    //       <h3 className="font-semibold text-lg mb-2">Country Specific Input Area:</h3>
    //       <p>Countries will report on their activities and best practices for this pillar. This section will include partner data and direct country inputs, along to external sites and reports.</p>
    //     </div>
    //   </section>
    // </div>
  
}

export default PillarPage;