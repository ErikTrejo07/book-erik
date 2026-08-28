export interface ProjectSolution {
  title: string;
  description?: string;
  images: string[];
}

export interface Project {
  id: number;
  name: string;
  company: string;
  customer: string;
  year: string;
  channel?: string;

  shortDescription: string;
  description: string[];

  coverImage: string;
  device: string;
  tools: string[];

  problems: string[];
  targets: string[];

  solutions: ProjectSolution[];
}
