import style from './Image.css'

const Image = ({ caption = '', imageAction, id, thumbnail, url }) => {
  const imageSize = thumbnail ? '320px' : '500px'

  return (
    <div className='image-container'>
      <div>
        <img
          className={style.image}
          src={url}
          // width={imageSize}
          alt={caption}
          onClick={e => imageAction(id)}
        />
      </div>
      {caption !== '' && (
        <div className={style.caption}>Caption: {caption}</div>
      )}
    </div>
  )
}

export default Image
