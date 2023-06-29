import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

import '../styles/globals.css'
export const metadata: Metadata = {
  title: 'Boesen.dev',
  description: 'Made by Severi Boesen',
  keywords: 'coder, event manager, music producer, finnish, producer, tuottaja'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='\favicon.ico'/>
      </head>
      <body>{children}</body>
    </html>
  )
}
