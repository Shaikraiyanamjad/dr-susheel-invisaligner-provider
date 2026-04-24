'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactBar() {
  const items = [
    {
      icon: MapPin,
      label: 'Address',
      content:
        'Dwaraka Nagar Colony, Shaikpet, Hyderabad — 500008, Telangana',
    },
    {
      icon: Phone,
      label: 'Phone',
      content: '+91 7799376656',
      href: 'tel:7799376656',
    },
    {
      icon: Clock,
      label: 'Clinic Hours',
      content: 'Monday – Saturday\n10:00 AM – 7:00 PM',
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER (replaces SectionHeader) */}
        <div className="text-center mb-10">
          <p className="text-sm tracking-widest uppercase eyebrow mb-3">
            Find Us
          </p>

          <h2 className="font-cormorant font-bold text-[clamp(28px,4vw,40px)] text-foreground">
            Clinic Information
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-soft-bg border border-card-border"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                {/* ICON */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-process-bg">
                  <Icon size={18} />
                </div>

                {/* LABEL */}
                <p className="text-[13px] font-medium uppercase tracking-wider text-foreground mb-2">
                  {item.label}
                </p>

                {/* CONTENT */}
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[14px] text-muted-text hover:text-primary transition"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-[14px] text-muted-text whitespace-pre-line">
                    {item.content}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}