
export interface Course {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: string;
  focus: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}
