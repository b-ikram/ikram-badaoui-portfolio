"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowUpRight,
  FileText,
  X,
  MoveUpRight,
} from "lucide-react";

import { projects } from "@/data/portfolio";

type Project = {
  title: string;
  categories: string[];
  repo?: string;
  article?: string;
  image?: string;
  description: string;
  technologies: string[];
  contributions: string[];
};

const serif = {
  fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif',
};

const PROJECT_IMAGES: Record<string, string> = {
  "RL-HGGA Bin Packing Optimizer": "/projects/bin-packing.png",
  "CUDA Neural Network Training Optimization": "/projects/hpc.png",
  "Modern Data Center for ESI": "/projects/datacenter.jpg",
  "Agentic AI Ticketing Pipeline": "/projects/ticket.png",
  "Carbon Footprint Calculator": "/projects/carbon.jpg",
  "ESIBOT Autonomous Mobile Robot": "/projects/esibot.png",
};

function getProjectImage(project: Project) {
  return PROJECT_IMAGES[project.title] || project.image || "";
}

function ProjectImage({
  project,
  number,
  onClick,
}: {
  project: Project;
  number: string;
  onClick: () => void;
}) {
  const image = getProjectImage(project);

  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        block
        w-full
        text-left
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#9b1c0e]
      "
    >
      <div
  className="
    project-image
    relative
    aspect-[1.75/0.9]
    overflow-hidden
    bg-white
  "
>
        {image ? (
          <Image
            src={image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="
  object-contain
  p-1
  sm:p-2
  transition-transform
  duration-700
  ease-out
  group-hover:scale-[1.03]
"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#9b1c0e]">
            <span
              className="text-8xl text-[#f4e8dc]/20"
              style={serif}
            >
              {number}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="
            absolute inset-0
            bg-[#9b1c0e]/0
            transition-colors duration-500
            group-hover:bg-[#9b1c0e]/10
          "
        />

        {/* Number */}
        <span
          className="
            absolute left-4 top-4
            text-[10px]
            font-bold
            tracking-[0.2em]
            text-[#9b1c0e]
            opacity-0
            transition-all duration-500
            group-hover:opacity-100
          "
        >
          {number}
        </span>

        {/* Open icon */}
        <span
          className="
            absolute right-4 top-4
            flex h-10 w-10
            translate-y-2
            items-center justify-center
            rounded-full
            bg-white
            text-[#9b1c0e]
            shadow-sm
            opacity-0
            transition-all duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <MoveUpRight className="h-4 w-4" />
        </span>
      </div>

      {/* TITLE */}
      <div className="mt-4 flex items-start justify-between gap-5">
        <div>
          <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[#9b1c0e]">
            {project.categories.join(" · ")}
          </p>

          <h3
  className="
    max-w-xs
    text-lg
    leading-[1.05]
    text-[#171717]
    transition-colors
    duration-300
    group-hover:text-[#9b1c0e]
    sm:text-xl
  "
  style={serif}
>
  {project.title}
</h3>
        </div>

        <span
          className="
            mt-1
            shrink-0
            text-[10px]
            tracking-[0.15em]
            text-zinc-400
          "
        >
          {number}
        </span>
      </div>
    </button>
  );
}

export function Projects() {

  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");

const filters = [
  "All",
  "AI",
  "Research",
  "Networks",
  "Cyber Security",
  "Software",
  "HPC",
  "Robotics",
  "Big Data",
];

const filteredProjects = useMemo(() => {
  if (activeFilter === "All") return projects;

  return projects.filter((project) =>
    project.categories.includes(activeFilter)
  );
}, [activeFilter]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const list = projects as Project[];

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="
          relative
          overflow-hidden
          bg-white
          px-6
          py-24
          sm:px-10
          md:px-16
          md:py-32
        "
      >
        

        <div className="relative mx-auto max-w-7xl">
  {/* GIANT BACKGROUND NUMBER */}
  <span
  aria-hidden
  className={`
    pointer-events-none
    absolute
    -right-6
    -top-36
    select-none
    text-[170px]
    leading-none
    tracking-[-0.08em]
    text-[#9b1c0e]/[0.055]
    transition-all
    duration-[1200ms]
    ease-out
    sm:-top-44
    sm:text-[240px]
    md:-top-52
    md:text-[320px]
    ${
      visible
        ? "translate-x-0 opacity-100"
        : "translate-x-10 opacity-0"
    }
  `}
  style={serif}
>
  02
</span>

  {/* HEADER */}
<div
  className={`
    relative grid gap-10 md:grid-cols-[0.8fr_1.6fr] md:items-center
    transition-all duration-1000 ease-out
    ${
      visible
        ? "translate-y-0 opacity-100"
        : "translate-y-10 opacity-0"
    }
  `}
>    
    

    {/* RIGHT TITLE */}
    <div className="relative pt-10 md:pt-13">
      <div>
           

            <h2
              className="relative z-10 whitespace-nowrap text-[#171717]"
              style={{
                ...serif,
                fontSize: "clamp(2.2rem, 5vw, 5rem)",
                lineHeight: "0.9",
                letterSpacing: "-0.04em",
              }}
            >
              Selected Works
            </h2>
          </div>

      <div className="mt-7 flex items-center gap-5">
        <span className="h-px flex-1 bg-[#9b1c0e]/25" />

        <span
          className="
            whitespace-nowrap
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-zinc-400
          "
        >
          Ideas → systems → results
        </span>
      </div>
    </div>
  </div>


<div
  className={`
    mt-12 flex flex-wrap items-center gap-x-6 gap-y-3
    border-y border-[#171717]/10 py-5
    transition-all duration-1000 delay-200 ease-out
    ${
      visible
        ? "translate-y-0 opacity-100"
        : "translate-y-8 opacity-0"
    }
  `}
>
    {filters.map((filter) => {
    const active = activeFilter === filter;

    return (
      <button
        key={filter}
        type="button"
        onClick={() => setActiveFilter(filter)}
        className={`
          relative
          pb-1
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.18em]
          transition-colors
          duration-300
          ${
            active
              ? "text-[#9b1c0e]"
              : "text-[#171717]/45 hover:text-[#171717]"
          }
        `}
      >
        {filter}

        <span
          className={`
            absolute
            bottom-0
            left-0
            h-px
            bg-[#9b1c0e]
            transition-all
            duration-300
            ${active ? "w-full" : "w-0"}
          `}
        />
      </button>
    );
  })}
</div>

          {/* PROJECT GRID */}
<div
  className={`
    mt-8 grid grid-cols-1 gap-x-5 gap-y-8
    transition-all duration-[1200ms] delay-400 ease-out
    sm:grid-cols-2 lg:grid-cols-3
    ${
      visible
        ? "translate-y-0 opacity-100"
        : "translate-y-12 opacity-0"
    }
  `}
>
      {filteredProjects.map((project, index) => (
    <div
      key={project.title}
      className="project-gallery-item"
      style={
        {
          "--project-index": index,
        } as React.CSSProperties
      }
    >
      <ProjectImage
        project={project}
        number={String(index + 1).padStart(2, "0")}
        onClick={() => setSelectedProject(project)}
      />
    </div>
  ))}
</div>
        </div>
      </section>

      {/* MODAL */}


      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-5xl
              overflow-y-auto
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white
                text-[#171717]
                shadow-md
                transition-all
                duration-300
                hover:bg-[#9b1c0e]
                hover:text-white
              "
            >
              <X className="h-5 w-5" />
            </button>

            {/* IMAGE */}
            <div className="relative aspect-[16/8] w-full bg-white">
              {getProjectImage(selectedProject) ? (
                <Image
                  src={getProjectImage(selectedProject)}
                  alt={selectedProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain p-6 sm:p-10"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[#9b1c0e]">
                  <span
                    className="text-8xl text-[#f4e8dc]/30"
                    style={serif}
                  >
                    {String(
                      list.findIndex(
                        (p) => p.title === selectedProject.title
                      ) + 1
                    ).padStart(2, "0")}
                  </span>
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="grid gap-10 border-t border-[#171717]/10 p-7 sm:p-10 md:grid-cols-[1.2fr_0.8fr]">
              
              {/* LEFT */}
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#9b1c0e]">
                  {selectedProject.categories.join(" · ")}
                </p>

                <h2
                  className="
                    text-4xl
                    leading-[0.95]
                    tracking-[-0.03em]
                    text-[#171717]
                    sm:text-5xl
                  "
                  style={serif}
                >
                  {selectedProject.title}
                </h2>

                <div className="mt-8">
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b1c0e]">
                    About the project
                  </p>

                  <p className="max-w-2xl text-sm leading-7 text-zinc-600">
                    {selectedProject.description}
                  </p>
                </div>

                {/* CONTRIBUTIONS */}
                {selectedProject.contributions?.length > 0 && (
                  <div className="mt-8">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b1c0e]">
                      Contributions
                    </p>

                    <ul className="space-y-3">
                      {selectedProject.contributions.map(
                        (contribution, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-sm leading-6 text-zinc-600"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9b1c0e]" />
                            <span>{contribution}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* RIGHT */}
              <div>
                {/* TECHNOLOGIES */}
                <div>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b1c0e]">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="
                          border
                          border-[#171717]/10
                          px-3
                          py-2
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.08em]
                          text-[#171717]/70
                        "
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LINKS */}
                {(selectedProject.repo || selectedProject.article) && (
                  <div className="mt-10">
                    <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b1c0e]">
                      Links
                    </p>

                    <div className="flex flex-col gap-3">
                      {selectedProject.repo && (
                        <a
                          href={selectedProject.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            justify-between
                            border
                            border-[#171717]/10
                            px-4
                            py-3
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-[#171717]
                            transition-colors
                            hover:border-[#9b1c0e]
                            hover:bg-[#9b1c0e]
                            hover:text-white
                          "
                        >
                          <span>View repository</span>
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}

                      {selectedProject.article && (
                        <a
                          href={selectedProject.article}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            flex
                            items-center
                            justify-between
                            border
                            border-[#171717]/10
                            px-4
                            py-3
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-[#171717]
                            transition-colors
                            hover:border-[#9b1c0e]
                            hover:bg-[#9b1c0e]
                            hover:text-white
                          "
                        >
                          <span>Read article</span>
                          <FileText className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* PROJECT NUMBER */}
                <div className="mt-10 border-t border-[#171717]/10 pt-5">
                  <span
                    className="text-7xl leading-none text-[#9b1c0e]/10"
                    style={serif}
                  >
                    {String(
                      list.findIndex(
                        (p) => p.title === selectedProject.title
                      ) + 1
                    ).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
   