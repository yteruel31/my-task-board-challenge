import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/_header/header";
import { TooltipProvider } from "@/components/_ui/Tooltip";
import { ProgressBarProvider } from "@/components/_ui/ProgressBarProvider";
import { Toaster } from "@/components/_ui/Toaster";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";

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
      <body className={cn("min-h-screen antialiased", outfit.className)}>
        <TooltipProvider>
          <ProgressBarProvider>
            <Header />
            {children}
            <Footer />
          </ProgressBarProvider>
        </TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
