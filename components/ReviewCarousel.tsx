"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { reviews } from "@/lib/constants";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function ReviewCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Kata Pesakit Kami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Kepuasan dan kesembuhan pesakit adalah keutamaan kami
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="h-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-slate-200 dark:border-slate-800 hover:border-teal-700/30 dark:hover:border-teal-600/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        {/* Quote Icon */}
                        <div className="mb-4">
                          <Quote className="h-8 w-8 text-teal-700/30 dark:text-teal-400/30" />
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-slate-300 dark:text-slate-700"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-slate-700 dark:text-slate-300 mb-6 flex-grow leading-relaxed">
                          {review.text}
                        </p>

                        {/* Reviewer Info */}
                        <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                                {review.name}
                                {review.verified && (
                                  <CheckCircle className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                                )}
                              </p>
                              <p className="text-sm text-slate-500 dark:text-slate-500">
                                {review.date} • {review.platform}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <p className="font-playfair text-4xl font-bold text-teal-700 dark:text-teal-400 mb-2">
              4.8
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Rating Google
            </p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-4xl font-bold text-teal-700 dark:text-teal-400 mb-2">
              10K+
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Pesakit Berpuas Hati
            </p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-4xl font-bold text-teal-700 dark:text-teal-400 mb-2">
              15+
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Tahun Pengalaman
            </p>
          </div>
          <div className="text-center">
            <p className="font-playfair text-4xl font-bold text-teal-700 dark:text-teal-400 mb-2">
              100%
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Komitmen Kualiti
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
