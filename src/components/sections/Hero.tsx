"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { gsap } from "gsap";

const heroHighlights = [
  "TypeScript + Node.js across the stack",
  "Scalable backend architecture",
  "Performance-tuned React frontends",
];

const focusAreas = [
  "Designing reliable APIs and data flows for growing products",
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
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 pt-24 pb-16 md:pt-28 lg:min-h-[calc(100vh-80px)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#2E0249]/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full items-center px-6">
        <div ref={heroRef} className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <div className="hero-pill inline-flex max-w-sm items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white/70 sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Engineering resilient systems
            </div>

            <h1 className="hero-title text-4xl font-semibold leading-tight tracking-tight text-white sm:text-[2.7rem] md:text-5xl lg:text-6xl">
              Turning complex ideas into fast, reliable, beautifully engineered experiences.
            </h1>

            <p className="hero-desc max-w-2xl text-base text-white/70 sm:text-lg">
              Dhaka-based full-stack engineer focused on TypeScript systems, product-minded DX, and
              frontends that stay performant even under messy requirements.
            </p>

            <div className="hero-cta flex flex-wrap gap-2">
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

            <div className="hero-badges hidden flex-wrap gap-3 md:flex">
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

          <div className="flex flex-col gap-4">
            <div className="hero-insight rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/0 to-transparent p-5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                Operator&apos;s desk
              </p>
              <p className="mt-4 text-lg text-white/80">
                Product-minded engineer who moves across architecture, DX, and delivery without
                dragging teams down in meetings.
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

            <div className="hero-insight hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl md:block lg:p-6">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Current availability</span>
                <span>Booking Q1 · 2026</span>
              </div>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-2 w-3/4 rounded-full bg-primary" />
              </div>
              <p className="mt-4 text-sm text-white/60">
                I embed with product teams as a fractional engineering lead or hands-on principal IC
                - whichever accelerates outcomes fastest.
              </p>
            </div>

            <div className="hero-insight hidden rounded-3xl border border-white/10 bg-linear-to-r from-primary/10 via-transparent to-white/5 p-5 backdrop-blur-xl lg:flex">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                  Recent wins
                </p>
                <p className="text-sm text-white/70">
                  Streaming edge cache, unified POS API, full-stack marketplace launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
