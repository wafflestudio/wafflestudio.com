import styled from 'styled-components'

const TitleContainer = styled.section`
  display: flex;
  width: 820px;
  margin: 192px auto;
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
  width: 345px;

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
  margin: 300px auto;

  hr {
    border: 6px solid #f8f5f1;
  }
`

const Content = styled.article`
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

  div {
    display: flex;

    span {
      color: ${({ color }) => color};
    }

    h2 {
      font-size: 16px;
      line-height: 19.2px;
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
          <div>
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
          </div>
        </Content>
        <hr />
        <Content color={'#3578EA'}>
          <h1>와플스튜디오 페이스북</h1>
          <h2>와플스튜디오의 새소식이 올라오는 페이스북입니다</h2>
          <div>
            <>
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
            </>
          </div>
        </Content>
      </ContentContainer>
    </>
  )
}

export default Contact
