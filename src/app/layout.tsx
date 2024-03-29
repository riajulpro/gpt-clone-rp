import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import DrawerContext from "@/context/DrawerContext";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ChatGPT Dashboard",
  description: "Generated by APIXcel Team - RiaJul Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DrawerContext>
          <article className="flex items-center justify-between h-screen">
            <Aside />
            <section className="flex flex-col justify-between items-center overflow-hidden w-full dark:bg-[#212121] h-[100vh]">
              <Header />
              <main className="w-full h-full niceScroll overflow-y-auto">
                {children}
              </main>
              <Footer />
            </section>
          </article>
        </DrawerContext>
      </body>
    </html>
  );
}
