import React from "react";
import { ResponsiveContainer } from "recharts";
import { Icon } from "@iconify/react";

export const TopicClusterVisualization: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 relative">
        {/* Main topic cluster */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-32 h-32 rounded-full bg-primary-100 border-2 border-primary-500 flex items-center justify-center shadow-md">
            <div className="text-center">
              <Icon icon="lucide:shield" className="text-primary-500 text-3xl mb-2" />
              <div className="text-sm font-medium">Cybersecurity</div>
              <div className="text-xs text-gray-500 mt-1">Core Topic</div>
            </div>
          </div>
          
          {/* Connection lines from center to clusters */}
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gray-300 -z-10"></div>
        </div>
        
        {/* Endpoint Security Cluster - Top Right */}
        <div className="absolute top-[15%] right-[20%]">
          <div className="w-24 h-24 rounded-full bg-primary-50 border-2 border-primary-300 flex items-center justify-center shadow-sm">
            <div className="text-center">
              <Icon icon="lucide:laptop" className="text-primary-500 text-2xl mb-1" />
              <div className="text-sm font-medium">Endpoint Security</div>
            </div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
            <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
              145K SV
            </span>
          </div>
          {/* Connection line */}
          <div className="absolute bottom-0 left-1/2 h-[100px] w-[2px] bg-primary-200 -z-10 origin-bottom transform rotate-45 translate-y-[50px]"></div>
        </div>
        
        {/* Zero Trust Cluster - Top Left */}
        <div className="absolute top-[15%] left-[20%]">
          <div className="w-24 h-24 rounded-full bg-secondary-50 border-2 border-secondary-300 flex items-center justify-center shadow-sm">
            <div className="text-center">
              <Icon icon="lucide:lock" className="text-secondary-500 text-2xl mb-1" />
              <div className="text-sm font-medium">Zero Trust</div>
            </div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
            <span className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full">
              128K SV
            </span>
          </div>
          {/* Connection line */}
          <div className="absolute bottom-0 left-1/2 h-[100px] w-[2px] bg-secondary-200 -z-10 origin-bottom transform -rotate-45 translate-y-[50px]"></div>
        </div>
        
        {/* IoT Security Cluster - Bottom Left */}
        <div className="absolute bottom-[15%] left-[20%]">
          <div className="w-24 h-24 rounded-full bg-success-50 border-2 border-success-300 flex items-center justify-center shadow-sm">
            <div className="text-center">
              <Icon icon="lucide:wifi" className="text-success-500 text-2xl mb-1" />
              <div className="text-sm font-medium">IoT Security</div>
            </div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
            <span className="text-xs bg-success-100 text-success-700 px-2 py-1 rounded-full">
              112K SV
            </span>
          </div>
          {/* Connection line */}
          <div className="absolute top-0 left-1/2 h-[100px] w-[2px] bg-success-200 -z-10 origin-top transform -rotate-45 translate-y-[-50px]"></div>
        </div>
        
        {/* Cloud Security Cluster - Bottom Right */}
        <div className="absolute bottom-[15%] right-[20%]">
          <div className="w-24 h-24 rounded-full bg-warning-50 border-2 border-warning-300 flex items-center justify-center shadow-sm">
            <div className="text-center">
              <Icon icon="lucide:cloud" className="text-warning-500 text-2xl mb-1" />
              <div className="text-sm font-medium">Cloud Security</div>
            </div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
            <span className="text-xs bg-warning-100 text-warning-700 px-2 py-1 rounded-full">
              98K SV
            </span>
          </div>
          {/* Connection line */}
          <div className="absolute top-0 left-1/2 h-[100px] w-[2px] bg-warning-200 -z-10 origin-top transform rotate-45 translate-y-[-50px]"></div>
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white p-2 rounded-md shadow-sm border border-gray-200">
          <div className="text-xs font-medium mb-1">Legend</div>
          <div className="flex items-center gap-1 text-xs">
            <div className="w-2 h-2 rounded-full bg-primary-500"></div>
            <span>Search Volume</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <div className="w-3 h-3 rounded-full border border-dashed border-gray-300"></div>
            <span>Topic Relationship</span>
          </div>
        </div>
      </div>
    </ResponsiveContainer>
  );
};