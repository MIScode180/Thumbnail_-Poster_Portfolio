"use client";

import {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";

import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(
        [
          ".contact-subtitle",
          ".contact-title",
          ".contact-text",
          ".contact-card",
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

      tl.from(".contact-subtitle", {
        opacity: 0,
        y: 20,
        duration: 0.8,
      })

        .from(
          ".contact-title",
          {
            opacity: 0,
            y: 40,
            duration: 1,
          },
          "-=0.4"
        )

        .from(
          ".contact-text",
          {
            opacity: 0,
            y: 30,
            duration: 1,
          },
          "-=0.6"
        )

        .from(
          ".contact-card",
          {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.7"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        min-h-screen
        bg-[#f5f1eb]
        overflow-hidden
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        md:px-10
        py-24
      "
    >
      {/* BACKGROUND BLUR */}
      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-[#A47251]/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          relative
          z-10
          max-w-5xl
          mx-auto
          text-center
        "
      >
        {/* SUBTITLE */}
        <p
          className="
            contact-subtitle
            uppercase
            tracking-[0.35em]
            text-[11px]
            sm:text-xs
            text-gray-500
            mb-5
          "
        >
          Contact
        </p>

        {/* TITLE */}
        <h2
          className="
            contact-title
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-black
            leading-[0.95]
            mb-8
          "
        >
          Let’s create
          <span className="text-[#A47251]">
            {" "}
            something impactful.
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            contact-text
            text-gray-700
            text-sm
            sm:text-base
            leading-relaxed
            max-w-2xl
            mx-auto
            mb-14
          "
        >
          Available for thumbnail design,
          poster projects, creative
          collaborations, and digital visual
          work. Reach out through Instagram
          or email.
        </p>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
          "
        >
          {/* INSTAGRAM CARD */}
          <a
            href="https://www.instagram.com/fkdesigner09/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              contact-card
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-black/5
              bg-white/60
              backdrop-blur-xl
              p-8
              shadow-xl
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >
            {/* HOVER GLOW */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#A47251]/10
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              "
            />

            <div className="relative z-10">
              {/* ICON */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#A47251]/10
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-6
                  group-hover:scale-110
                  transition-transform
                  duration-500
                "
              >
                <FaInstagram
                  size={30}
                  className="text-[#A47251]"
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-2xl
                  font-black
                  mb-3
                "
              >
                Instagram
              </h3>

              {/* TEXT */}
              <p
                className="
                  text-sm
                  text-gray-600
                  mb-5
                  leading-relaxed
                "
              >
                Explore more creative
                projects, thumbnails,
                posters, and connect
                directly through Instagram.
              </p>

              {/* USERNAME */}
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#A47251]
                  font-semibold
                "
              >
                @fkdesigner09
              </span>
            </div>
          </a>

          {/* EMAIL CARD */}
          <a
            href="mailto:fk5842841@email.com"
            className="
              contact-card
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-black/5
              bg-white/60
              backdrop-blur-xl
              p-8
              shadow-xl
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-500
            "
          >
            {/* HOVER GLOW */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#A47251]/10
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              "
            />

            <div className="relative z-10">
              {/* ICON */}
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-[#A47251]/10
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-6
                  group-hover:scale-110
                  transition-transform
                  duration-500
                "
              >
                <MdEmail
                  size={30}
                  className="text-[#A47251]"
                />
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-2xl
                  font-black
                  mb-3
                "
              >
                Email
              </h3>

              {/* TEXT */}
              <p
                className="
                  text-sm
                  text-gray-600
                  mb-5
                  leading-relaxed
                "
              >
                Reach out for freelance
                projects, collaborations,
                brand work, and creative
                discussions.
              </p>

              {/* EMAIL */}
              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-[#A47251]
                  font-semibold
                "
              >
                fk5842841@email.com
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}