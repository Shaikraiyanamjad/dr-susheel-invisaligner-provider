'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */
type FAQ = {
  q: string;
  a: string;
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
      <p className="text-sm tracking-widest text-primary mb-3 font-medium">
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
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      q: 'How does Invisalign work?',
      a: 'Invisalign uses a series of custom-made clear aligners that gradually shift your teeth into the desired position over time.',
    },
    {
      q: 'Is Invisalign painful?',
      a: 'You may feel slight pressure when switching aligners, but it is generally much more comfortable than traditional braces.',
    },
    {
      q: 'How long does treatment take?',
      a: 'Treatment duration varies, but most cases are completed within 6 to 18 months depending on complexity.',
    },
    {
      q: 'Can I eat with aligners on?',
      a: 'No, aligners should be removed while eating or drinking anything other than water.',
    },
    {
      q: 'How often should I wear them?',
      a: 'Aligners should be worn for 20–22 hours per day for best results.',
    },
  ];

  return (
    <section className="py-20 px-6 bg-scrollTrack bg-muted-scroll-grey bg-soft-bg">
      <div className="max-w-4xl mx-auto">

        <SectionHeader
          eyebrow="FAQs"
          title="Everything You Need to Know"
          centered
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-borderCustom overflow-hidden"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : i)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-dm font-medium text-foreground text-[15px]">
                    {faq.q}
                  </span>

                  {isOpen ? (
                    <Minus size={18} className="text-primary" />
                  ) : (
                    <Plus size={18} className="text-muted" />
                  )}
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="px-6 pb-5"
                    >
                      <p className="font-dm text-muted text-[14px] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}