"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current || !logoRef.current) return;

    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });

    gsap.from(logoRef.current, {
      opacity: 0,
      letterSpacing: "1em",
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  const handleMouseEnter = () => {
    if (!logoRef.current) return;

    gsap.to(logoRef.current, {
      scale: 1.08,
      letterSpacing: "0.4em",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!logoRef.current) return;

    gsap.to(logoRef.current, {
      scale: 1,
      letterSpacing: "0.2em",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <header
      ref={navRef}
      className="
        fixed top-0 left-0 w-full z-40
        backdrop-blur-md
        bg-black/20
        border-b border-white/10
      "
    >
      <nav
        className="
          max-w-7xl mx-auto
          px-6 py-5
          flex items-center justify-between
        "
      >
        {/* Animated Logo */}
        <h1
          ref={logoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="
            text-xl
            md:text-2xl
            font-black
            uppercase
            tracking-[0.2em]
            text-black
            cursor-pointer
            text-center
            z-50
          "
        >
          FK.
          <div>designer</div>
          <div className="text-[0.4em]  text-gray-700 ">
            thumbail & Poster Desiger
          </div>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/allprojects" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="
                  text-sm uppercase tracking-[0.2em]
                  text-gray-500
                  hover:text-black
                  transition-all duration-300
                  cursor-pointer
                "
            >
              {item.name}
            </Link>
          ))}
        </ul>

        {/* CTA */}
        {/* CTA */}
<Link
  href="/contact"
  className="
    hidden md:flex
    items-center
    justify-center
    border border-[#A47251]
    px-5 py-2
    rounded-full
    text-sm uppercase tracking-[0.2em]
    hover:bg-[#D5E7B5]
    hover:text-black
    transition-all duration-300
    cursor-pointer
  "
>
  Hire Me
</Link>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            flex flex-col gap-1
            z-50
          "
        >
          <span
            className={`
              w-6 h-0.5 bg-black transition-all duration-300
              ${isOpen ? "rotate-45 translate-y-1.5" : ""}
            `}
          />

          <span
            className={`
              w-6 h-0.5 bg-black transition-all duration-300
              ${isOpen ? "opacity-0" : ""}
            `}
          />

          <span
            className={`
              w-6 h-0.5 bg-black transition-all duration-300
              ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}
            `}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden
            fixed top-0 left-0
            w-full h-screen
            bg-white
            flex flex-col items-center justify-center
            gap-6
            transition-all duration-500

            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
        >
         {[
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
].map((item) => (
  <Link
    key={item.name}
    href={item.path}
    onClick={() => setIsOpen(false)}
    className="
      text-xl
      uppercase
      tracking-[0.2em]
      text-black
      cursor-pointer
    "
  >
    {item.name}
  </Link>
))}

     <Link
  href="/contact"
  className="
    hidden md:block
    border border-[#A47251]
    px-5 py-2
    rounded-full
    text-sm uppercase tracking-[0.2em]
    hover:bg-[#D5E7B5]
    hover:text-black
    transition-all duration-300
    cursor-pointer
  "
>
  Hire Me
</Link>

        </div>
      </nav>
    </header>
  );
}
