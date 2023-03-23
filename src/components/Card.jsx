import React from 'react'
import cardStyles from '../styles/card.module.css'
import  '../styles/palette.css'
const Card = ({image, title, info, details, price}) => {
  return (
    <div className={cardStyles.card}>
        <div className={cardStyles.imgContainer}>
          <img src={image} alt="" />
        </div>
        <div className={cardStyles.info}>
          <div className={cardStyles.description}><h4>{title}</h4>
          <p>{info}</p></div>
          <div className={cardStyles.details}><strong>{details}</strong>
          <span className={cardStyles.price}>{price}</span></div>
        </div>
    </div>
  )
}

export default Card