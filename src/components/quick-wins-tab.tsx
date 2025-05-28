import React from "react";
import { Card, CardBody, CardHeader, Tooltip, Badge, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Switch } from "@heroui/react";
import { Icon } from "@iconify/react";
import { DomainData } from "../types/domain-data";

interface QuickWinsTabProps {
  data: DomainData;
  domain: string;
}

export const QuickWinsTab: React.FC<QuickWinsTabProps> = ({ data, domain }) => {
  const [autopilotEnabled, setAutopilotEnabled] = React.useState(false);
  
  return (
    <div className="space-y-8 py-4">
      <Card>
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-base font-medium">"Rank-11 Penalty" Keywords</h4>
              <Badge color="success" variant="flat">$3.4M ARR Potential</Badge>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="flat"
                color="primary"
                startContent={<Icon icon="lucide:download" size={16} />}
              >
                Export
              </Button>
              <Button
                size="sm"
                color="primary"
                startContent={<Icon icon="lucide:zap" size={16} />}
              >
                Apply Autopilot
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              These keywords rank just off page 1 (positions 11-20) and have high search volume. Improving these positions can yield significant traffic and revenue gains.
            </p>
          </div>
          
          <Table 
            removeWrapper 
            aria-label="Rank-11 Penalty Keywords"
            classNames={{
              th: "bg-default-50"
            }}
          >
            <TableHeader>
              <TableColumn>Keyword</TableColumn>
              <TableColumn>Search Volume</TableColumn>
              <TableColumn>Current Rank</TableColumn>
              <TableColumn>CTR Uplift</TableColumn>
              <TableColumn>Revenue Potential</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>best antivirus software</TableCell>
                <TableCell>74,000</TableCell>
                <TableCell>11</TableCell>
                <TableCell>+14.2%</TableCell>
                <TableCell>$428,000</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Autopilot">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:zap" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>antivirus comparison</TableCell>
                <TableCell>52,000</TableCell>
                <TableCell>12</TableCell>
                <TableCell>+12.8%</TableCell>
                <TableCell>$312,000</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Autopilot">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:zap" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>virus protection software</TableCell>
                <TableCell>48,000</TableCell>
                <TableCell>14</TableCell>
                <TableCell>+11.5%</TableCell>
                <TableCell>$286,000</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Autopilot">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:zap" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>computer security software</TableCell>
                <TableCell>41,000</TableCell>
                <TableCell>15</TableCell>
                <TableCell>+10.2%</TableCell>
                <TableCell>$246,000</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Autopilot">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:zap" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>internet security software</TableCell>
                <TableCell>38,000</TableCell>
                <TableCell>13</TableCell>
                <TableCell>+11.8%</TableCell>
                <TableCell>$228,000</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Autopilot">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:zap" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="flex justify-center mt-4">
            <Button variant="light" color="primary">
              View All 312 Keywords
            </Button>
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-base font-medium">"Snippets to Steal" Opportunities</h4>
              <Badge color="primary" variant="flat">18 Opportunities</Badge>
            </div>
            <Button
              size="sm"
              color="primary"
              startContent={<Icon icon="lucide:layout" size={16} />}
            >
              Generate Schema
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              These are featured snippets where competitors currently own the position, but your page ranks in the top 5. With content optimization, you can capture these high-visibility positions.
            </p>
          </div>
          
          <Table 
            removeWrapper 
            aria-label="Snippets to Steal"
            classNames={{
              th: "bg-default-50"
            }}
          >
            <TableHeader>
              <TableColumn>Keyword</TableColumn>
              <TableColumn>Search Volume</TableColumn>
              <TableColumn>Current Rank</TableColumn>
              <TableColumn>Snippet Owner</TableColumn>
              <TableColumn>Snippet Type</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>how to remove malware</TableCell>
                <TableCell>28,000</TableCell>
                <TableCell>4</TableCell>
                <TableCell>norton.com</TableCell>
                <TableCell>List</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Snippet Content">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:sparkles" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>what is ransomware</TableCell>
                <TableCell>22,000</TableCell>
                <TableCell>3</TableCell>
                <TableCell>kaspersky.com</TableCell>
                <TableCell>Paragraph</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Snippet Content">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:sparkles" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>how to protect from hackers</TableCell>
                <TableCell>18,000</TableCell>
                <TableCell>5</TableCell>
                <TableCell>avast.com</TableCell>
                <TableCell>List</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Snippet Content">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:sparkles" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>signs of virus on computer</TableCell>
                <TableCell>15,000</TableCell>
                <TableCell>2</TableCell>
                <TableCell>bitdefender.com</TableCell>
                <TableCell>Table</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Snippet Content">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:sparkles" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>how to secure wifi network</TableCell>
                <TableCell>14,000</TableCell>
                <TableCell>4</TableCell>
                <TableCell>norton.com</TableCell>
                <TableCell>List</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View in SERP">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Snippet Content">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:sparkles" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="flex justify-center mt-4">
            <Button variant="light" color="primary">
              View All 18 Opportunities
            </Button>
          </div>
        </CardBody>
      </Card>
      
      <Card>
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-base font-medium">Autopilot Quick-Win</h4>
              <Badge color="success" variant="flat">$280K in 90d</Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Autopilot</span>
              <Switch 
                isSelected={autopilotEnabled}
                onValueChange={setAutopilotEnabled}
                color="success"
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              These pages are safe for automated optimization with BrightEdge Autopilot. Activate to automatically improve meta tags, schema markup, and content recommendations.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h5 className="font-medium mb-1">Projected Revenue Impact</h5>
                <p className="text-sm text-gray-600">Based on historical performance data and competitor benchmarks</p>
              </div>
              <div className="text-2xl font-semibold text-success-600">
                $280,000
              </div>
            </div>
            
            <div className="h-8 bg-gray-200 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-success-500 rounded-full" style={{ width: "0%" }}></div>
            </div>
            
            <div className="flex justify-between text-xs text-gray-600">
              <span>Today</span>
              <span>30 days</span>
              <span>60 days</span>
              <span>90 days</span>
            </div>
          </div>
          
          <Table 
            removeWrapper 
            aria-label="Autopilot Pages"
            classNames={{
              th: "bg-default-50"
            }}
          >
            <TableHeader>
              <TableColumn>Page</TableColumn>
              <TableColumn>Current Traffic</TableColumn>
              <TableColumn>Projected Gain</TableColumn>
              <TableColumn>Optimization Type</TableColumn>
              <TableColumn>Status</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /total-protection/
                    </span>
                  </div>
                </TableCell>
                <TableCell>124,500</TableCell>
                <TableCell>+32,400</TableCell>
                <TableCell>Meta + Schema</TableCell>
                <TableCell>
                  <Badge color={autopilotEnabled ? "success" : "default"} variant="flat">
                    {autopilotEnabled ? "Active" : "Pending"}
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /antivirus-plus/
                    </span>
                  </div>
                </TableCell>
                <TableCell>98,200</TableCell>
                <TableCell>+24,600</TableCell>
                <TableCell>Meta + Content</TableCell>
                <TableCell>
                  <Badge color={autopilotEnabled ? "success" : "default"} variant="flat">
                    {autopilotEnabled ? "Active" : "Pending"}
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /internet-security/
                    </span>
                  </div>
                </TableCell>
                <TableCell>86,400</TableCell>
                <TableCell>+21,500</TableCell>
                <TableCell>Schema + Internal Links</TableCell>
                <TableCell>
                  <Badge color={autopilotEnabled ? "success" : "default"} variant="flat">
                    {autopilotEnabled ? "Active" : "Pending"}
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /mobile-security/
                    </span>
                  </div>
                </TableCell>
                <TableCell>72,800</TableCell>
                <TableCell>+18,200</TableCell>
                <TableCell>Meta + Schema</TableCell>
                <TableCell>
                  <Badge color={autopilotEnabled ? "success" : "default"} variant="flat">
                    {autopilotEnabled ? "Active" : "Pending"}
                  </Badge>
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /safe-browsing/
                    </span>
                  </div>
                </TableCell>
                <TableCell>65,300</TableCell>
                <TableCell>+16,300</TableCell>
                <TableCell>Content + Internal Links</TableCell>
                <TableCell>
                  <Badge color={autopilotEnabled ? "success" : "default"} variant="flat">
                    {autopilotEnabled ? "Active" : "Pending"}
                  </Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="flex justify-center mt-4">
            <Button variant="light" color="primary">
              View All 42 Pages
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};