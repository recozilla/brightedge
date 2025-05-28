
import React, { useState } from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

interface SessionData {
  keyword: string;
  sessions: number;
  sessionsChange: number;
  revenue: number;
  revenueChange: number;
  ranking: number;
  rankingChange: number;
}

interface ProductData {
  product: string;
  sessions: number;
  sessionsChange: number;
  revenue: number;
  revenueChange: number;
  avgRanking: number;
  rankingChange: number;
}

interface CountryData {
  country: string;
  sessions: number;
  sessionsChange: number;
  revenue: number;
  revenueChange: number;
  avgRanking: number;
  rankingChange: number;
}

const mockSessionsData: SessionData[] = [
  { keyword: "antivirus software", sessions: 45200, sessionsChange: 12.4, revenue: 89400, revenueChange: 8.7, ranking: 3, rankingChange: 1 },
  { keyword: "cybersecurity solutions", sessions: 38900, sessionsChange: -2.1, revenue: 76800, revenueChange: 4.2, ranking: 5, rankingChange: -1 },
  { keyword: "malware protection", sessions: 32100, sessionsChange: 15.8, revenue: 64200, revenueChange: 12.3, ranking: 2, rankingChange: 2 },
  { keyword: "endpoint security", sessions: 28700, sessionsChange: 7.3, revenue: 57400, revenueChange: 5.9, ranking: 4, rankingChange: 0 },
  { keyword: "firewall software", sessions: 24300, sessionsChange: -5.2, revenue: 48600, revenueChange: -1.8, ranking: 7, rankingChange: -2 },
  { keyword: "network security", sessions: 21800, sessionsChange: 9.1, revenue: 43600, revenueChange: 6.4, ranking: 6, rankingChange: 1 },
  { keyword: "data protection", sessions: 19500, sessionsChange: 3.7, revenue: 39000, revenueChange: 2.1, ranking: 8, rankingChange: 0 },
  { keyword: "threat detection", sessions: 17200, sessionsChange: 11.6, revenue: 34400, revenueChange: 8.9, ranking: 9, rankingChange: 2 }
];

const mockProductData: ProductData[] = [
  { product: "Total Protection", sessions: 1245632, sessionsChange: 15.2, revenue: 542891, revenueChange: 18.4, avgRanking: 8.4, rankingChange: 2 },
  { product: "LiveSafe", sessions: 982415, sessionsChange: 12.8, revenue: 328764, revenueChange: 14.6, avgRanking: 12.1, rankingChange: 1 },
  { product: "Antivirus Plus", sessions: 756823, sessionsChange: 8.3, revenue: 245892, revenueChange: 11.2, avgRanking: 15.7, rankingChange: -1 },
  { product: "Internet Security", sessions: 524697, sessionsChange: 22.1, revenue: 198432, revenueChange: 25.8, avgRanking: 18.3, rankingChange: 3 },
  { product: "Mobile Security", sessions: 346938, sessionsChange: 18.9, revenue: 125674, revenueChange: 21.3, avgRanking: 21.2, rankingChange: 2 },
  { product: "Safe Connect VPN", sessions: 289156, sessionsChange: 35.4, revenue: 98234, revenueChange: 42.1, avgRanking: 24.8, rankingChange: 5 },
  { product: "Small Business", sessions: 187423, sessionsChange: 6.7, revenue: 156789, revenueChange: 8.9, avgRanking: 19.5, rankingChange: 0 }
];

const mockCountryData: CountryData[] = [
  { country: "United States", sessions: 1842156, sessionsChange: 14.3, revenue: 642891, revenueChange: 16.8, avgRanking: 9.2, rankingChange: 1 },
  { country: "United Kingdom", sessions: 423789, sessionsChange: 18.7, revenue: 189432, revenueChange: 22.1, avgRanking: 12.8, rankingChange: 2 },
  { country: "Canada", sessions: 298654, sessionsChange: 11.2, revenue: 134567, revenueChange: 13.5, avgRanking: 11.5, rankingChange: 1 },
  { country: "Australia", sessions: 256187, sessionsChange: 25.6, revenue: 112890, revenueChange: 28.9, avgRanking: 14.2, rankingChange: 3 },
  { country: "Germany", sessions: 198732, sessionsChange: 8.9, revenue: 89456, revenueChange: 10.3, avgRanking: 16.7, rankingChange: 0 }
];

