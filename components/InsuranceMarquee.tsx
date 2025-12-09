"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function InsuranceMarquee() {
  // Since we don't have actual logo files, we'll create stylish text cards
  const insurancePanels = [
    "AIA",
    "Prudential",
    "Allianz",
    "PMCare",
    "Takaful",
    "Great Eastern",
    "Zurich",
    "AXA",
    "HSBC Insurance",
    "Manulife",
    "Tokio Marine",
    "Etiqa",
  ];

  // Duplicate for seamless loop
  const duplicatedPanels = [...insurancePanels, ...insurancePanels];

  return (
    <section id="panel" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-teal-700 dark:text-teal-400" />
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Panel Insurans
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Kami menerima lebih 12+ panel insurans untuk kemudahan anda
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex">
          <motion.div
            className="flex gap-8 py-8"
            animate={{
              x: [0, -1920], // Adjust based on total width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedPanels.map((panel, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center group hover:border-teal-700 dark:hover:border-teal-600 transition-colors duration-300"
              >
                <span className="text-slate-400 dark:text-slate-500 group-hover:text-teal-700 dark:group-hover:text-teal-400 font-semibold text-lg transition-colors duration-300">
                  {panel}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Note */}
      <div className="container mx-auto px-4 mt-12">
        <p className="text-center text-sm text-slate-500 dark:text-slate-500">
          * Sila hubungi kami untuk pengesahan panel insurans anda
        </p>
      </div>
    </section>
  );
}
