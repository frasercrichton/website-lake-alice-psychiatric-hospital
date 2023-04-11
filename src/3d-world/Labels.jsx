import Label from './Label.jsx'

const Labels = ({ empties, labels }) => {
  const getLabel = id => {
    const label = labels?.find(item => item.id === id)
    return label === undefined ? undefined : label.label
  }

  return empties.map(empty => {
    const labelText = getLabel(empty.name)
    return (
      <>
        {labelText && (
          <Label
            id={empty.name}
            text={labelText}
            position={[empty.position.x, empty.position.y, empty.position.z]}
          />
        )}
      </>
    )
  })
}

export default Labels
