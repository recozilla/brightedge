import React from "react";
import { Card, CardBody, CardHeader, Tooltip, Badge, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { TopicClusterVisualization } from "./charts/topic-cluster-visualization";
import { InternationalExpansionGrid } from "./international-expansion-grid";
import { AiContentHub } from "./ai-content-hub";
import { DomainData } from "../types/domain-data";

interface StrategicBetsSectionProps {
  data: DomainData;
  domain: string;
}

export const StrategicBetsSection: React.FC<StrategicBetsSectionProps> = ({ data, domain }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-600">
          These opportunities require more resources but offer significant long-term growth potential.
        </p>
        
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            variant="flat"
            color="primary"
            startContent={<Icon icon="lucide:download" size={16} />}
          >
            Export Strategic Plan
          </Button>
          <Button
            size="sm"
            color="primary"
            startContent={<Icon icon="lucide:calendar" size={16} />}
          >
            Schedule Review
          </Button>
        </div>
      </div>
      
      <Card className="bg-gradient-to-br from-primary-50 to-white">
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:network" className="text-primary-500" />
              <h4 className="text-base font-medium">Topic Cluster White-Space</h4>
              <Badge color="primary" variant="flat">High Impact</Badge>
            </div>
            <div className="flex items-center gap-3">
              <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
                <option>Search Volume > 100K</option>
                <option>Search Volume > 50K</option>
                <option>Search Volume > 10K</option>
              </select>
              <Button
                size="sm"
                color="primary"
                startContent={<Icon icon="lucide:sparkles" size={16} />}
              >
                Generate Content Plan
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              The semantic graph below shows high-volume topic clusters where you have minimal or no content coverage. These represent significant growth opportunities.
            </p>
          </div>
          
          <TopicClusterVisualization />
          
          <div className="mt-6 grid grid-cols-3 gap-6">
            <Card>
              <CardBody className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  <h5 className="font-medium">Endpoint Security</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Search Volume</span>
                    <span className="font-medium">145,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Competitor Coverage</span>
                    <span className="font-medium">84%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Your Coverage</span>
                    <span className="font-medium text-danger-600">12%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Potential</span>
                    <span className="font-medium">$1.2M</span>
                  </div>
                </div>
                <Button color="primary" size="sm" className="w-full mt-4">
                  View Content Plan
                </Button>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                  <h5 className="font-medium">Zero Trust Security</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Search Volume</span>
                    <span className="font-medium">128,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Competitor Coverage</span>
                    <span className="font-medium">76%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Your Coverage</span>
                    <span className="font-medium text-danger-600">8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Potential</span>
                    <span className="font-medium">$950K</span>
                  </div>
                </div>
                <Button color="primary" size="sm" className="w-full mt-4">
                  View Content Plan
                </Button>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-success-500"></div>
                  <h5 className="font-medium">IoT Security</h5>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Search Volume</span>
                    <span className="font-medium">112,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Competitor Coverage</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Your Coverage</span>
                    <span className="font-medium text-danger-600">5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Potential</span>
                    <span className="font-medium">$820K</span>
                  </div>
                </div>
                <Button color="primary" size="sm" className="w-full mt-4">
                  View Content Plan
                </Button>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
      
      <Card className="bg-white border border-gray-200">
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:sparkles" className="text-secondary-500" />
              <h4 className="text-base font-medium">AI-First Content Hub</h4>
              <Badge color="primary" variant="flat">High Impact</Badge>
            </div>
            <div className="flex items-center gap-3">
              <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
                <option>All Content Types</option>
                <option>Research Papers</option>
                <option>Data Studies</option>
              </select>
              <Button
                size="sm"
                color="primary"
                startContent={<Icon icon="lucide:sparkles" size={16} />}
              >
                Generate AI Content Brief
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              This analysis identifies content opportunities specifically designed to increase your visibility in AI responses. Focus on creating E-E-A-T content with original research, data, and expert insights.
            </p>
          </div>
          
          <AiContentHub />
        </CardBody>
      </Card>
      
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">
              <Icon icon="lucide:globe" className="text-blue-500" />
              <h4 className="text-base font-medium">International Expansion</h4>
              <Badge color="primary" variant="flat">Medium Impact</Badge>
            </div>
            <div className="flex items-center gap-3">
              <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
                <option>All Languages</option>
                <option>European Languages</option>
                <option>Asian Languages</option>
              </select>
              <Button
                size="sm"
                color="primary"
                startContent={<Icon icon="lucide:globe" size={16} />}
              >
                Generate Localization Plan
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              This analysis shows your visibility compared to local competitors across 10 languages. Markets with high search volume and low competition represent the best expansion opportunities.
            </p>
          </div>
          
          <InternationalExpansionGrid />
        </CardBody>
      </Card>
    </div>
  );
};