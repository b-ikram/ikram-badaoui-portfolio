"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatedGreeting } from "./AnimatedGreeting";
import { BottomStatement } from "./BottomStatement";
const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

export function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-me"
      className="relative overflow-hidden bg-white px-6 py-14 sm:px-10 md:px-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            GREETING
        ===================================================== */}
        <div className="relative mb-5">

          {/* GIANT BACKGROUND NUMBER */}
          <span
            aria-hidden
            className={`
              pointer-events-none absolute -left-6 -top-28 select-none
              text-[170px] leading-none tracking-[-0.08em]
              text-[#9b1c0e]/[0.055]
              transition-all duration-[1200ms] ease-out
              sm:-left-8 sm:-top-36 sm:text-[240px]
              md:-left-10 md:-top-44 md:text-[320px]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }
            `}
            style={serif}
          >
            01
          </span>

          {/* GREETING */}
          <div
            className={`
              relative z-10 pt-10 transition-all duration-1000 ease-out
              md:pt-14
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }
            `}
          >
            <AnimatedGreeting />
          </div>
        </div>


        {/* =====================================================
    INTRO + TAPED PHOTO
===================================================== */}
<div className="relative mb-12">

  {/* Taped photo */}
  <div
    className={`
      relative ml-auto mr-2 mb-10
      h-[190px] w-[150px]
      rotate-[6deg] bg-white p-[9px] pb-[25px]
      shadow-[0_12px_28px_rgba(0,0,0,0.18)]
      transition-all duration-[1000ms] delay-200 ease-out

      sm:h-[230px] sm:w-[180px]
      sm:p-[10px] sm:pb-[28px]

      md:absolute md:right-8 md:top-[-4rem]
      md:mb-0
      md:h-[260px] md:w-[205px]

      ${
        isVisible
          ? "translate-y-0 rotate-[6deg] opacity-100"
          : "-translate-y-8 rotate-[11deg] opacity-0"
      }
    `}
  >
    {/* Tape */}
    <div
      className="
        absolute -top-[15px] left-1/2 z-40
        h-[30px] w-[85px]
        -translate-x-1/2 -rotate-[4deg]
        bg-[#e8dccb]/90
        shadow-[0_2px_5px_rgba(0,0,0,0.1)]

        sm:-top-[17px] sm:h-[34px] sm:w-[100px]
      "
    />

    <div className="relative h-full w-full overflow-hidden">
      <Image
        src="/ikram3.jpg"
        alt="Ikram"
        fill
        priority
        className="object-cover"
        sizes="205px"
      />
    </div>
  </div>

  {/* Intro paragraphs */}
  <div className="relative z-10 pr-0 sm:pr-24 md:pr-28" />
</div>


        {/* =====================================================
            EDITORIAL TITLE
        ===================================================== */}
        <div className="relative mt-4 min-h-[190px] sm:min-h-[220px]">

          <h2
            className={`
              relative z-10 whitespace-nowrap text-[#171717]
              transition-all duration-[1100ms] delay-300 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }
            `}
            style={{
              ...serif,
              fontSize: "clamp(2.2rem, 5vw, 5rem)",
              lineHeight: "0.9",
              letterSpacing: "-0.04em",
            }}
          >
            COMPUTER SYSTEMS
            <br />
            <em className="font-normal">ENGINEER</em>
          </h2>
        </div>


        {/* =====================================================
            LARGE PHOTO + SIDE TEXT
        ===================================================== */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">

          {/* LARGE IMAGE */}
          <div
            className={`
              relative transition-all duration-[1200ms] delay-400 ease-out
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }
            `}
          >
            <div className="relative aspect-[4/5] w-full max-w-[500px] overflow-hidden">
              <Image
                src="/ikram2.jpg"
                alt="Ikram"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>


          {/* RIGHT SIDE */}
          <div
            className={`
              pt-2 transition-all duration-[1100ms] delay-500 ease-out
              md:pt-10
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }
            `}
          >

            <p
              className="text-xs uppercase tracking-[0.18em] text-[#9b1c0e]"
              style={serif}
            >
              Curious by nature.
            </p>

            <p className="mt-6 text-sm leading-7 text-[#625a56] sm:text-[15px]">
              I’m a Computer Systems Engineering student working across
              artificial intelligence, networking, cybersecurity, robotics,
              and software engineering. I enjoy working at the intersection
              of research and engineering, where challenging technical
              problems become opportunities to experiment, learn, and create.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#625a56] sm:text-[15px]">
              I&apos;m curious, research-minded and hands-on, with a passion
              for exploring new ideas and turning them into practical,
              meaningful solutions.
            </p>

            {/* CTA */}
            <a
              href="#projects"
              className="
                group mt-8 inline-flex items-center rounded-full
                bg-[#9b1c0e] px-7 py-3.5
                text-[10px] font-bold uppercase
                tracking-[0.2em] text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#5e0914]
                hover:shadow-[0_10px_25px_rgba(123,13,20,0.2)]
              "
            >
              Explore my work

              <span
                className="
                  ml-3 text-sm
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </a>
          </div>
        </div>


        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}
        <div className="mt-16 border-t border-[#9b1c0e]/15 pt-7 md:mt-20">
        <BottomStatement />
        </div>
          
        </div>

      
    </section>
  );
}