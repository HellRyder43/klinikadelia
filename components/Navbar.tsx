"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Moon, Sun, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { clinicInfo } from "@/lib/constants";

const navLinks = [
  { href: "#perkhidmatan", label: "Perkhidmatan" },
  { href: "#tentang", label: "Tentang" },
  { href: "#panel", label: "Panel" },
  { href: "#hubungi", label: "Hubungi" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `${clinicInfo.whatsappLink}?text=${encodeURIComponent(
    clinicInfo.whatsappMessage
  )}`;

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 shadow-md"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <motion.div
                className={`relative transition-all duration-300 ${
                  isScrolled ? "drop-shadow-lg" : ""
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {mounted && (
                  <>
                    <Image
                      src="/logo/klinik-adelia-logo.svg"
                      alt="Klinik Adelia"
                      width={50}
                      height={50}
                      className="dark:hidden"
                      priority
                    />
                    <Image
                      src="/logo/klinik-adelia-logo-white.svg"
                      alt="Klinik Adelia"
                      width={50}
                      height={50}
                      className="hidden dark:block"
                      priority
                    />
                  </>
                )}
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="font-playfair text-lg font-bold text-slate-900 dark:text-white">
                  Klinik Adelia
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Alamsari, Bangi
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Theme Toggle */}
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-slate-700 dark:text-slate-300"
                >
                  <AnimatePresence mode="wait">
                    {theme === "dark" ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              )}

              {/* CTA Button */}
              <Button
                asChild
                className="bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" />
                  Temujanji
                </a>
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              {mounted && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-slate-700 dark:text-slate-300"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-700 dark:text-slate-300"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px]">
                  <div className="flex flex-col gap-6 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Button
                      asChild
                      className="bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 text-white w-full mt-4"
                    >
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Temujanji Sekarang
                      </a>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  );
}
