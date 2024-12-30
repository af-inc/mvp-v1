"use client";

import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { usePathname } from "next/navigation";
import Header from "./dashboard/Header";
// export const metadata: Metadata = {
//   title: "Aidefunding Inc.",
//   description: "The #1 fundraising platform for crypto-based projects.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <html lang="en">
      <body>
      <Header />
        <SidebarProvider>
          {isDashboard && (
            <>
              <AppSidebar />
              <SidebarTrigger />

            </>
          )}
          <Toaster position="top-right" />
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
