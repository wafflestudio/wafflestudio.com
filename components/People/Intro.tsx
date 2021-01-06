import Image from 'next/image'
import styled from 'styled-components'

const Box = styled.section`
  margin: 121px auto 0;
  display: flex;
  width: 762px;

  .title {
    margin-top: 122px;
  }
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;

  span {
    color: ${({ color }) => color};
  }
`

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #666665;
`

const Intro = () => (
  <Box>
    <div className="title">
      <Title color={'#F0975E'}>
        와플스튜디오의 <br />
        <span>멤버</span>를 소개합니다.
      </Title>
      <SubTitle>와플스튜디오와 함께하는 사람들</SubTitle>
    </div>
    <Image src="/images/people.svg" width='368' height='337' />
  </Box>
)

export default Intro
