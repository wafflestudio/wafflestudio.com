import styled from 'styled-components'
import Image from 'next/image'
import { Colors } from 'util/constant'

const Wrapper = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
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
  @-moz-keyframes fadein { /* Firefox */
    from {
      opacity: 0;
      transform: translateY(15%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-webkit-keyframes fadein { /* Safari and Chrome */
    from {
      opacity: 0;
      transform: translateY(15%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @-o-keyframes fadein { /* Opera */
    from {
      opacity: 0;
      transform: translateY(15%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`

const IntroText1 = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: ${Colors.textDark};
`

const IntroText2 = styled.div`
  margin-top: 6px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: bold;
  color: ${Colors.textDark};
`

const IntroText3 = styled.div`
  display: flex;
  text-align: center;
  white-space: pre-line;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${Colors.textLight};
`

const HighlightText = styled.div`
  font-weight: bold;
  color: ${Colors.wafflePrimary};
`

const Intro = () => {
  return (
    <Wrapper>
      <Image src='/images/icon_intro.svg' alt='me' width='220' height='220' />
      <IntroText1>맛있는 서비스가 탄생하는 곳</IntroText1>
      <IntroText2>와플스튜디오</IntroText2>
      <IntroText3>여기는 서울대학교 컴퓨터공학부</IntroText3>
      <IntroText3>
        <HighlightText>웹/앱 개발 동아리&nbsp;</HighlightText> 와플스튜디오입니다.
      </IntroText3>
    </Wrapper>
  )
}

export default Intro