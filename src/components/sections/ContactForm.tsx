'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send, CheckCircle, Github, Linkedin } from 'lucide-react';
import { Section } from '@/components/ui/Section';

export const ContactForm = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Something went wrong.');
      }

      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 5000);
    } catch (error) {
      setFormState('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong.');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section
      id="contact"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#020406] to-[#040d12] py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-10 top-0 h-64 w-64 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#2E0249]/25 blur-[160px]" />
      </div>
      <div className="container relative mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">Next engagement</p>
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
              Let&apos;s pair on something ambitious.
            </h2>
            <p className="mt-4 text-base text-white/70">
              Ideal for product teams who need a builder that toggles between architecture, DX, and
              front-of-house polish without losing pace.
            </p>
            <div className="mt-8 space-y-5 text-sm text-white/70">
              {[
                'Fractional tech leadership or principal IC roles',
                'Architecture sprints & performance audits',
                'Partnering with design to ship premium surfaces',
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/pollabd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-primary/30 hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/pollabd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-primary/30 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-white/60 leading-[1.4]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-white/60">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-white/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" size="lg" disabled={formState === 'loading'} className="w-full">
                {formState === 'loading' ? (
                  <>Sending...</>
                ) : formState === 'success' ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {formState === 'success' && (
                <p className="text-center text-sm text-primary">Thanks! I&apos;ll get back to you soon.</p>
              )}
              {formState === 'error' && (
                <p className="text-center text-sm text-red-400">
                  {errorMessage ?? 'Unable to send your message. Please try again in a moment.'}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};
