import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

 

export const metadata: Metadata = {
  title: "Aidefunding Inc.",
  description: "The #1 fundraising platform for crypto based projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <>
          <Toaster position="top-right" />
          {children}
        </>
      </body>
    </html>
  );
}
