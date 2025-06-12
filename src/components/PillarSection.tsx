import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"; // Assuming Shadcn UI
import { ExternalLink as LinkIcon, CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';

interface PillarVisualization {
  type: 'number' | 'yesno';
  value: number | string | 'Yes' | 'No' | 'Not available or data not reviewed' | null;
  label?: string; // e.g., "Number of green schools"
  total?: number | string | null; // For 'number' type, e.g. "out of X total schools"
}

interface PillarLink {
  text: string;
  url: string;
}

interface PillarCountryResponse {
  heading?: string; // Optional heading for the response section
  text: string | null;
}

interface PillarSectionCardProps {
  title: string;
  target: string;
  visualization?: PillarVisualization;
  links?: PillarLink[];
  countryResponses?: PillarCountryResponse[];
  additionalDetails?: React.ReactNode; // For complex content not fitting other props
}

const ValueDisplay: React.FC<{ value: PillarVisualization['value'] }> = ({ value }) => {
  let displayValue = value;
  let icon = <Info size={24} className="text-gray-500" />;
  let bgColor = 'bg-gray-100';
  let textColor = 'text-gray-800';

  if (value === 'Yes') {
    icon = <CheckCircle size={24} className="text-green-600" />;
    bgColor = 'bg-green-100';
    textColor = 'text-green-800';
  } else if (value === 'No') {
    icon = <XCircle size={24} className="text-red-600" />;
    bgColor = 'bg-red-100';
    textColor = 'text-red-800';
  } else if (value === 'Not available or data not reviewed' || value === '[Under development by IIEP]') {
    icon = <AlertCircle size={24} className="text-yellow-600" />;
    displayValue = 'Not available or data not reviewed';
    bgColor = 'bg-yellow-100';
    textColor = 'text-yellow-800';
  }


  return (
    <div className={`flex items-center space-x-2 p-3 rounded-md ${bgColor}`}>
      {icon}
      <span className={`text-lg font-semibold ${textColor}`}>{String(displayValue)}</span>
    </div>
  );
};


const PillarSectionCard: React.FC<PillarSectionCardProps> = ({
  title,
  target,
  visualization,
  links,
  countryResponses,
  additionalDetails,
}) => {
  const renderVisualization = () => {
    if (!visualization) return null;

    if (visualization.type === 'number') {
      return (
        <div className="text-left mb-3">
          {visualization.label && <h4 className="font-semibold mb-1 text-gray-700">{visualization.label}:</h4>}
          <div className="text-3xl font-bold text-[#3a6a6e]">
            {visualization.value === null || visualization.value === undefined || visualization.value === "[Please FILL IN YOUR ANSWER]"
              ? 'Data not provided'
              : String(visualization.value)}
          </div>
          {visualization.total && (
            <div className="text-sm text-gray-600">
              out of {visualization.total} total
            </div>
          )}
        </div>
      );
    } else if (visualization.type === 'yesno') {
      return (
         <div className="text-left mb-3">
            {visualization.label && <h4 className="font-semibold mb-1 text-gray-700">{visualization.label}:</h4>}
            <ValueDisplay value={visualization.value} />
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="mb-6 shadow-lg">
      <CardHeader>
        <CardTitle className="text-[#3a6a6e] text-2xl">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 italic">Target: {target}</CardDescription>
      </CardHeader>
      <CardContent>
        {renderVisualization()}

        {links && links.length > 0 && (
          <div className="mt-4">
            {links.map((link, index) => link.url && link.url !== 'Ras Al Khaimah' && !link.url.includes("Please FILL IN YOUR ANSWER") && ( // Added check for valid URL
              <div key={index} className="mb-2">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#3a6a6e] hover:text-[#6cb154] hover:underline"
                >
                  {link.text} <LinkIcon size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        )}

        {countryResponses && countryResponses.length > 0 && (
          <div className="mt-4 space-y-3">
            {countryResponses.map((response, index) => response.text && response.text !== "[Please FILL IN YOUR ANSWER]" && (
              <div key={index}>
                {response.heading && <h4 className="font-semibold mb-1 text-gray-700">{response.heading}:</h4>}
                <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-700 whitespace-pre-line">
                  {response.text || <span className="italic text-gray-500">No response provided.</span>}
                </div>
              </div>
            ))}
          </div>
        )}
        {additionalDetails && <div className="mt-4">{additionalDetails}</div>}
      </CardContent>
    </Card>
  );
};

export default PillarSectionCard;