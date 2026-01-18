
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { SEO_CONFIG } from '../constants';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <SEO data={SEO_CONFIG.contact} page="contact" />
      
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-primary">Get In <span className="text-secondary">Touch</span></h1>
                <p className="text-xl text-gray-600">Have questions about our programs or career paths? We're here to help you navigate your future.</p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <MapPin />, title: 'Location', value: 'Door no.29 ashok layout, civil aerodrome post, sitra, Coimbatore 641014' },
                  { icon: <Phone />, title: 'Call Us', value: '+91 6380442393' },
                  { icon: <Mail />, title: 'Email Us', value: 'info@arkayuga.com' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-gray-100">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary">{item.title}</h4>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 rounded-3xl bg-primary text-white space-y-4">
                <h4 className="text-2xl font-bold">Office Hours</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-secondary font-bold">Mon - Fri</p>
                    <p className="text-gray-300">9:00 AM - 7:00 PM</p>
                  </div>
                  <div>
                    <p className="text-secondary font-bold">Sat</p>
                    <p className="text-gray-300">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-secondary focus:ring-0 outline-none transition-all"
                          placeholder="John Doe"
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-secondary focus:ring-0 outline-none transition-all"
                          placeholder="john@example.com"
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary ml-1">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-secondary focus:ring-0 outline-none transition-all"
                          placeholder="+91 90000 00000"
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary ml-1">Course Interested In</label>
                        <select 
                          className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-secondary focus:ring-0 outline-none transition-all appearance-none"
                          onChange={(e) => setFormData({...formData, course: e.target.value})}
                        >
                          <option>MERN Stack</option>
                          <option>Java Full Stack</option>
                          <option>UI/UX Design</option>
                          <option>AWS Cloud</option>
                          <option>Data Analytics</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">Your Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-secondary focus:ring-0 outline-none transition-all"
                        placeholder="Tell us about your career goals..."
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg hover:shadow-primary/20 transition-all"
                    >
                      <Send size={20} />
                      <span>Send Inquiry</span>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-primary">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out, {formData.name}. <br /> Our career counselor will contact you within 24 hours.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-secondary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
