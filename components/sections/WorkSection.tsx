'use client';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { SectionLabel } from '@/components/common/SectionLabel';
import { projects } from '@/data/projects/projects';
export function WorkSection() {
    return (
        <section id="portfolio" className="px-0 md:px-12 pb-12">
            <div className="w-full">
                <SectionLabel label="Portfolio / Selected Works" />
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <ProjectCard
                            index={index}
                            key={project.id}
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            minutes={project.minutes}
                            id={project.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}