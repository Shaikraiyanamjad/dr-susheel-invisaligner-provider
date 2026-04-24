'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */
type Benefit = {
  title: string;
  desc: string;
};

/* ---------------------------------- */
/* Section Header */
/* ---------------------------------- */
function SectionHeader({
  eyebrow,
  title,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <p className="text-sm tracking-widest text-primary mb-3 font-medium eyebrow">
        {eyebrow}
      </p>

      <h2 className="font-bold text-foreground text-[clamp(28px,4vw,40px)]">
        {title}
      </h2>
    </div>
  );
}

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function WhyInvisalign() {
  const benefits: Benefit[] = [
    {
      title: 'Virtually Invisible',
      desc: 'Clear aligners are discreet, allowing you to straighten your teeth without noticeable brackets or wires.',
    },
    {
      title: 'Removable Convenience',
      desc: 'Easily remove aligners while eating, brushing, or for special occasions — complete flexibility.',
    },
    {
      title: 'Comfortable Fit',
      desc: 'Smooth plastic trays eliminate irritation caused by traditional braces and wires.',
    },
    {
      title: 'Predictable Results',
      desc: 'Advanced 3D technology maps your entire treatment journey before you even begin.',
    },
    {
      title: 'Fewer Clinic Visits',
      desc: 'Less frequent appointments compared to traditional orthodontic treatments.',
    },
    {
      title: 'Improved Oral Hygiene',
      desc: 'Brush and floss normally without navigating around brackets and wires.',
    },
  ];

  return (
    <section className="py-18 px-6 bg-scrollTrack">
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          eyebrow="Why Invisalign"
          title="Six Reasons Patients Choose Clear Aligners"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-borderCustom shadow-sm"
            >
              {/* Icon */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center mb-4 bg-process bg-primary/10 border border-primary/20 bg-scroll-thumb">
                <Check size={16} className="text-primary" strokeWidth={2} />
              </div>

              {/* Title */}
              <p className="mb-2 text-foreground font-medium text-[15px] font-bold">
                {b.title}
              </p>

              {/* Description */}
              <p className="text-muted-text leading-relaxed text-[13px]">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}