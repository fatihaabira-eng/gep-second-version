import React, { useState, useEffect } from "react";
import { ArrowRight, BookOpen, Building, ExternalLink, Info, Link, MessageSquare, Search, UserPlus, Users } from "lucide-react";
import HeroSection from '../components/HeroSection';
import GEPIntroSection from '../components/GEPIntroSection';
import LoadingSpinner from "./LoadingSpinner";
import WorldMap from "./../components/WorldMap"; // Assuming this is your UNESCO map component
import StoryCard from "./../components/StoryCard"; // Assuming you have a StoryCard component
import { School } from 'lucide-react';
import { useNavigate } from "react-router-dom";
// At the top of your file with other imports
import pillar1_image from '../imgs/pillar1.png';
import pillar2_image from '../imgs/pillar2.png';
import pillar3_image from '../imgs/pillar3.png';
import pillar4_image from '../imgs/pillar4.png';
import { QuickLinksSection } from "@/components/QuickLinks";

/**
 * PillarCard Component
 * Displays progress for each of the four pillars with a visual bar graph.
 * @param {object} props - Component props.
 * @param {string} props.title - The title of the pillar.
 * @param {number} props.current - The current value for the progress bar.
 * @param {number} props.total - The total value for the progress bar.
 * @param {string} props.description - Text description of the data.
 * @param {string} props.link - The URL for the "Learn More" button.
 * @param {string} props.unit - The unit for the displayed values (e.g., "schools", "countries").
 */

const PillarCard = ({ pillar }) => {
  const percentage = pillar.total > 0 ? (pillar.current / pillar.total) * 100 : 0;

  return (
    // Increased min-height
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-[340px]">
      {/* Increased margin-bottom */}
      <div className="flex items-start mb-5">
        {/* Replacing icon with image */}
        <img
          src={pillar.customImage}
          alt={pillar.name}
          className="w-14 h-14 object-contain" // Slightly larger image
        />

        {/* Added margin-left */}
        <h3 className="text-xl font-bold text-gray-800 ml-3">
          {pillar.name}
        </h3>
      </div>
      
      {/* Increased margin-bottom */}
      <div className="mb-6">
        {/* Slightly thicker progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-5 my-3">
          {/* Matching thickness */}
          <div
            className="bg-[#16A34A] h-3 rounded-full"
            style={{ width: `${percentage}%` }}
            title={`${percentage.toFixed(1)}%`}
          ></div>
        </div>
        <p className="text-gray-800 text-sm font-medium">
          <span className="font-bold">{pillar.current.toLocaleString()}</span> / {pillar.total.toLocaleString()} {pillar.unit}
        </p>
        {/* Increased margin-top */}
        <p className="text-gray-500 text-xs mt-2">
          Target: {pillar.target}
        </p>
      </div>

      <a
        href={pillar.link}
        // Increased padding-y
        className="mt-auto block text-center bg-[#16A34A] text-white px-6 py-3 rounded-lg text-md font-semibold hover:bg-[#15803d] transition-colors duration-300 shadow-sm"
      >
        Learn More
      </a>
    </div>
  );
};

