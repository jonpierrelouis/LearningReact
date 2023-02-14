import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
  return (
    <button className="btn" style={{backgroundColor: props.color}}>{props.text}</button>
  )
}

Button.defaultProps = {
    color: 'red'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button