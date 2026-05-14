import Image from "next/image";
import { SectionLabel } from "../common/SectionLabel";

const stats = [
    {
        value: "20+",
        label: "Completed projects, freelance work, and partnerships",
    },
    {
        value: "3",
        label: "Years of full-time work experience",
    },
    {
        value: "3",
        label: "Years of internship experience",
    },
];

function AboutCopy() {
    return (
        <div className="max-w-5xl space-y-4 text-sm leading-7 text-secondary md:text-base">
            <p>
                With 3+ years of experience in user-centered design
                and UX research, an NUS Computing degree, and a
                specialization in Product Management, I bridge user
                needs, business goals, and technical constraints to
                create thoughtful product experiences.
            </p>
            <p>
                I enjoy collaborating with cross-functional teams to
                ideate, prototype, test, and iterate using research,
                wireframing, and design systems. I am proficient in
                Figma across the full design workflow, from research
                synthesis to interactive prototypes and scalable
                component systems.
            </p>
        </div>
    );
}

function StatsGrid() {
    return (
        <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="flex h-full flex-col gap-3 py-5 sm:px-5 sm:first:pl-0 sm:last:pr-0 xl:px-6"
                >
                    <p className="text-5xl font-medium leading-none text-primary lg:text-4xl xl:text-6xl">
                        {stat.value}
                    </p>
                    <p className="text-sm leading-6 text-secondary">
                        {stat.label}
                    </p>
                </div>
            ))}
        </div>
    );
}

export function AboutSection() {
    return (
        <section id="about" className="flex flex-col gap-12 px-0 pb-24 md:px-12 2xl:flex-row 2xl:items-center 2xl:gap-16">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start xl:gap-16 2xl:contents">
                <div className="w-full max-w-xs shrink-0 sm:max-w-sm lg:w-56 xl:w-80 2xl:w-[400px]">
                    <Image
                        src="/images/about.png"
                        alt="About"
                        width={400}
                        height={300}
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 224px, (max-width: 1536px) 320px, 400px"
                        className="w-full rounded-lg object-cover"
                    />
                </div>

                <div className="min-w-0 flex-1 2xl:space-y-12">
                    <SectionLabel label="About" />

                    <p className="max-w-5xl text-balance text-2xl font-medium leading-tight text-primary md:text-4xl">
                        Product designer turning research into intuitive,
                        scalable digital experiences.
                    </p>

                    <div className="mt-5 hidden xl:block 2xl:hidden">
                        <AboutCopy />
                    </div>

                    <div className="hidden space-y-12 2xl:block">
                        <AboutCopy />
                        <StatsGrid />
                    </div>
                </div>
            </div>

            <div className="space-y-12 2xl:hidden">
                <div className="xl:hidden">
                    <AboutCopy />
                </div>
                <StatsGrid />
            </div>
        </section>
    );
}
