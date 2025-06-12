// src/data/countryProfileData.ts

export interface ExternalLink {
  title: string;
  url: string;
}

export interface Pillar1Data {
  targetText: string;
  totalSchools: string | number | null;
  greenSchoolsCount: string | number | null;
  // Information from 1c (initial GEP joining info)
  accreditationSchemeExists: 'Yes' | 'No' | 'Not available or data not reviewed' | null;
  accreditationSchemeDetails?: string; // Combined from the three sub-questions in 1c for UAE
  awardExists: 'Yes' | 'No' | 'Not available or data not reviewed' | null;
  networkExists: 'Yes' | 'No' | 'Not available or data not reviewed' | null;
  networkDetails?: string; // From "initiatives country is interested to develop" or notes.
  // Report Progress
  countryResponse: string | null; // From 1d
}

export interface Pillar2Data {
  targetText: string;
  isClimateEducationInCurriculum: 'Yes' | 'No' | 'Not available or data not reviewed' | null; // From 2a GEMR review
  mecceGemrLink: string | null; // From 2b
  // Information from 2c (initial GEP joining info)
  curriculumIncludesSustainableDevelopment: 'Yes' | 'No' | null;
  curriculumIncludesClimateChange: 'Yes' | 'No' | null;
  curriculumIncludesBiodiversity: 'Yes' | 'No' | null;
  curriculumAreasDetails: string | null; // Description of areas
  planningCurriculumReform: 'Yes' | 'No' | null;
  reformPlansDetails: string | null; // Details if planning reform
  interestedInCurriculumReview: 'Yes' | 'No' | null; // And plans if yes
  // Report Progress
  countryResponse: string | null; // From 2d
}

export interface Pillar3Data {
  targetText: string;
  isEducationInNDC: 'Yes' | 'No' | 'Not available or data not reviewed' | null; // From 3a Earthday.org
  ndcLink: string | null; // From 3b
  earthdayNdcAnalysisLink: string | null; // From 3b
  // ESP info (IIEP) - From 3c, 3d
  isClimateEducationInESP: 'Yes' | 'No' | 'Not available or data not reviewed' | null;
  espBestPractices: string | null;
  // Information from 3e (initial GEP joining info - policies)
  legislationExists: 'Yes' | 'No' | null;
  legislationDetails: string | null;
  policyOrActionPlanExists: 'Yes' | 'No' | null;
  policyOrActionPlanDetails: string | null;
  // Report Progress on policies - From 3f (first one)
  countryResponsePolicies: string | null;
  // Information from 3g (initial GEP joining info - teacher training)
  teacherTrainingSustainableDevelopment: 'Yes' | 'No' | null;
  teacherTrainingClimateChange: 'Yes' | 'No' | null;
  teacherTrainingBiodiversity: 'Yes' | 'No' | null;
  planningTeacherTrainingIncorporate: 'Yes' | 'No' | null;
  teacherTrainingDetails: string | null;
  // Report Progress on teachers - From 3f (second one, labeled 3f again in UAE doc, 3g in context?)
  // Context VII.c: Below the YES/NO for NDC... text response. (This maps to countryResponsePolicies)
  // Context VII.e: Below the YES/NO for ESP... text response. (This maps to espBestPractices)
  // The Word docs have "3f. Report Progress on pillar (policies)" and another "3f. Report Progress on pillar (teachers)" for UAE.
  // Let's add countryResponseTeachers based on the Word doc structure.
  countryResponseTeachers: string | null;
}

export interface Pillar4Data {
  targetText: string;
  citiesWithLifelongLearningProgramsCount: string | number | null; // From 4a
  citiesList: string | null; // From 4b
  totalCities: string | number | null; // From 4c
  unescoLearningCitiesLink: string | null; // From 4d
  // Information from 4e (initial GEP joining info)
  nationalLocalPoliciesExist: 'Yes' | 'No' | null;
  policiesDetails: string | null;
  // Report Progress
  countryResponse: string | null; // From 4f
}

export interface CountryProfile {
  id: string; // e.g., 'uae', 'albania'
  name: string;
  isGEPMember: boolean;
  // Data from Word form, Section numbers for clarity
  pillar1: Pillar1Data;
  pillar2: Pillar2Data;
  pillar3: Pillar3Data;
  pillar4: Pillar4Data;
  gepMemberOrganizations: string[]; // From GEP Secretariat list
  impactStoriesBestPractices: string | null; // From 5a
  // additionalExternalLinks could be used if there are general links not tied to stories.
  // For now, impactStoriesBestPractices will hold text which might include links,
  // or we can parse links if specified. The context just says "include external links".
}

