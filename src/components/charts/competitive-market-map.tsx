import React from "react";
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  ZAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  ResponsiveContainer,
  Legend
} from "recharts";
import { CompetitorData } from "../../types/domain-data";

interface CompetitiveMarketMapProps {
  data: CompetitorData[];
  domain: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium">{data.name}</p>
        <p className="text-sm text-gray-600">Share of Voice: {data.shareOfVoice}%</p>
        <p className="text-sm text-gray-600">LLM Citation: {data.llmCitationShare}%</p>
        <div className="mt-2 pt-2 border-t border-gray-200">
          <p className="text-xs text-gray-500">Algorithm Impact: {data.algorithmImpact}</p>
          <p className="text-xs text-gray-500">30-day Traffic: {data.trafficDelta > 0 ? '+' : ''}{data.trafficDelta}%</p>
        </div>
      </div>
    );
  }
  
  return null;
};

export const CompetitiveMarketMap: React.FC<CompetitiveMarketMapProps> = ({ data, domain }) => {
  const colorMap: {[key: string]: string} = {
    "mcafee.com": "#006BFF",
    "norton.com": "#11825B",
    "kaspersky.com": "#7828c8",
    "avast.com": "#f5a524",
    "bitdefender.com": "#E11900",
    "avg.com": "#71717a"
  };
  
  const enhancedData = data.map(item => ({
    ...item,
    fill: colorMap[item.name] || "#71717a"
  }));
  
  return (
    <ResponsiveContainer width="100%" height={350}>
      <ScatterChart
        margin={{ top: 20, right: 30, bottom: 60, left: 40 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
        <XAxis 
          type="number" 
          dataKey="shareOfVoice" 
          name="Share of Voice" 
          unit="%" 
          domain={[0, 40]}
          tickFormatter={(value) => `${value}%`}
          label={{ value: 'Share of Voice (%)', position: 'insideBottom', offset: -10 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          type="number" 
          dataKey="llmCitationShare" 
          name="LLM Citation Share" 
          unit="%" 
          domain={[0, 35]}
          tickFormatter={(value) => `${value}%`}
          label={{ value: 'LLM Citation Share (%)', angle: -90, position: 'insideLeft', dy: 20 }}
          tick={{ fontSize: 12 }}
        />
        <ZAxis 
          type="number" 
          dataKey="paidSpendWaste" 
          range={[400, 2000]} 
          name="Paid Spend Waste" 
          unit="$" 
        />
        <RechartsTooltip content={<CustomTooltip />} />
        <Scatter 
          name="Competitors" 
          data={enhancedData} 
          fill="#8884d8"
          shape="circle"
        />
        
        {/* Add company name labels */}
        {enhancedData.map((entry, index) => {
          // Calculate position based on chart dimensions and scales
          const chartWidth = 100; // percentage width of chart area
          const chartHeight = 100; // percentage height of chart area
          const xScale = chartWidth / 40; // 40 is the domain max for x-axis
          const yScale = chartHeight / 35; // 35 is the domain max for y-axis
          
          const xPos = (entry.shareOfVoice * xScale) + 10; // 10% offset from left
          const yPos = 90 - (entry.llmCitationShare * yScale); // 90% from top, inverted
          
          return (
            <g key={`label-${index}`}>
              <text
                x={`${xPos}%`}
                y={`${yPos + 8}%`}
                textAnchor="middle"
                fill={colorMap[entry.name] || "#71717a"}
                fontSize={11}
                fontWeight="600"
              >
                {entry.name.split('.')[0]}
              </text>
            </g>
          );
        })}
      </ScatterChart>
    </ResponsiveContainer>
  );
};