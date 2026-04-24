'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  service: string;
  date?: string;
  message?: string;
};

export default function FormAndMap() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-6 bg-soft-bg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10">

        {/* MAP */}
        <motion.div
          className="overflow-hidden rounded-2xl h-[480px]"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Dwaraka+Nagar+Colony,+Shaikpet,+Hyderabad,+500008&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            title="Clinic Location"
          />
        </motion.div>

        {/* FORM */}
        <motion.div
          className="bg-white rounded-2xl p-8 border border-card-border shadow-sm"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 bg-process-bg">
                <CheckCircle size={28} className="text-primary" />
              </div>

              <h2 className="font-cormorant font-bold text-[28px] text-foreground mb-3">
                Appointment Requested!
              </h2>

              <p className="font-dm font-light text-muted-text text-[15px] leading-[1.8]">
                Thank you! We&apos;ll confirm your appointment within 2 hours during clinic hours.
              </p>

              <a
                href="https://wa.me/917799376656"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[14px] bg-[#25D366]"
              >
                Confirm on WhatsApp
              </a>
            </div>
          ) : (
            <>
              <h2 className="font-cormorant font-bold text-[26px] text-foreground mb-6">
                Request Appointment
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* NAME */}
                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-soft-bg text-[14px] outline-none focus:border-primary"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* PHONE */}
                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">
                    Phone Number
                  </label>

                  <div className="flex">
                    <span className="px-3 flex items-center text-[14px] border border-card-border border-r-0 rounded-l-xl bg-scroll-track text-muted-text">
                      +91
                    </span>

                    <input
                      type="tel"
                      placeholder="Your mobile number"
                      className="flex-1 px-4 py-3 rounded-r-xl border border-card-border bg-soft-bg text-[14px] outline-none focus:border-primary"
                      {...register('phone', { required: 'Phone is required' })}
                    />
                  </div>

                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* SERVICE */}
                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">
                    Service Required
                  </label>

                  <select
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-soft-bg text-[14px] outline-none focus:border-primary"
                    {...register('service', { required: 'Select a service' })}
                  >
                    <option value="">Select a service</option>
                    <option value="invisalign">Invisalign Consultation</option>
                    <option value="pediatric">Pediatric Checkup</option>
                    <option value="whitening">Teeth Cleaning</option>
                    <option value="smile">Smile Improvement</option>
                    <option value="other">Other</option>
                  </select>

                  {errors.service && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* DATE */}
                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-soft-bg text-[14px] outline-none focus:border-primary"
                    {...register('date')}
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block mb-1.5 text-[13px] font-medium text-foreground">
                    Message (Optional)
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Any concerns?"
                    className="w-full px-4 py-3 rounded-xl border border-card-border bg-soft-bg text-[14px] outline-none focus:border-primary"
                    {...register('message')}
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-full text-white text-[14px] bg-primary hover:opacity-90 transition"
                >
                  Confirm Appointment
                </button>

              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}