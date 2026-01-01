interface Project {
  name: string;
  githubLink?: string;
  type: string;
  imgSources: string[];
  description: string;
  detailedDescription: string;
  technologies: string[];
  date: string;
  liveUrl: string;
}

export type { Project };
