'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Tags } from '@/components/common/Tags';
import { fadeInUp } from '@/lib/animations';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    tags: string[];
    index: number;
    id: string;
    minutes: number;
}

export function ProjectCard({
    title,
    description,
    imageSrc,
    tags,
    index,
    id,
    minutes
}: ProjectCardProps) {
    return (
        <Link href={`/project/${id}`} className="block group">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row items-stretch gap-2 md:gap-0 border border-border rounded-lg overflow-hidden cursor-pointer transition-all hover:border-gray-300 hover:bg-muted/50"
            >
                {/* IMAGE */}
                <div className="relative w-full md:w-[40%] aspect-[4/3] bg-gray-100 overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-contain"
                        priority={index < 2}
                    />
                </div>

                {/* CONTENT */}
                <div className="w-full md:w-[60%] p-4 md:p-6 md:flex md:flex-col md:justify-center">
                    <Tags tags={tags} />

                    <h3 className="text-md md:text-xl font-medium mt-4 mb-1">
                        {title}
                    </h3>

                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4">
                        {description}
                    </p>

                    <div className="flex flex-row gap-4 mt-6 items-center">
                        <Button className="cursor-pointer font-medium inline-flex items-center gap-1 hover:gap-2 transition-all rounded-sm bg-muted hover:bg-secondary/10 text-secondary">
                            Read <ArrowRight size={12} />
                        </Button>

                        <p className="text-gray-400 text-xs italic">
                            ({minutes} mins read)
                        </p>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}