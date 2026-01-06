import type { Metadata } from "next";
import { Fredoka, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./style/globals.css";

const fredoka = Fredoka({
  variable: "--font-Fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata = {
  title: "Organics by Appa – You Deserve The Purest Crunch | Handmade Natural Snacks",
  description:
    "Discover wholesome, natural nutrition made simple and tasty. Handcrafted Golden Panjeeri, Nutty Makhana Crunch, and Chewy Granola Bars with authentic flavors, natural ingredients, and freshness you can taste. 100% honest, 100% homemade.",
  keywords: [
    "Organics by Appa",
    "Golden Panjeeri",
    "Nutty Makhana Crunch",
    "Chewy Granola Bars",
    "handmade snacks",
    "natural organic snacks",
    "homemade panjeeri",
    "authentic flavors",
    "natural ingredients",
    "organic food",
    "healthy snacks",
    "homemade food",
  ],
  icons: {
    icon: [
      { url: "/favicon-icon/favicon.ico", sizes: "any" },
      { url: "/favicon-icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-icon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-icon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/favicon-icon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/favicon-icon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/favicon-icon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/favicon-icon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/favicon-icon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/favicon-icon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon-icon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/favicon-icon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon-icon/apple-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon-icon/apple-icon-precomposed.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      // Android icons
      {
        rel: "icon",
        url: "/favicon-icon/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-icon/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-icon/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-icon/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-icon/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-icon/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      // Microsoft tile icons
      {
        rel: "icon",
        url: "/favicon-icon/ms-icon-70x70.png",
        sizes: "70x70",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-icon/ms-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-icon/ms-icon-150x150.png",
        sizes: "150x150",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon-icon/ms-icon-310x310.png",
        sizes: "310x310",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Organics by Appa – You Deserve The Purest Crunch",
    description:
      "Handmade, wholesome snacks crafted with care. Golden Panjeeri, Nutty Makhana Crunch, and Chewy Granola Bars made from the finest natural ingredients. 100% honest, 100% homemade, trusted by families every day.",
    url: "https://organicsbyappa.com",
    siteName: "Organics by Appa",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${fredoka.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
