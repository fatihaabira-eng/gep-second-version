import React, { useState } from 'react';
import { BookOpen, Building, ChevronDown, ExternalLink, ArrowLeft, Leaf, Users, Globe, Target, FileText, Award, Link2 } from 'lucide-react';
import pillar1_image from '../imgs/pillar1.png';
import pillar2_image from '../imgs/pillar2.png';
import pillar3_image from '../imgs/pillar3.png';
import pillar4_image from '../imgs/pillar4.png';
import { useParams } from 'react-router-dom';
import { QuickLinksSection } from './QuickLinks';
import { ImpactStories } from './ImpactStories';

// --- MOCK DATA ---
const countryData = {
  "uae": {
    "id": "uae",
    "name": "United Arab Emirates",
    "isGEPMember": true,
    "gepMemberOrganizations": [
      "NCS", "Shining Star International School", "ICS School Mushrif", "Higher Colleges of Technology", "PraeEminere Advisory", "baseet", "UNICEF UAE", "Ajms Global", "ASCS", "Dubai Cares", "EAD", "Eduvate", "EmiratesGBC", "PwC", "Greeneration", "American Community School of Abu Dhabi", "American School of Dubai", "Arbor School", "Citizens School", "Clarion School Dubai", "Gems Cambridge International Private School", "PLANETGREENERS", "Pristine Private School", "Regent International School", "Sustainability Tribe", "Emirates Schools Establishment", "Gulf Medical University", "GEMS Founders School, Masdar City - Abu Dhabi", "Gems Wellington International School", "DP World", "Kings' School Al Barsha", "Terrain Floorings", "Dar Al Marefa", "City University Ajman", "GEMS Founders Al Mizhar", "Ajman University", "Al Ain University", "ESE", "GEMS Education", "Tadweera for Green Education"
    ],
    "pillar1": {
      "target": "By 2030 50% of schools in every country greened",
      "greenSchoolsCount": 139,
      "questions": [
        {
          "question": "Accreditation Scheme?",
          "answer": "Yes",
          "schemes": ["The Sustainable Schools Accreditation", "The Sustainable Campus Accreditation", "The Eco-School Model", "The Eco-Campus (to be implemented in 2023)"]
        },
        { "question": "Award Scheme?", "answer": "Yes" },
        { "question": "School Network?", "answer": "No" }
      ],
      "countryResponse": "The Sustainable schools Initiative is an internationally recognized environmental initiative in partnership with the Department of Education and Knowledge (ADEK), Ministry of Education, and sponsored by Bp, allowing youth to explore the environment and learn ways to reduce their ecological footprint... https://sustainableschools.ead.ae/SSI/"
    },
    "pillar2": {
      "target": "90% of countries green national curriculum",
      "questions": [
        { "question": "National curriculum includes sustainable development?", "answer": "Yes" },
        { "question": "National curriculum includes climate change?", "answer": "Yes" },
        { "question": "National curriculum includes biodiversity?", "answer": "Yes" },
        { "question": "Planning curriculum reform in next 3 years?", "answer": "Yes" },
        { "question": "Interested in a curriculum review?", "answer": "Yes" }
      ],
      "mecceGemrLink": "https://education-profiles.org/northern-africa-and-western-asia/united-arab-emirates/~climate-change-communication-and-education",
      "countryResponse": "We have developed a cross-curriculum framework which tackles 23 different curriculums with 4 different topics: Energy Biodiversity and Biosphere Climate Change and consumption Innovation and sustainability. The Ministry of Education has committed to implement the Green Education Partnership in the UAE and aims to implement the cross-curriculum framework in all UAE schools Starting September 2023."
    },
    "pillar3": {
      "target": "50% of countries have education in their NDCs to UNFCCC.",
      "questions": [
        { "question": "Education in NDCs?", "answer": "Yes" },
        { "question": "Climate education in ESPs?", "answer": "Analysis to be done by UNESCO IIEP" },
        { "question": "Legislation on sustainable education?", "answer": "No", "explanation": "As part of the NDC, we are aiming to put Green Education at the core of UAE’s NDC." },
        { "question": "Policy/action plan for sustainable education?", "answer": "Yes" },
        { "question": "Pre-service/in-service training on sustainability?", "answer": "Yes" },
        { "question": "Planning to incorporate these topics in teacher training?", "answer": "Yes", "explanation": "With UNICEF, we are developing a training program for all UAE Educators and school leaders in private and public schools, aligned with the cross-curriculum framework." }
      ],
      "ndcLink": "https://unfccc.int/sites/default/files/2024-11/UAE-NDC3.0.pdf",
      "ndcEarthDayLink": "https://www.earthday.org/ndc-tracker/#category2",
      "countryResponse": "In 2009 the UAE launched the Sustainable Schools Initiative – an interactive and participatory approach among both public and private schools. The initiative aimed to achieve measurable outcomes in efficient use of resources and adoption of new teaching and learning strategies among students to achieve the set goals. Emphasis was laid on teacher training and enabling them to become facilitators, encouraging students to discover solutions independently.  The UAE has come a long way since the beginning of the previous decade in taking concerted actions to not only reduce its carbon footprint but equip its next generation by involving schools in its planned journey. UAE schools have been encouraging the adoption of sustainability education into their curriculum, considering it a high priority. Schools have adopted Education for Sustainable Development (ESD) into their curriculum to address the urgent need to protect the environment and safeguard the planet’s biodiversity and natural resources. In 2022, Minister of Education has committed to implement the Green Education Partnership  in the UAE. Since then, the Ministry of Education has designed and developed a framework and roadmap to achieve all the Green Pillars KPI by the end of the COP 28.."
    },
    "pillar4": {
      "target": "20% of cities and communities have climate change lifelong learning.",
      "citiesWithLifelongLearningProgramsCount": 1,
      "learningCities": ["Ras Al Khaimah"],
      "questions": [
        { "question": "National/local policies for climate-resilient communities?", "answer": "No" }
      ],
      "unescoLearningCitiesLink": "https://www.uil.unesco.org/en/learning-cities/map?fq%5Bsm_unsc_field_ref_countries_label%5D%5B%5D=United+Arab+Emirates",
      "countryResponse": "We are developing policies and guidelines by building different abstract community engagement model for all Emirates."
    },
    "impactStoriesBestPractices": "This space will be built out to include stories from partner data and directly from the country, including links to impact stories, best practices, partner reports, and external sites. Information to be provided by country focal point."
  },
  "al": {
    "id": "al",
    "name": "Albania",
    "isGEPMember": true,
    "gepMemberOrganizations": [],
    "pillar1": {
      "target": "By 2030 50% of schools in every country greened",
      "greenSchoolsCount": 0,
      "questions": [
        { "question": "Accreditation Scheme?", "answer": "No" },
        { "question": "Award Scheme?", "answer": "No" },
        { "question": "School Network?", "answer": "No" }
      ],
      "countryResponse": "Initiatives the country is interested to develop: Greening school accreditation scheme: No, Award for outstanding greening education interventions: No, National green school network: No."
    },
    "pillar2": {
      "target": "90% of countries green national curriculum",
      "questions": [
        { "question": "National curriculum includes sustainable development?", "answer": "Yes" },
        { "question": "National curriculum includes climate change?", "answer": "Yes" },
        { "question": "National curriculum includes biodiversity?", "answer": "Yes" },
        { "question": "Planning curriculum reform in next 3 years?", "answer": "No" },
        { "question": "Interested in a curriculum review?", "answer": "No" }
      ],
      "mecceGemrLink": "https://education-profiles.org/europe-and-northern-america/albania/~climate-change-communication-and-education",
      "countryResponse": "Knowledges related to the environment and sustainable development such as biodiversity and its conservation, climate change, the environment and its protection, natural resources and their sustainable use, etc. are included in learning areas and subjects such as \"Society and Environment\", \"Natural Sciences\", etc. in all levels of pre-university education. Also, placing a special focus on climate change, the module \"Man and climate change\" has been included as part of the optional curriculum in upper secondary education."
    },
    "pillar3": {
      "target": "50% of the countries have education in their NDCs to UNFCCC.",
      "questions": [
        { "question": "Education in NDCs?", "answer": "No" },
        { "question": "Climate education in ESPs?", "answer": "Analysis to be done by UNESCO IIEP" },
        { "question": "Legislation on sustainable education?", "answer": "No" },
        { "question": "Policy/action plan for sustainable education?", "answer": "No" },
        { "question": "Pre-service/in-service training on sustainability?", "answer": "Yes" },
        { "question": "Planning to incorporate these topics in teacher training?", "answer": "Yes", "explanation": "Regarding the professional development of teachers, accredited training programs include topics and modules on such issues as environmental education, climate change, sustainable development, etc." }
      ],
      "ndcLink": "https://unfccc.int/sites/default/files/2022-08/Albania%20Revised%20NDC.pdf",
      "ndcEarthDayLink": "https://www.earthday.org/ndc-tracker/#category2",
      "countryResponse": "The law on the pre-university education system defines that one of its goals is for students to develop responsibility towards the environment. Learning about the environment and sustainable development has become an integral part of the curriculum. The competency-based curriculum aims to develop students who are competent to understand the interconnection of economic, political and social phenomena and contribute to sustainable development. \"Learning Standards - Education for Sustainable Development\" (2018) define a system of requirements for sustainable development issues that serve as reference points for teachers."
    },
    "pillar4": {
      "target": "20% of cities and communities have at least one climate change lifelong learning programme.",
      "citiesWithLifelongLearningProgramsCount": "Data not reviewed",
      "learningCities": ["Data not reviewed"],
      "questions": [
        { "question": "National/local policies for climate-resilient communities?", "answer": "Yes" }
      ],
      "unescoLearningCitiesLink": "https://www.uil.unesco.org/en/learning-cities/map?query=&hub=38",
      "countryResponse": "At the national level, the National Strategy for Development and Integration 2020-2030 is the main strategic document. At the local level, municipalities have developed policies and strategies related to the education of communities and the engagement of young people for various issues of the environment and its sustainable development."
    },
    "impactStoriesBestPractices": "No impact stories or best practices have been provided for this country yet."
  },
  "ad": {
  "id": "ad",
  "name": "Andorra",
  "isGEPMember": true,
  "gepMemberOrganizations": [
    "Ministry of Education",
    "Ministry of Environment",
    "Andorra Sostenible",
    "University of Andorra",
    "Andorra Recerca i Innovació"
  ],
  "pillar1": {
    "target": "By 2030 50% of schools in every country greened",
    "greenSchoolsCount": 33,
    "questions": [
      { "question": "Accreditation Scheme?", "answer": "Yes" },
      { "question": "Award Scheme?", "answer": "Yes" },
      { "question": "School Network?", "answer": "Yes" }
    ],
    "countryResponse": [
      { "type": "paragraph", "content": "In Andorra, all 33 educational institutions are part of the Green Schools network and the government has developed awards to recognize outstanding work[13]." },
      { "type": "heading", "content": "The Green School Programme" },
      { "type": "paragraph", "content": "Launched in the 2010–2011 school year, this programme involves all 33 institutions and 11,314 students. It is guided by the government-funded 'Centre Andorra Sostenible' which provides workshops, training, and resources[13]." },
      { "type": "list", "title": "The programme's objectives are:", "items": [
          "Promote values and attitudes aligned with sustainable development[13].",
          "Deepen knowledge of the environment and the conditions necessary for its preservation[13].",
          "Optimize the management of the school as a sustainable infrastructure[13].",
          "Promote a network for exchange and communication among schools[13]."
      ]},
      { "type": "paragraph", "content": "To join the Greening School Programme, schools have followed the following process:" },
      { "type": "list", "title": "The programme's objectives are:", "items": [
          "Sharing motivations within the school community and assessing the current functioning of the institution",
          "Identifying actions needed to improve the school’s sustainability",
          "Planning short- and medium-term actions",
          "Evaluating the implementation of these actions",
          "Sharing outcomes with all participants in the Green School Programme",
      ]},
      { "type": "paragraph", "content": "In recent years, network members have developed a variety of initiatives—from creating organic gardens to waste prevention and reuse activities (Clean Up Day, recycled paper workshops, furniture restoration, etc.). One example of a major event involving much of the network was the most recent Clean Up Day, held between 16 and 20 September 2024, which gathered 20 schools from the three education systems, totaling 1,700 students. Thanks to the network’s synergy, thematic groups have also been created in which schools share experiences, challenges, and concerns on specific topics. Participation in these groups is voluntary, and each school joins based on the topics they wish to explore further." },
      { "type": "list", "title": "During the 2024–2025 school year, the working groups are:", "items": [
          "“Waste prevention and reuse”",
          "“School gardens and composting”",
          "“Local and responsible consumption”",
          "“Noise and light pollution”",
          "“Water pollution, water footprint, water savings”",
          "“Local fauna and flora”",
      ]},
      { "type": "paragraph", "content": "Within the network, a Green Schools Forum was also created to foster exchange. Students and teachers from across the network share their sustainability and environmental projects developed throughout the school year. It resumed during the 2024–2025 school year as a one-day event with dedicated sessions (primary, secondary, and post-compulsory education). The event gathered 206 students from 20 educational institutions." },
      { "type": "heading", "content": "UNESCO Associated Schools Network and Sustainable Development" },
      { "type": "paragraph", "content": "In Andorra, the UNESCO Associated Schools Network includes eight educational institutions from the Andorran and Spanish education systems. They represent 38% of the student population (4,298 students). These associated schools integrate sustainable development into their educational projects. Throughout the school year, many activities are initiated by the schools themselves. These specific actions (waste management, food waste reduction, school gardens, environmental observations, among others) aim to promote sustainable behaviors within the school community. They also strengthen interactive and participatory teaching and learning that fosters students’ critical thinking on local and global sustainable development issues. To deepen these topics, the national coordination team offers network members an annual catalogue of activities (lectures, workshops, exhibitions). Sustainability and climate change issues (overconsumption, resource exploitation, climate change, etc.) are addressed in ways that connect with students’ daily lives and current events. Knowledge of the territory and its tangible and intangible heritage is also developed to reconnect students with their natural environment (International Mountain Day, traditional use of the valleys, etc.). The goal of all these initiatives within the network is to equip students to face global challenges and contribute to creating more sustainable and resilient societies." },
      { "type": "link", "content": "https://www.unesco.ad/category/escoles-associades/curs-escolar-2024-2025/" },

    ]
  },
  "pillar2": {
    "target": "90% of countries green national curriculum",
    "questions": [
      { "question": "National curriculum includes sustainable development?", "answer": "Yes" },
      { "question": "National curriculum includes climate change?", "answer": "Yes" },
      { "question": "National curriculum includes biodiversity?", "answer": "Yes" },
      { "question": "Planning curriculum reform in next 3 years?", "answer": "Yes" }
    ],
    "mecceGemrLink": "Not available or data not reviewed response",
    "countryResponse": [
      { "type": "paragraph", "content": "The Ministry of Education considers education for sustainable development a cross-cutting approach, integrating its issues into the curriculum from primary school to high school. Concepts like climate change and biodiversity are incorporated throughout the students' journey[13]." },
      { "type": "heading", "content": "Formació Andorrana (Andorran Education)" },
      { "type": "paragraph", "content": "Since the French and Spanish education systems coexist in Andorra, the government provides the 'Formació Andorrana' programme to ensure all students learn about Andorra's specific natural environment and history. This programme addresses sustainable development through specific competencies and resources[13]." },
      { "type": "heading", "content": "Education for Sustainable Development in the Andorran School System" },
      { "type": "list", "items": [
          "Preschool (ages 4–5): Workshops on waste management and landscape conservation are conducted[13].",
          "Primary school (ages 6–12): Activities include proposing measures to reduce the school's environmental impact, brainstorming ways to reduce food waste, and analyzing their ecological footprint[13].",
          "Middle school (ages 13–15): Students study the transition to a new energy model in Andorra and evaluate the health of Andorran rivers[13].",
          "High school (ages 16–18): Sustainable development is addressed on a global scale, with students analyzing issues like climate change, pollution, and deforestation[13]."
      ]}
    ]
  },
  "pillar3": {
    "target": "50% of the countries have education in their NDCs to UNFCCC.",
    "questions": [
      { "question": "Education in NDCs?", "answer": "Yes" },
      { "question": "Climate education in ESPs?", "answer": "[Under development by IIEP]" },
      { "question": "Legislation on sustainable education?", "answer": "Yes" },
      { "question": "Policy/action plan for sustainable education?", "answer": "Yes" },
      { "question": "Pre-service/in-service training on sustainability?", "answer": "Yes" }
    ],
    "ndcLink": "https://unfccc.int/sites/default/files/2025-02/NDC%203.0%20ANDORRA.pdf",
    "ndcEarthDayLink": "https://www.earthday.org/ndc-tracker/",
    "countryResponse": [
        { "type": "heading", "content": "Policy and Action Plans" },
        { "type": "paragraph", "content": "Education for Sustainable Development is defined within the legislation that establishes the curriculum for the Andorran Education System[13]. A major milestone was the creation of the government-funded 'Andorra Sostenible' center in 2003 to promote sustainable development[13]. These efforts led to the 'Andorran Strategy for Environmental Education for Sustainability' in 2022, developed by the Ministries of Education and Environment[13]." },
        { "type": "heading", "content": "Teacher Training" },
        { "type": "paragraph", "content": "At the University of Andorra, initial teacher training for both Bachelor's and Master's degrees in Education Sciences includes all issues related to sustainable development. The SDGs are at the core of the pedagogical model, ensuring sustainability is integrated throughout the curriculum for future teachers[13]." }
    ]
  },
  "pillar4": {
    "target": "20% of cities and communities in each country have at least one climate change lifelong learning programme",
    "citiesWithLifelongLearningProgramsCount": "Not available or data not reviewed response",
    "learningCities": ["Not available or data not reviewed response"],
    "questions": [
      { "question": "National/local policies for climate-resilient communities?", "answer": "Yes" }
    ],
    "unescoLearningCitiesLink": "Not available or data not reviewed response",
    "countryResponse": [
      { "type": "paragraph", "content": "In Andorra, several actors work to support the development of climate-resilient communities through training and awareness programs[13]." },
      { "type": "heading", "content": "Key Actors and Initiatives" },
      { "type": "list", "items": [
          "Ministry of Education: A lifelong learning center offers training courses to the general public on topics including climate change and natural resource use[13].",
          "University of Andorra: Sustainable development is integrated into continuing education programmes for professionals from various economic sectors[13].",
          "Andorra Recerca i Innovació: A multidisciplinary research center that shares knowledge with society to inform policy-making on climate change[13].",
          "Local Municipalities: Organize communication and awareness programmes to highlight natural and cultural heritage[13].",
          "Andorra Sostenible: A key organization responsible for promoting sustainable development education among the general population[13]."
      ]}
    ]
  },
  "impactStoriesBestPractices": "No impact stories or best practices have been provided for this country yet."
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
    // Normalize status to handle different casing and potential null/undefined values
    const normalizedStatus = typeof status === 'string' ? status.toLowerCase() : 'data not reviewed';

    let bgColor = 'bg-gray-100 text-gray-800';
    let dotColor = 'bg-gray-400';
    let text = status;

    if (normalizedStatus.includes('yes')) {
        bgColor = 'bg-green-100 text-green-900';
        dotColor = 'bg-green-500';
    } else if (normalizedStatus.includes('no')) {
        bgColor = 'bg-red-100 text-red-900';
        dotColor = 'bg-red-500';
    } else {
        text = "Data not reviewed"; // Standardize the text for this case
    }
    
    // Specific case for IIEP analysis text
    if (normalizedStatus.includes('iiep')) {
        bgColor = 'bg-blue-100 text-blue-900';
        dotColor = 'bg-blue-500';
        text = "Analysis pending"; // Friendlier text
    }


    return (
        <div className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold ${bgColor} ${className}`}>
            <span className={`w-2.5 h-2.5 mr-3 rounded-full ${dotColor}`}></span>
            {text}
        </div>
    );
};

const CountryResponseBox = ({ data, characterLimit = 150 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleIsExpanded = (e) => {
        e.preventDefault();
        setIsExpanded(!isExpanded);
    };

    // Convert all structured content to a raw text preview for collapsed mode
    const extractTextContent = () => {
        if (typeof data === 'string') return data;

        if (Array.isArray(data)) {
            return data
                .map((item) => {
                    if (item.type === 'heading' || item.type === 'paragraph') {
                        return item.content;
                    } else if (item.type === 'list') {
                        return `${item.title || ''} ${item.items?.join(' ') || ''}`;
                    } else {
                        return '';
                    }
                })
                .join(' ');
        }

        return '';
    };

    const rawText = extractTextContent();
    const isLongText = rawText.length > characterLimit;
    const displayText = isExpanded
        ? null
        : `${rawText.substring(0, characterLimit)}${isLongText ? '...' : ''}`;

    return (
        <div className="mt-auto pt-4">
            <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-slate-200">
                {isExpanded ? (
                    <div className="text-left space-y-3">
                        {Array.isArray(data) ? (
                            data.map((item, index) => {
                                switch (item.type) {
                                    case 'heading':
                                        return (
                                            <h3 key={index} className="text-md font-bold text-gray-800 pt-2">
                                                {item.content}
                                            </h3>
                                        );
                                    case 'paragraph':
                                        return (
                                            <p key={index} className="text-sm text-gray-700 leading-relaxed">
                                                {item.content}
                                            </p>
                                        );
                                    case 'list':
                                        return (
                                            <div key={index}>
                                                {item.title && (
                                                    <h4 className="text-sm font-semibold text-gray-700 mb-1">
                                                        {item.title}
                                                    </h4>
                                                )}
                                                <ul className="list-disc list-inside space-y-1 pl-2">
                                                    {item.items.map((listItem, i) => (
                                                        <li key={i} className="text-sm text-gray-700 leading-relaxed">
                                                            {listItem}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        );
                                    case 'link':
                                        return (
                                            <p key={index} className="text-sm text-blue-600 underline">
                                                <a href={item.content} target="_blank" rel="noopener noreferrer">
                                                    {item.content}
                                                </a>
                                            </p>
                                        );
                                    default:
                                        return null;
                                }
                            })
                        ) : (
                            <p className="text-sm text-gray-700 leading-relaxed italic">{data}</p>
                        )}
                    </div>
                ) : (
                    <p className="text-sm text-gray-700 italic">{displayText}</p>
                )}

                {isLongText && (
                    <a
                        href="#"
                        onClick={toggleIsExpanded}
                        className="text-teal-600 hover:text-teal-800 text-sm font-semibold mt-2 inline-block"
                    >
                        {isExpanded ? 'Read Less' : 'Learn More'}
                    </a>
                )}
            </div>
        </div>
    );
};

const LinkButton = ({ href, text, icon: Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-teal-600 hover:text-teal-800 font-semibold transition-colors group">
        <Icon size={16} className="mr-2 text-teal-500" />
        <span className="group-hover:underline">{text}</span>
        <ExternalLink size={14} className="ml-1.5 opacity-70 group-hover:opacity-100" />
    </a>
);

const PillarTarget = ({ text }) => (
    <div className="flex items-start gap-3 text-teal-800 bg-teal-50 rounded-lg p-3 mb-5 border border-teal-200/50">
        <Target size={20} className="text-teal-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs font-semibold"><span className="font-bold mr-1">Target:</span>{text}</p>
    </div>
);
const PillarQuestion = ({ item }) => (
    <div className="py-3 border-b border-gray-100 last:border-b-0">
        <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600 pr-4">{item.question}</p>
            <StatusBadge status={item.answer} />
        </div>
        {item.explanation && (
            <div className="mt-2 pl-2 text-xs text-gray-500 italic">
                - {item.explanation}
            </div>
        )}
        {item.schemes && item.answer.toLowerCase() === 'yes' && (
            <div className="mt-2 pl-4">
                <ul className="list-disc list-inside space-y-1">
                    {item.schemes.map((scheme, index) => (
                        <li key={index} className="text-xs text-gray-600">{scheme}</li>
                    ))}
                </ul>
            </div>
        )}
    </div>
);

const CountryProfileHeader = ({ countryName, isMember }) => (
  <div className="relative bg-gradient-to-br from-teal-600 to-green-600 text-white rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
    <div className="absolute inset-0 bg-black/10"></div>
    <div className="relative z-10">
        <a href="/countries"  className="inline-flex items-center text-sm text-white/80 hover:text-white mb-6 transition-colors">
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
        <div className="flex items-start justify-between mb-4">
            <div className='flex items-center'>
                 <div className="bg-white p-2 rounded-2xl mr-4 shadow-sm border border-gray-100">
                    <img 
                        src={imageSrc} 
                        alt={`${title} icon`} 
                        className="w-14 h-14 object-contain"
                        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/64x64/eee/ccc?text=Img`; }}
                    />
                </div>
                <h3 className="text-2xl font-bold tracking-tight" style={{ color: color }}>{title}</h3>
            </div>
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
            imageSrc={pillar1_image}
            title="Pillar 1: Greening Schools" 
            color={color}
        >
            <PillarTarget text={data.target} />
            <div className="text-center my-4">
                <p className="text-7xl font-extrabold" style={{ color: "#6FAC44" }}>{data.greenSchoolsCount.toLocaleString()}</p>
                <p className="text-base text-gray-500 mt-2 font-medium">Number of Green Schools</p>
            </div>
            <div className="space-y-1 mb-4">
                {data.questions.map((q, i) => <PillarQuestion key={i} item={q} />)}
            </div>
            <CountryResponseBox data={data.countryResponse} />
        </PillarCard>
    );
};

