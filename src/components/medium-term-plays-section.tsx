import React from "react";
import { Card, CardBody, CardHeader, Tooltip, Badge, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { Icon } from "@iconify/react";
import { DomainData } from "../types/domain-data";

interface MediumTermPlaysSectionProps {
  data: DomainData;
  domain: string;
}

export const MediumTermPlaysSection: React.FC<MediumTermPlaysSectionProps> = ({ data, domain }) => {
  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-br from-warning-50 to-white">
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-base font-medium">Content Refresh Queue</h4>
              <Badge color="danger" variant="flat">$520K Lost Revenue</Badge>
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
                startContent={<Icon icon="lucide:sparkles" size={16} />}
              >
                Generate Briefs
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              These pages have experienced significant traffic decay year-over-year and require content updates to recover lost rankings and traffic.
            </p>
          </div>
          
          <Table 
            removeWrapper 
            aria-label="Content Refresh Queue"
            classNames={{
              th: "bg-default-50"
            }}
          >
            <TableHeader>
              <TableColumn>Page</TableColumn>
              <TableColumn>Current Traffic</TableColumn>
              <TableColumn>Traffic Decay</TableColumn>
              <TableColumn>Lost Revenue</TableColumn>
              <TableColumn>Last Updated</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /what-is-ransomware/
                    </span>
                  </div>
                </TableCell>
                <TableCell>45,200</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-danger-600">
                    <Icon icon="lucide:trending-down" size={14} />
                    <span>-38.4%</span>
                  </div>
                </TableCell>
                <TableCell>$82,400</TableCell>
                <TableCell>14 months ago</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Content Brief">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:sparkles" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /best-antivirus-software/
                    </span>
                  </div>
                </TableCell>
                <TableCell>68,300</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-danger-600">
                    <Icon icon="lucide:trending-down" size={14} />
                    <span>-32.7%</span>
                  </div>
                </TableCell>
                <TableCell>$76,500</TableCell>
                <TableCell>11 months ago</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Content Brief">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:sparkles" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /how-to-remove-malware/
                    </span>
                  </div>
                </TableCell>
                <TableCell>42,100</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-danger-600">
                    <Icon icon="lucide:trending-down" size={14} />
                    <span>-29.5%</span>
                  </div>
                </TableCell>
                <TableCell>$64,800</TableCell>
                <TableCell>9 months ago</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Content Brief">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:sparkles" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /internet-security-guide/
                    </span>
                  </div>
                </TableCell>
                <TableCell>38,600</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-danger-600">
                    <Icon icon="lucide:trending-down" size={14} />
                    <span>-27.2%</span>
                  </div>
                </TableCell>
                <TableCell>$58,200</TableCell>
                <TableCell>12 months ago</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Content Brief">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:sparkles" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /computer-protection-tips/
                    </span>
                  </div>
                </TableCell>
                <TableCell>32,400</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1 text-danger-600">
                    <Icon icon="lucide:trending-down" size={14} />
                    <span>-25.8%</span>
                  </div>
                </TableCell>
                <TableCell>$48,600</TableCell>
                <TableCell>10 months ago</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Generate Content Brief">
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
              View All 24 Pages
            </Button>
          </div>
        </CardBody>
      </Card>
      
      <Card className="bg-gradient-to-br from-primary-50 to-white">
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-base font-medium">Internal Link Sculptor</h4>
              <Badge color="primary" variant="flat">86 Opportunities</Badge>
            </div>
            <Button
              size="sm"
              color="primary"
              startContent={<Icon icon="lucide:link" size={16} />}
            >
              Apply Recommendations
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              AI-generated linking plan across feature pages & blogs to improve internal link structure and boost rankings for key pages.
            </p>
          </div>
          
          <Table 
            removeWrapper 
            aria-label="Internal Link Opportunities"
            classNames={{
              th: "bg-default-50"
            }}
          >
            <TableHeader>
              <TableColumn>Source Page</TableColumn>
              <TableColumn>Target Page</TableColumn>
              <TableColumn>Anchor Text</TableColumn>
              <TableColumn>Target Keyword</TableColumn>
              <TableColumn>Impact</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /blog/cybersecurity-tips/
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /total-protection/
                    </span>
                  </div>
                </TableCell>
                <TableCell>McAfee Total Protection</TableCell>
                <TableCell>total protection software</TableCell>
                <TableCell>
                  <Badge color="success" variant="flat">High</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Source Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Link">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:link" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /blog/ransomware-protection/
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /antivirus-plus/
                    </span>
                  </div>
                </TableCell>
                <TableCell>McAfee Antivirus Plus</TableCell>
                <TableCell>antivirus software</TableCell>
                <TableCell>
                  <Badge color="success" variant="flat">High</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Source Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Link">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:link" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /blog/online-safety/
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /internet-security/
                    </span>
                  </div>
                </TableCell>
                <TableCell>Internet Security Suite</TableCell>
                <TableCell>internet security</TableCell>
                <TableCell>
                  <Badge color="primary" variant="flat">Medium</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Source Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Link">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:link" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /blog/mobile-security-tips/
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /mobile-security/
                    </span>
                  </div>
                </TableCell>
                <TableCell>Mobile Security App</TableCell>
                <TableCell>mobile security</TableCell>
                <TableCell>
                  <Badge color="primary" variant="flat">Medium</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Source Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Link">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:link" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /blog/safe-browsing-habits/
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm truncate max-w-xs">
                      /safe-browsing/
                    </span>
                  </div>
                </TableCell>
                <TableCell>WebAdvisor</TableCell>
                <TableCell>safe browsing</TableCell>
                <TableCell>
                  <Badge color="primary" variant="flat">Medium</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Source Page">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="Apply Link">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:link" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="flex justify-center mt-4">
            <Button variant="light" color="primary">
              View All 86 Opportunities
            </Button>
          </div>
        </CardBody>
      </Card>
      
      <Card className="bg-gradient-to-br from-blue-50 to-white">
        <CardHeader className="px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-3">
              <h4 className="text-base font-medium">Backlink Gap</h4>
              <Badge color="primary" variant="flat">38 High-Authority Domains</Badge>
            </div>
            <Button
              size="sm"
              color="primary"
              startContent={<Icon icon="lucide:external-link" size={16} />}
            >
              Export Outreach List
            </Button>
          </div>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-0">
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Top referring domains that your competitors have but you don't. These represent valuable backlink acquisition opportunities.
            </p>
          </div>
          
          <Table 
            removeWrapper 
            aria-label="Backlink Gap"
            classNames={{
              th: "bg-default-50"
            }}
          >
            <TableHeader>
              <TableColumn>Domain</TableColumn>
              <TableColumn>Domain Authority</TableColumn>
              <TableColumn>Links to Competitors</TableColumn>
              <TableColumn>Top Competitor</TableColumn>
              <TableColumn>Relevance</TableColumn>
              <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:globe" className="text-gray-400" />
                    <span className="text-sm font-medium">pcmag.com</span>
                  </div>
                </TableCell>
                <TableCell>92</TableCell>
                <TableCell>14</TableCell>
                <TableCell>norton.com</TableCell>
                <TableCell>
                  <Badge color="success" variant="flat">High</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Domain">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="View Outreach Plan">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:mail" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:globe" className="text-gray-400" />
                    <span className="text-sm font-medium">techradar.com</span>
                  </div>
                </TableCell>
                <TableCell>89</TableCell>
                <TableCell>12</TableCell>
                <TableCell>bitdefender.com</TableCell>
                <TableCell>
                  <Badge color="success" variant="flat">High</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Domain">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="View Outreach Plan">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:mail" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:globe" className="text-gray-400" />
                    <span className="text-sm font-medium">cnet.com</span>
                  </div>
                </TableCell>
                <TableCell>94</TableCell>
                <TableCell>18</TableCell>
                <TableCell>norton.com</TableCell>
                <TableCell>
                  <Badge color="success" variant="flat">High</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Domain">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="View Outreach Plan">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:mail" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:globe" className="text-gray-400" />
                    <span className="text-sm font-medium">tomsguide.com</span>
                  </div>
                </TableCell>
                <TableCell>86</TableCell>
                <TableCell>9</TableCell>
                <TableCell>kaspersky.com</TableCell>
                <TableCell>
                  <Badge color="primary" variant="flat">Medium</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Domain">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="View Outreach Plan">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:mail" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow key="5">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:globe" className="text-gray-400" />
                    <span className="text-sm font-medium">lifehacker.com</span>
                  </div>
                </TableCell>
                <TableCell>90</TableCell>
                <TableCell>11</TableCell>
                <TableCell>avast.com</TableCell>
                <TableCell>
                  <Badge color="primary" variant="flat">Medium</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Tooltip content="View Domain">
                      <Button isIconOnly size="sm" variant="light">
                        <Icon icon="lucide:external-link" size={16} />
                      </Button>
                    </Tooltip>
                    <Tooltip content="View Outreach Plan">
                      <Button isIconOnly size="sm" variant="light" color="primary">
                        <Icon icon="lucide:mail" size={16} />
                      </Button>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="flex justify-center mt-4">
            <Button variant="light" color="primary">
              View All 38 Domains
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};