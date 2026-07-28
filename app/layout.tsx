import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Ikram Badaoui | Portfolio",
  description:
    "Portfolio of Ikram Badaoui, an AI Engineering student interested in artificial intelligence, software engineering, networks, cybersecurity, research, and design.",
    icons: {
    icon: "/logo-modified.png",
  },
  keywords: [
    "Ikram Badaoui",
    "AI",
    "Reinforcement Learning",
    "Networking",
    "Cybersecurity",
    "Software Engineering",
    "Design",
  ],
  openGraph: {
    title: "Ikram Badaoui | Portfolio",
    description:
      "AI engineering, software, networks, cybersecurity, research, and design portfolio.",
    type: "website",
    images: ["/ikram-badaoui.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={caveat.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}