import React from 'react';
import { Zap, Shield, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SolutionSection() {
  const features = [
    {
      icon: Zap,
      title: 'Automated Tm & Onset Detection',
      description: 'Robust signal processing identifies melting temperatures and unfolding onset across nanoDSF traces with precision and reliability.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Data Quality & Anomaly Flags',
      description: 'BioAgent scores signal quality and highlights noisy runs, aggregation events, or unexpected transitions automatically.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: MessageSquare,
      title: 'Natural-Language Explanations',
      description: 'Generates clear explanations for non-experts and detailed scientific notes for experienced researchers.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Meet BioAgent: </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              your AI biophysics assistant
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Powered by advanced signal processing and AI reasoning, BioAgent transforms raw nanoDSF data into actionable insights
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
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
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300">
                  {/* Gradient Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
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