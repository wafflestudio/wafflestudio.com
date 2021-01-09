import styled from 'styled-components'
import Intro from '../components/home/Intro/Intro'
import SectionDivider from '../components/common/SectionDivider'
import Activities from '../components/home/Activities/Activities'
import Services from '../components/home/Services/Services'
import Members from '../components/home/Members/Members'

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