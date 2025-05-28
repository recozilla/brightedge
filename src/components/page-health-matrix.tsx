import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/react";
import { Icon } from "@iconify/react";
import { PageHealthData } from "../types/domain-data";

interface PageHealthMatrixProps {
  data: PageHealthData[];
}

export const PageHealthMatrix: React.FC<PageHealthMatrixProps> = ({ data }) => {
  const [selectedPage, setSelectedPage] = React.useState<PageHealthData | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  const keywordClusters = ["Antivirus", "Security", "Protection", "Malware", "Privacy"];
  
  const handlePageClick = (page: PageHealthData) => {
    setSelectedPage(page);
    setIsModalOpen(true);
  };
  
  const getCellColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-success-100 text-success-700";
      case "warning":
        return "bg-warning-100 text-warning-700";
      case "danger":
        return "bg-danger-100 text-danger-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };
  
  return (
    <>
      <div className="overflow-x-auto">
        <Table removeWrapper aria-label="Page Health Matrix">
          <TableHeader>
            <TableColumn>Landing Page</TableColumn>
            {keywordClusters.map((cluster, index) => (
              <TableColumn key={index}>{cluster}</TableColumn>
            ))}
            <TableColumn>Actions</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((page, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon icon="lucide:file-text" className="text-gray-400" />
                    <span className="text-sm font-medium truncate max-w-xs">
                      {page.url}
                    </span>
                  </div>
                </TableCell>
                {keywordClusters.map((cluster, clusterIndex) => {
                  const status = page.keywordClusters[cluster.toLowerCase()];
                  return (
                    <TableCell key={clusterIndex}>
                      <div 
                        className={`w-full h-8 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${getCellColor(status)}`}
                        onClick={() => handlePageClick(page)}
                      >
                        {status === "good" && <Icon icon="lucide:check" />}
                        {status === "warning" && <Icon icon="lucide:alert-triangle" />}
                        {status === "danger" && <Icon icon="lucide:x" />}
                      </div>
                    </TableCell>
                  );
                })}
                <TableCell>
                  <Button 
                    size="sm" 
                    variant="light" 
                    color="primary"
                    onPress={() => handlePageClick(page)}
                  >
                    Analyze
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Page Analysis
              </ModalHeader>
              <ModalBody>
                {selectedPage && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">{selectedPage.url}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Icon icon="lucide:eye" className="text-gray-500" />
                          <span>{selectedPage.traffic.toLocaleString()} visits</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon icon="lucide:trending-up" className="text-gray-500" />
                          <span>{selectedPage.conversionRate}% CVR</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon icon="lucide:bar-chart" className="text-gray-500" />
                          <span>Avg. Rank: {selectedPage.avgRank}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">ContentIQ Analysis</h4>
                        <div className="space-y-3 bg-gray-50 p-4 rounded-md">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Core Web Vitals</span>
                            <Badge color={selectedPage.coreWebVitals === "Pass" ? "success" : "danger"}>
                              {selectedPage.coreWebVitals}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Schema Markup</span>
                            <Badge color={selectedPage.schemaMarkup === "Valid" ? "success" : "danger"}>
                              {selectedPage.schemaMarkup}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Index Status</span>
                            <Badge color={selectedPage.indexStatus === "Indexed" ? "success" : "danger"}>
                              {selectedPage.indexStatus}
                            </Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Mobile Friendly</span>
                            <Badge color={selectedPage.mobileFriendly === "Yes" ? "success" : "danger"}>
                              {selectedPage.mobileFriendly}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Top Keywords</h4>
                        <div className="space-y-2 bg-gray-50 p-4 rounded-md">
                          {selectedPage.topKeywords.map((keyword, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-sm">{keyword.term}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                                  Rank: {keyword.rank}
                                </span>
                                <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                                  SV: {keyword.searchVolume}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Copilot Content Brief Generator</h4>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="mb-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Content Tone</span>
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="flat" color="primary">
                                Professional
                              </Button>
                              <Button size="sm" variant="flat">
                                Conversational
                              </Button>
                              <Button size="sm" variant="flat">
                                Technical
                              </Button>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">Content Length</span>
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="flat">
                                Short
                              </Button>
                              <Button size="sm" variant="flat" color="primary">
                                Medium
                              </Button>
                              <Button size="sm" variant="flat">
                                Long
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button color="primary" className="w-full">
                          Generate Content Brief
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Apply Recommendations
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

import { Badge } from "@heroui/react";