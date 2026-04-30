'use client';

import { useEffect, useMemo, useState } from "react";

type Props = {
    sections: any[];
};

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
}

export function ProjectTOC({ sections }: Props) {
    const [active, setActive] = useState<string>("");

    const titles = useMemo(
        () =>
            sections
                .filter((s) => (s.type === "text" && s.title) || (s.type === "figma" && s.title))
                .map((s) => ({
                    id: slugify(s.title),
                    title: s.title,
                })),
        [sections]
    );

    useEffect(() => {
        const headingIds = titles.map((title) => title.id);
        const headings = headingIds
            .map((id) => document.getElementById(id))
            .filter((heading): heading is HTMLElement => Boolean(heading));

        const observer = new IntersectionObserver(
            () => {
                const current = headings
                    .filter((heading) => heading.getBoundingClientRect().top <= 120)
                    .at(-1);

                setActive(current?.id ?? headings[0]?.id ?? "");
            },
            {
                root: null,
                rootMargin: "-100px 0px -70% 0px",
                threshold: 0,
            }
        );

        headings.forEach((heading) => observer.observe(heading));

        const initial = headings.find((heading) => heading.getBoundingClientRect().top > 0);
        setActive(initial?.id ?? headings[0]?.id ?? "");

        return () => observer.disconnect();
    }, [titles]);

    return (
        <div className="space-y-4">
            {titles.map((item) => (
                <button
                    key={item.id}
                    onClick={() => {
                        const el = document.getElementById(item.id);
                        if (!el) return;

                        window.scrollTo({
                            top: el.offsetTop - 100,
                            behavior: "smooth",
                        });
                    }}
                    className={`block text-left transition-colors ${active === item.id
                        ? "text-black font-medium"
                        : "text-gray-400 hover:text-gray-700"
                        }`}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
}
