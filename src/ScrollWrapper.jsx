import Status from './Status'

const defaultStyle: CSSProperties = {
  height: '101vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#2d1176',
  color: '#fff'
}

const ScrollWrapper = ({ children, style, inView, ...props }) => {
  console.log(inView)
  return (
    <div {...props}>
      <Status inView={inView} />
      <section style={{ ...defaultStyle, ...style }}>
        <h1>⬇ Scroll Down ⬇</h1>
      </section>
      {children}
      <section style={{ ...defaultStyle, ...style }}>
        <h1>⬆︎ Scroll up ⬆︎</h1>
      </section>
    </div>
  )
}

export default ScrollWrapper
