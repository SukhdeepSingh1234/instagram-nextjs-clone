import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Instagram',
  description: 'Created by Sukhdeep Singh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          {/* Add the updated favicon link */}
          <link rel="icon" href="/favicon.ico" />
        </head>
      <body className={inter.className}>{children}</body>

    </html>
  )
}
