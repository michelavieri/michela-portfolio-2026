'use client';
import { Badge } from '@/components/ui/badge';
import { colorMap } from '@/lib/utils';
import clsx from 'clsx';
interface TagsProps {
    tags: string[];
}
export function Tags({ tags }: TagsProps) {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
                <Badge key={tag} className={clsx(colorMap[tag === 'UI/UX Design' ? "pink" : tag === "Web Development" ? "blue" : "purple"], 'p-4')}>
                    {tag}
                </Badge>
            ))}
        </div>
    );
}