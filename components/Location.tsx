"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { clinicInfo } from "@/lib/constants";

export default function Location() {
  const whatsappUrl = `${clinicInfo.whatsappLink}?text=${encodeURIComponent(
    clinicInfo.whatsappMessage
  )}`;

  return (
    <section id="hubungi" className="py-20 bg-white dark:bg-slate-900">
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
            Lokasi & Hubungi Kami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Mudah ditemui dan sentiasa bersedia untuk membantu anda
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Map - 60% */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-slate-200 dark:border-slate-800 h-full">
              <CardContent className="p-0">
                {/* Google Maps Embed */}
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <iframe
                    src={clinicInfo.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Waze Button */}
                <div className="p-4 bg-slate-50 dark:bg-slate-800">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-teal-700 dark:border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950"
                  >
                    <a
                      href={clinicInfo.wazeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="mr-2 h-4 w-4" />
                      Buka di Waze
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info - 40% */}
          <motion.div
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Address Card */}
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                      Alamat
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-2">
                      {clinicInfo.address}
                    </p>
                    <p className="text-teal-700 dark:text-teal-400 text-sm font-medium">
                      📍 {clinicInfo.landmark}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details Card */}
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6 space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Telefon
                    </h3>
                    <a
                      href={`tel:${clinicInfo.phone}`}
                      className="text-teal-700 dark:text-teal-400 hover:underline"
                    >
                      {clinicInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                {clinicInfo.email && (
                  <div className="flex items-center gap-4">
                    <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-teal-700 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                        Email
                      </h3>
                      <a
                        href={`mailto:${clinicInfo.email}`}
                        className="text-teal-700 dark:text-teal-400 hover:underline text-sm"
                      >
                        {clinicInfo.email}
                      </a>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Operating Hours Card */}
            <Card className="border-slate-200 dark:border-slate-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-teal-700 dark:text-teal-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Waktu Operasi
                  </h3>
                </div>

                <Accordion type="single" collapsible defaultValue="weekday">
                  <AccordionItem value="weekday">
                    <AccordionTrigger className="text-sm">
                      Isnin - Jumaat
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-teal-700 dark:text-teal-400 font-semibold">
                        {clinicInfo.operatingHours.weekday}
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="weekend">
                    <AccordionTrigger className="text-sm">
                      Sabtu - Ahad
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-teal-700 dark:text-teal-400 font-semibold">
                        {clinicInfo.operatingHours.weekend}
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="holiday">
                    <AccordionTrigger className="text-sm">
                      Cuti Umum
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        {clinicInfo.operatingHours.publicHoliday}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-4 p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <p className="text-sm text-teal-800 dark:text-teal-300">
                    ✓ Walk-in diterima tanpa temujanji
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="w-full bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp Kami Sekarang
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
