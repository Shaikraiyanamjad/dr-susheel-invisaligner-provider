"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-background overflow-x-hidden">
      <div className="mx-auto grid min-h-[100svh] max-w-[1920px] grid-cols-1 lg:grid-cols-[6fr_4fr]">
        
        {/* Image Section */}
        <div className="relative order-1 h-[420px] sm:h-[560px] lg:min-h-screen">
          <Image
            src="/images/hero.webp"
            alt="Invisalign clear aligners held by dentist gloves"
            fill
            quality={75}
            sizes="(max-width: 768px) 100vw, 60vw"
            placeholder="blur"
            blurDataURL="/images/hero-blur.jpg"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/5" />
        </div>

        {/* Content Section */}
        <motion.div
          initial={false} // 🔥 no hidden state = instant render
          animate={
            reduceMotion
              ? {}
              : { opacity: [0, 1], x: [20, 0] }
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="order-2 flex items-center px-6 py-10 sm:px-10 lg:px-14 xl:px-16"
        >
          <div className="max-w-lg lg:max-w-md xl:max-w-lg">
            
            <p className="mb-3 text-xs text-green-bg uppercase tracking-[0.25em] sm:text-sm">
              Hyderabad&apos;s Invisalign Specialists
            </p>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-[#101828] sm:text-5xl xl:text-6xl">
              A Smile Worth Showing.
              <span className="mt-2 block text-[#78cbbd]">
                Crafted With Precision.
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#667085] sm:text-base sm:leading-7 xl:text-lg">
              Expert Invisalign treatment and gentle pediatric dental care in
              Hyderabad where every smile has a story.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#78cbbd] 
                px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Book Free Consultation
              </Link>

              <Link
                href="/invisalign"
                className="inline-flex items-center justify-center rounded-full border border-[#78cbbd] 
                px-5 py-2.5 text-sm font-medium text-[#78cbbd] transition hover:bg-[#78cbbd]/10"
              >
                View Invisalign Plans →
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-6 grid gap-2 text-xs text-[#667085] sm:grid-cols-3 sm:text-sm">
              <span>500+ Happy Patients</span>
              <span>Certified Invisalign Provider</span>
              <span>Child-Friendly Practice</span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}