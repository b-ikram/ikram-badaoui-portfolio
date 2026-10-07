"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EditorialColumns } from "./EditorialColumns";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

export function IntroSection() {
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
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden px-6 py-24 sm:px-10 md:py-32"
      style={{
        background: "#ffffff",
      }}
    >
      <div className="mx-auto max-w-7xl">

        {/* Slogan */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-1000 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <h2
            className="text-center text-[#171717]"
            style={{
              ...serif,
              fontSize: "clamp(2.2rem, 4.5vw, 4.4rem)",
              lineHeight: "0.94",
              letterSpacing: "-0.025em",
            }}
          >
            <span className="block">WHERE CURIOUS</span>

            <span className="block">MINDS</span>

            <span className="mt-1 flex items-baseline justify-center whitespace-nowrap">
              <em
                className="slogan-meet"
                style={{
                  fontFamily: '"Boujee", serif',
                  fontSize: "1.3em",
                  fontStyle: "italic",
                  fontWeight: 400,
                  letterSpacing: "-0.055em",
                  marginRight: "0.3em",
                  WebkitTextStroke: "0.15px currentColor",
                }}
              >
                meet
              </em>

              <span>ENGINEERING</span>
            </span>
          </h2>
        </div>

        {/* Editorial collage (taller on phone only: h-[540px]) */}
        <div
          className={`relative mx-auto mt-20 h-[540px] max-w-3xl transition-all duration-[1200ms] delay-150 ease-out sm:h-[500px] ${
            isVisible
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-16 scale-[0.96] opacity-0"
          }`}
        >

          {/* Soft red circular glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9b1c0e]/20 blur-[80px]"
          />

          {/* Main image — PC */}
          <div
            className="absolute left-1/2 top-1/2 z-10 h-[330px] w-[230px] -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] overflow-hidden shadow-[0_20px_45px_rgba(93,10,20,0.16)] sm:h-[390px] sm:w-[275px]"
          >
            <Image
              src="/pc.jpg"
              alt="Ikram working on a computer"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 230px, 275px"
            />
          </div>

          {/* Glasses — top-left on phone, original position from sm: up */}
          <div
            className="absolute left-[2%] top-[3%] z-20 h-[90px] w-[105px] rotate-[-5deg] overflow-hidden shadow-[0_15px_35px_rgba(93,10,20,0.14)] animate-float-glasses sm:left-[15%] sm:top-[17%] sm:h-[135px] sm:w-[160px]"
          >
            <Image
              src="/glasses.png"
              alt="Glasses"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 105px, 160px"
            />
          </div>

          {/* Coffee — bottom-right on phone, original position from sm: up */}
          <div
            className="absolute bottom-[34px] right-[2%] z-20 h-[95px] w-[105px] rotate-[6deg] animate-float-coffee sm:bottom-[6%] sm:right-[18%] sm:h-[170px] sm:w-[185px]"
          >
            <Image
              src="/coffee.png"
              alt="Coffee"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 105px, 185px"
            />
          </div>

          {/* Small handwritten label */}
          <p
            className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap text-xs italic text-[#171717] sm:text-xl"
            style={serif}
          >
            Powered by coffee, questionable sleep, my trusty glasses, and a very
            loyal PC
          </p>
        </div>

        <div>
          <EditorialColumns />
        </div>

      </div>
    </section>
  );
}