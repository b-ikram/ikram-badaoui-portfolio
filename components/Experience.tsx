"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { experiences } from "@/data/portfolio";
import { AnimatedMy } from "./AnimatedMy";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

const photos = [
  {
    src: "/sonatrach.jpg",
    alt: "Sonatrach headquarters",
    match: "sonatrach",
    title: "Network & Security Engineering Intern",
    subtitle: "Sonatrach",
  },
  {
    src: "/samsung.jpg",
    alt: "Samsung Innovation Campus",
    match: "samsung",
    title: "Samsung Innovation Campus",
    subtitle: "Training program",
  },
];

type ExtraFields = {
  repository?: string;
  article?: string;
};

export function Experience() {
const [activeIndex, setActiveIndex] = useState<number | null>(null);
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLElement>(null);

  const activePhoto =
    activeIndex !== null ? photos[activeIndex] : null;

  const baseExperience = activePhoto
    ? experiences.find((e) =>
        `${e.role} ${e.place}`
          .toLowerCase()
          .includes(activePhoto.match)
      )
    : null;

  const activeExperience = baseExperience as
    | (typeof baseExperience & ExtraFields)
    | null
    | undefined;
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
      threshold: 0.05,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
    };

    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [activeIndex]);

  return (
    <section
  ref={sectionRef}
  id="experience"
  className="relative overflow-hidden bg-[#faf7ee] px-5 py-20 sm:px-8 md:px-12 lg:px-16 md:py-28"
>
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div
  className={`relative mb-12 transition-all duration-1000 ease-out sm:mb-16 ${
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-10 opacity-0"
  }`}
>
          <div
            className="relative inline-block pt-[0.9em]"
            style={{
              fontSize: "clamp(2.4rem, 7vw, 5rem)",
            }}
          >
            <div
              className="pointer-events-none absolute z-20 -rotate-[50deg] origin-bottom-left"
              style={{
                left: "0.35em",
                bottom: "calc(100% - 1.2em)",
              }}
            >
              <AnimatedMy />
            </div>

            <h2
              className="relative z-10 ml-[0.75em] text-[#171717]"
              style={{
                ...serif,
                fontSize: "1em",
                lineHeight: "0.9",
                letterSpacing: "-0.04em",
              }}
            >
              Experience
            </h2>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between lg:gap-16">

          {/* PHOTOS */}
          <div
  className={`grid w-full transition-all duration-[1200ms] delay-150 ease-out ${
    isVisible
      ? "translate-y-0 opacity-100"
      : "translate-y-12 opacity-0"
  }
  grid-cols-1
  gap-12
  sm:grid-cols-2 sm:gap-7
  lg:max-w-[780px]`}
>
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Open details: ${photo.title}`}
                className="
                  group
                  w-full
                  cursor-pointer
                  text-left
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#9b1c0e]
                  focus-visible:ring-offset-4
                  focus-visible:ring-offset-[#faf7ee]
                "
              >
                {/* IMAGE */}
                <div
                  className="
                    relative
                    aspect-[4/3]
                    w-full
                    overflow-hidden
                    shadow-[0_18px_40px_rgba(93,10,20,0.15)]
                  "
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 1023px) 50vw,
                      390px
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="mt-4 pr-2 sm:mt-5">
                  <p
                    className="
                      text-lg
                      leading-[1.15]
                      text-[#171717]
                      sm:text-lg
                      md:text-xl
                    "
                    style={serif}
                  >
                    {photo.title}
                  </p>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#9b1c0e]
                    "
                  >
                    {photo.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* QUOTE */}
<div
  className={`w-full transition-all duration-[1100ms] delay-300 ease-out lg:w-auto lg:max-w-[360px] lg:pt-2 ${
    isVisible
      ? "translate-x-0 opacity-100"
      : "translate-x-10 opacity-0"
  }`}
>
    <h3
    className="ml-auto w-fit text-right text-[#9b1c0e]"
    style={{
      fontFamily:
        '"Abril Fatface", "Playfair Display", Georgia, serif',
      fontWeight: 900,
      fontSize: "clamp(2.8rem, 8vw, 5rem)",
      lineHeight: "0.95",
      letterSpacing: "-0.02em",
    }}
  >
    <span className="block">believe</span>
    <span className="block">today</span>
    <span className="block">achieve</span>
    <span className="block">tomorrow</span>
  </h3>
</div>
        </div>
      </div>

      {/* POPUP */}
      {activePhoto && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-[#171717]/60
            p-4
            backdrop-blur-sm
          "
          onClick={() => setActiveIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-2xl
              overflow-y-auto
              bg-[#faf7ee]
              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
              className="
                absolute
                right-3
                top-3
                z-10
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-white
                text-xl
                leading-none
                text-[#9b1c0e]
                shadow
                transition
                hover:bg-[#9b1c0e]
                hover:text-white
              "
            >
              ×
            </button>

            <div className="relative h-56 w-full sm:h-72">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>

            <div className="p-5 sm:p-8">
              {activeExperience ? (
                <>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b1c0e]">
                    {activeExperience.date}
                  </p>

                  <h3
                    className="mt-2 text-2xl leading-tight tracking-[-0.02em] text-[#171717] sm:text-4xl"
                    style={serif}
                  >
                    {activeExperience.role}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#625a56]">
                    {activeExperience.place}
                  </p>

                  <div className="my-5 h-px w-full bg-[#9b1c0e]/20" />

                  <ul className="space-y-3">
                    {activeExperience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-[#171717]/80"
                      >
                        <span className="mt-[11px] h-1 w-1 shrink-0 bg-[#9b1c0e]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {(activeExperience.article ||
                    activeExperience.repository) && (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {activeExperience.article && (
                        <a
                          href={activeExperience.article}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            bg-[#9b1c0e]
                            px-5
                            py-2.5
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-white
                            transition
                            hover:opacity-90
                          "
                        >
                          Read the article ↗
                        </a>
                      )}

                      {activeExperience.repository && (
                        <a
                          href={activeExperience.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            border
                            border-[#9b1c0e]
                            px-5
                            py-2.5
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-[#9b1c0e]
                            transition
                            hover:bg-[#9b1c0e]
                            hover:text-white
                          "
                        >
                          View repository ↗
                        </a>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-[#625a56]">
                  No matching entry found in your experiences data.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}