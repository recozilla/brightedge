
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

export const SessionsRevenueRankings: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? mockSessionsData : mockSessionsData.slice(0, 5);

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
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sessions</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ranking</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {displayData.map((row, index) => (
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
            </tbody>
          </table>
          {!showAll && mockSessionsData.length > 5 && (
            <div className="px-6 py-4 border-t border-gray-200 text-center">
              <Button 
                variant="light" 
                color="primary" 
                onClick={() => setShowAll(true)}
                className="text-sm"
              >
                View all ({mockSessionsData.length - 5} more)
              </Button>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
