import React from "react";
import { Icon } from "@iconify/react";
import { Tooltip } from "@heroui/react";
import { SerpFeature } from "../types/domain-data";

interface SerpFeatureOwnershipProps {
  data: SerpFeature[];
}

export const SerpFeatureOwnership: React.FC<SerpFeatureOwnershipProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((feature, index) => (
        <div key={index} className="border border-gray-200 rounded-md p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Icon 
                icon={getFeatureIcon(feature.type)} 
                className="text-gray-600" 
                width={18} 
              />
              <span className="text-sm font-medium">{feature.type}</span>
            </div>
            <Tooltip content={feature.owned ? "You own this feature" : "You don't own this feature"}>
              <div className={`w-3 h-3 rounded-full ${feature.owned ? 'bg-success' : 'bg-danger'}`}></div>
            </Tooltip>
          </div>
          
          <div className="text-xs text-gray-500 mb-1">
            {feature.owned ? 'Owned' : 'Not owned'} • {feature.percentage}% of queries
          </div>
          
          <div className="text-xs">
            {feature.owned ? (
              <span className="text-success-600">
                <Icon icon="lucide:check" className="inline mr-1" width={12} />
                {feature.details}
              </span>
            ) : (
              <span className="text-danger-600">
                <Icon icon="lucide:x" className="inline mr-1" width={12} />
                {feature.details}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

function getFeatureIcon(type: string): string {
  switch (type) {
    case "Featured Snippet":
      return "lucide:layout";
    case "People Also Ask":
      return "lucide:help-circle";
    case "Local Pack":
      return "lucide:map-pin";
    case "Video":
      return "lucide:play";
    case "AI Overview":
      return "lucide:sparkles";
    default:
      return "lucide:star";
  }
}