const Pillar2Card = ({ data }) => {
    const color = "#5DAF8B";
    return (
        <PillarCard 
            imageSrc={pillar2_image}
            title="Pillar 2: Greening Curriculum"
            color={color}
        >
            <PillarTarget text={data.target} />
            <div className="space-y-1 mb-4">
                {data.questions.map((q, i) => <PillarQuestion key={i} item={q} />)}
            </div>
            {data.mecceGemrLink && ( <LinkButton href={data.mecceGemrLink} text="View MECCE/GEMR Profile" icon={Link2} /> )}
            <CountryResponseBox data={data.countryResponse} />
        </PillarCard>
    );
};

const Pillar3Card = ({ data }) => {
    const color = "#085658";
    return (
        <PillarCard 
            imageSrc={ pillar3_image}
            title="Pillar 3: Teacher Capacity"
            color={color}
        >
            <PillarTarget text={data.target} />
            <div className="space-y-1 mb-4">
                {data.questions.map((q, i) => <PillarQuestion key={i} item={q} />)}
            </div>
            <div className="mt-4 space-y-2">
                {data.ndcLink && <LinkButton href={data.ndcLink} text="Country NDC Document" icon={FileText} />}
                {data.ndcEarthDayLink && <LinkButton href={data.ndcEarthDayLink} text="EarthDay.org NDC Analysis" icon={FileText} />}
            </div>
            <CountryResponseBox data={data.countryResponse}  />
        </PillarCard>
    );
};

