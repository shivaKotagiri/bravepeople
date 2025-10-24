import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

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
      <body
        className={`antialiased flex justify-center pt-6`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
