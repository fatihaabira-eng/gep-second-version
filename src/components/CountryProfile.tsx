import React, { useState, useEffect } from 'react';
import { BookOpen, Building, ChevronDown, ExternalLink, ArrowLeft, Leaf, Users, Globe, Target, FileText } from 'lucide-react';

// --- MOCK DATA ---
// Based on the provided Word documents and visual guide.
const countryData = {
  uae: {
    id: 'uae',
    name: 'United Arab Emirates',
    isGEPMember: true,
    gepMemberOrganizations: [
      "NCS", "Shining Star International School", "ICS School Mushrif", "Higher Colleges of Technology", "PraeEminere Advisory", "baseet", "UNICEF UAE", "Ajms Global", "ASCS", "Dubai Cares", "EAD", "Eduvate", "EmiratesGBC", "PwC", "Greeneration", "American Community School of Abu Dhabi", "American School of Dubai", "Arbor School", "Citizens School", "Clarion School Dubai", "Gems Cambridge International Private School", "PLANETGREENERS", "Pristine Private School", "Regent International School", "Sustainability Tribe", "Emirates Schools Establishment", "Gulf Medical University", "GEMS Founders School, Masdar City - Abu Dhabi", "Gems Wellington International School", "DP World", "Kings' School Al Barsha", "Terrain Floorings", "Dar Al Marefa", "City University Ajman", "GEMS Founders Al Mizhar", "Ajman University", "Al Ain University", "ESE", "GEMS Education", "Tadweera for Green Education"
    ],
    pillar1: {
      greenSchoolsCount: 139,
      countryResponse: "[The country will provide a text response based on this pillar. We welcome you to update as you see fit.]",
    },
    pillar2: {
      isClimateEducationInCurriculum: "Not available or data not reviewed",
      mecceGemrLink: "https://education-profiles.org/northern-africa-and-western-asia/united-arab-emirates/~climate-change-communication-and-education",
      countryResponse: "[The country will provide a text response based on this pillar. We invite you to provide any more information that you have done regarding greening the curriculum or teaching learning materials and syllabus.]"
    },
    pillar3: {
      isEducationInNDC: "Yes",
      ndcLink: "https://unfccc.int/sites/default/files/2024-11/UAE-NDC3.0.pdf",
      ndcResponse: "[The country will provide a text response based on this pillar. We invite you to provide any further information that you have done regarding policy or action plans focused on education for sustainable development.]",
      isClimateEducationInESP: "Not available or data not reviewed",
      espBestPractices: "[This is a TEXT space for best practices from IIEP’s analysis on ESPs. This review will be done by UNESCO IIEP and is not yet done.]"
    },
    pillar4: {
      citiesWithLifelongLearningProgramsCount: 1,
      unescoLearningCitiesLink: "https://www.uil.unesco.org/en/learning-cities/map?fq%5Bsm_unsc_field_ref_countries_label%5D%5B%5D=United+Arab+Emirates",
      countryResponse: "[The country will provide a text response based on this pillar. We welcome you to update as you see fit.]"
    },
    impactStoriesBestPractices: "Impact stories: for example link to MOCCAE News | Media Center | UAE Ministry of Climate Change and Environment"
  },
  albania: {
    id: 'albania',
    name: 'Albania',
    isGEPMember: false,
    gepMemberOrganizations: [],
    pillar1: {
      greenSchoolsCount: 0,
      countryResponse: "[The country will provide a text response based on this pillar.]"
    },
    pillar2: {
      isClimateEducationInCurriculum: "No",
      mecceGemrLink: null,
      countryResponse: "[The country will provide a text response based on this pillar.]"
    },
    pillar3: {
      isEducationInNDC: "Not available or data not reviewed",
      ndcLink: null,
      ndcResponse: "[The country will provide a text response based on this pillar.]",
      isClimateEducationInESP: "Not available or data not reviewed",
      espBestPractices: "[This is a TEXT space for best practices from IIEP’s analysis on ESPs. This review will be done by UNESCO IIEP and is not yet done.]"
    },
    pillar4: {
      citiesWithLifelongLearningProgramsCount: "Not available or data not reviewed",
      unescoLearningCitiesLink: null,
      countryResponse: "[The country will provide a text response based on this pillar.]"
    },
    impactStoriesBestPractices: "[Please share impact stories or best practices including external links of work partners are doing in your country.]"
  }
};

