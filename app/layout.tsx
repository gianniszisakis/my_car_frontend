"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import Navbar from "@/components/navbar/navbar";
import { Toaster } from "@/components/ui/toaster";
import { usePathname } from "next/navigation";

import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ProfileProvider } from "@/context/ProfileContext";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Ensure the QueryClient persists across re-renders
  const [client] = useState(() => new QueryClient());
  const pathname = usePathname();

  //hide the navbar when user is not logged in
  const isLoginPage = pathname === "/login";
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          <QueryClientProvider client={client}>
            <ProfileProvider>
              {!isLoginPage && <Navbar />}
              <main>{children}</main>
              <Toaster />
            </ProfileProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
