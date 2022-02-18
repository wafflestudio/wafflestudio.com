import { AppProps } from 'next/app'
import reset from 'styled-reset'
import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { Colors } from 'util/constant'
import { Header, Footer } from 'components'
import '../util/gtag.js'

const GlobalStyle = createGlobalStyle`
  ${reset}

  ul {
    list-style: disc;
  }

  ul ul {
    list-style: circle;
  }


  * {
    box-sizing: border-box;
  }
  
  html {
    height: 100%;
    margin: 0;
  }

  body {
    margin: 0;
    height: 100%;
    font-family: Spoqa Han Sans Neo;
    background: ${Colors.backLight};
  }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-205540392-1"
        ></script>
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
