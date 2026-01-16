
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Rocket, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../components/UI';
import { SEO } from '../components/SEO';
import { SEO_CONFIG } from '../constants';

const About = () => {
  return (
    <div className="min-h-screen">
      <SEO data={SEO_CONFIG.about} page="about" />
      
      {/* Hero */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Empowering the Next Generation of <span className="text-secondary">Tech Leaders</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Arkayuga EduTech is a professional IT training and development company dedicated to bridging the gap between academic education and industry requirements.
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-12 rounded-3xl bg-accent border border-primary/5 flex flex-col items-center text-center space-y-6"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                <Target size={40} />
              </div>
              <h3 className="text-3xl font-bold text-primary">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become a trusted IT training institute recognized globally for creating job-ready professionals who lead innovation in the tech industry.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-12 rounded-3xl bg-accent border border-primary/5 flex flex-col items-center text-center space-y-6"
            >
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                <Rocket size={40} />
              </div>
              <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower students and professionals with industry-ready skills through hands-on, practical training and personalized mentorship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Our Professional Approach" subtitle="How we ensure every learner becomes an industry expert." />
          
          <div className="max-w-4xl mx-auto space-y-8 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/10 hidden md:block" />
            
            {[
              { title: "Practical & Project-Based", desc: "No boring lectures. We focus on building actual products and solving real coding problems." },
              { title: "Industry-Relevant Curriculum", desc: "Our syllabus is constantly updated to match the latest tech stacks used in top MNCs." },
              { title: "Continuous Assessment", desc: "Weekly tests and code reviews ensure you are on the right track throughout the program." },
              { title: "Career-Focused Outcomes", desc: "From resume building to mock interviews, we handle everything for your career success." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center md:text-right">
                  <div className={`p-8 bg-white rounded-2xl shadow-sm border border-gray-100 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h4 className="text-xl font-bold text-primary mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0 z-10 relative">
                  {i + 1}
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
