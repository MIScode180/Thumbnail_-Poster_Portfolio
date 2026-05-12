"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (!heroRef.current) return;

  const ctx = gsap.context(() => {
    gsap.from(".hero-card", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.12,
      ease: "power4.out",
      clearProps: "all",
    });

    gsap.to(".orb", {
      y: -20,
      x: 10,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".float-image", {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, heroRef);

  return () => ctx.revert();
}, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f0eb] px-4 sm:px-6 lg:px-10 py-24">
      {/* Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-[#e8b9b2]/30 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={heroRef}
        className="
          relative
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-5
          items-start
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            hero-card
            lg:col-span-7
            bg-[#efd8d3]
            rounded-[40px]
            p-8 sm:p-10 lg:p-14
            min-h-155
            relative
            overflow-hidden
            flex
            flex-col
            justify-between
          "
        >
          {/* Orb */}
          <div
            className="
              orb
              absolute
              top-10
              right-10
              w-40
              h-40
              rounded-full
              border
              border-[#d7a29a]
              opacity-60
            "
          />

          {/* Small Tag */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-px bg-black/30" />

            <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
              Thumbnail Designer
            </p>
          </div>

          {/* Main Heading */}
          <div className="space-y-8">
            <h1
              className="
                text-[52px]
                sm:text-[72px]
                lg:text-[96px]
                font-black
                leading-[0.88]
                tracking-tighter
                text-black
              "
            >
              Design
              <br />
              That
              <br />
              Wins Clicks.
            </h1>
            <div className="flex items-center gap-5 mb-10">
            <div className="w-10 h-px bg-black/30">
              <p className="uppercase tracking-[0.35em] text-[11px] text-black/45">
              Posters Designer
            </p>

            </div>

            </div>

            <p
              className="
                max-w-xl
                text-base
                sm:text-lg
                leading-relaxed
                text-black/60
              "
            >
              I create cinematic thumbnails & posters and visual systems
              that instantly grab attention and increase viewer
              curiosity for creators and brands.
            </p>
          </div>

          {/* Bottom */}
          <div className="flex flex-wrap items-center gap-4 pt-10">
            <Link href="/allprojects" >
                <button
              className="
                bg-black
                text-white
                px-7
                py-4
                rounded-full
                text-sm
                uppercase
                tracking-[0.2em]
                hover:scale-105
                transition-all
                duration-300
                cursor-pointer
              "
            >
              View Work
            </button>
            </Link>

            <p className="text-sm text-black/40 uppercase tracking-[0.25em]">
              Available Worldwide
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
       <div
  className="
    hero-card
    lg:col-span-4
    bg-[#e7d4cc]
    rounded-[40px]
    overflow-hidden
    min-h-130
    lg:mt-10
    relative
    group
  "
>
  {/* Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-linear-to-t
      from-black/60
      via-black/10
      to-transparent
      z-10
      pointer-events-none
    "
  />

  <Image
    src="/poster/poster6.png"
    fill
    alt="Designer"
    className="
      float-image
      object-cover
      object-center
      transition-transform
      duration-1500
      ease-out
      will-change-transform
      group-hover:scale-120
    "
  />
</div>

        {/* QUOTE */}
        <div
          className="
            hero-card
            lg:col-span-5
            bg-[#f1e2dd]
            rounded-[40px]
            p-8 sm:p-10
            relative
            overflow-hidden
          "
        >
          {/* Huge Quote */}
          <div
            className="
              absolute
              -top-10
              left-5
              text-[180px]
              font-black
              text-black/4
              leading-none
            "
          >
            ”
          </div>

          <div className="relative z-10">
            <p
              className="
                text-2xl
                sm:text-3xl
                leading-[1.4]
                tracking-tight
                text-black/75
              "
            >
              Good thumbnails don’t feel designed.
              <br />
              They feel impossible to ignore.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <div className="w-8 h-px bg-black/20" />

              <span className="uppercase text-[11px] tracking-[0.35em] text-black/35">
                Creative Philosophy
              </span>
            </div>
          </div>
        </div>

        {/* SECOND IMAGE */}
        <div
          className="
            hero-card
            lg:col-span-7
            bg-[#ead6d1]
            rounded-[40px]
            overflow-hidden
            relative
            min-h-80
            group
          "
        >
          <Image
            src="/thumb/thumb7.png"
            fill
            alt="Thumbnail Showcase"
            className="
              object-fill
              group-hover:scale-[1.04]
              transition-all
              duration-700
            "
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

          <div className="absolute bottom-6 left-6 z-10 text-white">
            <p className="uppercase text-xs tracking-[0.35em] opacity-70 mb-2">
              Featured Project
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
              Cinematic
              <br />
              Youtube Visuals
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}