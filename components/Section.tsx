"use client";

import { motion } from "framer-motion";

export function Section({
  id,
  title,
  children
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mb-12 flex items-end justify-between gap-6 border-b border-ruby/18 pb-5">
        <h2 className="font-display text-5xl font-normal uppercase leading-none text-ruby sm:text-7xl">
          {title}
        </h2>
        <span className="hidden h-px flex-1 bg-ruby/18 md:block" />
      </div>
      {children}
    </motion.section>
  );
}
