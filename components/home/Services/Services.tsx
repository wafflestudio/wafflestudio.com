import styled from 'styled-components'
import SectionTitle from '../../SectionTitle'
import ServiceItem from './ServiceItem'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 780px;
`


const Services = () => {
  return (
    <Wrapper>
      <SectionTitle title='서비스' subTitle='와플스튜디오에서 제공하는 서비스를 만나보세요.' />
      <ServiceItem />
    </Wrapper>
  )

}

export default Services