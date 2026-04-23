'use client';

import { motion } from 'framer-motion';

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
export default function OurPromise() {
  const cards = [
    {
      title: 'No-Fear Environment',
      desc: "Our clinic is designed to feel calm and welcoming — bright colours, gentle music, and a team that speaks at every child's level.",
    },
    {
      title: 'Tell-Show-Do Technique',
      desc: 'We explain everything before we do it. Every step is demonstrated first so your child knows exactly what to expect.',
    },
    {
      title: 'Parent Partnership',
      desc: 'You are never out of the room unless you choose to be. We keep parents informed and involved at every step.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-process bg-process-bg">
      <div className="max-w-5xl mx-auto">

        <SectionHeader
          eyebrow="Our Promise"
          title="Why Parents Trust Us With Their Children"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-2xl p-6 text-center shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              {/* Title */}
              <p className="font-medium text-foreground text-[15px] mb-3">
                {card.title}
              </p>

              {/* Description */}
              <p className="text-muted-text text-[13px] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}