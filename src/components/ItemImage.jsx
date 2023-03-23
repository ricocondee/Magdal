import React from 'react'
import itemImgStyles from '../styles/itemImage.module.css'
const ItemImage = ({image, alt, category}) => {
  return (
    <div className={itemImgStyles.itemImage}>
      <div className={itemImgStyles.circle}>
        <img src={image} alt={alt} />
      </div>
        <span>{category}</span>
    </div>
  )
}

export default ItemImage