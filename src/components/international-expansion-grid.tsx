import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Badge, Button } from "@heroui/react";
import { Icon } from "@iconify/react";

export const InternationalExpansionGrid: React.FC = () => {
  const languages = [
    { 
      code: "es", 
      name: "Spanish", 
      searchVolume: "High", 
      competitionLevel: "Medium",
      yourVisibility: "Low",
      topCompetitor: "avast.es",
      recommendedAction: "Localize",
      priority: "High"
    },
    { 
      code: "de", 
      name: "German", 
      searchVolume: "High", 
      competitionLevel: "High",
      yourVisibility: "Medium",
      topCompetitor: "kaspersky.de",
      recommendedAction: "Optimize",
      priority: "Medium"
    },
    { 
      code: "fr", 
      name: "French", 
      searchVolume: "Medium", 
      competitionLevel: "Medium",
      yourVisibility: "Low",
      topCompetitor: "norton.fr",
      recommendedAction: "Localize",
      priority: "Medium"
    },
    { 
      code: "pt", 
      name: "Portuguese", 
      searchVolume: "Medium", 
      competitionLevel: "Low",
      yourVisibility: "Very Low",
      topCompetitor: "avast.com.br",
      recommendedAction: "Create",
      priority: "High"
    },
    { 
      code: "it", 
      name: "Italian", 
      searchVolume: "Medium", 
      competitionLevel: "Medium",
      yourVisibility: "Low",
      topCompetitor: "kaspersky.it",
      recommendedAction: "Localize",
      priority: "Medium"
    },
    { 
      code: "ja", 
      name: "Japanese", 
      searchVolume: "High", 
      competitionLevel: "Low",
      yourVisibility: "Very Low",
      topCompetitor: "norton.co.jp",
      recommendedAction: "Create",
      priority: "High"
    },
    { 
      code: "zh", 
      name: "Chinese", 
      searchVolume: "Very High", 
      competitionLevel: "Medium",
      yourVisibility: "None",
      topCompetitor: "local competitor",
      recommendedAction: "Create",
      priority: "Very High"
    },
    { 
      code: "ru", 
      name: "Russian", 
      searchVolume: "Medium", 
      competitionLevel: "High",
      yourVisibility: "None",
      topCompetitor: "kaspersky.ru",
      recommendedAction: "Research",
      priority: "Low"
    },
    { 
      code: "ko", 
      name: "Korean", 
      searchVolume: "Medium", 
      competitionLevel: "Low",
      yourVisibility: "None",
      topCompetitor: "ahnlab.com",
      recommendedAction: "Create",
      priority: "High"
    },
    { 
      code: "ar", 
      name: "Arabic", 
      searchVolume: "Medium", 
      competitionLevel: "Low",
      yourVisibility: "None",
      topCompetitor: "local competitor",
      recommendedAction: "Research",
      priority: "Medium"
    }
  ];
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
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
      aria-label="International Expansion Grid"
      classNames={{
        th: "bg-default-50"
      }}
    >
      <TableHeader>
        <TableColumn>Language</TableColumn>
        <TableColumn>Search Volume</TableColumn>
        <TableColumn>Competition Level</TableColumn>
        <TableColumn>Your Visibility</TableColumn>
        <TableColumn>Top Competitor</TableColumn>
        <TableColumn>Recommended Action</TableColumn>
        <TableColumn>Priority</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {languages.map((lang, index) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{lang.name}</span>
              </div>
            </TableCell>
            <TableCell>{lang.searchVolume}</TableCell>
            <TableCell>{lang.competitionLevel}</TableCell>
            <TableCell>{lang.yourVisibility}</TableCell>
            <TableCell>{lang.topCompetitor}</TableCell>
            <TableCell>{lang.recommendedAction}</TableCell>
            <TableCell>
              <Badge color={getPriorityColor(lang.priority)} variant="flat">
                {lang.priority}
              </Badge>
            </TableCell>
            <TableCell>
              <Button size="sm" color="primary">
                View Plan
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};