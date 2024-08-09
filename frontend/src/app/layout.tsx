"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient()


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <QueryClientProvider client={queryClient}>
        <div className="flex">
          <SideBar />
          <div className="flex-1">
            <Header />
            {children}
          </div>
        </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
