'use client';
import { Badge } from '@/components/ui/badge';
import { colorMap } from '@/lib/utils';
import clsx from 'clsx';

type TagColor = keyof typeof colorMap;

interface TagsProps {
    tags: string[];
    color?: TagColor;
}

function getTagColor(tag: string, color?: TagColor) {
    if (color) {
        return color;
    }

    if (tag === 'UI/UX Design') {
        return 'pink';
    }

    if (tag === 'Web Development') {
        return 'blue';
    }

    if (tag === 'Case Study') {
        return 'purple';
    }

    return 'beige';
}

export function Tags({ tags, color }: TagsProps) {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
                <Badge
                    key={tag}
                    className={clsx(colorMap[getTagColor(tag, color)], 'p-4')}
                >
                    {tag}
                </Badge>
            ))}
        </div>
    );
}
