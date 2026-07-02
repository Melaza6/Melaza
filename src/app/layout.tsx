import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://melazausa.com"),
  title: {
    default: "Melaza | Business Systems, Digital Solutions, Growth Consulting",
    template: "%s | Melaza",
  },
  description:
    "Melaza helps small businesses organize operations, improve processes, build digital tools, and grow across the U.S. and Colombia.",
  openGraph: {
    title: "Melaza",
    description:
      "Business systems, digital solutions, and growth consulting for small businesses in the U.S. and Colombia.",
    url: "https://melazausa.com",
    siteName: "Melaza",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
