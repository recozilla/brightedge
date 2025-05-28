import React from "react";
import { Card, CardBody, CardHeader, Tooltip, Badge, Tabs, Tab, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Icon } from "@iconify/react";
import { TrafficTrendChart } from "./charts/traffic-trend-chart";
import { PageHealthMatrix } from "./page-health-matrix";
import { DomainData } from "../types/domain-data";

interface PerformanceTabProps {
  data: DomainData;
  domain: string;
}

export const PerformanceTab: React.FC<PerformanceTabProps> = ({ data, domain }) => {
  const [selected, setSelected] = React.useState("global");

  return (
    <div className="space-y-8 py-4">
      <div className="grid grid-cols-4 gap-6">
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
                <p className="text-sm text-gray-600 mb-1">Clicks</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold">2.4M</p>
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
                  <Badge color="danger" variant="flat" className="gap-1">
                    <Icon icon="lucide:trending-down" size={14} />
                    <span>-0.3%</span>
                  </Badge>
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
      
      <Card>
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-base font-medium">Traffic & Keyword Inventory</h4>
            <div className="flex items-center gap-3">
              <select className="text-sm border border-gray-200 rounded-md px-2 py-1">
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 12 months</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <Tabs 
            aria-label="Traffic View Options" 
            selectedKey={selected} 
            onSelectionChange={setSelected}
            color="primary"
            variant="underlined"
            size="sm"
            classNames={{
              tabList: "gap-6",
              cursor: "w-full",
              tab: "max-w-fit px-0 h-10"
            }}
          >
            <Tab key="global" title="Global">
              <div className="pt-4">
                <Table removeWrapper aria-label="Global traffic data">
                  <TableHeader>
                    <TableColumn>Metric</TableColumn>
                    <TableColumn>Value</TableColumn>
                    <TableColumn>Change</TableColumn>
                    <TableColumn>Trend</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="sessions">
                      <TableCell>Sessions</TableCell>
                      <TableCell>3,842,156</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+12.4%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="h-6 bg-gray-50 rounded-md w-24"></div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="clicks">
                      <TableCell>Clicks</TableCell>
                      <TableCell>2,438,921</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+9.2%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="h-6 bg-gray-50 rounded-md w-24"></div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="revenue">
                      <TableCell>Organic Revenue</TableCell>
                      <TableCell>$1,238,456</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+8.7%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="h-6 bg-gray-50 rounded-md w-24"></div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="ctr">
                      <TableCell>CTR</TableCell>
                      <TableCell>4.8%</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-danger-600">
                          <Icon icon="lucide:trending-down" size={14} />
                          <span>-0.3%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="h-6 bg-gray-50 rounded-md w-24"></div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="avgrank">
                      <TableCell>Average Rank</TableCell>
                      <TableCell>14.3</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-danger-600">
                          <Icon icon="lucide:trending-down" size={14} />
                          <span>+2.1</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="h-6 bg-gray-50 rounded-md w-24"></div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Tab>
            <Tab key="product" title="By Product">
              <div className="pt-4">
                <Table removeWrapper aria-label="Product traffic data">
                  <TableHeader>
                    <TableColumn>Product</TableColumn>
                    <TableColumn>Sessions</TableColumn>
                    <TableColumn>Revenue</TableColumn>
                    <TableColumn>Avg. Rank</TableColumn>
                    <TableColumn>Change</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="total">
                      <TableCell>Total Protection</TableCell>
                      <TableCell>1,245,632</TableCell>
                      <TableCell>$542,891</TableCell>
                      <TableCell>8.4</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+15.2%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="livesafe">
                      <TableCell>LiveSafe</TableCell>
                      <TableCell>982,415</TableCell>
                      <TableCell>$328,764</TableCell>
                      <TableCell>12.1</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+8.7%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="antivirus">
                      <TableCell>Antivirus Plus</TableCell>
                      <TableCell>845,328</TableCell>
                      <TableCell>$218,432</TableCell>
                      <TableCell>15.8</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-danger-600">
                          <Icon icon="lucide:trending-down" size={14} />
                          <span>-3.2%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="webadvisor">
                      <TableCell>WebAdvisor</TableCell>
                      <TableCell>421,843</TableCell>
                      <TableCell>$98,215</TableCell>
                      <TableCell>18.6</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+5.4%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="mobile">
                      <TableCell>Mobile Security</TableCell>
                      <TableCell>346,938</TableCell>
                      <TableCell>$50,154</TableCell>
                      <TableCell>21.2</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+18.9%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Tab>
            <Tab key="country" title="By Country">
              <div className="pt-4">
                <Table removeWrapper aria-label="Country traffic data">
                  <TableHeader>
                    <TableColumn>Country</TableColumn>
                    <TableColumn>Sessions</TableColumn>
                    <TableColumn>Revenue</TableColumn>
                    <TableColumn>Avg. Rank</TableColumn>
                    <TableColumn>Change</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="us">
                      <TableCell>United States</TableCell>
                      <TableCell>1,842,156</TableCell>
                      <TableCell>$842,891</TableCell>
                      <TableCell>9.2</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+10.8%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="uk">
                      <TableCell>United Kingdom</TableCell>
                      <TableCell>582,415</TableCell>
                      <TableCell>$128,764</TableCell>
                      <TableCell>11.3</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+7.2%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="ca">
                      <TableCell>Canada</TableCell>
                      <TableCell>345,328</TableCell>
                      <TableCell>$98,432</TableCell>
                      <TableCell>12.8</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+5.1%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="au">
                      <TableCell>Australia</TableCell>
                      <TableCell>221,843</TableCell>
                      <TableCell>$58,215</TableCell>
                      <TableCell>14.6</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-danger-600">
                          <Icon icon="lucide:trending-down" size={14} />
                          <span>-2.3%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                    <TableRow key="de">
                      <TableCell>Germany</TableCell>
                      <TableCell>196,938</TableCell>
                      <TableCell>$42,154</TableCell>
                      <TableCell>18.2</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-success-600">
                          <Icon icon="lucide:trending-up" size={14} />
                          <span>+12.4%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Tab>
          </Tabs>
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
    </div>
  );
};