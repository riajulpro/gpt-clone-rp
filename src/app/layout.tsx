import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import DrawerContext from "@/context/DrawerContext";

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
        <div className="flex flex-col lg:flex-row">
          <DrawerContext>
            <Nav />
            <div className="relative lg:w-full">
              <Header />
              {children}
            </div>
          </DrawerContext>
        </div>
      </body>
    </html>
  );
}
