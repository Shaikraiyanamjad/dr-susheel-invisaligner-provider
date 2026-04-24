"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ✅ this is the fix

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Invisalign", href: "/invisalign" },
    { name: "Pediatric", href: "/pediatric" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur py-4">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* Logo */}
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

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-gray-700 text-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`pb-1 transition ${
                    isActive ? "text-teal-600" : "hover:text-teal-600"
                  }`}
                >
                  {link.name}
                </Link>

                {/* Animated Underline */}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-[2px] w-full bg-teal-600"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 35,
                    }}
                  />
                )}
              </div>
            );
          })}
        </nav>

        {/* Button */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <button className="bg-green-bg text-white px-5 py-2 rounded-full hover:bg-teal-600 transition">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white px-4 pb-7 pt-8 flex flex-col items-center gap-6 text-2xl text-center">
  {navLinks.map((link) => {
    const isActive = pathname === link.href;

    return (
      <h2 key={link.name} className="font-cormorant font-bold">
        <Link
          href={link.href}
          onClick={() => setOpen(false)}
          className={`block py-2 ${
            isActive
              ? "text-teal-600 font-bold"
              : "text-gray-700"
          }`}
        >
          {link.name}
        </Link>
      </h2>
    );
  })}
<Link href="/contact" className="w-full">
  <button className="mt-3 w-full bg-green-bg text-white py-2 px-20 rounded-full">
    Book Now
  </button>
  </Link>
</div>
      )}
    </header>
  );
};

export default Header;