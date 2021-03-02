import styled from 'styled-components'
import { Colors } from 'util/constant'

interface ActivityCardProps {
  title: String
  description: String
  src?: string
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin-top: 16px;
    text-align: left;
    font-size: 20px;
    color: ${Colors.textDark};
  }

  h3 {
    margin-top: 10px;
    text-align: left;
    font-size: 16px;
    line-height: 20px;
    color: ${Colors.textLight};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
    h2 {
      font-weight: bold;
      font-size: 24px;
    }

    h3 {
      font-size: 16px;
      line-height: 20px;
    }
  }
`

const CardImage = styled.div<{ src?: string }>`
  padding-top: 56.25%;
  width: 100%;
  border-radius: 10px;
  background: center url(${({ src }) => src || '/images/icon_intro.svg'});\
  background-size: ${({ src }) => (src ? 'cover' : 'contain')};
  background-repeat: no-repeat;
`

const ActivityCard = (props: ActivityCardProps) => {
  console.log(props.src)

  return (
    <CardWrapper>
      <CardImage src={props.src} />
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </CardWrapper>
  )
}

export default ActivityCard
