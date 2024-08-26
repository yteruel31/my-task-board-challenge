import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/_header/header";
import { TooltipProvider } from "@/components/_ui/Tooltip";
import { ProgressBarProvider } from "@/components/_ui/ProgressBarProvider";
import { Toaster } from "@/components/_ui/Toaster";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Task board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <TooltipProvider>
          <ProgressBarProvider>
            <Header />
            {children}
          </ProgressBarProvider>
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