// const uaeData: CountryProfile = {
//   id: 'uae',
//   name: 'United Arab Emirates', // [cite: 1]
//   isGEPMember: true, // [cite: 1]
//   pillar1: {
//     targetText: "By 2030 50% of schools in every country greened", // [cite: 9]
//     totalSchools: "[Please FILL IN YOUR ANSWER]", // [cite: 9]
//     greenSchoolsCount: 139, // [cite: 9]
//     accreditationSchemeExists: 'Yes', // [cite: 9]
//     accreditationSchemeDetails: "The Sustainable Schools Accreditation, The Sustainable Campus Accreditation, The Eco-School Model, The Eco-Campus (to be implemented in 2023).", // [cite: 9]
//     awardExists: 'Yes', // [cite: 9]
//     networkExists: 'No', // [cite: 9]
//     networkDetails: "The Sustainable schools Initiative is an internationally recognized environmental initiative... https://sustainableschools.ead.ae/SSI/", // [cite: 9]
//     countryResponse: null, // Placeholder for 1d
//   },
//   pillar2: {
//     targetText: "90% of countries green national curriculum", // [cite: 9]
//     isClimateEducationInCurriculum: 'Not available or data not reviewed', // [cite: 9]
//     mecceGemrLink: 'https://education-profiles.org/northern-africa-and-western-asia/united-arab-emirates/~climate-change-communication-and-education', // [cite: 9]
//     curriculumIncludesSustainableDevelopment: 'Yes', // [cite: 9]
//     curriculumIncludesClimateChange: 'Yes', // [cite: 9]
//     curriculumIncludesBiodiversity: 'Yes', // [cite: 9]
//     curriculumAreasDetails: "We have developed a cross-curriculum framework which tackles 23 different curriculums with 4 different topics: Energy Biodiversity and Biosphere Climate Change and consumption Innovation and sustainability", // [cite: 9]
//     planningCurriculumReform: 'Yes', // [cite: 9]
//     interestedInCurriculumReview: 'Yes', // [cite: 9]
//     reformPlansDetails: "implement the cross-curriculum framework in all UAE schools Starting September 2023.", // [cite: 9]
//     countryResponse: null, // Placeholder for 2d
//   },
//   pillar3: {
//     targetText: "50% of the countries have education in their Nationally Determined Contributions(NDCs) to UNFCCC.", // [cite: 9]
//     isEducationInNDC: 'Yes', // [cite: 9]
//     ndcLink: 'https://unfccc.int/sites/default/files/2024-11/UAE-NDC3.0.pdf', // [cite: 9]
//     earthdayNdcAnalysisLink: 'https://www.earthday.org/ndc-tracker/#category2', // [cite: 9]
//     isClimateEducationInESP: 'Yes', // Placeholder from form [cite: 9]
//     espBestPractices: 'This will be a TEXT space developed by IIEP to include best practices taken from Education Sector Plans', // Placeholder from form [cite: 9]
//     legislationExists: 'No', // [cite: 9]
//     legislationDetails: "As part of the NDC, we are aiming to put Green Education at the core of UAE’s NDC.", // [cite: 9]
//     policyOrActionPlanExists: 'Yes', // [cite: 9]
//     policyOrActionPlanDetails: "In 2009 the UAE launched the Sustainable Schools Initiative... Since then, the Ministry of Education has designed and developed a framework and roadmap to achieve all the Green Pillars KPI by the end of the COP 28.", // [cite: 9]
//     countryResponsePolicies: null, // Placeholder for 3f (policies)
//     teacherTrainingSustainableDevelopment: 'Yes', // [cite: 9]
//     teacherTrainingClimateChange: 'Yes', // [cite: 9]
//     teacherTrainingBiodiversity: 'Yes', // [cite: 9]
//     planningTeacherTrainingIncorporate: 'Yes', // [cite: 9]
//     teacherTrainingDetails: "With UNICEF, we are developing a training program for all UAE Educators. And school leaders in private and public schools. The training will be designed in alignment with the cross curriculum and extra curriculum framework, based on the 4 topics. Energy Biodiversity and Biosphere Climate Change and consumption Innovation and sustainability", // [cite: 9]
//     countryResponseTeachers: null, // Placeholder for 3f (teachers)
//   },
//   pillar4: {
//     targetText: "20% of cities and communities in each country have at least one climate change lifelong learning programme", // [cite: 9]
//     citiesWithLifelongLearningProgramsCount: 1, // [cite: 9]
//     citiesList: 'Ras al khaimah', // [cite: 9]
//     totalCities: "[Please FILL IN YOUR ANSWER]", // [cite: 9]
//     unescoLearningCitiesLink: 'Ras Al Khaimah', // Note: The doc just says "Ras Al Khaimah" for the link, which is not a URL. Assuming it refers to a specific profile page if available, or the general GNLC map filtered. For now, using the text. The context point refers to "Link to UNESCO Global Network of Learning Cities".
//     nationalLocalPoliciesExist: 'No', // [cite: 9]
//     policiesDetails: "We are developing policies and guidelines by building different abstract community engagement model for all Emirates.", // [cite: 9]
//     countryResponse: null, // Placeholder for 4f
//   },
//   gepMemberOrganizations: [ // [cite: 11]
//     "NCS", "Shining Star International School", "ICS School Mushrif", "Higher Colleges of Technology",
//     "PraeEminere Advisory", "baseet", "UNICEF UAE", "Ajms Global", "ASCS", "Dubai Cares", "EAD",
//     "Eduvate", "EmiratesGBC", "PwC", "Greeneration", "American Community School of Abu Dhabi",
//     "American School of Dubai", "Arbor School", "Citizens School", "Clarion School Dubai",
//     "Gems Cambridge International Private School", "PLANETGREENERS", "Pristine Private School",
//     "Regent International School", "Sustainability Tribe", "Emirates Schools Establishment",
//     "Gulf Medical University", "GEMS Founders School, Masdar City - Abu Dhabi",
//     "Gems Wellington International School", "DP World", "Kings' School Al Barsha", "Terrain Floorings",
//     "Dar Al Marefa", "City University Ajman", "GEMS Founders Al Mizhar", // "Higher Colleges of Technology" is repeated
//     "Ajman University", "Al Ain University", // "Alain university" is repeated with different casing
//     "ASU", "ESE", "GEMS Education", // "NCS", "Shining star international school" are repeated
//     "Tadweera for Green Education"
//   ].filter((value, index, self) => self.indexOf(value) === index), // Remove duplicates for cleaner dropdown
//   impactStoriesBestPractices: "[Please FILL IN YOUR ANSWER]", // [cite: 9]
// };

