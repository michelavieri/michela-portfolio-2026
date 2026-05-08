import type { Experience } from '@/lib/types';
import { BookOpenText, BriefcaseBusiness } from 'lucide-react';

export const experiences: Experience[] = [
  {
    company: 'Freelance',
    role: 'Designer, Engineer, Founder',
    period: '2025 - 2026',
    website: 'blankdesignsolutions.com',
    highlights: [
      'Designing and building conversion-focused digital experiences for regional SMEs across e-commerce, F&B, beauty, and professional services',
      'Leading end-to-end web projects spanning UX strategy, interface design, frontend engineering, and CMS architecture',
      'Translating business and operational requirements into scalable, user-centered web experiences',
      'Building modern frontend applications with Next.js, TypeScript, and reusable component systems',
      'Improving customer journeys through analytics, user research, and iterative UX refinement',
      'Collaborating directly with founders and stakeholders from discovery through implementation',
    ],
    icon: BriefcaseBusiness,
  },
  {
    company: 'Sembly',
    role: 'Product Designer, Frontend Engineer',
    period: '2023 - 2025',
    website: 'sembly.com',
    highlights: [
      'Designed end-to-end collaborative workflows, including a consensus summary feature focused on balancing transparency, anonymity, and trust in team decision-making',
      'Designed AI dashboards and conversational interfaces that helped users interpret, steer, and validate AI-generated outputs',
      'Built and maintained a Figma design system and React component library (Radix UI, TypeScript), improving consistency and reducing design-to-development friction',
      'Collaborated with backend engineers on API schema design and edge case handling to ensure feasibility from early stages',
    ],
    icon: BriefcaseBusiness,
  },
  {
    company: 'SEA Labs',
    role: 'Frontend Engineer Intern',
    period: 'Jan - Aug 2022',
    website: 'sea.com',
    highlights: [
      'Built and shipped 9 React applications during early product development of Sea Cloud infrastructure platform; developed 60+ reusable UI components and component library patterns adopted across multiple internal tools',
      'Established component naming conventions, documentation standards, and usage guidelines to enable rapid development across the 50-person engineering team',
      'Presented Sea Cloud product roadmap, feature deliverables, and design rationale to VP Engineering and company all-hands, effectively communicating complex technical features to non-technical and technical stakeholders',
      'Collaborated with design and backend teams to translate product requirements into scalable, well-documented React components that reduced redundant code and improved development velocity',
    ],
    icon: BriefcaseBusiness,
  },
  {
    company: 'Shopee Singapore',
    role: 'UI/UX Designer Intern',
    period: 'May - Aug 2021',
    website: 'shopee.com',
    highlights: [
      'Analyzed 5+ competitor food delivery platforms to identify feature gaps and UX patterns; conducted competitive analysis on group order feature and delivered findings to senior stakeholders to inform product roadmap decisions',
      'Analyzed user behavior metrics (CTR, session recordings, funnel drop-off) for Shopee Food Vietnam to validate design decisions and prioritize feature improvements',
      'Designed UI components and marketing illustrations for Shopee Food Vietnam campaigns; contributed designs to internal design system adopted across multiple markets',
      'Worked on high-scale product serving 1M+ monthly active users across Vietnam market, applying scalability and performance considerations to design decisions',
    ],
    icon: BriefcaseBusiness,
  },
  {
    company: 'Dateideas',
    role: 'Design Engineer Intern',
    period: 'May - Aug 2021',
    highlights: [
      'Led end-to-end design and implementation of React Native features for a Singapore-based couples activity booking platform as the sole UI/UX designer',
      'Conducted user interviews and usability testing to uncover friction points and inform feature decisions',
      'Designed and built core product flows including reviews, loyalty rewards, cart, community forum, and gifting experiences',
    ],
    icon: BriefcaseBusiness,
  },
  {
    company: 'National University of Singapore',
    role: 'B.Comp Information Systems',
    period: '2019 - 2023',
    highlights: [
      `CAP 4.55/5.00 · Dean's List AY22/23 · Specialisation: Digital Product & Platform Management`,
      'Teaching Assistant: CS2040 Data Structures & Algorithms · CS1010J Programming Methodology',
    ],
    icon: BookOpenText,
  },
];
