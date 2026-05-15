import { Navigation } from "@/components/layout/Navigation";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="grid min-h-screen md:grid-cols-[20vw_minmax(0,1fr)]">
            <Navigation />
            <main className="min-w-0">{children}</main>
        </div>
    );
}
