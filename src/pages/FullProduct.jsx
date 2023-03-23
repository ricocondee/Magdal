import React from 'react'
import Skeleton from 'react-loading-skeleton'
import fullProductStyles from '../styles/fullProduct.module.css'


const FullProduct = () => {

  return (
    <div className={fullProductStyles.container}>
        <div className={fullProductStyles.imageContainer}>
            <Skeleton />
        </div>
        <div className={fullProductStyles.detailsContainer}>
            <div>
                <h1>{}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perspiciatis deleniti doloribus pariatur, labore expedita eius quidem.</p>
            </div>
            <div>
                <strong>$300.99</strong>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis.</span>
            </div>
            <div>
                <div>🎈</div>
            </div>
            <div>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>
            <div>
                <button>Buy now</button>
                <button>Add to cart</button>
            </div>
            <div>
                <div>Free</div>
                <div>Return</div>
            </div>
        </div>
    </div>
  )
}

export default FullProduct