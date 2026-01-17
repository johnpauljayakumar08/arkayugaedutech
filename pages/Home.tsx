
import React from 'react';
import { motion } from 'framer-motion';
// Fixed missing Globe and Terminal icon imports
import { CheckCircle, ArrowRight, Laptop, Users, Award, BookOpen, Globe, Terminal } from 'lucide-react';
import { SectionHeading, Button } from '../components/UI';
import { SEO } from '../components/SEO';
import { SEO_CONFIG, COURSES, getIcon } from '../constants';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <SEO data={SEO_CONFIG.home} page="home" />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-accent">
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-[-10%] w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-primary text-sm font-bold uppercase tracking-wider">Top-Rated IT Institute</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
                Industry-Ready <span className="text-secondary">Skills.</span> <br />
                Career-Ready <span className="text-secondary">Pros.</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                Upgrade your future with Arkayuga EduTech – a leading IT training and development company delivering hands-on, practical, and corporate-level training for students and professionals.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Job-Oriented Training', 'Industry-Aligned Curriculum', 'Online & Offline Learning'].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <CheckCircle className="text-secondary" size={20} />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/courses">
                  <Button>Explore Courses</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Get Career Guidance</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern IT Corporate Training Session" 
                  className="rounded-3xl shadow-2xl border-4 border-white"
                  title="Industry-Ready IT Professional Training"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <SectionHeading title="Who We Are" />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 leading-loose"
            >
              Arkayuga EduTech is an IT training institute committed to delivering top-notch education for students and professionals. We focus on industry-ready skills, hands-on learning, and real-world exposure to ensure learners are job-ready from day one.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                { title: "Practical Focus", icon: <Laptop className="text-secondary" /> },
                { title: "Global Curriculum", icon: <Globe className="text-secondary" /> },
                { title: "Expert Mentors", icon: <Award className="text-secondary" /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-2xl bg-accent border border-primary/5 hover:border-secondary/50 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-primary">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Industry-Ready Programs" subtitle="Equip yourself with the most in-demand skills in the tech world today." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 6).map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {getIcon(course.icon)}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-2">{course.description}</p>
                <Link to="/courses" className="flex items-center text-secondary font-bold hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses">
              <Button>View All Programs</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Arkayuga */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionHeading title="Why Arkayuga EduTech?" light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Industry Trainers", text: "Learn from experts with 10+ years of corporate experience.", icon: <Users size={32} /> },
              { title: "Corporate Approach", text: "Training designed around real enterprise project workflows.", icon: <Terminal size={32} /> },
              { title: "LMS Support", text: "Access comprehensive tests, AI tools, and interview prep 24/7.", icon: <Laptop size={32} /> },
              { title: "Placement Help", text: "Dedicated career guidance and placement support till you're hired.", icon: <Award size={32} /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-center"
              >
                <div className="text-secondary mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">Learn. Practice. Get Placed.</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join the ranks of successful professionals who started their careers with Arkayuga. Start your journey today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-primary text-primary hover:bg-gray-100 border-none shadow-2xl">Start Now</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
