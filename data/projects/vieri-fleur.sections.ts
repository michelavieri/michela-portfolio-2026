import { ProjectSection } from '@/lib/types';

export const vieriFleurSections: ProjectSection[] = [
  {
    type: 'text',
    title: 'Overview',
    content: `Vieri Fleur is a bespoke florist in Singapore operating on a made-to-order model. Every bouquet is assembled daily based on seasonal availability, meaning exact flowers are never pre-fixed or guaranteed in advance.

Offering a premium, atelier-level service, most customer journeys did not just end on the website. Instead, leads were primarily from the website but most orders are handled through WhatsApp, where florists manually guided customers through selection, interpretation of mood, and feasibility constraints.

At the same time, analytics showed a major discovery gap: only ~31% of users reached the catalogue page, meaning most visitors never encountered purchasable offerings.

This project focused on redesigning the homepage experience to:

- Reduce unstructured WhatsApp consultations

- Help customers express intent/vision without flower knowledge

- Increase qualified custom bouquet orders

- Improve catalogue visibility and conversion`,
  },
  {
    type: 'image',
    src: '/images/projects/vieri-website.png',
    alt: `Vieri Fleur's Home Page`,
  },
  {
    type: 'text',
    title: 'The Problem',
    content: `The core issue was not usability. It was misalignment between customer intent and system structure.

1. **High ambiguity in customer requests**

   Customers arrive with emotional intent, not product knowledge. They were expressing:

   - Emotions (“romantic”, “apology”, “celebration”)

   - Occasions (birthday, condolence, anniversary)

   - Visual references (often AI-generated or aspirational images)

   - Colors (what to avoid, what recipient likes, suitability with recipient's dress)

   However, they lacked the vocabulary to translate these into actionable floral specifications. This made it difficult to translate requests into feasible bouquets without iterative back-and-forth.

2. **WhatsApp carried the entire cognitive load**

   Because the website did not support intent translation, WhatsApp became the sole ordering system.

   This resulted in:

   - Repeated clarification cycles

   - Manual interpretation by florists (including generating pictures resulting in choice dilemma)

   - Long consultation threads with low conversion outcomes

3. **Low catalogue discovery**

   Most users dropped off before reaching product pages. The homepage functioned as the primary decision surface, but did not meaningfully support purchase intent or progression.`,
  },
  {
    type: 'quote',
    content: `She likes pink, but is it appropriate for this occassion?`,
  },
  {
    type: 'quote',
    content: `I don't understand flowers. I'm scared I choose offensive colors, can you guide me?`,
  },
  {
    type: 'quote',
    content: `I generated an image to show you what I meant`,
  },
  {
    type: 'text',
    title: 'Insight',
    content: `**WhatsApp is a trust mechanism and not a UX fallback**

User interviews revealed that WhatsApp usage was not driven by poor website usability or confusing UI. Instead, customers explicitly described a need for human reassurance in high-emotion purchases.

Flower orders are often tied to meaningful personal events, where failure carries emotional consequences. Users consistently expressed concerns such as:`,
  },
  {
    type: 'quote',
    content: `I want to make sure someone actually sees my order`,
  },
  {
    type: 'quote',
    content: `I don’t want it to get lost in a system`,
  },
  {
    type: 'quote',
    content: `It feels safer when I’m speaking to a real person`,
  },
  {
    type: 'text',
    content: `This reframed WhatsApp not as a workaround, but as a trust layer in the purchasing journey.`,
  },
  {
    type: 'text',
    content: `**Implication of Insight**

Replacing WhatsApp with a traditional checkout system would not align with user expectations.

The real issue was not lack of checkout UX. It was the lack of structured intent before entering WhatsApp.`,
  },
  {
    type: 'text',
    title: 'Design Strategy',
    content: `The strategy shifted from “optimise checkout” to “structure intent before human handoff”.

Two principles guided the direction:

1. **Preserve WhatsApp as confirmation, not exploration**

   WhatsApp remains essential for trust and final confirmation. However, it should no longer be used to extract basic order information.

2. **Reduce ambiguity before human interaction**

   The system should ensure that when a customer enters WhatsApp, the florist already has:

   - Occasion context
   - Mood direction
   - Budget expectation
   - Constraints or preferences
   - Have knowledge about suitable colors/style for an occassion
   - Understand Vieri Fleur's made to order workflow

3. **Fix early-stage drop-off (homepage to catalogue)**

   We should improve visibility of the catalogue so that users progrss into product discovery before dropping of the website.`,
  },
  {
    type: 'text',
    title: 'Solutions',
    content: `1. **Homepage redesigned as primary funnel entry**

   To address the ~31% catalogue drop-off, the homepage was restructured so that:

   - Catalogue previews were surfaced immediately above the fold
   - Users were exposed to purchasable offerings without navigation dependency
   - Product discovery became part of the first interaction rather than a secondary step

   This reduced early-stage funnel loss and ensured more users reached actual product exploration.`,
  },
  {
    type: 'image',
    src: '/images/projects/vieri-home.png',
    alt: `Vieri Fleur's catalog is now in the home page`,
    caption: `The Catalogue Now Lives Directly In The Home Page`,
  },
  {
    type: 'text',
    content: `2. **Search, filter, and sort for intent-based discovery**

   We identified another behavioural pattern during usage and interviews:
    
   Many customers defaulted to “custom bouquet” not because they wanted full control, but because they could not reliably find what they were looking for in the catalogue.

   Users often thought in terms of:

   - Occasion (“sympathy”, “birthday”, “anniversary”)
   
   - Emotion or mood (“soft”, “romantic”, “cheerful”)

   - Colour preference (“pink”, “white”, “pastel”)

   - Flower preferences ("rose", "tulip", "hydrangea")

   However, the catalogue was previously structured around product names and arrangements, making it difficult for users to translate intent into selection.

   As a result:

   - Users bypassed catalogue exploration

   - Defaulted to WhatsApp for guidance

   - Over-indexed on custom orders even when suitable arrangements already existed

   To address this, we introduced a search, filter, and sort system based on intent language, allowing users to browse by:

   - Occasion

   - Colour

   - Mood

   - Flower type

   This enabled users to self-navigate the catalogue without needing to immediately resort to custom requests.
`,
  },
  {
    type: 'image',
    src: '/images/projects/vieri-search-pink.png',
    alt: `Vieri Fleur's new search feature`,
    caption: `Searching For Pink Flowers In The Catalog`,
  },
  {
    type: 'image',
    src: '/images/projects/vieri-search-sympathy.png',
    alt: `Vieri Fleur's new search feature`,
    caption: `Enabling Users To Search The Catalog Based On Occassions`,
  },
  {
    type: 'image',
    src: '/images/projects/vieri-search-tulip.png',
    alt: `Vieri Fleur's new search feature`,
    caption: `Supports Search By Flower Type`,
  },
  {
    type: 'text',
    content: `This feature reduced unnecessary escalation to custom flow by improving the “findability” of relevant ready-made arrangements.`,
  },
  {
    type: 'text',
    content: `3. **Guided brief system + WhatsApp handoff (unified flow)**

   For customers who require custom bouquets, a structured guided brief system was introduced to replace open-ended WhatsApp requests.

   Instead of selecting specific flowers or starting a free-form conversation, users define only:

   - Occasion
   
   - Colour direction (auto recommendations based on occasion selected and free field option)

   - Flowers to Avoid
   
   - Budget range

   - Size Preference

   - Date & Time Needed

   - Base Preference (Bouquet, vase, or hat box)

   - Wedding Bouquet Style (if wedding occasion is selected) with style image examples

   - Delivery preferences (Delivery/meet-up)

   This deliberately shifts the interaction away from specification and toward intent articulation, ensuring customers are not required to have flower knowledge.

   The output of this flow is a pre-scoped brief that is automatically sent into WhatsApp, where the florist continues the conversation from a structured starting point rather than an empty chat.

   This transforms WhatsApp from **discovery + extraction channel** into **confirmation + refinement channel**.

   A key design intent behind this system was also to set correct user expectations about Vieri Fleur’s operating model. Since all arrangements are made-to-order using daily-sourced seasonal flowers, the system reinforces that customers are not selecting exact blooms, but trusting the florist to compose the best possible arrangement on the day based on availability, quality, and aesthetic judgment.

   By separating intent definition (website) from execution (florist), the experience aligns user expectations with the realities of a bespoke floral workflow, where control is shared, but expertise remains with the florist.`,
  },
  {
    type: 'image',
    src: '/images/projects/vieri-choice.webp',
    alt: 'Custom Bouquet Form',
    caption: `The New Custom Bouquet Form`,
  },
  {
    type: 'text',
    title: 'Closing',
    content: `This project was not a redesign of a checkout flow, but it was a restructuring of how intent becomes an order in a high-emotion, low-expertise context.

The core challenge was not only increasing conversion, but addressing multiple breakdown points across the journey: low catalogue discovery, over-reliance on WhatsApp, and repeated clarification cycles that created decision fatigue for customers and operational overhead for florists.

By introducing structured intent before WhatsApp, improving homepage visibility, and enabling intent-based search within the catalogue, the experience shifted the system at both ends of the funnel: from discovery to confirmation.

This resulted in:

- Improved product discoverability earlier in the journey
- Reduced drop-off before meaningful engagement
- Fewer back-and-forth exchanges in WhatsApp
- Higher customer confidence when placing custom orders

Ultimately, the goal was not to reduce human interaction, but to make it more effective. We aimed to move florists from extracting information to refining decisions, while giving customers clarity and confidence in their choices.`,
  },
];
