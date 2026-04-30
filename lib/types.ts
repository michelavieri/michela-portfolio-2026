export type ProjectSection =
  | {
      type: 'text';
      title?: string;
      content: string;
    }
  | {
      type: 'image';
      src: string;
      alt?: string;
      caption?: string;
    }
  | {
      type: 'figma';
      src: string;
      title?: string;
      caption?: string;
      height?: number;
    }
  | {
      type: 'quote';
      content: string;
    };

export type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
  minutes: number;
  sections?: ProjectSection[];
  heroImage: string;
};
