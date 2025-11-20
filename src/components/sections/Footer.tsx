"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Pollab Das. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
