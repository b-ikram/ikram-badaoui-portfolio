"use client";

import Image from "next/image";
import { ExternalLink, FileText } from "lucide-react";
import { useMemo, useState } from "react";
import { projects, categoriesList } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { TechIcon } from "@/components/TechIcon";

export function ProjectExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) =>
      project.categories.includes(selectedCategory as any)
    );
  }, [selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 border-b border-ruby/14 pb-5">
        {categoriesList.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={cn(
              "border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition",
              selectedCategory === category
                ? "border-ruby bg-ruby text-cream shadow-[0_10px_22px_rgba(93,10,20,0.18)]"
                : "border-ruby/18 bg-white text-ruby/70 hover:border-ruby/55 hover:bg-cream/45"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid List */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => {
          const Icon = project.icon;
          const hasImage = "image" in project && Boolean(project.image);

          return (
            <article
              key={project.title}
              className="group flex min-h-full flex-col overflow-hidden border border-ruby/12 bg-white shadow-[0_10px_30px_rgba(93,10,20,0.04)]"
            >
              {/* Fixed Height Red Title Block */}
              <div className="flex h-36 min-h-[9rem] flex-col justify-between bg-ruby p-6">
                <div className="flex items-start justify-between gap-3">
                  {/* Category Tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-cream/80"
                      >
                        {cat}
                        <span className="last:hidden"> / </span>
                      </span>
                    ))}
                  </div>
                  <Icon className="shrink-0 text-cream/80" size={22} />
                </div>
                <h3 className="line-clamp-2 font-display text-2xl leading-tight text-cream">
                  {project.title}
                </h3>
              </div>

              {/* External Links */}
              <div className="p-6 pb-2">
                <div className="flex flex-wrap gap-2">
                  {"repo" in project && project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border border-ruby/18 bg-white px-3 py-2 text-xs font-semibold text-ruby transition hover:border-ruby hover:bg-ruby hover:text-cream"
                    >
                      <ExternalLink size={14} />
                      View Project
                    </a>
                  ) : null}
                  {"article" in project && project.article ? (
                    <a
                      href={project.article}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border border-ruby/18 bg-white px-3 py-2 text-xs font-semibold text-ruby transition hover:border-ruby hover:bg-ruby hover:text-cream"
                    >
                      <FileText size={14} />
                      View Article
                    </a>
                  ) : null}
                </div>
              </div>

              {/* Render Image with full view */}
              {hasImage && (
                <div className="mx-6 overflow-hidden border border-ruby/10 bg-white p-1">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image as string}
                      alt={`${project.title} project image`}
                      fill
                      className="object-contain transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 pt-2">
                <p className="text-sm leading-7 text-zinc-800">{project.description}</p>
                <ul className="mt-5 space-y-2 border-l-2 border-ruby/15 pl-4">
                  {project.contributions.map((item) => (
                    <li key={item} className="text-sm leading-6 text-zinc-700">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechIcon key={tech} name={tech} compact />
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}