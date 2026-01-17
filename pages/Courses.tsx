
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading, Button } from '../components/UI';
import { SEO } from '../components/SEO';
import { SEO_CONFIG, COURSES, getIcon } from '../constants';
import { Course } from '../types';

const getCourseImage = (id: string) => {
  const images: Record<string, string> = {
    'mern-stack': 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    'java-full-stack': 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
    'python-full-stack': 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    'frontend-development': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    'ui-ux-design': 'https://images.unsplash.com/photo-1586717791821-3f44a563de4c?auto=format&fit=crop&q=80&w=800',
    'aws-cloud': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    'data-analytics': 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    'digital-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    'aptitude-communication': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
  };
  return images[id] || `https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800`;
};

const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={getCourseImage(course.id)} 
          alt={`${course.title} Training at Arkayuga EduTech`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          title={`${course.title} Professional Development`}
        />
        <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-bold">
          {course.focus}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center space-x-3 mb-4">
          <div className="text-secondary">{getIcon(course.icon)}</div>
          <h3 className="text-xl font-bold text-primary">{course.title}</h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 flex-grow">{course.description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {course.tools.map((tool: string) => (
              <span key={tool} className="px-3 py-1 bg-accent text-primary text-[10px] font-bold rounded-full border border-primary/5 uppercase tracking-wide">
                {tool}
              </span>
            ))}
          </div>
          <Link to={`/course/${course.id}`}>
            <Button variant="outline" className="w-full mt-4">Course Details</Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const [search, setSearch] = React.useState('');
  const filtered = COURSES.filter(c => c.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen pb-24">
      <SEO data={SEO_CONFIG.courses} page="courses" />
      
      <section className="py-20 bg-accent border-b">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="Explore Our Programs" subtitle="Transform your career with specialized training designed by industry leaders." />
          
          <div className="max-w-xl mx-auto relative mt-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text"
              placeholder="Search for a skill or course..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-transparent focus:border-secondary focus:ring-0 outline-none shadow-sm transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No courses found matching your search.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Courses;
