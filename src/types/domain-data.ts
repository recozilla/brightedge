export interface CompetitorData {
  name: string;
  shareOfVoice: number;
  llmCitationShare: number;
  paidSpendWaste: number;
  algorithmImpact: string;
  trafficDelta: number;
}

export interface SerpFeature {
  type: string;
  owned: boolean;
  percentage: number;
  details: string;
}

export interface TrafficTrendData {
  date: string;
  traffic: number;
  conversions: number;
}

export interface PageHealthData {
  url: string;
  traffic: number;
  conversionRate: number;
  avgRank: number;
  keywordClusters: {
    [key: string]: string;
  };
  coreWebVitals: string;
  schemaMarkup: string;
  indexStatus: string;
  mobileFriendly: string;
  topKeywords: {
    term: string;
    rank: number;
    searchVolume: number;
  }[];
}

export interface DomainData {
  domain: string;
  shareOfVoice: number;
  llmCitationShare: number;
  competitiveData: CompetitorData[];
  serpFeatures: SerpFeature[];
  trafficTrend: TrafficTrendData[];
  pageHealthMatrix: PageHealthData[];
}
