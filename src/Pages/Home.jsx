import React, { useEffect } from "react";
import Navigation from "../components/landing/Navigation";
import Hero from "../components/landing/Hero";
import ProblemSection from "../components/landing/ProblemSection";
import SolutionSection from "../components/landing/SolutionSection";
import HowItWorks from "../components/landing/HowItWorks";
import UseCases from "../components/landing/UseCases";
import DemoSection from "../components/landing/DemoSection";
import TechnologySection from "../components/landing/TechnologySection";
import FAQSection from "../components/landing/FAQSection";
import TeamSection from "../components/landing/TeamSection";
import ProjectSection from "../components/landing/ProjectSection";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => (document.documentElement.style.scrollBehavior = "auto");
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">

      {/* BACKGROUND FIX */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 -z-10" />
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 -z-10" />

      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <UseCases />
      <DemoSection />
      <TechnologySection />
      <FAQSection />
      <TeamSection />
      <ProjectSection />

      <footer className="relative border-t border-white/10 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          © 2025 BioAgent. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
