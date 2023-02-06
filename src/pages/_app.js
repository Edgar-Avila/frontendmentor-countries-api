import '@/styles/globals.css'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
