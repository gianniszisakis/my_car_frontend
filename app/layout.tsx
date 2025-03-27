"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Ensure the QueryClient persists across re-renders
  const [client] = useState(() => new QueryClient());
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <QueryClientProvider client={client}>
            <Navbar />
            <main>{children}</main>
            <Toaster />
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
