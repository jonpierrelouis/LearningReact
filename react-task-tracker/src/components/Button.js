import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {

  return (
    <button className="btn" onClick={props.onClick} style={{backgroundColor: props.color}}>{props.text}</button>
  )
}

Button.defaultProps = {
    color: 'red'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button