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

  shDescription: string;

  lgDescription01: string;
  lgDescription02: string;
  lgDescription03?: string;
  lgDescription04?: string;

  coverImg: string;
  device: string;
  tool: string;

  problems: string[];
  targets: string[];

  solutions: ProjectSolution[];
}
