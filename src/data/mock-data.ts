import { DomainData } from "../types/domain-data";

export const mockData: DomainData = {
  domain: "mcafee.com",
  shareOfVoice: 24.6,
  llmCitationShare: 18.3,
  competitiveData: [
    {
      name: "mcafee.com",
      shareOfVoice: 24.6,
      llmCitationShare: 18.3,
      paidSpendWaste: 850000,
      algorithmImpact: "Moderate Positive",
      trafficDelta: 12.4
    },
    {
      name: "norton.com",
      shareOfVoice: 28.4,
      llmCitationShare: 22.1,
      paidSpendWaste: 1200000,
      algorithmImpact: "Slight Positive",
      trafficDelta: 8.7
    },
    {
      name: "kaspersky.com",
      shareOfVoice: 18.2,
      llmCitationShare: 15.6,
      paidSpendWaste: 680000,
      algorithmImpact: "Moderate Negative",
      trafficDelta: -3.2
    },
    {
      name: "avast.com",
      shareOfVoice: 14.8,
      llmCitationShare: 12.4,
      paidSpendWaste: 520000,
      algorithmImpact: "Slight Positive",
      trafficDelta: 5.6
    },
    {
      name: "bitdefender.com",
      shareOfVoice: 10.2,
      llmCitationShare: 8.9,
      paidSpendWaste: 380000,
      algorithmImpact: "No Change",
      trafficDelta: 1.8
    },
    {
      name: "avg.com",
      shareOfVoice: 8.4,
      llmCitationShare: 7.2,
      paidSpendWaste: 290000,
      algorithmImpact: "Slight Negative",
      trafficDelta: -1.4
    }
  ],
  serpFeatures: [
    {
      type: "Featured Snippet",
      owned: false,
      percentage: 24,
      details: "Norton owns 42% of snippets"
    },
    {
      type: "People Also Ask",
      owned: true,
      percentage: 38,
      details: "Present in 38% of relevant queries"
    },
    {
      type: "Local Pack",
      owned: true,
      percentage: 56,
      details: "Strong local presence"
    },
    {
      type: "Video",
      owned: false,
      percentage: 18,
      details: "Missing from 82% of video results"
    },
    {
      type: "AI Overview",
      owned: false,
      percentage: 32,
      details: "Norton cited 2.4x more often"
    }
  ],
  trafficTrend: [
    { date: "Jan 1", traffic: 120000, conversions: 3840 },
    { date: "Jan 8", traffic: 125000, conversions: 4000 },
    { date: "Jan 15", traffic: 118000, conversions: 3776 },
    { date: "Jan 22", traffic: 122000, conversions: 3904 },
    { date: "Jan 29", traffic: 128000, conversions: 4096 },
    { date: "Feb 5", traffic: 132000, conversions: 4224 },
    { date: "Feb 12", traffic: 126000, conversions: 4032 },
    { date: "Feb 19", traffic: 130000, conversions: 4160 },
    { date: "Feb 26", traffic: 135000, conversions: 4320 },
    { date: "Mar 5", traffic: 140000, conversions: 4480 },
    { date: "Mar 12", traffic: 138000, conversions: 4416 },
    { date: "Mar 19", traffic: 142000, conversions: 4544 },
    { date: "Mar 26", traffic: 148000, conversions: 4736 }
  ],
  pageHealthMatrix: [
    {
      url: "/total-protection/",
      traffic: 124500,
      conversionRate: 4.2,
      avgRank: 8.4,
      keywordClusters: {
        antivirus: "good",
        security: "good",
        protection: "good",
        malware: "warning",
        privacy: "danger"
      },
      coreWebVitals: "Pass",
      schemaMarkup: "Valid",
      indexStatus: "Indexed",
      mobileFriendly: "Yes",
      topKeywords: [
        { term: "mcafee total protection", rank: 1, searchVolume: 22000 },
        { term: "mcafee antivirus", rank: 3, searchVolume: 18000 },
        { term: "best antivirus software", rank: 6, searchVolume: 74000 },
        { term: "computer protection software", rank: 8, searchVolume: 12000 },
        { term: "total security software", rank: 5, searchVolume: 9500 }
      ]
    },
    {
      url: "/antivirus-plus/",
      traffic: 98200,
      conversionRate: 3.8,
      avgRank: 12.1,
      keywordClusters: {
        antivirus: "good",
        security: "warning",
        protection: "warning",
        malware: "good",
        privacy: "danger"
      },
      coreWebVitals: "Pass",
      schemaMarkup: "Valid",
      indexStatus: "Indexed",
      mobileFriendly: "Yes",
      topKeywords: [
        { term: "mcafee antivirus plus", rank: 1, searchVolume: 14000 },
        { term: "antivirus software", rank: 8, searchVolume: 48000 },
        { term: "virus protection", rank: 12, searchVolume: 32000 },
        { term: "computer antivirus", rank: 9, searchVolume: 18000 },
        { term: "best antivirus", rank: 14, searchVolume: 62000 }
      ]
    },
    {
      url: "/internet-security/",
      traffic: 86400,
      conversionRate: 3.5,
      avgRank: 15.8,
      keywordClusters: {
        antivirus: "warning",
        security: "good",
        protection: "warning",
        malware: "warning",
        privacy: "good"
      },
      coreWebVitals: "Fail",
      schemaMarkup: "Invalid",
      indexStatus: "Indexed",
      mobileFriendly: "Yes",
      topKeywords: [
        { term: "internet security", rank: 7, searchVolume: 38000 },
        { term: "online security", rank: 12, searchVolume: 28000 },
        { term: "web protection", rank: 15, searchVolume: 22000 },
        { term: "secure browsing", rank: 18, searchVolume: 15000 },
        { term: "internet safety", rank: 9, searchVolume: 32000 }
      ]
    },
    {
      url: "/mobile-security/",
      traffic: 72800,
      conversionRate: 2.9,
      avgRank: 18.6,
      keywordClusters: {
        antivirus: "danger",
        security: "warning",
        protection: "warning",
        malware: "danger",
        privacy: "good"
      },
      coreWebVitals: "Pass",
      schemaMarkup: "Valid",
      indexStatus: "Indexed",
      mobileFriendly: "Yes",
      topKeywords: [
        { term: "mobile security app", rank: 8, searchVolume: 28000 },
        { term: "phone antivirus", rank: 14, searchVolume: 32000 },
        { term: "android security", rank: 16, searchVolume: 24000 },
        { term: "iphone security", rank: 22, searchVolume: 18000 },
        { term: "mobile protection", rank: 12, searchVolume: 15000 }
      ]
    },
    {
      url: "/safe-browsing/",
      traffic: 65300,
      conversionRate: 2.6,
      avgRank: 21.2,
      keywordClusters: {
        antivirus: "danger",
        security: "warning",
        protection: "danger",
        malware: "warning",
        privacy: "good"
      },
      coreWebVitals: "Fail",
      schemaMarkup: "Invalid",
      indexStatus: "Indexed",
      mobileFriendly: "No",
      topKeywords: [
        { term: "safe browsing", rank: 12, searchVolume: 22000 },
        { term: "secure web browsing", rank: 18, searchVolume: 14000 },
        { term: "browser security", rank: 15, searchVolume: 18000 },
        { term: "web protection", rank: 22, searchVolume: 12000 },
        { term: "internet safety", rank: 24, searchVolume: 32000 }
      ]
    }
  ]
};
