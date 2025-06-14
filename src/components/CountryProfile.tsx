import React, { useState } from 'react';
import { BookOpen, Building, ChevronDown, ExternalLink, ArrowLeft, Leaf, Users, Globe, Target, FileText, Award, Link2, Net } from 'lucide-react';
import pillar1_image from '../imgs/pillar1.png';
import pillar2_image from '../imgs/pillar2.png';
import pillar3_image from '../imgs/pillar3.png';
import pillar4_image from '../imgs/pillar4.png';
import { useParams } from 'react-router-dom';

// --- MOCK DATA ---
// Updated with all data points from the (UAE) Country_Profile_Form_Dashboard.docx file.
const countryData = {
  uae: {
    id: 'uae',
    name: 'United Arab Emirates',
    isGEPMember: true,
    gepMemberOrganizations: [
      "NCS", "Shining Star International School", "ICS School Mushrif", "Higher Colleges of Technology", "PraeEminere Advisory", "baseet", "UNICEF UAE", "Ajms Global", "ASCS", "Dubai Cares", "EAD", "Eduvate", "EmiratesGBC", "PwC", "Greeneration", "American Community School of Abu Dhabi", "American School of Dubai", "Arbor School", "Citizens School", "Clarion School Dubai", "Gems Cambridge International Private School", "PLANETGREENERS", "Pristine Private School", "Regent International School", "Sustainability Tribe", "Emirates Schools Establishment", "Gulf Medical University", "GEMS Founders School, Masdar City - Abu Dhabi", "Gems Wellington International School", "DP World", "Kings' School Al Barsha", "Terrain Floorings", "Dar Al Marefa", "City University Ajman", "GEMS Founders Al Mizhar", "Ajman University", "Al Ain University", "ESE", "GEMS Education", "Tadweera for Green Education"
    ].filter((value, index, self) => self.indexOf(value) === index),
    pillar1: {
      greenSchoolsCount: 139,
      accreditationScheme: {
        status: "Yes",
        schemes: ["The Sustainable Schools Accreditation", "The Sustainable Campus Accreditation", "The Eco-School Model", "The Eco-Campus (to be implemented in 2023)"]
      },
      awardScheme: { status: "Yes" },
      schoolNetwork: { status: "No" },
      countryResponse: "The Sustainable schools Initiative is an internationally recognized environmental initiative in partnership with the Department of Education and Knowledge (ADEK), Ministry of Education, and sponsored by Bp, allowing youth to explore the environment and learn ways to reduce their ecological footprint, while creating a sense of ownership and responsibility towards the future by addressing their own environmental impact. SSI is one of our Environmental Education flagship projects due to its quest to promote environmental sustainability addressing school communities. https://sustainableschools.ead.ae/SSI/",
    },
    pillar2: {
      isClimateEducationInCurriculum: "Not available or data not reviewed",
      mecceGemrLink: "https://education-profiles.org/northern-africa-and-western-asia/united-arab-emirates/~climate-change-communication-and-education",
      countryResponse: "We have developed a cross-curriculum framework which tackles 23 different curriculums with 4 different topics: Energy Biodiversity and Biosphere Climate Change and consumption Innovation and sustainability. The Ministry of Education has committed to implement the Green Education Partnership in the UAE and aims to implement the cross-curriculum framework in all UAE schools."
    },
    pillar3: {
      isEducationInNDC: "Yes",
      ndcLink: "https://unfccc.int/sites/default/files/2024-11/UAE-NDC3.0.pdf",
      ndcEarthDayLink: "https://www.earthday.org/ndc-tracker/#category2",
      ndcResponse: "In 2022, Minister of Education has committed to implement the Green Education Partnership in the UAE. Since then, the Ministry of Education has designed and developed a framework and roadmap to achieve all the Green Pillars KPI by the end of the COP 28.",
      isClimateEducationInESP: "Not available or data not reviewed",
      espBestPractices: "[Analysis to be done by UNESCO IIEP]"
    },
    pillar4: {
      citiesWithLifelongLearningProgramsCount: 1,
      learningCities: ["Ras Al Khaimah"],
      unescoLearningCitiesLink: "https://www.uil.unesco.org/en/learning-cities/map?fq%5Bsm_unsc_field_ref_countries_label%5D%5B%5D=United+Arab+Emirates",
      countryResponse: "We are developing policies and guidelines by building different abstract community engagement model for all Emirates."
    },
    impactStoriesBestPractices: "For example link to MOCCAE News | Media Center | UAE Ministry of Climate Change and Environment"
  },
  al: {
    id: 'al',
    name: 'Albania',
    isGEPMember: true,
    gepMemberOrganizations: [
      "NCS", "Shining Star International School", "ICS School Mushrif", "Higher Colleges of Technology", "PraeEminere Advisory", "baseet", "UNICEF UAE", "Ajms Global", "ASCS", "Dubai Cares", "EAD", "Eduvate", "EmiratesGBC", "PwC", "Greeneration", "American Community School of Abu Dhabi", "American School of Dubai", "Arbor School", "Citizens School", "Clarion School Dubai", "Gems Cambridge International Private School", "PLANETGREENERS", "Pristine Private School", "Regent International School", "Sustainability Tribe", "Emirates Schools Establishment", "Gulf Medical University", "GEMS Founders School, Masdar City - Abu Dhabi", "Gems Wellington International School", "DP World", "Kings' School Al Barsha", "Terrain Floorings", "Dar Al Marefa", "City University Ajman", "GEMS Founders Al Mizhar", "Ajman University", "Al Ain University", "ESE", "GEMS Education", "Tadweera for Green Education"
    ].filter((value, index, self) => self.indexOf(value) === index),
    pillar1: {
      greenSchoolsCount: 0,
      accreditationScheme: {
        status: "No",
        // schemes: ["The Sustainable Schools Accreditation", "The Sustainable Campus Accreditation", "The Eco-School Model", "The Eco-Campus (to be implemented in 2023)"]
      },
      awardScheme: { status: "No" },
      schoolNetwork: { status: "No" },
      countryResponse: "The Sustainable schools Initiative is an internationally recognized environmental initiative in partnership with the Department of Education and Knowledge (ADEK), Ministry of Education, and sponsored by Bp, allowing youth to explore the environment and learn ways to reduce their ecological footprint, while creating a sense of ownership and responsibility towards the future by addressing their own environmental impact. SSI is one of our Environmental Education flagship projects due to its quest to promote environmental sustainability addressing school communities. https://sustainableschools.ead.ae/SSI/",
    },
    pillar2: {
      isClimateEducationInCurriculum: "Not available or data not reviewed",
      mecceGemrLink: "https://education-profiles.org/northern-africa-and-western-asia/united-arab-emirates/~climate-change-communication-and-education",
      countryResponse: "We have developed a cross-curriculum framework which tackles 23 different curriculums with 4 different topics: Energy Biodiversity and Biosphere Climate Change and consumption Innovation and sustainability. The Ministry of Education has committed to implement the Green Education Partnership in the UAE and aims to implement the cross-curriculum framework in all UAE schools."
    },
    pillar3: {
      isEducationInNDC: "Yes",
      ndcLink: "https://unfccc.int/sites/default/files/2024-11/UAE-NDC3.0.pdf",
      ndcEarthDayLink: "https://www.earthday.org/ndc-tracker/#category2",
      ndcResponse: "In 2022, Minister of Education has committed to implement the Green Education Partnership in the UAE. Since then, the Ministry of Education has designed and developed a framework and roadmap to achieve all the Green Pillars KPI by the end of the COP 28.",
      isClimateEducationInESP: "Not available or data not reviewed",
      espBestPractices: "[Analysis to be done by UNESCO IIEP]"
    },
    pillar4: {
      citiesWithLifelongLearningProgramsCount: 1,
      learningCities: ["Ras Al Khaimah"],
      unescoLearningCitiesLink: "https://www.uil.unesco.org/en/learning-cities/map?fq%5Bsm_unsc_field_ref_countries_label%5D%5B%5D=United+Arab+Emirates",
      countryResponse: "We are developing policies and guidelines by building different abstract community engagement model for all Emirates."
    },
    impactStoriesBestPractices: "For example link to MOCCAE News | Media Center | UAE Ministry of Climate Change and Environment"
  }
};

