'use client';

import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const STORAGE_KEY = 'pd_loader_seen';

export const PageLoader = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeenLoader = sessionStorage.getItem(STORAGE_KEY) === 'true';

    const nav = navigator as Navigator & {
      connection?: {
        downlink?: number;
      };
    };
    const connection = nav.connection;
    const isSlowConnection =
      typeof connection?.downlink === 'number' ? connection.downlink < 2.2 : false;

    if (prefersReducedMotion || hasSeenLoader || !isSlowConnection) {
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, 'true');
    setShouldRender(true);
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    gsap.set('.loader-text', { y: 10, opacity: 0 });
    gsap.set('.loader-line', { scaleX: 0, opacity: 0 });
    gsap.set('.loader-overlay', { height: '100%' });

    const tl = gsap.timeline();

    tl.to('.loader-text', {
      y: 0,
      opacity: 1,
      duration: 0.28,
      ease: 'power2.out',
    })
      .to(
        '.loader-line',
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.28,
          ease: 'power2.inOut',
        },
        '-=0.15'
      )
      .to('.loader-overlay', {
        height: 0,
        duration: 0.35,
        ease: 'power2.inOut',
        delay: 0.05,
      })
      .to('.page-loader', { opacity: 0, duration: 0.2, ease: 'linear' })
      .call(() => setShouldRender(false));

    return () => {
      tl.kill();
    };
  }, [shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="page-loader fixed inset-0 z-[100] flex flex-col justify-end bg-[#040D12]">
      <div className="loader-overlay absolute inset-0 bg-[#040D12] flex items-center justify-center">
        <div className="text-center overflow-hidden">
          <h1 className="loader-text text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
            Pollab<span className="text-primary">.</span>
          </h1>
          <div className="loader-line w-24 h-1 bg-primary mx-auto rounded-full origin-center"></div>
        </div>
      </div>
    </div>
  );
};
