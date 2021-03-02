import Image from 'next/image'
import styled from 'styled-components'

const Box = styled.section`
  margin: 121px auto 0;
  display: flex;
  width: 762px;

  .title {
    margin-top: 122px;
  }

  animation: fadein 1s;
  -moz-animation: fadein 1s; /* Firefox */
  -webkit-animation: fadein 1s; /* Safari and Chrome */
  -o-animation: fadein 1s; /* Opera */

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(15%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
      transform: translateY(15%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
      transform: translateY(15%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
      transform: translateY(15%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    width: 90%;
    margin-top: 100px;
    margin-bottom: 100px;
    align-items: center;
    .title {
      margin-top: 10px;
    }
  }
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;

  span {
    color: ${({ color }) => color};
  }

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 45px;
  }
`

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #666665;

  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 24px;
    line-height: 24px;
  }
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
    <Image src="/images/people.svg" width="368" height="337" />
  </Box>
)

export default Intro
