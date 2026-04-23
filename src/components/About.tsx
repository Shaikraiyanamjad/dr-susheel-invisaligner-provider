'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Award } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
    },
  },
};

const itemLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const itemRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.1 } },
};

export default function About() {
  return (
    <section className="pt-6 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT CONTENT */}
          <motion.div variants={itemLeft}>
            <p className="eyebrow mb-4">Meet Your Doctor</p>

            <h2
              className="font-cormorant font-bold leading-tight mb-5 text-foreground"
              style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
            >
              Dr. Susheel —<br />
              <span className="text-primary">
                A Dentist Who Listens.
              </span>
            </h2>

            <p className="font-dm font-light leading-relaxed mb-6 text-[16px] text-[#6B7B8D]">
              With over 12 years of clinical experience and a deep passion for
              smile transformation, Dr. Susheel has built one of Hyderabads
              most trusted dental practices. His philosophy is simple: every
              patient deserves a treatment plan built around their life — not a
              template.
            </p>

            <p className="font-dm font-light leading-relaxed mb-8 text-[16px] text-[#6B7B8D]">
              Specialising in Invisalign orthodontics and gentle pediatric
              dentistry, Dr. Susheel combines clinical precision with warmth
              that puts even the most anxious patients at ease.
            </p>

            <Link href="/contact">
              <button className="bg-green-bg text-white px-5 py-2 rounded-full hover:bg-teal-600 transition">
            Book a Consultation
          </button>
            </Link>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div className="relative" variants={itemRight}>
            <div className="relative overflow-hidden rounded-3xl aspect-[3/4]">
              <Image
                src="/images/about-img.webp"
                alt="Dr. Susheel Invisalign Specialist Hyderabad"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>

            {/* STATS CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-lg border border-[#E8EEF4]">
              <p className="font-cormorant font-bold text-[#1A2331] text-[28px]">
                500+
              </p>
              <p className="font-dm font-light text-[#6B7B8D] text-[13px]">
                Smiles Transformed
              </p>
            </div>

            {/* BADGE */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center bg-[#EAF7F3] border-2 border-[#6DBFAA]">
              <Award size={28} color="#6DBFAA" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}