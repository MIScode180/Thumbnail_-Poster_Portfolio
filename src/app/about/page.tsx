"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function AboutPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".about-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      })

        .from(
          ".about-title",
          {
            opacity: 0,
            y: 50,
            duration: 1,
          },
          "-=0.4"
        )

        .from(
          ".about-text",
          {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.6"
        )

        .from(
          ".about-card",
          {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.7"
        )

        .from(
          ".about-image",
          {
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
          },
          "-=1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        w-full
        bg-[#f5f1eb]
        py-24
        px-4
        sm:px-6
        md:px-10
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-14
          items-center
        "
      >
        {/* Left Content */}
        <div>
          <p
            className="
              about-subtitle
              uppercase
              tracking-[0.35em]
              text-[19px]
              sm:text-xs
              text-gray-500
              mb-4
              ml-4
            "
          >
            About Me
          </p>

          <h2
            className="
              about-title
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              leading-[0.95]
              mb-8
              max-w-2xl
            "
          >
            Creating visuals
            <span className="text-[#A47251]">
              {" "}
              designed to capture attention.
            </span>
          </h2>

          <div className="space-y-6">
            <p
              className="
                about-text
                text-gray-700
                text-sm
                sm:text-base
                leading-relaxed
                max-w-xl
              "
            >
              I specialize in thumbnail and poster design
              focused on modern visual storytelling,
              cinematic composition, and high-engagement
              creative content.
            </p>

            <p
              className="
                about-text
                text-gray-700
                text-sm
                sm:text-base
                leading-relaxed
                max-w-xl
              "
            >
              My work combines bold typography, strong color
              grading, and attention-focused layouts to
              create impactful visuals for creators, brands,
              and digital campaigns.
            </p>

            <p
              className="
                about-text
                text-gray-700
                text-sm
                sm:text-base
                leading-relaxed
                max-w-xl
              "
            >
              I continuously explore new creative techniques
              and design trends to build visuals that feel
              modern, dynamic, and visually memorable.
            </p>
          </div>

          {/* Stats */}
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              gap-5
              mt-10
            "
          >
            {/* Card */}
            <div
              className="
                about-card
                bg-white/60
                border border-black/5
                rounded-3xl
                p-5
                backdrop-blur-xl
                shadow-lg
              "
            >
              <h3 className="text-3xl font-black">
                15+
              </h3>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-gray-500
                  mt-2
                "
              >
                Creative Projects
              </p>
            </div>

            {/* Card */}
            <div
              className="
                about-card
                bg-white/60
                border border-black/5
                rounded-3xl
                p-5
                backdrop-blur-xl
                shadow-lg
              "
            >
              <h3 className="text-3xl font-black">
                Creative
              </h3>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-gray-500
                  mt-2
                "
              >
                Design Approach
              </p>
            </div>

            {/* Card */}
            <div
              className="
                about-card
                bg-white/60
                border border-black/5
                rounded-3xl
                p-5
                backdrop-blur-xl
                shadow-lg
              "
            >
              <h3 className="text-3xl font-black">
                Modern
              </h3>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-gray-500
                  mt-2
                "
              >
                Visual Style
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            about-image
            relative
            w-full
            h-[420px]
            sm:h-[500px]
            md:h-[580px]
            rounded-[2rem]
            overflow-hidden
            shadow-2xl
          "
        >
          <Image
            src="/poster/poster4.png"
            alt="Designer Workspace"
            fill
            priority
            className="
              object-contain
              hover:scale-105
              transition-transform
              duration-700
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-linear-to-t
              from-black/60
              via-black/10
              to-transparent
            "
          />

          {/* Floating Badge */}
          {/* <div
            className="
              absolute bottom-6 left-6
              bg-white/80
              backdrop-blur-xl
              rounded-2xl
              px-5 py-4
              border border-black/5
              shadow-xl
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-gray-500
                mb-1
              "
            >
              Specialization
            </p>

            <h3 className="font-black text-lg">
              Thumbnail & Poster Design
            </h3>
          </div> */}
        </div>
      </div>
    </section>
  );
}