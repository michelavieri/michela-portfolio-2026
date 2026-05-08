'use client';

import { experiences } from "@/data/experiences";
import { ExperienceCard } from "../cards/experienceCard";
import { SectionLabel } from "../common/SectionLabel";

export function ExperiencesSection() {
    return (
        <div className="px-0 md:px-12 py-12">
            <SectionLabel label="Experience" />

            <div>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={experience.company}
                        index={index}
                        {...experience}
                    />
                ))}
            </div>
        </div>
    );
}
