import Footer from "@/components/Footer";
import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className={'mb-auto w-full mx-auto'}>
        <Component {...pageProps} />;
      </div>

      <Footer />
    </StateProvider>
  )
}
