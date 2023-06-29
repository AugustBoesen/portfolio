import type { AppProps } from 'next/app'
import Head from "next/head";



export default function MyApp({ Component, pageProps }: AppProps) {
    <Head>
    <meta name="keywords" content="titla, meta, nextjs" />
    <meta name="author" content="Syamlal CM" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
  return <Component {...pageProps} />
}