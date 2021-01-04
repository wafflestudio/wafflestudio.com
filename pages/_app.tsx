import { AppProps } from 'next/app'
import reset from 'styled-reset'
import Header from '../components/Header'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: SpoqaHanSansNeo;
  }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        <title>와플 홈피</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
