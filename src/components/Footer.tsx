"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Heart, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-[#1A2331] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* LOGO + ABOUT */}
        <div>
          <Link href="/" aria-label="Go to homepage">
            <Image
              src="/images/Logo.webp"
              alt="Dr. Susheel Aligners"
              width={180}
              height={40}
              priority
              className="cursor-pointer"
            />
          </Link>

          <p className="mt-5 text-sm text-white/60 leading-relaxed max-w-xs">
            Hyderabad&apos;s premier Invisalign specialists and pediatric dental
            care clinic — where every smile has a story.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#6DBFAA] hover:text-[#6DBFAA] transition"
            >
              <Heart size={15} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#6DBFAA] hover:text-[#6DBFAA] transition"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#6DBFAA] mb-5">
            Quick Links
          </p>

          <ul className="space-y-3">
            {[
              { label: "About Dr. Susheel", path: "/about" },
              { label: "Invisalign Treatment", path: "/invisalign" },
              { label: "Pediatric Dentistry", path: "/pediatric" },
              { label: "All Services", path: "/services" },
              { label: "Book Appointment", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-sm text-white/60 hover:text-[#6DBFAA] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#6DBFAA] mb-5">
            Services
          </p>

          <ul className="space-y-3">
            {[
              "Invisalign Aligners",
              "Pediatric Dentistry",
              "Teeth Whitening",
              "Dental Implants",
              "Smile Makeover",
              "Orthodontics",
            ].map((service) => (
              <li key={service}>
                <Link
                  href="/services"
                  className="text-sm text-white/60 hover:text-[#6DBFAA] transition"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#6DBFAA] mb-5">
            Contact
          </p>

          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={15} className="text-[#6DBFAA] mt-0.5 shrink-0" />
              <span className="text-sm text-white/60 leading-relaxed">
                Dwaraka Nagar Colony,
                <br />
                Shaikpet, Hyderabad — 500008
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <Phone size={15} className="text-[#6DBFAA] shrink-0" />
              <a
                href="tel:7799376656"
                className="text-sm text-white/60 hover:text-[#6DBFAA] transition"
              >
                +91 7799376656
              </a>
            </li>

            <li className="flex gap-3 items-center">
  <Mail size={15} className="text-[#6DBFAA] shrink-0" />
  <a
    href="mailto:ramdaspallysusheel@gmail.com"
    className="text-sm text-white/60 hover:text-[#6DBFAA] transition"
  >
    ramdaspallysusheel@gmail.com
  </a>
</li>

            <li className="flex gap-3 items-center">
              <Clock size={15} className="text-[#6DBFAA] shrink-0" />
              <span className="text-sm text-white/60">Mon–Sat: 10am – 7pm</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Dr. Susheel Aligners. All rights
            reserved.
          </p>

          <p className="text-xs text-white/40">
            Certified Invisalign Provider · Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
