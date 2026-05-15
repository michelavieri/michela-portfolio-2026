'use client';

import { SectionLabel } from '@/components/common/SectionLabel';
import { Mail } from 'lucide-react';
import Image from 'next/image';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function DribbbleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M7 3.6c3.2 3.7 5.7 8.8 6.8 17.9" />
      <path d="M2.1 11.4c4.1.2 10.4-.2 16.2-4.2" />
      <path d="M5.2 19.1c2.4-4.5 6.8-7.4 16.4-6.5" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden w-full mb-12 rounded-xl px-6 lg:px-12 pb-12 pt-16 bg-muted-foreground/10">
      <div className="w-full max-w-full">
        <div className="-mt-4 min-w-0 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
          <div className="flex items-center justify-center lg:order-last w-full min-w-0">
            <div className="relative aspect-square w-full max-w-[18rem] sm:max-w-[22rem] overflow-hidden rounded-full mx-auto">
              <Image src="/images/profile.png" alt="Profile Picture" fill sizes="(max-width: 640px) 288px, 352px" className="object-cover" />
            </div>
          </div>

          <div className="space-y-16 w-full min-w-0">
            <SectionLabel label="Contact" />

            <h2 className="text-3xl md:text-4xl leading-normal text-foreground max-w-2xl">
              I&apos;m open for Product Designer Roles or Web Design & Build Commissions
            </h2>

            <div className="flex flex-wrap gap-4 sm:flex-row sm:gap-8">
              <a
                href="mailto:michela.vieri.hp@gmail.com"
                className="inline-flex items-center gap-2 border-b pb-2 text-sm text-foreground"
              >
                <Mail size={16} />
                michela.vieri.hp@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/michelavieri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile in a new tab"
                className="inline-flex items-center gap-2 border-b pb-2 text-sm text-foreground"
              >
                <LinkedinIcon />
                linkedin.com/in/michelavieri
              </a>

              <a
                href="https://www.dribbble.com/michelavieri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Dribbble profile in a new tab"
                className="inline-flex items-center gap-2 border-b pb-2 text-sm text-foreground"
              >
                <DribbbleIcon />
                dribbble.com/michelavieri
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
