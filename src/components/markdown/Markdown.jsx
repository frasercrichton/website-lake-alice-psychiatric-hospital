import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.css'
import LinkRenderer from './LinkRenderer.jsx'
import EmRenderer from './EmRenderer.jsx'
// import ImageRenderer from './ImageRenderer.jsx'
const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation'

const Markdown = markdownContent => {
  const [markdown, setMarkdown] = useState('')

  const transformImageUri = input =>
    /^https?:/.test(input) ? input : `${CDN_URL}${FOLDER}/${input}`

  useEffect(() => {
    fetch(markdownContent.markdownContent)
      .then(res => res.text())
      .then(md => {
        setMarkdown(md)
      })
  }, [markdownContent.markdownContent])

  return (
    <div className='markdown-container'>
      <ReactMarkdown
        transformImageUri={transformImageUri}
        //   components={{p: 'div', a: LinkRenderer, em: EmRenderer, img: ImageRenderer }}
        components={{ p: 'div', a: LinkRenderer, em: EmRenderer }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Markdown
