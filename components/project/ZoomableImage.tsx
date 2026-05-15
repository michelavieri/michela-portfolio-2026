'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function ZoomableImage({ src, alt }: { src: string; alt?: string }) {
    const [open, setOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const accessibleAlt = alt ?? 'Project image';

    useEffect(() => {
        if (!open) return;

        const triggerElement = triggerRef.current;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        modalRef.current?.focus();

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            triggerElement?.focus();
        };
    }, [open]);

    return (
        <>
            {/* Thumbnail */}
            <button
                type="button"
                ref={triggerRef}
                onClick={() => setOpen(true)}
                className="cursor-zoom-in w-full"
                aria-label={`Open ${accessibleAlt} in a modal`}
            >
                <Image
                    src={src}
                    alt={accessibleAlt}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg border"
                />
            </button>

            {/* Modal */}
            {open && (
                <div
                    ref={modalRef}
                    tabIndex={-1}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Expanded view of ${accessibleAlt}`}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
                    onClick={() => setOpen(false)}
                >
                    <div className="max-w-full max-h-full" onClick={(event) => event.stopPropagation()}>
                        <Image
                            src={src}
                            alt={accessibleAlt}
                            width={1200}
                            height={800}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
