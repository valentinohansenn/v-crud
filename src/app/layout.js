"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Inter} from "next/font/google";
import {Toaster} from "sonner";
import "./globals.css";

const inter = Inter({subsets: ["latin"]});

// export const metadata = {
//   title: "Create | Read | Update | Delete",
//   description: "CRUD Implementation with DummyJSON",
// };

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} flex flex-col min-h-screen bg-white`}
        >
        <Header/>
        {children}
        <Toaster/>
        <Footer/>
        </body>
        </html>
    );
}
