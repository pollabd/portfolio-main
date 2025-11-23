'use client';

import React, { useEffect, useRef } from 'react';
import { MapPin, Briefcase, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { Section } from '@/components/ui/Section';

const focusList = [
  'Designing robust backend services with clean domain boundaries',
  'Translating product goals into scalable TypeScript + React builds',
  'Improving developer experience with better tooling & observability',
];

const companies = [
  { name: 'Data Affinity Ltd.', href: 'https://dataaffinity.com' },
  { name: 'Stibo DX', href: 'https://www.stibodx.com' },
  { name: 'Mediasoft Data Systems Ltd.', href: 'https://mediasoftbd.com' },
  { name: 'Business Automation Ltd.', href: 'https://bal.com.bd' },
];

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!aboutRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.about-intro', { y: 24, opacity: 0, duration: 0.6, ease: 'power2.out' });
      gsap.from('.about-card', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        delay: 0.1,
      });
      gsap.from('.about-focus li', {
        x: -12,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.08,
        delay: 0.2,
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      id="about"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#050f17]/90 to-[#03080d] py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-[#2E0249]/15 blur-[140px]" />
      </div>
      <div ref={aboutRef} className="container relative mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="about-intro space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-white/50">About</p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Hey, I&apos;m Pollab—building dependable digital experiences from Dhaka.
            </h2>
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              For 3+ years I&apos;ve owned backend architecture and polished web interfaces for
              teams across Bangladesh and beyond. I translate hazy requirements into stable
              TypeScript services, API layers, and frontends that still feel fast.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                What I&apos;m focused on
              </p>
              <ul className="about-focus mt-4 space-y-3 text-sm text-white/70">
                {focusList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="about-card flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Location</p>
                <p className="text-lg font-semibold text-white">Dhaka, Bangladesh</p>
              </div>
            </div>
            <div className="about-card flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Experience</p>
                <p className="text-lg font-semibold text-white">3+ years building software</p>
                <p className="text-sm text-white/60">Backend-heavy roles with product teams</p>
              </div>
            </div>
            <div className="about-card flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-4">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">Availability</p>
                <p className="text-lg font-semibold text-primary">Open to collaborating</p>
                <p className="text-sm text-white/60">Remote-friendly, async-first teams welcomed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Previously</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {companies.map((company) => (
              <a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 text-sm font-medium text-white/60 transition hover:border-primary/30 hover:text-white"
              >
                {company.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
