"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { gsap } from "gsap";

const heroHighlights = [
  "TypeScript + Node.js across the stack",
  "Scalable backend architecture",
  "Performance-tuned React frontends",
];

const focusAreas = [
  "Designing reliable APIs and data flows for growing products",
  "Translating ambiguous scopes into buildable architecture",
  "Partnering with teams to ship performant, accessible UI",
];

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.45 } });

      tl.from(".hero-pill", { y: 24, opacity: 0 })
        .from(".hero-title", { y: 32, opacity: 0 }, "-=0.3")
        .from(".hero-desc", { y: 24, opacity: 0 }, "-=0.25")
        .from(".hero-cta", { y: 20, opacity: 0 }, "-=0.2")
        .from(".hero-badge", { y: 16, opacity: 0, stagger: 0.08 }, "-=0.2")
        .from(".hero-stats-card", { y: 18, opacity: 0, stagger: 0.07 }, "-=0.2")
        .from(".hero-insight", { y: 24, opacity: 0, stagger: 0.12 }, "-=0.25")
        .from(".hero-social", { y: 12, opacity: 0 }, "-=0.3");
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden border-b border-white/10 pt-24 pb-16 md:pt-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#2E0249]/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full items-center px-6">
        <div ref={heroRef} className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-10">
            <div className="hero-pill inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Software engineer building reliable web platforms
            </div>

            <h1 className="hero-title text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Crafting resilient product surfaces where clarity, performance, and polish meet.
            </h1>

            <p className="hero-desc max-w-2xl text-base text-white/70 md:text-lg">
              Full-stack engineer from Dhaka who loves TypeScript, Node.js, and design-forward
              interfaces. I help teams turn ideas into scalable products by owning the backend
              architecture, refining the frontend, and keeping the developer experience tidy.
            </p>

            <div className="hero-cta flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                View case studies
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-primary/40 hover:text-white"
                download
              >
                Download resume
                <Download className="h-4 w-4" />
              </a>
            </div>

            <div className="hero-badges flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  {item}
                </span>
              ))}
            </div>

          </div>

          <div className="space-y-6">
            <div className="hero-insight rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-transparent p-6 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                Operator&apos;s desk
              </p>
              <p className="mt-4 text-lg text-white/80">
                Product-minded engineer who can move across architecture, DX, and delivery without
                dragging the team down in meetings.
              </p>
              <ul className="mt-6 space-y-4 text-sm text-white/70">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero-insight rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Current availability</span>
                <span>Booking Q1 · 2026</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-2 w-3/4 rounded-full bg-primary" />
              </div>
              <p className="mt-4 text-sm text-white/60">
                I embed with product teams as a fractional engineering lead or hands-on principal
                IC - whichever accelerates outcomes fastest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
