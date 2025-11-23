'use client';

import React, { useMemo, useState } from 'react';
import { Magnetic } from '@/components/ui/Magnetic';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Section } from '@/components/ui/Section';

type Project = {
  title: string;
  focus: string;
  summary: string;
  result: string;
  image: string;
  tech: string[];
  wins: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
};

const projects: Project[] = [
  {
    title: 'Video streaming platform',
    focus: 'Platform',
    summary: 'Architected a multi-region streaming backend with resilient caching layers.',
    result: 'Served thousands of concurrent viewers while holding live events under 2s latency.',
    image: '/video-streaming.png',
    tech: ['TypeScript', 'Node.js', 'AWS', 'Redis'],
    wins: [
      'Edge caching trimmed bandwidth spend by 28%',
      'Structured observability enabled proactive incident response',
    ],
    links: { demo: 'https://github.com/pollabd' },
  },
  {
    title: 'POS payment system',
    focus: 'Automation',
    summary: 'Designed a unified payments API for high-volume retail partners.',
    result: 'Automated reconciliation and shrank manual ops hours each week.',
    image: '/pos-payment.png',
    tech: ['TypeScript', 'PostgreSQL', 'Docker'],
    wins: [
      'Tokenized card flows + fraud checks baked into the pipeline',
      'Workers keep payouts and reporting in sync',
    ],
    links: { repo: 'https://github.com/pollabd' },
  },
  {
    title: 'Vendor marketplace',
    focus: 'Commerce',
    summary: 'Full-stack build of a multi-vendor marketplace with moderation tools.',
    result: 'Admins onboard sellers in minutes with automated checks.',
    image: '/marketplace.png',
    tech: ['Next.js', 'MongoDB', 'Tailwind CSS'],
    wins: [
      'Dynamic storefront generator with CMS-like controls',
      'Search + filtering backed by indexed collections',
    ],
  },
  {
    title: 'Event management suite',
    focus: 'Operations',
    summary: 'Realtime dashboards, check-in, and messaging for large conferences.',
    result: 'Organizers managed 10k+ attendee logistics without leaving the app.',
    image: '/event-management.png',
    tech: ['React', 'NestJS', 'Socket.io'],
    wins: [
      'Live operations view with presence indicators',
      'Role-based tooling for sponsors, staff, and vendors',
    ],
  },
];

const filters = ['All', ...Array.from(new Set(projects.map((project) => project.focus)))];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.focus === activeFilter);
  }, [activeFilter]);

  const [featuredProject, ...otherProjects] = filteredProjects;

  return (
    <Section
      id="projects"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#03080d] via-[#040d12] to-[#020406] py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-x-0 top-10 h-40 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[#2E0249]/20 blur-[160px]" />
      </div>
      <div className="container relative mx-auto px-6">
        <div className="mb-12 max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Selected work</p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.9rem]">
            Systems, tools, and interfaces that made real teams faster.
          </h2>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeFilter === filter
                    ? 'border-primary/50 bg-primary/20 text-white'
                    : 'border-white/10 text-white/60 hover:border-primary/30 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {featuredProject && (
          <div className="grid gap-6 lg:grid-cols-3">
            <Magnetic>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/5 via-white/0 to-transparent p-8 lg:col-span-2">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)] opacity-60" />
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/60">
                    <span className="rounded-full border border-white/20 px-3 py-1">{featuredProject.focus}</span>
                    <span className="text-white/40">Flagship</span>
                  </div>
                  <h3 className="text-4xl font-semibold leading-tight text-white">{featuredProject.title}</h3>
                  <p className="text-base text-white/70">{featuredProject.summary}</p>
                  <p className="text-sm text-white/60">{featuredProject.result}</p>
                  <ul className="space-y-3 text-sm text-white/75">
                    {featuredProject.wins.map((win) => (
                      <li key={win} className="flex items-start gap-2">
                        <ArrowUpRight className="mt-1 h-4 w-4 text-primary" />
                        <span>{win}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {featuredProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/15 bg-black/20 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {featuredProject.links && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {featuredProject.links.demo && (
                        <a
                          href={featuredProject.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-sm text-white transition hover:bg-primary/20"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View live
                        </a>
                      )}
                      {featuredProject.links.repo && (
                        <a
                          href={featuredProject.links.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm text-white/70 transition hover:text-white"
                        >
                          <Github className="h-4 w-4" />
                          Source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            </Magnetic>

            <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-white/40">Partnership modes</p>
              <ul className="mt-6 space-y-5 text-sm text-white/70">
                {[
                  'Fractional product partner when you need senior velocity',
                  'Architecture sprints or rapid build weeks to unblock scale work',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {otherProjects.length > 0 && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <div key={project.title}>
                <Magnetic>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-primary/40 hover:bg-white/[0.07]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover opacity-80 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
                        {project.focus}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-2 line-clamp-2 text-sm text-white/60">{project.summary}</p>
                      </div>
                      <p className="line-clamp-2 text-sm text-white/70">{project.result}</p>
                      <ul className="space-y-2 text-sm text-white/70">
                        {project.wins.map((win) => (
                          <li key={win} className="flex items-start gap-2">
                            <ArrowUpRight className="mt-0.5 h-4 w-4 text-primary" />
                            <span>{win}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.links ? (
                        <div className="mt-auto flex flex-wrap gap-3 pt-4">
                          {project.links.demo && (
                            <a
                              href={project.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm text-white transition hover:bg-primary/20"
                            >
                              <ExternalLink className="h-4 w-4" />
                              View live
                            </a>
                          )}
                          {project.links.repo && (
                            <a
                              href={project.links.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/70 transition hover:text-white"
                            >
                              <Github className="h-4 w-4" />
                              Source
                            </a>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </article>
                </Magnetic>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};
