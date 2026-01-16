
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
    focus: 'Dynamic Web Apps'
  },
  {
    id: 'java-full-stack',
    title: 'Java Full Stack Development',
    description: 'A comprehensive program covering Java, Spring Boot, Microservices, and Angular/React for enterprise solutions.',
    tools: ['Java', 'Spring Boot', 'Hibernate', 'React', 'MySQL'],
    icon: 'Code',
    focus: 'Enterprise Solutions'
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
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Design intuitive and user-centered digital experiences through research, wireframing, and prototyping.',
    tools: ['Figma', 'Adobe XD', 'Sketch', 'Principle'],
    icon: 'Palette',
    focus: 'User Experience'
  },
  {
    id: 'aws-cloud',
    title: 'AWS Cloud Computing',
    description: 'Deploy, manage, and scale applications on the world\'s leading cloud platform.',
    tools: ['EC2', 'S3', 'Lambda', 'RDS', 'IAM'],
    icon: 'Cloud',
    focus: 'Cloud Infrastructure'
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
