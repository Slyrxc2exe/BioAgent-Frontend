import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Fullscreen Background (match Home) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-purple-950/50" />

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-sm text-blue-300">
                Built for biophysicists & AI researchers
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                AI-Powered Interpretation
              </span>
              <br />
              <span className="text-slate-300 text-4xl lg:text-5xl">
                of nanoDSF Thermostability Data
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Upload nanoDSF curves. Get Tm, onset, data quality, and expert
              explanations in seconds.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => (window.location.href = "/analyze")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 text-lg px-8 py-6 shadow-2xl shadow-purple-500/30"
              >
                Analyze nanoDSF File
                <Sparkles className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <Play className="mr-2 w-5 h-5" />
                About This Project
              </Button>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE MOCKUP ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Mockup Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-6 shadow-2xl">
              {/* Window dots */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>

              {/* Bars Chart */}
              <div className="bg-slate-900/50 rounded-lg p-6 mb-4 relative overflow-hidden">
                <div className="flex items-end justify-between h-48 gap-1">
                  {[...Array(30)].map((_, i) => {
                    const height = Math.sin((i / 30) * Math.PI) * 100 + 50;
                    return (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t opacity-70"
                        style={{ height: `${height}%` }}
                      />
                    );
                  })}
                </div>

                {/* Tm Marker */}
                <div className="absolute top-1/2 left-1/2 w-0.5 h-32 bg-pink-500" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
