import styled from 'styled-components'
import Image from 'next/image'
import { Colors } from 'util/constant'

const Description = styled.div`
  background-color: ${Colors.backDark};
  border-radius: 12px;
  width: 600px;
  height: 185px;
  margin: 0 15px;
  
  h1 {
    margin: 18px 0 0 22px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
  }
  
  h2, li {
    font-weight: 400;
    font-size: 16px;
    line-height: 19.2px;
    color: ${Colors.textLight}
  }

  ul {
    list-style: disc;
    list-style-position: inside;
    padding-left: 31px;
  }
  
  h2 {
    margin-left:22px;
    margin-top: 4px;
  }

  li {
    margin-top: 11px;
  }
`

const Wrapper = styled.article<{reverse: boolean}>`
  display: flex;
  flex-direction: ${({ reverse }) => (!reverse ? 'row' : 'row-reverse')};
  margin: 9px;

  @media (max-width: 768px) {
    width: 95%;
    margin: 9px auto;
    align-content: center;
  }

  ${Description}
`

interface Props {
  reverse: boolean
  status: string
  statusComment: string
  descriptions: Array<string>
  src: string
}

const Member = ({
  reverse,
  status,
  statusComment,
  descriptions,
  src,
}: Props) => {
  console.log(src)

  return (
    <Wrapper reverse={reverse}>
      <Image src={src}  width="100" height="115"/>
      <Description>
        <h1>{status}</h1>
        <h2>{statusComment}</h2>
        <ul>
          {descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
        </ul>
      </Description>
    </Wrapper>
  )
}

export default Member
