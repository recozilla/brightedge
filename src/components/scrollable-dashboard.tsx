import React from "react";
import { Divider, Badge, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { ExecutiveSnapshot } from "./executive-snapshot";
import { PerformanceSection } from "./performance-section";
import { QuickWinsSection } from "./quick-wins-section";
import { MediumTermPlaysSection } from "./medium-term-plays-section";
import { StrategicBetsSection } from "./strategic-bets-section";
import { DomainData } from "../types/domain-data";

interface ScrollableDashboardProps {
  domain: string;
  data: DomainData;
}

export const ScrollableDashboard: React.FC<ScrollableDashboardProps> = ({ domain, data }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-1">Domain Analysis: {domain}</h1>
        <p className="text-gray-500">
          Last updated: {new Date().toLocaleDateString()} • Data sources: BrightEdge Data Cube, Instant SERP, ContentIQ
        </p>
      </div>

      <div className="space-y-12">
        <section id="executive-snapshot">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-lg">1</div>
            <h2 className="text-2xl font-semibold">Competitive Insight</h2>
          </div>
          <ExecutiveSnapshot data={data} domain={domain} />
        </section>

        <Divider className="my-10" />

        <section id="performance">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-lg">2</div>
            <h2 className="text-2xl font-semibold">Current Performance</h2>
          </div>
          <PerformanceSection data={data} domain={domain} />
        </section>

        <Divider className="my-10" />

        <section id="quick-wins">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-success-100 text-success-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-lg">3</div>
            <h2 className="text-2xl font-semibold">Quick Wins</h2>
          </div>
          <QuickWinsSection data={data} domain={domain} />
        </section>

        <Divider className="my-10" />

        <section id="medium-term-plays">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-warning-100 text-warning-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-lg">4</div>
            <h2 className="text-2xl font-semibold">Medium-Term Plays</h2>
          </div>
          <MediumTermPlaysSection data={data} domain={domain} />
        </section>

        <Divider className="my-10" />

        <section id="strategic-bets">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-secondary-100 text-secondary-600 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-lg">5</div>
            <h2 className="text-2xl font-semibold">Strategic Bets (3-12 months)</h2>
          </div>
          <StrategicBetsSection data={data} domain={domain} />
        </section>
      </div>
    </div>
  );
};