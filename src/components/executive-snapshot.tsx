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
    <div className="py-4">
      <CompetitiveInsight data={data} domain={domain} />
    </div>
  );
};