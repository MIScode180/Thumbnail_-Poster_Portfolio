"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

import { thumbnails } from "@/data/Thumbnail";
import { posters } from "@/data/Poster";

interface Project {
  id: number | string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const featuredThumbnails = thumbnails.slice(0, 2);
  const featuredPosters = posters.slice(0, 2);

  const allProjects: Project[] = [...featuredThumbnails, ...featuredPosters];

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([".projects-subtitle", ".projects-title", ".project-card"], {
        opacity: 1,
        y: 0,
      });

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".projects-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      })
        .from(
          ".projects-title",
          {
            opacity: 0,
            y: 40,
            duration: 1,
          },
          "-=0.4",
        )
        .from(
          ".project-card",
          {
            opacity: 0,
            y: 60,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        min-h-screen
        bg-[#f5f1eb]
        overflow-hidden
        py-20
        px-4
        sm:px-6
        md:px-10
      "
    >
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-14">
        <p className="projects-subtitle uppercase tracking-[0.35em] text-[11px] sm:text-xs text-gray-500 mb-4 ml-4">
          Selected Work
        </p>

        <h2 className="projects-title text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] max-w-4xl">
          Thumbnails & Posters{" "}
          <span className="text-[#A47251]">that grab attention.</span>
        </h2>
      </div>

      {/* GRID */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5 sm:gap-6 lg:gap-8
        "
      >
        {allProjects.map((project: Project) => (
          <div
            key={`${project.category}-${project.id}`}
            className="
              project-card
              group
              relative
              overflow-hidden
              rounded-[1.5rem]
              bg-white/60
              backdrop-blur-xl
              border border-black/5
              shadow-xl
              hover:-translate-y-2
              transition-all duration-500
              flex flex-col
            "
          >
            {/* IMAGE */}
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="
                  object-fill
                  group-hover:scale-110
                  transition-transform duration-700 ease-out
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />

              {/* Category */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-semibold">
                {project.category}
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 sm:p-5 flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black leading-snug line-clamp-2">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                {project.description}
              </p>
              <Link href="/allprojects">
                <button
                  className="
                  mt-2
                  w-fit
                  border border-black/20
                  px-4 py-2
                  rounded-full
                  uppercase
                  tracking-[0.15em]
                  text-[10px]
                  hover:bg-black
                  hover:text-white
                  transition-all duration-300
                  cursor-pointer
                "
                >
                  View Project
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
