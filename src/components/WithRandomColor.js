import React from 'react'

const WithRandomColor = Component => props => {
  const colors = ['green', 'red', 'blue', 'yellow', 'gray', '#33b6c2', '#a533c2', '#c25d33'];

  const random = colors[Math.floor(Math.random() * colors.length)];

  return (
    <Component style={{backgroundColor: random}} {...props} />
  )
}

export default WithRandomColor