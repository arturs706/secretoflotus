import './globals.css'
import Nav from './nav'
import localFont from 'next/font/local'

const krylon = localFont({ 
  src: "../public/Krylon-Regular.woff2",
  variable: '--font-krylon',
})

export const metadata = {
  title: 'Secret Of Lotus London Massage',
  description: 'Mobile massage service in London',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={krylon.className}>
        <Nav />
        {children}
      </body>
    </html>
    
  )
}
