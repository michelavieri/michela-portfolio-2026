'use client';

import { SectionLabel } from '@/components/common/SectionLabel';
import Image from 'next/image';

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden w-screen -mx-6 lg:-mx-12 px-6 lg:px-12 pb-12 pt-16 bg-muted-foreground/10">
      <div className="w-full max-w-full">
        <div className="-mt-4 min-w-0 grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-center">
          <div className="flex items-center justify-center lg:order-last w-full min-w-0">
            <div className="relative aspect-square w-full max-w-[18rem] sm:max-w-[22rem] overflow-hidden rounded-full mx-auto">
              <Image src="/images/profile.png" alt="Profile Picture" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-16">
            <SectionLabel label="Contact" />

            <p className="text-3xl md:text-4xl leading-normal text-foreground max-w-2xl">
              I&apos;m open for Product Designer Roles or Web Design & Build Commissions
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              <a
                href="mailto:michela.vieri.hp@gmail.com"
                className="text-sm text-foreground border-b pb-2"
              >
                michela.vieri.hp@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/michelavieri"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-foreground border-b pb-2"
              >
                linkedin.com/in/michelavieri
              </a>

              <a
                href="https://www.dribbble.com/michelavieri"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-foreground border-b pb-2"
              >
                dribbble.com/michelavieri
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
