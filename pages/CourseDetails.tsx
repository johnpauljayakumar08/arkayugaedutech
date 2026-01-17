
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Award, Laptop, Briefcase, GraduationCap } from 'lucide-react';
import { Button, SectionHeading } from '../components/UI';
import { COURSES } from '../constants';
import { SEO } from '../components/SEO';

const CourseDetails = () => {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find(c => c.id === id);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const outcomes = [
    {
      title: 'Course Completion Certificate',
      description: 'Receive an industry-recognized certificate from Arkayuga EduTech upon successful completion of the program.',
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: 'Hands-on Training Project',
      description: 'Work on real-world industry projects to build a strong professional portfolio and gain practical exposure.',
      icon: <Laptop className="w-8 h-8" />,
    },
    {
      title: 'Job Assistance',
      description: 'Dedicated placement support, including resume building, mock interviews, and direct referrals to hiring partners.',
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      title: 'Guaranteed Internship',
      description: 'Get an opportunity to work as an intern on live projects to understand corporate workflows and culture.',
      icon: <GraduationCap className="w-8 h-8" />,
    }
  ];

  return (
    <div className="min-h-screen pb-24">
      <SEO 
        data={{ 
          title: `${course.title} | Arkayuga EduTech`, 
          description: course.description, 
          keywords: `${course.title}, IT training Coimbatore, ${course.tools.join(', ')}` 
        }} 
        page="course-details" 
      />

      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/courses" className="inline-flex items-center text-secondary hover:text-white transition-colors mb-8 font-bold">
            <ArrowLeft className="mr-2" size={20} /> Back to Courses
          </Link>
          
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-sm font-bold uppercase tracking-widest">
                {course.focus}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">{course.title}</h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {course.tools.map(tool => (
                  <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="pt-8">
                <Link to="/contact">
                  <Button className="bg-secondary text-white hover:bg-secondary/90 shadow-xl border-none">Enroll in this Course</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Curriculum Breakdown */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Course Curriculum" subtitle="A deep dive into the modules you will master during this program." />
          
          <div className="space-y-32 mt-20">
            {course.curriculum && course.curriculum.length > 0 ? (
              course.curriculum.map((module, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-secondary font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-4">{module.title}</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {module.topics.map((topic, i) => (
                        <div key={i} className="flex items-center space-x-3 p-4 bg-accent rounded-xl border border-primary/5">
                          <CheckCircle className="text-secondary shrink-0" size={18} />
                          <span className="text-gray-700 font-medium text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`relative ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <div className="absolute -inset-4 bg-secondary/10 rounded-[2.5rem] blur-2xl -z-10" />
                    <img 
                      src={module.image} 
                      alt={module.title}
                      className="w-full h-[400px] object-cover rounded-[2rem] shadow-2xl border-4 border-white"
                    />
                  </motion.div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20 text-gray-500 bg-accent rounded-3xl border border-dashed border-gray-300">
                Detailed curriculum modules for this course are coming soon. Please contact us for the full syllabus.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Program Outcomes Section */}
      <section className="py-24 bg-accent border-y border-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Program Outcomes" 
            subtitle="What you achieve after completing your journey with Arkayuga EduTech." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-secondary/30 transition-all group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-6">
                  {outcome.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{outcome.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement & Tools CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="grid grid-cols-6 gap-4">
                {Array.from({length: 24}).map((_, i) => (
                  <div key={i} className="h-20 w-20 border border-white rounded-full" />
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to start your {course.title} journey?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join our next batch and get hands-on experience with {course.tools.slice(0, 3).join(', ')} and more.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button className="bg-secondary text-white hover:bg-secondary/90 px-12">Apply Now</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-12">Download Syllabus</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
