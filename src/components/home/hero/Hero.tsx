"use client";

import { useRef, useEffect, useCallback } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const shape1WrapperRef = useRef<HTMLDivElement>(null);
  const shape2WrapperRef = useRef<HTMLDivElement>(null);
  const shape3WrapperRef = useRef<HTMLDivElement>(null);
  const shape1InnerRef = useRef<HTMLDivElement>(null);
  const shape2InnerRef = useRef<HTMLDivElement>(null);
  const shape3InnerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Mouse interaction handler - smooth parallax effect + dot trail
  const handleMouseMove = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();
    const normalizedX = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const normalizedY = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1

    // More visible parallax effect - different intensities for each shape
    const intensity1 = 40; // Largest movement
    const intensity2 = 30; // Medium movement
    const intensity3 = 20; // Smallest movement

    // Directly animate the inner divs with GSAP for reliable mouse interaction
    if (shape1InnerRef.current) {
      gsap.to(shape1InnerRef.current, {
        x: normalizedX * intensity1,
        y: normalizedY * intensity1,
        duration: 0.8,
        ease: "power1.out",
        overwrite: true,
      });
    }

    if (shape2InnerRef.current) {
      gsap.to(shape2InnerRef.current, {
        x: normalizedX * intensity2,
        y: normalizedY * intensity2,
        duration: 1,
        ease: "power1.out",
        overwrite: true,
      });
    }

    if (shape3InnerRef.current) {
      gsap.to(shape3InnerRef.current, {
        x: normalizedX * intensity3,
        y: normalizedY * intensity3,
        duration: 1.2,
        ease: "power1.out",
        overwrite: true,
      });
    }

    // Spawn small multicolored dot at cursor position
    if (backgroundRef.current) {
      const dot = document.createElement("div");

      // Map mouse position within hero to background container
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const colors = [
        "bg-primary",
        "bg-accent",
        "bg-emerald-400",
        "bg-sky-400",
        "bg-fuchsia-400",
      ];
      const colorClass = colors[Math.floor(Math.random() * colors.length)];

      dot.className = [
        "pointer-events-none",
        "absolute",
        "rounded-full",
        "mix-blend-screen",
        "opacity-80",
        "shadow-lg",
        "shadow-primary/40",
        colorClass,
      ].join(" ");

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;
      dot.style.width = "6px";
      dot.style.height = "6px";
      dot.style.transform = "translate(-50%, -50%)";

      backgroundRef.current.appendChild(dot);

      // Animate dot and remove it when done
      gsap.fromTo(
        dot,
        { opacity: 0.9, scale: 0.6 },
        {
          opacity: 0,
          scale: 1.8,
          duration: 0.9,
          ease: "power2.out",
          onComplete: () => {
            dot.remove();
          },
        }
      );
    }
  }, []);

  // Reset mouse offset when mouse leaves
  const handleMouseLeave = useCallback(() => {
    gsap.to([shape1InnerRef.current, shape2InnerRef.current, shape3InnerRef.current], {
      x: 0,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      overwrite: true,
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize inner divs (mouse interaction targets)
      gsap.set([shape1InnerRef.current, shape2InnerRef.current, shape3InnerRef.current], {
        x: 0,
        y: 0,
      });

      // Initialize transforms with GSAP for better control
      // Set initial positioning using xPercent/yPercent for centering
      // These are the outer wrapper divs that GSAP will animate
      gsap.set(shape1WrapperRef.current, {
        xPercent: -50,
        yPercent: -50,
      });
      gsap.set(shape2WrapperRef.current, {
        xPercent: 50,
        yPercent: 50,
      });
      gsap.set(shape3WrapperRef.current, {
        xPercent: 50,
        yPercent: -50,
      });

      // Floating shapes animation (base animation)
      // These animate the outer wrapper, mouse interaction animates inner divs
      gsap.to(shape1WrapperRef.current, {
        x: 20,
        y: -30,
        rotation: 15,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(shape2WrapperRef.current, {
        x: -30,
        y: 40,
        rotation: -20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(shape3WrapperRef.current, {
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

    return () => {
      ctx.revert();
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Abstract background shapes */}
      <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
        {/* Large gradient circle */}
        <div
          ref={shape1WrapperRef}
          className="absolute top-1/4 left-1/4"
        >
          <div
            ref={shape1InnerRef}
            className="w-96 h-96 rounded-full bg-linear-to-br from-primary/10 via-primary/5 to-transparent blur-3xl"
          />
        </div>

        {/* Medium gradient blob */}
        <div
          ref={shape2WrapperRef}
          className="absolute bottom-1/3 right-1/4"
        >
          <div
            ref={shape2InnerRef}
            className="w-80 h-80 rounded-full bg-linear-to-tr from-accent/8 via-accent/4 to-transparent blur-3xl"
          />
        </div>

        {/* Small accent shape */}
        <div
          ref={shape3WrapperRef}
          className="absolute top-1/2 right-1/3"
        >
          <div
            ref={shape3InnerRef}
            className="w-64 h-64 rounded-full bg-linear-to-bl from-ring/6 to-transparent blur-2xl"
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
