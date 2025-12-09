"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { clinicInfo } from "@/lib/constants";
import { motion } from "framer-motion";

export default function MobileBottomBar() {
  const whatsappUrl = `${clinicInfo.whatsappLink}?text=${encodeURIComponent(
    clinicInfo.whatsappMessage
  )}`;

  return (
    <motion.div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg pb-safe"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        {/* Call Button */}
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-14 text-base font-semibold border-teal-700 dark:border-teal-600 text-teal-700 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950"
        >
          <a href={`tel:${clinicInfo.phone}`}>
            <Phone className="mr-2 h-5 w-5" />
            Call
          </a>
        </Button>

        {/* WhatsApp Button */}
        <Button
          asChild
          size="lg"
          className="h-14 text-base font-semibold bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
