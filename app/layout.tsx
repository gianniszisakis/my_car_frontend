import type { Metadata } from "next";
import Navbar from "@/components/navbar/navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "My Car",
  description: "Every action about your car maintenance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
