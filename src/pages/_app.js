import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Rest Countries API</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
