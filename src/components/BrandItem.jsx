import React from 'react'
import brandItemStyles from '../styles/brandItem.module.css'

const BrandItem = ({logo, alt}) => {
  return (
    <div className={brandItemStyles.container}>
        <div className={brandItemStyles.imageContainer}>
            <img src={logo} alt={alt} />
        </div>
    </div>
  )
}

export default BrandItem