import './Content.css'
import Video from './components/Video'
import Button from './components/Button'
const Content = ({ content, setContent }) => {
  const url = 'https://vimeo.com/565389024'

  return (
    <div key='content' className='content-wrapper active'>
      <h2>{content}</h2>

      {content === 'location' && (
        <div key='location'>
          <img src='https://d10yslqdemxz8r.cloudfront.net/3d-visualisation/fc-20220425-00025-Screen%20Shot%202022-04-25%20at%2010.15.47%20PM.jpg' />
          <p>No. 7 Line, State Highway 3 2km from Bulls</p>
        </div>
      )}

      {content === 'testimony' && (
        <div key='video'>
          <Video url={url} />
          <p>
            <a href='https://www.abuseincare.org.nz/our-progress/library/v/268/statement-of-malcolm-richards-for-lake-alice-child-and-adolescent-unit-hearing'>
              Statement of Malcolm Richards for Lake Alice Child and Adolescent
              Unit hearing
            </a>
          </p>
          <p>
            <a href='https://www.abuseincare.org.nz/our-inquiries/abuse-in-state-psychiatric-care/public-hearing-lake-alice-child-and-adolescent-unit/'>
              Public hearing: Lake Alice Child and Adolescent Unit Nohoanga
              tūmatanui: Te Wāhanga Tamaiti, Taitamariki o Lake Alice
            </a>
            Witness Statements
          </p>
        </div>
      )}

      {content === 'architecture' && (
        <div key='architecture'>
          text
        </div>
      )}

      <Button action={setContent} />
    </div>
  )
}

export default Content
