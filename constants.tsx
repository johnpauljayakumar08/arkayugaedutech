
import React from 'react';
import { 
  Code, 
  Layers, 
  Terminal, 
  Smartphone, 
  Palette, 
  Cloud, 
  BarChart3, 
  Globe, 
  MessageSquare,
  BookOpen,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { Course, SEOData } from './types';

export const COURSES: Course[] = [
  {
    id: 'mern-stack',
    title: 'MERN Stack Development',
    description: 'Master MongoDB, Express.js, React, and Node.js to build high-performance full-stack web applications.',
    tools: ['MongoDB', 'Express', 'React', 'Node.js', 'Redux'],
    icon: 'Terminal',
    focus: 'Dynamic Web Apps',
    curriculum: [
      {
        title: 'MongoDB Mastery',
        description: 'Learn how to model data and perform complex queries with the world\'s most popular NoSQL database.',
        image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
        topics: ['Document Modeling', 'Aggregation Pipeline', 'Indexing', 'Atlas Cloud Deployment']
      },
      {
        title: 'Express & Node.js Backend',
        description: 'Build robust and scalable server-side applications with JavaScript.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        topics: ['RESTful APIs', 'Authentication & JWT', 'Middleware Architecture', 'File Uploads']
      },
      {
        title: 'React.js Frontend',
        description: 'Create lightning-fast user interfaces with components, hooks, and state management.',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
        topics: ['Hooks & Context API', 'Redux Toolkit', 'Routing', 'Custom Hooks']
      }
    ]
  },
  {
    id: 'java-full-stack',
    title: 'Java Full Stack Development',
    description: 'A comprehensive program covering Java, Spring Boot, Microservices, and Angular/React for enterprise solutions.',
    tools: ['Java', 'Spring Boot', 'Hibernate', 'React', 'MySQL'],
    icon: 'Code',
    focus: 'Enterprise Solutions',
    curriculum: [
      {
        title: 'Core Java & Advanced Java',
        description: 'Foundations of object-oriented programming and multithreading.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
        topics: ['OOPS Concepts', 'Collections Framework', 'Lambda Expressions', 'Stream API']
      },
      {
        title: 'Spring Boot & Microservices',
        description: 'Develop and deploy microservices-based architectures for enterprise applications.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
        topics: ['Spring MVC', 'Spring Data JPA', 'Microservices Communication', 'Dockerization']
      }
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Design intuitive and user-centered digital experiences through research, wireframing, and prototyping.',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
    icon: 'Palette',
    focus: 'User Experience',
    curriculum: [
      {
        title: 'User Research & Persona',
        description: 'Understand the users before you build. Learn ethnography and user interviews.',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563de4c?auto=format&fit=crop&q=80&w=800',
        topics: ['Empathy Mapping', 'User Flows', 'Information Architecture', 'Competitor Analysis']
      },
      {
        title: 'High Fidelity Prototyping',
        description: 'Bring your designs to life with Figma and advanced interaction design.',
        image: 'https://images.unsplash.com/photo-1541462608141-ad610936017a?auto=format&fit=crop&q=80&w=800',
        topics: ['Auto Layout', 'Design Systems', 'Advanced Prototyping', 'Usability Testing']
      }
    ]
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Computing',
    description: 'Deploy, manage, and scale applications on the world\'s leading cloud platform.',
    tools: ['EC2', 'S3', 'Lambda', 'RDS', 'IAM'],
    icon: 'Cloud',
    focus: 'Cloud Infrastructure',
    curriculum: [
      {
        title: 'Compute & Storage Services',
        description: 'Master the core building blocks of the AWS cloud environment.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
        topics: ['EC2 Instances', 'EBS Volumes', 'S3 Bucket Policies', 'IAM Roles']
      },
      {
        title: 'Serverless & Database',
        description: 'Design cost-effective, serverless solutions using modern cloud patterns.',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
        topics: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudWatch Monitoring']
      }
    ]
  },
  {
    id: 'python-full-stack',
    title: 'Python Full Stack Development',
    description: 'Learn Python, Django, Flask, and frontend technologies to build scalable and efficient web systems.',
    tools: ['Python', 'Django', 'Flask', 'PostgreSQL', 'JavaScript'],
    icon: 'Terminal',
    focus: 'Scalable Systems'
  },
  {
    id: 'frontend-development',
    title: 'Front-End Development',
    description: 'Focus on building stunning, responsive user interfaces with modern CSS frameworks and React.',
    tools: ['HTML5', 'CSS3', 'Tailwind', 'React', 'TypeScript'],
    icon: 'Globe',
    focus: 'User Interfaces'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Extract insights from complex datasets using statistical methods and powerful visualization tools.',
    tools: ['Excel', 'SQL', 'Power BI', 'Python', 'Tableau'],
    icon: 'BarChart3',
    focus: 'Data Insights'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Master SEO, SEM, social media strategy, and content marketing to grow businesses online.',
    tools: ['Google Ads', 'Analytics', 'Meta Ads', 'SEO Tools'],
    icon: 'Zap',
    focus: 'Brand Growth'
  },
  {
    id: 'aptitude-communication',
    title: 'Aptitude & Communication',
    description: 'Bridge the gap between technical skills and career success with polished soft skills and problem-solving.',
    tools: ['Quantitative', 'Verbal', 'Soft Skills', 'Mock Interviews'],
    icon: 'MessageSquare',
    focus: 'Interview Prep'
  }
];

export const SEO_CONFIG: Record<string, SEOData> = {
  home: {
    title: 'Arkayuga EduTech | Industry-Ready IT Training Institute in Coimbatore',
    description: 'Upgrade your future with Arkayuga EduTech – a leading IT training and development company in Coimbatore delivering hands-on, corporate-level training.',
    keywords: 'IT Training Coimbatore, Full Stack Development, UI/UX Design, Data Analytics, AWS Training'
  },
  about: {
    title: 'About Us | Arkayuga EduTech - Bridging Academia and Industry',
    description: 'Learn about Arkayuga EduTech\'s mission to empower professionals with industry-ready skills through practical, project-based learning.',
    keywords: 'About Arkayuga, IT Training Vision, Career Mentorship'
  },
  courses: {
    title: 'Our Courses | Job-Oriented IT Programs | Arkayuga EduTech',
    description: 'Explore our wide range of professional courses including MERN Stack, Java, Python, UI/UX, and AWS Cloud Computing.',
    keywords: 'MERN Stack course, Java Full Stack, Python training, UI UX bootcamp'
  },
  contact: {
    title: 'Contact Us | Arkayuga EduTech Coimbatore',
    description: 'Get in touch with Arkayuga EduTech for career guidance, course inquiries, and admissions. Located in Coimbatore, India.',
    keywords: 'Contact Arkayuga, IT institute Coimbatore phone number, Learn IT Coimbatore'
  }
};

export const getIcon = (name: string) => {
  const icons: Record<string, React.ReactNode> = {
    Code: <Code className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
    Terminal: <Terminal className="w-6 h-6" />,
    Smartphone: <Smartphone className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Cloud: <Cloud className="w-6 h-6" />,
    BarChart3: <BarChart3 className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
    MessageSquare: <MessageSquare className="w-6 h-6" />,
    BookOpen: <BookOpen className="w-6 h-6" />,
    Users: <Users className="w-6 h-6" />,
    Award: <Award className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />
  };
  return icons[name] || <Code className="w-6 h-6" />;
};
