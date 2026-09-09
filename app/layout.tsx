import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MJ Travels | Your Journey, Our Priority",
  description:
    "Reliable Pune to Mumbai Airport cab service. Safe, comfortable and on-time rides with professional drivers. Book now!",
  keywords:
    "Pune to Mumbai Airport cab, cab service Pune, airport transfer Pune, MJ Travels, outstation cab Pune",
  openGraph: {
    title: "MJ Travels | Your Journey, Our Priority",
    description: "Reliable Pune to Mumbai Airport cab service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/fevicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/fevicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
