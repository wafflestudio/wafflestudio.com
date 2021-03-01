import styled from 'styled-components'
import SectionTitle from 'components/Common/SectionTitle'
import dynamic from 'next/dynamic'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 780px;

  @media (max-width: 768px) {
    width: 80%;
  }
`

const DynamicCarousel = dynamic(() => import('./ServiceCarousel'))

const Services = () => {
  return (
    <Wrapper>
      <SectionTitle
        title="서비스"
        subTitle="와플스튜디오에서 제공하는 서비스를 만나보세요."
      />
      <DynamicCarousel />
    </Wrapper>
  )
}

export default Services
