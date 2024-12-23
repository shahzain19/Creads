import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import '../globals.css'

export const metadata = {
    title: 'Creads',
    description:"Creads is a platform clone of a popular app by META named Threads"
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children
} : {
    children : React.ReactNode
}){
    return (
    <ClerkProvider>
        <html lang="en">
            <body className={`${inter.className} bg-dark-1`}>
                {
                    children
                }
            </body>
        </html>
    </ClerkProvider>
    )
}