import React from 'react'

// HOC for colors
const WithColor = (Component) => {
  return function WithColorComponent({ color, ...props }) {
    return <Component style={{backgroundColor: color}} {...props} />
  }
}

export default WithColor