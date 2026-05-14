import Image from "next/image";
import { SectionLabel } from "../common/SectionLabel";

export function LogosSection() {
    const workLogos = [
        { src: "/images/logos/blankLogo.png", alt: "Blank Design & Solutions" },
        { src: "/images/logos/semblyLogo.png", alt: "Sembly" },
        { src: "/images/logos/seaLogo.png", alt: "Sea Labs" },
        { src: "/images/logos/shopeeLogo.svg", alt: "Shopee" },
        { src: "/images/logos/dateideasLogo.png", alt: "Dateideas" },
    ];

    const clientLogos = [
        { src: "/images/logos/clients/accentureLogo.png", alt: "Accenture" },
        { src: "/images/logos/clients/apcLogo.png", alt: "APC" },
        { src: "/images/logos/clients/365Logo.png", alt: "WanderHER" },
        { src: "/images/logos/clients/vierifleurLogo.png", alt: "Benepanda" },
        { src: "/images/logos/clients/cdplusaLogo.png", alt: "CD Plus A" },
        { src: "/images/logos/clients/dotprojectsLogo.png", alt: "DOT Projects" },
        { src: "/images/logos/clients/satumaterialLogo.png", alt: "Satu Material" },
        { src: "/images/logos/clients/subwayLogo.png", alt: "Subway" },
        { src: "/images/logos/clients/twerkfitLogo.png", alt: "Twerfit" },
        { src: "/images/logos/clients/vicinityLogo.png", alt: "Vicinity Studio" },
        { src: "/images/logos/clients/lollisLogo.png", alt: "Lolli's Florist" },
        { src: "/images/logos/clients/wanderherLogo.png", alt: "WanderHER" },
        { src: "/images/logos/clients/vierifoodieLogo.png", alt: "WanderHER" },
    ];

    const workMarqueeLogos = [...workLogos, ...workLogos];
    const clientMarqueeLogos = [...clientLogos, ...clientLogos];

    return (
        <section className="min-w-0 overflow-hidden px-0 md:px-12 pt-12 pb-24">

            <div className="min-w-0 w-full overflow-hidden">
                <SectionLabel label="Worked at" />
                <div className="work-logos-static gap-12 pb-24 pt-6">
                    {workLogos.map((logo, index) => (
                        <Image key={index} src={logo.src} alt={logo.alt} width={200} height={48} className="h-12 object-contain" />
                        ))}
                </div>
                <div className="work-logos-marquee relative min-w-0 w-full max-w-full overflow-hidden pb-24 pt-6">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

                    <div className="flex w-max animate-logo-marquee items-center gap-12 hover:[animation-play-state:paused]">
                        {workMarqueeLogos.map((logo, index) => (
                            <div
                                key={`${logo.alt}-${index}`}
                                className="flex h-16 w-52 shrink-0 items-center justify-center"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={200}
                                    height={64}
                                    className="max-h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <SectionLabel label="Past freelance works for clients" />
                <div className="relative min-w-0 w-full max-w-full overflow-hidden py-6">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

                    <div className="flex w-max animate-logo-marquee items-center gap-16 hover:[animation-play-state:paused]">
                        {clientMarqueeLogos.map((logo, index) => (
                            <div
                                key={`${logo.alt}-${index}`}
                                className="flex h-16 w-44 shrink-0 items-center justify-center"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={176}
                                    height={64}
                                    className="max-h-12 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
