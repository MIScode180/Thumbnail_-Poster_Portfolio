"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({
  onEnter,
}: IntroScreenProps) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const titleRef =
    useRef<HTMLHeadingElement>(null);

  const subTitleRef =
    useRef<HTMLParagraphElement>(null);

  const buttonRef =
    useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
      }
    )

      .fromTo(
        subTitleRef.current,
        {
          autoAlpha: 0,
          y: 30,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.7"
      )

      .fromTo(
        buttonRef.current,
        {
          autoAlpha: 0,
          scale: 0.5,
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

    gsap.to(buttonRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleClick = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onEnter();
      },
    });

    tl.to(buttonRef.current, {
      autoAlpha: 0,
      y: 20,
      duration: 0.3,
    });

    tl.to(
      [titleRef.current, subTitleRef.current],
      {
        autoAlpha: 0,
        y: -50,
        stagger: 0.1,
        duration: 0.5,
      },
      "-=0.2"
    );

    tl.to(
      containerRef.current,
      {
        autoAlpha: 0,
        scale: 1.1,
        duration: 1,
        ease: "power4.inOut",
      },
      "-=0.3"
    );
  };

  return (
    <div
      ref={containerRef}
      className="
        fixed
        inset-0
        z-[999]
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          bg-white/5
          blur-3xl
          rounded-full
        "
      />

      {/* Content */}
      <div className="relative text-center px-6">
        <h1
          ref={titleRef}
          className="
            opacity-0
            text-white
            text-5xl
            sm:text-7xl
            md:text-8xl
            font-black
            tracking-[0.25em]
            uppercase
          "
        >
          Portfolio
        </h1>

        <p
          ref={subTitleRef}
          className="
            opacity-0
            text-neutral-500
            mt-6
            tracking-[0.4em]
            uppercase
            text-xs
            md:text-sm
          "
        >
          Creative Thumbnail Designer
        </p>

        <button
          ref={buttonRef}
          onClick={handleClick}
          className="
            opacity-0
            mt-20
            flex
            flex-col
            items-center
            mx-auto
            group
          "
        >
          <span
            className="
              text-white/70
              text-[10px]
              tracking-[0.4em]
              uppercase
              mb-4
            "
          >
            Enter
          </span>

          <div
            className="
              w-14
              h-14
              rounded-full
              border
              border-white/20
              flex
              items-center
              justify-center
              backdrop-blur-sm
              transition-all
              duration-300

              group-hover:border-white
              group-hover:scale-110
              text-gray-400
            "
          >
            ↓
          </div>
        </button>
      </div>
    </div>
  );
}