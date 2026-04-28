import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const colorMap = {
  pink: 'bg-[var(--color-accent-pink)] text-[#7F3473]',
  purple: 'bg-[var(--color-accent-purple)] text-[#67347F]',
  blue: 'bg-[var(--color-accent-blue)] text-[#344A7F]',
};
