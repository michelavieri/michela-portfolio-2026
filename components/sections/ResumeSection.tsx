'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { SectionLabel } from '@/components/common/SectionLabel';
import { Button } from '@/components/ui/button';
import { fadeInUp } from '@/lib/animations';

export function ResumeSection() {
  return (
    <section id="resume" className="px-0 md:px-12 pb-12">
      <div className="w-full">
        <SectionLabel label="Resume" />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: '-100px' }}
          className="group flex flex-col md:flex-row items-center gap-8 border border-border rounded-lg bg-background p-4 md:p-5 transition-all hover:border-gray-300 hover:bg-muted/50"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="flex h-24 w-20 flex-none items-center justify-center rounded-3xl border border-border bg-gradient-to-br from-slate-100 to-slate-50 p-3 text-slate-700 shadow-sm">
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl bg-white p-2">
                <FileText className="h-6 w-6" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">PDF</span>
              </div>
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">Michela Vieri's Resume</p>
              <p className="text-xs text-muted-foreground mt-1">PDF · 115 KB</p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Button className="cursor-pointer font-medium inline-flex items-center gap-1 hover:gap-2 transition-all rounded-sm bg-muted hover:bg-secondary/10 text-secondary" asChild size="sm" variant="default">
              <a href="/Michela Vieri's Resume.pdf" download="Michela Vieri's Resume.pdf" className="inline-flex items-center gap-1">
                Download
                <Download size={14} />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
