'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const slideLeft = {
  hidden: { x: -30, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const slideRight = {
  hidden: { x: 30, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.4 }}
      className="bg-background"
    >
      <div className="mx-auto grid min-h-screen max-w-[1920px] grid-cols-1 lg:grid-cols-[6fr_4fr] xl:grid-cols-[6fr_4fr]">
        
        {/* Image Section */}
        <motion.div
          variants={reduceMotion ? {} : slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative order-1 min-h-[420px] sm:min-h-[560px] lg:order-none lg:min-h-screen"
        >
          <Image
            src="/images/hero.webp"
            alt="Invisalign clear aligners held by dentist gloves"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 65vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="/images/hero-blur.jpg"
          />
          <div className="absolute inset-0 bg-white/10" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={reduceMotion ? {} : slideRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="order-2 flex items-center px-6 py-12 sm:px-10 lg:order-none lg:px-14 xl:px-16"
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
              Expert Invisalign treatment and gentle pediatric dental care in Hyderabad where every smile has a story.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-[#78cbbd] px-6 py-3 text-sm font-medium text-white text-center transition hover:opacity-90 sm:px-7 sm:py-3.5 sm:text-base xl:px-8 xl:py-4"
              >
                Book Free Consultation
              </Link>

              <Link
                href="/plans"
                className="rounded-full border border-[#78cbbd] px-6 py-3 text-sm font-medium text-[#78cbbd] text-center transition hover:bg-[#78cbbd]/10 sm:px-7 sm:py-3.5 sm:text-base xl:px-8 xl:py-4"
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