export const SessionsRevenueRankings: React.FC = () => {
  const [viewMode, setViewMode] = useState<'keyword' | 'product' | 'country'>('keyword');
  const displayData = mockSessionsData;

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getChangeColor = (change: number) => {
    if (change > 0) return "text-success-600";
    if (change < 0) return "text-danger-600";
    return "text-warning-600";
  };

  const getChangeIcon = (change: number) => {
    if (change > 0) return "lucide:trending-up";
    if (change < 0) return "lucide:trending-down";
    return "lucide:minus";
  };

  return (
    <Card>
      <CardHeader className="px-6 py-4">
        <div className="flex justify-between items-center w-full">
          <h4 className="text-lg font-semibold">Sessions, Revenue, Rankings</h4>
          <div className="flex items-center gap-3">
            <div className="flex border border-gray-200 rounded-md overflow-hidden">
              <button 
                className={`px-3 py-1 text-sm ${viewMode === 'keyword' ? 'bg-primary-500 text-white' : 'bg-white text-gray-600'}`}
                onClick={() => setViewMode('keyword')}
              >
                By Keyword
              </button>
              <button 
                className={`px-3 py-1 text-sm ${viewMode === 'product' ? 'bg-primary-500 text-white' : 'bg-white text-gray-600'}`}
                onClick={() => setViewMode('product')}
              >
                By Product
              </button>
              <button 
                className={`px-3 py-1 text-sm ${viewMode === 'country' ? 'bg-primary-500 text-white' : 'bg-white text-gray-600'}`}
                onClick={() => setViewMode('country')}
              >
                By Country
              </button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {viewMode === 'keyword' ? 'Keyword' : viewMode === 'product' ? 'Product' : 'Country'}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sessions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {viewMode === 'keyword' ? 'Ranking' : 'Avg. Ranking'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {viewMode === 'keyword' && displayData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.keyword}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>{formatNumber(row.sessions)}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(row.sessionsChange)}`}>
                        <Icon icon={getChangeIcon(row.sessionsChange)} size={12} />
                        {row.sessionsChange > 0 ? '+' : ''}{row.sessionsChange}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>${formatNumber(row.revenue)}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(row.revenueChange)}`}>
                        <Icon icon={getChangeIcon(row.revenueChange)} size={12} />
                        {row.revenueChange > 0 ? '+' : ''}{row.revenueChange}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>#{row.ranking}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(-row.rankingChange)}`}>
                        <Icon icon={getChangeIcon(-row.rankingChange)} size={12} />
                        {row.rankingChange > 0 ? '+' : ''}{row.rankingChange}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {viewMode === 'product' && mockProductData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>{formatNumber(row.sessions)}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(row.sessionsChange)}`}>
                        <Icon icon={getChangeIcon(row.sessionsChange)} size={12} />
                        {row.sessionsChange > 0 ? '+' : ''}{row.sessionsChange}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>${formatNumber(row.revenue)}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(row.revenueChange)}`}>
                        <Icon icon={getChangeIcon(row.revenueChange)} size={12} />
                        {row.revenueChange > 0 ? '+' : ''}{row.revenueChange}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>#{row.avgRanking}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(-row.rankingChange)}`}>
                        <Icon icon={getChangeIcon(-row.rankingChange)} size={12} />
                        {row.rankingChange > 0 ? '+' : ''}{row.rankingChange}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
              {viewMode === 'country' && mockCountryData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>{formatNumber(row.sessions)}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(row.sessionsChange)}`}>
                        <Icon icon={getChangeIcon(row.sessionsChange)} size={12} />
                        {row.sessionsChange > 0 ? '+' : ''}{row.sessionsChange}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>${formatNumber(row.revenue)}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(row.revenueChange)}`}>
                        <Icon icon={getChangeIcon(row.revenueChange)} size={12} />
                        {row.revenueChange > 0 ? '+' : ''}{row.revenueChange}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>#{row.avgRanking}</span>
                      <span className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(-row.rankingChange)}`}>
                        <Icon icon={getChangeIcon(-row.rankingChange)} size={12} />
                        {row.rankingChange > 0 ? '+' : ''}{row.rankingChange}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};
