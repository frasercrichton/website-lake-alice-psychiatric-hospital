import React, { useEffect, useState } from 'react'
import './AnimatedText.css'

const AnimatedText = ({ text, stepProgress }) => {
  const [content, setContent] = useState(null)

  const animateLetters = (text, parseText, stepProgress) => {
    const offsetScroll = text.length * (stepProgress * 2)

    return text.split('').map((char, index) => {
      return parseText(offsetScroll, char, index)
    })
  }

  const parseText = (scroll, char, index) => {
    if (scroll < index + 1) {
      return (
        <span
          className='letter'
          key={`text-${index}`}
          style={{ '--percentage': 0 }}
        >
          {char}
        </span>
      )
    } else {
      return (
        <span
          className='letter'
          key={`text-${index}`}
          style={{ '--percentage': 0.7 }}
        >
          {char}
        </span>
      )
    }
  }

  useEffect(() => {
    setContent(animateLetters(text, parseText, stepProgress))
  }, [stepProgress, text.content, text])

  return <>{content}</>
}

export default AnimatedText
