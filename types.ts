export interface AIAnalysisResult {
  category: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  department: string;
  summary: string;
  estimatedActionTime: string;
}

export interface ReportData {
  description: string;
  location: string;
  image: File | null;
  analysis: AIAnalysisResult | null;
}

export type ViewState = 'home' | 'report' | 'success';