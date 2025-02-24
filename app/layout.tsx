"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import Navbar from "@/components/navbar/navbar";

import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Ensure the QueryClient persists across re-renders
  const [client] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={client}>
          <Navbar />
          <main>{children}</main>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
