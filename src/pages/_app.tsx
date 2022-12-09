import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SignatureContextProvider } from "../contexts/Signature";
import { AuthContextProvider } from "../contexts/auth";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SignatureContextProvider>
        <ToastContainer />
      <AuthContextProvider>

        <Component {...pageProps} />
      </AuthContextProvider>
    </SignatureContextProvider>
  );
}

export default MyApp;
