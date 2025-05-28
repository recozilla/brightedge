import React from "react";
import { Card, CardBody, CardHeader, Tooltip, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CompetitiveMarketMap } from "./charts/competitive-market-map";
import { SerpFeatureOwnership } from "./serp-feature-ownership";
import { DomainData } from "../types/domain-data";

interface CompetitiveInsightProps {
  data: DomainData;
  domain: string;
}

export const CompetitiveInsight: React.FC<CompetitiveInsightProps> = ({ data, domain }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <Card className="bg-gradient-to-br from-primary-50 to-white">
          <CardBody className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-1">Share of Voice</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">{data.shareOfVoice}%</p>
                  <Badge color="success" variant="flat" className="gap-1">
                    <Icon icon="lucide:trending-up" size={14} />
                    <span>+2.3%</span>
                  </Badge>
                </div>
              </div>
              <Tooltip content="Your brand's visibility compared to competitors across top 50K keywords">
                <div className="text-gray-400 cursor-help">
                  <Icon icon="lucide:info" />
                </div>
              </Tooltip>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Ranked #2 in category (Leader: Norton at 28.4%)
            </p>
          </CardBody>
        </Card>
        
        <Card className="bg-gradient-to-br from-success-50 to-white">
          <CardBody className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-1">Quick Growth Upside</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">$4.2M</p>
                  <span className="text-xs text-gray-500">per year</span>
                </div>
              </div>
              <Tooltip content="Potential revenue from improving rank 11-20 keywords to top positions">
                <div className="text-gray-400 cursor-help">
                  <Icon icon="lucide:info" />
                </div>
              </Tooltip>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Based on 312 keywords with high conversion potential
            </p>
          </CardBody>
        </Card>
        
        <Card className="bg-gradient-to-br from-secondary-50 to-white">
          <CardBody className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-1">LLM Citation Share</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">{data.llmCitationShare}%</p>
                  <Badge color="danger" variant="flat" className="gap-1">
                    <Icon icon="lucide:trending-down" size={14} />
                    <span>-1.7%</span>
                  </Badge>
                </div>
              </div>
              <Tooltip content="How often your domain is cited in AI responses compared to competitors">
                <div className="text-gray-400 cursor-help">
                  <Icon icon="lucide:info" />
                </div>
              </Tooltip>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Across GPT-4o, Gemini, Claude (30-day average)
            </p>
          </CardBody>
        </Card>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-base font-medium">Competitive Market Map</h4>
            <Tooltip content="Bubble size represents wasted paid spend where organic ranks <10">
              <div className="text-gray-400 cursor-help">
                <Icon icon="lucide:info" />
              </div>
            </Tooltip>
          </div>
        </CardHeader>
        <CardBody className="px-4 pb-4 pt-0">
          <CompetitiveMarketMap data={data.competitiveData} domain={domain} />
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-base font-medium">SERP Feature Ownership</h4>
            <Tooltip content="Your presence in key SERP features compared to competitors">
              <div className="text-gray-400 cursor-help">
                <Icon icon="lucide:info" />
              </div>
            </Tooltip>
          </div>
        </CardHeader>
        <CardBody className="px-4 pb-4 pt-0">
          <SerpFeatureOwnership data={data.serpFeatures} />
        </CardBody>
      </Card>
    </div>
  );
};