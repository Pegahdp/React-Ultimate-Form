import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence initial={false} mode="wait">
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  );
}
