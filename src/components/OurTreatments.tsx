'use client';

import { motion } from 'framer-motion';
import { Baby, Heart, LucideIcon, ShieldCheck, Smile, Sparkles, Shield } from 'lucide-react';

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */
type Treatment = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

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
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <p className="text-sm tracking-widest text-primary mb-3 font-medium eyebrow">
        {eyebrow}
      </p>

      <h2 className="font-bold text-foreground text-[clamp(28px,4vw,40px)] mb-3">
        {title}
      </h2>

      {subtitle && (
        <p className="text-muted-text font-dm text-[16px] leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function OurTreatments() {
  const treatments: Treatment[] = [
    {
      icon: Baby,
      title: 'Infant Oral Care',
      desc: 'Early guidance and care for your child’s first dental milestones.',
    },
    {
      icon: Shield,
      title: 'Cavity Prevention',
      desc: 'Fluoride treatments and sealants to protect developing teeth.',
    },
    {
      icon: Smile,
      title: 'Habit Correction',
      desc: 'Managing thumb sucking and other habits affecting alignment.',
    },
    {
      icon: ShieldCheck,
      title: 'Protective Care',
      desc: 'Mouthguards and preventive treatments for active kids.',
    },
    {
      icon: Sparkles,
      title: 'Teeth Cleaning',
      desc: 'Gentle, kid-friendly cleaning for healthy smiles.',
    },
    {
      icon: Heart,
      title: 'Emergency Care',
      desc: 'Quick, compassionate care when your child needs it most.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <SectionHeader
          eyebrow="Our Treatments"
          title="Comprehensive Care From First Tooth to Teen"
          subtitle="Every treatment is approached with patience, gentleness, and a commitment to making your child feel safe."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t, i) => {
            const Icon = t.icon;

            return (
              <motion.div
                key={t.title}
                className="bg-background rounded-2xl p-6 border border-borderCustom transition bg-soft-bg"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-process-bg border">
                  <Icon size={18} className="text-primary" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <p className="font-dm font-medium text-foreground text-[15px] mb-2">
                  {t.title}
                </p>

                {/* Description */}
                <p className="font-dm font-light text-muted-text text-[13px] leading-relaxed">
                  {t.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}