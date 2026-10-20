import type { Metadata, Viewport } from "next";
import "@fontsource-variable/big-shoulders-display";
import "@fontsource-variable/hanken-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ezsocceradmin.com"),
  title: "EZ Soccer Admin | Admin support for youth soccer clubs",
  description:
    "Registration, rosters, player cards and paperwork handled for youth soccer clubs on GotSport and Sports Connect. We do the admin. You do the soccer.",
  openGraph: {
    title: "EZ Soccer Admin",
    description: "We do the admin. You do the soccer.",
    images: ["/logo-full.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2a4a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
