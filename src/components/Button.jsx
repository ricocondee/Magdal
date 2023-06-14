import React from 'react'

const Button = ({text, classname, func}) => {
  return (
    <button className={classname} onClick={func}>{text}</button>
  )
}

export default Button