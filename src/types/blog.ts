export interface BlogContentItem {
  type: string; // e.g., "image", "quote", "heading", "paragraph"
  image?: any;
  children: Array<{
    text: string;
    type: string; // e.g., "text"
    url?: string; // Only present for link types
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    children?: any;
    code?: boolean;
  }>;
  format?: string; // for list
  level?: number; // Only present for heading types
  code?: string;
  language?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: BlogContentItem[];
}
