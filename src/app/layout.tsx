import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Brigadas Educativas",
    template: "%s | Brigadas Educativas",
  },
  description:
    "Proyecto de Brigadas Educativas enfocado en la formación, acompañamiento y apoyo escolar comunitario.",
  icons: {
    icon: "/icons/LibroIcono.png",
  },
  openGraph: {
    title: "Brigadas Educativas",
    description:
      "Formación, acompañamiento y apoyo escolar desde una mirada comunitaria.",
    siteName: "Brigadas Educativas",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
