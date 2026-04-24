'use client';

import { motion } from 'framer-motion';

export default function Quote() {
  return (
    <section
      className="py-20 px-6 bg-process-bg"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Quote Mark */}
          <div className="mb-4">
            <span
              className="font-bold text-accent"
              style={{
                fontSize: '64px',
                lineHeight: 0.8,
                fontFamily: 'var(--font-cormorant)',
              }}
            >
                &ldquo;
            </span>
          </div>

          {/* Quote Text */}
          <blockquote
            className="font-bold text-foreground mb-6"
            style={{
              fontSize: 'clamp(22px, 3vw, 36px)',
              lineHeight: '1.4',
              fontFamily: 'var(--font-cormorant)',
            }}
          >
            A great smile isn&apos;t about perfection — it&apos;s about confidence. My job is to help every patient find theirs.
          </blockquote>

          {/* Author */}
          <p
            className="font-medium text-muted-text"
            style={{
              fontSize: '14px',
              fontFamily: 'var(--font-dm)',
            }}
          >
            — Dr. Susheel, Founder & Lead Dentist
          </p>
        </motion.div>
      </div>
    </section>
  );
}