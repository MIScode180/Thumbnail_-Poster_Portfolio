"use client";

import { useEffect, useState } from "react";

import IntroScreen from "@/components/IntroScreen";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    const visited = sessionStorage.getItem(
      "portfolio-intro"
    );

    if (visited) {
      setShowSite(true);
    }
  }, []);

  const handleEnter = () => {
    sessionStorage.setItem(
      "portfolio-intro",
      "true"
    );

    setShowSite(true);
  };

  // SHOW INTRO ONLY
  if (!showSite) {
    return (
      <IntroScreen onEnter={handleEnter} />
    );
  }

  // SHOW WEBSITE AFTER ENTER
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}