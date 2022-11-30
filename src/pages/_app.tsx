import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SignatureContextProvider} from '../contexts/Signature'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SignatureContextProvider>
      <Component {...pageProps} />
    </SignatureContextProvider>
  )
}

export default MyApp
