import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Info, 
  Globe, 
  ZoomIn,
  ZoomOut,
  Layers,
  Compass
} from 'lucide-react';

// Import the required tooltip components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// ArcGIS imports
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Point from "@arcgis/core/geometry/Point";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import "@arcgis/core/assets/esri/themes/light/main.css";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

// Simplified country data with ISO codes
interface CountryData {
  id: string;
  name: string;
  isoCode: string;
  region: string;
  quickFact: string;
  coordinates: { longitude: number, latitude: number };
  isIcesco?: boolean;
}

// Sample country data matching our existing countries with real lat/long
const countryData: CountryData[] = [
  {
    id: 'uae',
    name: 'United Arab Emirates',
    isoCode: 'AE',
    region: 'Middle East and North Africa',
    quickFact: 'National Green Schools program covers 60% of schools',
    coordinates: { longitude: 54.3773, latitude: 24.4539 },
    isIcesco: true
  },
  {
    id: 'morocco',
    name: 'Morocco',
    isoCode: 'MA',
    region: 'Middle East and North Africa',
    quickFact: 'Eco-Schools program has certified 2,000+ schools',
    coordinates: { longitude: -7.9810, latitude: 31.7917 },
    isIcesco: true
  },
  {
    id: 'egypt',
    name: 'Egypt',
    isoCode: 'EG',
    region: 'Middle East and North Africa',
    quickFact: 'Climate curriculum adopted in 75% of schools',
    coordinates: { longitude: 30.8025, latitude: 26.8206 },
    isIcesco: true
  },
  {
    id: 'jordan',
    name: 'Jordan',
    isoCode: 'JO',
    region: 'Middle East and North Africa',
    quickFact: 'Water conservation program in 500+ schools',
    coordinates: { longitude: 36.2384, latitude: 30.5852 },
    isIcesco: true
  },
  {
    id: 'saudi',
    name: 'Saudi Arabia', 
    isoCode: 'SA',
    region: 'Middle East and North Africa',
    quickFact: 'Vision 2030 includes major green education initiatives',
    coordinates: { longitude: 45.0792, latitude: 23.8859 },
    isIcesco: true
  },
  {
    id: 'qatar',
    name: 'Qatar',
    isoCode: 'QA', 
    region: 'Middle East and North Africa',
    quickFact: 'National Sustainability Education Framework launched in 2023',
    coordinates: { longitude: 51.1839, latitude: 25.3548 },
    isIcesco: true
  },
  {
    id: 'bahrain',
    name: 'Bahrain',
    isoCode: 'BH',
    region: 'Middle East and North Africa',
    quickFact: 'Teacher training in climate education reaches 3,000 educators',
    coordinates: { longitude: 50.5577, latitude: 26.0667 },
    isIcesco: true
  },
  {
    id: 'kuwait',
    name: 'Kuwait',
    isoCode: 'KW',
    region: 'Middle East and North Africa',
    quickFact: 'Environmental awareness programs in all public schools',
    coordinates: { longitude: 47.4818, latitude: 29.3117 },
    isIcesco: true
  }
];

const ICESCO_COUNTRIES = [
  // Africa
  'Algeria', 'Benin', 'Burkina Faso', 'Cameroon', 'Chad', 'Comoros', 
  'Côte d\'Ivoire', 'Djibouti', 'Egypt', 'Gabon', 'Gambia', 'Guinea', 
  'Guinea-Bissau', 'Libya', 'Mali', 'Mauritania', 'Morocco', 'Mozambique', 
  'Niger', 'Nigeria', 'Senegal', 'Sierra Leone', 'Somalia', 'Sudan', 'Togo', 
  'Tunisia', 'Uganda',
  // Asia
  'Afghanistan', 'Azerbaijan', 'Bangladesh', 'Brunei Darussalam', 'Indonesia', 
  'Iran', 'Kazakhstan', 'Kyrgyzstan', 'Malaysia', 'Maldives', 'Pakistan', 
  'Tajikistan', 'Turkmenistan', 'Uzbekistan',
  // Middle East
  'Bahrain', 'Iraq', 'Jordan', 'Kuwait', 'Lebanon', 'Oman', 'Palestine', 
  'Qatar', 'Saudi Arabia', 'Syria', 'United Arab Emirates', 'Yemen'
];

const WorldMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<MapView | SceneView | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<CountryData | null>(null);
  const [is3DMode, setIs3DMode] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleCountryClick = (country: CountryData) => {
    navigate(`/country/${country.id}`);
  };

  // Calculate tooltip position with boundary checking
  const getTooltipPosition = (mouseX: number, mouseY: number) => {
    const tooltipWidth = 300;
    const tooltipHeight = 120; // Approximate height
    const padding = 20;
    
    let x, y;
    
    // Get map container bounds
    const mapContainer = mapRef.current;
    if (!mapContainer) return { x: mouseX, y: mouseY };
    
    const containerRect = mapContainer.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    
    // Calculate relative position within the map container
    const relativeX = mouseX;
    const relativeY = mouseY;
    
    // Horizontal positioning
    if (relativeX + tooltipWidth + padding > containerWidth) {
      // Position to the left of cursor
      x = relativeX - tooltipWidth - padding;
    } else {
      // Position to the right of cursor
      x = relativeX + padding;
    }
    
    // Vertical positioning
    if (relativeY + tooltipHeight + padding > containerHeight) {
      // Position above cursor
      y = relativeY - tooltipHeight - padding;
    } else {
      // Position below cursor
      y = relativeY + padding;
    }
    
    // Ensure tooltip doesn't go outside container bounds
    x = Math.max(padding, Math.min(x, containerWidth - tooltipWidth - padding));
    y = Math.max(padding, Math.min(y, containerHeight - tooltipHeight - padding));
    
    return { x, y };
  };

  useEffect(() => {
    if (mapRef.current) {
      const map = new Map({
        basemap: "satellite"
      });

      const view = is3DMode 
        ? new SceneView({
            container: mapRef.current,
            map: map,
            center: [0, 30],
            zoom: 2,
            environment: {
              lighting: {
                date: new Date(),
                directShadowsEnabled: true
              }
            }
          })
        : new MapView({
            container: mapRef.current,
            map: map,
            center: [0, 30],
            zoom: 2
          });

      const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "topo-vector"
      });
      view.ui.add(basemapToggle, "bottom-right");

      const graphicsLayer = new GraphicsLayer();
      map.add(graphicsLayer);

      countryData.forEach(country => {
        const point = new Point({
          longitude: country.coordinates.longitude,
          latitude: country.coordinates.latitude
        });

        const markerSymbol = {
          type: "simple-marker" as "simple-marker",
          color: country.isIcesco ? "#00787D" : "#6cb154",
          outline: {
            color: [255, 255, 255, 0.7],
            width: 1
          },
          size: country.isIcesco ? 12 : 10
        };

        const popupTemplate = new PopupTemplate({
          title: country.name,
          content: `
            <div>
              <p style="color: #666; font-size: 0.9em;">${country.region}</p>
              ${country.isIcesco ? '<p style="color: #00787D; font-weight: bold; margin-top: 4px;">ICESCO Member Country</p>' : ''}
              <p style="margin-top: 8px;">${country.quickFact}</p>
              <p style="margin-top: 8px; font-style: italic; color: #6cb154;">Click for detailed profile</p>
            </div>
          `
        });

        const pointGraphic = new Graphic({
          geometry: point,
          symbol: markerSymbol,
          attributes: {
            id: country.id,
            name: country.name,
            region: country.region,
            quickFact: country.quickFact
          },
          popupTemplate: popupTemplate
        });

        graphicsLayer.add(pointGraphic);
      });

      view.on("click", function(event) {
        view.hitTest(event).then(function(response) {
          if (response.results.length) {
            const graphic = response.results.filter(function(result) {
              return result.graphic.layer === graphicsLayer;
            })[0]?.graphic;

            if (graphic) {
              const countryId = graphic.attributes.id;
              navigate(`/country/${countryId}`);
            }
          }
        });
      });

      view.on("pointer-move", function(event) {
        view.hitTest(event).then(function(response) {
          const graphic = response.results.filter(function(result) {
            return result.graphic.layer === graphicsLayer;
          })[0]?.graphic;

          if (graphic) {
            const country = countryData.find(c => c.id === graphic.attributes.id);
            setHoveredCountry(country || null);
            setTooltipPosition({ x: event.x, y: event.y });
          } else {
            setHoveredCountry(null);
          }
        });
      });

      viewRef.current = view;
      
      return () => {
        if (viewRef.current) {
          viewRef.current.destroy();
          viewRef.current = null;
        }
      };
    }
  }, [is3DMode, navigate]);

  const toggle3DMode = () => {
    setIs3DMode(prev => !prev);
  };

  // Calculate tooltip position when hoveredCountry changes
  const tooltipPos = hoveredCountry ? getTooltipPosition(tooltipPosition.x, tooltipPosition.y) : { x: 0, y: 0 };

  return (
    <div className="relative w-full h-[500px] bg-[#f7f9fc] rounded-xl shadow-md overflow-hidden">
      <div ref={mapRef} className="w-full h-full"></div>
      <p className="text-gray-700 mb-4 text-center">
          Hover over a country for quick facts. Clicking on a country will direct you to its country profile page.
        </p>
      <div className="absolute top-4 right-4 flex flex-col gap-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                onClick={toggle3DMode}
                className="p-2 hover:bg-[#0f7378]/10 rounded-t-lg transition-colors"
              >
                <Compass size={20} className="text-[#0f7378]" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle {is3DMode ? '2D' : '3D'} View</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <div className="h-px bg-gray-200 w-full"></div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className="p-2 hover:bg-[#0f7378]/10 rounded-b-lg transition-colors"
                onClick={() => {
                  if (viewRef.current) {
                    viewRef.current.goTo({ zoom: viewRef.current.zoom + 1 });
                  }
                }}
              >
                <ZoomIn size={20} className="text-[#0f7378]" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Zoom In</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <div className="h-px bg-gray-200 w-full"></div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className="p-2 hover:bg-[#0f7378]/10 rounded-b-lg transition-colors"
                onClick={() => {
                  if (viewRef.current) {
                    viewRef.current.goTo({ zoom: viewRef.current.zoom - 1 });
                  }
                }}
              >
                <ZoomOut size={20} className="text-[#0f7378]" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Zoom Out</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="h-px bg-gray-200 w-full"></div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                className="p-2 hover:bg-[#0f7378]/10 rounded-b-lg transition-colors"
              >
                <Layers size={20} className="text-[#0f7378]" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle Layers</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {hoveredCountry && (
        <div 
          className="absolute z-50 w-[300px] bg-white rounded-lg shadow-lg p-4 border-l-4 border-[#6cb154] pointer-events-none transform transition-opacity duration-200"
          style={{ 
            left: `${tooltipPos.x}px`, 
            top: `${tooltipPos.y}px`,
            opacity: hoveredCountry ? 1 : 0 
          }}
        >
          <div className="flex items-start gap-2">
            <div className="bg-[#0f7378]/10 rounded-full p-2 mt-1">
              <Info size={16} className="text-[#0f7378]" />
            </div>
            <div>
              <h3 className="font-bold text-[#0f7378]">{hoveredCountry.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{hoveredCountry.region}</p>
              <p className="text-sm">{hoveredCountry.quickFact}</p>
              <p className="text-xs mt-2 text-[#6cb154] italic">Click for detailed profile</p>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-3 max-w-[260px] text-sm border-l-3 border-[#0f7378]">
        <p className="flex items-center mb-2">
          <span className="inline-block w-3 h-3 bg-[#6cb154] rounded-full mr-2"></span>
          Click on markers to see country profiles
        </p>
        <p className="flex items-center">
          <span className="inline-block w-3 h-3 bg-[#0f7378] rounded-full mr-2"></span>
          Use <Compass size={14} className="inline mx-1" /> to toggle 3D view
        </p>
      </div>

      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-3 rounded text-xs space-y-2">
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-[#0f7378]" />
          <span className="text-gray-700">UNESCO Greening Education Map {is3DMode ? '(3D)' : '(2D)'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#00787D]"></span>
          <span className="text-gray-700">ICESCO Member Countries</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#6cb154]"></span>
          <span className="text-gray-700">Other Countries</span>
        </div>
      </div>

      {is3DMode && (
        <div className="absolute top-16 left-4 bg-[#0f7378] text-white rounded-full px-3 py-1 text-xs shadow-md">
          3D Mode
        </div>
      )}
    </div>
  );
};

export default WorldMap;