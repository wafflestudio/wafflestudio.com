import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { SectionDivider } from 'components/Common'

const TitleContainer = styled.section`
  display: flex;
  width: 820px;
  margin: 192px auto;

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
`

const Address = styled.section`
  width: 446px;
  font-size: 28px;
  line-height: 25px;

  .left {
    color: #fffefc;
    background-color: #ed8573;
  }

  .right {
    text-align: right;
    color: #ed8573;
    background-color: #fffefc;
  }
`

const Title = styled.section`
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 400px;

  h1 {
    line-height: 60px;
    font-weight: 700;
    font-size: 50px;
  }

  .text-orange {
    color: #ed8573;
  }

  h2 {
    line-height: 24px;
    font-weight: 400;
    font-size: 20px;
    color: #666665;
  }
`

const ContentContainer = styled.section`
  width: 780px;
  margin: 200px auto;
`

const Content = styled.article`
  margin: 100px 0 100px;

  h1 {
    line-height: 28.8px;
    font-weight: 700;
    font-size: 24px;
  }

  h2 {
    line-height: 24px;
    font-weight: 400;
    font-size: 20px;
    color: #666665;
  }
`

const Description = styled.div`
  display: flex;
  margin-top: 30px;

  .text {
    width: 254px;
    height: 192px;

    margin: 31px 40px 0 13px;

    &.left {
      text-align: right;
    }

    span {
      color: ${({ color }) => color};
    }

    h2 {
      margin: 20px 0;
      font-size: 16px;
      line-height: 19.2px;
    }

    button {
      width: 254px;
      height: 56px;
      background: ${({ color }) => color};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 12px;
      border-color: transparent;
      font-weight: 700;
      font-size: 24px;
      line-height: 52px;
      text-align: center;
      color: #fffefc;
    }
  }
`

const Contact = () => {
  return (
    <>
      <TitleContainer>
        <Address>
          <p className="left">MASTER@WAFFLESTUDIO.COM</p>
          <p className="left">RECRUIT@WAFFLESTUDIO.COM</p>
          <p className="left">WWW.WAFFLESTUDIO.COM</p>
          <p className="right">MASTER@WAFFLESTUDIO.COM</p>
          <p className="right">RECRUIT@WAFFLESTUDIO.COM</p>
          <p className="right">WWW.WAFFLESTUDIO.COM</p>
        </Address>
        <Title>
          <h1>
            와플스튜디오에
            <br />
            <span className="text-orange">연락</span>하세요
          </h1>
          <h2>와플스튜디오와 함께하실 분들을 찾습니다.</h2>
        </Title>
      </TitleContainer>
      <ContentContainer>
        <Content color={'#ED8573'}>
          <h1>와플스튜디오 동아리방</h1>
          <h2>
            서울대학교 301동 314호 내부에 위치한 와플스튜디오 동아리방 입니다.
          </h2>
          <Description color={'#ED8573'}>
            <div className="text left">
              <h1>
                <span>동아리방</span>으로
                <br />
                찾아오세요
              </h1>
              <h2>
                컴퓨터공학부 과방 모퉁이에
                <br />
                동아리방이 있습니다.
              </h2>
              <Link href={'https://www.naver.com'} passHref>
                <button>지도 바로가기</button>
              </Link>
            </div>
            <Image src="/images/map.png" alt="Map" width="447" height="259" />
          </Description>
        </Content>
        <SectionDivider />
        <Content color={'#3578EA'}>
          <h1>와플스튜디오 페이스북</h1>
          <h2>와플스튜디오의 새소식이 올라오는 페이스북입니다</h2>
          <Description color={'#3578EA'}>
            <Image
              src="/images/facebook.png"
              alt="Map"
              width="447"
              height="259"
            />
            <div className="text right">
              <h1>
                <span>페이스북</span>을
                <br />
                팔로우 하세요
              </h1>
              <h2>
                와플스튜디오의 새 소식을
                <br />
                빠르게 만날 수 있습니다.
              </h2>
              <Link href={'https://www.naver.com'} passHref>
                <button>페이지 바로가기</button>
              </Link>
            </div>
          </Description>
        </Content>
      </ContentContainer>
    </>
  )
}

export default Contact
