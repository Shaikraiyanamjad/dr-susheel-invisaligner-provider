'use client';

import { ShieldCheck, Star, Heart, Trophy } from "lucide-react";
import { motion, Variants } from "framer-motion";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Certified Invisalign Provider",
    subtitle: "Official Gold Status",
  },
  {
    icon: Star,
    title: "500+ Happy Patients",
    subtitle: "Across Hyderabad",
  },
  {
    icon: Heart,
    title: "Child-Friendly Practice",
    subtitle: "Specialized Pediatric Care",
  },
  {
    icon: Trophy,
    title: "8+ Years Experience",
    subtitle: "Expert Clinical Team",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Trustbar() {
  return (
    <section className="w-full bg-[#0f1f2e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Desktop */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-4 divide-x divide-white/10"
        >
          {trustItems.map((itemData, index) => {
            const Icon = itemData.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col items-center text-center px-6"
              >
                <Icon className="w-7 h-7 text-primary/80 mb-4" />
                <h3 className="font-semibold text-base">
                  {itemData.title}
                </h3>
                <p className="text-sm text-white/60 mt-1">
                  {itemData.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-y-10 md:hidden relative"
        >
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2" />

          {trustItems.map((itemData, index) => {
            const Icon = itemData.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="flex flex-col items-center text-center px-4"
              >
                <Icon className="w-6 h-6 text-primary/80 mb-3" />
                <h3 className="font-semibold text-sm leading-snug">
                  {itemData.title}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {itemData.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}