import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import '@/styles/globals.css'
import Head from "next/head";
import { useRouter } from "next/router";


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>StudiaTech</title>
      </Head>
      <div className="relative flex flex-col h-screen justify-between">
        <Navbar />
        <div className={'mb-auto w-full mx-auto ${router.pathname !== "/" ? "mt-36" : ""}'}
        >
          <Component{...pageProps} />;
        </div>
        <Footer />
        </div>
        </StateProvider>
  );
}