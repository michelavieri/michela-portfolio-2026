import Image from "next/image";

export function HeroSection() {
    return (
        <div className="min-h-screen px-0 md:px-16 py-16 md:py-24 relative w-full">

            {/* Top right label */}
            <div className="absolute hidden md:flex md:top-8 md:right-8 text-xs lg:text-sm text-secondary">
                Product Designer & Frontend Engineer
            </div>

            {/* Main hero text */}
            <div className="mt-24 w-full">
                <h1 className="max-w-3xl text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-tight text-primary">
                    Hi, I design & build web products that feel effortless
                </h1>

                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center mt-12 md:mt-20 w-full md:justify-end">
                    <Image src="/images/smiley.svg" alt="Smile bullet point" width={24} height={24} />
                    <p className="text-secondary max-w-sm text-sm lg:text-base">
                        Intuitive, beautiful experiences crafted with intention,
                        from strategy through implementation.
                    </p>
                </div>
            </div>

        </div>
    );
}