import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, MapPin, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { ValuesMarquee } from "@/components/ValuesMarquee";
import { ScrollControls } from "@/components/ScrollControls";
import { AboutMe } from "@/components/AboutMe";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { MyValues } from "@/components/MyValues";
import ContactMe from "@/components/contactme";
import { Footer } from "@/components/Footer";
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

      <Footer github={profile.github} linkedin={profile.linkedin} />
    </main>
  );
}