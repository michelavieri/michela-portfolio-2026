export type Project = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link?: string;
  minutes: number;
};

export const projects: Project[] = [
  {
    id: 'vieri-fleur',
    title: 'Vieri Fleur Custom Order Design Solution',
    description:
      'Custom ordering flow redesign for a luxury florist. Eliminated consultation debt and improved conversion through guided brief building.',
    imageSrc: '/images/projects/vieri-fleur.jpg',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'vierifleur.com',
    minutes: 3,
  },
  {
    id: 'subway-catering',
    title: 'Subway Catering',
    description:
      'B2B ordering platform enabling bulk catering orders with heavy customization, kitchen integration, and real-time coordination.',
    imageSrc: '/images/projects/subway-cover.jpg',
    tags: ['UI/UX Design', 'Web Development'],
    minutes: 3,
  },
  {
    id: 'sembly',
    title: `Designing Sembly's Consensus Summary`,
    description:
      'Designing transparency features and consensus summary interfaces to improve trust, reduce support burden, and streamline review management.',
    imageSrc: '/images/projects/sembly-cover.jpg',
    tags: ['UI/UX Design'],
    link: 'sembly.com',
    minutes: 3,
  },
  {
    id: 'wikipedia-talk',
    title: `Improving Wikipedia's Talk Page`,
    description: `Improving Wikipedia's talk page interface to increase user engagement and make collaborative editing more accessible to newcomers.`,
    imageSrc: '/images/projects/wikipedia-cover.jpg',
    tags: ['UI/UX Case Study'],
    minutes: 3,
  },
];
