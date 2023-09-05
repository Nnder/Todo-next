import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/src/5_shared/ui/navbar/Navbar";
import Footer from "@/src/5_shared/ui/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo app',
  description: 'Great todo app written with fsd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
