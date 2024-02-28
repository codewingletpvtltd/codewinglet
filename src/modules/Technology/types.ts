export interface BannerImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
      } | null;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string | null;
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface IconAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

interface IconData {
  id: number;
  attributes: IconAttributes;
}

export interface DevelopmentService {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUs {
  id: number;
  reason: string;
}

export interface Achievements {
  id: number;
  title: string;
  description: string;
  icon: {
    data: IconData;
  };
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface WhoUsed {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: null;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string | null;
      createdAt: string;
      updatedAt: string;
    };
  }[];
}

export interface DevelopmentCompany {
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  technology_name: string;
  banner_image: BannerImage;
  who_used: WhoUsed;
  development_services: DevelopmentService[];
  why_choose_us: WhyChooseUs[];
  achievements: Achievements[];
  FAQs: FAQ[];
}

export interface TechnologyProps {
  data: DevelopmentCompany;
}
