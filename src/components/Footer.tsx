"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
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
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-primary hover:text-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
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
                  className="text-sm text-white/60 hover:text-primary transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
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
                  className="text-sm text-white/60 hover:text-primary transition"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-5">
            Contact
          </p>

          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={15} className="text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-white/60 leading-relaxed">
                Dwaraka Nagar Colony,
                <br />
                Shaikpet, Hyderabad — 500008
              </span>
            </li>

            <li className="flex gap-3 items-center">
              <Phone size={15} className="text-primary shrink-0" />
              <a
                href="tel:7799376656"
                className="text-sm text-white/60 hover:text-primary transition"
              >
                +91 7799376656
              </a>
            </li>

            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-primary shrink-0" />
              <a
                href="mailto:ramdaspallysusheel@gmail.com"
                className="text-sm text-white/60 hover:text-primary transition"
              >
                ramdaspallysusheel@gmail.com
              </a>
            </li>

            <li className="flex gap-3 items-center">
              <Clock size={15} className="text-primary shrink-0" />
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
