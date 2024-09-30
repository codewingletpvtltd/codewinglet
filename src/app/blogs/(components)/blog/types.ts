export type Blog = {
  id: number;
  title: string;
  read: number;
  summary: string;
  content: string[];
  slug: string;
  category: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    id: number;
    url: string;
    name: string;
    alternativeText: string;
    caption: string;
  };
};
