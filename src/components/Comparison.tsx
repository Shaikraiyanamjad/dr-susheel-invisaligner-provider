'use client';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */
type Row = {
  feature: string;
  invisalign: string;
  braces: string;
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
      <h2 className="font-cormorant font-bold text-foreground text-[clamp(28px,4vw,40px)]">
        {title}
      </h2>
    </div>
  );
}

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */
export default function Comparison() {
  const comparison: Row[] = [
    {
      feature: 'Appearance',
      invisalign: 'Nearly invisible',
      braces: 'Visible metal brackets',
    },
    {
      feature: 'Comfort',
      invisalign: 'Smooth plastic trays',
      braces: 'May cause irritation',
    },
    {
      feature: 'Removability',
      invisalign: 'Removable anytime',
      braces: 'Fixed to teeth',
    },
    {
      feature: 'Oral Hygiene',
      invisalign: 'Easy to maintain',
      braces: 'Difficult cleaning',
    },
    {
      feature: 'Clinic Visits',
      invisalign: 'Fewer visits',
      braces: 'Frequent adjustments',
    },
    {
      feature: 'Food Restrictions',
      invisalign: 'No restrictions',
      braces: 'Avoid hard/sticky food',
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">

        <SectionHeader
          eyebrow="Comparison"
          title="Invisalign vs. Traditional Braces"
          centered
        />

        <motion.div
          className="overflow-hidden rounded-2xl border border-borderCustom"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-foreground px-6 py-4">
            <p className="font-dm font-medium text-white/60 text-[12px] uppercase tracking-widest">
              Feature
            </p>
            <p className="font-dm font-medium text-primary text-center text-[12px] uppercase tracking-widest">
              Invisalign
            </p>
            <p className="font-dm font-medium text-white/60 text-center text-[12px] uppercase tracking-widest">
              Braces
            </p>
          </div>

          {/* Rows */}
          {comparison.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 items-center px-6 py-4 border-t border-borderCustom ${
                i % 2 === 0 ? 'bg-white' : 'bg-soft-bg'
              }`}
            >
              {/* Feature */}
              <p className="font-dm font-medium text-foreground text-[13px]">
                {row.feature}
              </p>

              {/* Invisalign */}
              <div className="flex items-center justify-center gap-2">
                <Check size={14} className="text-primary" />
                <span className="font-dm text-foreground text-[13px]">
                  {row.invisalign}
                </span>
              </div>

              {/* Braces */}
              <div className="flex items-center justify-center gap-2">
                <X size={14} className="text-muted" />
                <span className="font-dm text-muted text-[13px]">
                  {row.braces}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}