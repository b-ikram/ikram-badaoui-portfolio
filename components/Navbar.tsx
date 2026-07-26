"use client";

import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/portfolio";

const cx = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export function Navbar() {
  const [active, setActive] = useState("profile");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id.toLowerCase());
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0.1 }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ruby/10 bg-paper/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-[92rem] items-center justify-between px-4 sm:px-6">
        
        {/* Brand Name */}
        <a
          href="#profile"
          className="shrink-0 font-display text-xl sm:text-2xl font-medium uppercase tracking-widest text-ruby transition hover:opacity-80"
        >
          IKRAM BADAOUI
        </a>

        {/* Right Section: Desktop Links */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-4">
            {navItems.map((item) => {
              // Convert both to lowercase to guarantee a match
              const itemKey = item.toLowerCase();
              const isActive = active === itemKey;

              return (
                <a
                  key={item}
                  href={`#${itemKey}`}
                  className={cx(
                    "text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200",
                    isActive
                      ? "text-ruby underline underline-offset-8 decoration-ruby/40"
                      : "text-ruby/60 hover:text-ruby"
                  )}
                >
                  {item}
                </a>
              );
            })}
          </div>

          {/* Download CV Button */}
          <a
            href={profile.cv}
            download
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-ruby px-5 py-2.5 text-[0.65rem] font-bold uppercase tracking-widest text-cream transition hover:bg-oxblood hover:shadow-md"
          >
            <Download size={13} />
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-full border border-ruby/20 text-ruby lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-ruby/10 bg-paper px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-xs font-semibold uppercase tracking-widest text-ruby/80 hover:text-ruby"
              >
                {item}
              </a>
            ))}
            <a
              href={profile.cv}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ruby py-3 text-xs font-bold uppercase tracking-widest text-cream"
            >
              <Download size={14} />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}