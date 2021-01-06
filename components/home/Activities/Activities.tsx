import styled from 'styled-components'
import SectionTitle from '../../SectionTitle'
import ActivityCard from './ActivityCard'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 780px;
`

const CardGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`

const Activities = () => {
  const items = [
    { 'title': '코딩모임', 'description': '와플 스튜디오에서는 매 주 코딩 모임을 통해 와플 스튜디오 내부 개발자 간의 커뮤니티를 형성합니다.' },
    { 'title': '루키즈 세미나', 'description': '와플 스튜디오에서는 매 주 코딩 모임을 통해 와플 스튜디오 내부 개발자 간의 커뮤니티를 형성합니다.' },
    { 'title': '와카톤', 'description': '와플 스튜디오에서는 매 주 코딩 모임을 통해 와플 스튜디오 내부 개발자 간의 커뮤니티를 형성합니다.' },
    { 'title': '홈커밍 데이', 'description': '와플 스튜디오에서는 매 주 코딩 모임을 통해 와플 스튜디오 내부 개발자 간의 커뮤니티를 형성합니다.' },
  ]
  return (
    <Wrapper>
      <SectionTitle title='진행 중인 활동' subTitle='와플스튜디오에서 정기적으로 진행하는 활동입니다' />
      <CardGrid>
        {
          items.map(item =>
            <ActivityCard title={item.title} description={item.description} />,
          )
        }
      </CardGrid>
    </Wrapper>
  )

}

export default Activities