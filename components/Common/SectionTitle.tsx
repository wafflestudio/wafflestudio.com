import styled from 'styled-components'
import { Colors } from 'util/constant'


const TitleText = styled.div`
  font-weight: bold;
  text-align: left;
  font-size: 24px;
  color: ${Colors.textDark}
`

const SubTitleText = styled.div`
  margin-top: 6px;
  margin-bottom: 30px;
  text-align: left;
  font-size: 20px;
  color: ${Colors.textLight}
`

const SectionTitle = (props: { title: String, subTitle: String }) => {
  return (<>
    <TitleText>{props.title}</TitleText>
    <SubTitleText>{props.subTitle}</SubTitleText>
  </>)
}

export default SectionTitle