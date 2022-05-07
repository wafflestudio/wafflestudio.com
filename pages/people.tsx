import { Intro, Members } from 'components/People'
import Head from 'next/head'

const People = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="와플스튜디오 구성원" />
        <meta
          property="og:description"
          content="와플스튜디오와 함께하는 사람들"
        />
      </Head>
      <Intro />
      <Members />
    </>
  )
}

export default People
