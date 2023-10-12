import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learn Next.js 13 With This One Project',
  description: 'reference from https://www.youtube.com/watch?v=NgayZAuTgwM&ab_channel=WebDevSimplified',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-Hant">
      <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}>{children}</body>
    </html>
  )
}
