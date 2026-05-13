'use client';

import { skillGroups } from "@/data/skillgroups";
import { SectionLabel } from "../common/SectionLabel";
import { Tags } from "../common/Tags";

const skillGroupColors = {
    'Product & UX': 'pink',
    Frontend: 'blue',
} as const;

function getSkillGroupColor(title: string) {
    if (title in skillGroupColors) {
        return skillGroupColors[title as keyof typeof skillGroupColors];
    }
}

export function SkillsSection() {
    return (
        <div className="px-0 md:px-12 py-12">
            <SectionLabel label="Skills" />

            <div className="grid gap-8 md:grid-cols-2">
                {skillGroups.map((group) => (
                    <div key={group.title}>
                        <h3 className="text-sm font-medium mb-3">
                            {group.title}
                        </h3>

                        <Tags
                            tags={group.skills}
                            color={getSkillGroupColor(group.title)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
