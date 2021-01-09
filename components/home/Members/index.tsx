import styled from 'styled-components'
import SectionTitle from 'components/Common/SectionTitle'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 780px;
`

const Members = () => {
  return (
    <Wrapper>
      <SectionTitle
        title="멤버구성 / 모집"
        subTitle="와플스튜디오의 멤버 구성과 모집 단위입니다."
      />
      <h1>TODO</h1>
    </Wrapper>
  )
}

export default Members
