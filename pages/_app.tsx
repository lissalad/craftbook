import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./components/Header";
import { atom, Provider, useAtom } from "jotai";

export const menuOpenAtom = atom(true);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Header />
      <div className="mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

// zustand: simplified redux
// jotai: global usestate
