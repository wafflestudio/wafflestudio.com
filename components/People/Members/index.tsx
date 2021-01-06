import Member from './Member'
import styled from 'styled-components'

const Box = styled.section`
  margin: 84px auto;
  width: 762px;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: #111111;
`

const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #666665;
`

const MembersWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 59px 0;
  flex-wrap: wrap;
`

const Members = () => (
  <Box>
    <Title>와플스튜디오 구성원</Title>
    <SubTitle>와플스튜디오의 전 / 현 구성원 입니다.</SubTitle>
    <MembersWrapper>
      <Member
        name={'김상민'}
        githubId={'sanggggg'}
        position={'Android Developer'}
        introduction={'사람에 대한 소개'}
        links={{
          github: 'https://www.naver.com',
          facebook: 'https://www.naver.com',
          web: 'https://www.naver.com',
          instagram: 'https://www.naver.com',
        }}
      />
      <Member 
      name={"김상민"}
      githubId={"sanggggg"}
      position={"Android Developer"}
      introduction={"사람에 대한 소개"}
      links={{
        github: "https://www.naver.com",
        facebook: "https://www.naver.com",
        web: "https://www.naver.com",
        instagram: "https://www.naver.com"
      }}

      />
      <Member 
      name={"김상민"}
      githubId={"sanggggg"}
      position={"Android Developer"}
      introduction={"사람에 대한 소개"}
      links={{
        github: "https://www.naver.com",
        facebook: "https://www.naver.com",
        web: "https://www.naver.com",
        instagram: "https://www.naver.com"
      }}

      />
      <Member 
      name={"김상민"}
      githubId={"sanggggg"}
      position={"Android Developer"}
      introduction={"사람에 대한 소개"}
      links={{
        github: "https://www.naver.com",
        facebook: "https://www.naver.com",
        web: "https://www.naver.com",
        instagram: "https://www.naver.com"
      }}

      />
    </MembersWrapper>
  </Box>
)

export default Members
