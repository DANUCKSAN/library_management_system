import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const ibmPlexSans = localFont({
  src: [
    {
      path: "/fonts/IBMPlexSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
path: "/fonts/IBMPlexSans-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
path: "/fonts/IBMPlexSans-semiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/IBMPlexSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const bebasNeue = localFont({
  src: [
    {
      path: "/fonts/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "Bookwise",
  description: "A simple book management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
