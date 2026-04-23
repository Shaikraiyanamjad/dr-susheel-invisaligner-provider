'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import {
  AlignCenter,
  Baby,
  Sparkles,
  Star,
  Shield,
  Zap,
} from 'lucide-react';

// constants
const CARD_BORDER = 'var(--card-border)';
const PRIMARY = 'var(--primary)';
const ACCENT = 'var(--accent)';

const services = [
  {
    icon: AlignCenter,
    title: 'Invisalign Aligners',
    desc: 'Custom clear aligners designed for your smile using 3D scanning technology and precision engineering.',
    href: '/invisalign',
    featured: true,
  },
  {
    icon: Baby,
    title: 'Pediatric Dentistry',
    desc: 'Gentle, child-friendly dental care that builds positive associations with oral health from early on.',
    href: '/pediatric',
  },
  {
    icon: Sparkles,
    title: 'Teeth Whitening',
    desc: 'Professional-grade whitening treatments delivering 6–8 shades brighter results in a single session.',
    href: '/services',
  },
  {
    icon: Star,
    title: 'Smile Makeover',
    desc: 'Comprehensive smile transformation combining veneers, whitening, and alignment correction.',
    href: '/services',
  },
  {
    icon: Shield,
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement solutions using titanium implants that look, feel, and function naturally.',
    href: '/services',
  },
  {
    icon: Zap,
    title: 'Orthodontics',
    desc: 'Traditional and modern orthodontic solutions to correct misalignment and achieve a balanced bite.',
    href: '/services',
  },
];

// animations
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier (fixes TS issues)
    },
  },
};

function SectionHeader() {
  return (
    <div className="text-center mb-14">
      <p className="uppercase tracking-widest text-xs text-[#6DBFAA]">
        What We Offer
      </p>

      <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#1A2331]">
        Treatments Designed Around You
      </h2>

      <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base text-[#6B7B8D]">
        From precision Invisalign to compassionate pediatric care — every treatment is tailored, every outcome is measured.
      </p>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="py-28 px-6 bg-scroll-track">
      <div className="max-w-7xl mx-auto">
        <SectionHeader />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {services.map(({ icon: Icon, title, desc, href, featured }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 250 },
              }}
              className="relative bg-white rounded-2xl p-7 cursor-pointer shadow-sm hover:shadow-xl"
              style={{
                border: `1px solid ${CARD_BORDER}`,
                borderTop: featured
                  ? `3px solid ${ACCENT}`
                  : `1px solid ${CARD_BORDER}`,
              }}
            >
              {featured && (
                <div className="absolute top-4 right-4 text-[10px] uppercase font-medium px-2.5 py-1 rounded-full bg-highlight-bg text-accent">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-10 h-10 flex items-center justify-center rounded-full mb-5 bg-process-bg"
              >
                <Icon size={18} color={PRIMARY} strokeWidth={1.5} />
              </motion.div>

              {/* Title */}
              <h3 className="font-medium mb-2.5 text-foreground text-base">
                {title}
              </h3>

              {/* Description */}
              <p className="leading-relaxed mb-5 line-clamp-3 text-muted-text text-sm">
                {desc}
              </p>

              {/* Link */}
              <Link
                href={href}
                className="text-sm font-medium text-primary hover:opacity-80 transition-opacity"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}