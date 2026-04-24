'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, GraduationCap, Star } from 'lucide-react';

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */
import { LucideIcon } from 'lucide-react';

type Credential = {
  icon: LucideIcon;
  label: string;
  sub: string;
};

/* ---------------------------------- */
/* Section Header (Inline Replacement) */
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
      <p className="eyebrow text-sm tracking-widest text-primary mb-2">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
        {title}
      </h2>
    </div>
  );
}

/* ---------------------------------- */
/* Main Component */
/* ---------------------------------- */
export default function Credentials() {
  const credentials: Credential[] = [
    {
      icon: Award,
      label: 'Certified Specialist',
      sub: 'Recognized Expertise',
    },
    {
      icon: GraduationCap,
      label: 'Advanced Training',
      sub: 'Continuous Learning',
    },
    {
      icon: ShieldCheck,
      label: 'Trusted Care',
      sub: 'Patient First Approach',
    },
    {
      icon: Star,
      label: 'Top Rated',
      sub: 'Excellent Reviews',
    },
  ];

  return (
    <section className="py-20 px-6 bg-scroll-track">
      <div className="max-w-7xl mx-auto">
        
        <SectionHeader
          eyebrow="Credentials"
          title="Qualified. Experienced. Trusted."
          centered
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((c, i) => {
            const Icon = c.icon;

            return (
              <motion.div
                key={c.label}
                className="bg-white rounded-2xl p-6 text-center border-card-border shadow-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-process-bg"
                >
                  <Icon size={20} className="text-primary" strokeWidth={1.5} />
                </div>

                <p
                  className="font-medium text-foreground mb-1"
                  style={{ fontSize: '14px' }}
                >
                  {c.label}
                </p>

                <p
                  className="font-light text-muted-text"
                  style={{ fontSize: '12px' }}
                >
                  {c.sub}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}