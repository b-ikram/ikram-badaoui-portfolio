"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedMy() {
  const ref = useRef<HTMLSpanElement>(null);
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
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span
  ref={ref}
  className={visible ? "my-animation my-animation-visible" : "my-animation"}
  style={{
    fontFamily: '"Brittany Signature", "Herr Von Muellerhoff", cursive',
  }}
>
  My
</span>
  );
}