const GlobalDashboard = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [suggestions, setSuggestions] = useState<{ name: string; id: string }[]>([]);
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();
    const [isSearchFocused, setIsSearchFocused] = useState(false);

    const countriesList = [
    { name: "Morocco", id: "morocco", region: "North Africa" },
    { name: "United Arabe Emarates", id: "uae", region: "Middle east"  },
    { name: "Egypt", id: "egypt" , region: "North Africa" },
    { name: "Kenya", id: "kenya" , region: " Africa" },
    { name: "Albania", id: "al" , region: " Southest Europe" },
    // ... add more countries
  ];
  useEffect(() => {
    if (searchTerm.length > 0) {
      setSearchResults(
        countriesList.filter(country =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.region.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        if (value.trim() === "") {
          setSuggestions(countriesList); // Show all countries if search is empty
          return;
        }
    
        const filtered = countriesList.filter(country =>
            country.name.toLowerCase().includes(value.toLowerCase()) ||
            country.region.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filtered);
    };
  const handleFocus = () => {
        setIsSearchFocused(true);
        // Populate with all countries if search is empty and suggestions aren't already populated
        if (searchTerm.trim() === '' && suggestions.length === 0) {
            setSuggestions(countriesList);
        }
    }
  const handleCountryClick = (countryId : string) => {
    navigate(`/country/${countryId}`);
    console.log(`Navigating to country profile for: ${countryId}`);
    
    setSearchTerm(''); // n
  };
    // Data for the four pillars as specified in the PowerPoint
    const pillarData = [
        {
          id: 'pillar1',
          name: 'Pillar 1: Greening Schools',
          vision: 'From early childhood through adult education, work to ensure that all schools achieve green school accreditation, including teacher training and higher education institutions.',
          target: 'By 2030, 50% of schools in every country greened.',
          current: 80573,
          total: 5500000,
          unit: 'green schools',
          totalUnit: 'total schools',
          definition: 'A “green school” is defined as a learning institution that takes a whole-of-institution approach to Education for Sustainable Development (ESD), in particular by addressing climate change through its teaching, facilities and operations, school governance and community partnerships. Green schools aim to promote knowledge and skills for the social, economic, cultural, and environmental aspects of sustainable development.',
          guidanceLink: 'https://unesdoc.unesco.org/ark:/48223/pf0000390028',
          guidanceBlurb: 'The Green school quality standard aims to harmonize accreditation criteria for schools committed to sustainability through a whole institution approach to ESD. It targets accreditation scheme organizers, including civil society-led networks, international associations and governments, providing recognition for schools\' climate education efforts. The standard also aims to support education authorities and policymakers. To meet the standard, accreditation schemes must incorporate at least one-third of suggested activities in governance, facilities, teaching, and community engagement.',
          workingGroupUpdate: 'GEP Working Group 1 is actively developing resources and strategies to support the greening of schools globally, focusing on accreditation criteria and best practices.',
          link: "/pillar/green-schools",
          impactStories: [
            { title: 'Eco-Schools Lesson Plans', url: 'https://www.ecoschools.global/lesson-plans-for-teachers' },
            { title: 'Climate Change Education Research', url: 'https://www.mecce.ca/research' }
          ],
          customImage: pillar1_image
        },
        {
          id: 'pillar2',
          name: 'Pillar 2: Greening every curriculum',
          vision: 'Embrace a life-long learning approach that integrates climate education into school curricula, technical and vocational training, workplace skills development, teaching materials, pedagogy, and assessment.',
          target: 'By 2030, 90% of countries green their national curriculum.',
          current: 72,
          total: 195,
          unit: 'countries with green curriculum',
          totalUnit: 'total countries',
          definition: 'Greening every curriculum means integrating climate mitigation and adaptation in teaching and learning from pre-primary, primary, secondary and tertiary school levels as well as in teacher training. It emphasizes the interconnections between the environment, economy, and society, engaging students across cognitive, socio-emotional, and behavioral domains to inspire action for sustainability.',
          guidanceLink: 'https://unesdoc.unesco.org/ark:/48223/pf0000390022',
          guidanceBlurb: 'This Guidance responds to the calls from young people for a holistic approach to climate change and sustainability in the curriculum. It outlines a common language on how quality climate change and sustainability can be reflected in the curriculum by setting expected learning outcomes per age group (from 5-year olds and up to 18+ age group, including a lifelong learning approach). The Guidance sets 4 key principles of greening education: 1. Action-oriented 2. Justice-promoting 3. Quality content 4. Comprehensive and relevant',
          workingGroupUpdate: 'GEP Working Group 2 is focused on developing comprehensive guidance for integrating climate change and sustainability into national curricula, ensuring it is action-oriented and relevant for all age groups.',
           link: "/pillar/green-curriculum",
          impactStories: [
            { title: 'Eco-Schools Lesson Plans', url: 'https://www.ecoschools.global/lesson-plans-for-teachers' },
            { title: 'Climate Change Education Research', url: 'https://www.mecce.ca/research' }
          ],
          customImage: pillar2_image
        },
        {
          id: 'pillar3',
          name: 'Pillar 3: Greening teacher training',
          vision: 'Support all GEP member states in establishing professional teaching standards that include climate change by 2030.',
          target: 'By 2030, 50% of the countries have education in their Nationally Determined Contributions (NDCs) to UNFCCC.',
          current: 72,
          total: 195,
          unit: 'countries with education in NDCs',
          totalUnit: 'total countries',
          definition: 'Greening teacher training and education systems\' capacities involves empowering educators with the knowledge, skills, and pedagogical approaches necessary to effectively teach climate change and sustainability. This includes integrating climate education into teacher training programs, professional development, and policy frameworks.',
          guidanceLink: '#', // Placeholder, as Teacher Policy Toolkit is being developed
          guidanceBlurb: 'The Teacher Capacity Policy Tool for Climate Change and Education is being developed and aims to be launched at COP30.',
          workingGroupUpdate: 'GEP Working Group 3 is developing the Teacher Capacity Policy Tool for Climate Change and Education, aiming to launch it at COP30. This group is focused on supporting member states in establishing professional teaching standards.',
           link: "/pillar/teacher-capacity",
          impactStories: [
            { title: 'Teacher Training in Egypt', url: 'http://www.wesc-eg.com/teacher-training.html' }
          ],
          customImage: pillar3_image
        },
        {
          id: 'pillar4',
          name: 'Pillar 4: Greening communities',
          vision: 'Empowering communities to address climate change through lifelong learning programs and fostering local-level action for sustainable development.',
          target: 'By 2030, 20% of cities and communities in each country have at least one climate change lifelong learning programme.',
          current: 1500,
          total: 10000,
          unit: 'cities with lifelong learning programmes',
          totalUnit: 'total cities',
          definition: 'Greening communities refers to initiatives that foster climate change education and sustainable development at the local level, engaging citizens through lifelong learning programs, community projects, and partnerships to build resilient and environmentally conscious urban and rural areas.',
          guidanceLink: '#', // Placeholder, as Greening Communities guidance is being developed
          guidanceBlurb: 'The Greening Communities guidance is being developed.',
          workingGroupUpdate: 'GEP Working Group 4 is focused on developing guidance for greening communities and is actively working on strategies to implement climate change lifelong learning programs at the local level.',
          link: "/pillar/green-communities",
          impactStories: [
            { title: 'Cairo Climate Talks', url: 'https://cairoclimatetalks.net/event/keeping-the-momentum-up-how-do-we-activate-young-people-to-save-the-planet/' }
          ],
          customImage: pillar4_image
        }
    ];

    // Placeholder data for impact stories
    const stories = [
        { id: 1, title: "impact story 1", excerpt: "this will link externally to different websites and partner websites...", link: "#" },
        { id: 2, title: "impact story 2", excerpt: "this will link externally to different websites and partner websites...", link: "#" },
        { id: 3, title: "impact story 3", excerpt: "this will link externally to different websites and partner websites...", link: "#" },
     ];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="px-4 bg-gray-50">
            <HeroSection />
            <GEPIntroSection />

            {/* Interactive Map Section */}
            {/* --- New Combined Map and Pillars Section --- */}
            <section className="max-w-screen-2xl mx-auto py-16 px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#004b45]">Global Progress Tracker</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-8 items-start"> {/* Changed to 7 columns */}
                    {/* Left Pillars - Pillar 1 and 3 - Now spans 2 columns */}
                    <div className="hidden lg:flex lg:flex-col lg:col-span-2 lg:gap-8">
                        <PillarCard key={pillarData[0].id} pillar={{...pillarData[0]}} />
                        <PillarCard key={pillarData[2].id} pillar={{...pillarData[2],}} />
                    </div>

                    {/* Center Map - Reduced to 3 columns (from 5) */}
                    <div className="lg:col-span-3 mb-4 lg:mb-0">
                {/* Search box - reduced margin bottom */}
                <div className="relative w-full mx-auto mb-3">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search for a country or region..."
                    className="w-full p-3 pl-12 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm transition-all bg-white"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onFocus={handleFocus}
                    onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  />
                  {isSearchFocused && (
                    <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {/* ... */}
                    </ul>
                  )}
                </div>

                {/* World map - reduced spacing by removing margin or using mb-3 */}
                <div className="border-2 border-gray-200 rounded-2xl shadow-lg p-6 bg-white mb-3">
                  <WorldMap className="w-full h-auto" />
                </div>

                {/* External data section - removed mt-6, added consistent spacing */}
                <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg p-2">
                  <div className="min-h-[66px] px-4 py-2 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                    <p className="text-gray-500 text-center text-sm leading-tight">
                      [External partner data and resources will be displayed here]
                    </p>
                  </div>
                </div>



              </div>

                    
                    {/* Right Pillars - Pillar 2 and 4 - Now spans 2 columns */}
                    <div className="hidden lg:flex lg:flex-col lg:col-span-2 lg:gap-8">
                        <PillarCard key={pillarData[1].id} pillar={{...pillarData[1]}} />
                        <PillarCard key={pillarData[3].id} pillar={{...pillarData[3]}} />
                    </div>
                    
                    {/* Pillars for Mobile/Tablet View */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-6 mt-8">
                        {pillarData.map((pillar, index) => (
                            <PillarCard key={pillar.id} pillar={{...pillar}} />
                        ))}
                    </div>
              </div>
            </section>

            {/* Impact Stories Section */}
            <div className="max-w-6xl mx-auto mt-12 py-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-[#004b45]">Impact Stories</h2>
                <p className="text-gray-600 text-center text-sm mb-6">
                    This space will feature impact stories, best practices, and reports from the GEP's external and partner websites.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stories.map(story => (
                        // Assumes you have a StoryCard component that takes story data as props
                        <StoryCard key={story.id} title={story.title} excerpt={story.excerpt} link={story.link} />
                    ))}
                </div>
                <div className="text-center mt-6">
                    <a
                        href="#all-stories" // Replace with the actual link to all stories page
                        className="inline-flex items-center text-sm text-[#0f7378] hover:underline"
                    >
                        View all impact stories <ExternalLink className="ml-1" size={14} />
                    </a>
                </div>
            </div>
            <QuickLinksSection />
    </div>
    );
};

export default GlobalDashboard;