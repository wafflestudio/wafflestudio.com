import styled from 'styled-components'

import SectionTitle from 'components/Common/SectionTitle'
import Sponsor from './Sponsor'
import { Colors } from 'util/constant'

const Wrapper = styled.section`
  width: 780px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

const SponsorsWrapper = styled.div`
  margin-top: 87px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 39px;
  }
`

const peoples = [
  { color: Colors.waffleLight, name: '김진억' },
  { color: Colors.waffleDark, name: '박면규' },
  { color: Colors.wafflePrimary, name: '한재화' },
  { color: Colors.waffleSecondary, name: '이승찬' },
]

const Sponsors = () => {
  return (
    <Wrapper>
      <SectionTitle
        title="도움 주시는 분들"
        subTitle="와플스튜디오 활동 진행에 후원해주시는 분들입니다."
      />
      <SponsorsWrapper>
        {peoples.map(({ color, name }) => (
          <Sponsor>
            <Sponsor.Rectangle color={color} />
            <Sponsor.Name>{name}</Sponsor.Name>
          </Sponsor>
        ))}
      </SponsorsWrapper>
    </Wrapper>
  )
}

export default Sponsors
