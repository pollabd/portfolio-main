'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Mail, Linkedin, Github, Phone, CalendarClock, MessageCircle } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';

const quickLinks = [
  {
    label: 'Book a 20 min call',
    icon: CalendarClock,
    href: 'mailto:rudaoff7@gmail.com?subject=Call%20with%20Pollab',
    description: "Share a bit about your product and I'll confirm a slot.",
  },
  {
    label: 'Send project brief',
    icon: MessageCircle,
    href: 'mailto:rudaoff7@gmail.com?subject=Project%20brief&body=Tell%20me%20about%20timeline%2C%20team%2C%20and%20constraints.',
    description: "I'll follow up with suggestions, timelines, and next steps.",
  },
];

export const Contact = () => {
  return (
    <Section id="contact" className="bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-white/40">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Open to backend-heavy roles, platform work, or short sprints.
          </h2>
          <p className="mt-3 text-white/60">
            Fast replies (usually within 24 hours). Async-friendly collaboration is my sweet spot.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
            <p className="text-lg text-white">
              Need an engineer who can own architecture, delivery, and communication? Let&apos;s talk.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Magnetic>
                <Button size="lg" onClick={() => (window.location.href = 'mailto:rudaoff7@gmail.com')}>
                  <Mail className="mr-2 h-4 w-4" />
                  Email me
                </Button>
              </Magnetic>
              <Magnetic>
                <Button variant="outline" size="lg" onClick={() => window.open('https://linkedin.com/in/pollabd', '_blank')}>
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Magnetic>
              <Magnetic>
                <Button variant="outline" size="lg" onClick={() => window.open('https://github.com/pollabd', '_blank')}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Magnetic>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/60">
              <Phone className="h-4 w-4" />
              <span>+8801863632848</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-primary/40"
              >
                <div className="flex items-center gap-3">
                  <link.icon className="h-5 w-5 text-primary" />
                  <p className="text-sm font-semibold text-white">{link.label}</p>
                </div>
                <p className="text-sm text-white/60">{link.description}</p>
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center text-sm text-white/60">
            "Pollab keeps momentum high - he ships, documents, and communicates so everyone stays in sync."
          </div>
        </div>
      </div>
    </Section>
  );
};
