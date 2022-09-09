import styled from 'styled-components'

import SectionTitle from 'components/Common/SectionTitle'
import Sponsor from './Sponsor'
import { Colors } from 'util/constant'
import Image from 'next/image'

const Wrapper = styled.section`
  width: 780px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

const SponsorsWrapper = styled.div`
  margin-top: 67px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 39px;
  }
`

const StyledSponsorCard = styled(Sponsor)`
  flex: 1;

  @media (max-width: 768px) {
    flex: auto;
  }
`

const peoples = [
  { color: Colors.waffleLight, name: '김진억' },
  { color: Colors.waffleDark, name: '박면규' },
  { color: Colors.wafflePrimary, name: '한재화' },
  { color: Colors.waffleSecondary, name: '이승찬' },
]

const companies = [
  {
    image: '/images/tada_logo.png',
    name: 'vcnc',
    link: 'https://tadatada.com/',
  },
]

const Sponsors = () => {
  return (
    <Wrapper>
      <SectionTitle
        title="도움 주시는 분들"
        subTitle="와플스튜디오 활동 진행에 후원해주시는 분들입니다."
      />
      <SponsorsWrapper>
        {peoples.map(({ color, name }, i) => (
          <StyledSponsorCard key={`people_${i}`}>
            <Sponsor.Rectangle color={color} />
            <Sponsor.Name>{name}</Sponsor.Name>
          </StyledSponsorCard>
        ))}
        {companies.map(({ image, name, link }, i) => (
          <StyledSponsorCard key={`company_${i}`}>
            <Sponsor.Rectangle as="a" href={link} target="_blank">
              <Image src={image} layout="fill" />
            </Sponsor.Rectangle>
            <Sponsor.Name>{name}</Sponsor.Name>
          </StyledSponsorCard>
        ))}
      </SponsorsWrapper>
    </Wrapper>
  )
}

export default Sponsors
