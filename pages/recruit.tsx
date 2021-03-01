import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import style from 'github-markdown-css/github-markdown.css'
import content from 'markdown/recruit.md'

const Wrapper = styled.section`
  height: 100%;
`

const Description = styled.article`
  margin-top: 100px;
  height: 100%;

  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 30px;
  }

  ${style}
`

const Recruit = () => {
  return (
    <Wrapper>
      <Description>
        <ReactMarkdown source={content} className="markdown-body" />
      </Description>
    </Wrapper>
  )
}

export default Recruit
