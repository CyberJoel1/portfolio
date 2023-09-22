import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Favicon from '/public/next.svg';

import { icons } from 'lucide-react';


const inter = Inter({ subsets: ['latin'] })

 


export const metadata: Metadata = {
  title: { default: "PortfolioJVE", template: "%s | My Website"},
  description: 'Generated by create next app',
  icons: {
    icon: '/favicon.ico'
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${inter}`}>{children}</body>
    </html>
  )
}
