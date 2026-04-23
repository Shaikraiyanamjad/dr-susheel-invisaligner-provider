import { ShieldCheck, Star, Heart, Trophy } from "lucide-react";

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

export default function Trustbar() {
  return (
    <section className="w-full bg-[#0f1f2e] text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-4 divide-x divide-white/10">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-6"
              >
                <Icon className="w-7 h-7 text-teal-400 mb-4" />
                <h3 className="font-semibold text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-2 gap-y-10 md:hidden relative">
          {/* Vertical divider */}
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2" />

          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center px-4"
              >
                <Icon className="w-6 h-6 text-teal-400 mb-3" />
                <h3 className="font-semibold text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}