// const albaniaData: CountryProfile = {
//   id: 'albania',
//   name: 'Albania', // [cite: 12]
//   isGEPMember: true, // [cite: 12]
//   pillar1: {
//     targetText: "By 2030 50% of schools in every country greened", // [cite: 20]
//     totalSchools: "[Please FILL IN YOUR ANSWER]", // [cite: 20]
//     greenSchoolsCount: 0, // [cite: 20]
//     accreditationSchemeExists: 'No', // [cite: 20]
//     awardExists: 'No', // [cite: 20]
//     networkExists: 'No', // [cite: 20]
//     networkDetails: "Initiatives the country is interested to develop: Greening school accreditation scheme: No, Award for outstanding greening education interventions: No, National green school network: No", // [cite: 20]
//     countryResponse: null, // Placeholder for 1d
//   },
//   pillar2: {
//     targetText: "90% of countries green national curriculum", // [cite: 20]
//     isClimateEducationInCurriculum: 'Not available or data not reviewed', // [cite: 20]
//     mecceGemrLink: 'https://education-profiles.org/europe-and-northern-america/albania/~climate-change-communication-and-education', // [cite: 20]
//     curriculumIncludesSustainableDevelopment: 'Yes', // [cite: 20]
//     curriculumIncludesClimateChange: 'Yes', // [cite: 20]
//     curriculumIncludesBiodiversity: 'Yes', // [cite: 20]
//     curriculumAreasDetails: `Knowledges related to the environment and sustainable development such as biodiversity and its conservation, climate change, the environment and its protection, natural resources and their sustainable use, the role of technology in sustainable development, etc. , such as knowledge related to healthy nutrition, health care, etc., are included in learning areas and subjects such as ""Society and Environment"", ""Natural Sciences"", ""Technology and ICT"", ""Languages and Communication "", ""Physical education, sports and health"" etc, in all levels of pre-university education (primary education, lower and upper secondary education). Also, placing a special focus on climate change, the module ""Man and climate change"" has been included as part of the optional curriculum in upper secondary education... Environment and Sustainable Development are defined as cross-curricular themes conveying the obligation for teachers and authors of texts to deal with these topics and issues related to them through various activities.`, // [cite: 20]
//     planningCurriculumReform: 'No', // [cite: 20]
//     interestedInCurriculumReview: 'No', // [cite: 20]
//     reformPlansDetails: null,
//     countryResponse: null, // Placeholder for 2d
//   },
//   pillar3: {
//     targetText: "50% of the countries have education in their Nationally Determined Contributions(NDCs) to UNFCCC.", // [cite: 20]
//     isEducationInNDC: 'No', // [cite: 20]
//     ndcLink: 'https://unfccc.int/sites/default/files/2022-08/Albania%20Revised%20NDC.pdf', // [cite: 20]
//     earthdayNdcAnalysisLink: 'https://www.earthday.org/ndc-tracker/#category2', // [cite: 20]
//     isClimateEducationInESP: 'Not available or data not reviewed', // Placeholder from form [cite: 20]
//     espBestPractices: 'This will be a TEXT space developed by IIEP to include best practices taken from Education Sector Plans', // Placeholder from form [cite: 20]
//     legislationExists: 'No', // [cite: 20]
//     legislationDetails: `The law on the pre-university education system in the Republic of Albania no. 69/2012 as amended defines that one of the goals of pre-university education is for students to develop responsibility towards themselves, towards others, towards society and towards the environment... The Curricular Framework of Pre-university Education as a curricular policy document defines the key competencies for lifelong learning... As a specific framework for education for sustainable development, ""Learning Standards - Education for Sustainable Development"" (2018) define a system of requirements... These standards guide schools to fulfill activities on sustainable development issues through an integrated approach.`, // [cite: 20]
//     policyOrActionPlanExists: 'No', // [cite: 20]
//     policyOrActionPlanDetails: null,
//     countryResponsePolicies: null, // Placeholder for 3f (policies)
//     teacherTrainingSustainableDevelopment: 'Yes', // [cite: 20]
//     teacherTrainingClimateChange: 'Yes', // [cite: 20]
//     teacherTrainingBiodiversity: 'Yes', // [cite: 20]
//     planningTeacherTrainingIncorporate: 'Yes', // [cite: 20]
//     teacherTrainingDetails: `Regarding the professional development of teachers in pre-university education, the professional development and teacher training programs accredited by the Accreditation Commission of Training Programs include topics and modules on such issues as environmental education, climate change, sustainable development, development of abilities to protect and mitigate the consequences of natural disasters etc. Such accredited programs are offered by the Quality Assurance Agency for Pre-university Education (QAPE) as well as by the institutions and organizations working in the field of environment and sustainable development. These topics are part of the accredited training programs for the next three years that are developed by various institutions and agencies.`, // [cite: 20]
//     countryResponseTeachers: null, // Placeholder for 3f (teachers)
//   },
//   pillar4: {
//     targetText: "20% of cities and communities in each country have at least one climate change lifelong learning programme", // [cite: 20]
//     citiesWithLifelongLearningProgramsCount: 'Not available or data not reviewed', // [cite: 20]
//     citiesList: 'Not available or data not reviewed', // [cite: 20]
//     totalCities: "[Please FILL IN YOUR ANSWER]", // [cite: 20]
//     unescoLearningCitiesLink: 'https://www.uil.unesco.org/en/learning-cities/map?query=&hub=38', // [cite: 20]
//     nationalLocalPoliciesExist: 'Yes', // [cite: 20]
//     policiesDetails: `At the national level, the National Strategy for Development and Integration 2020-2030 is the main strategic document... At the local level, municipalities have developed policies and strategies related to the education of communities and the engagement of young people for various issues of the environment and its sustainable development.`, // [cite: 20]
//     countryResponse: null, // Placeholder for 4f
//   },
//   gepMemberOrganizations: [], // [cite: 21] (The doc lists "0", implying none or that the list is not yet provided to the GEP Sec.)
//   impactStoriesBestPractices: "[Please FILL IN YOUR ANSWER]", // [cite: 20]
// };
// ... (keep existing interfaces)

