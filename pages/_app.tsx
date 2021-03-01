import { AppProps } from 'next/app'
import reset from 'styled-reset'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { Colors } from 'util/constant'
import { Header, Footer } from 'components'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;

  }

  body {
    height: 100%;
    font-family: Spoqa Han Sans Neo;
    background: ${Colors.backLight};
  }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />
        <title>와플스튜디오</title>
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
