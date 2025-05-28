import React from "react";
import { DomainSearch } from "./components/domain-search";
import { DashboardLayout } from "./components/dashboard-layout";
import { mockData } from "./data/mock-data";
import { ScrollableDashboard } from "./components/scrollable-dashboard";

export default function App() {
  const [domain, setDomain] = React.useState("mcafee.com");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDataLoaded, setIsDataLoaded] = React.useState(true);
  const [progress, setProgress] = React.useState({
    crawl: 0,
    serp: 0,
    ai: 0
  });

  const handleDomainSearch = (newDomain: string) => {
    setDomain(newDomain);
    setIsLoading(true);
    setIsDataLoaded(false);
    
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newCrawl = Math.min(prev.crawl + Math.random() * 15, 100);
        const newSerp = Math.min(prev.serp + Math.random() * 10, 100);
        const newAi = Math.min(prev.ai + Math.random() * 8, 100);
        
        if (newCrawl === 100 && newSerp === 100 && newAi === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            setIsDataLoaded(true);
          }, 500);
        }
        
        return {
          crawl: newCrawl,
          serp: newSerp,
          ai: newAi
        };
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DomainSearch 
        domain={domain} 
        onSearch={handleDomainSearch} 
        isLoading={isLoading}
        progress={progress}
      />
      {isDataLoaded && (
        <ScrollableDashboard 
          domain={domain}
          data={mockData}
        />
      )}
    </div>
  );
}