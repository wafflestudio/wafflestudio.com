import styled from 'styled-components'
import { Colors } from '../../../util/constant'

interface ActivityCardProps {
  title: String;
  description: String;

}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin-top: 16px;
    text-align: left;
    font-size: 20px;
    color: ${Colors.textDark}
  }

  h3 {
    margin-top: 10px;
    text-align: left;
    font-size: 16px;
    color: ${Colors.textLight}
  }
`

const CardImage = styled.div`
  padding-top: 56.25%;
  width: 100%;
  border-radius: 10px;
  background: ${Colors.backDark};
`

const ActivityCard = (props: ActivityCardProps) => {
  return (
    <CardWrapper>
      <CardImage />
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </CardWrapper>
  )

}

export default ActivityCard