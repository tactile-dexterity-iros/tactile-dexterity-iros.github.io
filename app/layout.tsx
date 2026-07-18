import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tactile-dexterity-iros.github.io"),
  title: "Scalable Tactile Sensing for Dexterous Manipulation · IROS 2026",
  description:
    "An IROS 2026 workshop connecting tactile sensing hardware, robot learning, and dexterous manipulation.",
  openGraph: {
    title: "Scalable Tactile Sensing for Dexterous Manipulation",
    description:
      "IROS 2026 workshop · September 27, 2026 · Pittsburgh, Pennsylvania",
    type: "website",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scalable Tactile Sensing for Dexterous Manipulation",
    description: "IROS 2026 workshop · September 27, 2026 · Pittsburgh",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
