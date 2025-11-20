"use client";

import React from "react";

const experiences = [
  {
    company: "Data Affinity Ltd.",
    role: "Software Engineer",
    period: "2025 - Present",
    location: "Dhaka",
    impact: [
      "Shipped a resilient video streaming platform with caching + observability baked in.",
      "Led a TypeScript monorepo migration that simplified deployments for 3 squads.",
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
      "Partnered with frontend to deliver real-time event dashboards backed by WebSockets.",
    ],
    stack: ["TypeScript", "React", "Socket.io"],
  },
  {
    company: "Business Automation Ltd.",
    role: "Software Engineer (Intern)",
    period: "2021",
    location: "Dhaka",
    impact: [
      "Contributed to public-sector web apps, focusing on accessibility and QA.",
      "Support engineering for deployments, monitors, and client training.",
    ],
    stack: ["React", ".NET", "SQL Server"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="border-b border-white/10 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-white/40">Experience</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              From backend systems to newsroom tooling.
            </h2>
          </div>

          <div className="space-y-8 md:space-y-10">
            {experiences.map((exp) => (
              <article
                key={exp.company}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-primary/40 hover:bg-white/[0.05]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-white/45">{exp.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-primary/80">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-white/60">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-3 py-1 uppercase tracking-[0.2em]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-white/75">
                  {exp.impact.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
