import { Intro, Members } from 'components/People'
import ReactMarkdown from 'react-markdown'
import style from 'github-markdown-css/github-markdown.css'
import content from 'markdown/recruit.md'

const Recruit = () => {
  return (
    <>
      <article style={style}>
        <ReactMarkdown source={content} className="markdown-body" />
      </article>
    </>
  )
}

export default Recruit
