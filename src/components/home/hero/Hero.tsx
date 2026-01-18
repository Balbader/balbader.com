"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating shapes animation
      gsap.to(shape1Ref.current, {
        y: -30,
        x: 20,
        rotation: 15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(shape2Ref.current, {
        y: 40,
        x: -30,
        rotation: -20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(shape3Ref.current, {
        y: -20,
        x: 15,
        rotation: 10,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Text fade in
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.6,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Abstract background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large gradient circle */}
        <div
          ref={shape1Ref}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl"
          style={{ transform: "translate(-50%, -50%)" }}
        />

        {/* Medium gradient blob */}
        <div
          ref={shape2Ref}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-accent/8 via-accent/4 to-transparent blur-3xl"
          style={{ transform: "translate(50%, 50%)" }}
        />

        {/* Small accent shape */}
        <div
          ref={shape3Ref}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-to-bl from-ring/6 to-transparent blur-2xl"
          style={{ transform: "translate(50%, -50%)" }}
        />
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-7xl md:text-9xl lg:text-[12rem] font-light tracking-tighter mb-8 leading-none"
            style={{
              fontFeatureSettings: '"kern" 1, "liga" 1',
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block">BALBADER</span>
            {/* <span className="block text-5xl md:text-7xl lg:text-9xl font-extralight mt-2 opacity-60">
              .COM
            </span> */}
          </h1>

          <p
            ref={subtitleRef}
            className="text-sm md:text-base uppercase tracking-[0.3em] text-muted-foreground/70 font-light mb-16"
            style={{ letterSpacing: "0.5em" }}
          >
            AI - Full Stack Developement - System Design
          </p>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-foreground/20 to-transparent" />
      </div>
    </section>
  );
}
