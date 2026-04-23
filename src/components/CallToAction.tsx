'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 px-4 md:px-6 bg-gradient-to-br from-[#1A2331] to-[#263347]">
      
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#6DBFAA] opacity-5" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#6DBFAA] opacity-5" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* EYEBROW */}
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6DBFAA] mb-4 eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Start Your Journey
        </motion.p>

        {/* HEADING */}
        <motion.h2
          className="text-white font-semibold leading-tight mb-5 text-3xl sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your Perfect Smile Is <br />
          <span className="text-[#6DBFAA]">
            One Consultation Away.
          </span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          className="text-white/70 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Book a free consultation with Dr. Susheel and receive a personalised smile assessment — no commitment required.
        </motion.p>

        {/* ACTIONS */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          
          {/* PRIMARY BUTTON */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#6DBFAA] text-white text-sm font-medium hover:opacity-90 transition"
          >
            Book Free Consultation
          </Link>

          {/* PHONE */}
          <a
            href="tel:7799376656"
            className="text-white/70 text-sm font-medium hover:text-white transition"
          >
            or call +91 77993 76656
          </a>

        </motion.div>
      </div>
    </section>
  );
}