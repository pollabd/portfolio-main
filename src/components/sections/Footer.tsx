"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Pollab Das. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pollabd"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 text-white/60 transition hover:border-primary/30 hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/pollabd"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-3 text-white/60 transition hover:border-primary/30 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