const getCountryProfileById = (id) => countryData[id] || null;

// --- HELPER & UI COMPONENTS ---
const Card = ({ children, className = '', isHoverable = false }) => (
  <div className={`bg-white rounded-2xl shadow-sm border border-gray-200/60 p-6 flex flex-col h-full transition-all duration-300 ${isHoverable ? 'hover:shadow-lg hover:scale-[1.02]' : ''} ${className}`}>
    {children}
  </div>
);

const StatusBadge = ({ status, className = '' }) => {
  const normalizedStatus = typeof status === 'string' ? status.toLowerCase() : 'data not reviewed';
  let bgColor = 'bg-gray-100 text-gray-800';
  let dotColor = 'bg-gray-400';

  if (normalizedStatus === 'yes') {
    bgColor = 'bg-green-100 text-green-900';
    dotColor = 'bg-green-500';
  } else if (normalizedStatus === 'no') {
    bgColor = 'bg-red-100 text-red-900';
    dotColor = 'bg-red-500';
  }

  return (
    <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${bgColor} ${className}`}>
      <span className={`w-2.5 h-2.5 mr-3 rounded-full ${dotColor}`}></span>
      {status}
    </div>
  );
};

const CountryResponseBox = ({ text, className = '' }) => (
  <div className={`mt-4 p-4 bg-slate-50 rounded-r-lg ${className}`}>
    <p className="text-gray-700 italic text-sm">{text}</p>
  </div>
);

const LinkButton = ({ href, text, icon: Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-teal-600 hover:text-teal-800 font-semibold transition-colors group">
        <Icon size={16} className="mr-2 text-teal-500" />
        <span className="group-hover:underline">{text}</span>
        <ExternalLink size={14} className="ml-1.5 opacity-70 group-hover:opacity-100" />
    </a>
);

// --- MAIN PAGE SECTIONS ---

const CountryProfileHeader = ({ countryName, isMember }) => (
  <div className="relative bg-gradient-to-br from-teal-600 to-green-600 text-white rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative z-10">
        <a href="#" onClick={(e) => e.preventDefault()} className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Countries List
        </a>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{countryName}</h1>
    </div>
    {isMember && (
        <div className="absolute top-8 right-8 z-10 bg-white/20 backdrop-blur-sm text-white text-base font-semibold px-5 py-2.5 rounded-full inline-flex items-center border border-white/30">
            <Leaf size={18} className="mr-2.5" />
            GEP Member
        </div>
    )}
  </div>
);

const PillarCard = ({ imageSrc, title, children, color }) => (
    <Card isHoverable={true}>
        <div className="flex items-center mb-5">
            <div className="bg-white p-2 rounded-2xl mr-5 shadow-sm">
                <img 
                    src={imageSrc} 
                    alt={`${title} icon`} 
                    className="w-16 h-16 object-contain"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/64x64/eee/ccc?text=Img`; }}
                />
            </div>
            <h3 className="text-2xl font-bold tracking-tight" style={{ color: color }}>{title}</h3>
        </div>
        <div className="flex flex-col flex-grow mt-2">
            {children}
        </div>
    </Card>
);

