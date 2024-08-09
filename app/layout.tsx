import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import 'tailwindcss/tailwind.css';
import Head from 'next/head';

export const metadata = {
  title: 'Codylio',
  description: 'A Software Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="512x512" href="/assets/logo/codylio-512x512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/logo/codylio-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/logo/codylio-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/logo/codylio-16x16.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
