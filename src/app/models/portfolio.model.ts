export interface Project {
  id: string;
  title: string;
  category: 'web' | 'ai' | 'tools' | 'academic';
  categoryLabel: string;
  summary: string;
  description: string;
  tags: string[];
  image: string;
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // percentage 1-100
  icon: string; // primeicon class or svg identifier
  category: 'languages' | 'frameworks' | 'databases' | 'tools';
}

export interface SkillGroup {
  name: string;
  icon: string;
  description: string;
  skills: Skill[];
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'achievement';
  title: string;
  institution: string;
  location: string;
  period: string;
  status?: string;
  description: string;
  highlights: string[];
  icon: string;
  skills?: string[];
}

export interface PersonalInfo {
  name: string;
  roles: string[];
  tagline: string;
  bio: string;
  university: string;
  degree: string;
  year: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  avatarUrl: string;
  resumeUrl: string;
}

export const PORTFOLIO_DATA: {
  personal: PersonalInfo;
  skills: SkillGroup[];
  projects: Project[];
  timeline: TimelineItem[];
} = {
  personal: {
    name: 'Sajib Hossen',
    roles: [
      'Computer Science & Engineering Student',
      'Full-Stack Web Developer',
      'Android App Developer (Kotlin)',
      'Problem Solver & Builder',
    ],
    tagline: 'Computer Science & Engineering Student | Full-Stack Web Developer | Problem Solver',
    bio: 'I am a passionate Computer Science student and software engineer driven by curiosity, algorithmic thinking, and precision. I love transforming complex ideas into clean, scalable software, whether it is high-performance Angular web applications, Kotlin Android solutions, or efficient backend systems.',
    university: 'Gono Bishwabidyalay',
    degree: 'B.Sc. in Computer Science & Engineering',
    year: 'CSE Graduate (2026)',
    location: 'Kaliakair, Gazipur, Dhaka, Bangladesh',
    email: 'sajiboahid007@gmail.com',
    phone: '+880 1571375330',
    whatsapp: '+8801571375330',
    github: 'https://github.com/sajiboahid007',
    linkedin: 'https://www.linkedin.com/in/sajib-oahid-4b97b4147',
    avatarUrl: 'assets/images/profile.jpeg',
    resumeUrl: 'assets/images/SajibHosen.pdf',
  },
  skills: [
    {
      name: 'Programming Languages',
      icon: 'pi pi-code',
      description: 'Core languages for competitive programming, web systems, and mobile apps',
      skills: [
        { name: 'C / C++', level: 90, icon: 'pi pi-code', category: 'languages' },
        { name: 'TypeScript', level: 92, icon: 'pi pi-code', category: 'languages' },
        { name: 'JavaScript', level: 95, icon: 'pi pi-code', category: 'languages' },
        { name: 'Python (Basic)', level: 65, icon: 'pi pi-code', category: 'languages' },
      ],
    },
    {
      name: 'Frameworks & Libraries',
      icon: 'pi pi-box',
      description: 'Front-end frameworks, UI component libraries, and web styling',
      skills: [
        { name: 'Angular', level: 92, icon: 'pi pi-bolt', category: 'frameworks' },
        { name: 'PrimeNG', level: 90, icon: 'pi pi-sparkles', category: 'frameworks' },
        { name: 'Angular Material', level: 88, icon: 'pi pi-box', category: 'frameworks' },
        { name: 'Bootstrap', level: 88, icon: 'pi pi-palette', category: 'frameworks' },
        { name: 'HTML5 & CSS3', level: 95, icon: 'pi pi-palette', category: 'frameworks' },
        { name: 'React (Basic)', level: 65, icon: 'pi pi-box', category: 'frameworks' },
      ],
    },
    {
      name: 'Databases & ORM',
      icon: 'pi pi-database',
      description: 'Relational database design, SQL querying, schema modeling, and Prisma ORM',
      skills: [
        {
          name: 'SQL Server Management Studio (SSMS)',
          level: 95,
          icon: 'pi pi-database',
          category: 'databases',
        },
        { name: 'MySQL', level: 90, icon: 'pi pi-database', category: 'databases' },
        { name: 'Prisma ORM', level: 85, icon: 'pi pi-database', category: 'databases' },
      ],
    },
    {
      name: 'Tools & Development',
      icon: 'pi pi-cog',
      description: 'Version control, API testing, and Angular development workflows',
      skills: [
        { name: 'Git & GitHub', level: 92, icon: 'pi pi-github', category: 'tools' },
        { name: 'Postman (API Testing)', level: 90, icon: 'pi pi-send', category: 'tools' },
        { name: 'Angular CLI', level: 90, icon: 'pi pi-bolt', category: 'tools' },
      ],
    },
  ],
  projects: [
    {
      id: 'academic-submission-portal',
      title: 'Academic Submission Management Portal',
      category: 'academic',
      categoryLabel: 'Defense Project',
      summary:
        'Full-stack thesis and project submission portal for students and supervisors with approval workflows and role-based access.',
      description:
        'My university defense project: a full-stack academic submission portal built with Angular, Node.js, and MSSQL. Students submit theses and projects, supervisors review and approve or reject them, and administrators manage users and role assignments. Files are stored on Cloudinary, and the responsive UI is built with PrimeNG.',
      tags: ['Angular', 'Node.js', 'MSSQL', 'PrimeNG', 'JWT', 'Cloudinary'],
      image: 'assets/images/project-academic-portal.svg',
      githubUrl: 'https://github.com/Sajiboahid007/academic-submission-system',
      features: [
        'Full-stack submission portal using Angular, Node.js, MSSQL, PrimeNG, JWT, and Cloudinary',
        'Cloudinary integration for file storage and PrimeNG for responsive UI development',
        'JWT-based authentication and role-based authorization',
        'Thesis and project submission workflows for students and supervisors',
        'Approval/rejection functionality for supervisor reviews',
        'Complete user management system with role assignments',
      ],
      featured: true,
    },
    {
      id: 'rezvon-ecommerce',
      title: "Rezvon - Men's Clothing E-Commerce Platform",
      category: 'web',
      categoryLabel: 'Full-Stack E-Commerce',
      summary:
        "Full-stack e-commerce platform for a men's clothing brand with RBAC, admin portals, sales analytics, and automated invoices.",
      description:
        "A full-stack e-commerce platform for the men's clothing brand Rezvon, built with Angular, Supabase, PrimeNG, and Cloudinary. It includes secure authentication with Role-Based Access Control, admin portals for orders, product variants, and delivery tracking, Chart.js sales analytics, and automated invoice generation with jsPDF.",
      tags: ['Angular', 'Supabase', 'PrimeNG', 'Cloudinary', 'Chart.js', 'jsPDF'],
      image: 'assets/images/project-rezvon.svg',
      liveUrl: 'https://erezvon-bd-frontend.vercel.app',
      features: [
        'Full-stack e-commerce platform using Angular, Supabase, PrimeNG, and Cloudinary',
        'Cloudinary for image storage and PrimeNG for responsive UI design',
        'Secure authentication and Role-Based Access Control (RBAC) with route guards',
        'Admin management portals for order processing, product variants, and delivery tracking',
        'Chart.js for visual sales analytics and jsPDF for automated invoice generation',
      ],
      featured: true,
    },
    {
      id: 'ekisti-microfinance',
      title: 'eKisti - Microfinance Management System',
      category: 'web',
      categoryLabel: 'Full-Stack / FinTech',
      summary:
        'Microfinance platform with double-entry ledgers, loan approval workflows, a full audit trail, and RBAC for 5 staff roles.',
      description:
        'A full-stack microfinance management platform built with Angular 21, Firebase Firestore, and TypeScript. It uses atomic Firestore transactions with double-entry ledgers and a full audit trail, a loan approval workflow covering field verification, approval, and cashier disbursement, and Role-Based Access Control with route guards for 5 staff roles.',
      tags: ['Angular 21', 'Firebase', 'Firestore', 'TypeScript', 'RBAC'],
      image: 'assets/images/project-ekisti.svg',
      githubUrl: 'https://github.com/Sajiboahid007/eKisti-app',
      features: [
        'Full-stack microfinance platform using Angular 21, Firebase Firestore, and TypeScript',
        'Atomic Firestore transactions with double-entry ledgers and a full audit trail',
        'Loan approval workflow with field verification, approval, and cashier disbursement',
        'Role-Based Access Control (RBAC) with route guards for 5 staff roles',
      ],
      featured: true,
    },
    {
      id: 'dhaka-bus-finder',
      title: 'Dhaka Bus Finder',
      category: 'web',
      categoryLabel: 'PWA / Maps',
      summary:
        'Bilingual PWA that helps Dhaka commuters find buses, routes, and one-transfer trips, with offline support.',
      description:
        'A bilingual Progressive Web App that helps Dhaka commuters find buses, routes, and one-transfer trips, even offline. The frontend is built with Angular and PrimeNG with interactive Leaflet/OpenStreetMap maps, while Firebase Firestore, Auth, and Hosting power the backend. Custom Node.js scripts snap routes to roads using OSRM and geocode bus stops.',
      tags: ['Angular', 'PrimeNG', 'Leaflet', 'OpenStreetMap', 'Firebase', 'Node.js', 'PWA'],
      image: 'assets/images/project-dhaka-bus.svg',
      liveUrl: 'https://bus-finder-web.vercel.app/',
      features: [
        'Bilingual PWA to find buses, routes, and one-transfer trips with offline support',
        'Angular and PrimeNG frontend with interactive maps using Leaflet and OpenStreetMap',
        'Firebase Firestore, Auth, and Hosting for the backend',
        'Node.js scripts to snap routes to roads (OSRM) and geocode stops',
      ],
      featured: true,
    },
    {
      id: 'mobile-shopbd',
      title: 'Mobile ShopBD - Device E-Commerce Platform',
      category: 'web',
      categoryLabel: 'Full-Stack E-Commerce',
      summary:
        'Full-stack mobile device e-commerce app with device comparison, catalog filtering, reviews, and order tracking.',
      description:
        'A full-stack e-commerce web app for mobile devices built with Angular, Node.js, and MSSQL. It features JWT-based authentication with a role-based admin dashboard, device comparison, catalog filtering, customer reviews, and cart and checkout workflows with order status tracking, all in a responsive PrimeNG UI backed by RESTful APIs.',
      tags: ['Angular', 'Node.js', 'MSSQL', 'PrimeNG', 'JWT', 'REST API'],
      image: 'assets/images/project-mobileshopbd.svg',
      githubUrl: 'https://github.com/Sajiboahid007/mobile-shop-frontend',
      features: [
        'Full-stack e-commerce web app using Angular, Node.js, and MSSQL',
        'JWT-based authentication and role-based admin dashboard',
        'Device comparison, catalog filtering, and customer review modules',
        'Cart and checkout workflows with order status tracking',
        'Responsive UI using PrimeNG with integrated RESTful APIs',
      ],
      featured: true,
    },
    {
      id: 'ai-chatbot-gemini',
      title: 'AI Chatbot (Google Gemini API)',
      category: 'ai',
      categoryLabel: 'AI / Chatbot',
      summary:
        'AI-powered chatbot built with the Google Gemini API and Node.js that generates intelligent responses to user questions.',
      description:
        'An AI-powered chatbot built with the Google Gemini API and Node.js. It uses natural language processing to generate intelligent responses, exposes RESTful Express APIs for chatbot communication, and handles prompt management and response processing for smooth conversations.',
      tags: ['Gemini API', 'Node.js', 'Express', 'REST API', 'NLP'],
      image: 'assets/images/project-ai-chatbot.svg',
      githubUrl: 'https://github.com/Sajiboahid007',
      features: [
        'AI-powered chatbot using Google Gemini API and Node.js',
        'Natural language processing capabilities to generate intelligent user responses',
        'RESTful APIs with Express.js for chatbot communication and request handling',
        'Prompt management and response processing for seamless conversational interactions',
      ],
      featured: true,
    },
    {
      id: 'gono-uv-research',
      title: 'Institutional Research Repository and Peer-Reviewed Journal Management System',
      category: 'academic',
      categoryLabel: 'Academic Submission System',
      summary:
        'University final-year project defense, faculty research showcase, peer-review submissions, and Gemini AI plagiarism verification.',
      description:
        'The core backend API and repository system built as my university defense project for Gono Bishwabidyalay. The platform manages the showcase and archiving of final-year undergraduate projects and faculty-published research papers. Features an academic peer-review submission workflow, automated plagiarism and originality checking using Google Gemini API, secure authentication with hashed passwords and refresh token rotation, and robust ACID transactional data consistency powered by Prisma ORM and MySQL.',
      tags: [
        'TypeScript',
        'Node.js',
        'Prisma ORM',
        'MySQL',
        'Gemini AI',
        'JWT Auth',
        'ACID Transactions',
      ],
      image: 'assets/images/project-research-repo.svg',
      features: [
        'Final-year project & teacher published paper showcase with categorized indexing',
        'Peer-review system for research paper and journal article submissions',
        'Google Gemini AI integration for automated plagiarism and originality checking',
        'Secure authentication architecture with password hashing and JWT refresh token rotation',
        'Prisma ORM data layer enforcing ACID transaction properties and schema integrity',
      ],
      githubUrl: 'https://github.com/sajiboahid007/gono-uv-research-project-repository-system',
      featured: true,
    },
    {
      id: 'university-materials',
      title: 'UniMaterials - Course Resource Sharing Platform',
      category: 'academic',
      categoryLabel: 'Academic & Mobile',
      summary:
        'A centralized platform for university students and teachers to store, share, and organize course materials and PDFs.',
      description:
        'A native Android application providing organized course folders, offline PDF caching, semester-wise syllabus management, and instant search across departmental resources for students and lecturers.',
      tags: ['Kotlin', 'Android SDK', 'Firebase', 'Material Design'],
      image: 'assets/images/project-unimaterials.svg',
      features: [
        'Centralized cloud storage for course lecture notes, slides, and past papers',
        'Department and semester-wise categorized folder navigation',
        'Offline PDF viewer and download manager',
        'Teacher announcement channel and student discussions',
      ],
      githubUrl: 'https://github.com/sajiboahid007/University_matrials',
      featured: true,
    },
    {
      id: 'tailor-management',
      title: 'Tailor Shop Order & Measurement System',
      category: 'web',
      categoryLabel: 'First Web Project / CRUD System',
      summary:
        'My very first web development project: a practical tailor shop order management system for customer size measurements and CRUD operations.',
      description:
        'My milestone first project in web development, built to help tailoring shop owners manage customer orders and size measurements efficiently. The application provides complete CRUD operations for recording client body dimensions, order dates, and delivery tracking. Developed using JavaScript, HTML5, CSS, and Bootstrap, utilizing modular PHP for page wrapping and MySQL for persistent data storage.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'SQL-Server', 'PHP'],
      image: 'assets/images/project-tailor.svg',
      features: [
        'Customer measurement profile management with custom size records',
        'Complete CRUD operations for tailor shop orders and delivery tracking',
        'Multi-page modular layout built with JavaScript, Bootstrap, and HTML/CSS',
        'MySQL database integration for saving client measurements and orders',
        'Foundational milestone project marking the start of my web development journey',
      ],
      githubUrl: 'https://github.com/sajiboahid007/tailor-management-system',
      featured: true,
    },
    {
      id: 'billeasy',
      title: 'BillEasy - Multi-Business Billing & Due Ledger App',
      category: 'tools',
      categoryLabel: 'Mobile App / Billing Tool',
      summary:
        'Multi-purpose billing and ledger tracking app engineered for 3 user types: Cable & ISP operators, private tutors, and grocery store owners.',
      description:
        'A versatile billing and record-keeping application built to solve real business workflows across three distinct user categories: (1) Cable & ISP operators to manage subscriber bills, dates, and phone numbers; (2) Private Tutors to track student monthly tuition fees, payment records, and due amounts; and (3) Grocery Store owners to maintain customer credit ledgers (khata) with recorded dues and payments. Features local database persistence for reliable offline access.',
      tags: ['Kotlin', 'Android', 'SQL lite', 'Local Storage', 'Billing System'],
      image: 'assets/images/project-billeasy.svg',
      features: [
        '3-in-1 tailored business modes: Cable/ISP Billing, Tuition Tracker, and Grocery Ledger',
        'Cable & ISP module: Manage subscriber contact numbers, billing dates, and payment history',
        'Tuition module: Add students, record monthly tuition payments, and track outstanding dues',
        'Grocery shop module: Maintain customer credit ledger (khata), dues (baki), and paid records',
        'Offline-first local database storage for seamless day-to-day transaction recording',
      ],
      githubUrl: 'https://github.com/sajiboahid007/BillEasy',
      featured: false,
    },
    {
      id: 'restaurant-table-management',
      title: 'Canteen Table & Order Management System',
      category: 'web',
      categoryLabel: 'Web App / Order Management',
      summary:
        'A streamlined canteen management web app for table allocation, food menu ordering, automated billing, and live occupied/available status tracking.',
      description:
        'A specialized canteen and dining table management system built to streamline food ordering and table turnover. The application allows staff to manage tables, add food items with prices, and assign orders per table. Table occupancy status updates in real-time — switching to "Occupied" when an order is placed and reverting to "Available" once the bill is settled and paid.',
      tags: ['JavaScript', 'Node.js', 'Express', 'SQL-Server', 'Bootstrap', 'CSS', 'HTML'],
      image: 'assets/images/project-canteen.svg',
      features: [
        'Dynamic table management with live Occupied vs. Available status tracking',
        'Food menu catalog management with item pricing and quantity selection',
        'Automated table status transitions: "Occupied" on new order, "Available" upon bill payment',
        'Instant total bill computation and payment settlement workflow',
        'Clean, responsive dashboard tailored for rapid canteen dining operations',
      ],
      githubUrl: 'https://github.com/sajiboahid007/Restaurant-Table-Management',
      featured: false,
    },
    {
      id: 'sort-visual',
      title: 'SortVisual - Algorithm Sorting Visualizer',
      category: 'academic',
      categoryLabel: 'Educational Tool / CS',
      summary:
        'Interactive educational tool built for teachers and students to visually demonstrate algorithm workflows and value changes step-by-step.',
      description:
        'An interactive computer science educational platform designed for university teachers and students to explore algorithmic problem solving visually. The application demonstrates step-by-step how sorting algorithms operate, providing live visual feedback as element values compare, swap, and transition into sorted order. Features adjustable playback speeds and custom inputs for intuitive classroom lectures and self-paced study.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Algorithms', 'Data Structures', 'Education'],
      image: 'assets/images/project-sortvisual.svg',
      features: [
        'Interactive step-by-step visualizer for BubbleSort, SelectionSort, InsertionSort, QuickSort, and MergeSort',
        'Built for teachers and students to illustrate algorithmic value changes and inner mechanics',
        'Real-time color-coded tracking of element comparisons, index pointers, and bar swaps',
        'Customizable array sizes and animation speed controls for classroom demonstrations',
        'Pure JavaScript implementation focusing on clean algorithmic logic and smooth rendering',
      ],
      githubUrl: 'https://github.com/sajiboahid007/Sort-visual',
      featured: false,
    },
    {
      id: 'e-beauty-products',
      title: 'E-Beauty - Modern E-Commerce Platform',
      category: 'web',
      categoryLabel: 'Full-Stack E-Commerce',
      summary:
        'Full-featured online retail store with dynamic catalog filtering, persistent cart, RESTful checkout, and real-time order tracking via unique Tracking ID.',
      description:
        'A responsive e-commerce web application designed with an Angular frontend, Node.js & Express backend, and SQL Server database. Features dynamic product filtering, persistent shopping cart management, RESTful checkout processing, and real-time order tracking where customers receive a unique Tracking ID to monitor shipment progress.',
      tags: [
        'TypeScript',
        'Angular',
        'Node.js',
        'Express',
        'SQL-Server',
        'SCSS',
        'HTML',
        'Bootstrap',
      ],
      image: 'assets/images/project-ebeauty.svg',
      features: [
        'Dynamic product catalog with category and price range filtering',
        'State-driven shopping cart with local storage persistence',
        'Order tracking system with unique Tracking ID to monitor live shipment status',
        'RESTful API backend for order processing and inventory updates',
        'Clean, responsive mobile-first shopping interface styled with Bootstrap & SCSS',
      ],
      githubUrl: 'https://github.com/sajiboahid007/E-Beauty-Products',
      featured: false,
    },
    {
      id: 'daily-work-overtime',
      title: 'Daily Work & Overtime Wage Calculator',
      category: 'tools',
      categoryLabel: 'Mobile App / Wage Calculator',
      summary:
        'A dedicated mobile utility for daily wage workers and shift employees to log work hours, calculate overtime durations, and track total earned money.',
      description:
        'A practical Android mobile application built for daily wage workers and shift employees to easily record their daily work hours and calculate overtime income. Users can set their custom hourly wage rates, log daily shift start/end times, and instantly calculate exact overtime earnings. Features offline SQLite database storage to keep an accurate monthly log of worked hours and total payments.',
      tags: ['Kotlin', 'Android', 'SQLite', 'Local Storage', 'Wage Calculator'],
      image: 'assets/images/project-overtime.svg',
      features: [
        'Daily work and overtime shift logging with automated duration calculations',
        'Real-time overtime wage and total earnings computation based on custom hourly rates',
        'Date-wise shift history and monthly wage summary records for workers',
        'Offline-first SQLite local database for reliable record storage without internet',
        'Simple, worker-friendly interface designed for quick and easy daily entry',
      ],
      githubUrl: 'https://github.com/sajiboahid007/Daily-work-over-time',
      featured: false,
    },
  ],
  timeline: [
    {
      id: 'edu-bsc',
      type: 'education',
      title: 'B.Sc. in Computer Science & Engineering',
      institution: 'Gono Bishwabidyalay',
      location: 'Savar, Dhaka, Bangladesh',
      period: '2022 - 2026',
      status: 'Graduated (CGPA: 3.51/4.00)',
      description:
        'Completed my undergraduate studies in Computer Science & Engineering, gaining a solid foundation in software engineering, algorithms, data structures, and modern web systems.',
      highlights: [
        'Key Coursework: Advanced Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence & Expert Systems, C/C++, Data Structures, Digital Logic Design, Discrete Mathematics, Android Application Development, Web Programming',
        'Academic Standing: Graduated with Honors (CGPA: 3.51/4.00)',
        'Ranked among the Top 3 coders in the department with deep passion for competitive programming and practical software development',
        'Research Project: Machine Learning model for early disease detection',
        'Presented findings at the Annual Computer Science Symposium (2026)',
      ],
      icon: 'pi pi-graduation-cap',
      skills: [
        'Data Structures',
        'Algorithms',
        'OOP',
        'DBMS',
        'OS',
        'System Design',
        'Android Application',
        'Angular',
        'JavaScript',
        'TypeScript',
      ],
    },
    {
      id: 'achieve-gbpc',
      type: 'achievement',
      title: 'GBPC Programming Contest - 1st Place Winner (Champion)',
      institution: 'Gono Bishwabidyalay',
      location: 'Savar, Dhaka, Bangladesh',
      period: '2025',
      status: '1st Winner / Champion',
      description:
        'Achieved 1st place in the university-wide competitive programming contest, demonstrating advanced problem solving in algorithms and data structures.',
      highlights: [
        'Champion / 1st Place Winner in the Gono Bishwabidyalay Programming Contest (GBPC 2025)',
        'Consistently recognized among the Top 3 coders in the department for algorithmic problem solving',
      ],
      icon: 'pi pi-trophy',
      skills: [
        'Competitive Programming',
        'C/C++',
        'Data Structures',
        'Algorithms',
        'Problem Solving',
      ],
    },
    {
      id: 'edu-hsc',
      type: 'education',
      title: 'Higher Secondary Certificate (HSC) - Science',
      institution: 'Kaliakair Degree College',
      location: 'Kaliakair, Gazipur, Bangladesh',
      period: '2018 - 2021',
      status: 'GPA: 4.00 / 5.00',
      description:
        'Completed Higher Secondary Certificate in Science group with emphasis on Mathematics, Physics, Chemistry, and ICT.',
      highlights: [
        'Group: Science | Result: GPA 4.00 out of 5.00',
        'Focused on Mathematics, Physics, Chemistry, and Information & Communication Technology',
      ],
      icon: 'pi pi-book',
      skills: ['Physics', 'Chemistry', 'Higher Mathematics', 'ICT'],
    },
  ],
};
