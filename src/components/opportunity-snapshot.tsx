import React from "react";
import { Card, CardBody, CardHeader, Tooltip, Badge, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { DomainData } from "../types/domain-data";

interface OpportunitySnapshotProps {
  data: DomainData;
}

export const OpportunitySnapshot: React.FC<OpportunitySnapshotProps> = ({ data }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Opportunity</h3>
      
      <div className="grid grid-cols-3 gap-6">
        <Card>
          <CardHeader className="px-6 py-4">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-base font-medium">Immediate Gains</h4>
              <Badge color="success" variant="flat">Low Effort</Badge>
            </div>
          </CardHeader>
          <CardBody className="px-6 pb-6 pt-0">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:arrow-up-right" className="text-success-500" />
                    <span className="font-medium">Rank-11 Penalty</span>
                  </div>
                  <Tooltip content="Keywords ranking just off page 1 that can be easily improved">
                    <div className="text-gray-400 cursor-help">
                      <Icon icon="lucide:info" />
                    </div>
                  </Tooltip>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">312 keywords worth $3.4M ARR</span>
                    <Badge color="primary" variant="flat" size="sm">High Impact</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" color="primary">
                      View Keywords
                    </Button>
                    <Button size="sm" variant="flat" color="primary">
                      Export
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:layout" className="text-success-500" />
                    <span className="font-medium">Snippets to Steal</span>
                  </div>
                  <Tooltip content="Featured snippets where competitors rank but you're in top 5">
                    <div className="text-gray-400 cursor-help">
                      <Icon icon="lucide:info" />
                    </div>
                  </Tooltip>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">18 snippets; 3 FAQ schema fixes</span>
                    <Badge color="primary" variant="flat" size="sm">Medium Impact</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" color="primary">
                      View Opportunities
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:zap" className="text-success-500" />
                    <span className="font-medium">Autopilot Quick-Win</span>
                  </div>
                  <Tooltip content="Pages safe for automated optimization">
                    <div className="text-gray-400 cursor-help">
                      <Icon icon="lucide:info" />
                    </div>
                  </Tooltip>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">42 pages ready for optimization</span>
                    <Badge color="success" variant="flat" size="sm">$280K in 90d</Badge>
                  </div>
                  <Button size="sm" color="success" className="w-full">
                    Activate Autopilot
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader className="px-6 py-4">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-base font-medium">Medium-Term Plays</h4>
              <Badge color="warning" variant="flat">Medium Effort</Badge>
            </div>
          </CardHeader>
          <CardBody className="px-6 pb-6 pt-0">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:refresh-cw" className="text-warning-500" />
                    <span className="font-medium">Content Refresh Queue</span>
                  </div>
                  <Tooltip content="Pages with significant traffic decay year-over-year">
                    <div className="text-gray-400 cursor-help">
                      <Icon icon="lucide:info" />
                    </div>
                  </Tooltip>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">24 pages with >25% traffic decay</span>
                    <Badge color="danger" variant="flat" size="sm">$520K lost</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" color="primary">
                      View Pages
                    </Button>
                    <Button size="sm" variant="flat" color="primary">
                      Generate Briefs
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:link" className="text-warning-500" />
                    <span className="font-medium">Internal Link Sculptor</span>
                  </div>
                  <Tooltip content="AI-generated linking plan across feature pages & blogs">
                    <div className="text-gray-400 cursor-help">
                      <Icon icon="lucide:info" />
                    </div>
                  </Tooltip>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">86 linking opportunities found</span>
                    <Badge color="primary" variant="flat" size="sm">Medium Impact</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" color="primary">
                      View Plan
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:external-link" className="text-warning-500" />
                    <span className="font-medium">Backlink Gap</span>
                  </div>
                  <Tooltip content="Top referring domains competitors have that you don't">
                    <div className="text-gray-400 cursor-help">
                      <Icon icon="lucide:info" />
                    </div>
                  </Tooltip>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">38 high-authority domains</span>
                    <Badge color="primary" variant="flat" size="sm">High Impact</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" color="primary">
                      View Opportunities
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card>
          <CardHeader className="px-6 py-4">
            <div className="flex justify-between items-center w-full">
              <h4 className="text-base font-medium">Long-Term Bets</h4>
              <Badge color="danger" variant="flat">High Effort</Badge>
            </div>
          </CardHeader>
          <CardBody className="px-6 pb-6 pt-0">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:network" className="text-secondary-500" />
                    <span className="font-medium">Topic Cluster White-Space</span>
                  </div>
                  <Tooltip content="High-volume topics with no owned content">
                    <div className="text-gray-400 cursor-help">
                      <Icon icon="lucide:info" />
                    </div>
                  </Tooltip>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">3 clusters with >100K SV</span>
                    <Badge color="primary" variant="flat" size="sm">High Impact</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" color="primary">
                      View Clusters
                    </Button>
                    <Button size="sm" variant="flat" color="primary">
                      Generate Plan
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:globe" className="text-secondary-500" />
                    <span className="font-medium">International Expansion</span>
                  </div>
                  <Tooltip content="Visibility vs local competitors across languages">
                    <div className="text-gray-400 cursor-help">
                      <Icon icon="lucide:info" />
                    </div>
                  </Tooltip>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">10 languages analyzed</span>
                    <Badge color="primary" variant="flat" size="sm">Medium Impact</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" color="primary">
                      View Analysis
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:sparkles" className="text-secondary-500" />
                    <span className="font-medium">AI-First Content Hub</span>
                  </div>
                  <Tooltip content="LLM answer gap analysis and content recommendations">
                    <div className="text-gray-400 cursor-help">
                      <Icon icon="lucide:info" />
                    </div>
                  </Tooltip>
                </div>
                <div className="bg-gray-50 rounded-md p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">12 research papers, 8 data studies</span>
                    <Badge color="primary" variant="flat" size="sm">High Impact</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" color="primary">
                      View Recommendations
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};