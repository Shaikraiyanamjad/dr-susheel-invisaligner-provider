'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

/* ---------------------------------- */
/* Button (inline) */
/* ---------------------------------- */
function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-green-bg text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-teal-600 transition">
      {children}
    </button>
  );
}

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function AlignerTherapy() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="pt-6 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-2 text-sm tracking-widest text-teal-600 eyebrow">
            Clear Aligner Therapy
          </p>

          <h1 className='text-foreground text-[40px] sm:text-[55px] md:text-[60px] lg:text-[65px] font-bold leading-tight'>
            Straighter Teeth,<br />
            <span className='text-primary'>
              Invisible Treatment.
            </span>
          </h1>

          <p className="mt-6 mb-8 text-muted-text leading-relaxed text-sm md:text-base">
            Invisalign is the world&apos;s leading clear aligner system — precision-engineered to move your teeth gradually with custom-made, virtually invisible trays. No wires. No brackets. No compromise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button>Start Your Smile Journey</Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative overflow-hidden"
          style={{ borderRadius: '24px', aspectRatio: '4/3' }}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {!imgError ? (
            <Image
              src="/images/invisalign-page.webp"
              alt="Invisalign clear aligners treatment"
              fill
              className="object-cover"
              onError={() => setImgError(true)}
              priority
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-300 to-teal-50" />
          )}
        </motion.div>

      </div>
    </section>
  );
}