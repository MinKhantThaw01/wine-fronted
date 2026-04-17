"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroImage from "../../../public/images/HeroSection.png";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const bottleRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // intro animation
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.15,
      });

      gsap.from(".hero-desc", {
        y: 40,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-btn", {
        y: 30,
        opacity: 0,
        delay: 0.8,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(bottleRef.current, {
        scale: 0.6,
        rotate: -15,
        opacity: 0,
        duration: 1.8,
        ease: "elastic.out(1,0.6)",
      });

      gsap.from(glowRef.current, {
        scale: 0,
        opacity: 0,
        duration: 2,
        ease: "power4.out",
      });

      // floating bottle
      gsap.to(bottleRef.current, {
        y: -18,
        rotate: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // glow pulse
      gsap.to(glowRef.current, {
        scale: 1.15,
        opacity: 0.7,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (window.innerWidth < 768) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    gsap.to(bottleRef.current, {
      rotateY: x,
      rotateX: -y,
      duration: 1,
      ease: "power3.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });

    gsap.to(textRef.current, {
      x: x * 0.5,
      y: y * 0.5,
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#120b0a] via-[#2d1210] to-[#090909] text-white"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,80,0,0.18),transparent_30%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* left text */}
        <div ref={textRef}>
          <p className="hero-title mb-4 text-sm uppercase tracking-[0.4em] text-orange-300">
            Premium Collection
          </p>

          <h1 className="hero-title text-5xl font-bold leading-tight md:text-7xl">
            Taste The
          </h1>

          <h1 className="hero-title text-5xl font-bold leading-tight text-orange-400 md:text-7xl">
            Luxury Wine
          </h1>

          <p className="hero-desc mt-6 max-w-lg text-lg text-white/70">
            Discover handcrafted bottles from the world’s finest vineyards.
            Elegance in every pour.
          </p>

          <div className="hero-btn mt-8 flex gap-4">
            <button className="rounded-full bg-orange-500 px-7 py-3 font-semibold transition hover:scale-105">
              Shop Now
            </button>

            <button className="rounded-full border border-white/20 px-7 py-3 backdrop-blur-md transition hover:bg-white/10">
              Explore
            </button>
          </div>
        </div>

        {/* right bottle */}
        <div className="relative flex items-center justify-center">
          {/* glow */}
          <div
            ref={glowRef}
            className="absolute h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-3xl"
          />

          {/* bottle */}
          <div ref={bottleRef} className="relative">
            <Image
              src={HeroImage} // put your PNG in /public/wine.png
              alt="Wine Bottle"
              width={340}
              height={700}
              className="drop-shadow-[0_40px_60px_rgba(0,0,0,0.45)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}