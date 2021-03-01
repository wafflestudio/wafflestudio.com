import Member from './Member'
import styled from 'styled-components'
import SectionTitle from 'components/Common/SectionTitle'

const Box = styled.section`
  width: 780px;
  margin: 100px auto;

  @media (max-width: 768px) {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`

const MembersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  margin: 30px 8px 30px 8px;

  @media (min-width: 510px) and (max-width: 768px) {
    align-self: center;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 0px;
    margin-top: 30px;
  }

  @media (max-width: 510px) {
    align-self: center;
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0px;
    margin-top: 30px;
  }
`

const Members = () => (
  <Box>
    <SectionTitle
      title="와플스튜디오 구성원"
      subTitle="와플스튜디오의 전 / 현 구성원 입니다."
    />
    <MembersWrapper>
      <Member
        name={'김상민'}
        githubId={'sanggggg'}
        position={'Android Developer'}
        introduction={
          '사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 v v v사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개 사람에 대한 소개사람에 대한 소개 사람에 대한 소개 v 사람에 대한 소개 사람에 대한 소개'
        }
        links={{
          github: 'https://www.naver.com',
          facebook: 'https://www.naver.com',
          web: 'https://www.naver.com',
          instagram: 'https://www.naver.com',
        }}
      />
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
    </MembersWrapper>
  </Box>
)

export default Members
