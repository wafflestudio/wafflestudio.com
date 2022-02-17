import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import SectionDivider from 'components/Common/SectionDivider'
import SectionTitle from 'components/Common/SectionTitle'

const TitleContainer = styled.section`
  display: flex;
  width: 820px;
  margin: 192px auto 100px auto;
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
    flex-direction: column;
    width: 90%;
    margin-top: 150px;
    margin-bottom: 100px;
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
  @media (max-width: 768px) {
    width: 95%;
    margin: 0 auto;
    font-size: 20px;
    line-height: 24px;
    font-weight: 100;
  }
`

const Title = styled.div`
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
  @media (max-width: 768px) {
    width: 100%;
    h1 {
      font-size: 48px;
      line-height: 50px;
    }
    h2 {
      font-size: 30px;
      line-height: 36px;
    }
    margin-left: auto;
  }
`
const ContentContainer = styled.div`
  width: 780px;
  margin: 100px auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`

const ContentTitle = styled.div`
  margin: 100px 0 50px;
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
  @media (max-width: 768px) {
    margin: 50px 0 50px;
    h1 {
      line-height: 56px;
      font-size: 52px;
    }
    h2 {
      line-height: 40px;
      font-size: 36px;
    }
  }
`

const ContentMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    margin: 0 auto;
    height: 259px;
  }
`

const SubTitleContainer = styled.div`
  h1 {
    line-height: 28.8px;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
  }
  h2 {
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    color: #666665;
  }
  @media (max-width: 768px) {
    h1 {
      text-align: center;
      line-height: 36px;
      font-size: 34px;
    }
    h2 {
      text-align: center;
      line-height: 24px;
      font-size: 20px;
    }
  }
`

const ButtonContainer = styled.div`
  button {
    margin-top: 16px;
    width: 254px;
    height: 56px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    border-color: transparent;
    font-weight: 700;
    font-size: 24px;
    line-height: 52px;
    text-align: center;
    color: #fffefc;
  }
  @media (max-width: 768px) {
    button {
      width: 254px;
      height: 56px;
      margin-top: 30px;
      font-size: 20px;
    }
  }
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  @media (max-width: 768px) {
    align-items: center;
  }
`
const Content = styled.div<{ text: string; color: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //sending props
  ${ButtonContainer} {
    button {
      background: ${(props) => props.color};
    }
  }
  ${SubTitleContainer} {
    span {
      color: ${(props) => props.color};
    }
  }
  ${SubTitleContainer} {
    text-align: ${(props) => (props.text === 'right' ? 'left' : 'right')};
  }
  @media (max-width: 768px) {
    ${ContentMain} {
      flex-direction: ${(props) =>
        props.text === 'right' ? 'column' : 'column-reverse'};
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
          <h2>와플스튜디오와 함께하실 분들을 찾습니다</h2>
        </Title>
      </TitleContainer>

      <ContentContainer>
        <Content text="left" color={'#ED8573'}>
          <SectionTitle
            title="와플스튜디오 동아리방"
            subTitle="서울대학교 301동 314호 내부에 위치한 와플스튜디오 동아리방 입니다."
          />
          <ContentMain>
            <Description>
              <SubTitleContainer>
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
              </SubTitleContainer>
              <ButtonContainer>
                <a
                  href={
                    'https://m.map.naver.com/search2/site.naver?query=서울대학교%20공과대학&sm=hty&style=v5&code=18714325#/map'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>지도 바로가기</button>
                </a>
              </ButtonContainer>
            </Description>
            <Image
              src="/images/icon_intro.svg"
              alt="Map"
              width="447"
              height="259"
            />
          </ContentMain>
        </Content>
        <SectionDivider />
        <Content text="right" color={'#3578EA'}>
          <SectionTitle
            title="와플스튜디오 인스타그램"
            subTitle="와플스튜디오의 새소식이 올라오는 인스타그램입니다"
          />
          <ContentMain>
            <img src="/images/instagram.png" alt="Instagram" />
            <Description>
              <SubTitleContainer>
                <h1>
                  <span>인스타그램</span>을
                  <br />
                  팔로우 하세요
                </h1>
                <h2>
                  와플스튜디오의 새 소식을
                  <br />
                  빠르게 만날 수 있습니다.
                </h2>
              </SubTitleContainer>
              <ButtonContainer>
                <a
                  href={'https://www.instagram.com/wafflestudio_official/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>페이지 바로가기</button>
                </a>
              </ButtonContainer>
            </Description>
          </ContentMain>
        </Content>
      </ContentContainer>
    </>
  )
}

export default Contact
