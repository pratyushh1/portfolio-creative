import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CinematicCursor from "@/components/CinematicCursor";

const aloevera = localFont({ 
  src: [
    {
      path: "../public/fonts/Aloevera-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Aloevera-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Aloevera-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Aloevera-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Aloevera-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Aloevera-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Aloevera-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Aloevera-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Aloevera-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: '--font-aloevera',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Pratyush | Video Editor × Photographer",
  description: "Visual storyteller with 6+ years creating compelling content for leading brands. Video editing for Tech Burner, Open Letter & photography for portraits, products, events.",
  keywords: ["video editor", "photographer", "professional editing", "content creator", "tech burner", "video production", "photography", "pratyush"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${aloevera.variable} font-sans bg-dark selection:bg-white selection:text-black`}>
        <CinematicCursor />
        
        {/* Global Cinematic Effects */}
        <div className="film-grain" />
        <div className="vignette" />
        
        <div className="relative min-h-screen">
          {/* Subtle Atmosphere Background */}
          <div className="fixed inset-0 -z-30 bg-dark" />
          
          <div className="fixed inset-0 -z-20 opacity-30">
             {/* Subtler gradient mesh */}
            <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-b from-neutral-900/40 to-transparent" />
            <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-neutral-900/30 to-transparent" />
          </div>
          
          <Navigation />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
