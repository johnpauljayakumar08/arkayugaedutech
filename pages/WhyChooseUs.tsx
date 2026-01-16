
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Briefcase, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../components/UI';

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value]);

  return <span className="text-4xl md:text-5xl font-bold text-secondary">{count}{suffix}</span>;
};

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Why <span className="text-secondary">Arkayuga EduTech?</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">We don't just teach technology; we build careers through rigorous training and industry exposure.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Students Trained', value: 5000, suffix: '+' },
              { label: 'Courses Offered', value: 50, suffix: '+' },
              { label: 'Placed Alumni', value: 3500, suffix: '+' },
              { label: 'Partner Companies', value: 200, suffix: '+' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <Counter value={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <SectionHeading title="What Sets Us Apart" subtitle="Experience a learning journey that focuses on your success." />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { title: 'Experienced Instructors', text: 'Our trainers are industry veterans who bring real-world insights and mentorship to every session.', icon: <Users className="text-primary" /> },
                { title: 'Flexible Learning Options', text: 'Choose between in-person classroom training or interactive online bootcamps that fit your schedule.', icon: <BookOpen className="text-primary" /> },
                { title: 'Career Support', text: 'Dedicated placement cell offering resume reviews, LinkedIn optimization, and mock technical rounds.', icon: <Briefcase className="text-primary" /> },
                { title: 'LMS & AI Tools', text: 'Our proprietary Learning Management System includes AI-powered coding assessments and interview prep modules.', icon: <Award className="text-primary" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800" 
                alt="Arkayuga Students Success Story" 
                className="rounded-3xl shadow-2xl"
                title="Professional Growth and Collaborative IT Education"
              />
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 hidden lg:block space-y-4">
                {[1,2,3].map(i => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 w-64 animate-bounce" style={{ animationDelay: `${i * 0.5}s` }}>
                    <CheckCircle className="text-secondary" />
                    <span className="text-sm font-bold text-primary">Industry Placement Partner {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
