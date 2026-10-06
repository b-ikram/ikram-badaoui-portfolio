"use client";

import { experiences } from "@/data/portfolio";
import { AnimatedMy } from "./AnimatedMy";
const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 md:px-16 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
<div className="relative mb-16">
  <div
    className="relative inline-block pt-[0.55em]"
    style={{ fontSize: "clamp(2.2rem, 5vw, 5rem)" }}
  >
    {/* MY: handwritten, overlapping the top-left of "Experience" */}
    <div className="pointer-events-none absolute -left-[0.08em] top-[0.02em] z-20 -rotate-[7deg] origin-bottom-left">
      <AnimatedMy />
    </div>

    <h2
      className="relative z-10 whitespace-nowrap text-[#171717]"
      style={{
        ...serif,
        fontSize: "1em",
        lineHeight: "0.9",
        letterSpacing: "-0.04em",
      }}
    >
      Experience
    </h2>

    <div className="mt-7 flex items-center gap-5" style={{ fontSize: "1rem" }}>
      <span className="h-px w-16 bg-[#7b0d1b]" />
      <p className="text-xs uppercase tracking-[0.16em] text-[#625a56]">
        Where curiosity became practice.
      </p>
    </div>
  </div>
</div>

        {/* TIMELINE */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 hidden h-full w-px bg-[#7b0d1b]/15 md:block" />

          <div className="space-y-14">
            {experiences.map((item, index) => (
              <article
                key={item.role}
                className="group relative grid gap-6 md:grid-cols-[150px_1fr] md:gap-10"
              >

                {/* DATE */}
                <div className="relative hidden md:block">
                  <span
                    className="
                      relative
                      z-10
                      inline-flex
                      h-4
                      w-4
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      ring-1
                      ring-[#7b0d1b]/25
                    "
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7b0d1b]" />
                  </span>

                  <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7b0d1b]">
                    {item.date}
                  </p>
                </div>

                {/* EXPERIENCE CONTENT */}
                <div
                  className="
                    relative
                    border-t
                    border-[#171717]/10
                    pb-2
                    pt-6
                    transition-all
                    duration-500
                    group-hover:border-[#7b0d1b]/40
                    md:pt-5
                  "
                >

                  {/* Mobile date */}
                  <div className="mb-3 flex items-center gap-3 md:hidden">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7b0d1b]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7b0d1b]">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-12">

                    {/* ROLE */}
                    <div className="max-w-md">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#7b0d1b]">
                          0{index + 1}
                        </span>

                        <span className="h-px w-8 bg-[#7b0d1b]/30 transition-all duration-500 group-hover:w-14 group-hover:bg-[#7b0d1b]" />
                      </div>

                      <h3
                        className="
                          text-2xl
                          leading-tight
                          tracking-[-0.02em]
                          text-[#171717]
                          sm:text-3xl
                        "
                        style={serif}
                      >
                        {item.role}
                      </h3>

                      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#625a56]">
                        {item.place}
                      </p>
                    </div>

                    {/* CONTRIBUTIONS */}
                    <ul className="max-w-2xl space-y-3 lg:pt-1">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="
                            flex
                            gap-4
                            text-sm
                            leading-7
                            text-[#625a56]
                            transition-colors
                            duration-300
                            group-hover:text-[#171717]
                          "
                        >
                          <span className="mt-[11px] h-1 w-1 shrink-0 bg-[#7b0d1b]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom divider */}
                  <div className="mt-7 h-px w-full bg-[#171717]/5 transition-all duration-500 group-hover:bg-[#7b0d1b]/10" />
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}