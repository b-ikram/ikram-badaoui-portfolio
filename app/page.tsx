import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, MapPin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { ScrollControls } from "@/components/ScrollControls";
import { Section } from "@/components/Section";
import { TechIcon } from "@/components/TechIcon";
import {
  achievements,
  contactLinks,
  designAreas,
  designExperience,
  designTools,
  education,
  experiences,
  focusAreas,
  profile,
  researchInterests,
  technologies
} from "@/data/portfolio";

export default function Home() {
  const DesignIcon = designExperience.icon;
  const motionVideos = [
    { title: "Algiers' Up - ETIC Event", src: "/videos/AUP.mp4", bg: "bg-black" },
    { title: "Instagram Post", src: "/videos/first_page_carrousel.mp4", bg: "bg-black" },
    { title: "ETIC Logo Animation", src: "/videos/LOGO.mp4", bg: "bg-white" }
  ];

  return (
    <main id="top" className="min-h-screen overflow-hidden">
      <Navbar />
      <ScrollControls />

      <section id="profile" className="relative mx-auto min-h-screen max-w-7xl px-5 pb-16 pt-24 sm:px-6 lg:px-8 flex flex-col justify-center">

        {/* Main Layout Grid - increased gap-y for mobile/stacked view */}
        <div className="relative z-10 grid items-center gap-y-12 gap-x-8 border-b border-ruby/15 pb-12 lg:grid-cols-12 mt-4">
          
          {/* LEFT COLUMN: Image Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              <div className="relative overflow-hidden rounded-xl border border-ruby/20 bg-blush p-2 shadow-xl">
                <div className="relative aspect-[3/4] max-h-[72vh] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/ikram-badaoui.jpg"
                    alt="Ikram Badaoui"
                    fill
                    priority
                    className="object-cover object-bottom transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 450px"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Greeting -> Spaced Subtitle -> Intro -> Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center lg:pl-4">
            
            {/* 1. "Hi, I'm Ikram" Greeting - Adjusted top margin */}
            <span className="font-handwriting text-4xl sm:text-5xl lg:text-6xl text-ruby -rotate-3 inline-block font-normal tracking-wide mt-2 lg:-mt-4">
              Hi, I'm Ikram
            </span>

            {/* 2. Subtitle Title - Changed mt-20 to mt-4 sm:mt-6 for tight, natural flow */}
            <h1 className="mt-10 sm:mt-16 lg:mt-20 mb-6 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-ruby/85">
              Computer Systems Engineering Student
            </h1>

            {/* 3. Intro Paragraph */}
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-zinc-800">
              {profile.intro}
            </p>

            {/* 4. Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ruby px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-cream shadow-md transition-all duration-300 hover:bg-oxblood hover:shadow-xl hover:-translate-y-0.5"
              >
                <Mail size={16} className="transition-transform group-hover:scale-110" />
                <span>Contact Me</span>
              </a>

              <a
                href={profile.cv}
                download
                className="inline-flex items-center gap-2 rounded-full border border-ruby/25 bg-paper/60 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-ruby transition hover:border-ruby hover:bg-ruby hover:text-cream"
              >
                <Download size={15} />
                CV
              </a>
            </div>
          </div>

        </div>

      </section>

      <Section id="education" title="Education">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.degree} className="portfolio-card border-t-4 border-t-amber-500/60 p-6">
                <Icon className="text-ruby" size={28} />
                <h3 className="mt-4 font-display text-3xl font-normal text-ruby">{item.degree}</h3>
                
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-ruby">
                  {item.institution}
                </p>

                <p className="mt-1 text-sm text-zinc-500">{item.date}</p>
                <p className="mt-4 text-sm leading-7 text-zinc-800">{item.details}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <ProjectExplorer />
      </Section>

      <Section id="technologies" title="Technologies">
        <div className="portfolio-card border-t-4 border-t-amber-500/70 p-7">
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <TechIcon key={tech} name={tech} />
            ))}
          </div>
        </div>
      </Section>

      <Section id="design" title="Design & Creativity">
        <div className="grid gap-5 xl:grid-cols-[0.84fr_1.16fr]">
          <div className="burgundy-panel flex flex-col justify-between p-7">
            <div>
              <DesignIcon size={32} />
              <h3 className="mt-6 font-display text-4xl font-normal text-cream">Creative Skills</h3>
              <p className="mt-4 text-sm leading-7 text-cream/90">
                I work at the intersection of motion, visuals, and interface thinking to create polished digital experiences with clarity and purpose.
              </p>
              <p className="mt-4 text-sm leading-7 text-cream/80">
                I developed these skills in our student club <strong className="font-bold text-cream">ETIC</strong>, where I served as a motion designer and graphic designer.
              </p>
            </div>
          </div>

          <div className="portfolio-card border-t-4 border-t-amber-500/70 p-7">
            <div className="flex items-center justify-between border-b border-ruby/15 pb-4">
              <p className="section-eyebrow text-ruby/60">Toolbox & Disciplines</p>
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-ruby/50">Design Stack</span>
            </div>

            <div className="mt-6 space-y-5">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ruby/80">Motion Design</p>
                <div className="flex flex-wrap gap-2">
                  <TechIcon name="After Effects" />
                  <TechIcon name="Premiere Pro" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ruby/80">Graphic & Visual Design</p>
                <div className="flex flex-wrap gap-2">
                  <TechIcon name="Photoshop" />
                  <TechIcon name="Illustrator" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ruby/80">UI/UX & Product Design</p>
                <div className="flex flex-wrap gap-2">
                  <TechIcon name="Figma" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {motionVideos.map((video) => (
            <div
              key={video.title}
              className="portfolio-card flex flex-col overflow-hidden border-t-4 border-t-ruby/70 p-4"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ruby/65">
                {video.title}
              </p>

              <div className={`relative aspect-[4/5] w-full overflow-hidden rounded flex items-center justify-center ${video.bg}`}>
                <video
                  className="h-full w-full object-contain overflow-hidden focus:outline-none border-none outline-none"
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  disablePictureInPicture
                  controlsList="nodownload noremoteplayback"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-4">
          {experiences.map((item) => (
            <article key={item.role} className="portfolio-card border-l-4 border-l-amber-500/60 p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-3xl font-normal text-ruby">{item.role}</h3>
                  <p className="mt-1 font-medium text-zinc-700">{item.place}</p>
                </div>
                <p className="text-sm text-zinc-500">{item.date}</p>
              </div>
              <ul className="mt-5 space-y-2">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-800">
                    <span className="mt-2 size-1.5 shrink-0 bg-ruby" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* FIXED: Changed id="Qualifications" to lowercase id="qualifications" */}
      <Section id="trainings" title="Trainings">
        <div className="portfolio-card border-t-4 border-t-amber-500/70 p-7">
          <div className="space-y-4">
           

            {/* List remaining achievements from portfolio.ts */}
            {achievements.map((item) => (
              <div key={item} className="flex gap-3 text-sm leading-6 text-zinc-800">
                <ArrowRight className="mt-1 shrink-0 text-ruby" size={15} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="portfolio-card border-t-4 border-t-ruby p-7">
          <p className="max-w-3xl text-base leading-8 text-zinc-800">
            Open to AI research, software engineering, graduate opportunities, and collaborations across intelligent systems,
            networks, cybersecurity, and design.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  download={item.download}
                  className="group flex items-center justify-between border border-ruby/16 bg-white p-4 text-ruby transition hover:border-ruby hover:bg-ruby hover:text-cream"
                >
                  <span className="flex items-center gap-3 text-sm font-semibold">
                    <Icon size={18} />
                    {item.label}
                  </span>
                  <ArrowRight className="transition group-hover:translate-x-1" size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </Section>

      <footer className="border-t border-ruby/18 bg-white px-5 py-8 text-center text-xs text-zinc-600 sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-semibold text-zinc-800">Ikram Badaoui</span>
            <span className="hidden sm:inline">• Designed & Built with Precision</span>
          </p>

          <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 transition hover:text-ruby"
            >
              GitHub
            </a>
            <span className="text-zinc-300">•</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 transition hover:text-ruby"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}