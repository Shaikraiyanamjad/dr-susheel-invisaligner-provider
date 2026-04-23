'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

/* ---------------------------------- */
/* Section Header */
/* ---------------------------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <p className="text-sm tracking-widest text-primary mb-3 font-medium eyebrow">
        {eyebrow}
      </p>

      <h2 className="font-cormorant font-bold text-foreground text-[clamp(28px,4vw,40px)] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="font-dm text-muted-text text-[16px] leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------- */
/* Button */
/* ---------------------------------- */
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primary text-white px-6 py-3 rounded-full text-sm md:text-base hover:opacity-90 transition">
      {children}
    </button>
  );
}

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function ServicesBottom() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            eyebrow="Not Sure Where to Start?"
            title="Book a Free Smile Assessment"
            subtitle="Not sure which treatment is right for you? Start with a free 30-minute consultation — Dr. Susheel will assess your smile and recommend the best path forward."
            centered
          />

          <Link href="/contact">
            <Button>Book Free Consultation</Button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}