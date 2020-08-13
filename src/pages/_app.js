import Head from 'next/head'
import { CSSReset, ThemeProvider } from '@chakra-ui/core'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Meow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
