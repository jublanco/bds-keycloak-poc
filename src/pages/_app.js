import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import '../components/Navbar.css'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>)
}
