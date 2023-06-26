import type {
  Skills,
  Project,
  ContactMethod,
  Education,
  Experience,
  Bootcamp,
} from '../types'

import {
  GitHubIcon,
  LinkIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '../components/icons'

export const name = 'Raymond Kneipp'
export const title = 'Full Stack Web Developer'

export const contactMethods: ContactMethod[] = [
  {
    icon: <LinkedInIcon />,
    text: 'linkedin.com/in/raymondkneipp',
    href: 'https://linkedin.com/in/raymondkneipp',
  },
  {
    icon: <MailIcon />,
    text: 'hello@raymondkneipp.com',
    href: 'mailto:hello@raymondkneipp.com',
  },
  {
    icon: <GitHubIcon />,
    text: 'github.com/raymondkneipp',
    href: 'https://github.com/raymondkneipp',
  },
  {
    icon: <PhoneIcon />,
    text: '(513) 680-0072',
    href: 'tel:5136800072',
  },
  {
    icon: <LinkIcon />,
    text: 'raymondkneipp.com',
    href: 'https://raymondkneipp.com',
  },
  {
    icon: <MapPinIcon />,
    text: 'Cincinnati, OH',
  },
]

export const education: Education[] = [
  {
    school: 'UC Clermont College',
    degree:
      'Gained 27 credits for a B.S. in Computer Science via dual-credit courses in senior year of high school.',
  },
  {
    school: 'Southern New Hampshire University',
    degree: 'Completed 32 credits towards a B.S. in Computer Science',
  },
]

export const bootcamp: Bootcamp = {
  title: 'Full Stack Developer Bootcamp',
  company: 'LEARN Academy',
  startDate: new Date(2023, 2),
  endDate: new Date(2023, 5),
  bullets: [
    'Proficient in full-stack web development with expertise in JavaScript and React, experienced in server-side programming with Ruby on Rails and skilled in database design and management using PostgreSQL.',
    'Proficient in software testing principles and best practices, using Jest to write effective unit and integration tests.',
    'Collaborated with other students in team-based projects, working in Agile development environments and using Git and GitHub for version control and collaborative coding.',
    'Volunteered as a Teaching Assistant, mentoring and guiding 30 students while assisting in their web development projects.',
  ],
}

export const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Zoee',
    startDate: new Date(2023, 5),
    bullets: [
      'Developed and maintained a full stack web application using React.js, Stripe, Jest, Python with AWS Lambdas, and MySQL, resulting in improved user experience and increased revenue.',
      'Utilized Python and AWS Lambdas to develop serverless backend functionality, optimizing performance and scalability.',
      'Collaborated with cross-functional teams to gather requirements, plan sprints, and manage tasks using Jira, ensuring efficient project management and timely delivery.',
      // 'Leveraged AWS SAM (Serverless Application Model) to streamline deployment and management of serverless applications on AWS, reducing infrastructure management overhead.',
      'Participated in agile development methodologies, delivering features and enhancements in regular sprints, ensuring timely delivery and customer satisfaction.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Freelance',
    startDate: new Date(2015, 4),
    endDate: new Date(2023, 2),
    bullets: [
      'Successfully planned and executed development projects, achieving 20% cost savings for clients.',
      'Improved website traffic by 40% by optimizing websites for mobile devices and adhering to SEO best practices.',
      'Developed user-friendly and responsive websites using modern technologies, increasing online visibility by 50%.',
      'Increased business-client communication by 30% by implementing user-friendly contact forms using SendGrid and providing ongoing website maintenance and support to achieve optimal website performance and functionality.',
    ],
  },
  {
    title: 'Digital Wideband Systems Maintainer',
    company: 'United States Marine Corps',
    startDate: new Date(2018, 9),
    bullets: [
      'Maintained and repaired secure military data communication systems with 1,800+ hours of uptime.',
      'Mentored junior Marines, resulting in a 30% improvement in unit readiness for effective and secure communications.',
    ],
  },
  // {
  //   title: 'Merchandiser',
  //   company: "Sam's Club",
  //   startDate: new Date(2017, 4),
  //   endDate: new Date(2021, 0),
  //   bullets: [
  //     'Delivered 95% customer satisfaction by expertly handling inquiries and concerns on product availability, pricing, and quality.',
  //     'Improved product sales by maintaining a clean and organized store environment, stocking shelves, and setting up displays.',
  //   ],
  // },
]

export const projects: Project[] = [
  {
    title: 'ALPost',
    bullets: [
      'Designed and developed a website builder using Next.js framework for American Legion Posts, featuring a multi-tenant architecture, CMS, and custom admin dashboard for managing site content, member data, and visitor messages.',
      'Established subscription payments with secure credit card processing through Stripe.js, and utilized a React UI component library to streamline feature development.',
    ],
    demo: 'https://alpost.org',
  },
  // {
  //   title: 'BioBoost',
  //   bullets: [
  //     'Developed a React application focused on health and productivity, utilizing Next.js, React.js, tRPC, TailwindCSS, and Prisma for database management.',
  //     'Implemented authentication and a dashboard with weight, mood, good habit, and bad habit tracking to help users reinforce positive behaviors and mitigate negative behaviors.',
  //   ],
  //   demo: 'https://app.bioboost.fit',
  //   source: 'https://github.com/raymondkneipp/bioboost-app',
  // },
  {
    title: 'Murph Workout App',
    bullets: [
      'Developed an app using Next.js, React.js, and Tailwindcss, which guides users through the workout and allows them to signup with Google to save their workout times and compete in the monthly leaderboard.',
      'Leveraged Railway, Vercel, Prisma, Luxon, tRPC, Next Auth, Headless UI, and React Icons to build a scalable and user-friendly app with efficient data management, seamless authentication, and intuitive UI components.',
    ],
    demo: 'https://murph.bioboost.fit/',
    source: 'https://github.com/raymondkneipp/murph',
  },
]

export const skills: Skills[] = [
  {
    name: 'Front-end',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'SASS',
    ],
  },
  {
    name: 'Back-end',
    skills: [
      'Ruby',
      'PostgreSQL',
      'Ruby on Rails',
      'Prisma',
      'tRPC',
      'Node.js',
      'MySQL',
      'MongoDB',
      'RSpec',
      // 'Active Record',
      'Express.js',
      'Python',
    ],
  },
  {
    name: 'Tools and technologies',
    skills: ['Postman', 'Git / GitHub', 'Figma', 'Jest', 'AWS', 'Jira'],
  },
  // {
  //   name: 'Soft',
  //   skills: [
  //     'Communication',
  //     'Teamwork',
  //     'Adaptability',
  //     'Time management',
  //     'Customer service',
  //     'Leadership',
  //     'Problem-solving',
  //   ],
  // },
]
