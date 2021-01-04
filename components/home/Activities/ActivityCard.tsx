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
`

const CardImage = styled.div`
  padding-top: 56.25%;
  width: 100%;
  border-radius: 10px;
  background: ${Colors.backDark};
`

const CardTitle = styled.div`
  margin-top: 16px;
  text-align: left;
  font-size: 20px;
  color: ${Colors.textDark}
`

const CardDescription = styled.div`
  margin-top: 10px;
  text-align: left;
  font-size: 16px;
  color: ${Colors.textLight}
`

const ActivityCard = (props: ActivityCardProps) => {
  return (
    <CardWrapper>
      <CardImage />
      <CardTitle>{props.title}</CardTitle>
      <CardDescription>{props.description}</CardDescription>
    </CardWrapper>
  )

}

export default ActivityCard