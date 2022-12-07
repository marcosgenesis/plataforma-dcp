import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SignatureContextProvider} from '../contexts/Signature'
import {AuthContextProvider} from '../contexts/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SignatureContextProvider>
      <AuthContextProvider>

      <Component {...pageProps} />
      </AuthContextProvider>
    </SignatureContextProvider>
  )
}

export default MyApp
