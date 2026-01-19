"use client";

import { useRef, useEffect, useCallback } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Mouse interaction handler - smooth parallax effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const normalizedX = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const normalizedY = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1

    // Subtle parallax effect - different intensities for each shape
    const intensity1 = 20; // Largest movement
    const intensity2 = 15; // Medium movement
    const intensity3 = 10; // Smallest movement

    // Animate mouse offset - this will be applied to inner divs via CSS
    if (shape1Ref.current) {
      gsap.to(shape1Ref.current, {
        "--mouse-x": `${normalizedX * intensity1}px`,
        "--mouse-y": `${normalizedY * intensity1}px`,
        duration: 1.2,
        ease: "power1.out",
      });
    }

    if (shape2Ref.current) {
      gsap.to(shape2Ref.current, {
        "--mouse-x": `${normalizedX * intensity2}px`,
        "--mouse-y": `${normalizedY * intensity2}px`,
        duration: 1.4,
        ease: "power1.out",
      });
    }

    if (shape3Ref.current) {
      gsap.to(shape3Ref.current, {
        "--mouse-x": `${normalizedX * intensity3}px`,
        "--mouse-y": `${normalizedY * intensity3}px`,
        duration: 1.6,
        ease: "power1.out",
      });
    }
  }, []);

  // Reset mouse offset when mouse leaves
  const handleMouseLeave = useCallback(() => {
    gsap.to([shape1Ref.current, shape2Ref.current, shape3Ref.current], {
      "--mouse-x": "0px",
      "--mouse-y": "0px",
      duration: 1.2,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      // Initialize CSS custom properties for mouse interaction
      gsap.set([shape1Ref.current, shape2Ref.current, shape3Ref.current], {
        "--mouse-x": "0px",
        "--mouse-y": "0px",
      });

      // Initialize transforms with GSAP for better control
      // Set initial positioning using xPercent/yPercent for centering
      // These are the outer wrapper divs that GSAP will animate
      gsap.set(shape1Ref.current, {
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set(shape2Ref.current, {
        xPercent: 50,
        yPercent: 50,
      });
      gsap.set(shape3Ref.current, {
        xPercent: 50,
        yPercent: -50,
      });

      // Floating shapes animation (base animation)
      // These animate the outer wrapper, mouse interaction animates inner divs
      gsap.to(shape1Ref.current, {
        x: 20,
        y: -30,
        rotation: 15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(shape2Ref.current, {
        x: -30,
        y: 40,
        rotation: -20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(shape3Ref.current, {
        x: 15,
        y: -20,
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

    // Add mouse event listeners
    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      ctx.revert();
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Abstract background shapes */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
        {/* Large gradient circle */}
        <div
          ref={shape1Ref}
          className="absolute top-1/4 left-1/4"
        >
          <div
            className="w-96 h-96 rounded-full bg-linear-to-br from-primary/10 via-primary/5 to-transparent blur-3xl"
            style={{
              transform: "translate(var(--mouse-x, 0px), var(--mouse-y, 0px))",
            }}
          />
        </div>

        {/* Medium gradient blob */}
        <div
          ref={shape2Ref}
          className="absolute bottom-1/3 right-1/4"
        >
          <div
            className="w-80 h-80 rounded-full bg-linear-to-tr from-accent/8 via-accent/4 to-transparent blur-3xl"
            style={{
              transform: "translate(var(--mouse-x, 0px), var(--mouse-y, 0px))",
            }}
          />
        </div>

        {/* Small accent shape */}
        <div
          ref={shape3Ref}
          className="absolute top-1/2 right-1/3"
        >
          <div
            className="w-64 h-64 rounded-full bg-linear-to-bl from-ring/6 to-transparent blur-2xl"
            style={{
              transform: "translate(var(--mouse-x, 0px), var(--mouse-y, 0px))",
            }}
          />
        </div>
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
            className="text-7xl md:text-9xl lg:text-[8rem] font-light tracking-tighter mb-8 leading-none"
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
        <div className="w-px h-16 bg-linear-to-b from-foreground/20 to-transparent" />
      </div>
    </section>
  );
}
