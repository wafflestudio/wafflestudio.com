import { AppProps } from 'next/app'
import reset from 'styled-reset'
import Header from '../components/Header'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { Colors } from '../util/constant'
import Footer from '../components/Footer'
import { useEffect } from 'react'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: Spoqa Han Sans Neo;
    background: ${Colors.backLight};
  }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href='https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css'
          rel='stylesheet'
          type='text/css'
        />
        <title>와플 홈피</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
