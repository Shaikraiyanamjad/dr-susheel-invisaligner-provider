'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

/* ---------------------------------- */
/* Inline Button */
/* ---------------------------------- */
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-green-bg text-white px-6 py-3 rounded-full text-sm md:text-base hover:opacity-90 transition">
      {children}
    </button>
  );
}

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function PediatricHero() {
  return (
    <section className="pt-12 pb-20 px-6 relative overflow-hidden bg-process-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm tracking-widest text-primary font-medium eyebrow">
            Gentle Dental Care
          </p>

          <h1 className="font-cormorant font-bold text-foreground leading-tight mb-5 text-[clamp(40px,5vw,64px)]">
            Dentistry That Kids
            <br />
            <span className="text-primary">
              Actually Enjoy.
            </span>
          </h1>

          <p className="font-dm font-light text-muted leading-relaxed mb-8 text-[16px]">
            We believe a child&apos;s first dental experiences shape their relationship with oral health for life. Our pediatric care is gentle, patient, and designed to build trust — not fear.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button>Book a Pediatric Appointment</Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative overflow-hidden rounded-2xl aspect-[4/3]"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/g3.webp"
            alt="Child-friendly pediatric dental care"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}