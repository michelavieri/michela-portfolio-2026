'use client';
import { useState } from 'react';
import Image from 'next/image';

export function ZoomableImage({ src, alt }: { src: string; alt?: string }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Thumbnail */}
            <div
                onClick={() => setOpen(true)}
                className="cursor-zoom-in"
            >
                <Image
                    src={src}
                    alt={alt || ""}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg border"
                />
            </div>

            {/* Modal */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src={src}
                        alt={alt || ""}
                        width={1600}
                        height={1000}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}
        </>
    );
}