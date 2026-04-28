'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Equal, X } from 'lucide-react';

const navItems = [
    { label: 'Intro', id: 'intro' },
    { label: 'Work', id: 'work' },
    { label: 'Experiences', id: 'experiences' },
    { label: 'Skills', id: 'skills' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
];

export function Navigation() {
    const [active, setActive] = useState('intro');
    const [open, setOpen] = useState(false);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;

        const yOffset = -80;
        const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });

        setOpen(false);
    };

    // 👇 Active section tracking
    useEffect(() => {
        const sections = navItems.map((item) =>
            document.getElementById(item.id)
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-40% 0px -50% 0px',
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            {/* Desktop Sidebar */}
            <nav className="hidden md:flex flex-col w-full h-screen sticky top-0 p-6 lg:p-10 bg-muted">
                <div className="mb-10 w-full">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={216}
                        height={45}
                        className="w-full h-auto object-contain max-w-[216px]"
                        priority
                    />
                </div>

                <ul className="space-y-4">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => scrollTo(item.id)}
                                className={clsx(
                                    'text-left transition-colors font-medium cursor-pointer text-sm lg:text-base',
                                    active === item.id
                                        ? 'text-black'
                                        : 'text-gray-400 hover:text-gray-700'
                                )}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Top Bar */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background p-4 flex justify-between items-center">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={100}
                    height={32}
                />

                <button onClick={() => setOpen(!open)}>
                    {open ? <X size={22} /> : <Equal size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden fixed inset-0 bg-background z-40 flex flex-col items-center justify-center space-y-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollTo(item.id)}
                            className={clsx(
                                'text-xl transition-colors font-medium',
                                active === item.id
                                    ? 'text-black'
                                    : 'text-gray-400 hover:text-gray-700'
                            )}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}