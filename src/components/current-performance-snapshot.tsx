import React from "react";
import { Card, CardBody, CardHeader, Tooltip, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { TrafficTrendChart } from "./charts/traffic-trend-chart";
import { DomainData } from "../types/domain-data";
import { SessionsRevenueRankings } from "./sessions-revenue-rankings";

interface CurrentPerformanceSnapshotProps {
  data: DomainData;
}

export const CurrentPerformanceSnapshot: React.FC<CurrentPerformanceSnapshotProps> = ({ data }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Current Performance</h3>

      <div className="grid grid-cols-4 gap-6 mb-6">
        <Card>
          <CardBody className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-1">Organic Sessions</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">3.8M</p>
                  <Badge color="success" variant="flat" className="gap-1">
                    <Icon icon="lucide:trending-up" size={14} />
                    <span>+12.4%</span>
                  </Badge>
                </div>
              </div>
              <Tooltip content="Monthly organic traffic from all search engines">
                <div className="text-gray-400 cursor-help">
                  <Icon icon="lucide:info" />
                </div>
              </Tooltip>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Last 30 days vs previous period
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-1">Organic Revenue</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">$1.2M</p>
                  <Badge color="success" variant="flat" className="gap-1">
                    <Icon icon="lucide:trending-up" size={14} />
                    <span>+8.7%</span>
                  </Badge>
                </div>
              </div>
              <Tooltip content="Revenue attributed to organic search traffic">
                <div className="text-gray-400 cursor-help">
                  <Icon icon="lucide:info" />
                </div>
              </Tooltip>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Last 30 days vs previous period
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-1">Avg. Position</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">14.3</p>
                  <Badge color="danger" variant="flat" className="gap-1">
                    <Icon icon="lucide:trending-down" size={14} />
                    <span>+2.1</span>
                  </Badge>
                </div>
              </div>
              <Tooltip content="Average position across all tracked keywords">
                <div className="text-gray-400 cursor-help">
                  <Icon icon="lucide:info" />
                </div>
              </Tooltip>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Last 30 days vs previous period
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">3.2%</p>
                  <Badge color="success" variant="flat" className="gap-1">
                    <Icon icon="lucide:trending-up" size={14} />
                    <span>+0.4%</span>
                  </Badge>
                </div>
              </div>
              <Tooltip content="Percentage of organic visitors who convert">
                <div className="text-gray-400 cursor-help">
                  <Icon icon="lucide:info" />
                </div>
              </Tooltip>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Last 30 days vs previous period
            </p>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-6">
        <Card>
          <CardHeader className="px-6 py-4">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-base font-medium">Traffic Trend</h4>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary-500"></span>
                  <span className="text-sm text-gray-600">Organic Traffic</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-success-500"></span>
                  <span className="text-sm text-gray-600">Conversions</span>
                </div>
                <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last 12 months</option>
                </select>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-4 pb-4 pt-0">
            <TrafficTrendChart data={data.trafficTrend} />
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardHeader className="px-4 py-3">
            <h4 className="text-base font-medium">Google</h4>
          </CardHeader>
          <CardBody className="p-4 pt-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Search interest</span>
              <div className="flex items-center gap-1 text-success-600 text-sm">
                <Icon icon="lucide:trending-up" size={14} />
                <span>+8.3%</span>
              </div>
            </div>
            <div className="h-10 bg-gray-50 rounded-md mb-3"></div>
            <div className="space-y-2">
              <div className="text-xs">
                <span className="font-medium">Top query:</span> mcafee antivirus
              </div>
              <div className="text-xs">
                <span className="font-medium">Click share:</span> 24.7%
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="px-4 py-3">
            <h4 className="text-base font-medium">TikTok / Instagram</h4>
          </CardHeader>
          <CardBody className="p-4 pt-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Search interest</span>
              <div className="flex items-center gap-1 text-success-600 text-sm">
                <Icon icon="lucide:trending-up" size={14} />
                <span>+21.5%</span>
              </div>
            </div>
            <div className="h-10 bg-gray-50 rounded-md mb-3"></div>
            <div className="space-y-2">
              <div className="text-xs">
                <span className="font-medium">Top query:</span> is mcafee worth it
              </div>
              <div className="text-xs">
                <span className="font-medium">Click share:</span> 12.3%
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="px-4 py-3">
            <h4 className="text-base font-medium">YouTube</h4>
          </CardHeader>
          <CardBody className="p-4 pt-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Search interest</span>
              <div className="flex items-center gap-1 text-danger-600 text-sm">
                <Icon icon="lucide:trending-down" size={14} />
                <span>-3.2%</span>
              </div>
            </div>
            <div className="h-10 bg-gray-50 rounded-md mb-3"></div>
            <div className="space-y-2">
              <div className="text-xs">
                <span className="font-medium">Top query:</span> mcafee review
              </div>
              <div className="text-xs">
                <span className="font-medium">Click share:</span> 8.9%
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="px-4 py-3">
            <h4 className="text-base font-medium">ChatGPT</h4>
          </CardHeader>
          <CardBody className="p-4 pt-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Search interest</span>
              <div className="flex items-center gap-1 text-success-600 text-sm">
                <Icon icon="lucide:trending-up" size={14} />
                <span>+15.7%</span>
              </div>
            </div>
            <div className="h-10 bg-gray-50 rounded-md mb-3"></div>
            <div className="space-y-2">
              <div className="text-xs">
                <span className="font-medium">Top query:</span> best antivirus
              </div>
              <div className="text-xs">
                <span className="font-medium">Click share:</span> 18.2%
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};