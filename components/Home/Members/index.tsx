import styled from 'styled-components'
import SectionTitle from 'components/Common/SectionTitle'
import Member from './Member'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 780px;

  @media (max-width: 768px) {
    width: 90%;
  }
`
const members = [
  {
    reverse: false,
    src: '/images/rookies.svg',
    status: 'Rookies',
    statusComment:
      '프로젝트를 진행하기 전 서비스 개발에 필요한 지식을 쌓고 있는 인원',
    descriptions: [
      '한 학기동안 매 주 세미나를 통해 개발에 대해 학습합니다.',
      '세미나와 과제를 모두 완료하면 프로그래머로 승격합니다.',
      '8월 중 모집',
    ],
  },
  {
    reverse: true,
    src: '/images/programmers.svg',
    status: 'Programmers',
    statusComment: '준비가 끝나고 서비스 개발을 진행하는 인원',
    descriptions: [
      '아이디어 기획부터 개발까지, 팀을 구성하여 자율적으로 진행합니다.',
      '1월 중 모집',
    ],
  },
  {
    reverse: false,
    src: '/images/designers.svg',
    status: 'Designers',
    statusComment: '서비스의 디자인은 우리가 책임진다!',
    descriptions: [
      '프로젝트 뿐만 아니라, 와플 스튜디오의 굿즈까지 디자인을 담당합니다.',
      '1월 중 모집',
    ],
  },
]

const Members = () => {
  return (
    <Wrapper>
      <SectionTitle
        title="멤버구성 / 모집"
        subTitle="와플스튜디오의 멤버 구성과 모집 단위입니다."
      />
      {members.map((member) => (
        <Member
          src={member.src}
          status={member.status}
          statusComment={member.statusComment}
          descriptions={member.descriptions}
          reverse={member.reverse}
        />
      ))}
    </Wrapper>
  )
}

export default Members
