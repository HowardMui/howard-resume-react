export type WorkCategories = 'all' | 'my-work' | 'appicidea';

export interface PortfolioData {
  category: WorkCategories;
  image: string | null;
  video: string | null;
  url: string | null;
  title: string;
  content: string;
  tags: string[];
  gitHubLink: string | null;
}
