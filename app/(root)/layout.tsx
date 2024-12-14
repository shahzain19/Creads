import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";
import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import RightSideBar from "@/components/shared/RightSideBar";
import LeftSideBar from "@/components/shared/LeftSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creads",
    description:"Creads is a platform clone of a popular app by META named Threads",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    >
      <html lang='en'>
        
        <body className={`${inter.className}`}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSideBar />

            <section className="main-container">
              <div className="w-full max-w-4x1">

                {
                  children
                }

              </div>
            </section>

            <RightSideBar />
          </main>

          <Bottombar />
          </body>
      </html>
    </ClerkProvider>
  );
}