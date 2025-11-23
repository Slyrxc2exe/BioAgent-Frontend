import React from 'react';
import { Upload, Cpu, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Upload your nanoDSF CSV',
      description: 'Drop in Temperature/F330/F350 data exported from your instrument.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      number: '02',
      icon: Cpu,
      title: 'BioAgent analyzes the curve',
      description: 'Signal processing detects transitions, extracts Tm and onset, and scores quality.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      icon: FileText,
      title: 'Read the AI interpretation',
      description: 'Get a scientist-style summary you can paste into reports, slides, or ELNs.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            From raw nanoDSF curves to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              decisions in 3 steps
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 opacity-30" />

          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300 group">
                    {/* Step Number */}
                    <div className={`absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 mt-8 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}