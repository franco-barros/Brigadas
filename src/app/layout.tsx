import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { Toaster } from "react-hot-toast";

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

        {/* 🔥 React Hot Toast */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerStyle={{
            top: 20,
          }}
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "14px",
              background: "#ffffff",
              color: "#003d42",
              padding: "14px 18px",
              fontWeight: 500,
              boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            },
            success: {
              iconTheme: {
                primary: "#0f9d58",
                secondary: "#ffffff",
              },
              style: {
                border: "1px solid rgba(15,157,88,0.25)",
              },
            },
            error: {
              iconTheme: {
                primary: "#d93025",
                secondary: "#ffffff",
              },
              style: {
                border: "1px solid rgba(217,48,37,0.25)",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
