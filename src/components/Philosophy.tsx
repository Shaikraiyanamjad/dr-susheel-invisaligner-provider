'use client';

import { motion } from 'framer-motion';

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */
type PhilosophyItem = {
  title: string;
  desc: string;
};

/* ---------------------------------- */
/* Section Header (Inline) */
/* ---------------------------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <p className="text-sm eyebrow tracking-widest text-primary mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-text leading-relaxed text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------- */
/* Main Component */
/* ---------------------------------- */
export default function Philosophy() {
  const philosophy: PhilosophyItem[] = [
    {
      title: 'Personalized Care',
      desc: 'Every treatment plan is tailored to the individual, ensuring the best possible outcomes based on unique needs and goals.',
    },
    {
      title: 'Precision & Excellence',
      desc: 'We focus on accuracy and high standards at every stage, from diagnosis to final results.',
    },
    {
      title: 'Comfort & Trust',
      desc: 'Creating a calm, transparent environment so patients feel confident and informed throughout their journey.',
    },
  ];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <SectionHeader
            eyebrow="Philosophy"
            title="Three Principles That Guide Every Treatment"
            subtitle="These aren't just words on a wall — they shape every decision made in our clinic, from consultation to aftercare."
          />

          <div className="space-y-8">
            {philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="flex gap-5"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-process-bg"
                >
                  <span
                    className="font-medium text-primary"
                    style={{ fontSize: '12px' }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <div>
                  <h3
                    className="font-sm eyebrow text-foreground mb-2"
                    style={{ fontSize: '16px' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-light text-muted-text leading-relaxed"
                    style={{ fontSize: '14px', lineHeight: '1.8' }}
                  >
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}