import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Head from "next/head";
import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>StudiaTech</title>
      </Head>
      <div className="relative flex flex-col h-screen justify-between">
        <Navbar />
        <div className={'mb-auto w-full mx-auto'}>
          <Component {...pageProps} />;
        </div>
      <Footer />
      </div>
    </StateProvider>
  )
}
