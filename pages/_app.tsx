import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Header />
      <div className="px-4 py-4 mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
