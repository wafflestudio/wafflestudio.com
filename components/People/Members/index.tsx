import Member from './Member'
import styled from 'styled-components'
import SectionTitle from 'components/Common/SectionTitle'

import members from './members.json'
import SectionDivider from '../../Common/SectionDivider'

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
      title="와플스튜디오 운영팀"
      subTitle="와플스튜디오 21-22 운영팀입니다."
    />
    <MembersWrapper>
      {members.filter((m)=>{return m['op']}).map((member) => (
        <Member
          name={member.name}
          githubId={member.githubId}
          position={member.position}
          introduction={member.introduction}
          github={member.githubId}
          facebook={member.facebook}
          web={member.web}
          instagram={member.instagram}
          op={member.op}
        />
      ))}
    </MembersWrapper>
    <SectionDivider></SectionDivider>
    <SectionTitle
      title="와플스튜디오 구성원"
      subTitle="와플스튜디오의 전 / 현 구성원 입니다."
    />
    <MembersWrapper>
      {members.filter((m)=>{return !m['op']}).map((member) => (
        <Member
          name={member.name}
          githubId={member.githubId}
          position={member.position}
          introduction={member.introduction}
          github={member.githubId}
          facebook={member.facebook}
          web={member.web}
          instagram={member.instagram}
          op={member.op}
        />
      ))}
    </MembersWrapper>
  </Box>
)

export default Members
