import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group relative rounded-2xl border border-white/10 bg-white/5/30 p-6 backdrop-blur-md transition-transform duration-300 ease-out will-change-transform',
          'hover:-translate-y-2 hover:border-primary/40 hover:bg-white/15 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.55)]',
          'before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
