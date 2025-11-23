import React from 'react';
import { Building2, Microscope, GraduationCap, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UseCases() {
  const useCases = [
    {
      icon: Building2,
      label: 'Recommended',
      title: 'Biotech & Pharma R&D',
      description: 'Accelerate formulation screening, developability assessment, and protein engineering with automated thermostability analysis.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Microscope,
      label: 'Popular',
      title: 'CROs & Core Facilities',
      description: 'Deliver standardized, professional reports to clients and internal teams with consistent AI-powered interpretation.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: GraduationCap,
      label: 'Education',
      title: 'Academic Labs & Students',
      description: 'Teaching thermostability concepts becomes easier with instant feedback and clear explanations on experimental data.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="use-cases" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-blue-950/10" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              real lab workflows
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Whether you're in industry, contract research, or academia, BioAgent adapts to your needs
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
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
                {/* Card */}
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300 overflow-hidden">
                  {/* Background Gradient Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative">
                    {/* Label Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${useCase.gradient} text-white text-sm font-medium`}>
                        <BadgeCheck className="w-4 h-4" />
                        {useCase.label}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}