import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What input format does BioAgent support?',
      answer: 'BioAgent accepts nanoDSF CSV exports with Temperature, F330, and F350 columns. Most nanoDSF instruments (like Prometheus NT.48, Uncle, etc.) can export data in this format. Simply export your data and upload it directly to BioAgent.',
    },
    {
      question: 'Is BioAgent a replacement for a biophysicist?',
      answer: 'No, BioAgent is designed as an assistant tool. It helps experts work faster by automating routine analysis and helps non-experts understand data more easily. Experienced scientists still provide crucial interpretation and decision-making, especially for complex or ambiguous results.',
    },
    {
      question: 'Can I use BioAgent with my existing analysis tools?',
      answer: 'Yes! BioAgent is designed to complement your existing workflows. You can export structured data and reports from BioAgent to integrate with Python scripts, spreadsheets, or other analysis platforms. We provide API access for programmatic integration.',
    },
    {
      question: 'Does BioAgent work on real experimental data or just demos?',
      answer: 'BioAgent has been developed and validated using real nanoDSF data from multiple labs and instruments. It handles various sample types including proteins, antibodies, and formulation screening datasets with different levels of complexity and quality.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. All data uploaded to BioAgent is encrypted in transit and at rest. We follow industry-standard security practices and do not share your data with third parties. You maintain full ownership of your data and can delete it at any time.',
    },
    {
      question: 'What happens if BioAgent cannot analyze my curve?',
      answer: 'BioAgent will flag samples with quality issues or ambiguous transitions and provide detailed explanations. In cases where automated analysis is uncertain, it will recommend manual review and provide preliminary observations to guide your interpretation.',
    },
  ];

  return (
    <section id="faq" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently asked{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              questions
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about BioAgent
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 p-6 hover:border-white/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 leading-relaxed mt-4 pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}