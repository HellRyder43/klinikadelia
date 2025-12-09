"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Stethoscope, Activity, Scissors, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { services, clinicInfo } from "@/lib/constants";

const iconMap = {
  Stethoscope,
  Activity,
  Scissors,
  Baby,
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const whatsappUrl = (serviceName: string) =>
    `${clinicInfo.whatsappLink}?text=${encodeURIComponent(
      `Helo Klinik Adelia Alamsari, saya ingin membuat temujanji untuk ${serviceName}. Nama: ___`
    )}`;

  return (
    <section id="perkhidmatan" className="py-20 bg-white dark:bg-slate-900">
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
            Perkhidmatan Kami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Penjagaan kesihatan komprehensif untuk seluruh keluarga dengan peralatan moden dan doktor berpengalaman
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="group cursor-pointer overflow-hidden h-full border-slate-200 dark:border-slate-800 hover:border-teal-700/30 dark:hover:border-teal-600/30 transition-all duration-300 hover:shadow-lg"
                  onClick={() => setSelectedService(service)}
                >
                  <CardContent className="p-0">
                    {/* Service Image */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                      {/* Badge */}
                      {service.badge && (
                        <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {service.badge}
                        </div>
                      )}

                      {/* Icon */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-teal-700 dark:bg-teal-600 text-white p-3 rounded-lg">
                          <Icon className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="p-6">
                      <h3 className="font-playfair text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-teal-700 dark:text-teal-400 font-semibold">
                          {service.priceRange}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-500 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                          Klik untuk maklumat lanjut →
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Service Detail Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-playfair text-3xl font-bold text-slate-900 dark:text-white">
                {selectedService?.title}
              </DialogTitle>
            </DialogHeader>

            {selectedService && (
              <div className="space-y-6">
                {/* Service Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={selectedService.imageUrl}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Harga:</span>
                  <span className="text-xl font-bold text-teal-700 dark:text-teal-400">
                    {selectedService.priceRange}
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Service Details List */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Termasuk:
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.details?.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                      >
                        <span className="text-teal-700 dark:text-teal-400 mt-1">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    asChild
                    className="flex-1 bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white"
                  >
                    <a
                      href={whatsappUrl(selectedService.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buat Temujanji
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedService(null)}
                  >
                    Tutup
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
