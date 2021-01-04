import { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import Header from '../components/Header'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css' rel='stylesheet' type='text/css' />
        <title>
          와플 홈피
        </title>
      </Head>
      <Reset />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App