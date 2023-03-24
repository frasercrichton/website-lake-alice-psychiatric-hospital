import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.css'
import LinkRenderer from './LinkRenderer.jsx'
import EmRenderer from './EmRenderer.jsx'

const Markdown = markdownContent => {
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    // TODO state should never be undefined
    if (!markdownContent.markdownContent.includes('undefined')) {
      fetch(markdownContent.markdownContent)
        .then(res => res.text())
        .then(md => {
          setMarkdown(md)
        })
    }
  }, [markdownContent, markdownContent.markdownContent])

  return (
    <div className='markdown-container'>
      <ReactMarkdown components={{ p: 'div', a: LinkRenderer, em: EmRenderer }}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Markdown
