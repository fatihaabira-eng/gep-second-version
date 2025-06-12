# GEP (Green Education Platform) - Developer Documentation

This document provides technical documentation for developers working on the GEP project, a web application that showcases sustainability and climate education initiatives across different countries.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Key Components](#key-components)
5. [Data Structure](#data-structure)
6. [Adding New Features](#adding-new-features)
7. [Styling Guidelines](#styling-guidelines)

## Project Overview

The Green Education Platform (GEP) is a web application designed to showcase and track climate-smart education initiatives and progress across different countries, primarily focusing on the Middle East and North Africa region. The platform provides detailed profiles for each country, displaying data on various sustainability metrics organized around four key pillars:

1. Green Schools
2. Green Curriculum 
3. Teacher Capacity
4. Green Communities

The application enables users to browse countries, view detailed metrics, and explore impact stories related to sustainability initiatives in education.

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Charts/Visualizations**: Recharts
- **Icons**: Lucide React

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/           # Base UI components using shadcn/ui
│   ├── CountryList.tsx       # Countries listing page
│   ├── CountryProfile.tsx    # Individual country profile
│   ├── PillarPage.tsx        # Pillar detail page
│   ├── NavBar.tsx            # Navigation header
│   ├── Footer.tsx            # Footer component
│   └── ChatAssistant.tsx     # AI chat assistant component
├── pages/           # Main page components 
│   ├── Index.tsx            # Home page
│   ├── SignIn.tsx           # Sign in page
│   ├── SignUp.tsx           # Sign up page
│   ├── Resources.tsx        # Resources page
│   ├── Partners.tsx         # Partners page
│   └── NotFound.tsx         # 404 page
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and helpers
├── imgs/            # Static images
└── App.tsx          # Main application component with routing
```

## Key Components

### CountryList.tsx
Displays a filterable grid of countries with search functionality and region filtering. Each country card shows the country flag and basic information, linking to detailed country profiles.

**Features:**
- Search functionality by country name
- Region filtering
- Responsive grid layout

### CountryProfile.tsx
Displays detailed information about a specific country's green education initiatives, organized around key pillars:

**Features:**
- Progress visualization using charts and progress indicators
- Detailed metrics for each sustainability pillar
- Impact stories featuring successful sustainability initiatives
- Economic impact data visualization
- Modal dialogs for detailed information

### PillarPage.tsx
Placeholder component for future detailed information about each of the four sustainability pillars.

## Data Structure

The application uses the following main data structures:

### Country Data
```typescript
interface CountryData {
  name: string;
  description: string;
  pillars: {
    greenSchools: number;
    greenCurriculum: number;
    teacherCapacity: number;
    greenCommunities: number;
  };
  sdgProgress: {
    [key: string]: number;
  };
  economicImpact: {
    greenJobs: number;
    investment: number;
  };
}
```

### Impact Stories
```typescript
interface ImpactStory {
  title: string;
  description: string;
  link: string;
}
```

### Pillar Information
```typescript
interface Pillar {
  title: string;
  description: string;
  metrics: string[];
  actions: string[];
}
```

### Spotlight Data
```typescript
interface SpotlightData {
  title: string;
  description: string;
  stats: string;
  impact: string;
}
```

## Adding New Features

### Adding a New Country

To add a new country to the application:

1. Update the `countries` array in `CountryList.tsx` with the new country's information
2. Add corresponding country data to the `countryData` object in `CountryProfile.tsx`
3. Add impact stories for the new country in the `countryImpactStories` object

Example:
```typescript
// In CountryList.tsx
const countries = [
  // ... existing countries
  {
    id: 'newcountry',
    name: 'New Country',
    flag: 'https://flagcdn.com/w320/xx.png', // Replace with actual flag URL
    region: 'Region Name'
  }
];

// In CountryProfile.tsx
const countryData: Record<string, CountryData> = {
  // ... existing countries
  'newcountry': {
    name: 'New Country',
    description: 'Description of country initiatives',
    pillars: {
      greenSchools: 60,
      greenCurriculum: 70,
      teacherCapacity: 65,
      greenCommunities: 75
    },
    sdgProgress: {
      'Quality Education': 70,
      'Climate Action': 65,
      'Sustainable Cities': 60
    },
    economicImpact: {
      greenJobs: 10000,
      investment: 150000000
    }
  }
};

const countryImpactStories: Record<string, ImpactStory[]> = {
  // ... existing country stories
  'newcountry': [
    {
      title: "New Country Impact Story",
      description: "Description of the impact story...",
      link: "https://example.com/link-to-story"
    },
    // Add more stories as needed
  ]
};
```

### Adding a New Metric or Pillar

To add a new sustainability metric or pillar:

1. Update the relevant interfaces in `CountryProfile.tsx`
2. Add the new metric/pillar data to all country objects
3. Create visualization components for the new metric/pillar
4. Update the UI to display the new information

## Styling Guidelines

The application follows these styling guidelines:

1. **Color Palette**:
   - Primary: `#3a6a6e` (dark teal)
   - Secondary: `#6cb154` (green)
   - Text: Various shades of gray (`text-gray-600`, `text-gray-800`)
   - Accents: White and light grays for backgrounds

2. **Component Styling**:
   - Cards use `rounded-lg` or `rounded-xl` with `shadow-md` for elevation
   - Gradients are used for section headers (`bg-gradient-to-r from-[#3a6a6e] to-[#6cb154]`)
   - Interactive elements have hover states with `transition-` utility classes
   - Responsive layouts use Tailwind's grid and flex utilities

3. **Responsive Design**:
   - Mobile-first approach with responsive breakpoints
   - Use `sm:`, `md:`, `lg:` prefixes for responsive designs
   - Cards stack vertically on mobile and expand to grid on larger screens

4. **Icons**:
   - Use Lucide React icons library consistently throughout the application
   - Keep icon sizes consistent: Small (16px), Medium (20px), Large (24px)

## Performance Considerations

1. **Component Splitting**: The `CountryProfile.tsx` component is quite large and should be refactored into smaller, more focused components.

2. **Data Management**: Currently data is hardcoded in components. For a production application, this should be moved to:
   - API calls to a backend service
   - Centralized state management
   - TypeScript interfaces in separate files

3. **Lazy Loading**: Consider implementing lazy loading for routes to improve initial load performance.
