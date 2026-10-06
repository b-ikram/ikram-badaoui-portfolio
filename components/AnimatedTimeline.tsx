"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function AnimatedTimeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Measure the center of each dot, relative to the timeline container
    const measure = () => {
      const dots = element.querySelectorAll<HTMLElement>(
        ".education-timeline-dot"
      );
      if (dots.length < 2) return;

      const origin = element.getBoundingClientRect().left;
      const center = (el: HTMLElement) => {
        const r = el.getBoundingClientRect();
        return r.left + r.width / 2 - origin;
      };

      element.style.setProperty(
        "--timeline-marker-start",
        `${center(dots[0])}px`
      );
      element.style.setProperty(
        "--timeline-marker-end",
        `${center(dots[1])}px`
      );
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(element);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          measure();
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={visible ? "timeline-visible" : ""}>
      {children}
    </div>
  );
}