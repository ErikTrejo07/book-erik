export interface Proyect {
    id: number;
    name:  string;
    company:  string;
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
    problematic01: string;
    problematic02: string;
    problematic03?: string;
    problematic04?: string;
    problematic05?: string;
    target01: string;
    target02?: string;
    target03?: string;
    target04?: string;
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

