import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CinematicCursor from "@/components/CinematicCursor";

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Pratyush | Professional Video Editor",
  description: "Experienced video editor with 6+ years creating compelling content for leading brands and creators. Specializing in dynamic editing, visual storytelling, and multi-platform content.",
  keywords: ["video editor", "professional editing", "content creator", "tech burner", "video production", "youtube editor", "pratyush"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${bebasNeue.variable} font-sans`}>
        <CinematicCursor />
        <div className="relative min-h-screen">
          {/* Animated gradient background with multiple layers */}
          <div className="fixed inset-0 -z-20 bg-dark" />
          <div className="fixed inset-0 -z-20">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-slate-900/20 to-dark" />
            <div className="absolute inset-0 bg-gradient-to-tl from-dark via-slate-800/20 to-dark" />
          </div>
          <div className="fixed inset-0 -z-10 bg-glow-gradient opacity-50 animate-gradient-shift" 
               style={{ backgroundSize: '200% 200%' }} />
          
          {/* Additional atmospheric layers */}
          <div className="fixed top-0 left-1/4 w-96 h-96 bg-slate-700/10 rounded-full blur-3xl animate-float -z-10" />
          <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-slate-600/10 rounded-full blur-3xl animate-float-slow -z-10" />
          
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
