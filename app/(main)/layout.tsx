import { Navigation } from "@/components/layout/Navigation";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid md:grid-cols-[20vw_1fr] min-h-screen">
            <Navigation />
            <main>{children}</main>
        </div>
    );
}