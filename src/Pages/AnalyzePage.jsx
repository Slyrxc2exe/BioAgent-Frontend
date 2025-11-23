import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  Upload, 
  FileText, 
  CheckCircle2, 
  TrendingUp,
  Activity,
  Thermometer,
  BarChart3,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';

export default function AnalyzeData() {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.name.endsWith('.csv') || droppedFile.name.endsWith('.txt'))) {
      handleFileUpload(droppedFile);
    }
  }, []);

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      handleFileUpload(selectedFile);
    }
  };

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        tm: 65.3,
        onset: 58.7,
        quality: 9.2,
        derivativePeak: 65.1,
        status: 'success',
        interpretation: 'Clear single transition detected with excellent signal quality. The protein shows a single cooperative unfolding transition at 65.3°C, indicating a stable, well-folded structure.',
        dataPoints: Array.from({ length: 50 }, (_, i) => ({
          temp: 20 + i * 1.5,
          signal: Math.exp(-Math.pow((20 + i * 1.5 - 65) / 10, 2)) * 100
        }))
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const resetAnalysis = () => {
    setFile(null);
    setResults(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background - Exact match to home page */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
      
      {/* Atmospheric Glow Effects */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-3xl"
      />

      {/* Top Navigation Bar - Matching Home Theme */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center">
          <Link to={createPageUrl('Home')}>
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Content */}
      <div className="relative z-10 min-h-screen pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          {!results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Analyze Your Data
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Upload your nanoDSF file. Get instant AI-powered insights with Tm, quality metrics, and expert interpretation.
              </p>
            </motion.div>
          )}

          {/* Main Upload Portal */}
          {!file && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl" />
                
                <div className="relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-2xl rounded-3xl border border-white/20 p-12 shadow-2xl">
                  {/* Drop Zone */}
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative transition-all duration-500 ${
                      isDragging ? 'scale-105' : 'scale-100'
                    }`}
                  >
                    {/* Inner animated glow */}
                    <motion.div
                      animate={isDragging ? {
                        opacity: [0.5, 0.8, 0.5],
                        scale: [1, 1.05, 1]
                      } : {}}
                      transition={{ duration: 1.5, repeat: isDragging ? Infinity : 0 }}
                      className={`absolute -inset-2 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-2xl blur-xl ${
                        isDragging ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    {/* Upload Icon - Bigger and more elegant */}
                    <div className="relative mb-10 flex justify-center">
                      <motion.div
                        animate={{ 
                          y: isDragging ? [0, -10, 0] : 0
                        }}
                        transition={{ duration: 1, repeat: isDragging ? Infinity : 0 }}
                        className="relative"
                      >
                        {/* Pulsing glow behind icon */}
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl"
                        />
                        
                        <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center border border-white/30 backdrop-blur-sm shadow-2xl">
                          <Upload className="w-16 h-16 text-blue-300" />
                        </div>
                        
                        {/* Orbiting sparkle */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0"
                        >
                          <Sparkles className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 text-purple-400" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Text */}
                    <div className="text-center space-y-4">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                        Drop Your File Here
                      </h3>
                      <p className="text-lg text-slate-400">
                        or choose from your device
                      </p>
                    </div>

                    {/* Upload Button */}
                    <div className="mt-10 flex justify-center">
                      <label>
                        <input
                          type="file"
                          accept=".csv,.txt"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            as="span"
                            size="lg"
                            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 text-lg px-10 py-7 shadow-2xl shadow-purple-500/40 cursor-pointer rounded-2xl"
                          >
                            <FileText className="mr-3 h-6 w-6" />
                            Choose File
                          </Button>
                        </motion.div>
                      </label>
                    </div>

                    <p className="text-center text-sm text-slate-500 mt-8">
                      CSV, TXT • Max 10MB • Temperature, F330, F350 columns required
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* File Uploaded State */}
          {file && !results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-blue-500/40">
                        <FileText className="w-8 h-8 text-blue-300" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-xl">{file.name}</p>
                        <p className="text-slate-400">
                          {(file.size / 1024).toFixed(2)} KB • Ready for analysis
                        </p>
                      </div>
                    </div>
                    {!isAnalyzing && (
                      <Button
                        onClick={resetAnalysis}
                        variant="ghost"
                        className="text-slate-400 hover:text-white hover:bg-white/10"
                      >
                        Remove
                      </Button>
                    )}
                  </div>

                  {/* Analyzing Animation */}
                  {isAnalyzing && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 text-center"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-purple-500/40 shadow-xl shadow-purple-500/20"
                      >
                        <div className="w-7 h-7 border-3 border-blue-400 border-t-transparent rounded-full animate-spin" />
                        <span className="text-white font-bold text-lg">
                          AI analyzing your data...
                        </span>
                        <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Section */}
          <AnimatePresence>
            {results && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                {/* Success Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/40 backdrop-blur-sm">
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                    <span className="text-green-300 font-semibold text-lg">Analysis Complete</span>
                  </div>
                </motion.div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                  {/* Tm */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -inset-1 bg-gradient-to-br from-pink-500/40 to-orange-500/40 rounded-2xl blur-xl"
                    />
                    <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl p-7 border border-white/20 group-hover:border-pink-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl">
                      <div className="flex flex-col gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center shadow-2xl shadow-pink-500/50">
                          <Thermometer className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 font-medium mb-2">Melting Temp</p>
                          <p className="text-5xl font-bold bg-gradient-to-br from-white via-pink-100 to-orange-100 bg-clip-text text-transparent">
                            {results.tm}°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Onset */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute -inset-1 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-2xl blur-xl"
                    />
                    <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl p-7 border border-white/20 group-hover:border-blue-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl">
                      <div className="flex flex-col gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50">
                          <TrendingUp className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 font-medium mb-2">Onset Temp</p>
                          <p className="text-5xl font-bold bg-gradient-to-br from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                            {results.onset}°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quality */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="absolute -inset-1 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-2xl blur-xl"
                    />
                    <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl p-7 border border-white/20 group-hover:border-green-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl">
                      <div className="flex flex-col gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl shadow-green-500/50">
                          <CheckCircle2 className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 font-medium mb-2">Signal Quality</p>
                          <p className="text-5xl font-bold bg-gradient-to-br from-white via-green-100 to-emerald-100 bg-clip-text text-transparent">
                            {results.quality}/10
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Derivative */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                      className="absolute -inset-1 bg-gradient-to-br from-purple-500/40 to-pink-500/40 rounded-2xl blur-xl"
                    />
                    <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-2xl p-7 border border-white/20 group-hover:border-purple-500/50 transition-all duration-300 backdrop-blur-xl shadow-xl">
                      <div className="flex flex-col gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-purple-500/50">
                          <BarChart3 className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-400 font-medium mb-2">dF/dT Peak</p>
                          <p className="text-5xl font-bold bg-gradient-to-br from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
                            {results.derivativePeak}°C
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Chart Visualization */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl" />
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-blue-500/40">
                        <Activity className="w-6 h-6 text-blue-400" />
                      </div>
                      <h4 className="text-white text-2xl font-bold">Thermal Unfolding Curve</h4>
                    </div>
                    <div className="relative h-64 bg-gradient-to-br from-slate-950/80 to-slate-900/50 rounded-2xl p-6 border border-white/10">
                      <svg className="w-full h-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
                            </linearGradient>
                            <filter id="glow">
                              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                          </defs>
                          
                          {/* Grid lines */}
                          {[0, 1, 2, 3, 4].map(i => (
                            <line
                              key={i}
                              x1="0"
                              y1={i * 50}
                              x2="500"
                              y2={i * 50}
                              stroke="rgba(255,255,255,0.05)"
                              strokeWidth="1"
                            />
                          ))}
                          
                          {/* Data curve with glow */}
                          <path
                            d={results.dataPoints.map((point, i) => {
                              const x = (i / results.dataPoints.length) * 500;
                              const y = 200 - (point.signal * 1.8);
                              return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                            }).join(' ')}
                            fill="none"
                            stroke="url(#curveGradient)"
                            strokeWidth="3"
                            filter="url(#glow)"
                          />
                          
                          {/* Tm marker line */}
                          <line
                            x1="300"
                            y1="0"
                            x2="300"
                            y2="200"
                            stroke="#ec4899"
                            strokeWidth="2"
                            strokeDasharray="6,4"
                            filter="url(#glow)"
                          />
                          
                          {/* Tm label with background */}
                          <rect x="295" y="10" width="80" height="24" rx="6" fill="#ec4899" opacity="0.9" />
                          <text x="335" y="26" fill="white" fontSize="13" fontWeight="bold" textAnchor="middle">
                            Tm: {results.tm}°C
                          </text>
                      </svg>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400 mt-4 px-2">
                      <span className="font-medium">20°C</span>
                      <span className="text-slate-500">Temperature (°C)</span>
                      <span className="font-medium">95°C</span>
                    </div>
                  </div>
                </motion.div>

                {/* AI Interpretation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="relative"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-purple-500/30 p-8 shadow-2xl">
                    <div className="flex items-start gap-5">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-2xl shadow-purple-500/50">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white text-2xl font-bold mb-5">AI Interpretation</h4>
                        <div className="space-y-3 text-slate-300 leading-relaxed text-base">
                          <p>• <span className="font-semibold text-white">Single cooperative transition detected</span></p>
                          <p>• <span className="font-semibold text-white">High signal quality</span> (SNR = {results.quality}/10)</p>
                          <p>• <span className="font-semibold text-white">Tm = {results.tm}°C</span> with excellent curve fit</p>
                          <p className="text-slate-400 text-sm mt-6 pt-5 border-t border-white/10 leading-relaxed">
                            {results.interpretation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
                >
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                    <Button
                      onClick={resetAnalysis}
                      size="lg"
                      className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 text-lg py-7 shadow-2xl shadow-purple-500/40 rounded-2xl"
                    >
                      Analyze Another File
                      <Upload className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg py-7 px-10 rounded-2xl"
                    >
                      Export Report
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}