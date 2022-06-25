import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import './Markdown.css'
import info from '../content/info.md'

const CDN_URL = process.env.REACT_APP_MORAL_DRIFT_CDN
const FOLDER = '3d-visualisation'


const Markdown = markdownContent => {
  const [markdown, setMarkdown] = useState('')

  const transformImageUri = input =>
    /^https?:/.test(input)
      ? input
      : `${CDN_URL}${FOLDER}/${input}`

  useEffect(() => {
    fetch(info)
      .then(res => res.text())
      .then(md => {
        setMarkdown(md)
      })
  }, [])

  return (
    <div className='markdown-container'>
      <ReactMarkdown transformImageUri={transformImageUri}>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default Markdown
