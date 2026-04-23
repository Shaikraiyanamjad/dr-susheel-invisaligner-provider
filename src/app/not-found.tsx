'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Home } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function NotFound() {
  return (
    <>
    <Header />
       <section className="min-h-screen flex items-center justify-center bg-[#0f1f2e] text-white px-6">
      <div className="text-center max-w-xl">

        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[90px] md:text-[120px] font-bold tracking-tight text-[#6DBFAA]"
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold mt-2"
        >
          Page not found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-white/60 text-sm md:text-base"
        >
          The page you’re looking for doesn’t exist or may have been moved.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Go Home */}
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#6DBFAA] text-[#0f1f2e] text-sm font-medium hover:opacity-90 transition"
          >
            <Home size={16} />
            Go to Homepage
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-sm font-medium hover:border-[#6DBFAA] hover:text-[#6DBFAA] transition"
          >
            Contact Us
            <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
    <Footer />
    </>
  );
}