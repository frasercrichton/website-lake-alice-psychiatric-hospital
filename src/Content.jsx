import './Content.css'
import Video from './components/Video'
import Button from './components/Button'
const Content = ({ content, setContent }) => {
  const url = 'https://vimeo.com/565389024'
  const wrapperClass =
    content === '' ? 'content-wrapper' : 'content-wrapper active'
  return (
    <div className={wrapperClass}>
      <h2>Testimony</h2>
      <Video url={url} />
      <p><a href='https://www.abuseincare.org.nz/our-progress/library/v/268/statement-of-malcolm-richards-for-lake-alice-child-and-adolescent-unit-hearing'>Statement of Malcolm Richards for Lake Alice Child and Adolescent Unit hearing</a></p>
      <Button action={setContent} />
    </div>
  )
}

export default Content
