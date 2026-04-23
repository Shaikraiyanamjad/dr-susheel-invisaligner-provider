'use client';

import { motion } from 'framer-motion';

type Testimonial = {
  quote: string;
  name: string;
  initials: string;
  treatment: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Dr. Susheel completely transformed how I feel about my smile. The Invisalign process was smoother than I ever imagined — the 3D scan alone blew my mind. 14 months and I have the smile I always wanted.',
    name: 'Priya Reddy',
    initials: 'PR',
    treatment: 'Invisalign · 14 months',
  },
  {
    quote:
      'I was nervous about bringing my 6-year-old to the dentist, but the team here made it a genuinely positive experience. She actually looks forward to her checkups now. That says everything.',
    name: 'Arjun Sharma',
    initials: 'AS',
    treatment: 'Pediatric Care',
  },
  {
    quote:
      "The clinic is unlike any dental practice I've visited — clean, calm, and the results speak for themselves. My smile makeover exceeded every expectation. Worth every rupee.",
    name: 'Sneha Patel',
    initials: 'SP',
    treatment: 'Smile Makeover',
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#D4AF6A">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-6 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] eyebrow">
            Patient Stories
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-[#101828]">
            Words From Our Patients
          </h2>

          <p className="mt-4 text-sm text-gray-500 leading-relaxed">
            Over 500 smiles transformed — here&apos;s what some of them have to say.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative bg-white rounded-2xl p-6 md:p-7 shadow-sm"
            >

              {/* QUOTE MARK */}
              <div className="absolute -top-4 left-6 text-[70px] font-serif font-bold text-[#6DBFAA] leading-none pointer-events-none">
                &ldquo;
              </div>

              {/* TEXT */}
              <p className="text-[15px] italic text-[#6B7B8D] leading-relaxed pt-6 mb-6">
                {t.quote}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-medium bg-[#EAF7F3] text-[#6DBFAA]">
                    {t.initials}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-[#1A2331]">
                      {t.name}
                    </p>

                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#EAF7F3] text-[#6DBFAA] tracking-wide">
                      {t.treatment}
                    </span>
                  </div>
                </div>

                <StarRating />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}