export interface CountryProfile {
  id: string;
  name: string;
  isGEPMember: boolean;
  // NEW optional fields for UX improvements
  flagEmoji?: string; // Simple way to add a flag
  lastUpdated?: string; // e.g., "June 3, 2025"

  // Existing pillar data, GEP organizations, impact stories
  pillar1: Pillar1Data;
  pillar2: Pillar2Data;
  pillar3: Pillar3Data;
  pillar4: Pillar4Data;
  gepMemberOrganizations: string[];
  impactStoriesBestPractices: string | null;
}

// --- Update uaeData and albaniaData with these new optional fields ---
const uaeData: CountryProfile = {
  id: 'uae',
  name: 'United Arab Emirates', // [cite: 1]
  isGEPMember: true, // [cite: 1]
  flagEmoji: '🇦🇪', // Example
  lastUpdated: 'June 1, 2025', // Example
  pillar1: {
    targetText: "By 2030 50% of schools in every country greened", // [cite: 9]
    totalSchools: "[Please FILL IN YOUR ANSWER]", // [cite: 9]
    greenSchoolsCount: 139, // [cite: 9]
    // ... rest of UAE pillar 1 data
// ... copy existing data and add flagEmoji and lastUpdated to albaniaData as well
    accreditationSchemeExists: 'Yes', // [cite: 9]
    accreditationSchemeDetails: "The Sustainable Schools Accreditation, The Sustainable Campus Accreditation, The Eco-School Model, The Eco-Campus (to be implemented in 2023).", // [cite: 9]
    awardExists: 'Yes', // [cite: 9]
    networkExists: 'No', // [cite: 9]
    networkDetails: "The Sustainable schools Initiative is an internationally recognized environmental initiative... https://sustainableschools.ead.ae/SSI/", // [cite: 9]
    countryResponse: null,
  },
  pillar2: {
    targetText: "90% of countries green national curriculum", // [cite: 9]
    isClimateEducationInCurriculum: 'Not available or data not reviewed', // [cite: 9]
    mecceGemrLink: 'https://education-profiles.org/northern-africa-and-western-asia/united-arab-emirates/~climate-change-communication-and-education', // [cite: 9]
    curriculumIncludesSustainableDevelopment: 'Yes', // [cite: 9]
    curriculumIncludesClimateChange: 'Yes', // [cite: 9]
    curriculumIncludesBiodiversity: 'Yes', // [cite: 9]
    curriculumAreasDetails: "We have developed a cross-curriculum framework which tackles 23 different curriculums with 4 different topics: Energy Biodiversity and Biosphere Climate Change and consumption Innovation and sustainability", // [cite: 9]
    planningCurriculumReform: 'Yes', // [cite: 9]
    interestedInCurriculumReview: 'Yes', // [cite: 9]
    reformPlansDetails: "implement the cross-curriculum framework in all UAE schools Starting September 2023.", // [cite: 9]
    countryResponse: null,
  },
  pillar3: {
    targetText: "50% of the countries have education in their Nationally Determined Contributions(NDCs) to UNFCCC.", // [cite: 9]
    isEducationInNDC: 'Yes', // [cite: 9]
    ndcLink: 'https://unfccc.int/sites/default/files/2024-11/UAE-NDC3.0.pdf', // [cite: 9]
    earthdayNdcAnalysisLink: 'https://www.earthday.org/ndc-tracker/#category2', // [cite: 9]
    isClimateEducationInESP: 'Yes', // [cite: 9]
    espBestPractices: 'This will be a TEXT space developed by IIEP to include best practices taken from Education Sector Plans', // [cite: 9]
    legislationExists: 'No', // [cite: 9]
    legislationDetails: "As part of the NDC, we are aiming to put Green Education at the core of UAE’s NDC.", // [cite: 9]
    policyOrActionPlanExists: 'Yes', // [cite: 9]
    policyOrActionPlanDetails: "In 2009 the UAE launched the Sustainable Schools Initiative... Since then, the Ministry of Education has designed and developed a framework and roadmap to achieve all the Green Pillars KPI by the end of the COP 28.", // [cite: 9]
    countryResponsePolicies: null,
    teacherTrainingSustainableDevelopment: 'Yes', // [cite: 9]
    teacherTrainingClimateChange: 'Yes', // [cite: 9]
    teacherTrainingBiodiversity: 'Yes', // [cite: 9]
    planningTeacherTrainingIncorporate: 'Yes', // [cite: 9]
    teacherTrainingDetails: "With UNICEF, we are developing a training program for all UAE Educators. And school leaders in private and public schools. The training will be designed in alignment with the cross curriculum and extra curriculum framework, based on the 4 topics. Energy Biodiversity and Biosphere Climate Change and consumption Innovation and sustainability", // [cite: 9]
    countryResponseTeachers: null,
  },
  pillar4: {
    targetText: "20% of cities and communities in each country have at least one climate change lifelong learning programme", // [cite: 9]
    citiesWithLifelongLearningProgramsCount: 1, // [cite: 9]
    citiesList: 'Ras al khaimah', // [cite: 9]
    totalCities: "[Please FILL IN YOUR ANSWER]", // [cite: 9]
    unescoLearningCitiesLink: 'Ras Al Khaimah',
    nationalLocalPoliciesExist: 'No', // [cite: 9]
    policiesDetails: "We are developing policies and guidelines by building different abstract community engagement model for all Emirates.", // [cite: 9]
    countryResponse: null,
  },
  gepMemberOrganizations: [ // [cite: 11]
    "NCS", "Shining Star International School", "ICS School Mushrif", "Higher Colleges of Technology",
    "PraeEminere Advisory", "baseet", "UNICEF UAE", "Ajms Global", "ASCS", "Dubai Cares", "EAD",
    "Eduvate", "EmiratesGBC", "PwC", "Greeneration", "American Community School of Abu Dhabi",
    "American School of Dubai", "Arbor School", "Citizens School", "Clarion School Dubai",
    "Gems Cambridge International Private School", "PLANETGREENERS", "Pristine Private School",
    "Regent International School", "Sustainability Tribe", "Emirates Schools Establishment",
    "Gulf Medical University", "GEMS Founders School, Masdar City - Abu Dhabi",
    "Gems Wellington International School", "DP World", "Kings' School Al Barsha", "Terrain Floorings",
    "Dar Al Marefa", "City University Ajman", "GEMS Founders Al Mizhar", 
    "Ajman University", "Al Ain University", 
    "ASU", "ESE", "GEMS Education", 
    "Tadweera for Green Education"
  ].filter((value, index, self) => self.indexOf(value) === index),
  impactStoriesBestPractices: "[Please FILL IN YOUR ANSWER]", // [cite: 9]
};

