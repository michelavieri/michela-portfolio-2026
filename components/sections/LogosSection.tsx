import { SectionLabel } from "../common/SectionLabel";

export function LogosSection() {
    return (
        <section className="px-0 md:px-12 pt-12 pb-24">

            <div className="w-full">
                <SectionLabel label="Worked at" />
                <SectionLabel label="Past freelance works for clients" />
            </div>
        </section>
    );
}