
import { FaSchool, FaBook, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

export const pillars = [
    { 
        id: 1, 
        title: "Greening Schools", 
        current: 80573,
        total: 5500000,
        percentage: Math.round((80573 / 5500000) * 100 * 10) / 10,
        description: "From early childhood through adult education, work to ensure that all schools achieve green school accreditation", 
        icon: FaSchool, 
        color: "#16A34A", 
        learnMoreUrl: "https://www.unesco.org/en/education/sustainable-development/green-schools",
        pillarRoute: "green-schools"
    },
    { 
        id: 2, 
        title: "Greening Curriculum", 
        current: 72,
        total: 195,
        percentage: Math.round((72 / 195) * 100),
        description: "Embrace a life-long learning approach that integrates climate education into school curricula", 
        icon: FaBook, 
        color: "#18b2e8", 
        learnMoreUrl: "https://www.unesco.org/en/education/sustainable-development/curriculum",
        pillarRoute: "green-curriculum"
    },
    { 
        id: 3, 
        title: "Teacher Training & Capacity", 
        current: 72,
        total: 195,
        percentage: Math.round((72 / 195) * 100),
        description: "Support all GEP member states in establishing professional teaching standards that include climate change", 
        icon: FaChalkboardTeacher, 
        color: "#8b5cf6", 
        learnMoreUrl: "https://www.unesco.org/en/education/sustainable-development/teachers",
        pillarRoute: "teacher-capacity"
    },
    { 
        id: 4, 
        title: "Greening Communities", 
        current: 1500,
        total: 10000,
        percentage: Math.round((1500 / 10000) * 100),
        description: "20% of cities and communities in each country have at least one climate change lifelong learning programme", 
        icon: FaUsers, 
        color: "#f97316", 
        learnMoreUrl: "https://www.unesco.org/en/education/sustainable-development/whole-institution",
        pillarRoute: "green-communities"
    },
];

export const partners = [
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
    }
];

export const stories = [
    {
        id: 1,
        title: "Costa Rica's Success with Green School Network",
        excerpt: "How Costa Rica achieved 80% green school certification and became a regional leader in sustainable education.",
        country: "Costa Rica",
        date: "April 2, 2025",
        imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        url: "https://www.unesco.org/en/articles/costa-rica-greening-education"
    },
    {
        id: 2,
        title: "Teacher Training Initiative Reaches 10,000 Educators in East Africa",
        excerpt: "A collaborative program between UNESCO and local governments is building capacity for climate education.",
        country: "East Africa",
        date: "March 28, 2025",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        url: "https://www.unesco.org/en/articles/teacher-training-east-africa"
    },
    {
        id: 3,
        title: "New Climate Curriculum Adopted by 15 Countries",
        excerpt: "Standardized learning objectives for climate education are being implemented across multiple regions.",
        country: "Global",
        date: "March 15, 2025",
        imageUrl: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
        url: "https://www.unesco.org/en/articles/climate-curriculum-adoption"
    }
];