const Pillar4Card = ({ data }) => {
    const color = "#56813A";
    return (
        <PillarCard
            imageSrc={pillar4_image}
            title="Pillar 4: Greening Communities"
            color={color}
        >
            <PillarTarget text={data.target} />
            <div className="text-center my-4">
                <p className="text-7xl font-extrabold" style={{ color: "#56813A" }}>
                {typeof data.citiesWithLifelongLearningProgramsCount === 'number' ? data.citiesWithLifelongLearningProgramsCount : 'N/A'}
                </p>
                <p className="text-base text-gray-500 mt-2 font-medium">Cities with Lifelong Learning</p>
                <p className="text-sm text-gray-500 mt-1">({data.learningCities.join(', ')})</p>
            </div>
            <div className="space-y-1 mb-4">
                {data.questions.map((q, i) => <PillarQuestion key={i} item={q} />)}
            </div>
            {data.unescoLearningCitiesLink && (
                <div className="mb-4"> <LinkButton href={data.unescoLearningCitiesLink} text="UNESCO Learning Cities Network" icon={Link2} /> </div>
            )}
            <CountryResponseBox data={data.countryResponse}  />
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
    <Card className="h-full bg-slate-800 text-white">
        <h3 className="text-2xl font-bold mb-3 tracking-tight">Spotlights of Partner Work</h3>
        <div className="flex-grow">
            <p className="text-slate-300 mb-4">This space will be built out to include links to best practices, partner reports, and external sites.</p>
        </div>
        <div className={`mt-auto p-4 bg-slate-700 border-l-4 border-teal-400 rounded-r-lg`}>
          <p className="text-slate-200 italic text-sm">{text}</p>
        </div>
    </Card>
);

// --- THE MAIN PAGE COMPONENT ---
export default function CountryProfilePage() {
    const { id } = useParams<{ id: string }>();
    const countryId = id as string;
    const country = countryId && countryData[countryId] ? countryData[countryId] : null;
    // const countryStories = countryId && countryImpactStories[countryId] ? countryImpactStories[countryId] : [];

   if (!country) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                 <div className="p-8 font-bold text-center">
                     <h1 className="text-3xl text-red-500 mb-4">Country Not Found</h1>
                     <p className="text-gray-600">The requested country profile could not be loaded.</p>
                      <a href="#" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/country/uae'); window.dispatchEvent(new PopStateEvent('popstate')); }} className="mt-6 inline-block bg-teal-600 text-white font-bold py-2 px-4 rounded hover:bg-teal-700">
                        View UAE Profile
                      </a>
                </div>
            </div>
        )
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
            <ImpactStories />
            <QuickLinksSection />
        </div>
    );
}
