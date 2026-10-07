"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatedTimeline } from "./AnimatedTimeline";
import { AnimatedPhoto } from "./AnimatedPhoto";
const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative overflow-hidden px-6 py-20 sm:px-10 md:px-16 md:py-28"
      style={{
  background: "#faf7ee",
}}
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <div
          className={`
            mb-16 flex items-end justify-between
            transition-all duration-1000 ease-out
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          <div>
           

            <h2
              className="relative z-10 whitespace-nowrap text-[#171717]"
              style={{
                ...serif,
                fontSize: "clamp(2.2rem, 5vw, 5rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.04em",
              }}
            >
              Education Background
            </h2>
          </div>

        </div>

        {/* HORIZONTAL TIMELINE */}
        <div
          className={`
            transition-all duration-[1200ms] delay-200 ease-out
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }
          `}
        >
          <AnimatedTimeline>
            <div className="relative">

              {/* TIMELINE LINE */}
              <div className="education-timeline-line absolute left-0 right-0 top-[10px] hidden h-px bg-[#9b1c0e]/20 md:block" />

              {/* MOVING RED MARKER */}
              <div className="education-timeline-marker hidden md:block" />

              <div className="grid gap-16 md:grid-cols-[0.8fr_1.8fr] md:gap-20">

                {/* ========================= */}
                {/* BACCALAUREATE */}
                {/* ========================= */}
                <article className="education-timeline-item relative">

                  {/* POINT */}
                  <div className="education-timeline-dot education-dot-first relative z-10 mb-8 h-[21px] w-[21px] rounded-full border-[5px] border-white bg-zinc-300 shadow-[0_0_0_1px_#d4d4d4]" />

                  <div className="education-timeline-content">
                    <p className="font-display text-6xl leading-none text-zinc-300">
                      2022
                    </p>

                    

                    <h3
                      className="mt-5 text-3xl leading-tight text-[#171717]"
                      style={serif}
                    >
                      Scientific
                      <br />
                      <em>Baccalaureate</em>
                    </h3>

                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.16em] text-[#000]">
                      Les Frères Drif High School
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-400">
                      Boumerdes, Algeria
                    </p>

                    <p className="mt-7 font-display text-3xl text-[#171717]">
                      17.98
                      <span className="ml-1 text-sm text-zinc-400">
                        / 20
                      </span>
                    </p>

                    <p
  className="mt-1 text-[9px] font-bold uppercase tracking-[0.15em] text-[#9b1c0e]"
  style={{
    background: "linear-gradient(90deg, #9b1c0e 0%, #9b1c0e 40%, #fff 50%, #9b1c0e 60%, #9b1c0e 100%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shine 2.5s linear infinite",
  }}
>
  Very Good Honors
</p>
                  </div>
                </article>

                {/* ========================= */}
                {/* ESI */}
                {/* ========================= */}
                <article className="education-timeline-item relative">

                  {/* POINT */}
                  <div className="education-timeline-dot education-dot-second relative z-10 mb-8 h-[21px] w-[21px] rounded-full border-[5px] border-white bg-[#9b1c0e] shadow-[0_0_0_1px_#9b1c0e]" />

                  <div className="education-timeline-content">

                    <div className="grid items-start gap-10 md:grid-cols-[1fr_155px]">

                      {/* TEXT */}
                      <div>

                        <div className="flex items-center gap-3">
                          <p className="font-display text-6xl leading-none text-[#9b1c0e]">
                            2027
                          </p>

                          <span className="rounded-full bg-[#9b1c0e]/8 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-[#9b1c0e]">
                            Current
                          </span>
                        </div>


                        <h3
                          className="mt-6 text-4xl leading-[0.95] text-[#171717] md:text-5xl"
                          style={serif}
                        >
                          Computer Systems
                          <br />
                          <em className="text-[#9b1c0e]">
                            Engineering
                          </em>
                        </h3>

                        <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#000]">
                          ESI — Higher National School of Computer Science
                        </p>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-zinc-400">
                          Algiers, Algeria
                        </p>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600">
                          Building a broad foundation across{" "}
                          <span className="font-medium text-[#171717]">
                            artificial intelligence, networking,
                            cybersecurity, high-performance computing,
                            software engineering, IoT, algorithm design,
                            combinatorial optimization, and data analysis.
                          </span>
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {[
                            "AI",
                            "Networking",
                            "Cybersecurity",
                            "HPC",
                            "IoT",
                            "Software",
                          ].map((item) => (
                            <span
                              key={item}
                              className="border border-zinc-200 px-3 py-1.5 text-[8px] uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:border-[#9b1c0e]/30 hover:text-[#9b1c0e]"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* PHOTO */}
<div className="relative hidden md:block">
  <AnimatedPhoto>
    <div className="relative ml-auto mt-2 h-[250px] w-[195px] rotate-[4deg] bg-white p-[7px] pb-[18px] shadow-[0_10px_24px_rgba(0,0,0,0.14)]">

      {/* TAPE */}
      <div className="absolute -top-[12px] left-1/2 z-20 h-[25px] w-[70px] -translate-x-1/2 -rotate-[5deg] bg-[#e8dccb]/90 shadow-[0_2px_4px_rgba(0,0,0,0.08)]" />

      {/* IMAGE */}
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src="/esi.jpg"
          alt="ESI — Higher National School of Computer Science"
          fill
          className="object-cover"
          sizes="195px"
        />
      </div>
    </div>

    <p className="mt-5 text-center text-[8px] uppercase tracking-[0.18em] text-zinc-400">
      ESI · Algiers
    </p>
  </AnimatedPhoto>
</div>

                    </div>
                  </div>
                </article>

              </div>
            </div>
          </AnimatedTimeline>
        </div>
      </div>
    </section>
  );
}