
export interface Module {
  title: string;
  description: string;
  image: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: string;
  focus: string;
  curriculum?: Module[];
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
