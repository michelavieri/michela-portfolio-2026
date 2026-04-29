'use client';

import { useEffect, useState } from "react";

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

    const titles = sections
        .filter((s) => s.type === "text" && s.title)
        .map((s) => ({
            id: slugify(s.title),
            title: s.title,
        }));

    useEffect(() => {
        const headings = document.querySelectorAll("h2[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                root: null,
                threshold: 0.3,
            }
        );

        headings.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

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