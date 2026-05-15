import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects/projects";
import ReactMarkdown from "react-markdown";
import { ProjectTOC } from "@/components/project/ProjectTOC";
import { ZoomableImage } from "@/components/project/ZoomableImage";
import Image from "next/image";

function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
}

function getFigmaEmbedSrc(src: string) {
    const normalizedSrc = src.replaceAll("&amp;", "&");

    if (
        normalizedSrc.startsWith("https://www.figma.com/embed") ||
        normalizedSrc.startsWith("https://embed.figma.com/")
    ) {
        return normalizedSrc;
    }

    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
        normalizedSrc
    )}`;
}

export async function generateMetadata({
    params,
}: {
    params: { id: string } | Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((project) => project.id === id);

    if (!project) {
        return {
            title: "Project not found | Michela Vieri",
            description: "Project not found.",
            robots: { index: false, follow: false },
        };
    }

    const url = `https://michelavieri.com/project/${project.id}`;

    return {
        title: `${project.title} | Michela Vieri`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            url,
            type: "website",
            images: [
                {
                    url: project.heroImage,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
        },
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function ProjectPage({
    params,
}: {
    params: { id: string } | Promise<{ id: string }>;
}) {
    const { id } = await params;

    const project = projects.find((p) => p.id === id);

    if (!project) return notFound();

    const currentIndex = projects.findIndex((p) => p.id === id);

    const nextProject =
        projects[(currentIndex + 1) % projects.length];

    return (
        <div className="w-full">

            {/* TOP BANNER */}
            <div className="w-full">
                <div className="relative w-full aspect-[6/1] max-h-[420px] overflow-hidden">
                    <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            {/* GRID LAYOUT (TOC + CONTENT) */}
            <div className="px-6 md:px-16 py-16 md:py-24 mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-12">

                {/* LEFT: TOC */}
                <div className="hidden md:block sticky top-24 text-sm text-gray-500 self-start space-y-6">
                    <Link
                        href="/"
                        className="text-sm text-gray-400 hover:text-black transition inline-block"
                    >
                        ← Back
                    </Link>

                    <ProjectTOC sections={project.sections ?? []} />
                </div>

                {/* RIGHT: CONTENT */}
                <div className="max-w-3xl mx-auto w-full">

                    {/* MOBILE BACK */}
                    <Link
                        href="/"
                        className="md:hidden text-sm text-gray-400 hover:text-black transition inline-block mb-10"
                    >
                        ← Back
                    </Link>

                    {/* TITLE */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-5xl font-medium mb-4">
                            {project.title}
                        </h1>

                        <p className="text-gray-500 max-w-2xl leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs bg-muted px-2 py-1 rounded text-gray-600"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="space-y-16">
                        {project.sections?.map((section, i) => {
                            switch (section.type) {

                                case "text": {
                                    const id = section.title
                                        ? slugify(section.title)
                                        : null;

                                    return (
                                        <section key={i}>
                                            {section.title && (
                                                <h2
                                                    id={id ?? undefined}
                                                    className="text-xl font-semibold mb-4 scroll-mt-24"
                                                >
                                                    {section.title}
                                                </h2>
                                            )}

                                            <ReactMarkdown
                                                skipHtml={true}
                                                components={{
                                                    p: ({ children }) => (
                                                        <p className="text-gray-700 leading-relaxed mb-4">
                                                            {children}
                                                        </p>
                                                    ),
                                                    h3: ({ children }) => (
                                                        <h3 className="text-base font-semibold text-gray-900 mt-8 mb-3">
                                                            {children}
                                                        </h3>
                                                    ),
                                                    strong: ({ children }) => (
                                                        <strong className="font-semibold text-gray-800">
                                                            {children}
                                                        </strong>
                                                    ),
                                                    a: ({ children, href }) => (
                                                        <a
                                                            href={href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={href ? `Opens ${href} in a new tab` : undefined}
                                                            className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-500 transition"
                                                        >
                                                            {children}
                                                        </a>
                                                    ),
                                                    blockquote: ({ children }) => (
                                                        <blockquote className="border-l-2 border-gray-200 pl-4 italic text-gray-500 mb-4">
                                                            {children}
                                                        </blockquote>
                                                    ),
                                                    ul: ({ children }) => (
                                                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                                                            {children}
                                                        </ul>
                                                    ),
                                                    ol: ({ children }) => (
                                                        <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                                                            {children}
                                                        </ol>
                                                    ),
                                                }}
                                            >
                                                {section.content}
                                            </ReactMarkdown>
                                        </section>
                                    );
                                }

                                case "image":
                                    return (
                                        <div
                                            key={i}
                                            className="flex flex-col items-center gap-4"
                                        >
                                            <ZoomableImage
                                                src={section.src}
                                                alt={section.alt}
                                            />
                                        </div>
                                    );

                                case "figma":
                                    return (
                                        <div key={i} className="flex flex-col gap-3">
                                            {section.title && (
                                                <h2
                                                    id={slugify(section.title)}
                                                    className="text-xl font-semibold mb-4 scroll-mt-24"
                                                >
                                                    {section.title}
                                                </h2>
                                            )}

                                            <div
                                                className="relative w-full overflow-hidden rounded-lg border bg-muted"
                                                style={{
                                                    height:
                                                        section.height ?? 560,
                                                }}
                                            >
                                                <iframe
                                                    src={getFigmaEmbedSrc(
                                                        section.src
                                                    )}
                                                    title={section.title ?? "Figma embed"}
                                                    loading="lazy"
                                                    allowFullScreen
                                                    className="absolute inset-0 w-full h-full"
                                                />
                                            </div>
                                        </div>
                                    );

                                default:
                                    return null;
                            }
                        })}

                        {/* NEXT PROJECT SECTION */}
                        <div className="mt-24 border-t pt-16">

                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6">
                                Check out other projects
                            </p>

                            <a
                                href={`/project/${nextProject.id}`}
                                className="group block"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-6 items-center group">

                                    {/* THUMBNAIL */}
                                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-md bg-muted">
                                        {nextProject.heroImage && (
                                            <Image
                                                src={nextProject.imageSrc}
                                                alt={nextProject.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition duration-300"
                                            />
                                        )}
                                    </div>

                                    {/* TEXT */}
                                    <div>
                                        <p className="text-lg font-medium text-gray-900 group-hover:text-gray-500 transition">
                                            {nextProject.title}
                                        </p>

                                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                            {nextProject.description}
                                        </p>

                                        {/* subtle arrow hint */}
                                        <div className="mt-4 text-sm text-gray-400 group-hover:text-gray-600 transition">
                                            → View project
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}