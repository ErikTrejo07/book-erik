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

  solutionTitle01?: string;
  solutionText01?: string;
  solutionImg01?: string[];

  solutionTitle02?: string;
  solutionText02?: string;
  solutionImg02?: string[];

  solutionTitle03?: string;
  solutionText03?: string;
  solutionImg03?: string[];

  solutionTitle04?: string;
  solutionText04?: string;
  solutionImg04?: string[];
}
