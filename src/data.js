// All portfolio content lives here — edit this file to update the site
// without touching any component code.

export const profile = {
  name: 'Shruti Barai',
  taglines: ['Full-Stack Developer', 'React.js & Next.js', 'Ruby on Rails & MongoDB'],
  summary:
    'Full-Stack Developer with 3 years of experience building responsive, reusable web apps with React.js, Next.js and modern JavaScript on the frontend, and REST APIs, background jobs and databases with Ruby on Rails and MongoDB on the backend.',
  location: 'Pune, Maharashtra, India',
  email: 'shrutibarai2000@gmail.com',
  github: 'https://github.com/shrutibarai',
  linkedin: 'https://www.linkedin.com/in/shruti-barai-b63872190/', // TODO: add your LinkedIn URL
}

export const stats = [
  { num: '3 yrs', label: 'Professional experience' },
  { num: '8.87', label: 'CGPA · B.Tech IT' },
  { num: '4', label: 'Featured projects' },
  { num: 'Pune', label: 'India' },
]

export const about = [
  "I work across the full stack — building responsive, reusable web applications with React.js, Next.js, JavaScript (ES6+), HTML5 and CSS3 on the frontend, with a strong focus on component-based architecture, state management and clean, maintainable code.",
  "On the backend, I build REST APIs, background jobs and test suites with Ruby on Rails, MongoDB, SQL, Sidekiq and RSpec — owning features end to end rather than just the UI layer.",
]

export const skillGroups = [
  {
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'React Hooks', 'React Router', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'State & Data',
    tags: ['Context API', 'Redux', 'Redux Toolkit', 'REST APIs', 'Axios', 'JSON'],
  },
  {
    title: 'Backend & Data',
    tags: ['Ruby on Rails', 'Python', 'SQL', 'MongoDB', 'Sidekiq'],
  },
  {
    title: 'Testing & Practice',
    tags: ['RSpec', 'Unit Testing', 'Agile', 'Git & GitHub', 'Debugging'],
  },
]

export const marqueeSkills = [
  'React.js', 'Next.js', 'JavaScript', 'Redux', 'Ruby on Rails', 'MongoDB', 'REST APIs', 'RSpec', 'Sidekiq',
]

export const experience = [
  {
    role: 'Software Developer',
    org: 'Dynamisch',
    date: 'Jan 2024 – July 2026',
    points: [
      'Built and maintained reusable, responsive UI components with React.js and modern JavaScript (ES6+).',
      'Implemented frontend state management and REST API integration for dynamic, data-driven features.',
      'Transitioned into backend work with Ruby on Rails, building RESTful APIs and application features.',
      'Designed a custom audit-trail system from scratch to track and log user activity.',
      'Wrote unit and integration tests with RSpec and added Sidekiq background jobs for async processing.',
    ],
  },
  {
    role: 'Software Developer Intern',
    org: 'Align Infotech',
    date: '2020 – 2021',
    points: [
      'Built responsive web interfaces with HTML5, CSS3 and JavaScript for a product-based website.',
      'Developed reusable, maintainable UI components as part of a frontend team.',
      'Trained incoming interns on HTML, CSS and JavaScript fundamentals.',
    ],
  },
]

export const projects = [
  {
    tag: 'Frontend',
    title: 'E-Commerce Web Application',
    description:
      'Responsive e-commerce interface with reusable product, category, search, cart and wishlist components. React Hooks (useState, useEffect) drive dynamic UI updates, wired to REST APIs for live product/category data.',
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    link: 'https://github.com/shrutibarai/BuyFromME',
  },
  {
    tag: 'Full-Stack · Ongoing',
    title: 'Healthcare Training & Assessment Platform',
    description:
      'Platform for courses, skill-based examinations and competency management. Built backend functionality and REST APIs in Ruby on Rails, a MongoDB-backed audit-trail system, Sidekiq background jobs, and RSpec test coverage.',
    stack: ['Ruby on Rails', 'MongoDB', 'Sidekiq', 'RSpec', 'REST APIs'],
    link: null,
  },
  {
    tag: 'Personal POC',
    title: 'Real-Time Chat App',
    description:
      'Real-time chat application with a Rails API backend and a vanilla JavaScript frontend. JWT authentication, Google OAuth login, and live messaging powered by WebSockets via Action Cable.',
    stack: ['Ruby on Rails', 'Action Cable', 'JWT', 'Google OAuth', 'JavaScript'],
    link: 'https://github.com/shrutibarai/ChatRoom-',
  },
  {
    tag: 'Personal POC',
    title: 'Keyboard FX',
    description:
      'A customizable Windows desktop application that plays sound effects when keyboard keys are pressed — built outside the usual web stack to explore desktop app development and audio handling in Python.',
    stack: ['Python', 'Desktop App', 'Audio'],
    link: 'https://github.com/shrutibarai/keyboard-fx',
  },
]

export const education = {
  school: 'Priyadarshini Institute of Engineering and Technology',
  degree: 'B.Tech — Information Technology',
  date: '2018 – 2022',
  score: '8.87',
}
