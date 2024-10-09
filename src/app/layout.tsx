import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KBD Numérique",
  description: "Amoureuse des mots et exploratrice de nouvelles idées, je prends plaisir à m'évader à travers mes écrits, tout comme un randonneur découvre des sentiers inexplorés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header style={{
          backgroundColor: 'tomato',
          padding: '1rem'
        }}>KBD Numérique Blog</header>
        <main style={{
          padding: '1rem'
        }}>
          {children}
        </main>
        <footer style={{
          backgroundColor: 'tomato',
          padding: '1rem'
        }}>
          Footer
        </footer>
      </body>
    </html>
  );
}