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
      type: 'quote';
      content: string;
    }
  | {
      type: 'list';
      items: string[];
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
    tags: ['UI/UX Design', 'AI'],
    link: 'sembly.com',
    minutes: 5,
    sections: [
      {
        type: 'text',
        title: 'Overview',
        content: `In collaborative spaces like Sembly, accountability and transparency are crucial for ensuring fair decision-making. As part of my role as a UI/UX Designer, I was tasked with improving Sembly's consensus voting system by designing a clear and informative review response summary. This feature aimed to reveal voter identities, voting outcomes, and individual voting weights to promote transparency and prevent manipulation.


The project required balancing competing priorities: ensuring accountability while preserving privacy, providing clarity without overwhelming users, and designing a scalable solution that could handle varying numbers of participants.`,
      },
      {
        type: 'text',
        title: 'Problem Statement',
        content: `Sembly's spaces are governed by admins and facilitators, where various content and discussion-related actions require approval through a voting process. While this system allowed for collective decision-making, it lacked transparency once a vote was completed (though the lack of visibility during the voting process itself was intentional to reduce bias).


Users could see whether an action was approved, rejected, or marked for revision — but they had no visibility into:`,
      },
      {
        type: 'list',
        items: [
          'Who participated in the vote',
          'How each individual voted',
          'The influence their vote carried',
        ],
      },

      {
        type: 'text',
        content: `
This lack of insight posed significant risks. Without transparency, malicious actors could exploit the system, anonymously blocking decisions without accountability. Conversely, privacy and discretion were also critical concerns, as revealing too much information could discourage participation or expose individuals to undue scrutiny.`,
      },
      {
        type: 'text',
        title: 'Research & Insights',
        content: `To identify potential concerns, I considered the different roles within Sembly's spaces and their unique perspectives. I analyzed the perspectives of different roles — admins, facilitators, and contributors — to identify their potential concerns:`,
      },
      {
        type: 'list',
        items: [
          `**Admins** are frustrated by the inability to investigate unexpected outcomes or blockers.`,
          `**Facilitators** want to know if users who are important because they are directly involved in the action (e.g., the user whose post is being voted for deletion or revision) have participated in the vote.`,
          `**Users** want a clear visual breakdown to see the distribution of votes and how an action takes place, desiring transparency. However, they also want privacy — for example, if they were voting to demote an admin, they fear that their vote would be visible, which might push them to choose a 'safe' option instead.`,
        ],
      },
      {
        type: 'text',
        content: `These insights guided my design priorities: enhancing visibility and transparency while ensuring that key information was intuitive and provided the necessary privacy for users to make informed, unbiased decisions.`,
      },
      {
        type: 'image',
        src: '/projects/sembly-1.png',
        alt: 'The Design Process',
      },
      {
        type: 'text',
        title: 'Ideation & Design Process',
        content: `To evaluate potential solutions, I created a table comparing different design options based on key factors such as accountability, intuitiveness, and privacy & discretion. I analyzed several approaches, each with unique tradeoffs:`,
      },
      {
        type: 'image',
        src: '/projects/sembly-2.png',
        alt: 'Design Concept - Table of Comparison',
      },
      {
        type: 'text',
        content: `Based on the analysis and team discussions, we concluded that the best approach is to show the identities of admins and facilitators while keeping the rest of the voters anonymous. This option strikes a balance between accountability, intuitiveness, and privacy.

After the analysis phase, I explored several approaches to presenting voter data in a concise yet effective way. Some key decision points were:`,
      },
      {
        type: 'list',
        items: [
          `**Voting Weight Indicator**: How to display the different voting weights that is intuitive but does not discourage users?`,
          `**Vote Breakdown**: Clear segmentation showing the number of votes for each outcome (approve, reject, or revise).`,
          `**Voter Identities**: Displaying voter names alongside their roles (admin, facilitator, etc.) to highlight influence.`,
        ],
      },
      {
        type: 'text',
        title: 'Prototyping & Testing',
        content: `After the brainstorming and analysis step, I prototyped 4 main options with Figma to gather feedback and further analysis. Here are the four initial options:

**Option 1**: Display individual votes as separate blocks, with the width of each block representing the vote weight. For admins and facilitators, include avatars that reveal user profiles on hover. Highlight the user's own vote with a star icon for easy identification. Order based on who voted first, and for multiple options, display the avatars of non-anonymous users.`,
      },
      {
        type: 'image',
        src: '/projects/sembly-3.png',
        alt: 'Option 1 Design',
        caption: 'Option 1',
      },
      {
        type: 'text',
        content: `**Option 2**: Display individual votes as separate blocks, with the width of each block representing the vote weight, as a progress bar. For admins and facilitators, include avatars that reveal user profiles on hover. Highlight the user's own vote with a star icon for easy identification. Order based on highest vote weight, and show number of votes for multiple options, but do not associate it with the specific users.`,
      },
      {
        type: 'image',
        src: '/projects/sembly-4.png',
        alt: 'Option 2 Design',
        caption: 'Option 2',
      },
      {
        type: 'text',
        content: `**Option 3**: Display individual votes as separate blocks with same widths, use the color density to represent vote weight (to avoid discouraging those with lighter vote weight). Gradient color is reserved for admins and facilitators, whereas dark blue represents those with higher vote weight. For admins and facilitators, include avatars that reveal user profiles on hover. Highlight the user's own vote with a star icon for easy identification. Order based on who voted first, and show number of votes for multiple options, but do not associate it with the specific users.`,
      },
      {
        type: 'image',
        src: '/projects/sembly-5.png',
        alt: 'Option 3 Design',
        caption: 'Option 3',
      },
      {
        type: 'text',
        content: `**Option 4**: Display the votes as a cumulative bar for each options. Do not directly associate the vote weight with the individual users to prevent discouraging those with lower vote weights. Admins and facilitators' avatars would be shown below the bar, with Sembly admins having a gradient border color for easy identification.`,
      },
      {
        type: 'image',
        src: '/projects/sembly-6.png',
        alt: 'Option 4 Design',
        caption: 'Option 4',
      },
      {
        type: 'text',
        content: `Using the initial design options as a foundation, I discussed the concept and design with the other designers and stakeholders. Here are some key insights that emerged:`,
      },
      {
        type: 'list',
        items: [
          `**Options 1 and 2**: While these options are intuitive and easy to understand, they may unintentionally discourage users. Clearly displaying vote weights can highlight the disparity between roles, which might feel disempowering for those with lower voting power. Additionally, these designs pose scalability issues — in future scenarios where there may be hundreds of voters, it's not feasible to display each one individually.`,
          `**Option 3**: This approach uses color intensity to represent vote weight, which addresses the discouragement issue by making the differences less explicit. However, it lacks intuitiveness and can be confusing, especially for users with color blindness. While it scales better than the first two options, it still has limitations in accommodating large numbers of voters.`,
          `**Option 4**: In retrospect, this is the most balanced solution. It avoids discouragement by concealing less influential votes within a collapsible chip, which also makes it scalable. However, there were still areas for improvement, including the need for clearer role differentiation and vote weight representation.`,
        ],
      },
      {
        type: 'text',
        title: 'Final Design Solution',
        content: `Based on these insights, I refined the prototype by incorporating a vote weight breakdown that doesn't directly link each user to their individual voting power. This approach aligns well with the requirement that users in the same role may have different voting weights based on their reputation scores.

To improve role clarity, I introduced a grouping system that organizes users by their roles, each clearly labeled with distinct chip titles and colors. This reduces the cognitive load on users by relying on recognition rather than recall.

The design also supports scalability — it limits the number of visible avatars per role, elegantly hides anonymous voters, and allows users to easily identify which option they selected, if any.

Additionally, since our application includes badges like “Google Researcher” and “Expert,” we introduced a requirement to ensure users with these badges are easily identifiable in the review response summary.`,
      },
      {
        type: 'image',
        src: '/projects/sembly-7.png',
        alt: 'Final Design Collapsed',
      },
      {
        type: 'image',
        src: '/projects/sembly-8.png',
        alt: 'Final Design Expanded',
      },
      {
        type: 'text',
        content: `The final design features:`,
      },
      {
        type: 'list',
        items: [
          `**A summary header** that presents the overall outcome along with key metrics such as total votes and majority trends.`,
          `**A detailed voter list** displaying voter names, roles, and individual votes, using clear indicators to differentiate vote weights without direct association.`,
          `**Color-coded segments** with clear titles that make it easier to visually parse voting outcomes at a glance.`,
          `**Scalable architecture** that limits the number of visible avatars per role, elegantly hides anonymous voters, and allows users to easily identify which option they selected.`,
          `**Badge visibility** to ensure users with special designations like "Google Researcher" and "Expert" are easily identifiable in the review response summary.`,
        ],
      },
      {
        type: 'text',
        content: `This design improved transparency without overwhelming users, enabling admins and facilitators to track voting patterns and hold participants accountable when necessary.`,
      },
      {
        type: 'text',
        title: 'Outcome & Impact',
        content: `The implementation of the review response summary significantly enhanced transparency in Sembly's decision-making process:`,
      },
      {
        type: 'list',
        items: [
          `Admins gained better oversight of voting patterns and outcomes`,
          `Malicious voting behavior decreased due to increased accountability`,
          `Users reported increased confidence in the platform's fairness`,
        ],
      },
      {
        type: 'text',
        content: `By introducing a clear and accessible voting breakdown, I helped foster trust and accountability within the platform's collaborative environment.`,
      },
      {
        type: 'text',
        title: 'Reflection',
        content: `This project reinforced the importance of balancing information density with clarity. Early iterations risked overwhelming users with excessive detail, but through iterative testing, I refined the design to present key information in digestible layers.

The experience highlighted the need to align design decisions with user priorities—ultimately fostering trust, accountability, and fairness in collective decision-making. Finding the right balance between transparency and privacy was challenging, but essential for creating a system that encouraged participation while maintaining integrity.`,
      },
    ],
  },
  {
    id: 'wikipedia-talk',
    title: `Improving Wikipedia's Talk Page`,
    description: `Improving Wikipedia's talk page interface to increase user engagement and make collaborative editing more accessible to newcomers.`,
    imageSrc: '/images/projects/wikipedia-cover.jpg',
    tags: ['Case Study'],
    minutes: 3,
  },
];
