"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollControls() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
      setVisible(window.scrollY > 700);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
        <div className="h-full bg-ruby" style={{ width: `${progress * 100}%` }} />
      </div>
      {visible && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-50 grid size-11 place-items-center rounded-full border border-ruby/20 bg-ruby text-cream shadow-glow transition hover:-translate-y-1"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
