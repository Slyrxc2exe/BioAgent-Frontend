import React from 'react';
import { Code, Bot, Palette, Linkedin, Github, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TeamSection() {
  const team = [
    {
      name: 'Turan Hasanzade',
      role: 'Backend & Data Architecture',
      description: 'Designs and maintains the signal-processing pipeline and backend APIs. Responsible for robust data handling, tool integration, and production-ready architecture.',
      gradient: 'from-blue-500 to-cyan-500',
      icon: Code,
      initials: 'TH',
    },
    {
      name: 'Farid Mammadov',
      role: 'Biophysics & AI Reasoning',
      description: 'Bridges nanoDSF biophysics with AI. Defines Tm extraction logic, curve interpretation strategies, and scientific validation of the results.',
      gradient: 'from-purple-500 to-pink-500',
      icon: Bot,
      initials: 'FM',
    },
    {
      name: 'Suad Huseynli',
      role: 'Product & Frontend Experience',
      description: 'Builds the BioAgent interface and user journey. Focuses on clear visualizations, smooth interactions, and an experience that works for both experts and non-experts.',
      gradient: 'from-orange-500 to-red-500',
      icon: Palette,
      initials: 'SH',
    },
  ];

  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Meet the{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A multidisciplinary team combining AI, backend engineering, and design expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300">
                  
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                  
                  <div className="relative">
                    <div className="flex flex-col items-center mb-6">
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl font-bold text-white">
                          {member.initials}
                        </span>
                      </div>
                      
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${member.gradient} text-white text-sm font-medium`}>
                        <Icon className="w-4 h-4" />
                        {member.role}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 text-center">
                      {member.name}
                    </h3>

                    <p className="text-slate-400 leading-relaxed text-center mb-6">
                      {member.description}
                    </p>

                    <div className="flex justify-center gap-3">
                      <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
                        <Linkedin className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
                        <Github className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
                        <Mail className="w-5 h-5 text-slate-400 hover:text-white transition-colors" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              3
            </div>
            <p className="text-slate-400 text-sm">Team Members</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-slate-400 text-sm">Passion Driven</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
              ∞
            </div>
            <p className="text-slate-400 text-sm">Innovation</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
