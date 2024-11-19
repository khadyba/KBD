import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  Headers  from "./conponents/Headers" ;
import Footer from "./conponents/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlumeStratégique",
  description: "Amoureuse des mots et exploratrice de nouvelles idées, je prends plaisir à m'évader à travers mes écrits, tout comme un randonneur découvre des sentiers inexplorés.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${inter.className}`}
      >
        {/* Header */}
        <header>
          <Headers />
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
