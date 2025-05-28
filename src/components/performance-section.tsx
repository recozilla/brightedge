import React from "react";
import { Card, CardBody, CardHeader, Tooltip, Badge, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { TrafficTrendChart } from "./charts/traffic-trend-chart";
import { PageHealthMatrix } from "./page-health-matrix";
import { DomainData } from "../types/domain-data";
import { TopPerformingKeywords } from "./top-performing-keywords";

interface PerformanceSectionProps {
  data: DomainData;
  domain: string;
}

export const PerformanceSection: React.FC<PerformanceSectionProps> = ({ data, domain }) => {
  const [viewMode, setViewMode] = React.useState("product");

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardBody className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600 mb-1">Organic Sessions</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">3.8M</p>
                  <span className="text-success-600 text-sm font-medium flex items-center gap-1">
                    <Icon icon="lucide:trending-up" size={14} />
                    +12.4%
                  </span>
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
                <p className="text-sm text-gray-600 mb-1">Clicks</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">2.4M</p>
                  <span className="text-success-600 text-sm font-medium flex items-center gap-1">
                    <Icon icon="lucide:trending-up" size={14} />
                    +8.2%
                  </span>
                  <Badge color="success" variant="flat" className="gap-1">
                    <Icon icon="lucide:trending-up" size={14} />
                    <span>+9.2%</span>
                  </Badge>
                </div>
              </div>
              <Tooltip content="Total clicks from search results">
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
                <p className="text-sm text-gray-600 mb-1">CTR</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">4.8%</p>
                  <span className="text-danger-600 text-sm font-medium flex items-center gap-1">
                    <Icon icon="lucide:trending-down" size={14} />
                    -0.3%
                  </span>
                </div>
              </div>
              <Tooltip content="Click-through rate from search results">
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
      
      <div className="grid grid-cols-4 gap-6 h-[160px]">
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
            <div className="h-8 bg-gray-50 rounded-md mb-2"></div>
            <div className="space-y-1">
              <div className="text-xs">
                <span className="font-medium">Top query:</span> mcafee antivirus
              </div>
              <div className="text-xs">
                <span className="font-medium">Click share:</span> 24.7%
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card className="bg-gradient-to-br from-pink-50 to-white">
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
            <div className="h-8 bg-gray-50 rounded-md mb-2"></div>
            <div className="space-y-1">
              <div className="text-xs">
                <span className="font-medium">Top query:</span> is mcafee worth it
              </div>
              <div className="text-xs">
                <span className="font-medium">Click share:</span> 12.3%
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card className="bg-gradient-to-br from-red-50 to-white">
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
            <div className="h-8 bg-gray-50 rounded-md mb-2"></div>
            <div className="space-y-1">
              <div className="text-xs">
                <span className="font-medium">Top query:</span> mcafee review
              </div>
              <div className="text-xs">
                <span className="font-medium">Click share:</span> 8.9%
              </div>
            </div>
          </CardBody>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-50 to-white">
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
            <div className="h-8 bg-gray-50 rounded-md mb-2"></div>
            <div className="space-y-1">
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
      
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Icon icon="lucide:trending-up" className="text-primary-500" />
          <h3 className="text-lg font-semibold">Top Performing Keywords</h3>
        </div>
        <TopPerformingKeywords domain={domain} />
      </div>
      
      <Card>
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-base font-medium">Sessions, Revenue, Rankings</h4>
            <div className="flex items-center gap-3">
              <div className="flex border border-gray-200 rounded-md overflow-hidden">
                <button 
                  className={`px-3 py-1 text-sm ${viewMode === 'product' ? 'bg-primary-500 text-white' : 'bg-white text-gray-600'}`}
                  onClick={() => setViewMode('product')}
                >
                  By Product
                </button>
                <button 
                  className={`px-3 py-1 text-sm ${viewMode === 'country' ? 'bg-primary-500 text-white' : 'bg-white text-gray-600'}`}
                  onClick={() => setViewMode('country')}
                >
                  By Country
                </button>
              </div>
              <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 12 months</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          {viewMode === "product" && (
            <Table removeWrapper aria-label="Product traffic data">
              <TableHeader>
                <TableColumn>Product</TableColumn>
                <TableColumn>Sessions</TableColumn>
                <TableColumn>Revenue</TableColumn>
                <TableColumn>Avg. Rank</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="total">
                  <TableCell>Total Protection</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-between">
                      <span>1,245,632</span>
                      <Badge color="success" variant="flat" size="sm">+15.2%</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-between">
                      <span>$542,891</span>
                      <Badge color="success" variant="flat" size="sm">+12.8%</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-between">
                      <span>8.4</span>
                      <Badge color="success" variant="flat" size="sm">+0.6</Badge>
                    </div>
                  </TableCell>
                </TableRow>
                
                {/* ... similar format for other product rows ... */}
              </TableBody>
            </Table>
          )}
          
          {viewMode === "country" && (
            <Table removeWrapper aria-label="Country traffic data">
              <TableHeader>
                <TableColumn>Country</TableColumn>
                <TableColumn>Sessions</TableColumn>
                <TableColumn>Revenue</TableColumn>
                <TableColumn>Avg. Rank</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="us">
                  <TableCell>United States</TableCell>
                  <TableCell>
                    <div className="flex items-center justify-between">
                      <span>1,842,156</span>
                      <Badge color="success" variant="flat" size="sm">+10.8%</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-between">
                      <span>$842,891</span>
                      <Badge color="success" variant="flat" size="sm">+9.4%</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-between">
                      <span>9.2</span>
                      <Badge color="success" variant="flat" size="sm">+0.8</Badge>
                    </div>
                  </TableCell>
                </TableRow>
                
                {/* ... similar format for other country rows ... */}
              </TableBody>
            </Table>
          )}
          
          <div className="flex justify-center mt-4">
            <Button variant="light" color="primary">
              View All
            </Button>
          </div>
        </CardBody>
      </Card>
      
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
      
      <Card>
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-base font-medium">Page Health × Keyword Matrix</h4>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-success-500"></span>
                <span className="text-sm text-gray-600">Ranking + Converting</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-warning-500"></span>
                <span className="text-sm text-gray-600">Ranking but Low CVR</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-danger-500"></span>
                <span className="text-sm text-gray-600">Low Rank</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <PageHealthMatrix data={data.pageHealthMatrix} />
        </CardBody>
      </Card>
      
      <Card className="bg-gradient-to-r from-primary-50 via-white to-warning-50">
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-base font-medium">Proactive Insights</h4>
            <Badge color="warning" variant="flat">4 New Insights</Badge>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="grid grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Icon icon="lucide:alert-triangle" className="text-warning-500" size={20} />
                <h5 className="font-medium">Traffic at Risk</h5>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold text-warning-600">18%</span> of your organic traffic is at risk due to increasing competition in the "endpoint security" category.
              </p>
              <Button size="sm" color="primary" variant="flat">View Details</Button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Icon icon="lucide:trending-up" className="text-success-500" size={20} />
                <h5 className="font-medium">Emerging Keyword Opportunities</h5>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-semibold text-success-600">24 new keywords</span> related to "ransomware protection" are showing increasing search volume.
              </p>
              <Button size="sm" color="primary" variant="flat">Explore Keywords</Button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Icon icon="lucide:activity" className="text-danger-500" size={20} />
                <h5 className="font-medium">Algorithm Update Impact</h5>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Recent Google update has affected <span className="font-semibold text-danger-600">12 key pages</span>, primarily in the mobile security section.
              </p>
              <Button size="sm" color="primary" variant="flat">View Affected Pages</Button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 bg-white">
              <div className="flex items-center gap-2 mb-3">
                <Icon icon="lucide:sparkles" className="text-primary-500" size={20} />
                <h5 className="font-medium">AI Citation Opportunity</h5>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Creating content on <span className="font-semibold text-primary-600">zero-day vulnerabilities</span> could increase your LLM citation share by up to 8%.
              </p>
              <Button size="sm" color="primary" variant="flat">Generate Content Brief</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};