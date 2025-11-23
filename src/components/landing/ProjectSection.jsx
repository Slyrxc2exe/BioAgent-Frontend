import React from 'react';
import { Lightbulb, Users, Rocket, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectSection() {
  const highlights = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Combining signal processing with AI reasoning to solve a real lab workflow problem',
    },
    {
      icon: Users,
      title: 'Impact',
      description: 'Democratizing biophysics analysis for scientists across experience levels',
    },
    {
      icon: Rocket,
      title: 'Scalability',
      description: 'Designed to handle high-throughput screening and batch processing',
    },
    {
      icon: Award,
      title: 'Scientific Rigor',
      description: 'Built with validated algorithms and tested on real experimental data',
    },
  ];

  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-purple-950/30 to-blue-950/20" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-6">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Event Project Showcase</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              This Project
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            BioAgent is a concept project developed to showcase how AI can transform scientific data analysis workflows
          </p>
        </motion.div>

        {/* Project Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-6 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Project Details */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Project Vision</h3>
              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  BioAgent addresses a critical gap in biophysics research: the need for automated, intelligent interpretation of nanoDSF thermostability data.
                </p>
                <p className="leading-relaxed">
                  By combining robust signal processing with AI-powered reasoning, we envision a future where scientists spend less time on manual data analysis and more time on scientific discovery.
                </p>
                <p className="leading-relaxed">
                  This project demonstrates how modern AI can augment scientific expertise rather than replace it, making advanced biophysical analysis accessible to researchers at all levels.
                </p>
              </div>
            </div>

            {/* Right: Technical Approach */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                  <div>
                    <p className="text-white font-medium mb-1">Signal Processing Pipeline</p>
                    <p className="text-slate-400 text-sm">Automated detection of melting temperatures and transition points from raw fluorescence data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
                  <div>
                    <p className="text-white font-medium mb-1">Quality Assessment</p>
                    <p className="text-slate-400 text-sm">Multi-factor scoring system for data reliability and anomaly detection</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
                  <div>
                    <p className="text-white font-medium mb-1">AI-Powered Interpretation</p>
                    <p className="text-slate-400 text-sm">Natural language explanations generated from quantitative analysis results</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mt-2" />
                  <div>
                    <p className="text-white font-medium mb-1">Scalable Architecture</p>
                    <p className="text-slate-400 text-sm">Built to handle batch processing and integrate with existing lab workflows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-slate-400">
              Developed by students and researchers at{' '}
              <span className="text-white font-semibold">Constructor University</span>
            </p>
            <p className="text-slate-500 text-sm mt-2">
              A demonstration of AI-augmented scientific analysis
            </p>
          </div>
        </motion.div>

        {/* Advice for Event Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 backdrop-blur-xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">💡 Presentation Tips for Events</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">→</span>
                  <span><strong>Start with the problem:</strong> Show how manual nanoDSF analysis wastes researchers' time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">→</span>
                  <span><strong>Emphasize real-world impact:</strong> Mention specific use cases (drug development, protein engineering)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-0.5">→</span>
                  <span><strong>Demo the dashboard mockup:</strong> Walk through the interface showing how intuitive the analysis is</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">→</span>
                  <span><strong>Highlight technical innovation:</strong> Explain the signal processing + AI combination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">→</span>
                  <span><strong>Address scalability:</strong> Show you've thought about batch processing and lab integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">→</span>
                  <span><strong>Be honest about limitations:</strong> Acknowledge it's a concept/prototype and discuss next steps</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}