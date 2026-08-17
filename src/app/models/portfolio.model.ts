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
      'Problem Solver & Builder'
    ],
    tagline: 'Computer Science & Engineering Student | Full-Stack Web Developer | Problem Solver',
    bio: 'I am a passionate Computer Science student and software engineer driven by curiosity, algorithmic thinking, and precision. I love transforming complex ideas into clean, scalable software, whether it is high-performance Angular web applications, Kotlin Android solutions, or efficient backend systems.',
    university: 'Gono Bishwabidyalay',
    degree: 'B.Sc. in Computer Science & Engineering',
    year: 'CSE Graduate (2026)',
    location: 'Savar, Dhaka, Bangladesh',
    email: 'sajiboahid007@gmail.com',
    phone: '+880 1571375330',
    whatsapp: '+8801571375330',
    github: 'https://github.com/sajiboahid007',
    linkedin: 'https://www.linkedin.com/in/sajib-oahid-4b97b4147',
    avatarUrl: 'assets/images/profile.jpeg'
  },
  skills: [
    {
      name: 'Programming Languages',
      icon: 'pi pi-code',
      description: 'Core languages for web, mobile, and system-level applications',
      skills: [
        { name: 'TypeScript', level: 90, icon: 'pi pi-code', category: 'languages' },
        { name: 'JavaScript (ES6+)', level: 95, icon: 'pi pi-code', category: 'languages' },
        { name: 'Kotlin', level: 88, icon: 'pi pi-android', category: 'languages' },
        { name: 'C / C++', level: 82, icon: 'pi pi-code', category: 'languages' },
        { name: 'PHP', level: 75, icon: 'pi pi-server', category: 'languages' },
        { name: 'HTML5 & SCSS/CSS3', level: 95, icon: 'pi pi-palette', category: 'languages' }
      ]
    },
    {
      name: 'Frameworks & Libraries',
      icon: 'pi pi-box',
      description: 'Modern front-end, mobile, and backend component frameworks',
      skills: [
        { name: 'Angular (Signals & Standalone)', level: 92, icon: 'pi pi-bolt', category: 'frameworks' },
        { name: 'Android SDK & Jetpack', level: 85, icon: 'pi pi-android', category: 'frameworks' },
        { name: 'PrimeNG & Angular Material', level: 90, icon: 'pi pi-sparkles', category: 'frameworks' },
        { name: 'Node.js & Express', level: 85, icon: 'pi pi-server', category: 'frameworks' },
        { name: 'Tailwind CSS', level: 90, icon: 'pi pi-palette', category: 'frameworks' }
      ]
    },
    {
      name: 'Databases & Cloud',
      icon: 'pi pi-database',
      description: 'Relational, NoSQL, mobile, and scalable cloud storage solutions',
      skills: [
        { name: 'SQL Server Management Studio (SSMS)', level: 95, icon: 'pi pi-database', category: 'databases' },
        { name: 'MySQL', level: 90, icon: 'pi pi-database', category: 'databases' },
        { name: 'PostgreSQL', level: 85, icon: 'pi pi-database', category: 'databases' },
        { name: 'Firebase', level: 80, icon: 'pi pi-cloud', category: 'databases' },
        { name: 'SQLite / Room DB', level: 85, icon: 'pi pi-mobile', category: 'databases' }
      ]
    },
    {
      name: 'Tools & DevOps',
      icon: 'pi pi-cog',
      description: 'Workflow, testing, version control, and development tooling',
      skills: [
        { name: 'Git & GitHub', level: 92, icon: 'pi pi-github', category: 'tools' },
        { name: 'Postman & REST API Design', level: 90, icon: 'pi pi-send', category: 'tools' },
        { name: 'Linux / Bash', level: 82, icon: 'pi pi-terminal', category: 'tools' },
        { name: 'Docker & Containers', level: 78, icon: 'pi pi-box', category: 'tools' },
        { name: 'Vite / Webpack / Angular CLI', level: 88, icon: 'pi pi-sliders-h', category: 'tools' },
        { name: 'Figma to Code', level: 85, icon: 'pi pi-palette', category: 'tools' }
      ]
    }
  ],
  projects: [
    {
      id: 'gono-uv-research',
      title: 'Gono University Research Repository System',
      category: 'academic',
      categoryLabel: 'Academic & CS',
      summary: 'Centralized research and thesis archive platform engineered for university faculty, researchers, and students.',
      description: 'An enterprise academic platform engineered for Gono Bishwabidyalay to catalog, review, and preserve undergraduate and faculty research papers, thesis documents, and capstone software projects with role-based access control.',
      tags: ['TypeScript', 'Angular', 'Node.js', 'PostgreSQL', 'Tailwind'],
      image: 'assets/images/project-ai.svg',
      features: [
        'Centralized thesis document indexing and metadata cataloging',
        'Role-based dashboard for students, faculty supervisors, and department heads',
        'Fast search and category-wise filtering for research papers',
        'Secure PDF storage and version control for project submissions'
      ],
      githubUrl: 'https://github.com/sajiboahid007/gono-uv-research-project-repository-system',
      featured: true
    },
    {
      id: 'university-materials',
      title: 'UniMaterials - Course Resource Sharing Platform',
      category: 'academic',
      categoryLabel: 'Academic & Mobile',
      summary: 'A centralized platform for university students and teachers to store, share, and organize course materials and PDFs.',
      description: 'A native Android application providing organized course folders, offline PDF caching, semester-wise syllabus management, and instant search across departmental resources for students and lecturers.',
      tags: ['Kotlin', 'Android SDK', 'Firebase', 'Material Design'],
      image: 'assets/images/project-tools.svg',
      features: [
        'Centralized cloud storage for course lecture notes, slides, and past papers',
        'Department and semester-wise categorized folder navigation',
        'Offline PDF viewer and download manager',
        'Teacher announcement channel and student discussions'
      ],
      githubUrl: 'https://github.com/sajiboahid007/University_matrials',
      featured: true
    },
    {
      id: 'tailor-management',
      title: 'TailorFit - Custom Tailoring Management System',
      category: 'web',
      categoryLabel: 'Management System',
      summary: 'Full-featured tailoring workflow platform with customer measurements, order lifecycle, and invoicing.',
      description: 'A comprehensive management platform built for custom tailoring shops to store precise measurement profiles, track garment fabrication stages, generate automated invoices, and send delivery notifications.',
      tags: ['Hack', 'PHP', 'MySQL', 'JavaScript', 'Tailwind'],
      image: 'assets/images/project-server.svg',
      features: [
        'Detailed customer measurement records with custom garment specifications',
        'Order progress lifecycle tracking (Cutting, Stitching, Quality Check, Ready)',
        'Automated invoice generation and balance payment records',
        'Daily order analytics and tailor workload distribution'
      ],
      githubUrl: 'https://github.com/sajiboahid007/tailor-management-system',
      featured: true
    },
    {
      id: 'billeasy',
      title: 'BillEasy - Smart Invoicing & Expense App',
      category: 'tools',
      categoryLabel: 'Mobile App',
      summary: 'Mobile invoicing, expense calculation, and receipt management application for small businesses.',
      description: 'Simplifies client billing, invoice PDF generation, tax calculations, and payment tracking with a clean, offline-friendly mobile interface.',
      tags: ['Kotlin', 'Android', 'Room DB', 'PDF Generator'],
      image: 'assets/images/project-ecommerce.svg',
      features: [
        'Instant professional PDF invoice generation and sharing',
        'Client and item catalog management for fast bill creation',
        'Tax, discount, and balance payment calculations',
        'Expense tracker with visual category summaries'
      ],
      githubUrl: 'https://github.com/sajiboahid007/BillEasy',
      featured: true
    },
    {
      id: 'restaurant-table-management',
      title: 'DineMaster - Restaurant & Table Management',
      category: 'web',
      categoryLabel: 'Full-Stack Web',
      summary: 'Interactive table reservation, kitchen order ticketing, and dining floor management application.',
      description: 'Full-stack dining management system supporting real-time floor plan status, automated billing calculation, kitchen order workflow, and daily revenue statistics.',
      tags: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'CSS3'],
      image: 'assets/images/project-server.svg',
      features: [
        'Live table booking and visual occupancy status tracking',
        'Automated bill generation with service tax calculations',
        'Kitchen order ticketing (KOT) workflow management',
        'Customer order history and daily sales reports'
      ],
      githubUrl: 'https://github.com/sajiboahid007/Restaurant-Table-Management',
      featured: true
    },
    {
      id: 'sort-visual',
      title: 'SortVisual - Algorithm Sorting Visualizer',
      category: 'academic',
      categoryLabel: 'Academic / CS',
      summary: 'Interactive step-by-step visualizer for sorting algorithms with playback speed controls.',
      description: 'An educational computer science visualizer demonstrating how sorting algorithms operate in real-time with customizable array sizes, speed controls, and bar swap animations.',
      tags: ['JavaScript', 'HTML5', 'Canvas', 'SCSS', 'Algorithms'],
      image: 'assets/images/project-algo.svg',
      features: [
        'Visualizes BubbleSort, SelectionSort, InsertionSort, QuickSort, and MergeSort',
        'Customizable array size and animation execution speed slider',
        'Real-time comparison and array access counters',
        'Color-coded states for active comparisons, pivots, and sorted elements'
      ],
      githubUrl: 'https://github.com/sajiboahid007/Sort-visual',
      featured: true
    },
    {
      id: 'e-beauty-products',
      title: 'E-Beauty - Modern E-Commerce Platform',
      category: 'web',
      categoryLabel: 'Full-Stack Web',
      summary: 'Full-featured online retail store with dynamic catalog filtering, cart management, and responsive UI.',
      description: 'A responsive web shop designed with a modular architecture, featuring real-time product search, customer reviews, category pagination, and persistent cart synchronization.',
      tags: ['TypeScript', 'Angular', 'Node.js', 'Express', 'MySQL', 'SCSS'],
      image: 'assets/images/project-ecommerce.svg',
      features: [
        'Dynamic product catalog with category and price range filtering',
        'State-driven shopping cart with local storage persistence',
        'RESTful API backend for order processing and inventory updates',
        'Clean, responsive mobile-first shopping interface'
      ],
      githubUrl: 'https://github.com/sajiboahid007/E-Beauty-Products',
      featured: false
    },
    {
      id: 'online-food-delivery',
      title: 'QuickBite - Online Food Delivery System',
      category: 'web',
      categoryLabel: 'Full-Stack Web',
      summary: 'End-to-end food ordering and delivery system with restaurant menus, cart, and order tracking.',
      description: 'Multi-restaurant food delivery platform featuring real-time menu browsing, customizable item toppings, live delivery status, and restaurant order acceptance workflows.',
      tags: ['TypeScript', 'Angular', 'Node.js', 'Express', 'PostgreSQL'],
      image: 'assets/images/project-git.svg',
      features: [
        'Interactive food menu with item customization and add-ons',
        'Live order progress tracking from preparation to dispatch',
        'Restaurant management portal for menu and price updates',
        'Customer address management and order history'
      ],
      githubUrl: 'https://github.com/sajiboahid007/online-food-delivery-system',
      featured: false
    },
    {
      id: 'daily-work-overtime',
      title: 'OverTime Tracker - Work & Wage Calculator',
      category: 'tools',
      categoryLabel: 'Mobile App',
      summary: 'Android utility app for daily work overtime calculation, shift logs, and wage estimation.',
      description: 'A dedicated mobile application for tracking work shifts, calculating overtime compensation based on custom hourly rates, and generating monthly work summary reports.',
      tags: ['Kotlin', 'Android SDK', 'SQLite', 'Material 3'],
      image: 'assets/images/project-tools.svg',
      features: [
        'Shift start/end timer with automatic overtime duration calculator',
        'Custom wage rate settings per shift and holiday multipliers',
        'Monthly compensation summary graphs and exportable logs',
        'Offline-first lightweight SQLite local database'
      ],
      githubUrl: 'https://github.com/sajiboahid007/Daily-work-over-time',
      featured: false
    },
    {
      id: 'academic-submission',
      title: 'AcademiX - Online Assignment Submission Portal',
      category: 'academic',
      categoryLabel: 'Academic & CS',
      summary: 'Automated assignment submission, deadline tracking, and grading system for university courses.',
      description: 'Web application enabling students to upload laboratory reports, project source code, and assignments with deadline validation and instructor grading rubrics.',
      tags: ['TypeScript', 'Angular', 'Express', 'PostgreSQL'],
      image: 'assets/images/project-git.svg',
      features: [
        'Course-wise assignment submission with strict deadline enforcement',
        'Instructor grading and feedback annotation panel',
        'Multi-file attachment support with preview',
        'Student gradebook and submission history'
      ],
      githubUrl: 'https://github.com/sajiboahid007/academic-submission-system',
      featured: false
    }
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
      description: 'Completed my undergraduate studies in Computer Science & Engineering, gaining a solid foundation in software engineering, algorithms, data structures, and modern web systems.',
      highlights: [
        'Key Coursework: Advanced Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence & Expert Systems, C/C++, Data Structures, Digital Logic Design, Discrete Mathematics, Android Application Development, Web Programming',
        'Academic Standing: Graduated with Honors (CGPA: 3.51/4.00)',
        'Dean\'s List recognition for outstanding academic performance',
        'Research Project: Machine Learning model for early disease detection',
        'Presented findings at the Annual Computer Science Symposium (2026)'
      ],
      icon: 'pi pi-graduation-cap',
      skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS', 'System Design', 'Android Application', 'Angular', 'JavaScript', 'TypeScript']
    },
    {
      id: 'achieve-hackathon',
      type: 'achievement',
      title: 'National Hackathon - 1st Runner Up',
      institution: 'National Tech & Innovation Olympiad',
      location: 'Dhaka, Bangladesh',
      period: '2025',
      status: 'Awarded',
      description: 'Engineered a real-time disaster relief coordination portal in 36 hours alongside a 4-person multidisciplinary team.',
      highlights: [
        'Designed and implemented frontend architecture with interactive mapping and live volunteer dispatch updates',
        'Presented live working prototype to an industry panel of software architects'
      ],
      icon: 'pi pi-trophy',
      skills: ['Rapid Prototyping', 'Team Leadership', 'Real-time Web', 'Pitching']
    },
    {
      id: 'edu-hsc',
      type: 'education',
      title: 'Higher Secondary Certificate (HSC) - Science',
      institution: 'Kaliakair Degree College',
      location: 'Kaliakair, Gazipur, Bangladesh',
      period: '2018 - 2021',
      status: 'GPA: 4.00 / 5.00',
      description: 'Completed Higher Secondary Certificate in Science group with emphasis on Mathematics, Physics, Chemistry, and ICT.',
      highlights: [
        'Group: Science | Result: GPA 4.00 out of 5.00',
        'Focused on Mathematics, Physics, Chemistry, and Information & Communication Technology'
      ],
      icon: 'pi pi-book',
      skills: ['Physics', 'Chemistry', 'Higher Mathematics', 'ICT']
    },
    {
      id: 'edu-ssc',
      type: 'education',
      title: 'Secondary School Certificate (SSC) - Science',
      institution: 'Ashraf Ali High School',
      location: 'Bangladesh',
      period: 'Passing Year: 2018',
      status: 'GPA: 4.56 / 5.00',
      description: 'Completed Secondary School Certificate in Science group with excellent academic distinction.',
      highlights: [
        'Group: Science | Result: GPA 4.56 out of 5.00',
        'Graduated in 2018 with strong fundamentals in Mathematics and General Sciences'
      ],
      icon: 'pi pi-check-circle',
      skills: ['General Science', 'Mathematics', 'Physics', 'Chemistry']
    }
  ]
};
