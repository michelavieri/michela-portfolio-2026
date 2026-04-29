import { notFound } from "next/navigation";
import { projects } from "@/data/projects/projects";
import ReactMarkdown from "react-markdown";
import { ProjectTOC } from "@/components/project/ProjectTOC";
import { ZoomableImage } from "@/components/project/ZoomableImage";

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

    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(normalizedSrc)}`;
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const project = projects.find((p) => p.id === id);

    if (!project) return notFound();

    return (
        <div className="px-6 md:px-16 py-16 md:py-24 mx-auto grid grid-cols-1 md:grid-cols-[160px_1fr] gap-12">

            {/* LEFT: TOC */}
            <div className="hidden md:block sticky top-24 text-sm text-gray-400 self-start space-y-8">
                <a
                    href="/"
                    className="text-sm text-gray-400 hover:text-black transition inline-block"
                >
                    ← Back
                </a>

                <ProjectTOC sections={project.sections ?? []} />
            </div>

            {/* RIGHT: CONTENT */}
            <div className="max-w-3xl mx-auto w-full">

                {/* MOBILE BACK */}
                <a
                    href="/"
                    className="md:hidden text-sm text-gray-400 hover:text-black transition inline-block mb-10"
                >
                    ← Back
                </a>

                {/* HEADER */}
                <div className="mb-16">
                    <h1 className="text-3xl md:text-5xl font-medium mb-6">
                        {project.title}
                    </h1>

                    <p className="text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed">
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
                {project.sections && (
                    <div className="space-y-16">
                        {project.sections.map((section, i) => {
                            switch (section.type) {
                                case "text":
                                    const id = section.title ? slugify(section.title) : null;

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
                                                components={{
                                                    p: ({ children }) => (
                                                        <p className="text-gray-700 leading-relaxed mb-4">
                                                            {children}
                                                        </p>
                                                    ),
                                                    strong: ({ children }) => (
                                                        <strong className="font-semibold text-gray-800">
                                                            {children}
                                                        </strong>
                                                    ),
                                                    ol: ({ children }) => (
                                                        <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2 marker:text-gray-500">
                                                            {children}
                                                        </ol>
                                                    ),
                                                    ul: ({ children }) => (
                                                        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2 marker:text-gray-500">
                                                            {children}
                                                        </ul>
                                                    ),
                                                    li: ({ children }) => (
                                                        <li className="pl-1 leading-relaxed text-gray-700 [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ol]:mt-2 [&>ul]:mt-2">
                                                            {children}
                                                        </li>
                                                    ),
                                                }}
                                            >
                                                {section.content}
                                            </ReactMarkdown>
                                        </section>
                                    );

                                case "image":
                                    return (
                                        <div key={i} className="flex flex-col items-center w-full gap-4">
                                            <ZoomableImage src={section.src} alt={section.alt} />

                                            {section.caption && (
                                                <p className="text-xs text-gray-500">
                                                    {section.caption}
                                                </p>
                                            )}
                                        </div>
                                    );

                                case "figma":
                                    return (
                                        <div key={i} className="flex w-full flex-col gap-3">
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
                                                style={{ height: section.height ?? 560 }}
                                            >
                                                <iframe
                                                    src={getFigmaEmbedSrc(section.src)}
                                                    title={section.title ?? "Figma embed"}
                                                    loading="lazy"
                                                    allowFullScreen
                                                    className="absolute inset-0 h-full w-full"
                                                />
                                            </div>

                                            {section.caption && (
                                                <p className="text-xs text-gray-500">
                                                    {section.caption}
                                                </p>
                                            )}
                                        </div>
                                    );

                                case "quote":
                                    return (
                                        <blockquote
                                            key={i}
                                            className="border-l-2 pl-4 italic text-gray-500"
                                        >
                                            {section.content}
                                        </blockquote>
                                    );

                                default:
                                    return null;
                            }
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
