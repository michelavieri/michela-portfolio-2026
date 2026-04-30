import { Project } from '@/lib/types';
import { semblySections } from './sembly.sections';
import { wikipediaSections } from './wikipedia.sections';
import { subwaySections } from './subway.sections';
import { vieriFleurSections } from './vieri-fleur.sections';

export const projects: Project[] = [
  {
    id: 'vieri-fleur',
    title: 'Designing a Structured Ordering Flow for a Bespoke Floristry',
    description:
      'Custom ordering flow redesign for Vieri Fleur. Eliminated consultation debt and improved conversion through guided brief building.',
    imageSrc: '/images/projects/vieri-cover.webp',
    tags: ['UI/UX Design', 'Web Development'],
    link: 'vierifleur.com',
    minutes: 10,
    sections: vieriFleurSections,
  },
  {
    id: 'sembly',
    title: `Designing Sembly's Consensus Summary`,
    description:
      'Designing transparency features and consensus summary interfaces to improve trust, reduce support burden, and streamline review management.',
    imageSrc: '/images/projects/sembly-cover.webp',
    tags: ['UI/UX Design', 'AI'],
    link: 'sembly.com',
    minutes: 5,
    sections: semblySections,
  },
  {
    id: 'wikipedia-talk',
    title: `Improving Wikipedia's Talk Page`,
    description: `Improving Wikipedia's talk page interface to increase user engagement and make collaborative editing more accessible to newcomers.`,
    imageSrc: '/images/projects/wikipedia-cover.webp',
    tags: ['Case Study'],
    minutes: 10,
    sections: wikipediaSections,
  },
  {
    id: 'subway-catering',
    title: 'Subway Catering',
    description:
      'B2B ordering platform enabling bulk catering orders with heavy customization, kitchen integration, and real-time coordination.',
    imageSrc: '/images/projects/subway-cover.webp',
    tags: ['UI/UX Design', 'Web Development'],
    minutes: 3,
    sections: subwaySections,
  },
];
