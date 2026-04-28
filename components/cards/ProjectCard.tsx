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
                className="group flex flex-row gap-8 md:gap-12 items-start md:items-center border border-border rounded-lg overflow-hidden cursor-pointer transition-all hover:border-gray-300 hover:bg-muted/50"
            >
                {/* Image */}
                <div className="w-full h-full relative overflow-hidden bg-gray-100 md:w-[40%]">
                    <Image
                        src={imageSrc}
                        alt={title}
                        width={374}
                        height={282}
                        className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        priority={index < 2}
                    />
                </div>
                {/* Content */}
                <div className="w-full md:w-[60%]">
                    <Tags tags={tags} />
                    <h3 className="text-md md:text-xl font-medium mt-4 mb-1">{title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-4">
                        {description}
                    </p>

                    <div className='flex flex-row gap-4 mt-6 items-center'>
                        <div className="flex flex-row gap-4 mt-6 items-center">
                            <Button className="cursor-pointer font-medium inline-flex items-center gap-1 hover:gap-2 transition-all rounded-sm bg-muted hover:bg-secondary/10 text-secondary">
                                Read <ArrowRight size={12} />
                            </Button>
                            <p className='text-gray-300 text-xs italic'>({minutes} mins read)</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}