const albaniaData: CountryProfile = {
  id: 'albania',
  name: 'Albania', // [cite: 12]
  isGEPMember: true, // [cite: 12]
  flagEmoji: '🇦🇱', // Example
  lastUpdated: 'May 28, 2025', // Example
  pillar1: {
    targetText: "By 2030 50% of schools in every country greened", // [cite: 20]
    totalSchools: "[Please FILL IN YOUR ANSWER]", // [cite: 20]
    greenSchoolsCount: 0, // [cite: 20]
    accreditationSchemeExists: 'No', // [cite: 20]
    awardExists: 'No', // [cite: 20]
    networkExists: 'No', // [cite: 20]
    networkDetails: "Initiatives the country is interested to develop: Greening school accreditation scheme: No, Award for outstanding greening education interventions: No, National green school network: No", // [cite: 20]
    countryResponse: null,
  },
  pillar2: {
    targetText: "90% of countries green national curriculum", // [cite: 20]
    isClimateEducationInCurriculum: 'Not available or data not reviewed', // [cite: 20]
    mecceGemrLink: 'https://education-profiles.org/europe-and-northern-america/albania/~climate-change-communication-and-education', // [cite: 20]
    curriculumIncludesSustainableDevelopment: 'Yes', // [cite: 20]
    curriculumIncludesClimateChange: 'Yes', // [cite: 20]
    curriculumIncludesBiodiversity: 'Yes', // [cite: 20]
    curriculumAreasDetails: `Knowledges related to the environment and sustainable development such as biodiversity and its conservation, climate change, the environment and its protection, natural resources and their sustainable use, the role of technology in sustainable development, etc. , such as knowledge related to healthy nutrition, health care, etc., are included in learning areas and subjects such as ""Society and Environment"", ""Natural Sciences"", ""Technology and ICT"", ""Languages and Communication "", ""Physical education, sports and health"" etc, in all levels of pre-university education (primary education, lower and upper secondary education). Also, placing a special focus on climate change, the module ""Man and climate change"" has been included as part of the optional curriculum in upper secondary education... Environment and Sustainable Development are defined as cross-curricular themes conveying the obligation for teachers and authors of texts to deal with these topics and issues related to them through various activities.`, // [cite: 20]
    planningCurriculumReform: 'No', // [cite: 20]
    interestedInCurriculumReview: 'No', // [cite: 20]
    reformPlansDetails: null,
    countryResponse: null,
  },
  pillar3: {
    targetText: "50% of the countries have education in their Nationally Determined Contributions(NDCs) to UNFCCC.", // [cite: 20]
    isEducationInNDC: 'No', // [cite: 20]
    ndcLink: 'https://unfccc.int/sites/default/files/2022-08/Albania%20Revised%20NDC.pdf', // [cite: 20]
    earthdayNdcAnalysisLink: 'https://www.earthday.org/ndc-tracker/#category2', // [cite: 20]
    isClimateEducationInESP: 'No', // [cite: 20]
    espBestPractices: 'This will be a TEXT space developed by IIEP to include best practices taken from Education Sector Plans', // [cite: 20]
    legislationExists: 'No', // [cite: 20]
    legislationDetails: `The law on the pre-university education system in the Republic of Albania no. 69/2012 as amended defines that one of the goals of pre-university education is for students to develop responsibility towards themselves, towards others, towards society and towards the environment... The Curricular Framework of Pre-university Education as a curricular policy document defines the key competencies for lifelong learning... As a specific framework for education for sustainable development, ""Learning Standards - Education for Sustainable Development"" (2018) define a system of requirements... These standards guide schools to fulfill activities on sustainable development issues through an integrated approach.`, // [cite: 20]
    policyOrActionPlanExists: 'No', // [cite: 20]
    policyOrActionPlanDetails: null,
    countryResponsePolicies: null,
    teacherTrainingSustainableDevelopment: 'Yes', // [cite: 20]
    teacherTrainingClimateChange: 'Yes', // [cite: 20]
    teacherTrainingBiodiversity: 'Yes', // [cite: 20]
    planningTeacherTrainingIncorporate: 'Yes', // [cite: 20]
    teacherTrainingDetails: `Regarding the professional development of teachers in pre-university education, the professional development and teacher training programs accredited by the Accreditation Commission of Training Programs include topics and modules on such issues as environmental education, climate change, sustainable development, development of abilities to protect and mitigate the consequences of natural disasters etc. Such accredited programs are offered by the Quality Assurance Agency for Pre-university Education (QAPE) as well as by the institutions and organizations working in the field of environment and sustainable development. These topics are part of the accredited training programs for the next three years that are developed by various institutions and agencies.`, // [cite: 20]
    countryResponseTeachers: null,
  },
  pillar4: {
    targetText: "20% of cities and communities in each country have at least one climate change lifelong learning programme", // [cite: 20]
    citiesWithLifelongLearningProgramsCount: 'Not available or data not reviewed', // [cite: 20]
    citiesList: 'Not available or data not reviewed', // [cite: 20]
    totalCities: "[Please FILL IN YOUR ANSWER]", // [cite: 20]
    unescoLearningCitiesLink: 'https://www.uil.unesco.org/en/learning-cities/map?query=&hub=38', // [cite: 20]
    nationalLocalPoliciesExist: 'Yes', // [cite: 20]
    policiesDetails: `At the national level, the National Strategy for Development and Integration 2020-2030 is the main strategic document... At the local level, municipalities have developed policies and strategies related to the education of communities and the engagement of young people for various issues of the environment and its sustainable development.`, // [cite: 20]
    countryResponse: null,
  },
  gepMemberOrganizations: [], // [cite: 21]
  impactStoriesBestPractices: "[Please FILL IN YOUR ANSWER]", // [cite: 20]
};


export const countryProfileDataStore: Record<string, CountryProfile> = {
  uae: uaeData,
  albania: albaniaData,
};

// ... (keep getCountryProfileById)
export const getCountryProfileById = (id: string): CountryProfile | null => {
  return countryProfileDataStore[id.toLowerCase()] || null;
};

// export const countryProfileDataStore: Record<string, CountryProfile> = {
//   uae: uaeData,
//   albania: albaniaData,
//   // ... other countries will be added here
// };

// // Helper function to get country data, could be expanded for API calls later
// export const getCountryProfileById = (id: string): CountryProfile | null => {
//   return countryProfileDataStore[id.toLowerCase()] || null;
// };