const Pillar1Card = ({ data }) => {
    const color = "#6FAC44";
    return (
        <PillarCard 
            imageSrc= {pillar1_image}
            title="Greening Schools" 
            color={color}
        >
            <div className="text-center my-6">
                <p className="text-7xl font-extrabold" style={{ color: color }}>
                    {data.greenSchoolsCount.toLocaleString()}
                </p>
                <p className="text-base text-gray-500 mt-2 font-medium">Number of Green Schools</p>
            </div>
            <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-600">Accreditation Scheme?</p>
                    <StatusBadge status={data.accreditationScheme.status} />
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-600">Award Scheme?</p>
                    <StatusBadge status={data.awardScheme.status} />
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-600">School Network?</p>
                    <StatusBadge status={data.schoolNetwork.status} />
                </div>
            </div>
            <CountryResponseBox text={data.countryResponse} />
        </PillarCard>
    );
};

const Pillar2Card = ({ data }) => {
    const color = "#5DAF8B";
    return (
        <PillarCard 
            imageSrc= {pillar2_image}
            title="Greening Curriculum"
            color={color}
        >
            <div className="my-6 space-y-5">
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-2.5">Climate education in curriculum?</p>
                    <StatusBadge status={data.isClimateEducationInCurriculum} />
                </div>
                {data.mecceGemrLink && (
                <LinkButton href={data.mecceGemrLink} text="View MECCE/GEMR Profile" icon={Link2} />
                )}
            </div>
            <CountryResponseBox text={data.countryResponse} />
        </PillarCard>
    );
};

