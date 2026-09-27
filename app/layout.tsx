import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-logo",
  weight: ["800", "900"],
  subsets: ["latin"],
});

const siteUrl = "https://mercadinhodogiovan.com.br";
const title = "Mercadinho do Giovan | O seu mercadinho de confiança do dia a dia";
const description =
  "Qualidade e preço justo no seu dia a dia. Fale conosco pelo WhatsApp e conheça o Mercadinho do Giovan em Reserva - PR.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon-180x180.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Mercadinho do Giovan",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mercadinho do Giovan",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
