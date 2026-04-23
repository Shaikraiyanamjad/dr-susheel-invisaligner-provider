'use client';

import { motion } from 'framer-motion';

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function ServicesTop() {
  return (
    <section className="pt-8 pb-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <p className="mb-4 text-sm tracking-widest text-primary font-medium eyebrow">
            Complete Dental Care
          </p>

          {/* Heading */}
          <h1 className="font-cormorant font-bold text-foreground leading-tight mb-5 mx-auto max-w-[700px] text-[clamp(40px,5vw,64px)]">
            Every Treatment Your
            <br />
            <span className="text-primary">
              Smile Could Need.
            </span>
          </h1>

          {/* Description */}
          <p className="text-muted-text mx-auto max-w-[540px] text-[16px] leading-relaxed">
            From routine care to full smile transformations — Dr. Susheel Aligners offers a complete suite of dental treatments under one roof.
          </p>
        </motion.div>

      </div>
    </section>
  );
}