const Pillar3Card = ({ data }) => {
    const color = "#085658";
    return (
        <PillarCard 
            imageSrc= {pillar3_image}
            title="Teacher Capacity"
            color={color}
        >
            <div className="space-y-5 mt-6">
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-2.5">Education in NDCs?</p>
                    <StatusBadge status={data.isEducationInNDC} />
                     <div className="mt-4 space-y-2">
                        {data.ndcLink && <LinkButton href={data.ndcLink} text="Country NDC Document" icon={FileText} />}
                        {data.ndcEarthDayLink && <LinkButton href={data.ndcEarthDayLink} text="EarthDay.org NDC Analysis" icon={FileText} />}
                    </div>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-600 mb-2.5">Climate education in ESPs?</p>
                    <StatusBadge status={data.isClimateEducationInESP} />
                </div>
            </div>
            <CountryResponseBox text={data.ndcResponse} />
        </PillarCard>
    );
};

const Pillar4Card = ({ data }) => {
    const color = "#56813A";
    return (
        <PillarCard
            imageSrc= {pillar4_image}
            title="Greening Communities"
            color={color}
        >
            <div className="text-center my-6">
                <p className="text-7xl font-extrabold" style={{ color: color }}>
                  {data.citiesWithLifelongLearningProgramsCount}
                </p>
                <p className="text-base text-gray-500 mt-2 font-medium">Cities with Lifelong Learning</p>
                 <p className="text-sm text-gray-500 mt-1">({data.learningCities.join(', ')})</p>
            </div>
            {data.unescoLearningCitiesLink && (
                <div className="mb-4">
                    <LinkButton href={data.unescoLearningCitiesLink} text="UNESCO Learning Cities Network" icon={Link2} />
                </div>
            )}
            <CountryResponseBox text={data.countryResponse} />
        </PillarCard>
    );
};

const GepMemberListCard = ({ organizations }) => (
    <Card id="gep-membership-list" className="bg-gradient-to-br from-green-50 to-teal-50">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">GEP Member Organizations ({organizations.length})</h3>
        <p className="text-sm text-gray-600 mb-5">List of official Greening Education Partnership member organizations in this country.</p>

        {organizations.length > 0 && (
        <details className="group">
          <summary className="flex items-center justify-between p-4 bg-white/70 rounded-xl cursor-pointer hover:bg-white transition-colors shadow-sm">
            <span className="font-semibold text-gray-800">View Member List</span>
            <ChevronDown size={20} className="text-gray-600 group-open:rotate-180 transition-transform" />
          </summary>
          <ul className="mt-3 p-3 max-h-80 overflow-y-auto border rounded-lg bg-white/80 space-y-1">
            {organizations.map((org, index) => (
              <li key={index} className="text-sm text-gray-800 py-2 px-3 hover:bg-white/90 rounded-md font-medium">
                {org}
              </li>
            ))}
          </ul>
        </details>
        )}
    </Card>
);

const SpotlightsCard = ({ text }) => (
    <Card id="best-practices" className="h-full bg-slate-800 text-white">
        <h3 className="text-2xl font-bold mb-3 tracking-tight">Spotlights of Partner Work</h3>
        <div className="flex-grow">
            <p className="text-slate-300 mb-4">This space will be built out to include stories from partner data and directly from the country, including links to impact stories, best practices, partner reports, and external sites.</p>
        </div>
        <div className={`mt-auto p-4 bg-slate-700 border-l-4 border-teal-400 rounded-r-lg`}>
          <p className="text-slate-200 italic text-sm">{text}</p>
        </div>
    </Card>
);

// --- THE MAIN PAGE COMPONENT ---
export default function CountryProfilePage() {
    // We assume the country is passed as a prop or determined by the URL.
    // For this demo, we'll hardcode it to 'uae'.
    const { id } = useParams<{ id: string }>();
    const countryId = id as string;
    const country = countryId && countryData[countryId] ? countryData[countryId] : null;
    // const countryStories = countryId && countryImpactStories[countryId] ? countryImpactStories[countryId] : [];


    if (!country) {
        // This would be replaced with a proper 404 page in a real app
        return <div className="p-8 font-bold text-red-500">Country not found!</div>
    }
    
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <div className="container mx-auto px-4 lg:px-8 py-12">
                <CountryProfileHeader countryName={country.name} isMember={country.isGEPMember} />

                <main>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-8">
                        <Pillar1Card data={country.pillar1} />
                        <Pillar2Card data={country.pillar2} />
                        <Pillar3Card data={country.pillar3} />
                        <Pillar4Card data={country.pillar4} />
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                           <SpotlightsCard text={country.impactStoriesBestPractices} />
                        </div>
                        <div>
                           {country.isGEPMember && <GepMemberListCard organizations={country.gepMemberOrganizations} />}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
