import Footer from "@/components/global/footer/footer";
import Navbar from "@/components/global/navbar/navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Squirrel | Instagram Bot - Automate & Grow",
  description:
    "Boost your Instagram sales with Squirrel, the intelligent sales bot. Automate DMs, engage customers, collect leads, and drive conversions effortlessly.",
  keywords:
    "Instagram sales bot, Instagram automation, social media marketing, lead generation, chatbot, The Squirrel, thesquirrel.tech, smartinsta, automated DMs, sales growth",
  openGraph: {
    title: "The Squirrel | Instagram Bot - Automate & Grow",
    description:
      "Transform your Instagram engagement into sales with The Squirrel's smart automation.",
    images: [
      // Add an image URL for social sharing previews
      {
        url: "/assets/images/productShowcase.png",
        width: 1200,
        height: 630,
        alt: "Squirrel Instagram Sales Bot",
      },
    ],
    siteName: "The Squirrel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Squirrel | Instagram Sales Bot - Automate & Grow",
    description:
      "Boost your Instagram sales with Squirrel, the intelligent sales bot.",
    images: [
      "/assets/images/productShowcase.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
      
      </head>
      <body className={"bg-white text-black dark:bg-black dark:text-white"}>
        {/* Make sure Navbar and Footer components exist and are correctly imported */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
