import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, MapPin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { ValuesMarquee } from "@/components/ValuesMarquee";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { ScrollControls } from "@/components/ScrollControls";
import { Section } from "@/components/Section";
import { TechIcon } from "@/components/TechIcon";
import { AboutMe } from "@/components/AboutMe";
import { Education } from "@/components/Education";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
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

      <Hero />

      <IntroSection />

      <AboutMe />

      <Education />

        <Projects/>
      <Experience/>


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