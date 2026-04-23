'use client';

import { motion } from 'framer-motion';

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */
type Guide = {
  age: string;
  tip: string;
};

/* ---------------------------------- */
/* Section Header */
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
    <div className="mb-12">
      <p className="text-sm tracking-widest text-primary mb-3 font-medium eyebrow">
        {eyebrow}
      </p>

      <h2 className="font-cormorant font-bold text-foreground text-[clamp(28px,4vw,40px)] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="font-dm text-muted text-[14px] leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function ParentGuide() {
  const parentGuide: Guide[] = [
    {
      age: '0–2 Years',
      tip: 'First dental visit recommended by age 1. Begin gentle cleaning and monitor teething.',
    },
    {
      age: '3–5 Years',
      tip: 'Introduce proper brushing habits and schedule regular dental checkups every 6 months.',
    },
    {
      age: '6–9 Years',
      tip: 'Watch for early alignment issues as permanent teeth begin to emerge.',
    },
    {
      age: '10–13 Years',
      tip: 'Ideal time to evaluate orthodontic needs and maintain consistent oral hygiene.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-scrollTrack bg-soft-bg">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <SectionHeader
            eyebrow="Parent Guide"
            title="Dental Milestones by Age"
            subtitle="Know what to expect at each stage of your child's dental development — and when to bring them in."
          />

          {/* RIGHT */}
          <div className="space-y-4">
            {parentGuide.map((item, i) => (
              <motion.div
                key={item.age}
                className="flex gap-5 items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Age Badge */}
                <div className="shrink-0 font-dm font-medium px-3 py-1.5 rounded-full text-primary bg-process text-[12px] whitespace-nowrap mt-[2px]">
                  {item.age}
                </div>

                {/* Text */}
                <p className="font-dm font-light text-muted text-[14px] leading-relaxed">
                  {item.tip}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}