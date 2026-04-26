import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "c4g7 — Arne",
  description:
    "Arne (c4g7) — developer & server specialist from Germany. Java · SQL · Python · TypeScript.",
  metadataBase: new URL("https://c4g7.com"),
  openGraph: {
    title: "c4g7 — Arne",
    description: "Developer & server specialist from Germany.",
    url: "https://c4g7.com",
    siteName: "c4g7",
    images: ["https://c4g7.com/assets/img/1_1734656387.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "c4g7 — Arne",
    description: "Developer & server specialist from Germany.",
    images: ["https://c4g7.com/assets/img/1_1734656387.png"],
  },
  icons: {
    icon: "https://c4g7.com/assets/img/1_1734656387.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
