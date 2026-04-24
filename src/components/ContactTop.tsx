'use client';

import { motion } from 'framer-motion';

export default function ContactTop() {
  return (
    <section className="pt-12 pb-8 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <p className="mb-4 text-sm tracking-widest uppercase eyebrow">
            Get In Touch
          </p>

          {/* Heading */}
          <h1 className="font-cormorant font-bold leading-tight mb-5 text-[clamp(40px,5vw,64px)] text-[#1A2331]">
            Book Your Appointment
          </h1>

          {/* Description */}
          <p className="font-dm font-light text-muted-text max-w-[480px] text-[16px] leading-[1.8]">
            Take the first step towards your best smile. Consultations are
            complimentary and completely without obligation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}