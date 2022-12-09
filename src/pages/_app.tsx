import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SignatureContextProvider} from '../contexts/Signature'
import {AuthContextProvider} from '../contexts/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <SignatureContextProvider>
        <Component {...pageProps} />
      </SignatureContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp
