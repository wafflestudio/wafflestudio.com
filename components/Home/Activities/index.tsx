import styled from 'styled-components'
import SectionTitle from 'components/Common/SectionTitle'
import ActivityCard from './ActivityCard'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 780px;

  @media (max-width: 768px) {
    width: 90%;
  }
`

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%;
    margin: 30px auto;
  }
`

const Activities = () => {
  const items = [
    {
      title: '코딩모임',
      description:
        '와플 스튜디오에서는 매 주 코딩 모임을 통해 와플 스튜디오 내부 개발자 간의 커뮤니티를 형성합니다.',
      src: '/images/coMo.png',
    },
    {
      title: '루키즈 세미나',
      description:
        '루키 선발 후 한 학기동안 매 주 세미나를 통해 실제 개발을 진행할 수 있을 정도로 교육을 진행합니다.',
      src: '/images/seminar.png',
    },
    {
      title: '와카톤',
      description:
        '와플스튜디오 멤버들끼리 팀을 짜고 며칠 간 집중적으로 소프트웨어 개발을 후 결과물을 외부 기업들에게 심사를 받습니다.',
    },
    {
      title: '홈커밍 데이',
      description:
        '와플스튜디오의 졸업생들과 재학생들이 만나는 자리입니다. 1년에 한 번 진행하며 행사를 통해 다양한 곳에서 일하는 분들과 만날 수 있습니다.',
    },
  ]

  return (
    <Wrapper>
      <SectionTitle
        title="진행 중인 활동"
        subTitle="와플스튜디오에서 정기적으로 진행하는 활동입니다"
      />
      <CardGrid>
        {items.map((item) => (
          <ActivityCard
            key={item.title}
            title={item.title}
            description={item.description}
            src={item.src}
          />
        ))}
      </CardGrid>
    </Wrapper>
  )
}

export default Activities
