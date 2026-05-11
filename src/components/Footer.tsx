"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";

import {
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Prevent blank screen on refresh
      gsap.set(
        [
          ".footer-subtitle",
          ".footer-title",
          ".footer-text",
          ".footer-links",
          ".footer-bottom",
        ],
        {
          opacity: 1,
          y: 0,
        }
      );

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.from(".footer-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      })

        .from(
          ".footer-title",
          {
            opacity: 0,
            y: 40,
            duration: 1,
          },
          "-=0.4"
        )

        .from(
          ".footer-text",
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.6"
        )

        .from(
          ".footer-links",
          {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.7"
        )

        .from(
          ".footer-bottom",
          {
            opacity: 0,
            y: 20,
            duration: 1,
          },
          "-=0.8"
        );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="
        relative
        overflow-hidden
        bg-black
        text-white
        px-4
        sm:px-6
        md:px-10
        pt-24
        pb-10
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-[#A47251]/20
          blur-[140px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
        "
      >
        {/* Top Content */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-14
            border-b
            border-white/10
            pb-14
          "
        >
          {/* Left */}
          <div className="max-w-2xl">
            {/* Logo */}
            <div
              className="
                footer-subtitle
                mb-6
              "
            >
              <h1
                className="
                  text-2xl
                  md:text-3xl
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-white
                  leading-none
                "
              >
                FK.
              </h1>

              <div
                className="
                  text-base
                  md:text-lg
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white/90
                  mt-1
                "
              >
                designer
              </div>

              <div
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-gray-500
                  mt-2
                "
              >
                Thumbnail & Poster Designer
              </div>
            </div>

            {/* Heading */}
            <h2
              className="
                footer-title
                text-4xl
                sm:text-5xl
                md:text-6xl
                font-black
                leading-[0.95]
                mb-6
              "
            >
              Designing visuals
              <span className="text-[#A47251]">
                {" "}
                that stand out.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                footer-text
                text-gray-400
                text-sm
                sm:text-base
                leading-relaxed
                max-w-xl
              "
            >
              Thumbnail and poster designer focused on
              cinematic visuals, modern layouts, and
              attention-grabbing creative design.
            </p>
          </div>

          {/* Right Links */}
          <div
            className="
              flex
              flex-col
              gap-5
              justify-center
            "
          >
            {/* Instagram */}
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="
                footer-links
                group
                flex
                items-center
                gap-4

                text-gray-300
                hover:text-white

                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  group-hover:bg-[#A47251]
                  transition-all
                  duration-300
                "
              >
                <FaInstagram size={20} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-gray-500
                    mb-1
                  "
                >
                  Instagram
                </p>

                <h3 className="font-semibold">
                  @fkdesigner09
                </h3>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:your@email.com"
              className="
                footer-links
                group
                flex
                items-center
                gap-4

                text-gray-300
                hover:text-white

                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  group-hover:bg-[#A47251]
                  transition-all
                  duration-300
                "
              >
                <MdEmail size={20} />
              </div>

              <div>
                <p
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-gray-500
                    mb-1
                  "
                >
                  Email
                </p>

                <h3 className="font-semibold">
                  FK5842841@EMAIL.COM
                </h3>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            footer-bottom
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-6
            pt-8
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-gray-500
            "
          >
            © 2026 FK. All Rights Reserved.
          </p>

          {/* Scroll To Top */}
          <button
            onClick={scrollToTop}
            className="
              group
              w-14
              h-14
              rounded-full

              bg-white/5
              border
              border-white/10

              flex
              items-center
              justify-center

              hover:bg-[#A47251]
              hover:border-[#A47251]

              transition-all
              duration-500
              cursor-pointer
            "
          >
            <FaArrowUp
              size={18}
              className="
                group-hover:-translate-y-1
                transition-transform
                duration-300
              "
            />
          </button>
        </div>
      </div>
    </footer>
  );
}