"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { doctorProfile } from "@/lib/constants";

export default function DoctorProfile() {
  return (
    <section id="tentang" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Doctor Image - 40% */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative Element */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-teal-700/10 dark:bg-teal-600/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-700/10 dark:bg-blue-600/10 rounded-full blur-3xl" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={doctorProfile.imageUrl}
                  alt={doctorProfile.name}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Doctor Info - 60% */}
          <motion.div
            className="md:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Header */}
            <div>
              <p className="text-teal-700 dark:text-teal-400 font-semibold mb-2">
                Meet Your Doctor
              </p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
                {doctorProfile.name}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-1">
                {doctorProfile.role}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500">
                APC No: {doctorProfile.apcNumber}
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              {doctorProfile.bio.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-700 dark:text-slate-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-teal-700 dark:text-teal-400" />
                Kelayakan & Pensijilan
              </h3>
              <div className="flex flex-wrap gap-2">
                {doctorProfile.certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-slate-900 border-teal-700/20 dark:border-teal-600/20"
                  >
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {cert}
                    </span>
                  </Card>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-teal-700 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Profesional
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Rawatan berkualiti tinggi mengikut piawaian antarabangsa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-teal-700 dark:text-teal-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                    Prihatin
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Mengutamakan kesejahteraan dan keselesaan pesakit
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
