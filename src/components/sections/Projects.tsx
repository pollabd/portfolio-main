'use client';

import React, { useMemo, useState } from 'react';
import { Magnetic } from '@/components/ui/Magnetic';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

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
    result: 'Kept live events under 2s latency while serving thousands of concurrent viewers.',
    image: '/video-streaming.png',
    tech: ['TypeScript', 'Node.js', 'AWS', 'Redis'],
    wins: [
      'Edge caching strategy trimmed bandwidth costs by 28%',
      'Structured observability for proactive incident response',
    ],
    links: { demo: 'https://github.com/pollabd' },
  },
  {
    title: 'POS payment system',
    focus: 'Automation',
    summary: 'Designed a unified payments API for high-volume retail partners.',
    result: 'Automated reconciliation and reduced manual ops time each week.',
    image: '/pos-payment.png',
    tech: ['TypeScript', 'PostgreSQL', 'Docker'],
    wins: [
      'Tokenized card flows and fraud checks baked into the pipeline',
      'Background workers keep payouts and reporting in sync',
    ],
    links: { repo: 'https://github.com/pollabd' },
  },
  {
    title: 'Vendor marketplace',
    focus: 'Commerce',
    summary: 'Full-stack build of a multi-vendor marketplace with moderation tools.',
    result: 'Enabled admins to onboard sellers in minutes with automated checks.',
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
    summary: 'Realtime dashboards, check-in flows, and messaging for large conferences.',
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

  return (
    <section id="projects" className="border-b border-white/10 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-10 max-w-4xl space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Selected work</p>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div key={project.title}>
              <Magnetic>
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition hover:border-primary/40 hover:bg-white/[0.07]">
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
                    <div className="mt-auto flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-white/60">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-[11px]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.links ? (
                      <div className="flex flex-wrap gap-3 pt-4">
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
      </div>
    </section>
  );
};
