import styled from 'styled-components'
import SectionTitle from 'components/Common/SectionTitle'
import Member from './Member'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 780px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`
const members = [
  {
    reverse: false,
    src: "/images/rookies.svg",
    status: "Rookies",
    statusComment: "응애! 나 애기루키",
    descriptions: [
      "설명 1번",
      "설명 2번",
      "설명 3번"
    ] 
  },
  {
    reverse: true,
    src: "/images/programmers.svg",
    status: "Programmers",
    statusComment: "프로그래머 데스넨",
    descriptions: [
      "설명 1번",
      "설명 2번",
      "설명 3번"
    ] 
  },
  {
    reverse: false,
    src: "/images/designers.svg",
    status: "얜 뭐냐",
    statusComment: "뭐냐고",
    descriptions: [
      "설명 1번",
      "설명 2번",
      "설명 3번"
    ] 
  }
]

const Members = () => {
  return (
    <Wrapper>
      <SectionTitle
        title="멤버구성 / 모집"
        subTitle="와플스튜디오의 멤버 구성과 모집 단위입니다."
      />
      {
        members.map(member => (
          <Member 
            src={member.src}
            status={member.status}
            statusComment={member.statusComment}
            descriptions={member.descriptions}
            reverse={member.reverse}
          />
        ))
      }
    </Wrapper>
  )
}

export default Members
