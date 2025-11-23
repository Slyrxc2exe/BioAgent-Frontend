import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, TrendingUp, BarChart3, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DemoSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            See{' '}
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              BioAgent in action
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Interactive dashboard with real-time analysis and AI-powered insights
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-8 shadow-2xl"
        >
          {/* Window Controls */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-4 text-sm text-slate-400">BioAgent Dashboard</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Chart Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tabs */}
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium">
                  Melting Curve
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/5 text-slate-400 text-sm hover:bg-white/10 transition-colors">
                  Derivative
                </button>
                <button className="px-4 py-2 rounded-lg bg-white/5 text-slate-400 text-sm hover:bg-white/10 transition-colors">
                  Raw Data
                </button>
              </div>

              {/* Chart */}
              <div className="bg-slate-900/50 rounded-xl p-6 relative overflow-hidden border border-white/10">
                {/* Y-axis label */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-slate-500">
                  Fluorescence Ratio
                </div>
                
                {/* Chart area */}
                <div className="ml-8 flex items-end justify-between h-64 gap-1">
                  {[...Array(40)].map((_, i) => {
                    const height = Math.pow(i / 40, 2) * 100;
                    return (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-t"
                        style={{ height: `${height}%`, opacity: 0.8 }}
                      />
                    );
                  })}
                  {/* Tm marker */}
                  <div className="absolute top-8 left-[60%] w-0.5 h-48 bg-pink-400 shadow-lg shadow-pink-400/50">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-pink-500 rounded text-xs font-mono text-white whitespace-nowrap">
                      Tm: 65.3°C
                    </div>
                  </div>
                </div>
                
                {/* X-axis label */}
                <div className="text-center text-xs text-slate-500 mt-4">
                  Temperature (°C)
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    <span className="text-xs text-slate-400">Tm</span>
                  </div>
                  <p className="text-2xl font-bold text-white">65.3°C</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart3 className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-slate-400">Onset</span>
                  </div>
                  <p className="text-2xl font-bold text-white">58.1°C</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-slate-400">Quality</span>
                  </div>
                  <p className="text-2xl font-bold text-white">9.2/10</p>
                </div>
              </div>
            </div>

            {/* AI Panel */}
            <div className="bg-slate-900/50 rounded-xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-white">AI Interpretation</h4>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5" />
                  <p className="text-slate-300">Clear single transition detected</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5" />
                  <p className="text-slate-300">High signal quality (Score: 9.2/10)</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5" />
                  <p className="text-slate-300">Tm = 65.3°C with excellent curve fit</p>
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-slate-400 text-xs leading-relaxed">
                    The protein shows a single cooperative unfolding transition indicating a stable, well-folded structure. The sharp transition and high signal-to-noise ratio suggest excellent sample quality. This Tm value is consistent with similar proteins in this class...
                  </p>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 mt-4">
                  View Full Report
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 text-lg">
            Concept visualization — Full implementation in development
          </p>
        </motion.div>
      </div>
    </section>
  );
}