const getLabel = (id, labels) => {
  const label = labels?.find(item => item.id === id)
  return label === undefined ? undefined : label.label
}

export default getLabel
