"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const slideLeft = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const slideRight = {
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.3 }}
      className="bg-background overflow-x-hidden"
    >
      <div className="mx-auto grid min-h-screen max-w-[1920px] grid-cols-1 lg:grid-cols-[6fr_4fr] overflow-x-hidden">
        
        {/* Image Section */}
        <motion.div
          variants={reduceMotion ? {} : slideLeft}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative order-1 min-h-[420px] sm:min-h-[560px] lg:min-h-screen overflow-hidden"
        >
          <Image
            src="/images/hero.webp"
            alt="Invisalign clear aligners held by dentist gloves"
            fill
            priority
            quality={85} // balance between quality & speed
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 100vw,
                   (max-width: 1280px) 60vw,
                   65vw"
            className="object-cover"
          />

          {/* lighter overlay = faster paint */}
          <div className="absolute inset-0 bg-white/5" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={reduceMotion ? {} : slideRight}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          className="order-2 flex items-center px-6 py-12 sm:px-10 lg:px-14 xl:px-16"
        >
          <div className="max-w-lg lg:max-w-md xl:max-w-lg">
            
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] eyebrow sm:text-sm">
              Hyderabad&apos;s Invisalign Specialists
            </p>

            <h1 className="text-4xl font-semibold leading-[1] tracking-tight text-[#101828] sm:text-5xl xl:text-6xl 2xl:text-7xl">
              A Smile Worth Showing.
              <span className="mt-2 block text-[#78cbbd]">
                Crafted With Precision.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#667085] sm:text-base sm:leading-8 xl:text-lg">
              Expert Invisalign treatment and gentle pediatric dental care in
              Hyderabad where every smile has a story.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#78cbbd] 
                px-6 py-3 font-medium text-white transition hover:opacity-90
                text-[clamp(14px,1.1vw,16px)]"
              >
                Book Free Consultation
              </Link>

              <Link
                href="/invisalign"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#78cbbd] 
                px-6 py-3 font-medium text-[#78cbbd] transition hover:bg-[#78cbbd]/10
                text-[clamp(14px,1.1vw,16px)]"
              >
                View Invisalign Plans →
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-3 text-xs text-[#667085] sm:grid-cols-3 sm:gap-4 sm:text-sm">
              <span>500+ Happy Patients</span>
              <span>Certified Invisalign Provider</span>
              <span>Child-Friendly Practice</span>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}