import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { TrafficTrendData } from "../../types/domain-data";

interface TrafficTrendChartProps {
  data: TrafficTrendData[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-medium">{label}</p>
        <p className="text-sm text-primary-600">
          Traffic: {payload[0].value.toLocaleString()}
        </p>
        <p className="text-sm text-success-600">
          Conversions: {payload[1].value.toLocaleString()}
        </p>
      </div>
    );
  }
  
  return null;
};

export const TrafficTrendChart: React.FC<TrafficTrendChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7" />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          yAxisId="left"
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}
        />
        <YAxis 
          yAxisId="right" 
          orientation="right"
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}
        />
        <RechartsTooltip content={<CustomTooltip />} />
        <Line 
          yAxisId="left"
          type="monotone" 
          dataKey="traffic" 
          stroke="#006BFF" 
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
        <Line 
          yAxisId="right"
          type="monotone" 
          dataKey="conversions" 
          stroke="#11825B" 
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};