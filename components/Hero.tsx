"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Users, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinicInfo, trustBadges } from "@/lib/constants";

const iconMap = {
  Shield,
  Users,
  Clock,
  Calendar,
};

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(!window.matchMedia("(hover: hover)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const whatsappUrl = `${clinicInfo.whatsappLink}?text=${encodeURIComponent(
    clinicInfo.whatsappMessage
  )}`;

  const scrollToServices = () => {
    document.getElementById("perkhidmatan")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Parallax (Desktop) / Static (Mobile) */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <motion.div style={{ y }} className="h-[120%] w-full">
            <Image
              src="/images/hero-clinic-main.webp"
              alt="Klinik Adelia"
              fill
              className="object-cover"
              priority
              quality={90}
            />
          </motion.div>
        ) : (
          <Image
            src="/images/hero-clinic-main.webp"
            alt="Klinik Adelia"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/50 to-slate-900/30 dark:from-slate-950/90 dark:via-slate-950/60 dark:to-slate-950/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Penjagaan Kesihatan <br className="hidden md:block" />
            <span className="text-teal-400">Keluarga Anda</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-slate-100 mb-8 font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Panel 12+ Insurans • Walk-in / Temujani • Buka 7 Hari
          </motion.p>

          {/* Trust Badges */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {trustBadges.map((badge, index) => {
              const Icon = iconMap[badge.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 flex flex-col items-center gap-2"
                >
                  <Icon className="h-6 w-6 text-teal-400" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-white text-center">
                    {badge.text}
                  </p>
                </div>
              );
            })}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-teal-700 hover:bg-teal-800 text-white text-lg px-8 py-6 h-auto"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Temujanji Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/30 text-white text-lg px-8 py-6 h-auto"
            >
              Lihat Perkhidmatan
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white/70 cursor-pointer"
              onClick={scrollToServices}
            >
              <ChevronDown className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
