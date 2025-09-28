import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
