"use client";

import React from "react";
import { Section } from "@/components/ui/Section";

const experiences = [
  {
    company: "Data Affinity Ltd.",
    role: "Software Engineer",
    period: "2025 - Present",
    location: "Dhaka",
    impact: [
      "Shipped a resilient video streaming platform with caching + observability baked in.",
      "Led a TypeScript monorepo migration simplifying deployments for 3 squads.",
    ],
    stack: ["TypeScript", "Node.js", "AWS", "Redis"],
  },
  {
    company: "Stibo DX",
    role: "Associate Software Engineer",
    period: "2024 - 2025",
    location: "Remote",
    impact: [
      "Built GraphQL extensions powering editorial automation for large newsrooms.",
      "Co-owned CI/CD pipelines, trimming average release time by 40%.",
    ],
    stack: ["NestJS", "GraphQL", "PostgreSQL"],
  },
  {
    company: "Mediasoft Data Systems Ltd.",
    role: "Junior Software Engineer",
    period: "2022 - 2023",
    location: "Dhaka",
    impact: [
      "Developed POS payment orchestration handling thousands of daily transactions.",
      "Partnered with frontend to deliver realtime dashboards backed by WebSockets.",
    ],
    stack: ["TypeScript", "React", "Socket.io"],
  },
  {
    company: "Business Automation Ltd.",
    role: "Software Engineer (Intern)",
    period: "2021",
    location: "Dhaka",
    impact: [
      "Contributed to public-sector web apps with accessibility sweeps and QA.",
      "Support engineering for deployments, monitors, and client training.",
    ],
    stack: ["React", ".NET", "SQL Server"],
  },
];

const experienceStats = [
  { label: "Years shipping", value: "3+" },
  { label: "Teams partnered", value: "4 orgs" },
  { label: "Surface area", value: "Cloud · APIs · UI" },
];

const capabilityPillars = [
  {
    title: "Architecture",
    detail: "Node.js, .NET, NestJS, pragmatic domain modeling",
  },
  {
    title: "Product UI",
    detail: "React, Next.js, performant interactions, accessibility reviews",
  },
  {
    title: "Data & realtime",
    detail: "PostgreSQL, MongoDB, Redis, Socket.io, telemetry",
  },
  {
    title: "Delivery",
    detail: "AWS, Docker, CI/CD, observability-first releases",
  },
];

export const Experience = () => {
  return (
    <Section
      id="experience"
      className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top,#07111b,#020408)] py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-1/3 top-0 h-44 w-44 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[#2E0249]/20 blur-[160px]" />
      </div>
      <div className="container relative mx-auto px-6">
        <div className="mb-12 max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Experience</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
            From newsroom tooling to high-volume platforms.
          </h2>
          <p className="mt-4 text-base text-white/65">
            I partner with product teams as the engineer who can own the backend architecture,
            mentor frontend work, and keep delivery predictable without ballooning process.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-white/3 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">Profile</p>
              <p className="mt-4 text-base text-white/70">
                Hands-on contributor who moves between API design, infra decisions, and shipping
                polished React surfaces. Strong bias for dependable systems and observability-first
                rollouts.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {experienceStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/2 p-5 text-center backdrop-blur"
                >
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/2 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">Capabilities</p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {capabilityPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-white/5 bg-white/2 p-4"
                  >
                    <p className="text-sm font-semibold text-white">{pillar.title}</p>
                    <p className="mt-2 text-sm text-white/65">{pillar.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative pl-0 sm:pl-6">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-white/10 sm:block" />
            <div className="space-y-6 sm:space-y-10">
              {experiences.map((exp, index) => (
                <article
                  key={exp.company}
                  className="relative rounded-3xl border border-white/10 bg-white/3 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white/5 sm:p-6"
                >
                  <span className="absolute -left-[33px] top-8 hidden h-5 w-5 rounded-full border border-primary/30 bg-primary/20 text-center text-xs font-semibold text-primary sm:flex sm:items-center sm:justify-center">
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/45">
                        <span>{exp.period}</span>
                        <span className="text-white/30 sm:hidden">{exp.location}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">{exp.role}</h3>
                      <p className="text-sm text-primary/80">
                        {exp.company} · <span className="hidden sm:inline">{exp.location}</span>
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-white/60">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 px-3 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-white/75">
                    {exp.impact.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
