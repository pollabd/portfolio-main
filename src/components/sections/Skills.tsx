'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Magnetic } from '@/components/ui/Magnetic';

type SkillGroup = {
  title: string;
  highlight: string;
  skills: { name: string; level: number }[];
};

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend & Product Surface',
    highlight: 'React, Next.js, Tailwind CSS',
    skills: [
      { name: 'React / Next.js', level: 92 },
      { name: 'Design systems & UI polish', level: 86 },
      { name: 'Accessibility & performance', level: 80 },
    ],
  },
  {
    title: 'Backend & Services',
    highlight: 'TypeScript, Node.js, NestJS',
    skills: [
      { name: 'API + service architecture', level: 90 },
      { name: 'Databases & caching', level: 84 },
      { name: 'Testing & CI', level: 78 },
    ],
  },
  {
    title: 'Cloud & Ops',
    highlight: 'AWS, Docker, Terraform-lite',
    skills: [
      { name: 'AWS (Lambda, ECS, S3)', level: 75 },
      { name: 'Containerization & CI/CD', level: 82 },
      { name: 'Monitoring & telemetry', level: 70 },
    ],
  },
];

const toolbelt = ['TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'Docker', 'GitHub Actions', 'Jest', 'Storybook'];

export const Skills = () => {
  return (
    <Section id="skills">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Tooling for dependable delivery.</h2>
          <p className="mt-4 text-white/60">
            I move comfortably between frontend polish and backend architecture, pairing TypeScript-first workflows with pragmatic DevOps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{group.title}</p>
              <p className="mt-2 text-sm font-semibold text-white">{group.highlight}</p>
              <div className="mt-6 space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm text-white/70">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/5">
                      <div className="h-2 rounded-full bg-primary" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Everyday toolbelt</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {toolbelt.map((tool) => (
              <Magnetic key={tool}>
                <span className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-primary/40 hover:text-white">
                  {tool}
                </span>
              </Magnetic>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
