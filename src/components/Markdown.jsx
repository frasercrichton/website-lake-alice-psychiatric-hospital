import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.css'

const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation'

function LinkRenderer(props: any) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  );
}

const Markdown = markdownContent => {
  const [markdown, setMarkdown] = useState('')
console.log(markdownContent.markdownContent)

  const transformImageUri = input =>
    /^https?:/.test(input)
      ? input
      : `${CDN_URL}${FOLDER}/${input}`

  useEffect(() => {
    fetch(markdownContent.markdownContent)
      .then(res => res.text())
      .then(md => {
        setMarkdown(md)
      })
  }, [])

  return (
    <div className='markdown-container'>
      <ReactMarkdown transformImageUri={transformImageUri} components={{ a: LinkRenderer}}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Markdown
