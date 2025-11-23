import React from 'react';
import { Clock, AlertTriangle, Users, FileSpreadsheet } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: 'Manual inspection is slow and subjective',
      description: 'Scientists spend hours manually analyzing nanoDSF curves, leading to inconsistent interpretations across teams.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Tm extraction is error-prone at scale',
      description: 'Processing hundreds of conditions manually introduces errors and makes it hard to spot trends or outliers.',
    },
    {
      icon: Users,
      title: 'Non-experts struggle with biophysical data',
      description: 'Junior scientists and collaborators often lack the experience to confidently interpret thermal stability readouts.',
    },
    {
      icon: AlertTriangle,
      title: 'Standard tools lack AI insights',
      description: 'Traditional analysis software provides numbers but no context, explanations, or automated anomaly detection.',
    },
  ];

  return (
    <section id="product" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent" />
      
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
            Raw curves in.{' '}
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Confusing spreadsheets out.
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Traditional nanoDSF analysis workflows are holding your lab back
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 p-8 hover:border-red-500/30 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-red-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}