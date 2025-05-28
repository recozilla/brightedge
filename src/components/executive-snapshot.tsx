import React from "react";
import { Card, CardBody, CardHeader, Divider, Tooltip, Badge } from "@heroui/react";
import { Icon } from "@iconify/react";
import { CompetitiveInsight } from "./competitive-insight";
import { DomainData } from "../types/domain-data";

interface ExecutiveSnapshotProps {
  data: DomainData;
  domain: string;
}

export const ExecutiveSnapshot: React.FC<ExecutiveSnapshotProps> = ({ data, domain }) => {
  return (
    <div className="space-y-8 py-4">
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          <Tooltip content="Real-time volatility: Moderate (23% above baseline)">
            <Badge color="warning" variant="flat" className="cursor-help">
              <Icon icon="lucide:activity" className="mr-1" size={14} />
              SERP Volatility: Moderate
            </Badge>
          </Tooltip>
          
          <div className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900 bg-gray-50 px-3 py-1 rounded-md">
            <span>Industry: Cybersecurity</span>
            <Icon icon="lucide:chevron-down" size={16} />
          </div>
        </div>
      </div>
      
      <CompetitiveInsight data={data} domain={domain} />
    </div>
  );
};