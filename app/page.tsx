"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import ScrollCanvas from "../components/ScrollCanvas";
import Experience from "../components/Experience";
import SpecsGrid from "../components/SpecsGrid";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-bugatti-dark min-h-screen text-white relative">
      <Navbar />

      {/* 
        Scroll Container: 600vh height to allow sufficient scroll length for 240 frames.
        The content inside is sticky.
      */}
      <section ref={containerRef} className="relative h-[600vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <ScrollCanvas scrollYProgress={scrollYProgress} />
          <Experience scrollYProgress={scrollYProgress} />
        </div>
      </section>

      {/* Post-scroll Content */}
      <div className="relative z-10 bg-bugatti-dark">
        <SpecsGrid />
        <Features />
        <Footer />
      </div>
    </main>
  );
}
