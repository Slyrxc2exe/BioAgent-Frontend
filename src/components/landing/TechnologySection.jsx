import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechnologySection() {
  const features = [
    'Optimized for nanoDSF thermostability assays',
    'Signal processing + AI agent reasoning',
    'Designed to integrate with Python workflows',
    'Compatible with lab data platforms',
    'Batch processing for high-throughput screening',
    'Export-ready reports and structured data',
  ];

  return (
    <section id="technology" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-purple-950/20 to-blue-950/10" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Serious{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              science
            </span>{' '}
            under the hood
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Built on robust algorithms and AI reasoning, validated against real experimental data
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Features List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-slate-300 group-hover:text-white transition-colors">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8">
              {/* Workflow Diagram */}
              <div className="space-y-6">
                {/* Input */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 p-4">
                    <p className="text-sm text-slate-400 mb-1">Input</p>
                    <p className="text-white font-semibold">nanoDSF data</p>
                    <p className="text-xs text-slate-500 mt-1">Temp, F330, F350</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-500 flex-shrink-0" />
                </div>

                {/* Processing */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-4">
                    <p className="text-sm text-slate-400 mb-1">Processing</p>
                    <p className="text-white font-semibold">BioAgent</p>
                    <p className="text-xs text-slate-500 mt-1">Signal processing + AI</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-500 flex-shrink-0" />
                </div>

                {/* Output */}
                <div className="flex items-center gap-4">
                  <div className="flex-1 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 p-4">
                    <p className="text-sm text-slate-400 mb-1">Output</p>
                    <p className="text-white font-semibold">Results + Explanation</p>
                    <p className="text-xs text-slate-500 mt-1">Tm, quality, insights</p>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Scientifically Validated</p>
                    <p className="text-sm text-slate-400">Tested on real lab data</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}