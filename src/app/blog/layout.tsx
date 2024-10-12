import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "KBD Numérique - Le Blog",
    description: "Amoureuse des mots et exploratrice de nouvelles idées",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}
