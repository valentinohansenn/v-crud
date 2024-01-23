import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Toaster} from "sonner";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create | Read | Update | Delete',
    description: 'CRUD Implementation with DummyJSON',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen bg-white`}>
        <Header/>
        {children}
        <Toaster/>
        <Footer/>
        </body>
        </html>
    )
}

