"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Stethoscope, Activity, Scissors, Baby, Syringe, TestTube2, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { services, clinicInfo, serviceCategories } from "@/lib/constants";

const iconMap = {
  Stethoscope,
  Activity,
  Scissors,
  Baby,
  Syringe,
  TestTube2,
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
                      <div className="flex items-center justify-end">
                        <span className="text-sm text-slate-500 dark:text-slate-500 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors flex items-center gap-1">
                          Click for details <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Complete Services Catalog */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Complete Services
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore our comprehensive range of medical services. Walk-ins and appointments welcomed.
            </p>
          </div>

          <Tabs defaultValue="immunization" className="w-full max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="immunization" className="flex items-center gap-2">
                <Syringe className="h-4 w-4" />
                <span className="hidden sm:inline">Immunization</span>
                <span className="sm:hidden">Vaccine</span>
              </TabsTrigger>
              <TabsTrigger value="diagnostics" className="flex items-center gap-2">
                <TestTube2 className="h-4 w-4" />
                <span className="hidden sm:inline">Tests & Screening</span>
                <span className="sm:hidden">Tests</span>
              </TabsTrigger>
              <TabsTrigger value="procedures" className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4" />
                <span className="hidden sm:inline">Treatments & Procedures</span>
                <span className="sm:hidden">Treatments</span>
              </TabsTrigger>
            </TabsList>

            {/* Immunization Tab */}
            <TabsContent value="immunization" className="space-y-6">
              {serviceCategories.immunization.services.map((serviceGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-teal-700/20 dark:border-teal-600/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-teal-700 dark:bg-teal-600" />
                        {serviceGroup.category}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {serviceGroup.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                          >
                            <ChevronRight className="h-4 w-4 mt-0.5 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            {/* Diagnostics Tab */}
            <TabsContent value="diagnostics" className="space-y-6">
              {serviceCategories.diagnostics.services.map((serviceGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-teal-700/20 dark:border-teal-600/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-teal-700 dark:bg-teal-600" />
                        {serviceGroup.category}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {serviceGroup.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                          >
                            <ChevronRight className="h-4 w-4 mt-0.5 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            {/* Procedures Tab */}
            <TabsContent value="procedures" className="space-y-6">
              {serviceCategories.procedures.services.map((serviceGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="border-teal-700/20 dark:border-teal-600/20">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-teal-700 dark:bg-teal-600" />
                        {serviceGroup.category}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {serviceGroup.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                          >
                            <ChevronRight className="h-4 w-4 mt-0.5 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Have questions about our services? Contact us today!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white"
            >
              <a
                href={`${clinicInfo.whatsappLink}?text=${encodeURIComponent(clinicInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment via WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>

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

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Service Details List */}
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Includes:
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
                      Book Appointment
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedService(null)}
                  >
                    Close
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
