import React, { useState } from "react";
import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

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

const mockProductData: ProductData[] = [
  {
    product: "Total Protection",
    sessions: 1245632,
    sessionsChange: 15.2,
    revenue: 542891,
    revenueChange: 18.4,
    avgRanking: 8.4,
    rankingChange: 2,
  },
  {
    product: "LiveSafe",
    sessions: 982415,
    sessionsChange: 12.8,
    revenue: 328764,
    revenueChange: 14.6,
    avgRanking: 12.1,
    rankingChange: 1,
  },
  {
    product: "Antivirus Plus",
    sessions: 756823,
    sessionsChange: 8.3,
    revenue: 245892,
    revenueChange: 11.2,
    avgRanking: 15.7,
    rankingChange: -1,
  },
  {
    product: "Internet Security",
    sessions: 524697,
    sessionsChange: 22.1,
    revenue: 198432,
    revenueChange: 25.8,
    avgRanking: 18.3,
    rankingChange: 3,
  },
  {
    product: "Mobile Security",
    sessions: 346938,
    sessionsChange: 18.9,
    revenue: 125674,
    revenueChange: 21.3,
    avgRanking: 21.2,
    rankingChange: 2,
  },
  {
    product: "Safe Connect VPN",
    sessions: 289156,
    sessionsChange: 35.4,
    revenue: 98234,
    revenueChange: 42.1,
    avgRanking: 24.8,
    rankingChange: 5,
  },
  {
    product: "Small Business Security",
    sessions: 187423,
    sessionsChange: 6.7,
    revenue: 156789,
    revenueChange: 8.9,
    avgRanking: 19.5,
    rankingChange: 0,
  },
  {
    product: "Endpoint Protection",
    sessions: 142356,
    sessionsChange: 28.3,
    revenue: 98765,
    revenueChange: 31.2,
    avgRanking: 22.1,
    rankingChange: 4,
  },
  {
    product: "WebAdvisor",
    sessions: 98234,
    sessionsChange: 5.4,
    revenue: 45123,
    revenueChange: 7.8,
    avgRanking: 26.3,
    rankingChange: -1,
  },
  {
    product: "Secure File Shredder",
    sessions: 76543,
    sessionsChange: 12.1,
    revenue: 34567,
    revenueChange: 15.6,
    avgRanking: 28.9,
    rankingChange: 2,
  },
];

const mockCountryData: CountryData[] = [
  {
    country: "United States",
    sessions: 1842156,
    sessionsChange: 14.3,
    revenue: 642891,
    revenueChange: 16.8,
    avgRanking: 9.2,
    rankingChange: 1,
  },
  {
    country: "United Kingdom",
    sessions: 423789,
    sessionsChange: 18.7,
    revenue: 189432,
    revenueChange: 22.1,
    avgRanking: 12.8,
    rankingChange: 2,
  },
  {
    country: "Canada",
    sessions: 298654,
    sessionsChange: 11.2,
    revenue: 134567,
    revenueChange: 13.5,
    avgRanking: 11.5,
    rankingChange: 1,
  },
  {
    country: "Australia",
    sessions: 256187,
    sessionsChange: 25.6,
    revenue: 112890,
    revenueChange: 28.9,
    avgRanking: 14.2,
    rankingChange: 3,
  },
  {
    country: "Germany",
    sessions: 198732,
    sessionsChange: 8.9,
    revenue: 89456,
    revenueChange: 10.3,
    avgRanking: 16.7,
    rankingChange: 0,
  },
  {
    country: "Japan",
    sessions: 187654,
    sessionsChange: 19.4,
    revenue: 76543,
    revenueChange: 23.7,
    avgRanking: 15.3,
    rankingChange: 2,
  },
  {
    country: "France",
    sessions: 156789,
    sessionsChange: 7.6,
    revenue: 67891,
    revenueChange: 9.2,
    avgRanking: 17.8,
    rankingChange: -1,
  },
  {
    country: "India",
    sessions: 134567,
    sessionsChange: 32.1,
    revenue: 45678,
    revenueChange: 38.4,
    avgRanking: 19.6,
    rankingChange: 4,
  },
  {
    country: "Brazil",
    sessions: 123456,
    sessionsChange: 15.8,
    revenue: 43210,
    revenueChange: 18.9,
    avgRanking: 20.1,
    rankingChange: 1,
  },
  {
    country: "Netherlands",
    sessions: 98765,
    sessionsChange: 13.2,
    revenue: 39876,
    revenueChange: 16.5,
    avgRanking: 18.4,
    rankingChange: 2,
  },
];

export const SessionsRevenueRankings: React.FC = () => {
  const [viewMode, setViewMode] = useState<"product" | "country">("product");

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

  const currentData =
    viewMode === "product" ? mockProductData : mockCountryData;

  return (
    <Card>
      <CardHeader className="px-6 py-4">
        <div className="flex justify-between items-center w-full">
          <h4 className="text-lg font-semibold">Sessions, Revenue, Rankings</h4>
          <div className="flex items-center gap-3">
            <div className="flex border border-gray-200 rounded-md overflow-hidden">
              <button
                className={`px-3 py-1 text-sm ${viewMode === "product" ? "bg-primary-500 text-white" : "bg-white text-gray-600"}`}
                onClick={() => setViewMode("product")}
              >
                By Product
              </button>
              <button
                className={`px-3 py-1 text-sm ${viewMode === "country" ? "bg-primary-500 text-white" : "bg-white text-gray-600"}`}
                onClick={() => setViewMode("country")}
              >
                By Country
              </button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="overflow-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {viewMode === "product" ? "Product" : "Country"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sessions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Ranking
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((row, index) => (
                <tr key={`${viewMode}-${index}`} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {viewMode === "product"
                      ? (row as ProductData).product
                      : (row as CountryData).country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>{formatNumber(row.sessions)}</span>
                      <span
                        className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(row.sessionsChange)}`}
                      >
                        <Icon
                          icon={getChangeIcon(row.sessionsChange)}
                          width={12}
                          height={12}
                        />
                        {row.sessionsChange > 0 ? "+" : ""}
                        {row.sessionsChange}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>${formatNumber(row.revenue)}</span>
                      <span
                        className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(row.revenueChange)}`}
                      >
                        <Icon
                          icon={getChangeIcon(row.revenueChange)}
                          width={12}
                          height={12}
                        />
                        {row.revenueChange > 0 ? "+" : ""}
                        {row.revenueChange}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center gap-2">
                      <span>#{row.avgRanking}</span>
                      <span
                        className={`text-xs font-medium flex items-center gap-1 ${getChangeColor(-row.rankingChange)}`}
                      >
                        <Icon
                          icon={getChangeIcon(-row.rankingChange)}
                          width={12}
                          height={12}
                        />
                        {row.rankingChange > 0 ? "+" : ""}
                        {row.rankingChange}
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
