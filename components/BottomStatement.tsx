"use client";

import { useEffect, useRef, useState } from "react";

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

export function BottomStatement() {
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
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        flex flex-col justify-between gap-5 sm:flex-row sm:items-end
        transition-all duration-[1000ms] ease-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }
      `}
    >
      <p
        className="
          max-w-xl
          text-2xl
          leading-tight
          text-[#171717]
          sm:text-3xl
        "
        style={serif}
      >
        I like asking questions, solving difficult problems, and
        building things that make an impact.
      </p>

      <span
        className={`
          text-[10px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#7b0d1b]
          transition-all
          duration-700
          delay-200
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }
        `}
      >
        Based in Algeria · Open to opportunities
      </span>
    </div>
  );
}