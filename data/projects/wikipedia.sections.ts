import { ProjectSection } from '@/lib/types';

export const wikipediaSections: ProjectSection[] = [
  {
    type: 'text',
    title: 'Overview',
    content: `Wikipedia is one of the most valuable open-source platforms for knowledge sharing, but it continues to face significant challenges in maintaining content quality and encouraging participation from a diverse group of contributors. Among these challenges is systemic bias, particularly related to gender representation, where only 8.5–16% of contributors are female. This gap contributes to under-representation and editorial imbalances across various topics.


In this case study, I focused on improving the Wikipedia Talk interface—an essential feature where users discuss edits, provide suggestions, and collaborate on article improvements. My redesign aimed to make the editing process simpler, more structured, and accessible to beginner editors, encouraging participation and fostering a sense of ownership over contributions.`,
  },
  {
    type: 'text',
    title: 'Understanding demographic data',
    content: `To better understand the issue, I collected demographic data from Wikipedia and related fields, revealing some key insights:

**1. Wikipedia Reader Demographics:**

- 45% of Wikipedia readers are female, but only 15% of editors are women.

- The average reader is 36 years old, older than most contributors.

**2. Writers in the US:**

- Out of 45,024 writers currently employed: 53.8% are women, 46.2% are men.

- Programmers in the US: Only 28.7% of software programmers are women, while 71.3% are men.`,
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-demographics.png',
    alt: 'Wikipedia Demographics',
  },
  {
    type: 'text',
    title: 'The Process',
    content: `To address these challenges, I followed a structured design process:

**1. Research & Analysis**

I began by reviewing Wikipedia’s Edit Requests and Protection Policies to understand the current system. To gain deeper insights into user behaviors, I conducted 4 user interviews and usability tests with participants aged between 20 and 30 years old, representing both genders. The participants were primarily beginner editors who had limited prior experience contributing to Wikipedia.

**2. User Insights & Journey Mapping**

Using the data gathered during the research phase, I created a User Journey Map to visualize the experiences and struggles of beginner editors. Additionally, I developed an Affinity Map to organize pain points and insights. This process helped highlight areas where users were most confused or frustrated, such as identifying the steps to make edit requests or dealing with unstructured discussions.

**3. Ideation**

Leveraging the research insights, I proposed a series of features and improvements designed to simplify the editing process, encourage discussions, and make the interface easier to navigate.

**4. Prototyping**

I developed low-fidelity prototypes to bring these ideas to life and test their viability. After gathering user feedback, I iterated on the design and created a polished high-fidelity prototype that incorporated clearer workflows, improved visual organization, and a standardized user interface.

**5. Testing & Validation**

Finally, I conducted additional testing on the high-fidelity prototype to evaluate how well the new design addressed user pain points. Feedback from this stage further validated the proposed solutions and highlighted areas for potential improvement.`,
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-process.png',
    alt: 'Design process',
  },
  {
    type: 'text',
    content: `**The first step in my design process began with researching Wikipedia's Talk Page, where I identified several areas that needed significant improvement.**

Upon analyzing the interface, it became evident that the Talk Page lacked clarity in its proposal structures and status updates, making it difficult for users to understand ongoing discussions and their outcomes. The edit talk page posed another major challenge—its text editor requires users to have a working knowledge of LaTeX or basic programming syntax, creating a steep learning curve for anyone unfamiliar with these tools.

Additionally, I explored the Revision History and found that its layout was far from user-friendly. The table was cluttered with poorly structured text, disorganized links, and an overwhelming amount of unimportant information presented all at once. This lack of organization made it difficult to navigate changes, track revisions, or identify key updates efficiently.

This research highlighted how the current interface fails to accommodate a seamless and intuitive user experience, making the system unnecessarily complex for both new and experienced contributors. (See current interface screenshots below)`,
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-current.png',
    alt: `Wikipedia Talk Page's Current Interface`,
  },
  {
    type: 'text',
    title: 'Understanding our users',
    content: `**User Personas:** Beginner Editor, Experienced Editor, and Administrator

In my research, I identified three key user personas within Wikipedia's contribution system: beginner editors, experienced editors, and administrators. While all three groups have unique needs, I chose to dive deeper into the beginner editor category. This decision was driven by two key factors:

1. Most pain points were discovered in this category, highlighting significant friction in their contribution journey.

2. Our assumption is that the target audience for achieving the goal of increasing contributors lies within this group, as they represent a larger potential user base and are more accessible for user testing.

That said, for a more comprehensive research approach, we could gather data to analyze the market size of each persona group. This would allow us to validate our assumptions and determine which user segment to prioritize for maximum impact.`,
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-personas.png',
    alt: `Wikipedia's Key Personas`,
  },
  {
    type: 'text',
    content: `Hence, I began developing the Beginner Editor Persona, focusing on identifying key aspects such as their goals, skills, background, motivations, and frustrations. This persona would serve as a foundation for understanding their needs and designing solutions that directly address their pain points. By mapping out these elements, I aimed to create a clear representation of beginner editors and ensure that our design decisions align with their real-world challenges and aspirations. (See below for the Beginner Editor Persona research results)`,
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-beginner-persona.png',
    alt: `Beginner Editor Persona`,
  },
  {
    type: 'text',
    title: 'Current user journey map',
    content:
      '(The user journey map was made with Sam Poppins as the user persona)',
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-current-journey.png',
    alt: `Current User Journey Map`,
    caption: 'Current User Journey Map',
  },
  {
    type: 'text',
    title: 'Key Pain Points for Beginner Editors',
    content: `Through user interviews and journey mapping, I uncovered several recurring challenges that hinder beginner editors:

1. **Confusion around editing restrictions:** Beginner editors often struggle to understand why certain articles cannot be edited directly. This leads to frustration and uncertainty. One participant shared, “Why can’t I edit some articles?”

2. **Unclear edit request workflows:** Many users find the process of initiating an edit request confusing and unintuitive. This results in a feeling of being lost or stuck, as expressed by one user: “How do I even add an edit request?”

3. **Overwhelming discussions on Talk pages:** The cluttered and unstructured format of Wikipedia's Talk pages makes it difficult for beginner editors to engage in discussions. The cognitive overload caused by lengthy, unorganized comment threads discourages participation. One participant remarked, “The comments section gives me a headache!”

By addressing these challenges, we can significantly reduce barriers to entry for beginner editors, improve their overall experience, and encourage more seamless contributions to Wikipedia.

Based on the data and research findings, I began developing a mental model using Affinity Mapping for a user seeking to contribute easily to a Wikipedia Talk page. This model highlights the user's intents, identifies gaps and problems, and organizes them into clear categories. By doing so, it provides a structured overview that helps us pinpoint key areas for improvement and guides our next steps in the design process.`,
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-mental-model.png',
    alt: `Mental Model with Affinity Mapping`,
    caption: 'Mental Model with Affinity Mapping',
  },
  {
    type: 'text',
    content:
      'According to these insights, here are the proposed features and improvements I recommend implementing to enhance the user journey and user interface.',
  },
  {
    type: 'text',
    title: 'Proposed Features/Improvements',
    content: `1. Standardize edit requests creation flow & require login before contributing
    
2. Three types of edit requests (New topic, Correction, and Citation): Streamlining review process

3. Display pending requests in article page: Encourage readers to participate

4. “Suggesting” feature: Streamlining review process

5. Encourage discussions in comment thread

6. Three User Roles (Editor, Verified Editor, Administrator): Prevent overwhelming number of features for beginners

7. Display indication of page administrators

8. Guide users on the different edit flows: Prevent confusion of protected and non-protected pages

9. Consistent, simple & standardized UI
`,
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-proposed-journey.png',
    alt: `Proposed User Journey Map`,
    caption: 'Proposed User Journey Map',
  },
  {
    type: 'text',
    title: 'Proposed Solutions Elaborated',
    content: `To address these pain points, I proposed a set of features and design improvements aimed at simplifying workflows, enhancing usability, and fostering collaboration.

1. **Streamlined Edit Requests**

   I introduced a new structure for edit requests by categorizing them into three distinct types:

   - New Topic: For proposing new edits or additions to an article.

   - Correction: For suggesting fixes to existing content.

   - Citation: For adding or updating references.

   This system not only simplifies the review process but also helps reviewers quickly identify and act on different types of requests. To further organize the workflow, edit requests are grouped into four sections based on their status: Pending Review, Draft, Rejected, and Accepted.

2. **Enhanced Collaboration Tools**

   To encourage productive discussions and collaboration, I redesigned the comments section to include:

   - **Threaded replies**: A clear, structured format that improves readability and makes conversations easier to follow.

   - **Upvote/downvote functionality**: Contributors can rate requests or comments but are required to provide reasons for their votes to reduce bias.

   - **A dedicated discussion section**: By improving the visibility of discussions and adding a “Reply” button, the redesign encourages contributors to engage in meaningful conversations.

3. **Guidance for Beginners**

   Beginner editors often need help navigating Wikipedia’s editing policies and workflows. To address this, I included step-by-step visual guidance for:

   - Understanding edit restrictions (e.g., protected pages).

   - Following the appropriate edit request workflows.

   This ensures that new users can contribute confidently without feeling overwhelmed.

4. **Improved UI/UX**

   The interface was redesigned to provide a more intuitive experience, featuring:

   - Standardized UI elements for consistency.

   - Color-coded tags to distinguish between different request types.

   - Notification icons to keep users informed about updates and contributions.

   - User roles (Editor, Verified Editor, Administrator) to prevent beginners from being overwhelmed by advanced features.`,
  },
  {
    type: 'text',
    title: 'Low-Fidelity Prototypes',
    content:
      'I created low-fidelity prototypes to test key ideas and gather feedback early in the design process.',
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-lofi-1.png',
    alt: `Lo-Fi Prototype`,
    caption: 'Lo-Fi Prototype',
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-lofi-2.png',
    alt: `Lo-Fi Prototype`,
    caption: 'Lo-Fi Prototype',
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-lofi-3.png',
    alt: `Lo-Fi Prototype`,
    caption: 'Lo-Fi Prototype',
  },
  {
    type: 'text',
    title: 'User Testing Results',
    content: `After testing the low-fidelity prototype, the following results emerged:

1. **Sense of Ownership**: Display name on contributions.

2. **Upvote/Downvote Bias**: Require voters to give reasons to support their votes.

3. **Search Feature**: Add search feature in discussions section of a contribution.

4. **Encourage Discussions**: Add a text box to encourage discussions.

5. **Color Codings**: Tags (citation, new topic, correction), sections in edit requests (pending reviews, drafts, rejected, accepted).

6. **Sort and Filter Function**: To streamline the reviewing process.

7. **Thumbs Up and Down Count**: Display how many users pressed “Good Job” and “Can improve.”

8. **Timestamps**: Display timestamps for contributions and discussions.

9. **Notification Icon**: Important to receive and view notifications easily.`,
  },
  {
    type: 'text',
    title: 'High-Fidelity Prototypes',
    content: `Based on the user testing results, analysis, and feedback, I reiterated the design and came up with a high-fidelity mockup that represents these changes.The high-fidelity design refined the user interface while maintaining Wikipedia’s existing color palette.`,
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-hifi-1.png',
    alt: `Hi-Fi Prototype`,
    caption: 'Hi-Fi Prototype',
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-hifi-2.png',
    alt: `Hi-Fi Prototype`,
    caption: 'Hi-Fi Prototype',
  },
  {
    type: 'image',
    src: '/images/projects/wikipedia-comparison.png',
    alt: `Comparison with Current Design`,
    caption: 'Comparison with Current Design',
  },
  {
    type: 'text',
    title: 'Future Improvements',
    content: `While the redesign addressed many pain points, there are opportunities for further refinement:

1. Introducing a delay feature for non-protected pages to allow time for vetting contributions before publishing.

2. Conducting additional user testing to validate the high-fidelity design with a broader audience.

3. Performing a heuristic evaluation to identify any usability gaps.

4. Expanding the research to include additional user personas, such as experienced editors and administrators.`,
  },
];
