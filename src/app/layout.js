import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistMont = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-geist-mont",
  weight: "100 900",
});

export const metadata = {
  // General Meta Tags
  title:
    "PrimeWave Web Design, Development & Branding Solutions | Tailored Websites for Contractors & Home Remodelers",
  description:
    "PrimeWave offers specialized web design services for kitchen remodelers, bathroom renovators, flooring installers, and home improvement professionals. Transform your online presence and attract more clients.",
  keywords: [
    "web design for contractors",
    "web design for remodelers",
    "web design for home designers",
    "kitchen remodeling web design",
    "bathroom renovation web design",
    "flooring installation website",
    "home painting web design",
    "landscaping design web services",
    "energy-efficient home improvements website",
    "accessibility modifications website design",
    "USA web design contractors",
    "websites for home improvement professionals",
  ],
  applicationName: "PrimeWave Web Design",
  robots: "index, follow",
  language: "en-US",
  // Open Graph Meta Tags for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "PrimeWave Web Design | Custom Websites for Remodelers & Home Designers",
    description:
      "We specialize in creating stunning, high-conversion websites for kitchen remodelers, bathroom renovators, flooring installers, home painters, and more. Elevate your business with a professional online presence.",
    url: "https://primewave-solutions.vercel.app",
    siteName: "PrimeWave Web Design",
    images: [
      {
        url: "https://primewave-solutions.vercel.app", // Example image URL, update with your actual one
        width: 1200,
        height: 630,
        alt: "PrimeWave Web Design for Contractors",
      },
    ],
  },
  // Twitter Card Meta Tags for Twitter sharing
  twitter: {
    card: "summary_large_image",
    site: "@naymHdev", // Update with your actual Twitter handle
    title:
      "PrimeWave Web Design | Stunning Websites for Home Improvement Professionals",
    description:
      "PrimeWave provides professional web design services for contractors and home designers, including kitchen remodelers, bathroom renovators, and more.",
    image: "https://primewave-solutions.vercel.app", // Example image URL
  },
  // Schema.org structured data for better SEO
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PrimeWave Web Design",
    url: "https://primewave-solutions.vercel.app",
    logo: "https://primewave-solutions.vercel.app", // Example logo URL
    description:
      "PrimeWave Web Design offers tailored web design services for contractors, remodelers, and home improvement professionals in the USA, including kitchen remodeling, bathroom renovation, flooring installation, and more.",
    sameAs: [
      "https://web.facebook.com/naymHdev",
      "https://twitter.com/naymHdev",
      "https://www.linkedin.com/in/naymhdev",
      "https://www.instagram.com/remodelwithnaym",
    ],
    address: {
      "@type": "90213",
      addressCountry: "USA",
      addressRegion: "California",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+880 01770064053", // Replace with your contact info
      contactType: "Customer Support",
      areaServed: "US",
      availableLanguage: ["English"],
    },
  },
  // Additional Meta Tags
  author: "PrimeWave Solutions",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags will automatically be generated based on the metadata object */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geistMont.variable} antialiased font-montserrat`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
