import Footer from "@/components/footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Мэргэжил сонголтын онлайн тест",
  description: "Цахим тест лаборатори",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="container px-5 py-5 mx-auto flex justify-center flex-wrap bg-gray-100">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
