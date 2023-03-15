import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Header />
      <div className="md:max-w-[1200px] mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
