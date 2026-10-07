"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * ContactMe
 * Drop-in section. No dependencies besides React.
 * Fonts load from Google Fonts via the <style> block below.
 */

type FormState = {
  name: string;
  email: string;
  service: string;
  source: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  service: "",
  source: "",
  message: "",
};

export function ContactMe() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);

  // Start the animation sequence once the section scrolls into view
useEffect(() => {
  const el = rootRef.current;
  if (!el) return;

  const checkVisibility = () => {
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Trigger when the section actually reaches the lower part
    // of the viewport.
    if (rect.top < viewportHeight * 0.85 && rect.bottom > 0) {
      setInView(true);
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("resize", checkVisibility);
    }
  };

  checkVisibility();

  window.addEventListener("scroll", checkVisibility, { passive: true });
  window.addEventListener("resize", checkVisibility);

  return () => {
    window.removeEventListener("scroll", checkVisibility);
    window.removeEventListener("resize", checkVisibility);
  };
}, []);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSent(false);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send message.");
    }

    setSent(true);
    setForm(initialForm);
  } catch (error) {
    console.error("Contact form error:", error);

    setSent(false);
    alert("Something went wrong. Please try again.");
  }
};

return (
  <section ref={rootRef} className="cm-root">

    {/* ---------- Header (cream) ---------- */}
    <header className="cm-top">
      <h1
        className={`cm-title transition-all duration-1000 ease-out ${
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <span>CONTACT ME</span>
      </h1>

      <div className="cm-script-wrap rotate-[-4deg]">
        <span
  className={`cm-script ${
    inView ? "cm-script-visible" : ""
  }`}
  aria-hidden="true"
>
          let&rsquo;s get started
        </span>

        <svg
  className="cm-underline"
  viewBox="0 0 400 24"
  preserveAspectRatio="none"
  aria-hidden="true"
>
          <path
  className={inView ? "cm-underline-visible" : ""}
  d="M4 20 C 90 14, 230 10, 396 4"
  pathLength={1}
  fill="none"
  stroke="currentColor"
  strokeWidth="2.4"
  strokeLinecap="round"
/>
        </svg>
      </div>
    </header>

    {/* ---------- Body (beige) ---------- */}
    <div className="cm-body">
      <div className="cm-grid">

        {/* Left */}
        <div
          className={`cm-left transition-all duration-1000 delay-300 ease-out ${
            inView
              ? "translate-x-0 opacity-100"
              : "-translate-x-10 opacity-0"
          }`}
        >
          <p className={`cm-lead ${inView ? "cm-typing-visible" : ""}`}>
  <Typing>
    We&rsquo;d love to hear from you whether{" "}
    <em>you have an idea to share,</em> have a few questions,
    or just <em>want to say hi !</em>
  </Typing>
</p>
        </div>

        {/* Right */}
        <form
          className={`cm-form transition-all duration-1000 delay-[450ms] ease-out ${
            inView
              ? "translate-x-0 opacity-100"
              : "translate-x-10 opacity-0"
          }`}
          onSubmit={handleSubmit}
        >
          <input
            className="cm-field"
            type="text"
            placeholder="YOUR NAME*"
            aria-label="Your name"
            value={form.name}
            onChange={update("name")}
            required
          />

          <input
            className="cm-field"
            type="email"
            placeholder="EMAIL ADDRESS*"
            aria-label="Email address"
            value={form.email}
            onChange={update("email")}
            required
          />

          <input
            className="cm-field"
            type="text"
            placeholder="HOW'D YOU FIND ME?"
            aria-label="How did you find me?"
            value={form.source}
            onChange={update("source")}
          />

          <textarea
            className="cm-field cm-area"
            placeholder="TELL ME ALL THE THINGS*"
            aria-label="Tell me all the things"
            value={form.message}
            onChange={update("message")}
            required
          />

          <button className="cm-submit" type="submit">
            SUBMIT
          </button>

          <p className="cm-status" role="status" aria-live="polite">
  {sent
    ? "Message sent successfully. Thank you for reaching out!"
    : ""}
</p>
        </form>
      </div>
    </div>
  </section>
);
}
function splitChars(node: React.ReactNode, counter: { i: number }): React.ReactNode {
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, w) => {
      if (part === "") return null;
      if (/^\s+$/.test(part)) {
        counter.i += part.length;
        return part;
      }
      return (
        <span className="cm-word" key={w}>
          {part.split("").map((ch, c) => (
            <span
              className="cm-char"
              key={c}
              style={{ "--i": counter.i++ } as React.CSSProperties}
            >
              {ch}
            </span>
          ))}
        </span>
      );
    });
  }
  if (React.isValidElement(node)) {
    const el = node as React.ReactElement<{ children?: React.ReactNode }>;
    return React.cloneElement(
      el,
      undefined,
      React.Children.map(el.props.children, (c) => splitChars(c, counter))
    );
  }
  return node;
}

function Typing({ children }: { children: React.ReactNode }) {
  const counter = { i: 0 };
  const content = React.Children.map(children, (c) => splitChars(c, counter));
  return (
    <>
      <span className="cm-start" aria-hidden="true" />
      {content}
      <span
        className="cm-end"
        aria-hidden="true"
        style={{ "--i": counter.i } as React.CSSProperties}
      />
    </>
  );
}
export default ContactMe;
