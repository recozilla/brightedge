import React from "react";
import { Card, CardBody, CardHeader, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Badge, Button, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";

interface TopPerformingKeywordsProps {
  domain: string;
}

export const TopPerformingKeywords: React.FC<TopPerformingKeywordsProps> = ({ domain }) => {
  // Sample data for top performing keywords
  const topKeywords = [
    {
      keyword: "mcafee antivirus",
      rank: 1,
      searchVolume: 74000,
      traffic: 28500,
      conversion: 4.8,
      revenue: 342000,
      trend: "up",
      trendValue: 12.4,
      productLine: "Antivirus"
    },
    {
      keyword: "mcafee total protection",
      rank: 1,
      searchVolume: 58000,
      traffic: 22100,
      conversion: 5.2,
      revenue: 287300,
      trend: "up",
      trendValue: 8.7,
      productLine: "Total Protection"
    },
    {
      keyword: "antivirus software",
      rank: 3,
      searchVolume: 48000,
      traffic: 15400,
      conversion: 3.9,
      revenue: 150200,
      trend: "up",
      trendValue: 5.3,
      productLine: "Antivirus"
    },
    {
      keyword: "best antivirus",
      rank: 4,
      searchVolume: 62000,
      traffic: 18600,
      conversion: 3.2,
      revenue: 148800,
      trend: "down",
      trendValue: 2.1,
      productLine: "Antivirus"
    },
    {
      keyword: "internet security",
      rank: 2,
      searchVolume: 38000,
      traffic: 14800,
      conversion: 4.1,
      revenue: 151960,
      trend: "up",
      trendValue: 9.8,
      productLine: "Internet Security"
    },
    {
      keyword: "computer protection",
      rank: 3,
      searchVolume: 32000,
      traffic: 10200,
      conversion: 3.7,
      revenue: 94350,
      trend: "up",
      trendValue: 3.2,
      productLine: "Total Protection"
    },
    {
      keyword: "virus protection",
      rank: 2,
      searchVolume: 29000,
      traffic: 11300,
      conversion: 4.3,
      revenue: 121475,
      trend: "down",
      trendValue: 1.5,
      productLine: "Antivirus"
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-white">
      <CardHeader className="px-6 py-4">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <h4 className="text-base font-medium">Top Performing Keywords</h4>
            <Badge color="success" variant="flat">Driving 65% of Revenue</Badge>
          </div>
          <div className="flex items-center gap-3">
            <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last 12 months</option>
            </select>
            <Button
              size="sm"
              variant="flat"
              color="primary"
              startContent={<Icon icon="lucide:download" size={16} />}
            >
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-6 pb-6 pt-0">
        <Table 
          removeWrapper 
          aria-label="Top Performing Keywords"
          classNames={{
            th: "bg-default-50"
          }}
        >
          <TableHeader>
            <TableColumn>Keyword</TableColumn>
            <TableColumn>Rank</TableColumn>
            <TableColumn>Search Volume</TableColumn>
            <TableColumn>Monthly Traffic</TableColumn>
            <TableColumn>Conversion Rate</TableColumn>
            <TableColumn>Est. Revenue</TableColumn>
            <TableColumn>Product Line</TableColumn>
            <TableColumn>Trend</TableColumn>
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {topKeywords.map((keyword, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="font-medium">{keyword.keyword}</div>
                </TableCell>
                <TableCell>
                  <Badge 
                    color={keyword.rank <= 3 ? "success" : "primary"} 
                    variant="flat"
                  >
                    {keyword.rank}
                  </Badge>
                </TableCell>
                <TableCell>{keyword.searchVolume.toLocaleString()}</TableCell>
                <TableCell>{keyword.traffic.toLocaleString()}</TableCell>
                <TableCell>{keyword.conversion}%</TableCell>
                <TableCell>${keyword.revenue.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge 
                    color="secondary" 
                    variant="flat"
                  >
                    {keyword.productLine}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className={`flex items-center gap-1 ${keyword.trend === 'up' ? 'text-success-600' : 'text-danger-600'}`}>
                    <Icon icon={`lucide:trending-${keyword.trend}`} size={14} />
                    <span>{keyword.trendValue}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="View Performance Details">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:bar-chart-2" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex justify-center mt-4">
          <Button variant="light" color="primary">
            View All Keywords
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};