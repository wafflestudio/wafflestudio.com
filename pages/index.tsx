import styled from 'styled-components'

import SectionDivider from 'components/Common/SectionDivider'
import { Activities, Intro, Members, Services } from 'components/Home'
import Sponsors from 'components/Home/Sponsors'
import Head from 'next/head'

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="와플스튜디오" />
        <meta
          property="og:description"
          content="안녕하세요, 서울대학교 컴퓨터공학부 웹/앱 개발 동아리 와플스튜디오입니다."
        />
      </Head>
      <HomeWrapper>
        <Intro />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Activities />
        <SectionDivider />
        <Members />
        <SectionDivider />
        <Sponsors />
      </HomeWrapper>
    </>
  )
}

export default Home
