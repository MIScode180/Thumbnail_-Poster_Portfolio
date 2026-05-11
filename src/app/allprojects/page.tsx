"use client";

import {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import Image from "next/image";

import { thumbnails } from "@/data/Thumbnail";
import { posters } from "@/data/Poster";

export default function AllProjectsPage() {
  const [activeTab, setActiveTab] = useState<"thumbnails" | "posters">("thumbnails");

  const [selectedImage, setSelectedImage] = useState<null | {
    image: string;
    title: string;
    description?: string;
  }>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const activeData = useMemo(() => {
    return activeTab === "thumbnails" ? thumbnails : posters;
  }, [activeTab]);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!gridRef.current) return;

    gsap.fromTo(
      ".project-card",
      {
        opacity: 0,
        y: 40,
        scale: 0.97,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.06,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, [activeTab]);

  return (
    <>
      <section
        ref={sectionRef}
        className="min-h-screen bg-[#f6f2ec] px-4 sm:px-6 lg:px-10 py-24"
      >
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
            <div className="max-w-4xl">
              <p className="fade-up uppercase tracking-[0.35em] text-xs sm:text-sm text-[#A47251] mb-5 font-semibold">
                Creative Visual Showcase
              </p>

              <h1 className="fade-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-[-0.04em] text-black">
                Selected
                <span className="text-[#A47251]"> creative works.</span>
              </h1>

              <p className="fade-up mt-6 text-black/60 text-base sm:text-lg leading-relaxed max-w-2xl">
                A collection of cinematic thumbnails and modern poster designs crafted
                with storytelling, composition, and strong visual identity.
              </p>
            </div>

            {/* TOGGLE */}
            <div className="fade-up flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-black/5 rounded-full p-2 shadow-[0_10px_40px_rgba(0,0,0,0.06)] w-fit">
              <button
                onClick={() => setActiveTab("thumbnails")}
                className={`px-7 py-3 rounded-full text-sm font-semibold transition-all duration-500 cursor-pointer ${
                  activeTab === "thumbnails"
                    ? "bg-black text-white shadow-xl"
                    : "text-black/70 hover:bg-black/5"
                }`}
              >
                Thumbnails
              </button>

              <button
                onClick={() => setActiveTab("posters")}
                className={`px-7 py-3 rounded-full text-sm font-semibold transition-all duration-500 cursor-pointer ${
                  activeTab === "posters"
                    ? "bg-black text-white shadow-xl"
                    : "text-black/70 hover:bg-black/5"
                }`}
              >
                Posters
              </button>
            </div>
          </div>

          {/* GRID */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {activeData.map((item, index) => (
              <div
                key={`${activeTab}-${index}`}
                className="project-card group bg-white rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
              >
                {/* IMAGE CONTAINER */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    bg-[#ebe8e2]
                    ${
                      activeTab === "thumbnails"
                        ? "aspect-video"
                        : "aspect-[2/3] sm:h-[550px]"
                    }
                  `}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />

                  {/* LIGHT HOVER OVERLAY */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-500" />

                  {/* VIEW BUTTON */}
                  <button
                    onClick={() =>
                      setSelectedImage({
                        image: item.image,
                        title: item.title,
                        description: item.description,
                      })
                    }
                    className="absolute bottom-5 right-5 w-14 h-14 rounded-full bg-white text-black text-xl font-bold shadow-xl flex items-center justify-center transition-all duration-500 hover:scale-110 cursor-pointer z-20"
                  >
                    ↗
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <p className="uppercase tracking-[0.25em] text-[11px] text-[#A47251] font-semibold mb-3">
                    {activeTab === "thumbnails" ? "Thumbnail Design" : "Poster Design"}
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-black leading-tight text-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-black/60 text-[15px] leading-relaxed">
                    {item.description ||
                      "Modern visual artwork designed with cinematic storytelling and balanced composition."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 border border-white/10 text-white text-2xl backdrop-blur-xl hover:bg-white/20 transition-all duration-300 cursor-pointer z-50 flex items-center justify-center"
          >
            ✕
          </button>

          {/* IMAGE WRAPPER */}
          <div 
            className="relative w-full h-full max-w-6xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              fill
              unoptimized
              priority
              className="object-contain select-none"
            />
          </div>
        </div>
      )}
    </>
  );
}