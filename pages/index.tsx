import styled from 'styled-components'
import SectionDivider from 'components/Common/SectionDivider'
import { Activities, Intro, Members, Services } from 'components/Home'

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <HomeWrapper>
      <Intro />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Activities />
      <SectionDivider />
      <Members />
    </HomeWrapper>
  )
}

export default Home
