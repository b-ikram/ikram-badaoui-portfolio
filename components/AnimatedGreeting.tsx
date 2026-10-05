"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedGreeting() {
  const ref = useRef<HTMLParagraphElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const greeting = ref.current;

    if (!greeting) return;

    const section = greeting.closest("section");

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={`about-greeting ${
        visible ? "about-greeting-visible" : ""
      }`}
    >
      Hey, I&apos;m Ikram{" "}
      <span className="signature-heart">♡</span>
    </p>
  );
}