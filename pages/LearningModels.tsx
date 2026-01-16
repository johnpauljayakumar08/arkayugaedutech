
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Zap, Briefcase, ArrowRight } from 'lucide-react';
import { SectionHeading, Button } from '../components/UI';

const ModelSection = ({ title, icon: Icon, desc, points, reverse = false, imageUrl }: any) => (
  <section className={`py-24 ${reverse ? 'bg-accent' : 'bg-white'}`}>
    <div className="container mx-auto px-4 md:px-6">
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary">
            <Icon size={32} />
          </div>
          <h2 className="text-4xl font-bold text-primary">{title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{desc}</p>
          <ul className="space-y-4">
            {points.map((p: string, i: number) => (
              <li key={i} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-secondary/10 text-secondary rounded-full flex items-center justify-center text-xs">
                  <ArrowRight size={14} />
                </div>
                <span className="text-gray-700 font-medium">{p}</span>
              </li>
            ))}
          </ul>
          <Button>Learn More</Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img 
            src={imageUrl} 
            alt={`${title} at Arkayuga EduTech`} 
            className="rounded-3xl shadow-2xl border-4 border-white"
            title={`${title} for IT Professionals`}
          />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-[60px] -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

const LearningModels = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-primary py-24 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Learning <span className="text-secondary">Evolved</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Choose the path that best suits your goals and lifestyle.</p>
        </div>
      </div>

      <ModelSection 
        title="Online Learning"
        icon={Globe}
        imageUrl="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=800"
        desc="Interactive, live instructor-led sessions that you can attend from anywhere in the world. Perfect for working professionals."
        points={["Live Interaction", "Session Recordings", "Global Networking", "LMS Integration"]}
      />
      
      <ModelSection 
        title="Offline Learning"
        icon={Users}
        imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
        reverse
        desc="Hands-on classroom training in Coimbatore. Engage directly with mentors and peers in a professional IT environment."
        points={["In-person Mentorship", "Peer-to-Peer Learning", "Direct Networking", "Infrastructure Support"]}
      />

      <ModelSection 
        title="Boot Camps"
        icon={Zap}
        imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800"
        desc="Intensive, high-impact training designed for rapid skill acquisition over short durations."
        points={["Crash Courses", "Sprint Projects", "Advanced Topics", "Rapid Upskilling"]}
      />

      <ModelSection 
        title="Internships & Project Guidance"
        icon={Briefcase}
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
        reverse
        desc="Real-world work experience where you build live projects under the supervision of senior developers."
        points={["Live Industry Projects", "Experience Certificate", "Code Reviews", "Direct Placement Referral"]}
      />
    </div>
  );
};

export default LearningModels;
