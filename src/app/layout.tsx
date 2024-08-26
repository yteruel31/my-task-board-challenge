import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/_header/header";
import { TooltipProvider } from "@/components/_ui/Tooltip";

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
          <Header />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