const getCountryProfileById = (id) => countryData[id] || null;


// --- HELPER & UI COMPONENTS ---
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-200/80 p-6 flex flex-col ${className}`}>
    {children}
  </div>
);

const StatusBadge = ({ status }) => {
  const normalizedStatus = typeof status === 'string' ? status.toLowerCase() : 'data not reviewed';
  let bgColor = 'bg-gray-100 text-gray-700';
  let dotColor = 'bg-gray-400';

  if (normalizedStatus === 'yes') {
    bgColor = 'bg-emerald-50 text-emerald-800';
    dotColor = 'bg-emerald-500';
  } else if (normalizedStatus === 'no') {
    bgColor = 'bg-red-50 text-red-800';
    dotColor = 'bg-red-500';
  }

  return (
    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${bgColor}`}>
      <span className={`w-2 h-2 mr-3 rounded-full ${dotColor}`}></span>
      {status}
    </div>
  );
};

const CountryResponseBox = ({ text }) => (
  <div className="mt-4 p-4 bg-gray-50/80 border-l-4 border-teal-600 rounded-r-lg flex-grow">
    <p className="text-gray-600 italic text-sm">{text}</p>
  </div>
);

const LinkButton = ({ href, text, icon: Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-teal-700 hover:text-teal-900 font-semibold">
        <Icon size={14} className="mr-1.5" />
        {text}
        <ExternalLink size={14} className="ml-1.5" />
    </a>
);


// --- MAIN PAGE SECTIONS ---

const CountryProfileHeader = ({ countryName }) => (
  <header className="mb-10">
    <a href="/countries" className="inline-flex items-center text-sm text-teal-700 hover:text-teal-900 mb-4 transition-colors">
      <ArrowLeft size={16} className="mr-2" />
      Back to Countries List
    </a>
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{countryName}</h1>
  </header>
);

const Pillar1Card = ({ data }) => (
  <Card id="pillar-1">
  <div className="flex items-start mb-4">
    <div className="bg-teal-100 p-3 rounded-full mr-4">
      <Building className="text-teal-700" size={24} />
    </div>
    <div>
      <h3 className="text-xl font-bold text-gray-800">Pillar 1: Greening Schools</h3>
      <p className="text-xs text-gray-500 flex items-center mt-1">
        <Target size={12} className="mr-1.5" /> Target: 50% of schools greened.
      </p>
    </div>
  </div>
  <div className="text-center my-6 flex-grow">
    <p className="text-6xl font-extrabold text-teal-600">
      {typeof data.greenSchoolsCount === 'number'
        ? data.greenSchoolsCount.toLocaleString()
        : data.greenSchoolsCount}
    </p>
    <p className="text-sm text-gray-500 mt-1">Number of Green Schools</p>
  </div>
  <div className="mb-4">
    <p className="text-sm font-medium text-gray-600 mb-2">
      Does the country have an accreditation scheme to recognize school’s
      outstanding work on sustainability and climate change?
    </p>
    <StatusBadge status="Yes" />
    <ul className="list-disc list-inside text-sm text-gray-600 mt-2 pl-4">
      <li>The Sustainable Schools Accreditation</li>
      <li>The Sustainable Campus Accreditation</li>
      <li>The Eco-School Model</li>
      <li>The Eco-Campus (to be implemented in 2023)</li>
    </ul>
  </div>
  <div className="mb-4">
    <p className="text-sm font-medium text-gray-600 mb-2">
      Does the country have an award to recognize school’s outstanding work on
      sustainability and climate change?
    </p>
    <StatusBadge status="Yes" />
  </div>
  <div className="mb-4">
    <p className="text-sm font-medium text-gray-600 mb-2">
      Does the country have a network of schools dedicated to sustainability
      and climate change?
    </p>
    <StatusBadge status="No" />
  </div>
  <div>
    <CountryResponseBox
      text="The Sustainable schools Initiative is an internationally recognized environmental initiative in partnership with the Department of Education and Knowledge (ADEK), Ministry of Education, and sponsored by Bp, allowing youth to explore the environment and learn ways to reduce their ecological footprint, while creating a sense of ownership and responsibility towards the future by addressing their own environmental impact. SSI is one of our Environmental Education flagship projects due to its quest to promote environmental sustainability addressing school communities. https://sustainableschools.ead.ae/SSI/"
    />
  </div>
</Card>
);

const Pillar2Card = ({ data }) => (
  <Card id="pillar-2">
    <div className="flex items-start mb-4">
      <div className="bg-teal-100 p-3 rounded-full mr-4">
        <BookOpen className="text-teal-700" size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">Pillar 2: Greening Curriculum</h3>
        <p className="text-xs text-gray-500 flex items-center mt-1"><Target size={12} className="mr-1.5"/> Target: 90% of countries green curriculum.</p>
      </div>
    </div>
    <div className="my-6 space-y-4 flex-grow">
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">Climate Education in Curriculum? (GEMR Review)</p>
        <StatusBadge status={data.isClimateEducationInCurriculum} />
      </div>
      {data.mecceGemrLink && (
        <LinkButton href={data.mecceGemrLink} text="View MECCE/GEMR Profile" icon={ExternalLink} />
      )}
    </div>
    <div>
        <h4 className="font-semibold text-gray-700">Country Activities:</h4>
        <CountryResponseBox text={data.countryResponse} />
    </div>
  </Card>
);

const Pillar3Card = ({ data }) => (
  <Card id="pillar-3">
    <div className="flex items-start mb-4">
      <div className="bg-teal-100 p-3 rounded-full mr-4">
        <Users className="text-teal-700" size={24} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800">Pillar 3: Teacher Training & Capacities</h3>
        <p className="text-xs text-gray-500 flex items-center mt-1"><Target size={12} className="mr-1.5"/> Target: 50% of countries have education in NDCs.</p>
      </div>
    </div>
    <div className="space-y-6 mt-6 flex-grow">
      <div className="p-4 border rounded-lg bg-gray-50/50">
        <p className="text-sm font-medium text-gray-600 mb-2">Is education reflected in NDCs?</p>
        <div className='flex items-center justify-between'>
            <StatusBadge status={data.isEducationInNDC} />
            {data.ndcLink && <LinkButton href={data.ndcLink} text="Link to NDC" icon={FileText} />}
        </div>
        <h5 className="font-semibold text-gray-700 mt-4 text-sm">Country Response on NDCs:</h5>
        <CountryResponseBox text={data.ndcResponse} />
      </div>
      <div className="p-4 border rounded-lg bg-gray-50/50">
        <p className="text-sm font-medium text-gray-600 mb-2">Is climate education in Education Sector Plans? (IIEP Review)</p>
        <StatusBadge status={data.isClimateEducationInESP} />
        <h5 className="font-semibold text-gray-700 mt-4 text-sm">Best Practices from ESPs:</h5>
        <CountryResponseBox text={data.espBestPractices} />
      </div>
    </div>
  </Card>
);

const Pillar4Card = ({ data }) => (
    <Card id="pillar-4">
      <div className="flex items-start mb-4">
        <div className="bg-teal-100 p-3 rounded-full mr-4">
          <Globe className="text-teal-700" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">Pillar 4: Greening Communities</h3>
          <p className="text-xs text-gray-500 flex items-center mt-1"><Target size={12} className="mr-1.5"/> Target: 20% of cities have a lifelong learning programme.</p>
        </div>
      </div>
      <div className="text-center my-6 flex-grow">
        <p className="text-6xl font-extrabold text-teal-600">{typeof data.citiesWithLifelongLearningProgramsCount === 'number' ? data.citiesWithLifelongLearningProgramsCount.toLocaleString() : data.citiesWithLifelongLearningProgramsCount}</p>
        <p className="text-sm text-gray-500 mt-1">Cities with at least one programme</p>
      </div>
      <div>
         {data.unescoLearningCitiesLink && (
            <div className="mb-4">
                <LinkButton href={data.unescoLearningCitiesLink} text="Link to UNESCO Learning Cities" icon={ExternalLink} />
            </div>
          )}
        <h4 className="font-semibold text-gray-700">Country Activities:</h4>
        <CountryResponseBox text={data.countryResponse} />
      </div>
    </Card>
);

const GepMembershipCard = ({ isMember, organizations }) => (
  <Card id="gep-membership">
    <div className="flex items-center mb-4">
        <div className="bg-green-100 p-3 rounded-full mr-4">
            <Leaf className="text-green-700" size={24}/>
        </div>
        <h3 className="text-xl font-bold text-gray-800">GEP Membership</h3>
    </div>
    <div className="mb-4">
      <p className="text-sm font-medium text-gray-600 mb-2">Is this country a GEP Member?</p>
      <StatusBadge status={isMember ? 'Yes' : 'No'} />
    </div>
    {isMember && organizations.length > 0 && (
      <div>
        <p className="text-sm font-medium text-gray-600 mb-2">GEP Member Organizations in this Country ({organizations.length})</p>
        <details className="group">
          <summary className="flex items-center justify-between p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
            <span className="font-semibold text-gray-800">View Member Organizations</span>
            <ChevronDown size={20} className="text-gray-600 group-open:rotate-180 transition-transform" />
          </summary>
          <ul className="mt-2 p-3 max-h-60 overflow-y-auto border rounded-lg bg-white">
            {organizations.map((org, index) => (
              <li key={index} className="text-sm text-gray-700 py-1.5 px-2 hover:bg-gray-50 rounded">
                {org}
              </li>
            ))}
          </ul>
        </details>
      </div>
    )}
  </Card>
);

const BestPracticesCard = ({ text }) => (
    <Card id="best-practices">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Spotlights of Partner Work</h3>
        <p className="text-sm text-gray-500 mb-4">This space will be built out to include stories from partner data and directly from the country. This area will include links to impact stories and best practices, as well as external sites, partner reports.</p>
        <CountryResponseBox text={text} />
    </Card>
);

// --- THE MAIN PAGE COMPONENT ---
export default function App() {
    const [countryId, setCountryId] = useState('uae'); 
    const country = getCountryProfileById(countryId);
    
    if (!country) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <Card className="text-center max-w-lg">
                    <h1 className="text-2xl font-bold text-red-600 mb-3">Country Not Found</h1>
                    <p className="text-gray-600 mb-6">
                        Sorry, we couldn't find data for the country ID "{countryId}".
                    </p>
                    <a href="#" className="inline-flex items-center px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg shadow-sm hover:bg-teal-700 transition-colors">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Countries List
                    </a>
                     <div className="mt-4 text-xs">
                        <button onClick={() => setCountryId('uae')} className="text-teal-600 hover:underline p-1">Load UAE Data</button> |
                        <button onClick={() => setCountryId('albania')} className="text-teal-600 hover:underline p-1">Load Albania Data</button>
                    </div>
                </Card>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <div className="container mx-auto px-4 py-10">
                <main>
                    <CountryProfileHeader countryName={country.name} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <Pillar1Card data={country.pillar1} />
                        <Pillar2Card data={country.pillar2} />
                        <Pillar3Card data={country.pillar3} />
                        <Pillar4Card data={country.pillar4} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <GepMembershipCard isMember={country.isGEPMember} organizations={country.gepMemberOrganizations} />
                        <BestPracticesCard text={country.impactStoriesBestPractices} />
                    </div>
                </main>
            </div>
        </div>
    );
}
