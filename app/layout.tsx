import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const ubuntu = localFont({
  src: [
    {
      path: "../public/fonts/Ubuntu-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../public/fonts/Ubuntu-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../public/fonts/Ubuntu-Regular.ttf",
      style: "normal",
      weight: "400",
    },
  ],
});

export const metadata: Metadata = {
  title: "Multi-step Form",
  description:
    "A responsive multi-step form challenge solution built with Next.js, TypeScript, Tailwind CSS, and React Hook Form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntu.className} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
