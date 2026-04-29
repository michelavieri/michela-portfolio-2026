import { ProjectSection } from '@/lib/types';

export const subwaySections: ProjectSection[] = [
  {
    type: 'text',
    content: `One of the most memorable projects I've worked on as a freelancer was collaborating with a friend to design and develop the Subway Catering website in Singapore. Before we began, we had a crucial meeting with Subway's owner to understand their vision for the website and gather key requirements. We then conducted a comprehensive analysis of other Subway outlets' websites to identify areas for improvement and potential user pain points.`,
  },
  {
    type: 'text',
    title: 'Competitor Analysis',
    content: `**Looking at other Subway websites...**

After some research, we found a couple of Subway websites from different countries, including that of Singapore (direct competitor). We analyzed the design and user experience:`,
  },
  {
    type: 'image',
    src: '/images/projects/subway-others.png',
    alt: `Other subway websites' home page`,
    caption: `Other subway websites' home page`,
  },
  {
    type: 'text',
    content: `Upon initial examination, we discovered that none of Subway's websites are keeping up with current design trends. At the time of this project in 2022, the popular design style was Neumorphism, known for its soft and aesthetically pleasing appearance, utilizing pastel colors with low contrast. However, this design style clashes with Subway's signature bright yellow and green brand colors, even after the recent update to slightly less saturation. The challenge lies in maintaining the brand identity while incorporating current design trends.

The real issue, however, lies on designing and developing the ordering system. Unlike other restaurants where customizations for each menu item is limited, Subway is well known in being able to customize every menu item down to the sauces, vegetables, type of bread, and add-ons. Moreover, Subway catering focus on creating large platters with up to 20 customizable sandwiches. We want to make the ordering experience as easy and smooth as we can.`,
  },
  {
    type: 'text',
    title: 'The Problem',
    content: `**The problem with current Subway websites:**
For instance, the website subdelivery.com offers the option to order Party Platters, which consists of around 10-20 sandwiches. If you order offline in the restaurant, you can customize each sandwiches to your liking, serving every sandwiches according to everyone's diet preferences. However, in the order application, it is not possible to customize every sandwiches. Instead, they allow the user to choose a maximum of 3 choices and the restaurant will provide them in random quantities. See the figures below for reference:`,
  },
  {
    type: 'image',
    src: '/images/projects/subway-menu.png',
    alt: `subdelivery.com's platter menu page`,
    caption: `subdelivery.com's Platter Menu Page`,
  },
  {
    type: 'image',
    src: '/images/projects/subway-customization.png',
    alt: `subdelivery.com's Platter Limited Customization`,
    caption: `subdelivery.com's Platter Limited Customization`,
  },
  {
    type: 'text',
    title: 'Our Solution',
    content: `Based on these findings, we designed a customization flow that gives users more control over each sandwich while still keeping the ordering process simple enough for large catering orders. The goal was to make the experience feel flexible without overwhelming users with too many decisions at once.

Besides that, we also want to include pictures to each of the different sauces and add-ons for users who are not Subway's regular customer. This will help them when customizing their sandwiches with unfamiliar ingredients. Hence, here is our order modal with illustrations: (refer to Figma prototype at the end of the page to see Platter order flow)`,
  },
  {
    type: 'image',
    src: '/images/projects/subway-our-customization.png',
    alt: `Our design for individual sandwich customization`,
    caption: `Our Design For Individual Sandwich Customization`,
  },
  {
    type: 'image',
    src: '/images/projects/subway-our-platter-customization.png',
    alt: `Our design for platter sandwich customization`,
    caption: `Our Design For Platter Sandwich Customization`,
  },
  {
    type: 'text',
    content: `Another gap we see is that none of the websites provide status update of the order. This lack of information leads to confusion as there are no way to track the exact status of the order. Hence, we took reference from some of the best food delivery apps to present users with a familiar and user friendly status update page.`,
  },
  {
    type: 'image',
    src: '/images/projects/subway-order-status.png',
    alt: `Order Status Page`,
    caption: `Order Status Page`,
  },
  {
    type: 'image',
    src: '/images/projects/subway-order-status-2.png',
    alt: `Two Choices To Check Order Status`,
    caption: `Two Choices To Check Order Status`,
  },
  {
    type: 'text',
    content: `With a clear direction in mind, we presented several innovative design concepts that effectively showcased Subway Catering's services and appealed to their target audience. Our proposal was well received, and we were given the go-ahead to move forward with the project.​ Attached below is the Figma Prototype of our website. Unfortunately, the business was not doing very well due to the COVID Pandemic which takes away most of their target customer (office orders), hence the link to the website was taken down. However, you may interact with the prototype below to get a sense of our design flow. This project was developed using ReactJS, NodeJS, and MongoDB.`,
  },
  {
    type: 'figma',
    src: 'https://embed.figma.com/proto/xlG7FLzqwtEMbV4eApnoCe/Subway-Design?node-id=0-3&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=38%3A89&embed-host=share',
    title: 'The Prototype',
    caption: 'Interactive Figma prototype',
    height: 560,
  },
  {
    type: 'text',
    content: `Throughout the design and development process, we encountered various obstacles but remained steadfast in delivering a top-notch website. We leveraged cutting-edge design trends and technology to create a user-friendly and visually appealing website that effectively communicated Subway Catering's brand message. Additionally, we ensured that the website was optimized for search engines to increase its visibility and drive more traffic.

After weeks of hard work and determination, the website was finally launched, and the results were exceptional. The client was ecstatic with the final product and expressed their satisfaction with how the website exceeded their expectations. The website received a substantial amount of traffic and led to a significant increase in catering orders, showcasing the impact and value of our efforts. This project holds a special place in my heart as it allowed me to collaborate with a friend and create something meaningful and impactful. I am proud of the work we accomplished and grateful for the opportunity to contribute to Subway Catering's success.`,
  },
];
