'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { ExternalLink, type LucideIcon } from 'lucide-react';

interface ExperienceCardProps {
    icon: LucideIcon;
    role: string;
    company: string;
    period: string;
    website?: string;
    description?: string;
    highlights?: string[];
    index: number;
}

export function ExperienceCard({
    icon: Icon,
    role,
    company,
    period,
    website,
    description,
    highlights,
    index
}: ExperienceCardProps) {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: '-100px' }}
            transition={{ delay: index * 0.1 }}
            className="group relative pl-0 md:pl-16 pb-6"
        >
            {/* Timeline */}
            <div className="absolute left-6 hidden h-full w-px bg-border md:block" />

            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F2EC] md:absolute md:left-1 md:mb-0">
                <Icon size={16} className="text-[#3A3A38]" />
            </div>

            {/* Card */}
            <div className="bg-background pt-1 pl-0 md:pl-4 p-4 transition-all duration-300 hover:border-gray-300 hover:bg-muted/40">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                        <h3 className="text-xl md:text-2xl font-medium leading-tight">
                            {company} — {role}
                        </h3>

                        <div className="mt-1 flex items-center gap-2 text-sm">

                            <p className="text-sm whitespace-nowrap">
                                {period}
                            </p>
                            {website && (
                                <>
                                    <span>·</span>
                                    <a
                                        href={`https://${website}`}
                                        target="_blank"
                                        className="hover:text-foreground transition-colors text-muted-foreground"
                                    >
                                        {website}
                                    </a>
                                    <ExternalLink size={12}
                                        className="hover:text-foreground transition-colors text-muted-foreground" />
                                </>
                            )}

                        </div>
                    </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>

                <ul className="mt-2 space-y-2 list-disc pl-5 text-sm text-[#837C75]">
                    {highlights?.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
