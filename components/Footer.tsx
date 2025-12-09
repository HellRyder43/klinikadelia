import Link from "next/link";
import Image from "next/image";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import { clinicInfo } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo/klinik-adelia-logo-white.svg"
                alt="Klinik Adelia"
                width={40}
                height={40}
              />
              <div>
                <h3 className="font-playfair text-lg font-bold text-white">
                  Klinik Adelia Alamsari
                </h3>
                <p className="text-xs text-slate-400">Kajang</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Penjagaan kesihatan keluarga yang mesra dan profesional sejak 2008.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Pautan Pantas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#perkhidmatan"
                  className="hover:text-teal-400 transition-colors"
                >
                  Perkhidmatan
                </Link>
              </li>
              <li>
                <Link
                  href="#tentang"
                  className="hover:text-teal-400 transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#panel"
                  className="hover:text-teal-400 transition-colors"
                >
                  Panel Insurans
                </Link>
              </li>
              <li>
                <Link
                  href="#hubungi"
                  className="hover:text-teal-400 transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Perkhidmatan</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-teal-400 transition-colors">
                Perundingan Am
              </li>
              <li className="hover:text-teal-400 transition-colors">
                Imbasan Ultrasound
              </li>
              <li className="hover:text-teal-400 transition-colors">
                Pembedahan Kecil
              </li>
              <li className="hover:text-teal-400 transition-colors">
                Ibu & Anak
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hubungi</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="hover:text-teal-400 transition-colors"
                >
                  {clinicInfo.phone}
                </a>
              </li>
              {clinicInfo.email && (
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                  <a
                    href={`mailto:${clinicInfo.email}`}
                    className="hover:text-teal-400 transition-colors break-all"
                  >
                    {clinicInfo.email}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 leading-relaxed">
                  {clinicInfo.landmark}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h5 className="font-semibold text-white mb-3 flex items-center gap-2">
              <Heart className="h-4 w-4 text-teal-400" />
              Penafian Perubatan
            </h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Maklumat di laman web ini adalah untuk tujuan informasi sahaja dan
              tidak boleh menggantikan nasihat perubatan profesional. Sila
              berjumpa dengan doktor untuk diagnosis dan rawatan yang sesuai.
              Kami tidak bertanggungjawab atas sebarang keputusan perubatan yang
              dibuat berdasarkan maklumat di laman web ini tanpa perundingan yang
              sewajarnya dengan profesional kesihatan yang berkelayakan.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>
              © {currentYear} Klinik Adelia Alamsari. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-teal-400 transition-colors text-xs"
              >
                Dasar Privasi
              </Link>
              <Link
                href="#"
                className="hover:text-teal-400 transition-colors text-xs"
              >
                Terma & Syarat
              </Link>
              <Link
                href="#"
                className="hover:text-teal-400 transition-colors text-xs"
              >
                PDPA Compliance
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
