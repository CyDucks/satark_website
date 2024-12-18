import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })

export const metadata = {
  title: 'Satark - Your Personal Safety Companion',
  description: 'Real-time safety scores, crime heatmaps, and alerts to keep you informed and protected.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-gray-900`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}