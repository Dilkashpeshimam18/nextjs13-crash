import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from './components/Header/Header'

const poppins=Poppins({
  weight:['400','700'],
  subsets:['latin']
})
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJs Crash Course',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header />
      <main className='container'>{children}</main></body>
    </html>
  )
}
