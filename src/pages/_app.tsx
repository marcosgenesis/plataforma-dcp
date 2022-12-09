import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SignatureContextProvider } from "../contexts/Signature";
import { AuthContextProvider } from "../contexts/auth";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <SignatureContextProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </SignatureContextProvider>
    </AuthContextProvider>
  )
}

export default MyApp;
