import React from "react";
import { Input, Button, Progress, Card } from "@heroui/react";
import { Icon } from "@iconify/react";

interface DomainSearchProps {
  domain: string;
  onSearch: (domain: string) => void;
  isLoading: boolean;
  progress: {
    crawl: number;
    serp: number;
    ai: number;
  };
}

export const DomainSearch: React.FC<DomainSearchProps> = ({ 
  domain, 
  onSearch,
  isLoading,
  progress
}) => {
  const [inputValue, setInputValue] = React.useState(domain);
  const suggestions = [
    "mcafee.com",
    "norton.com",
    "kaspersky.com",
    "avast.com",
    "bitdefender.com"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="bg-gradient-to-r from-primary-50 to-white border-b border-gray-200 py-5 px-6 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary-500 font-bold text-2xl">
              BrightEdge
            </div>
            <div className="h-7 w-px bg-gray-200"></div>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 max-w-xl mx-4">
            <div className="relative">
              <label htmlFor="domain-input" className="block text-sm font-medium text-gray-700 mb-1">
                Enter Domain
              </label>
              <Input
                id="domain-input"
                type="text"
                placeholder="Enter domain (e.g., example.com)"
                value={inputValue}
                onValueChange={setInputValue}
                startContent={<Icon icon="lucide:globe" className="text-default-400" />}
                endContent={
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    type="submit"
                    isLoading={isLoading}
                  >
                    <Icon icon="lucide:search" />
                  </Button>
                }
                className="w-full"
                isDisabled={isLoading}
              />

              {!isLoading && inputValue && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-md rounded-b-md border border-gray-200 mt-1 z-20">
                  {suggestions
                    .filter(s => s.includes(inputValue.toLowerCase()) && s !== inputValue.toLowerCase())
                    .map((suggestion, index) => (
                      <div 
                        key={index}
                        className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                        onClick={() => {
                          setInputValue(suggestion);
                          onSearch(suggestion);
                        }}
                      >
                        <Icon icon="lucide:globe" className="text-default-400" />
                        {suggestion}
                      </div>
                    ))
                  }
                </div>
              )}
            </div>
          </form>

          <div className="flex items-center gap-3">
            <Button
              color="primary"
              startContent={<Icon icon="lucide:zap" size={16} />}
              size="sm"
            >
              Activate Autopilot
            </Button>
          </div>
        </div>

        {isLoading && (
          <Card className="mt-4 p-4">
            <div className="text-center mb-2 font-medium">Processing domain data...</div>
            <div className="grid grid-cols-3 gap-6 mb-2">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Crawl Progress</span>
                  <span className="text-sm font-medium">{Math.round(progress.crawl)}%</span>
                </div>
                <Progress 
                  value={progress.crawl} 
                  color="primary"
                  className="h-2"
                  aria-label="Crawl progress"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">SERP Fetch</span>
                  <span className="text-sm font-medium">{Math.round(progress.serp)}%</span>
                </div>
                <Progress 
                  value={progress.serp} 
                  color="primary"
                  className="h-2"
                  aria-label="SERP fetch progress"
                />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">AI Analysis</span>
                  <span className="text-sm font-medium">{Math.round(progress.ai)}%</span>
                </div>
                <Progress 
                  value={progress.ai} 
                  color="primary"
                  className="h-2"
                  aria-label="AI analysis progress"
                />
              </div>
            </div>
            <div className="text-xs text-gray-500 text-center">
              Estimated time remaining: {Math.round((300 - progress.crawl - progress.serp - progress.ai) / 3)} seconds
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};