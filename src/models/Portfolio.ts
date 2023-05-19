export type WorkCategories =
  | 'all'
  | 'my-work'
  | 'appicidea'
  | 'frontend'
  | 'backend';

export interface TagData {
  tag: string;
  color: string;
}

export interface PortfolioData {
  category: WorkCategories[];
  image: string | null;
  video: string | null;
  url: string | null;
  title: string;
  content: string;
  tags: TagData[];
  gitHubLink: string | null;
}
