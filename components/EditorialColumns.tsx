"use client";

import { useEffect, useRef, useState } from "react";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

export function EditorialColumns() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

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

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        mt-24 grid border-t border-[#9b1c0e]/15
        transition-all duration-1000 ease-out
        md:grid-cols-3
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }
      `}
    >
      {/* 01 */}
      <a
        href="#about-me"
        className="group border-b border-[#9b1c0e]/15 py-8 md:border-b-0 md:border-r md:pr-10"
      >
        <div className="flex gap-6">
          <span className="shrink-0 text-5xl text-ruby" style={serif}>
            01.
          </span>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ruby">
              Learn more
              <br />
              about me
            </h3>

            <p className="mt-4 max-w-[230px] text-xs leading-relaxed text-[#75665e]">
              Discover the person behind the projects, my journey in computer
              systems engineering, and what drives me to build.
            </p>

            <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-ruby transition-transform group-hover:translate-x-2">
              Discover →
            </span>
          </div>
        </div>
      </a>

      {/* 02 */}
      <a
        href="#projects"
        className="group border-b border-[#9b1c0e]/20 py-8 md:border-b-0 md:border-r md:px-10"
      >
        <div className="flex gap-6">
          <span className="shrink-0 text-5xl text-ruby" style={serif}>
            02.
          </span>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-ruby">
              Explore
              <br />
              my work
            </h3>

            <p className="mt-4 max-w-[230px] text-xs leading-relaxed text-[#75665e]">
              From AI and robotics to networks and cybersecurity, explore the
              systems, experiments, and research projects I’ve built.
            </p>

            <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-ruby transition-transform group-hover:translate-x-2">
              View projects →
            </span>
          </div>
        </div>
      </a>

      {/* 03 */}
      <a
        href="#contact"
        className="group py-8 md:pl-10"
      >
        <div className="flex gap-6">
          <span className="shrink-0 text-5xl text-ruby" style={serif}>
            03.
          </span>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-#9b1c0e">
              Let&apos;s
              <br />
              connect
            </h3>

            <p className="mt-4 max-w-[230px] text-xs leading-relaxed text-[#75665e]">
              Interested in research, technology, or building something
              meaningful together? I’d love to hear from you.
            </p>

            <span className="mt-5 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-ruby transition-transform group-hover:translate-x-2">
              Get in touch →
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}