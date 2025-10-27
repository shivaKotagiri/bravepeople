import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ReactLenis } from '@/utils/lenis';
import Provider from "@/components/ui/provider";

export const metadata: Metadata = {
  title: "Brave People",
  description: "Clone of bravepeople.co",
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
          rel="preload"
          href="/fonts/pp_mori.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/matrice-semibold.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`antialiased`}>
        <Provider>
          <ReactLenis root>
            <div className="flex justify-center pt-6">
              <Navbar />
              {children}
            </div>
          </ReactLenis>
        </Provider>
      </body>
    </html>
  );
}