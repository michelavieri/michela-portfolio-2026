import Image from "next/image";

export function HeroSection() {
    return (
        <div className="min-h-screen px-0 md:px-16 py-16 md:pt-32 md:pb-20 relative w-full flex flex-col justify-center">

            {/* Top right label */}
            <div className="absolute hidden md:flex md:top-8 md:right-8 text-xs lg:text-sm text-muted-foreground">
                Product Designer & Frontend Engineer
            </div>

            {/* Main hero text */}
            <div className="w-full">
                <h1 className="max-w-3xl lg:max-w-4xl 2xl:max-w-6xl text-[clamp(2.4rem,6vw,6rem)] font-medium leading-tight text-primary">
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