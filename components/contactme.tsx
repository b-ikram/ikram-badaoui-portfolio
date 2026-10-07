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
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // play once
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send `form` to your backend / email service here.
    console.log("Contact form:", form);
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section ref={rootRef} className={`cm-root${inView ? " cm-in" : ""}`}>

      {/* ---------- Header (cream) ---------- */}
      <header className="cm-top">
        <h1 className="cm-title">
          <span>CONTACT ME</span>
        </h1>

        <div className="cm-script-wrap" aria-label="let's get started">
          <span className="cm-script" aria-hidden="true">
            let&rsquo;s get started
          </span>
          <svg
            className="cm-underline"
            viewBox="0 0 400 24"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
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
          {/* Left: paragraph (replaces the photo) */}
          <div className="cm-left">
            <p className="cm-lead">
              We&rsquo;d love to hear from you whether{" "}
              <em>you&rsquo;re ready to get started,</em> have a few questions,
              or just <em>want to say hi.</em>
            </p>
            
          </div>

          {/* Right: form */}
          <form className="cm-form" onSubmit={handleSubmit}>
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
              {sent ? "Thank you! We'll be in touch within 1–2 business days." : ""}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
