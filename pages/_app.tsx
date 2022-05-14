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
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wafflestudio.com" />
        <meta
          property="og:image"
          content="https://wafflestudio.com/images/og-image.png"
        />
        <meta property="og:site_name" content="와플스튜디오" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <title>와플스튜디오</title>
        <meta
          name="description"
          content="여기는 서울대학교 컴퓨터공학부 웹/앱 개발 동아리 와플스튜디오입니다."
        />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
