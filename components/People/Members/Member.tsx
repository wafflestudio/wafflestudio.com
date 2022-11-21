import Image from 'next/image'
import styled from 'styled-components'

const Box = styled.article`
  position: relative;
  width: 100%;
  height: 270px;
  border-radius: 12px;
  background-color: ${props => (props.op ? "#f8f5f1" : "#f8f5f1")};
  overflow: auto;
`

const Description = styled.div`
  margin: 15px 15px 0;
`

const Name = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 18px;
  }
`

const Position = styled.h2`
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;

  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 14.4px;
  }
`

const Introduction = styled.p`
  margin-top: 22px;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  white-space: pre-line;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`

const Links = styled.div`
  position: absolute;
  right: 9px;
  bottom: 11px;
  background-color: #f8f5f1;

  @media (max-width: 768px) {
    positin: absolute;
    right: 9px;
    bottom: 5px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`

const LinkItem = styled.a`
  margin: 0 6px;

  @media (max-width: 768px) {
    margin: 0;
  }
`

interface Props {
  name: String
  githubId: String
  position: String
  introduction: String
  instagram?: string
  facebook?: string
  github?: string
  web?: string
  op: boolean
}

const Member = ({
  name,
  githubId,
  position,
  introduction,
  instagram,
  facebook,
  web,
  op
}: Props) => {
  return (
    <Box op={op}>
      <Description>
        <Name>{`${name} ${githubId ? `/ ${githubId}` : ''}`}</Name>
        <Position>{`${position}`}</Position>
        <Introduction>{`${introduction}`}</Introduction>
      </Description>
      <Links>
        {instagram && (
          <LinkItem href={`https://instagram.com/${instagram}`}>
            <Image src="/images/instagram.svg" width="24" height="24" />
          </LinkItem>
        )}
        {facebook && (
          <LinkItem href={`https://facebook.com/${facebook}`}>
            <Image src="/images/facebook.svg" width="24" height="24" />
          </LinkItem>
        )}
        {web && (
          <LinkItem href={web}>
            <Image src="/images/web.svg" width="24" height="24" />
          </LinkItem>
        )}
        {githubId && (
          <LinkItem href={`https://github.com/${githubId}`}>
            <Image src="/images/github.svg" width="24" height="24" />
          </LinkItem>
        )}
      </Links>
    </Box>
  )
}

export default Member
