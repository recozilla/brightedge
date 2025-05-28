import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Badge, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const AiContentHub: React.FC = () => {
  const contentOpportunities = [
    { 
      title: "State of Cybersecurity Report 2025", 
      type: "Research Paper", 
      llmCitationPotential: "Very High", 
      competitorCoverage: "Medium",
      effortLevel: "High",
      impactLevel: "Very High",
      estimatedTimeframe: "3 months"
    },
    { 
      title: "Ransomware Trends Analysis", 
      type: "Data Study", 
      llmCitationPotential: "High", 
      competitorCoverage: "High",
      effortLevel: "Medium",
      impactLevel: "High",
      estimatedTimeframe: "2 months"
    },
    { 
      title: "Zero-Day Vulnerability Database", 
      type: "Data Study", 
      llmCitationPotential: "Very High", 
      competitorCoverage: "Low",
      effortLevel: "High",
      impactLevel: "Very High",
      estimatedTimeframe: "4 months"
    },
    { 
      title: "Consumer Privacy Protection Guide", 
      type: "Research Paper", 
      llmCitationPotential: "High", 
      competitorCoverage: "Medium",
      effortLevel: "Medium",
      impactLevel: "High",
      estimatedTimeframe: "2 months"
    },
    { 
      title: "IoT Security Standards Framework", 
      type: "Research Paper", 
      llmCitationPotential: "High", 
      competitorCoverage: "Low",
      effortLevel: "High",
      impactLevel: "High",
      estimatedTimeframe: "3 months"
    },
    { 
      title: "Global Threat Intelligence Report", 
      type: "Data Study", 
      llmCitationPotential: "Very High", 
      competitorCoverage: "High",
      effortLevel: "High",
      impactLevel: "Very High",
      estimatedTimeframe: "3 months"
    },
    { 
      title: "Cybersecurity for Remote Workforce", 
      type: "Research Paper", 
      llmCitationPotential: "High", 
      competitorCoverage: "Medium",
      effortLevel: "Medium",
      impactLevel: "High",
      estimatedTimeframe: "2 months"
    },
    { 
      title: "AI-Powered Threat Detection Analysis", 
      type: "Data Study", 
      llmCitationPotential: "Very High", 
      competitorCoverage: "Low",
      effortLevel: "High",
      impactLevel: "Very High",
      estimatedTimeframe: "4 months"
    }
  ];
  
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Very High":
        return "danger";
      case "High":
        return "primary";
      case "Medium":
        return "secondary";
      case "Low":
        return "default";
      default:
        return "default";
    }
  };
  
  return (
    <Table 
      removeWrapper 
      aria-label="AI Content Hub Opportunities"
      classNames={{
        th: "bg-default-50"
      }}
    >
      <TableHeader>
        <TableColumn>Content Title</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>LLM Citation Potential</TableColumn>
        <TableColumn>Competitor Coverage</TableColumn>
        <TableColumn>Effort Level</TableColumn>
        <TableColumn>Impact Level</TableColumn>
        <TableColumn>Timeframe</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {contentOpportunities.map((content, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex items-center gap-2">
                <Icon 
                  icon={content.type === "Research Paper" ? "lucide:file-text" : "lucide:bar-chart"} 
                  className="text-gray-400" 
                />
                <span className="text-sm font-medium">{content.title}</span>
              </div>
            </TableCell>
            <TableCell>{content.type}</TableCell>
            <TableCell>{content.llmCitationPotential}</TableCell>
            <TableCell>{content.competitorCoverage}</TableCell>
            <TableCell>{content.effortLevel}</TableCell>
            <TableCell>
              <Badge color={getImpactColor(content.impactLevel)} variant="flat">
                {content.impactLevel}
              </Badge>
            </TableCell>
            <TableCell>{content.estimatedTimeframe}</TableCell>
            <TableCell>
              <Button size="sm" color="primary">
                Generate Brief
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};