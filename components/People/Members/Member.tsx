import Image from 'next/image'
import styled from 'styled-components'

const Box = styled.article`
  position: relative;
  width: 100%;
  height: 270px;
  border-radius: 12px;
  background-color: #f8f5f1;
  overflow: auto;
  //margin: 8px 6px;
`

const Description = styled.div`
  margin: 20px 0 0 20px;
`

const Name = styled.h1`
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;

  @media(max-width: 768px) {
    font-size: 24px;
    line-height: 28px;
  }
`

const Position = styled.h2`
  margin-top: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;

  @media(max-width: 768px) {
    font-weight: 100;
    font-size: 16px;
    line-height: 22px;
  }
`

const Introduction = styled.p`
  margin-top: 22px;
  font-weight: 400;
  font-size: 12px;
  line-height: 14.4px;
`

const Links = styled.div`
  position: absolute;
  right: 9px;
  bottom: 11px;
`

const LinkItem = styled.a`
  margin: 0 6px;
`

interface Links {
  instagram?: string
  facebook?: string
  github?: string
  web?: string
}

interface Props {
  name: String
  githubId: String
  position: String
  introduction: String
  links: Links
}

const Member = ({ name, githubId, position, introduction, links }: Props) => {
  const { instagram, facebook, github, web } = links

  return (
    <Box>
      <Description>
        <Name>{`${name} / ${githubId}`}</Name>
        <Position>{`${position}`}</Position>
        <Introduction>{`${introduction}`}</Introduction>
      </Description>
      <Links>
        {instagram && (
          <LinkItem href={instagram} target='_blank'>
            <Image src='/images/instagram.svg' width='24' height='24' />
          </LinkItem>
        )}
        {facebook && (
          <LinkItem href={facebook} target='_blank'>
            <Image src='/images/facebook.svg' width='24' height='24' />
          </LinkItem>
        )}
        {web && (
          <LinkItem href={web} target='_blank'>
            <Image src='/images/web.svg' width='24' height='24' />
          </LinkItem>
        )}
        {github && (
          <LinkItem href={github} target='_blank'>
            <Image src='/images/github.svg' width='24' height='24' />
          </LinkItem>
        )}
      </Links>
    </Box>
  )
}

export default Member
