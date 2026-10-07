import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, MapPin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { ValuesMarquee } from "@/components/ValuesMarquee";
import { ScrollControls } from "@/components/ScrollControls";
import { Section } from "@/components/Section";
import { TechIcon } from "@/components/TechIcon";
import { AboutMe } from "@/components/AboutMe";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { MyValues } from "@/components/MyValues";
import ContactMe from "@/components/contactme";
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
      <ValuesMarquee/>
      <MyValues/>

      <ContactMe/>

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